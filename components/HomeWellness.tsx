"use client";

import { motion } from "framer-motion";
import { homeWellness } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export default function HomeWellness() {
  return (
    <section id="wellness" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={homeWellness.eyebrow}
          title={homeWellness.title}
          description={homeWellness.description}
        />

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {homeWellness.pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              className="group rounded-2xl border border-mist-200 bg-mist-100/60 p-6 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={pillar.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-600">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
