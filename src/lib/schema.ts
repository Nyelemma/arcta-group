import { site } from "@/content/site";
import type { Faq } from "@/content/services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    slogan: "AC & home care, done properly.",
    description: site.description,
    url: site.url,
    image: new URL(site.ogImage, site.url).toString(),
    logo: new URL("/brand/icon.png", site.url).toString(),
    telephone: site.phoneTel,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: site.currenciesAccepted,
    paymentAccepted: site.paymentAccepted.join(", "),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: site.addressCountry,
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      ...site.areas
        .filter((area) => area !== "UAE Wide")
        .map((area) => ({ "@type": "City", name: area })),
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneTel,
      email: site.email,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: [...site.languages],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [site.instagram],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, site.url).toString(),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: input.name,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
