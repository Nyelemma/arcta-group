export const site = {
  name: "Arcta Group",
  legalName: "Arcta Group",
  url: "https://arctagroup.ae",
  tagline: "AC & Home Maintenance",
  description:
    "Professional AC services, home maintenance and upholstery care across Dubai and the wider UAE. Clear quotes, documented jobs and direct communication.",
  phoneDisplay: "+971 50 554 0919",
  phoneTel: "+971505540919",
  email: "info@arctagroup.ae",
  /** Single source for the WhatsApp destination. */
  whatsappNumber: "971505540919",
  whatsappMessage:
    "Hi Arcta Group, I'd like to request a service for my property.",
  instagram: "https://www.instagram.com/arcta.ae/",
  hours: "Sun–Sat, 24/7 emergency support",
  replyPromise: "We reply via WhatsApp within the hour.",
  coverage: "Serving Dubai & the wider UAE",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  priceRange: "$$",
  currenciesAccepted: "AED",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  languages: ["English", "Arabic"],
  areas: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "UAE Wide",
  ],
  ogImage: "/images/technician.jpg",
} as const;

export function whatsappHref(message?: string) {
  const text = message ?? site.whatsappMessage;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telHref() {
  return `tel:${site.phoneTel}`;
}

export function mailHref(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}

export const mobileWhyPoints = [
  {
    title: "You see the price first.",
    text: "Written quote before we touch anything.",
  },
  {
    title: "You see the proof after.",
    text: "Before and after photos sent to your WhatsApp.",
  },
  {
    title: "We fix the cause.",
    text: "You get a note on what caused it and how to stop it coming back.",
  },
] as const;

export const processSteps = [
  {
    title: "Request",
    text: "Message us on WhatsApp, call, or send the form.",
  },
  {
    title: "Clear quote",
    text: "We agree a convenient time and return a free, itemised quote, usually within the hour.",
  },
  {
    title: "The visit",
    text: "Uniformed technicians arrive as agreed, do the work carefully, and leave the property as they found it.",
  },
  {
    title: "Documentation",
    text: "Before and after photos and a written report follow the visit, so you can see exactly what was done.",
  },
  {
    title: "Follow-up",
    text: "We stay available for questions, and for care that should happen on a schedule rather than in a panic.",
  },
] as const;

export const whyPoints = [
  {
    title: "Clear quotes before work",
    text: "Know the scope and price before anything proceeds.",
  },
  {
    title: "Before & after documentation",
    text: "Clear photos and service notes so you know exactly what was done.",
  },
  {
    title: "Professional, respectful technicians",
    text: "Clean presentation, clear communication and care inside your home.",
  },
  {
    title: "Preventative, not just reactive",
    text: "We look for the cause of the issue and recommend ways to prevent it happening again.",
  },
] as const;

export const founderStory = {
  heading: "Why I started Arcta",
  paragraphs: [
    "Football taught me that standards aren't optional. As a professional footballer and Sierra Leone international, my body is my job, and a few years ago a bacterial infection in my lung, picked up from the air around me, made me far more aware of the air I breathe.",
    "When my wife and I moved to Dubai with our daughter, who was just 10 months old, they both started struggling with breathing problems and allergies. As parents, it was frightening.",
    "The doctor suggested we get our AC units checked and cleaned, in case dust, build-up or mould was part of the problem. When we saw the photos and footage of what was inside them, I couldn't believe it. We'd been breathing that air every day without knowing.",
    "That's why I started Arcta. I don't want other families to go through what we did, and I want people in Dubai to know what can build up inside their AC.",
    "So we do it properly: a clear quote before any work starts, careful technicians, and before and after photos of every job, so you can see exactly what was in there and what we've done.",
    "The standard I expect for my own family is the one we bring to yours.",
  ],
  name: "Alie Sesay",
  role: "Founder, Arcta Group",
} as const;

export const homepageFounderStory = {
  heading: "Why Arcta exists",
  paragraphs: [
    "When we moved to Dubai, my wife and 10-month-old daughter started struggling with breathing problems and allergies. The doctor suggested getting our ACs cleaned, and when we saw what was inside them, it was frightening.",
    "I started Arcta so other families don't have to go through that.",
  ],
  attribution: "Alie Sesay, Founder",
} as const;

export const managerPoints = [
  "Fast communication",
  "Clear quotes",
  "Job documentation",
  "Service reports",
  "Reliable technicians",
  "Multiple property support",
  "Preventative maintenance",
] as const;

/**
 * Client shown in the "Trusted by" strip on the property managers page.
 * Leave as `null` to keep the strip hidden until permission and the logo are confirmed.
 * Example: { name: "Client name", logo: { src: "/clients/client.svg", width: 160, height: 48 } }
 */
export type TrustedClient = {
  name: string;
  logo: { src: string; width: number; height: number };
};

export const trustedClient: TrustedClient | null = null;
