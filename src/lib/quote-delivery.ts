import { site } from "@/content/site";
import { portfolioSizeLabel, propertyTypeLabel, type ProposalSubmission } from "@/lib/proposal-options";
import { quoteServiceLabel, type QuoteSubmission } from "@/lib/quote-options";

export type DeliveryResult = {
  channel: "email" | "whatsapp";
  status: "sent" | "skipped" | "failed";
  detail?: string;
};

const DEFAULT_WHATSAPP_RECIPIENT = "447593838658";
const REQUEST_TIMEOUT_MS = 10_000;

type Lead = {
  /** Email subject line. */
  subject: string;
  /** First line of the WhatsApp message. */
  heading: string;
  lines: readonly (readonly [label: string, value: string])[];
  replyTo?: string;
};

function replyOnWhatsApp(phone: string) {
  return ["Reply on WhatsApp", `https://wa.me/${phone.replace(/\D/g, "")}`] as const;
}

function quoteLead(quote: QuoteSubmission): Lead {
  return {
    subject: `Free quote request: ${quoteServiceLabel(quote.service)} (${quote.name})`,
    heading: "New free quote request",
    replyTo: quote.email || undefined,
    lines: [
      ["Name", quote.name],
      ["Phone / WhatsApp", quote.phone],
      ["Building / Area", quote.location],
      ["Service", quoteServiceLabel(quote.service)],
      ["Email", quote.email || "-"],
      ["Notes", quote.notes || "-"],
      ["Submitted from", quote.source],
      ["Lead source", quote.attribution || "Direct / unknown"],
      replyOnWhatsApp(quote.phone),
    ],
  };
}

function proposalLead(proposal: ProposalSubmission): Lead {
  return {
    subject: `Property manager proposal request: ${proposal.company} (${proposal.name})`,
    heading: "New property manager proposal request",
    replyTo: proposal.email,
    lines: [
      ["Name", proposal.name],
      ["Company", proposal.company],
      ["Phone / WhatsApp", proposal.phone],
      ["Email", proposal.email],
      ["Type of properties", propertyTypeLabel(proposal.propertyType)],
      ["Number of properties", portfolioSizeLabel(proposal.portfolioSize)],
      ["Areas covered", proposal.areas || "-"],
      ["What they need", proposal.needs || "-"],
      ["Submitted from", proposal.source],
      ["Lead source", proposal.attribution || "Direct / unknown"],
      replyOnWhatsApp(proposal.phone),
    ],
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function postJson(url: string, headers: Record<string, string>, body: unknown) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`${response.status} ${text.slice(0, 200)}`);
  }
}

async function sendEmail(lead: Lead): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { channel: "email", status: "skipped", detail: "RESEND_API_KEY not set" };

  const { lines } = lead;

  try {
    await postJson(
      "https://api.resend.com/emails",
      { Authorization: `Bearer ${apiKey}` },
      {
        from: process.env.QUOTE_EMAIL_FROM ?? `${site.name} Website <onboarding@resend.dev>`,
        to: [process.env.QUOTE_EMAIL_TO ?? site.email],
        reply_to: lead.replyTo,
        subject: lead.subject,
        text: lines.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${lines
          .map(
            ([label, value]) =>
              `<tr><td style="color:#5e6e80;vertical-align:top"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}</table>`,
      },
    );
    return { channel: "email", status: "sent" };
  } catch (error) {
    return { channel: "email", status: "failed", detail: String(error) };
  }
}

/**
 * Sends through the WhatsApp Business Cloud API.
 * Business-initiated messages to a number that has not messaged the business in the
 * last 24 hours must use an approved template, so set WHATSAPP_TEMPLATE_NAME for
 * reliable delivery (one body variable receives the full enquiry).
 */
async function sendWhatsApp(lead: Lead): Promise<DeliveryResult> {
  const token = process.env.WHATSAPP_CLOUD_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneNumberId) {
    return { channel: "whatsapp", status: "skipped", detail: "WhatsApp Cloud API not configured" };
  }

  const to = (process.env.QUOTE_WHATSAPP_TO ?? DEFAULT_WHATSAPP_RECIPIENT).replace(/\D/g, "");
  const { lines } = lead;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME;

  const payload = templateName
    ? {
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: templateName,
          language: { code: process.env.WHATSAPP_TEMPLATE_LANG ?? "en" },
          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: lines
                    .map(([label, value]) => `${label}: ${value}`)
                    .join(" | ")
                    .replace(/\s+/g, " ")
                    .slice(0, 900),
                },
              ],
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: {
          body: [lead.heading, "", ...lines.map(([label, value]) => `${label}: ${value}`)].join("\n"),
        },
      };

  try {
    await postJson(
      `https://graph.facebook.com/v21.0/${encodeURIComponent(phoneNumberId)}/messages`,
      { Authorization: `Bearer ${token}` },
      payload,
    );
    return { channel: "whatsapp", status: "sent" };
  } catch (error) {
    return { channel: "whatsapp", status: "failed", detail: String(error) };
  }
}

function deliver(lead: Lead) {
  return Promise.all([sendEmail(lead), sendWhatsApp(lead)]);
}

export const deliverQuote = (quote: QuoteSubmission) => deliver(quoteLead(quote));
export const deliverProposal = (proposal: ProposalSubmission) => deliver(proposalLead(proposal));
