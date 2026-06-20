import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import ServiceIncludes, { type IncludeGroup } from "@/components/ServiceIncludes";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import WhyChooseUs from "@/components/WhyChooseUs";
import { propertyFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Property Maintenance Dubai | Home Maintenance Services UAE | Arcta Group",
  description:
    "Reliable property and home maintenance across Dubai and the UAE. Handyman services, general repairs, property upkeep and preventative maintenance by uniformed professionals. Fully documented. Request a quote from Arcta Group.",
  path: "/property-maintenance",
  keywords: [
    "property maintenance Dubai",
    "home maintenance Dubai",
    "handyman services Dubai",
    "property upkeep UAE",
    "preventative maintenance Dubai",
    "home repairs Dubai",
  ],
});

const groups: IncludeGroup[] = [
  {
    title: "Handyman Services",
    icon: "tools",
    items: [
      "Fixtures and fittings",
      "Mounting and assembly",
      "Minor carpentry",
      "Small installations",
      "General odd jobs",
    ],
  },
  {
    title: "General Repairs",
    icon: "wrench",
    items: [
      "Plumbing repairs",
      "Electrical fixes",
      "Door and window repairs",
      "Sealing and grouting",
      "Wear-and-tear fixes",
    ],
  },
  {
    title: "Preventative Maintenance",
    icon: "shield",
    items: [
      "Scheduled property checks",
      "Early issue detection",
      "Seasonal upkeep",
      "Portfolio maintenance plans",
      "Same-day documented reports",
    ],
  },
];

export default function PropertyMaintenancePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Property & Home Maintenance"
          title={
            <>
              Keep your property in <span className="text-brand">perfect condition</span>
            </>
          }
          description="Reliable handyman services, general repairs and preventative maintenance across Dubai and the UAE — handled by trusted, uniformed professionals and fully documented."
          icon="tools"
          crumbs={[{ label: "Property Maintenance", href: "/property-maintenance" }]}
          secondaryCta={{ label: "What's Included", href: "#included" }}
          highlights={["Uniformed professionals", "Documented every visit", "Portfolio plans available"]}
        />

        <div id="included">
          <ServiceIncludes
            eyebrow="What We Handle"
            title="One partner for all your property needs"
            description="From a quick fix to ongoing preventative care, we keep your property running smoothly so you don't have to chase multiple contractors."
            groups={groups}
          />
        </div>

        <WhyChooseUs />
        <Process />
        <FAQ items={propertyFaqs} />
        <CTABand
          title="Keep your property covered"
          description="From one-off repairs to full maintenance plans, Arcta Group keeps your property in top condition. Free quotes within the hour."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Property & Home Maintenance",
            description:
              "Handyman services, general repairs, property upkeep and preventative maintenance across Dubai and the UAE.",
            path: "/property-maintenance",
            serviceType: "Property Maintenance",
          }),
          faqSchema(propertyFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Property Maintenance", path: "/property-maintenance" },
          ]),
        ]}
      />
    </>
  );
}
