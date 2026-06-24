"use client";

import { motion } from "framer-motion";
import type { Benefit } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

type BenefitGridProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  benefits: readonly Benefit[];
  muted?: boolean;
};

export default function BenefitGrid({
  eyebrow,
  title,
  description,
  benefits,
  muted = false,
}: BenefitGridProps) {
  return (
    <section className={muted ? "bg-mist-100 py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="group rounded-3xl border border-mist-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={b.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-600">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
