"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, SelectWrap } from "@/components/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/content/site";
import { trackLead } from "@/lib/analytics";
import { attributionSummary } from "@/lib/attribution";
import {
  portfolioSizeLabel,
  portfolioSizes,
  propertyTypeLabel,
  propertyTypes,
  validateProposal,
  type PortfolioSizeValue,
  type PropertyTypeValue,
  type ProposalFieldErrors,
  type ProposalSubmission,
} from "@/lib/proposal-options";
import { DEFAULT_PHONE_PREFIX, normalizePhone } from "@/lib/quote-options";

type Status = "idle" | "submitting" | "success" | "error";

type Draft = Omit<ProposalSubmission, "source" | "propertyType" | "portfolioSize"> & {
  propertyType: PropertyTypeValue | "";
  portfolioSize: PortfolioSizeValue | "";
};

export function ProposalForm({ source }: { source: string }) {
  const uid = useId();
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [frozenHeight, setFrozenHeight] = useState<number>();
  const [draft, setDraft] = useState<Draft>({
    name: "",
    company: "",
    phone: DEFAULT_PHONE_PREFIX,
    email: "",
    propertyType: "",
    portfolioSize: "",
    areas: "",
    needs: "",
  });
  const [errors, setErrors] = useState<ProposalFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const id = (field: string) => `${uid}-${field}`;

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const submission = {
      ...draft,
      phone: normalizePhone(draft.phone),
      propertyType: draft.propertyType as PropertyTypeValue,
      portfolioSize: draft.portfolioSize as PortfolioSizeValue,
      source,
    };
    const nextErrors = validateProposal(submission);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as (keyof ProposalFieldErrors)[])[0];
    if (firstInvalid) {
      document.getElementById(id(firstInvalid))?.focus();
      return;
    }

    setDraft((current) => ({ ...current, phone: submission.phone }));
    setStatus("submitting");
    try {
      const response = await fetch("/api/proposal", {
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
        const body = (await response.json().catch(() => null)) as { fields?: ProposalFieldErrors } | null;
        setErrors(body?.fields ?? {});
        setStatus("idle");
        return;
      }
      if (!response.ok) throw new Error(String(response.status));

      setFrozenHeight(formRef.current?.offsetHeight);
      trackLead({ form: "proposal", service: "Property manager proposal", source });
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
          Thanks, we&apos;ll come back to you with a proposal shortly.
        </p>
      </div>
    );
  }

  const fallbackMessage = [
    "Hi Arcta Group, I'd like a proposal for our portfolio.",
    "",
    `Name: ${draft.name}`,
    `Company: ${draft.company}`,
    `Phone: ${draft.phone}`,
    `Email: ${draft.email}`,
    `Properties: ${draft.propertyType ? propertyTypeLabel(draft.propertyType) : "-"}, ${
      draft.portfolioSize ? portfolioSizeLabel(draft.portfolioSize) : "-"
    }`,
    draft.areas ? `Areas: ${draft.areas}` : "",
    draft.needs ? `Needs: ${draft.needs}` : "",
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
        <Field label="Company name" required htmlFor={id("company")} error={errors.company}>
          <Input
            id={id("company")}
            name="company"
            autoComplete="organization"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${id("company")}-error` : undefined}
            value={draft.company}
            onChange={(event) => update("company", event.target.value)}
            className="field"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Field label="Email" required htmlFor={id("email")} error={errors.email}>
          <Input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id("email")}-error` : undefined}
            value={draft.email}
            onChange={(event) => update("email", event.target.value)}
            className="field"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Type of properties" required htmlFor={id("propertyType")} error={errors.propertyType}>
          <SelectWrap>
            <select
              id={id("propertyType")}
              name="propertyType"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.propertyType)}
              aria-describedby={errors.propertyType ? `${id("propertyType")}-error` : undefined}
              value={draft.propertyType}
              onChange={(event) => update("propertyType", event.target.value as PropertyTypeValue)}
              className="field appearance-none pr-10"
            >
              <option value="" disabled>
                Select a type
              </option>
              {propertyTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectWrap>
        </Field>
        <Field label="Number of properties" required htmlFor={id("portfolioSize")} error={errors.portfolioSize}>
          <SelectWrap>
            <select
              id={id("portfolioSize")}
              name="portfolioSize"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.portfolioSize)}
              aria-describedby={errors.portfolioSize ? `${id("portfolioSize")}-error` : undefined}
              value={draft.portfolioSize}
              onChange={(event) => update("portfolioSize", event.target.value as PortfolioSizeValue)}
              className="field appearance-none pr-10"
            >
              <option value="" disabled>
                Select a range
              </option>
              {portfolioSizes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectWrap>
        </Field>
      </div>

      <Field label="Areas covered (optional)" htmlFor={id("areas")} error={errors.areas}>
        <Input
          id={id("areas")}
          name="areas"
          autoComplete="off"
          maxLength={300}
          placeholder="e.g. Dubai Marina, JVC, Downtown"
          aria-invalid={Boolean(errors.areas)}
          aria-describedby={errors.areas ? `${id("areas")}-error` : undefined}
          value={draft.areas}
          onChange={(event) => update("areas", event.target.value)}
          className="field"
        />
      </Field>

      <Field label="What do you need? (optional)" htmlFor={id("needs")} error={errors.needs}>
        <Textarea
          id={id("needs")}
          name="needs"
          rows={4}
          maxLength={1000}
          placeholder="e.g. quarterly AC servicing, turnaround cleaning, on-call maintenance"
          aria-invalid={Boolean(errors.needs)}
          aria-describedby={errors.needs ? `${id("needs")}-error` : undefined}
          value={draft.needs}
          onChange={(event) => update("needs", event.target.value)}
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
        {status === "submitting" ? "Sending" : "Request a proposal"}
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
