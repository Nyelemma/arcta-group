import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import BenefitGrid from "@/components/BenefitGrid";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icons";
import {
  waterFiltration,
  waterFiltrationBenefits,
  waterFiltrationFaqs,
} from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Water Filtration Dubai | Supply, Installation & Maintenance | Arcta Group",
  description:
    "Whole-villa water filtration supply, installation and maintenance in Dubai and the UAE. Cleaner drinking water, improved quality for cooking and bathing, and professional aftercare from Arcta Group.",
  path: "/water-filtration",
  keywords: [
    "water filtration Dubai",
    "villa water filter Dubai",
    "whole house water filter UAE",
    "water filter installation Dubai",
    "water filtration maintenance Dubai",
    "clean drinking water Dubai",
  ],
});

export default function WaterFiltrationPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow={waterFiltration.eyebrow}
          title={
            <>
              Cleaner water for <span className="text-brand">your entire home</span>
            </>
          }
          description={waterFiltration.intro}
          icon="filter"
          crumbs={[{ label: "Water Filtration", href: "/water-filtration" }]}
          secondaryCta={{ label: "How It Works", href: "#stages" }}
          highlights={[
            "Supply, installation & maintenance",
            "Whole-villa filtration",
            "Scheduled filter replacement",
          ]}
        />

        <BenefitGrid
          eyebrow="Why Filter Your Water"
          title="Better water for everyday family life"
          description="From the glass you drink from to the shower you step into — filtered water supports healthier, more comfortable living throughout your home."
          benefits={waterFiltrationBenefits}
        />

        {/* Common symptoms */}
        <section className="bg-mist-100 py-20 lg:py-28">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Signs You May Need Filtration"
                  title="Is your water affecting your home?"
                  description="Many UAE homeowners experience water quality issues without realising filtration could help. Common signs include:"
                  align="left"
                />
                <ul className="mt-8 space-y-3">
                  {waterFiltration.symptoms.map((symptom, i) => (
                    <Reveal key={symptom} delay={i * 0.05}>
                      <li className="flex items-start gap-3 rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm text-mist-700 shadow-sm">
                        <Icon name="bolt" className="mt-0.5 h-4 w-4 shrink-0 text-royal-500" />
                        {symptom}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
              <Reveal y={36}>
                <div className="rounded-3xl border border-mist-200 bg-white p-8 shadow-card-lg">
                  <p className="text-xs font-semibold uppercase tracking-widest2 text-emerald-600">
                    Benefits for your family
                  </p>
                  <ul className="mt-5 space-y-3">
                    {waterFiltration.familyBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-mist-700">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3-stage system */}
        <section id="stages" className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="How It Works"
              title="Whole-villa 3-stage filtration"
              description="Installed at the point of entry, our filtration system ensures every tap, shower and appliance in your home receives clean, filtered water."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {waterFiltration.stages.map((stage, i) => (
                <Reveal key={stage.stage} delay={i * 0.08}>
                  <div className="relative h-full rounded-3xl border border-mist-200 bg-mist-100/60 p-7">
                    <span className="inline-flex rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">
                      {stage.stage}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">
                      {stage.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Supply, install, maintain */}
        <section className="bg-mist-100 py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Our Service"
              title="Supply, installation & ongoing maintenance"
              description="We handle the complete lifecycle — from specifying the right system to keeping it performing year after year."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {waterFiltration.services.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-mist-200 bg-white p-7 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600">
                      <Icon name={service.icon as IconName} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Process />
        <FAQ items={waterFiltrationFaqs} />
        <CTABand
          title="Improve your home's water quality"
          description="Request a consultation or quote for a whole-villa filtration system. We respond within the hour."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Water Filtration",
            description: waterFiltration.intro,
            path: "/water-filtration",
            serviceType: "Water Filtration System",
          }),
          faqSchema(waterFiltrationFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Water Filtration", path: "/water-filtration" },
          ]),
        ]}
      />
    </>
  );
}
