export const quoteServices = [
  { value: "ac-servicing", label: "AC Servicing" },
  { value: "ac-repairs", label: "AC Repairs" },
  { value: "coil-cleaning", label: "Coil Cleaning" },
  { value: "duct-cleaning", label: "Duct Cleaning" },
  { value: "drain-flushing", label: "Drain Flushing" },
  { value: "home-maintenance", label: "Home Maintenance" },
  { value: "upholstery-care", label: "Upholstery Care" },
  { value: "annual-home-care", label: "Annual Home Care" },
  { value: "other", label: "Not sure / Other" },
] as const;

export type QuoteServiceValue = (typeof quoteServices)[number]["value"];

export const quoteServiceLabel = (value: string) =>
  quoteServices.find((option) => option.value === value)?.label ?? value;

export type QuoteSubmission = {
  name: string;
  phone: string;
  location: string;
  service: QuoteServiceValue;
  email: string;
  notes: string;
  source: string;
  /** Where the visitor came from, captured in the browser (e.g. "Google Ads · campaign: x"). */
  attribution?: string;
};

export type QuoteFieldErrors = Partial<Record<keyof QuoteSubmission, string>>;

export const DEFAULT_PHONE_PREFIX = "+971 ";

/** Tidies common UAE number entries after the +971 default: stray trunk zeros, pasted full numbers, 00 prefixes. */
export function normalizePhone(value: string) {
  let phone = value.trim().replace(/\s+/g, " ");
  phone = phone.replace(/^\+971\s+(?=\+)/, "");
  const afterPrefix = phone.match(/^\+971\s*0+(\d.*)$/);
  if (afterPrefix) return `+971 ${afterPrefix[1]}`;
  if (/^00\d/.test(phone)) return `+${phone.slice(2)}`;
  if (/^0\d/.test(phone)) return `+971 ${phone.slice(1)}`;
  if (/^971\d/.test(phone)) return `+${phone}`;
  return phone;
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuote(input: QuoteSubmission): QuoteFieldErrors {
  const errors: QuoteFieldErrors = {};
  const phoneDigits = input.phone.replace(/\D/g, "");

  if (input.name.trim().length < 2) errors.name = "Please add your full name.";
  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = "Please add a phone or WhatsApp number we can reach you on.";
  }
  if (input.location.trim().length < 2) errors.location = "Please add your building name or area.";
  if (!quoteServices.some((option) => option.value === input.service)) {
    errors.service = "Please choose the service you need.";
  }
  if (input.email.trim() && !EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }
  if (input.notes.length > 1000) errors.notes = "Please keep notes under 1,000 characters.";
  return errors;
}
