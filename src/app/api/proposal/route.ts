import { deliverProposal } from "@/lib/quote-delivery";
import { deliveryResponse, guardFormRequest, json, text } from "@/lib/form-guard";
import {
  validateProposal,
  type PortfolioSizeValue,
  type PropertyTypeValue,
  type ProposalSubmission,
} from "@/lib/proposal-options";
import { normalizePhone } from "@/lib/quote-options";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const guard = await guardFormRequest(request);
  if (!guard.ok) return guard.response;
  const raw = guard.body;

  const proposal: ProposalSubmission = {
    name: text(raw.name, 100),
    company: text(raw.company, 120),
    phone: normalizePhone(text(raw.phone, 30)),
    email: text(raw.email, 254),
    propertyType: text(raw.propertyType, 40) as PropertyTypeValue,
    portfolioSize: text(raw.portfolioSize, 20) as PortfolioSizeValue,
    areas: text(raw.areas, 300),
    needs: text(raw.needs, 1000),
    source: text(raw.source, 120) || "property-managers",
    attribution: text(raw.attribution, 300),
  };

  const errors = validateProposal(proposal);
  if (Object.keys(errors).length) return json({ error: "validation", fields: errors }, 422);

  return deliveryResponse("proposal", await deliverProposal(proposal));
}
