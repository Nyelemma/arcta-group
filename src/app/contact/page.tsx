import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappHref } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";
import { quoteServiceFor } from "@/lib/quote-service";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Get a Free Quote",
  description:
    "Request a service from Arcta Group. Call or WhatsApp +971 50 554 0919, or email info@arctagroup.ae. We reply within the hour.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-5xl leading-[0.95] text-ink md:text-6xl">
            Get a free quote
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-quiet">
            Send the details and we&apos;ll reply via WhatsApp within the hour. Prefer a call? The same number reaches the team directly.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-[0.72rem] tracking-[0.16em] text-gold-deep uppercase">WhatsApp & phone</dt>
              <dd className="mt-2">
                <a href={`tel:${site.phoneTel}`} className="text-lg text-ink">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] tracking-[0.16em] text-gold-deep uppercase">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-lg text-ink">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] tracking-[0.16em] text-gold-deep uppercase">Hours</dt>
              <dd className="mt-2 text-ink">{site.hours}</dd>
              <dd className="text-quiet">{site.coverage}</dd>
            </div>
          </dl>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 bg-whatsapp px-5 text-[0.78rem] tracking-[0.14em] text-white uppercase"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp Arcta
          </a>
        </div>
        <div id="quote" className="scroll-mt-20 bg-white p-6 md:p-10">
          <QuoteForm defaultService={service ? quoteServiceFor(service) : ""} source="contact-page" />
        </div>
      </div>
    </>
  );
}
