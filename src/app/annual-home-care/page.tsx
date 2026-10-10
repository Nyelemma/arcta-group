import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BrandLink } from "@/components/brand-link";
import { Eyebrow } from "@/components/eyebrow";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { QUOTE_HREF } from "@/components/quote-link";
import { QuoteSection } from "@/components/quote-section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { annualFaqs, carePlans, howItWorks, planFootnote } from "@/content/plans";
import { whatsappHref } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Annual Home Care Dubai",
  description:
    "Annual home care in Dubai: scheduled AC services, priority booking, discounted repair labour and a photo record of every visit. Two plans, free quote.",
  path: "/annual-home-care",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Annual Home Care", path: "/annual-home-care" },
];

export default function AnnualPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Annual Home Care",
            description:
              "Annual home care plans for Dubai properties: scheduled AC services, priority booking, discounted repair labour and a photo record of every visit.",
            path: "/annual-home-care",
          }),
          faqSchema(annualFaqs),
        ]}
      />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-28">
          <Breadcrumbs items={crumbs} tone="light" />
          <div className="mt-8">
            <Eyebrow tone="gold">Annual Home Care</Eyebrow>
          </div>
          <h1 className="mt-4 max-w-[14ch] font-display text-[2.6rem] leading-[1] md:text-7xl md:leading-[0.95]">
            One less thing to remember.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:mt-7 md:text-lg md:leading-8">
            Year-round care for your AC and home. We schedule it, we do it, and we show you what was done.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BrandLink href={QUOTE_HREF} tone="gold">
              Get a free quote
            </BrandLink>
            <BrandLink
              href={whatsappHref("Hi Arcta Group, I'd like to ask about Annual Home Care.")}
              tone="outlineLight"
              external
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </BrandLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-28">
        <Eyebrow>How it works</Eyebrow>
        <ol className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-8">
          {howItWorks.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[14px] border border-line bg-white p-6 md:rounded-none md:border-0 md:border-t md:border-gold md:bg-transparent md:p-0 md:pt-6"
            >
              <p className="text-[0.72rem] tracking-[0.16em] text-gold-deep">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl text-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-quiet">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="plans" className="scroll-mt-20 bg-white md:scroll-mt-28">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-28">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {carePlans.map((plan) => {
              const featured = Boolean(plan.label);
              return (
                <article
                  key={plan.slug}
                  className={`flex flex-col rounded-[14px] bg-white p-6 md:rounded-none md:p-10 ${
                    featured ? "border-2 border-gold" : "border border-line"
                  }`}
                >
                  <p
                    className={`text-[0.72rem] tracking-[0.18em] uppercase ${
                      featured ? "text-gold-deep" : "invisible"
                    }`}
                    aria-hidden={!featured}
                  >
                    {plan.label ?? "Plan"}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{plan.name}</h2>
                  <p className="mt-3 text-base leading-7 text-quiet">{plan.summary}</p>
                  {plan.intro ? <p className="mt-6 text-sm font-medium text-ink">{plan.intro}</p> : null}
                  <ul className={`${plan.intro ? "mt-3" : "mt-6"} flex-1 space-y-3 text-sm leading-6 text-ink`}>
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-deep" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <BrandLink
                      href={QUOTE_HREF}
                      tone={featured ? "gold" : "primary"}
                      prefillNotes={`Plan: ${plan.name}`}
                      className="w-full sm:w-auto"
                    >
                      {plan.cta}
                    </BrandLink>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-6 text-sm leading-6 text-quiet">{planFootnote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-4xl text-ink">Questions</h2>
        <div className="mt-8">
          <FaqList faqs={annualFaqs} />
        </div>
      </section>

      <QuoteSection anchor defaultService="annual-home-care" source="annual-home-care" />
    </>
  );
}
