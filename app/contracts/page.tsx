import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import TrustBar from "@/components/TrustBar";
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
  title: "Annual Maintenance Contracts Dubai | Residential & Commercial AMC | Arcta Group",
  description:
    "Annual maintenance contracts for residential and commercial properties in Dubai and the UAE. AC maintenance, priority callouts, preventative care and fixed transparent pricing from Arcta Group.",
  path: "/contracts",
  keywords: [
    "annual service contract Dubai",
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
              {contractsPage.hero.title.split(" in ")[0]}{" "}
              <span className="text-brand">in Dubai</span>
            </>
          }
          description={contractsPage.hero.description}
          icon="document"
          crumbs={[{ label: "Annual Maintenance Contracts", href: "/contracts" }]}
          secondaryCta={{ label: "View Plans", href: "#pricing" }}
          highlights={contractsPage.hero.highlights}
        />

        <TrustBar />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow={contractsPage.intro.eyebrow}
              title={contractsPage.intro.title}
              description={contractsPage.intro.description}
            />
          </div>
        </section>

        <section className="bg-mist-100 py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Contract Types"
              title="Plans for every property"
              description="Whether you own a single villa or manage a large portfolio, we build a contract around your needs."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {contractsPage.types.map((type, i) => (
                <Reveal key={type.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-mist-200 bg-white p-7 transition-all duration-300 hover:border-royal-200 hover:shadow-card">
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

        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="What Each Plan Covers"
              title="Complete property care under one agreement"
              description="Your annual maintenance contract bundles the maintenance your property needs most — with scheduled visits, documented reports and priority response when it matters."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contractsPage.coverage.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-mist-200 bg-mist-100/60 p-6 transition-all duration-300 hover:border-royal-200 hover:bg-white hover:shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal-50 text-royal-600">
                      <Icon name={item.icon as IconName} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BenefitGrid
          eyebrow="Why A Yearly Plan"
          title="Why a yearly plan beats one-off repairs"
          description="Dubai's climate puts constant strain on AC systems. A yearly contract gives you scheduled care, priority response and predictable costs — instead of reactive repairs when demand is highest."
          benefits={contractsPage.whyYearly}
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

        <section className="bg-mist-100 py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Who We Serve"
              title="Built for villas, apartments and managed buildings"
              description="We work with homeowners, landlords, property managers and agencies across Dubai and the wider UAE."
              align="center"
            />
            <Reveal>
              <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
                {contractsPage.builtFor.map((item) => (
                  <span key={item} className="chip px-4 py-2 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <BenefitGrid
          eyebrow="Contract Benefits"
          title="The smart way to maintain property"
          description="An annual maintenance contract turns unpredictable maintenance into a fixed, reliable service you never have to think about."
          benefits={contractsPage.benefits}
        />

        <div id="pricing">
          <Pricing />
        </div>
        <FAQ items={contractsFaqs} />
        <ServiceEnquiry
          title="Request an Annual Maintenance Contract Quote"
          description="Tell us about your property or portfolio and we'll build a contract that fits — free and returned within the hour."
          ctaLabel="Request Quote"
          whatsappText="Hi Arcta Group, I'd like to request an annual maintenance contract quote for my property."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Annual Maintenance Contracts",
            description: contractsPage.hero.description,
            path: "/contracts",
            serviceType: "Annual Maintenance Contract",
          }),
          faqSchema(contractsFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Annual Maintenance Contracts", path: "/contracts" },
          ]),
        ]}
      />
    </>
  );
}
