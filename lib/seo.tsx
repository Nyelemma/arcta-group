import type { Metadata } from "next";
import { SITE_URL, business, services, faqs, serviceAreas, type Faq } from "./content";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path, keywords }: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path === "/" ? "/" : path },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_AE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ---------- STRUCTURED DATA ---------- */

const areaServed = serviceAreas
  .filter((a) => a.name !== "UAE Wide")
  .map((a) => ({ "@type": "City", name: a.name }));

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: business.name,
  description:
    "Premium AC maintenance, duct cleaning, snagging inspections and property maintenance services across the UAE.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/icon.svg`,
  telephone: business.phoneDisplay,
  email: business.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressCountry: "AE",
  },
  areaServed,
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [business.instagramUrl],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.description,
    },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: business.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    url: `${SITE_URL}${opts.path}`,
  };
}

export function faqSchema(items: Faq[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
