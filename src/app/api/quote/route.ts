import { deliverQuote } from "@/lib/quote-delivery";
import { deliveryResponse, guardFormRequest, json, text } from "@/lib/form-guard";
import { normalizePhone, validateQuote, type QuoteServiceValue, type QuoteSubmission } from "@/lib/quote-options";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const guard = await guardFormRequest(request);
  if (!guard.ok) return guard.response;
  const raw = guard.body;

  const quote: QuoteSubmission = {
    name: text(raw.name, 100),
    phone: normalizePhone(text(raw.phone, 30)),
    location: text(raw.location, 120),
    service: text(raw.service, 40) as QuoteServiceValue,
    email: text(raw.email, 254),
    notes: text(raw.notes, 1000),
    source: text(raw.source, 120) || "website",
    attribution: text(raw.attribution, 300),
  };

  const errors = validateQuote(quote);
  if (Object.keys(errors).length) return json({ error: "validation", fields: errors }, 422);

  return deliveryResponse("quote", await deliverQuote(quote));
}
