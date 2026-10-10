import { EMAIL_PATTERN } from "@/lib/quote-options";

export const propertyTypes = [
  { value: "holiday-homes", label: "Holiday homes / Short-term rentals" },
  { value: "apartments", label: "Residential apartments" },
  { value: "villas", label: "Villas" },
  { value: "mixed", label: "Mixed portfolio" },
] as const;

export const portfolioSizes = [
  { value: "1-5", label: "1 to 5" },
  { value: "6-20", label: "6 to 20" },
  { value: "21-50", label: "21 to 50" },
  { value: "50+", label: "50+" },
] as const;

export type PropertyTypeValue = (typeof propertyTypes)[number]["value"];
export type PortfolioSizeValue = (typeof portfolioSizes)[number]["value"];

export const propertyTypeLabel = (value: string) =>
  propertyTypes.find((option) => option.value === value)?.label ?? value;

export const portfolioSizeLabel = (value: string) =>
  portfolioSizes.find((option) => option.value === value)?.label ?? value;

export type ProposalSubmission = {
  name: string;
  company: string;
  phone: string;
  email: string;
  propertyType: PropertyTypeValue;
  portfolioSize: PortfolioSizeValue;
  areas: string;
  needs: string;
  source: string;
  attribution?: string;
};

export type ProposalFieldErrors = Partial<Record<keyof ProposalSubmission, string>>;

export function validateProposal(input: ProposalSubmission): ProposalFieldErrors {
  const errors: ProposalFieldErrors = {};
  const phoneDigits = input.phone.replace(/\D/g, "");

  if (input.name.trim().length < 2) errors.name = "Please add your full name.";
  if (input.company.trim().length < 2) errors.company = "Please add your company name.";
  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = "Please add a phone or WhatsApp number we can reach you on.";
  }
  if (!EMAIL_PATTERN.test(input.email.trim())) errors.email = "Please add a valid email address.";
  if (!propertyTypes.some((option) => option.value === input.propertyType)) {
    errors.propertyType = "Please choose the type of properties you manage.";
  }
  if (!portfolioSizes.some((option) => option.value === input.portfolioSize)) {
    errors.portfolioSize = "Please choose how many properties you manage.";
  }
  if (input.areas.length > 300) errors.areas = "Please keep this under 300 characters.";
  if (input.needs.length > 1000) errors.needs = "Please keep this under 1,000 characters.";
  return errors;
}
