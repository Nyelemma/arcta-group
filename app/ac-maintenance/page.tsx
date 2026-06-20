import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import BenefitGrid from "@/components/BenefitGrid";
import ServiceIncludes, { type IncludeGroup } from "@/components/ServiceIncludes";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { acBenefits, acFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AC Maintenance Dubai | AC Cleaning & Repair Services | Arcta Group",
  description:
    "Professional AC maintenance, cleaning and repair in Dubai and across the UAE. Filter & coil cleaning, drain flushing, chemical deep cleans and emergency repairs — fully documented. Request a free quote from Arcta Group.",
  path: "/ac-maintenance",
  keywords: [
    "AC maintenance Dubai",
    "AC cleaning Dubai",
    "AC repair Dubai",
    "AC servicing Dubai",
    "chemical AC cleaning Dubai",
    "emergency AC repair UAE",
  ],
});

const groups: IncludeGroup[] = [
  {
    title: "AC Maintenance & Cleaning",
    icon: "ac",
    items: [
      "Filter cleaning",
      "Coil cleaning",
      "Drain flushing",
      "Fan inspections",
      "System performance checks",
    ],
  },
  {
    title: "AC Repairs & Callouts",
    icon: "wrench",
    items: [
      "Refrigerant recharge",
      "Capacitor replacement",
      "PCB fault diagnosis",
      "Drainage blockages",
      "Emergency callouts",
    ],
  },
  {
    title: "Chemical Deep Cleaning",
    icon: "droplet",
    items: [
      "Intensive chemical wash",
      "Mould & bacteria removal",
      "Restored cooling performance",
      "Improved indoor air quality",
      "Ideal for long service gaps",
    ],
  },
];

export default function ACMaintenancePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="AC Maintenance & Cleaning"
          title={
            <>
              AC maintenance &amp; repair, <span className="text-brand">done properly</span>
            </>
          }
          description="Keep your cooling efficient, healthy and reliable through the UAE summer. Routine servicing, deep cleaning and fast emergency repairs — every job fully documented."
          icon="ac"
          crumbs={[{ label: "AC Maintenance", href: "/ac-maintenance" }]}
          secondaryCta={{ label: "What's Included", href: "#included" }}
          highlights={["Recommended twice yearly", "Same-day reports", "24hr emergency callouts"]}
        />

        <BenefitGrid
          eyebrow="Why It Matters"
          title="Healthier air, lower bills, fewer breakdowns"
          description="Regular AC maintenance is the single best way to protect cooling performance and avoid costly summer failures."
          benefits={acBenefits}
        />

        <div id="included">
          <ServiceIncludes
            eyebrow="What's Included"
            title="Comprehensive AC care"
            description="From routine servicing to intensive chemical cleans and emergency repairs — one trusted partner for every AC need."
            groups={groups}
            muted
          />
        </div>

        <Process />
        <FAQ items={acFaqs} />
        <CTABand
          title="Book your AC service today"
          description="Free, itemised quotes returned within the hour. Keep your units running at their best all year round."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "AC Maintenance & Repair",
            description:
              "Professional AC maintenance, cleaning, chemical deep cleaning and emergency repairs across Dubai and the UAE.",
            path: "/ac-maintenance",
            serviceType: "Air Conditioning Maintenance",
          }),
          faqSchema(acFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AC Maintenance", path: "/ac-maintenance" },
          ]),
        ]}
      />
    </>
  );
}
