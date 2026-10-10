const MIN_FILL_TIME_MS = 2_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const attempts = new Map<string, number[]>();

export function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) attempts.clear();
  return recent.length > RATE_LIMIT;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

type GuardResult = { ok: true; body: Record<string, unknown> } | { ok: false; response: Response };

/**
 * Shared anti-abuse checks for public form endpoints: same-origin, per-IP rate limit,
 * JSON parsing, and a silent drop for honeypot or implausibly fast submissions.
 */
export async function guardFormRequest(request: Request): Promise<GuardResult> {
  if (!isSameOrigin(request)) return { ok: false, response: json({ error: "forbidden" }, 403) };
  if (isRateLimited(clientKey(request))) return { ok: false, response: json({ error: "rate_limited" }, 429) };

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return { ok: false, response: json({ error: "invalid_request" }, 400) };
  }

  const honeypot = text(body.website, 200);
  const startedAt = Number(body.startedAt);
  const tooFast = Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_TIME_MS;
  if (honeypot || tooFast) return { ok: false, response: json({ ok: true }, 200) };

  return { ok: true, body };
}

/** Turns delivery results into the HTTP response, logging provider failures. */
export function deliveryResponse(label: string, results: { channel: string; status: string; detail?: string }[]) {
  const delivered = results.some((result) => result.status === "sent");
  for (const result of results) {
    if (result.status === "failed") console.error(`[${label}] ${result.channel} delivery failed: ${result.detail}`);
  }
  if (delivered) return json({ ok: true }, 200);

  const configured = results.some((result) => result.status === "failed");
  if (!configured) {
    console.error(`[${label}] No delivery channel configured. Set RESEND_API_KEY and/or the WhatsApp Cloud API variables.`);
  }
  return json({ error: configured ? "delivery_failed" : "not_configured" }, configured ? 502 : 503);
}
