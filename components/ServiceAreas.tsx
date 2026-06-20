"use client";

import { motion } from "framer-motion";
import { serviceAreas } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon } from "./Icons";

export default function ServiceAreas() {
  return (
    <section id="areas" className="relative bg-mist-100 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Service Areas"
          title={<>Covering Dubai &amp; the wider UAE</>}
          description="One consistent professional standard, wherever your property is located across the Emirates."
        />

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {serviceAreas.map((area) => (
            <motion.div
              key={area.name}
              variants={staggerItem}
              className="group flex items-start gap-4 rounded-2xl border border-mist-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card-lg"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal-50 text-royal-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-navy-900">{area.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
