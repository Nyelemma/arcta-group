import { attributionSummary, getAttribution } from "@/lib/attribution";

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5WJ8TVNS";

/** Google Ads tag, configured once for every page alongside the Tag Manager container. */
export const GOOGLE_ADS_ID = "AW-18495094633";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export type TrackedEvent =
  | "quote_form_submit"
  | "proposal_form_submit"
  | "whatsapp_click"
  | "call_click"
  | "quote_cta_click";

/**
 * Pushes an event to the Tag Manager data layer with the visit's lead source attached,
 * so every event can be split by where the visitor came from.
 */
export function trackEvent(event: TrackedEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const attribution = getAttribution();

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    lead_channel: attribution?.channel ?? "Direct",
    lead_source: attribution?.source ?? "",
    lead_medium: attribution?.medium ?? "",
    lead_campaign: attribution?.campaign ?? "",
    lead_landing_page: attribution?.landingPage ?? window.location.pathname,
    lead_summary: attributionSummary(attribution),
    ...params,
  });
}

/** Fires once per successful form submission. */
export function trackLead({ form, service, source }: { form: "quote" | "proposal"; service: string; source: string }) {
  trackEvent(form === "quote" ? "quote_form_submit" : "proposal_form_submit", { service, form_source: source });
}
