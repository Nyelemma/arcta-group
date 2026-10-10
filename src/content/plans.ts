export type CarePlan = {
  slug: "complete" | "essential";
  name: string;
  summary: string;
  label?: string;
  /** Lead-in shown above the list when a plan builds on another. */
  intro?: string;
  includes: string[];
  cta: string;
};

/** Listed in page order: Complete first, so it also sits on top when the cards stack on mobile. */
export const carePlans: CarePlan[] = [
  {
    slug: "complete",
    name: "Complete Home Care",
    label: "Recommended",
    summary: "For homeowners who want everything looked after.",
    intro: "Everything in Essential, plus:",
    includes: [
      "1 full coil deep clean per AC unit per year",
      "1 duct clean per AC unit per year",
      "AED 400 annual upholstery credit (sofa, mattress, carpet or rug cleaning)",
      "2 detailed plumbing and electrical checks per year",
      "2 handyman labour hours per year",
      "Higher-priority response",
      "15% off repair labour",
      "Detailed annual home-condition report",
    ],
    cta: "Get a quote for Complete",
  },
  {
    slug: "essential",
    name: "Essential Home Care",
    summary: "Preventative AC maintenance and priority support.",
    includes: [
      "4 preventative AC services per year",
      "Filter and grille cleaning",
      "Drain tray cleaning and drain flushing",
      "Cooling and performance checks",
      "Visual plumbing and electrical checks during visits",
      "Priority booking",
      "10% off repair labour",
      "Annual home-condition summary",
    ],
    cta: "Get a quote for Essential",
  },
];

export const planFootnote =
  "Parts and corrective repairs are quoted separately. Plans are priced based on your property and number of AC units.";

export const howItWorks = [
  {
    title: "Tell us about your home",
    text: "Number of AC units, apartment or villa.",
  },
  {
    title: "Get your plan and quote",
    text: "Priced for your property, with no surprises.",
  },
  {
    title: "We take it from there",
    text: "Visits scheduled for the year, with photos and a report after each one.",
  },
] as const;

export const annualFaqs = [
  {
    question: "How is the price worked out?",
    answer:
      "It depends on your property and how many AC units you have. Send us your details and we'll quote you, free.",
  },
  {
    question: "What if something breaks between visits?",
    answer:
      "You get priority booking and discounted repair labour. Parts and repairs are quoted before any work starts.",
  },
  {
    question: "How does the upholstery credit work?",
    answer:
      "You get AED 400 a year to use on sofa, mattress, carpet or rug cleaning. If a job costs more, you pay the difference. Unused credit doesn't roll over.",
  },
  {
    question: "Can I upgrade from Essential to Complete?",
    answer:
      "Yes, anytime. You just pay the difference for the remaining months of your plan, and the extra services are added straight away.",
  },
  {
    question: "How long is the contract, and can I cancel?",
    answer:
      "Plans run for 12 months, paid upfront or in four quarterly payments. You can cancel for a full refund within 14 days, as long as we haven't visited yet. After that, you can cancel with 30 days' notice. We'll only charge for services you've already received, at our standard rates, minus what you've already paid.",
  },
];
