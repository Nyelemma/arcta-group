"use client";

import { motion } from "framer-motion";
import { reasons } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-hero-glow opacity-70" />
      <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-[0.12]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="The Arcta Group Difference"
          title="Why property professionals choose us"
          description="A level of professionalism rarely found in the UAE maintenance market — consistent, documented and genuinely reliable."
          light
        />

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.07]"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-royal-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-emerald-500/20" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-300 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={reason.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold">{reason.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-mist-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
