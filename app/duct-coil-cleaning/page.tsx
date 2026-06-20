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
import { ductBenefits, ductFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Duct Cleaning Dubai | Coil Cleaning Services UAE | Arcta Group",
  description:
    "Professional air duct and coil cleaning in Dubai and across the UAE. Improve indoor air quality, lower energy bills and boost cooling efficiency. Essential for the UAE's dusty climate. Request a quote from Arcta Group.",
  path: "/duct-coil-cleaning",
  keywords: [
    "duct cleaning Dubai",
    "coil cleaning Dubai",
    "air duct cleaning UAE",
    "AC coil cleaning Dubai",
    "vent cleaning Dubai",
    "indoor air quality Dubai",
  ],
});

const groups: IncludeGroup[] = [
  {
    title: "Duct & Ventilation Cleaning",
    icon: "duct",
    items: [
      "Full air duct cleaning",
      "Vent and grille cleaning",
      "Dust and debris removal",
      "Indoor air quality improvement",
      "System efficiency restoration",
    ],
  },
  {
    title: "Coil Cleaning",
    icon: "coil",
    items: [
      "Evaporator coil cleaning",
      "Condenser coil cleaning",
      "Improved heat transfer",
      "Stronger cooling output",
      "Lower energy consumption",
    ],
  },
];

export default function DuctCoilCleaningPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Duct & Coil Cleaning"
          title={
            <>
              Cleaner air, <span className="text-brand">stronger cooling</span>
            </>
          }
          description="The UAE's dusty climate clogs ducts and coils fast. Our deep cleaning restores airflow, improves indoor air quality and cuts your energy bills."
          icon="duct"
          crumbs={[{ label: "Duct & Coil Cleaning", href: "/duct-coil-cleaning" }]}
          secondaryCta={{ label: "What's Included", href: "#included" }}
          highlights={["Improved air quality", "Energy savings", "Essential in the UAE climate"]}
        />

        <BenefitGrid
          eyebrow="The Benefits"
          title="Why duct & coil cleaning pays off"
          description="Clean ducts and coils mean healthier air, a more efficient system and noticeably lower running costs."
          benefits={ductBenefits}
        />

        <div id="included">
          <ServiceIncludes
            eyebrow="What's Included"
            title="Complete air system cleaning"
            description="From the ductwork to the coils, we clean the parts of your system that make the biggest difference to air quality and efficiency."
            groups={groups}
            muted
          />
        </div>

        <Process />
        <FAQ items={ductFaqs} />
        <CTABand
          title="Breathe cleaner, cool smarter"
          description="Book a duct and coil clean and feel the difference in air quality and cooling performance. Free quotes within the hour."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Duct & Coil Cleaning",
            description:
              "Professional air duct, vent and AC coil cleaning across Dubai and the UAE to improve air quality and cooling efficiency.",
            path: "/duct-coil-cleaning",
            serviceType: "Duct and Coil Cleaning",
          }),
          faqSchema(ductFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Duct & Coil Cleaning", path: "/duct-coil-cleaning" },
          ]),
        ]}
      />
    </>
  );
}
