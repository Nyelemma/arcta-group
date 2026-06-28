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
import { contractsPage, contractsFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Annual Maintenance Contracts Dubai | Home Health Plans | Arcta Group",
  description:
    "Annual maintenance contracts in Dubai built around your family's health — AC servicing, duct & coil deep cleans, sanitisation, water filtration, 60-minute priority callouts and documented visits from Arcta Group.",
  path: "/contracts",
  keywords: [
    "annual service contract Dubai",
    "annual maintenance contract Dubai",
    "AMC Dubai",
    "home health plan Dubai",
    "residential maintenance contract UAE",
    "AC and water filtration contract Dubai",
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

        <Pricing />

        {/* Why Arcta */}
        <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
          <div className="absolute inset-0 bg-hero-glow opacity-60" />
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-royal-500/15 blur-[120px]" />
          <div className="container-x relative">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow-light">
                  <span className="h-px w-6 bg-royal-300" />
                  {contractsPage.whyArcta.eyebrow}
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  {contractsPage.whyArcta.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-mist-300">
                  {contractsPage.whyArcta.paragraph}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <BenefitGrid
          eyebrow="Why A Yearly Plan"
          title="Why a yearly plan beats one-off repairs"
          description="Dubai's climate puts constant strain on your home — the air, the water and your AC systems. A yearly plan gives you scheduled care, priority response and predictable costs, instead of reactive repairs when demand is highest."
          benefits={contractsPage.whyYearly}
          muted
        />

        <section className="bg-white py-20 lg:py-28">
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

        <FAQ items={contractsFaqs} />
        <ServiceEnquiry
          title="Request a Home Health Plan Quote"
          description="Tell us about your home and we'll build a plan that protects your family's health — free and returned within the hour."
          ctaLabel="Request Quote"
          whatsappText="Hi Arcta Group, I'd like to request a home health plan quote for my home."
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
