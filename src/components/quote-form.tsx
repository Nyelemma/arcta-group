"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, SelectWrap } from "@/components/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QUOTE_PREFILL_EVENT } from "@/components/quote-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/content/site";
import { trackLead } from "@/lib/analytics";
import { attributionSummary } from "@/lib/attribution";
import {
  DEFAULT_PHONE_PREFIX,
  normalizePhone,
  quoteServiceLabel,
  quoteServices,
  validateQuote,
  type QuoteFieldErrors,
  type QuoteServiceValue,
  type QuoteSubmission,
} from "@/lib/quote-options";

type Status = "idle" | "submitting" | "success" | "error";

type Draft = Omit<QuoteSubmission, "service" | "source"> & { service: QuoteServiceValue | "" };

export function QuoteForm({
  defaultService = "",
  source,
}: {
  defaultService?: QuoteServiceValue | "";
  source: string;
}) {
  const uid = useId();
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [frozenHeight, setFrozenHeight] = useState<number>();
  const [draft, setDraft] = useState<Draft>({
    name: "",
    phone: DEFAULT_PHONE_PREFIX,
    location: "",
    service: defaultService,
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();

    function onPrefill(event: Event) {
      const notes = (event as CustomEvent<string>).detail;
      setDraft((current) =>
        current.notes.trim() === "" || current.notes.startsWith("Plan: ") ? { ...current, notes } : current,
      );
    }
    window.addEventListener(QUOTE_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(QUOTE_PREFILL_EVENT, onPrefill);
  }, []);

  const id = (field: string) => `${uid}-${field}`;

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    if (errors[key as keyof QuoteFieldErrors]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const submission = {
      ...draft,
      phone: normalizePhone(draft.phone),
      service: draft.service as QuoteServiceValue,
      source,
    };
    const nextErrors = validateQuote(submission);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as (keyof QuoteFieldErrors)[])[0];
    if (firstInvalid) {
      document.getElementById(id(firstInvalid))?.focus();
      return;
    }

    setDraft((current) => ({ ...current, phone: submission.phone }));
    setStatus("submitting");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...submission,
          attribution: attributionSummary(),
          website: honeypot,
          startedAt: startedAt.current,
        }),
      });

      if (response.status === 422) {
        const body = (await response.json().catch(() => null)) as { fields?: QuoteFieldErrors } | null;
        setErrors(body?.fields ?? {});
        setStatus("idle");
        return;
      }
      if (!response.ok) throw new Error(String(response.status));

      setFrozenHeight(formRef.current?.offsetHeight);
      trackLead({ form: "quote", service: quoteServiceLabel(submission.service), source });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        style={{ minHeight: frozenHeight }}
        className="flex min-h-[22rem] flex-col items-center justify-center text-center"
      >
        <CheckCircle2 aria-hidden className="size-12 text-gold-deep" strokeWidth={1.2} />
        <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-ink">
          Thanks, we&apos;ll be in touch on WhatsApp shortly.
        </p>
      </div>
    );
  }

  const fallbackMessage = [
    "Hi Arcta Group, I'd like a free quote.",
    "",
    `Name: ${draft.name}`,
    `Phone: ${draft.phone}`,
    `Building / Area: ${draft.location}`,
    `Service: ${draft.service ? quoteServiceLabel(draft.service) : "-"}`,
    draft.notes ? `Notes: ${draft.notes}` : "",
  ]
    .filter((line, index, all) => line || all[index - 1] !== "")
    .join("\n");

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required htmlFor={id("name")} error={errors.name}>
          <Input
            id={id("name")}
            name="name"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id("name")}-error` : undefined}
            value={draft.name}
            onChange={(event) => update("name", event.target.value)}
            className="field"
          />
        </Field>
        <Field label="Phone / WhatsApp number" required htmlFor={id("phone")} error={errors.phone}>
          <Input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id("phone")}-error` : undefined}
            value={draft.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="field"
          />
        </Field>
      </div>

      <Field label="Building name / Area" required htmlFor={id("location")} error={errors.location}>
        <Input
          id={id("location")}
          name="location"
          autoComplete="off"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? `${id("location")}-error` : undefined}
          placeholder="e.g. Creek Horizon, Creek Harbour"
          value={draft.location}
          onChange={(event) => update("location", event.target.value)}
          className="field"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service needed" required htmlFor={id("service")} error={errors.service}>
          <SelectWrap>
            <select
              id={id("service")}
              name="service"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? `${id("service")}-error` : undefined}
              value={draft.service}
              onChange={(event) => update("service", event.target.value as QuoteServiceValue)}
              className="field appearance-none pr-10"
            >
              <option value="" disabled>
                Select a service
              </option>
              {quoteServices.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectWrap>
        </Field>
        <Field label="Email (optional)" htmlFor={id("email")} error={errors.email}>
          <Input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id("email")}-error` : undefined}
            value={draft.email}
            onChange={(event) => update("email", event.target.value)}
            className="field"
          />
        </Field>
      </div>

      <Field label="Notes (optional)" htmlFor={id("notes")} error={errors.notes}>
        <Textarea
          id={id("notes")}
          name="notes"
          rows={4}
          maxLength={1000}
          placeholder="Number of AC units, the issue, best time to visit..."
          aria-invalid={Boolean(errors.notes)}
          aria-describedby={errors.notes ? `${id("notes")}-error` : undefined}
          value={draft.notes}
          onChange={(event) => update("notes", event.target.value)}
          className="field h-auto min-h-28 rounded-none py-3"
        />
      </Field>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[10px] bg-gold px-6 text-[0.82rem] font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:bg-gold-light focus-visible:ring-3 focus-visible:ring-gold/40 focus-visible:outline-none disabled:opacity-70 md:rounded-none"
      >
        {status === "submitting" ? <Loader2 aria-hidden className="size-4 animate-spin" /> : null}
        {status === "submitting" ? "Sending" : "Get my free quote"}
      </button>

      {status === "error" ? (
        <div role="alert" className="border border-[#9f2d2d]/30 bg-[#9f2d2d]/5 p-4 text-sm leading-6 text-[#7d2222]">
          We couldn&apos;t send that just now. Your details are still here.{" "}
          <a
            href={whatsappHref(fallbackMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium underline underline-offset-4"
          >
            <WhatsAppIcon className="size-3.5" />
            Send them on WhatsApp instead
          </a>
        </div>
      ) : null}
    </form>
  );
}
