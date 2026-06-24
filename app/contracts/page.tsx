import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import BenefitGrid from "@/components/BenefitGrid";
import FAQ from "@/components/FAQ";
import ServiceEnquiry from "@/components/ServiceEnquiry";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icons";
import { contractsPage, contractsFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Maintenance Contracts Dubai | Residential & Commercial AMC | Arcta Group",
  description:
    "Annual maintenance contracts for residential and commercial properties in Dubai and the UAE. Preventative maintenance, priority callouts and fixed transparent pricing from Arcta Group.",
  path: "/contracts",
  keywords: [
    "annual maintenance contract Dubai",
    "AMC Dubai",
    "residential maintenance contract UAE",
    "commercial property maintenance Dubai",
    "preventative maintenance contract",
  ],
});

export default function ContractsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow={contractsPage.hero.eyebrow}
          title={
            <>
              Predictable costs. <span className="text-brand">Reliable service.</span>
            </>
          }
          description={contractsPage.hero.description}
          icon="document"
          crumbs={[{ label: "Contracts", href: "/contracts" }]}
          secondaryCta={{ label: "View Plans", href: "#pricing" }}
          highlights={["Residential & commercial", "Preventative maintenance", "Free quote in one hour"]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Contract Types"
              title="Plans for every property"
              description="Whether you own a single villa or manage a large portfolio, we build a contract around your needs."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {contractsPage.types.map((type, i) => (
                <Reveal key={type.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-mist-200 bg-mist-100/60 p-7 transition-all duration-300 hover:border-royal-200 hover:bg-white hover:shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600">
                      <Icon name={type.icon as IconName} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                      {type.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">{type.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BenefitGrid
          eyebrow="Why A Contract"
          title="The smart way to maintain property"
          description="An annual contract turns unpredictable maintenance into a fixed, reliable service you never have to think about."
          benefits={contractsPage.benefits}
          muted
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="What's Included"
              title="Comprehensive cover, clearly defined"
              description="Every contract is tailored to your property, but typically includes the following as standard."
            />
            <Reveal>
              <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
                {contractsPage.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-mist-200 bg-mist-100/60 px-4 py-3 text-sm text-mist-700"
                  >
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <div id="pricing">
          <Pricing />
        </div>
        <FAQ items={contractsFaqs} />
        <ServiceEnquiry
          title="Request a Contract Quote"
          description="Tell us about your property or portfolio and we'll build a contract that fits — free and returned within the hour."
          ctaLabel="Request Quote"
          whatsappText="Hi Arcta Group, I'd like to request a maintenance contract quote for my property."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Maintenance Contracts",
            description: contractsPage.hero.description,
            path: "/contracts",
            serviceType: "Annual Maintenance Contract",
          }),
          faqSchema(contractsFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contracts", path: "/contracts" },
          ]),
        ]}
      />
    </>
  );
}
