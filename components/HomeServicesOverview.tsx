"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { homepageServices, homeServicesSection } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export default function HomeServicesOverview() {
  return (
    <section id="services" className="relative bg-mist-100 py-16 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow={homeServicesSection.eyebrow}
          title={homeServicesSection.title}
          description={homeServicesSection.description}
        />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {homepageServices.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-3xl border border-mist-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon name={service.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600">
                  Learn more
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
