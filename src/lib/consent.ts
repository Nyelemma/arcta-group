export const CONSENT_STORAGE_KEY = "arcta:cookie-consent";
const CONSENT_EVENT = "arcta:consent-change";

export type ConsentChoice = "granted" | "denied";

export function getConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

export function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

function notify() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Stores the visitor's choice and tells Google Tag Manager (Consent Mode v2). */
export function setConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage can be blocked; the choice then only lasts for this page view.
  }
  window.gtag?.("consent", "update", consentState(choice));
  notify();
}

/** Clears the stored choice so the banner is shown again. */
export function resetConsent() {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Nothing to clear.
  }
  window.gtag?.("consent", "update", consentState("denied"));
  notify();
}

export function consentState(choice: ConsentChoice) {
  return {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };
}
