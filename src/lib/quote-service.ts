import { getCategory, getService } from "@/content/services";
import type { QuoteServiceValue } from "@/lib/quote-options";

const directMatches: readonly string[] = [
  "ac-servicing",
  "ac-repairs",
  "coil-cleaning",
  "duct-cleaning",
  "drain-flushing",
  "annual-home-care",
];

/** Maps any service, category or landing-page slug to the closest quote form option. */
export function quoteServiceFor(slug: string): QuoteServiceValue {
  if (directMatches.includes(slug)) return slug as QuoteServiceValue;

  const category = getService(slug)?.category ?? getCategory(slug)?.slug;
  if (category === "ac-services") return "ac-servicing";
  if (category === "home-maintenance") return "home-maintenance";
  if (category === "upholstery-care") return "upholstery-care";
  return "other";
}
