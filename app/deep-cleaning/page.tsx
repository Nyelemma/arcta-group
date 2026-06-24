import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import BenefitGrid from "@/components/BenefitGrid";
import ServiceIncludes, { type IncludeGroup } from "@/components/ServiceIncludes";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ServiceEnquiry from "@/components/ServiceEnquiry";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icons";
import { sanitisation, sanitisationBenefits, sanitisationFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Deep Cleaning & Home Sanitisation Dubai | Arcta Group",
  description:
    "Professional deep home cleaning, ozone treatment, electrostatic spraying and steam cleaning in Dubai and across the UAE. Improve hygiene and create healthier indoor environments.",
  path: "/deep-cleaning",
  keywords: [
    "deep cleaning Dubai",
    "home sanitisation Dubai",
    "ozone treatment Dubai",
    "electrostatic spraying UAE",
    "steam cleaning Dubai",
  ],
});

const groups: IncludeGroup[] = [
  {
    title: "Deep Home Cleaning",
    icon: "sparkle",
    items: [
      "Room-by-room deep clean",
      "Kitchens & bathrooms",
      "High-touch surfaces",
      "Fixtures & fittings",
    ],
  },
  {
    title: "Ozone Treatment",
    icon: "bolt",
    items: [
      "Odour neutralisation",
      "Bacteria reduction",
      "Airborne contaminant removal",
      "Post-renovation treatment",
    ],
  },
  {
    title: "Electrostatic Spraying",
    icon: "spray",
    items: [
      "Even surface coverage",
      "Disinfectant application",
      "Hard-to-reach areas",
      "Residential-safe methods",
    ],
  },
  {
    title: "Steam Cleaning",
    icon: "droplet",
    items: [
      "Chemical-free sanitisation",
      "Upholstery & tiles",
      "Grout & kitchen areas",
      "High-temperature cleaning",
    ],
  },
];

export default function DeepCleaningPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Deep Cleaning"
          title={
            <>
              A cleaner, <span className="text-brand">healthier home</span>
            </>
          }
          description={sanitisation.intro}
          icon="spray"
          crumbs={[{ label: "Deep Cleaning", href: "/deep-cleaning" }]}
          secondaryCta={{ label: "Our Methods", href: "#methods" }}
          highlights={[
            "Deep home cleaning",
            "Ozone & electrostatic treatment",
            "Healthier indoor environments",
          ]}
        />

        <BenefitGrid
          eyebrow="The Benefits"
          title="Why professional sanitisation matters"
          description="Advanced cleaning and sanitisation go beyond the surface — targeting bacteria, odours and contaminants for a genuinely cleaner home."
          benefits={sanitisationBenefits}
        />

        <section id="methods" className="bg-mist-100 py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Our Methods"
              title="Advanced sanitisation services"
              description="Professional-grade methods selected for your property's needs — each designed to improve hygiene and create a healthier living environment."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {sanitisation.methods.map((method, i) => (
                <Reveal key={method.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-mist-200 bg-white p-7 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                      <Icon name={method.icon as IconName} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">
                      {method.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest2 text-emerald-700">
                  Key outcomes
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sanitisation.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-mist-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <ServiceIncludes
          eyebrow="What's Included"
          title="Comprehensive deep cleaning & sanitisation"
          description="From thorough deep cleans to advanced ozone, electrostatic and steam treatments — tailored to your property."
          groups={groups}
        />

        <Process />
        <FAQ items={sanitisationFaqs} />
        <ServiceEnquiry
          title="Book a Deep Cleaning Service"
          description="Tell us about your property and we'll recommend the right treatment. Free quotes returned within the hour."
          ctaLabel="Book Deep Cleaning"
          whatsappText="Hi Arcta Group, I'd like to book a deep cleaning / sanitisation service for my property."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Deep Cleaning & Home Sanitisation",
            description: sanitisation.intro,
            path: "/deep-cleaning",
            serviceType: "Home Sanitisation",
          }),
          faqSchema(sanitisationFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Deep Cleaning", path: "/deep-cleaning" },
          ]),
        ]}
      />
    </>
  );
}
