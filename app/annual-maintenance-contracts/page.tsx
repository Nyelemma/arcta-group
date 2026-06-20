import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import BenefitGrid from "@/components/BenefitGrid";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import type { Benefit } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Annual Maintenance Contracts Dubai | AMC for AC & Property | Arcta Group",
  description:
    "Annual maintenance contracts for AC and property care in Dubai and the UAE. Standard, Premium and Enterprise plans with priority callouts, fixed pricing and dedicated support for landlords and property managers.",
  path: "/annual-maintenance-contracts",
  keywords: [
    "annual maintenance contract Dubai",
    "AMC Dubai",
    "AC maintenance contract Dubai",
    "property maintenance contract UAE",
    "landlord maintenance plan Dubai",
  ],
});

const amcBenefits: Benefit[] = [
  {
    title: "Predictable Costs",
    description: "Fixed, transparent annual pricing with no hidden costs or surprise invoices.",
    icon: "tag",
  },
  {
    title: "Priority Response",
    description: "Contract clients jump the queue with faster, prioritised callouts.",
    icon: "clock",
  },
  {
    title: "Full Documentation",
    description: "Same-day reports and photos after every visit, ready to share with owners.",
    icon: "clipboard",
  },
  {
    title: "Dedicated Support",
    description: "A single accountable point of contact who knows your portfolio.",
    icon: "headset",
  },
];

const amcFaqs = [
  {
    question: "What does an annual maintenance contract include?",
    answer:
      "Our contracts include scheduled servicing (typically two full services per year), filter and coil cleaning, drainage checks, performance reports and priority booking. Premium and Enterprise tiers add priority callouts, refrigerant checks and dedicated support.",
  },
  {
    question: "Can contracts cover a large property portfolio?",
    answer:
      "Yes. Our Enterprise tier is built for portfolios of 50+ units with bespoke volume pricing, dedicated technician allocation, monthly reporting dashboards and emergency cover.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Every portfolio is different, so we assess your specific requirements and provide a transparent, itemised quote — free and returned within the hour.",
  },
  {
    question: "Are reports included with the contract?",
    answer:
      "Always. Every visit is documented with before-and-after photos and a same-day written report, so you have complete transparency and evidence for landlords.",
  },
];

export default function AnnualContractsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Annual Maintenance Contracts"
          title={
            <>
              Predictable costs. <span className="text-brand">Reliable service.</span>
            </>
          }
          description="Pay once, covered all year. Annual maintenance contracts for AC and property care, tailored to homeowners, landlords and large portfolios across the UAE."
          icon="document"
          crumbs={[{ label: "Annual Contracts", href: "/annual-maintenance-contracts" }]}
          secondaryCta={{ label: "View Plans", href: "#pricing" }}
          highlights={["Fixed transparent pricing", "Priority callouts", "Free quote in one hour"]}
        />

        <BenefitGrid
          eyebrow="Why A Contract"
          title="The smart way to maintain property"
          description="An annual contract turns unpredictable maintenance into a fixed, reliable service you never have to think about."
          benefits={amcBenefits}
        />

        <Pricing />
        <FAQ items={amcFaqs} />
        <CTABand
          title="Get your tailored contract quote"
          description="Tell us about your property or portfolio and we'll build a contract that fits — free and returned within the hour."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Annual Maintenance Contracts",
            description:
              "Annual maintenance contracts for AC and property care across Dubai and the UAE, with Standard, Premium and Enterprise tiers.",
            path: "/annual-maintenance-contracts",
            serviceType: "Annual Maintenance Contract",
          }),
          faqSchema(amcFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Annual Contracts", path: "/annual-maintenance-contracts" },
          ]),
        ]}
      />
    </>
  );
}
