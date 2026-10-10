"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

/**
 * Records where the visit came from and reports clicks on the three contact paths
 * (WhatsApp, phone, quote) to Tag Manager. Clicks are caught with one delegated listener.
 */
export function LeadTracking() {
  useEffect(() => {
    captureAttribution();

    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!link || !href) return;

      const link_text = (link.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60);
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        trackEvent("whatsapp_click", { link_text });
      } else if (href.startsWith("tel:")) {
        trackEvent("call_click", { link_text });
      } else if (href === "/#quote") {
        trackEvent("quote_cta_click", { link_text });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
