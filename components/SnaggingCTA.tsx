"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { snagging, snaggingStats } from "@/lib/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

export default function SnaggingCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-royal-900 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-emerald-glow opacity-50" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-royal-500/20 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow-light">
                <span className="h-px w-6 bg-emerald-400" />
                Snagging Inspections
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4 text-white">{snagging.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-mist-300">
                A new property is one of the biggest investments you&apos;ll make. An independent
                snagging inspection ensures the developer fixes defects on their cost — before you
                ever take handover.
              </p>
            </Reveal>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {snaggingStats.map((stat) => (
                <Reveal key={stat.label} delay={0.15} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <p className="font-display text-3xl font-bold text-emerald-300 sm:text-4xl">
                    {stat.display ? (
                      <>
                        {stat.prefix ?? ""}
                        {stat.display}
                        {stat.suffix ?? ""}
                      </>
                    ) : (
                      <CountUp to={stat.value} prefix={stat.prefix ?? ""} suffix={stat.suffix ?? ""} />
                    )}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-mist-400">{stat.label}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/snagging" className="btn btn-emerald">
                  Book an Inspection
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="btn btn-ghost-light">
                  Get a Quote
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Common issues card */}
          <Reveal y={36}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Icon name="search" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-white">Common defects we find</p>
                  <p className="text-sm text-mist-400">On a typical UAE handover</p>
                </div>
              </div>
              <motion.ul
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              >
                {snagging.commonIssues.map((issue) => (
                  <motion.li
                    key={issue}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 text-sm text-mist-200"
                  >
                    <Icon name="bolt" className="h-4 w-4 shrink-0 text-emerald-400" />
                    {issue}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
