import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import PropertyManagers from "@/components/PropertyManagers";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Property Maintenance for Property Managers Dubai | Arcta Group",
  description:
    "A maintenance partner built for property managers, villa communities, holiday-home operators and real estate agencies across the UAE. Service contracts, maintenance plans, reporting systems and dedicated account management.",
  path: "/property-managers",
  keywords: [
    "property management maintenance Dubai",
    "facilities management Dubai",
    "villa community maintenance UAE",
    "holiday home maintenance Dubai",
    "real estate maintenance partner Dubai",
  ],
});

const pmFaqs = [
  {
    question: "Do you work with property management companies?",
    answer:
      "Yes — property managers, villa communities, holiday-home operators and real estate agencies are at the core of what we do. We provide tailored contracts, scheduled maintenance and reporting designed to make you look good to your landlords.",
  },
  {
    question: "How do you handle reporting across a portfolio?",
    answer:
      "Every job is documented with before-and-after photos and a same-day report. For larger portfolios we provide monthly reporting dashboards and quarterly review meetings.",
  },
  {
    question: "Can we have a single point of contact?",
    answer:
      "Absolutely. Premium and Enterprise clients get dedicated account management — one accountable person who knows your portfolio and responds fast.",
  },
  {
    question: "Do you provide emergency cover?",
    answer:
      "Yes. Contract clients receive prioritised callouts, and our Enterprise tier includes 24/7 emergency support cover.",
  },
];

export default function PropertyManagersPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="For Property Professionals"
          title={
            <>
              A maintenance partner built for <span className="text-brand">portfolios</span>
            </>
          }
          description="Whether you manage 5 properties or 500, Arcta Group is the dependable, fully documented partner that makes you look good to your landlords and owners."
          icon="building"
          crumbs={[{ label: "Property Managers", href: "/property-managers" }]}
          secondaryCta={{ label: "View Contracts", href: "#pricing" }}
          highlights={["Service contracts", "Monthly reporting", "Dedicated account management"]}
        />

        <PropertyManagers />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ items={pmFaqs} />
        <CTABand
          title="Let's talk about your portfolio"
          description="Tell us how many properties you manage and we'll show you what a reliable maintenance partner looks like. Free assessment and quote."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Property Management Maintenance",
            description:
              "Maintenance contracts, scheduled plans, reporting systems and dedicated account management for property managers and portfolios across the UAE.",
            path: "/property-managers",
            serviceType: "Facilities Management",
          }),
          faqSchema(pmFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Property Managers", path: "/property-managers" },
          ]),
        ]}
      />
    </>
  );
}
