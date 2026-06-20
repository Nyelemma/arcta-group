"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";
import Placeholder from "./Placeholder";
import { Icon, type IconName } from "./Icons";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Media */}
          <Reveal className="relative order-last lg:order-first">
            <div className="relative">
              <Placeholder
                label="Founder / team photo"
                icon="badge"
                tone="navy"
                className="aspect-[4/5] w-full shadow-card-lg"
              />
              <motion.div
                className="absolute -bottom-6 -right-4 w-60 rounded-2xl border border-mist-200 bg-white p-5 shadow-card-lg sm:right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-display text-lg font-bold leading-tight text-navy-900">
                  One call. One standard. Every time.
                </p>
                <p className="mt-2 text-sm text-mist-600">{about.signature}</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-royal-500" />
                {about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4">{about.title}</h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p
                    className={[
                      "leading-relaxed text-pretty",
                      i === about.paragraphs.length - 1
                        ? "font-display text-lg font-semibold text-navy-900"
                        : "text-mist-600",
                    ].join(" ")}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {about.pillars.map((pillar) => (
                <motion.div
                  key={pillar.number}
                  variants={staggerItem}
                  className="group rounded-2xl border border-mist-200 bg-mist-100/60 p-5 transition-all duration-300 hover:border-royal-200 hover:bg-white hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-royal-600 shadow-sm ring-1 ring-mist-200 transition-colors group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                      <Icon name={pillar.icon as IconName} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm font-bold text-mist-300">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-600">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
