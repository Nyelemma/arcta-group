"use client";

import { useState } from "react";
import { business } from "@/lib/content";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

const serviceOptions = [
  "AC Maintenance & Cleaning",
  "AC Repair / Callout",
  "Chemical Deep Clean",
  "Duct & Coil Cleaning",
  "Deep Cleaning & Sanitisation",
  "Water Filtration",
  "Home Maintenance",
  "Snagging Inspection",
  "Annual Contract",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi Arcta Group, I'd like to request a service.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Service: ${form.service}`,
      form.message ? `Details: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${business.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-hero-glow opacity-70" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: info */}
          <div>
            <Reveal>
              <span className="eyebrow-light">
                <span className="h-px w-6 bg-emerald-400" />
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4 text-white">
                Ready to work with <span className="text-brand">Arcta Group?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-mist-300">
                Whether you manage 5 properties or 500, we&apos;d love to understand your needs and
                show you what a reliable maintenance partner looks like. Free quotes returned within
                the hour.
              </p>
            </Reveal>

            <div className="mt-9 space-y-3">
              <a
                href={business.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-[#25D366]/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <Icon name="whatsapp" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-mist-400">WhatsApp</p>
                  <p className="font-semibold text-white">{business.phoneDisplay}</p>
                </div>
                <Icon name="arrowUpRight" className="ml-auto h-5 w-5 text-mist-500 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href={business.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-royal-400/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-500/15 text-royal-300">
                  <Icon name="phone" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-mist-400">Call us</p>
                  <p className="font-semibold text-white">{business.phoneDisplay}</p>
                </div>
                <Icon name="arrowUpRight" className="ml-auto h-5 w-5 text-mist-500 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href={business.emailHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-emerald-400/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Icon name="mail" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-mist-400">Email</p>
                  <p className="font-semibold text-white">{business.email}</p>
                </div>
                <Icon name="arrowUpRight" className="ml-auto h-5 w-5 text-mist-500 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <Reveal y={36}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white p-6 text-navy-900 shadow-card-lg sm:p-8"
            >
              <p className="font-display text-xl font-bold">Request a service</p>
              <p className="mt-1 text-sm text-mist-600">
                Send us the details and we&apos;ll reply via WhatsApp within the hour.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="input"
                    placeholder="+971 ..."
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Email (optional)" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="input"
                    placeholder="you@email.com"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Service required" htmlFor="service">
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="input"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="input resize-none"
                    placeholder="Tell us about your property and what you need..."
                  />
                </Field>
              </div>

              <button type="submit" className="btn btn-primary mt-6 w-full">
                <Icon name="whatsapp" className="h-4 w-4" />
                Send via WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-mist-500">
                Prefer email? Write to{" "}
                <a href={business.emailHref} className="font-medium text-royal-600 underline">
                  {business.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #0b1426;
          transition: all 0.2s ease;
        }
        :global(.input::placeholder) {
          color: #94a3b8;
        }
        :global(.input:focus) {
          outline: none;
          border-color: #1d4ed8;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-900">{label}</span>
      {children}
    </label>
  );
}
