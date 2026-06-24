"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { snagging } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export default function Snagging() {
  return (
    <section id="snagging" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={snagging.eyebrow}
          title={
            <>
              Independent <span className="text-brand">snagging inspections</span>
            </>
          }
          description={snagging.intro}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left: types + audiences */}
          <div>
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {snagging.types.map((type) => (
                <motion.div
                  key={type.title}
                  variants={staggerItem}
                  className="rounded-2xl border border-mist-200 bg-mist-100/60 p-5 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-card"
                >
                  <h3 className="font-display text-base font-bold text-navy-900">{type.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-600">{type.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-mist-200 bg-white p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-widest2 text-mist-500">
                  Who it&apos;s for
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {snagging.audiences.map((aud) => (
                    <div key={aud.label} className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Icon name={aud.icon as IconName} className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-navy-900">{aud.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Link href="/snagging" className="btn btn-emerald mt-6">
                Explore Snagging Inspections
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          {/* Right: inspection checklist visual */}
          <Reveal y={36}>
            <InspectionChecklist />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function InspectionChecklist() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-mist-200 bg-white shadow-card-lg">
      {/* Header */}
      <div className="relative overflow-hidden bg-navy-900 px-6 py-5 text-white">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-emerald-300">
              <Icon name="clipboard" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base font-bold">{snagging.checklistTitle}</p>
              <p className="text-xs text-mist-400">Sample inspection report</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            120+ checks
          </span>
        </div>
      </div>

      {/* Checklist body */}
      <div className="divide-y divide-mist-200">
        {snagging.checklist.map((group, gi) => (
          <motion.div
            key={group.area}
            className="px-6 py-4"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-navy-900">{group.area}</span>
              <span className="chip text-emerald-600">
                <Icon name="check" className="h-3.5 w-3.5" />
                Pass
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-mist-100 px-2.5 py-1 text-xs text-mist-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-mist-100 px-6 py-4">
        <span className="text-sm font-medium text-mist-600">Full photographic report</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
          <Icon name="document" className="h-4 w-4" />
          PDF delivered same day
        </span>
      </div>
    </div>
  );
}
