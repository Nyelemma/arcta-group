import { Mail, Phone } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { QuoteForm } from "@/components/quote-form";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site, whatsappHref } from "@/content/site";
import type { QuoteServiceValue } from "@/lib/quote-options";

/**
 * Navy quote section. Only the instance with `anchor` carries the #quote id that
 * every "Get a free quote" button scrolls to.
 */
export function QuoteSection({
  anchor = false,
  defaultService = "",
  source,
  showContact = false,
  heading = "Need something sorted at home?",
}: {
  anchor?: boolean;
  defaultService?: QuoteServiceValue | "";
  source: string;
  showContact?: boolean;
  heading?: string;
}) {
  return (
    <section id={anchor ? "quote" : undefined} className="scroll-mt-14 bg-ink text-white md:scroll-mt-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <Eyebrow tone="gold">Free quote</Eyebrow>
          <h2 className="mt-5 max-w-[14ch] font-display text-4xl leading-[1.02] md:text-6xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75 md:text-lg md:leading-8">
            Tell us what you need and we&apos;ll get back to you with a free quote.
          </p>
          {showContact ? (
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li>
                <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-3 hover:text-white">
                  <Phone aria-hidden className="size-4 text-gold" strokeWidth={1.4} />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:text-white">
                  <Mail aria-hidden className="size-4 text-gold" strokeWidth={1.4} />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <WhatsAppIcon className="size-4 text-whatsapp-mark" />
                  WhatsApp us
                </a>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="rounded-[14px] bg-white p-6 text-ink md:rounded-none md:p-10">
          <QuoteForm defaultService={defaultService} source={source} />
        </div>
      </div>
    </section>
  );
}
