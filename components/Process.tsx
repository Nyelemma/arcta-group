"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Icon, type IconName } from "./Icons";

export default function Process() {
  return (
    <section id="process" className="relative bg-mist-100 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, transparent process"
          description="From first message to follow-up support, every step is clear, documented and handled directly by our team."
        />

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-mist-300 to-transparent lg:block" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {process.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center lg:px-2"
              >
                <span className="relative z-10 grid h-[68px] w-[68px] place-items-center rounded-2xl border border-mist-200 bg-white text-royal-600 shadow-card">
                  <Icon name={step.icon as IconName} className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-royal-glow">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-600">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
