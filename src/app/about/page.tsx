import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BrandLink } from "@/components/brand-link";
import { JsonLd } from "@/components/json-ld";
import { ProcessList } from "@/components/process-list";
import { founderStory, site } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Arcta Group",
  description:
    "Arcta Group is a Dubai home-services company built around clear quotes, uniformed technicians, direct communication and fully documented jobs.",
  path: "/about",
});

const standards = [
  {
    title: "Uniformed professionals",
    text: "Technicians arrive branded, correctly presented and ready to work in someone's home. That is the standard, not a bonus.",
  },
  {
    title: "Clear communication",
    text: "We explain what we found and what we did in plain language, so a tenant, owner or manager can follow the job without guesswork.",
  },
  {
    title: "Full documentation",
    text: "Before and after photographs and a written report follow the visit. You should not have to chase the evidence.",
  },
  {
    title: "Direct contact",
    text: "You deal with the team directly. One message, a reply, and the job is handled — not passed around a call centre.",
  },
  {
    title: "Licensed and insured",
    text: "Every job is carried out by a licensed, insured company, and our work comes with a 30-day workmanship warranty.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <article>
        <header className="border-b border-line bg-white">
          <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-24">
            <Breadcrumbs items={crumbs} />
            <p className="mt-8 text-[0.72rem] tracking-[0.2em] text-gold-deep uppercase">About Arcta Group</p>
            <h1 className="mt-4 max-w-[16ch] font-display text-5xl leading-[0.95] text-ink md:text-7xl">
              Where reliability meets a professional standard.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-quiet">
              Founded to bring a genuinely professional standard to home care in Dubai, for tenants, homeowners, landlords and the managers who answer to them.
            </p>
          </div>
        </header>

        <section className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-display text-4xl text-ink">One call. One standard. Every time.</h2>
          <div className="space-y-5 text-lg leading-8 text-quiet">
            <p>
              Arcta Group exists because tenants, homeowners, landlords and property managers deserve a contractor they can actually rely on. We started with AC, and now look after the wider home: plumbing, electrical, handyman work, leaks, and sofa, mattress and carpet cleaning.
            </p>
            <p>
              Every technician arrives in uniform, documents the job with before and after photos, and leaves the property as they found it.
            </p>
            <p>
              We cover all of Dubai, from a single apartment to a full portfolio. The standard doesn&apos;t change with the size of the job.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
            <div className="border-l border-gold pl-6 md:pl-10">
              <h2 className="font-display text-4xl text-ink">{founderStory.heading}</h2>
              {founderStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 20)} className="mt-5 text-base leading-8 text-ink">
                  {paragraph}
                </p>
              ))}
              <p className="mt-7 font-display text-xl text-ink">{founderStory.name}</p>
              <p className="mt-1 text-sm text-quiet">{founderStory.role}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {standards.map((item, index) => (
                <article key={item.title}>
                  <p className="text-[0.72rem] tracking-[0.16em] text-gold-deep">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-quiet">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-4xl text-ink">How it works</h2>
          <div className="mt-10">
            <ProcessList />
          </div>
          <p className="mt-12 max-w-2xl text-sm leading-7 text-quiet">
            {site.coverage}. {site.hours}. Payment by {site.paymentAccepted.join(", ").toLowerCase()}.
          </p>
          <div className="mt-8">
            <BrandLink href="/contact">Request a service</BrandLink>
          </div>
        </section>
      </article>
    </>
  );
}
