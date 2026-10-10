const STORAGE_KEY = "arcta:attribution";

export type Attribution = {
  /** Human-readable origin, e.g. "Google Ads", "Instagram", "Google organic", "Direct". */
  channel: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  clickId: string;
  referrerHost: string;
  landingPage: string;
};

const SEARCH_ENGINES: Record<string, string> = {
  google: "Google organic",
  bing: "Bing organic",
  yahoo: "Yahoo organic",
  duckduckgo: "DuckDuckGo organic",
};

const SOCIAL: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  fb: "Facebook",
  l: "Facebook",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
  youtube: "YouTube",
  t: "X / Twitter",
  x: "X / Twitter",
  whatsapp: "WhatsApp",
};

const CLICK_ID_PARAMS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid"] as const;

function hostLabel(host: string) {
  const parts = host.replace(/^www\./, "").split(".");
  return parts.length > 1 ? parts[parts.length - 2] : parts[0];
}

function deriveChannel({
  source,
  medium,
  clickId,
  referrerHost,
}: Pick<Attribution, "source" | "medium" | "clickId" | "referrerHost">) {
  const lowerSource = source.toLowerCase();
  const lowerMedium = medium.toLowerCase();
  const paid = /^(cpc|ppc|paid|paidsocial|paid_social|display)$/.test(lowerMedium);

  if (clickId.startsWith("gclid") || clickId.startsWith("gbraid") || clickId.startsWith("wbraid")) {
    return "Google Ads";
  }
  if (lowerSource === "google" && paid) return "Google Ads";
  if (lowerSource === "google" && lowerMedium === "organic" && source) return "Google organic";
  if (SOCIAL[lowerSource]) return paid ? `${SOCIAL[lowerSource]} ads` : SOCIAL[lowerSource];
  if (clickId.startsWith("fbclid")) return "Meta (Facebook / Instagram)";
  if (source) return paid ? `Paid: ${source}` : source;

  if (referrerHost) {
    const label = hostLabel(referrerHost);
    return SEARCH_ENGINES[label] ?? SOCIAL[label] ?? `Referral: ${referrerHost}`;
  }
  return "Direct";
}

function readCurrentVisit(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const clickParam = CLICK_ID_PARAMS.find((name) => params.get(name));

  let referrerHost = "";
  try {
    const referrer = document.referrer ? new URL(document.referrer).hostname : "";
    referrerHost = referrer && referrer !== window.location.hostname ? referrer.replace(/^www\./, "") : "";
  } catch {
    referrerHost = "";
  }

  const visit = {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? "",
    term: params.get("utm_term") ?? "",
    content: params.get("utm_content") ?? "",
    clickId: clickParam ? `${clickParam}:${params.get(clickParam)}` : "",
    referrerHost,
    landingPage: window.location.pathname,
  };
  return { ...visit, channel: deriveChannel(visit) };
}

function hasCampaignSignal(attribution: Attribution) {
  return Boolean(attribution.source || attribution.clickId);
}

/**
 * Remembers where this visit came from for the rest of the browser session. A visit
 * that carries campaign tags or an ad click ID replaces an earlier untagged one.
 */
export function captureAttribution() {
  try {
    const current = readCurrentVisit();
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored || hasCampaignSignal(current)) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }
  } catch {
    // Session storage can be unavailable; attribution is simply skipped.
  }
}

export function getAttribution(): Attribution | null {
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : null;
  } catch {
    return null;
  }
}

/** One-line description for lead emails, e.g. "Google Ads · campaign: ac-cleaning · landed on /ac-servicing-dubai". */
export function attributionSummary(attribution = getAttribution()) {
  if (!attribution) return "";
  const parts = [attribution.channel];
  if (attribution.campaign) parts.push(`campaign: ${attribution.campaign}`);
  if (attribution.term) parts.push(`keyword: ${attribution.term}`);
  if (attribution.content) parts.push(`ad: ${attribution.content}`);
  parts.push(`landed on ${attribution.landingPage}`);
  return parts.join(" · ").slice(0, 300);
}
