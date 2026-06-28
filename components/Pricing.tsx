"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { pricing } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Annual Service Contracts"
          title={
            <>
              Predictable costs. <span className="text-brand">Reliable service.</span>
            </>
          }
          description="Every portfolio is different. We assess your requirements and provide a transparent, itemised quote with no hidden costs — returned within the hour."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={[
                "relative flex h-full flex-col overflow-hidden rounded-3xl border p-8",
                tier.highlighted
                  ? "border-transparent bg-navy-900 text-white shadow-card-lg lg:-mt-4 lg:mb-4"
                  : "border-mist-200 bg-white text-navy-900 shadow-card",
              ].join(" ")}
            >
              {tier.highlighted && (
                <>
                  <div className="absolute inset-0 bg-hero-glow opacity-70" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
                </>
              )}

              <div className="relative flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                {tier.badge && (
                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    {tier.badge}
                  </span>
                )}
              </div>

              <p
                className={[
                  "relative mt-2 text-sm",
                  tier.highlighted ? "text-mist-300" : "text-mist-600",
                ].join(" ")}
              >
                {tier.description}
              </p>

              <div className="relative mt-6">
                <span className="font-display text-3xl font-bold">{tier.priceLabel}</span>
                <span
                  className={[
                    "ml-2 text-sm",
                    tier.highlighted ? "text-mist-400" : "text-mist-500",
                  ].join(" ")}
                >
                  {tier.priceNote}
                </span>
              </div>

              <div
                className={[
                  "relative my-6 h-px w-full",
                  tier.highlighted ? "bg-white/10" : "bg-mist-200",
                ].join(" ")}
              />

              <ul className="relative space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="check"
                      className={[
                        "mt-0.5 h-4 w-4 shrink-0",
                        tier.highlighted ? "text-emerald-400" : "text-emerald-500",
                      ].join(" ")}
                    />
                    <span className={tier.highlighted ? "text-mist-200" : "text-mist-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={[
                  "btn relative mt-8 w-full",
                  tier.highlighted ? "btn-emerald" : "btn-dark",
                ].join(" ")}
              >
                {tier.cta.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-mist-500">
          All quotes are free, transparent and tailored to your specific property. We respond
          within the hour.
        </p>
      </div>
    </section>
  );
}
