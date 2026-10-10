import type { Faq } from "@/content/services";

export type FurtherService = {
  slug: "deep-cleaning" | "snagging";
  name: string;
  eyebrow: string;
  headline: string;
  lede: string;
  paragraphs: string[];
  groups: { title: string; items: string[] }[];
  benefits: { title: string; text: string }[];
  image: string;
  imageAlt: string;
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
  cta: string;
};

export const furtherServices: FurtherService[] = [
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning & Sanitisation",
    eyebrow: "Home care",
    headline: "A cleaner, more thorough reset.",
    lede: "Deep cleaning and sanitisation for homes that need more than a surface clean — including after works, a vacancy, or a long stretch of ordinary use.",
    paragraphs: [
      "Surface cleaning misses what builds up on high-touch areas, in kitchens and bathrooms, and in the corners of a home that has been lived in properly. A deep clean is a room-by-room reset of those places.",
      "Where the brief calls for it, we also use ozone treatment, electrostatic spraying and steam. Each method is chosen for the property, explained before we start, and documented afterwards — the same standard as every Arcta visit.",
    ],
    groups: [
      {
        title: "Deep home cleaning",
        items: [
          "Room-by-room deep clean",
          "Kitchens and bathrooms",
          "High-touch surfaces",
          "Fixtures and fittings",
        ],
      },
      {
        title: "Ozone treatment",
        items: [
          "Odour neutralisation",
          "Treatment of hard-to-reach areas",
          "Useful after renovations or vacancies",
        ],
      },
      {
        title: "Electrostatic spraying",
        items: [
          "Even surface coverage",
          "Disinfectant application",
          "Awkward and vertical areas",
        ],
      },
      {
        title: "Steam cleaning",
        items: [
          "High-temperature steam",
          "Upholstery, tiles and grout",
          "Kitchen areas",
        ],
      },
    ],
    benefits: [
      {
        title: "Beyond a weekly clean",
        text: "Built-up grime and missed areas are the point of the visit, not a quick once-over.",
      },
      {
        title: "Method for the brief",
        text: "Ozone, electrostatic spraying and steam are used when they suit the home — not by default.",
      },
      {
        title: "Fresher rooms",
        text: "Odours from cooking, moisture and long vacancy are a common reason to book.",
      },
      {
        title: "Fully documented",
        text: "Before-and-after photos and a same-day style report, as with the rest of our work.",
      },
    ],
    image: "/images/interior.jpg",
    imageAlt: "A bright open-plan living and kitchen space prepared for a deep clean",
    faqs: [
      {
        question: "What is the difference between deep cleaning and regular cleaning?",
        answer:
          "Deep cleaning is a detailed reset of built-up grime, hidden areas and high-touch surfaces. It suits a move-in, a post-renovation clean, or a periodic refresh — not a weekly tidy.",
      },
      {
        question: "What is ozone treatment used for?",
        answer:
          "Ozone is used to neutralise odours and treat areas that are awkward to reach, including after renovations or when a home has been closed up.",
      },
      {
        question: "Is electrostatic spraying suitable for homes?",
        answer:
          "Yes. It is a way of applying disinfectant evenly, including on vertical and awkward surfaces. We explain the method and any re-entry timing before we begin.",
      },
    ],
    seoTitle: "Deep Cleaning Dubai | Home Sanitisation",
    seoDescription:
      "Deep cleaning, ozone treatment, electrostatic spraying and steam cleaning for Dubai homes. Documented visits from Arcta Group.",
    cta: "Book deep cleaning",
  },
  {
    slug: "snagging",
    name: "Snagging Inspections",
    eyebrow: "Before you commit",
    headline: "See the property clearly before you accept it.",
    lede: "Independent snagging inspections for new builds, pre-handover and resale homes, with a photographic report you can act on.",
    paragraphs: [
      "A new or newly purchased home is too large a decision to inspect casually. Snagging is an independent look at finishes, services and the defects that are easier to resolve before you take them on.",
      "Every defect we record is photographed and described, so the report can be handed to a developer, a seller or an agent. The inspection covers more than 120 checks, from cooling and drainage to joinery and external areas.",
    ],
    groups: [
      {
        title: "Inspection types",
        items: [
          "New build snagging",
          "Pre-handover inspections",
          "Resale condition reports",
        ],
      },
      {
        title: "What we look at",
        items: [
          "Air conditioning and drainage",
          "Electrical fittings and lighting",
          "Plumbing and hot water",
          "Paint, tiling, doors and windows",
          "Joinery, kitchens and wardrobes",
          "External areas, balconies and waterproofing",
        ],
      },
    ],
    benefits: [
      {
        title: "Independent",
        text: "The inspection is for you, not for the party handing the property over.",
      },
      {
        title: "Actionable",
        text: "Defects are photographed and described so someone else can be asked to fix them.",
      },
      {
        title: "Timed properly",
        text: "Pre-handover is when defects are still the developer's problem to resolve.",
      },
      {
        title: "Same careful standard",
        text: "You deal with Arcta directly, and the report is part of the service — not an extra you have to chase.",
      },
    ],
    image: "/images/villa.jpg",
    imageAlt: "A contemporary white villa, the kind of property a snagging inspection protects",
    faqs: [
      {
        question: "What is a snagging inspection?",
        answer:
          "An independent survey of a property — often a new build before handover — that records construction, finishing and system defects so they can be rectified.",
      },
      {
        question: "When should I book?",
        answer:
          "Before you accept keys on a new home, and before you commit to a resale if you want an independent view of its condition.",
      },
      {
        question: "What do I receive afterwards?",
        answer:
          "A photographic report describing the defects found, written so it can be passed to a developer, seller or agent.",
      },
    ],
    seoTitle: "Snagging Inspection Dubai | New Build & Resale",
    seoDescription:
      "Independent snagging inspections in Dubai for new builds, pre-handover and resale properties. Photographic reports from Arcta Group.",
    cta: "Book an inspection",
  },
];

export function getFurtherService(slug: string) {
  return furtherServices.find((service) => service.slug === slug);
}
