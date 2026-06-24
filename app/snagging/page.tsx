import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import SnaggingCTA from "@/components/SnaggingCTA";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ServiceEnquiry from "@/components/ServiceEnquiry";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { InspectionChecklist } from "@/components/Snagging";
import { Icon, type IconName } from "@/components/Icons";
import { snagging, snaggingFaqs } from "@/lib/content";
import { buildMetadata, JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Snagging Inspection Dubai | Property Snagging UAE | Arcta Group",
  description:
    "Independent snagging inspections across Dubai and the UAE. New build, pre-handover and resale property inspections with detailed photographic reporting. Protect your property investment.",
  path: "/snagging",
  keywords: [
    "snagging inspection Dubai",
    "property snagging UAE",
    "building inspection Dubai",
    "pre-handover inspection Dubai",
    "new build snagging Dubai",
  ],
});

export default function SnaggingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Snagging Inspections"
          title={
            <>
              Protect your <span className="text-brand">property investment</span>
            </>
          }
          description="Independent snagging inspections for new builds, pre-handover and resale properties across Dubai and the UAE — with detailed photographic reporting you can act on."
          icon="search"
          crumbs={[{ label: "Snagging", href: "/snagging" }]}
          primaryCta={{ label: "Book an Inspection", href: "/#contact" }}
          secondaryCta={{ label: "View Process", href: "#process" }}
          highlights={[
            "New build & pre-handover",
            "Resale inspections",
            "Same-day photographic report",
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Inspection Types"
              title="The right inspection for every situation"
              description={snagging.intro}
            />
            <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {snagging.types.map((type, i) => (
                    <Reveal key={type.title} delay={i * 0.05}>
                      <div className="h-full rounded-2xl border border-mist-200 bg-mist-100/60 p-6 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-card">
                        <h3 className="font-display text-base font-bold text-navy-900">
                          {type.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist-600">
                          {type.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.1}>
                  <div className="mt-6 rounded-2xl border border-mist-200 bg-white p-6 shadow-card">
                    <p className="text-xs font-semibold uppercase tracking-widest2 text-mist-500">
                      Who it&apos;s for
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {snagging.audiences.map((aud) => (
                        <div key={aud.label} className="flex items-center gap-2.5">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                            <Icon name={aud.icon as IconName} className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-medium text-navy-900">{aud.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal y={36}>
                <InspectionChecklist />
              </Reveal>
            </div>
          </div>
        </section>

        <SnaggingCTA />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why It Matters"
              title="A small cost that saves you thousands"
              description="Developers and sellers won't always volunteer a property's flaws. An independent inspection puts the facts — and the leverage — in your hands."
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
              {[
                {
                  icon: "shield" as IconName,
                  title: "Financial Protection",
                  text: "Defects fixed pre-handover are the developer's cost — not yours.",
                },
                {
                  icon: "search" as IconName,
                  title: "Full Visibility",
                  text: "Know the exact condition of your property before you commit.",
                },
                {
                  icon: "document" as IconName,
                  title: "Actionable Reporting",
                  text: "A clear, photographic report you can hand straight to the developer.",
                },
              ].map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.08}
                  className="rounded-3xl border border-mist-200 bg-mist-100/60 p-7 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-600">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div id="process">
          <Process />
        </div>
        <FAQ items={snaggingFaqs} />
        <ServiceEnquiry
          title="Arrange a Snagging Inspection"
          description="Protect your investment before handover. Get a fast, free quote and a same-day photographic report."
          ctaLabel="Book Inspection"
          whatsappText="Hi Arcta Group, I'd like to arrange a snagging inspection for my property."
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={[
          serviceSchema({
            name: "Snagging Inspection",
            description:
              "Independent new build, pre-handover and resale property snagging inspections across Dubai and the UAE.",
            path: "/snagging",
            serviceType: "Property Snagging Inspection",
          }),
          faqSchema(snaggingFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Snagging", path: "/snagging" },
          ]),
        ]}
      />
    </>
  );
}
