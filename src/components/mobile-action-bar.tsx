"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/content/site";
import { QuoteLink } from "@/components/quote-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

/** The first page-level section or header inside <main> is treated as the hero. */
const HERO_SELECTOR = "#main > section, #main > header, #main > article > header, #main > * > section";

/**
 * Contact bar for phones, revealed once the hero has scrolled out of view so it
 * never competes with the hero's own buttons. From `md` upwards the floating
 * WhatsApp button takes over, so this renders nothing visible on larger screens.
 */
export function MobileActionBar() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(HERO_SELECTOR) ?? document.querySelector("#main > *");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/contact") return null;

  return (
    <div
      inert={!pastHero}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
        pastHero ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md gap-2.5">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-[10px] border border-white/25 text-[0.68rem] font-medium tracking-[0.1em] text-white uppercase transition-colors active:bg-white/10"
        >
          <WhatsAppIcon className="size-4 text-whatsapp-mark" />
          WhatsApp Us
        </a>
        <QuoteLink
          className="inline-flex h-10 flex-[1.15] items-center justify-center gap-2 rounded-[10px] bg-gold text-[0.68rem] font-medium tracking-[0.1em] text-ink uppercase transition-colors active:bg-gold-light"
        >
          Get a Free Quote
          <ArrowRight aria-hidden className="size-4" />
        </QuoteLink>
      </div>
    </div>
  );
}
