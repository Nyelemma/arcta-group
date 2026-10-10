"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

export const QUOTE_HREF = "/#quote";

export const QUOTE_PREFILL_EVENT = "quote:prefill";

/**
 * Smooth-scrolls to the quote form when the current page has one, and otherwise
 * falls back to the homepage form. `prefillNotes` seeds the form's notes field.
 */
export function QuoteLink({
  onClick,
  prefillNotes,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { prefillNotes?: string }) {
  return (
    <Link
      {...props}
      href={QUOTE_HREF}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (prefillNotes) {
          window.dispatchEvent(new CustomEvent(QUOTE_PREFILL_EVENT, { detail: prefillNotes }));
        }
        const target = document.getElementById("quote");
        if (!target) return;
        event.preventDefault();
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        requestAnimationFrame(() =>
          target.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" }),
        );
      }}
    />
  );
}
