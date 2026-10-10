import type { Metadata } from "next";
import Image from "next/image";
import { Check, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BrandLink } from "@/components/brand-link";
import { Eyebrow } from "@/components/eyebrow";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ProposalSection } from "@/components/proposal-section";
import { QUOTE_HREF } from "@/components/quote-link";
import { TrustedBy } from "@/components/trusted-by";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Property Maintenance for Managers",
  description:
    "Maintenance support for Dubai property managers and holiday-home operators. Fast communication, clear quotes, before and after photos and detailed service reports.",
  path: "/property-managers",
});

const faqs = [
  {
    question: "Do you work with property management companies?",
    answer:
      "Yes. Property managers, villa communities, holiday-home operators and agencies are a core part of the work. Contracts, scheduled maintenance and reporting are set up so you can update owners without chasing us.",
  },
  {
    question: "How is a portfolio reported?",
    answer:
      "Each visit carries before-and-after photographs and a written note. Across a portfolio, that gives you evidence per property rather than a verbal update.",
  },
  {
    question: "Can we have a single point of contact?",
    answer:
      "Yes. You deal with the team directly — one line, not a call centre — so the person who knows the portfolio is the person who replies.",
  },
  {
    question: "Do you cover emergencies?",
    answer:
      "Yes. For urgent issues like AC failure, leaks or electrical faults, call or WhatsApp us and we'll respond within the hour. A standard call-out fee applies, with a higher fee outside normal hours, when attendance depends on technician availability. Clients on an annual agreement pay no call-out fee. Any repair is quoted before work starts.",
  },
];

const audiences = [
  "Property management companies",
  "Villa communities",
  "Holiday homes and short-term rentals",
  "Real estate agencies",
  "Landlords with more than one unit",
];

const coverage = [
  { title: "AC servicing, coil and duct cleaning, drain flushing" },
  { title: "Plumbing, electrical and handyman jobs" },
  { title: "Leak and minor ceiling repairs" },
  { title: "Sofa, mattress and carpet cleaning" },
  {
    title: "Turnaround support for holiday homes",
    detail: "AC checks and upholstery cleaning between guest stays",
  },
];

const reportPages = [
  { src: "/sample-report/page-1.jpg", alt: "Sample Arcta service report, page 1: summary, findings by unit and work carried out" },
  { src: "/sample-report/page-2.jpg", alt: "Sample Arcta service report, page 2: before and after photos and recommendations" },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Property Managers", path: "/property-managers" },
];

export default function ManagersPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Property management maintenance",
            description:
              "Documented maintenance support for property managers and holiday-home operators across Dubai and the UAE.",
            path: "/property-managers",
          }),
          faqSchema(faqs),
        ]}
      />

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 md:py-24">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8">
            <Eyebrow>For property managers</Eyebrow>
          </div>
          <h1 className="mt-4 max-w-[16ch] font-display text-[2.6rem] leading-[1] text-ink md:text-7xl md:leading-[0.95]">
            Reliable maintenance support for property managers.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-quiet md:mt-7 md:text-lg md:leading-8">
            Fast communication, clear quotes, before and after photos and detailed service reports for every property you manage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BrandLink href={QUOTE_HREF} tone="gold">
              Request a proposal
            </BrandLink>
            <BrandLink
              href={whatsappHref("Hi Arcta Group, I manage properties and I'd like to talk about maintenance support.")}
              tone="outline"
              external
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </BrandLink>
          </div>
        </div>
      </section>

      <TrustedBy />

      <section className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-3xl text-ink md:text-4xl">Built for people who have to report upwards</h2>
          <p className="mt-5 text-base leading-7 text-quiet">
            Owners and landlords want evidence, not reassurance. Arcta&apos;s work is structured so a manager can forward a quote, a photograph and a result without reconstructing the visit from memory.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-ink lg:pt-2">
          {audiences.map((item) => (
            <li key={item} className="border-b border-line pb-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-24">
          <Eyebrow>What we cover</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] font-display text-3xl text-ink md:text-5xl">
            One team for the whole portfolio.
          </h2>
          <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
            {coverage.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-[14px] border border-line bg-white p-5 md:rounded-none md:p-6"
              >
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-gold-deep" strokeWidth={2} />
                <div>
                  <p className="text-base leading-7 text-ink">{item.title}</p>
                  {"detail" in item ? <p className="text-sm leading-6 text-quiet">{item.detail}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
          {[
            ["Annual agreements", "Fixed scope for the year, quoted per portfolio, so costs are predictable rather than seasonal."],
            ["Scheduled maintenance", "Preventative visits that reduce the emergency calls your tenants feel first."],
            ["Reports you can send", "Same-day photographic notes, written so an owner can read them without a phone call."],
          ].map(([title, text]) => (
            <article key={title}>
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Sample report</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">See what you&apos;ll receive</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-quiet">
              Every visit ends with a report like this: photos, what we found, what we did and what we recommend. Ready to forward to an owner.
            </p>
            <a
              href="/sample-report/arcta-sample-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-gold underline-offset-4"
            >
              <FileText aria-hidden className="size-4 text-gold-deep" strokeWidth={1.6} />
              Open the full sample report (PDF)
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {reportPages.map((page) => (
              <div key={page.src} className="overflow-hidden rounded-[10px] border border-line shadow-[0_24px_60px_-40px_rgba(14,27,43,0.5)] md:rounded-none">
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={1344}
                  height={1650}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-16 md:px-8">
        <h2 className="font-display text-4xl text-ink">Questions</h2>
        <div className="mt-8">
          <FaqList faqs={faqs} />
        </div>
      </section>

      <ProposalSection source="property-managers" />
    </>
  );
}
