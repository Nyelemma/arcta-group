"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="relative bg-mist-100 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title={<>Complete property care, one trusted partner</>}
          description="From routine AC maintenance to emergency repairs, deep cleaning and detailed snagging inspections — every service delivered to one professional standard."
        />

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <Link
                href={service.href}
                className={[
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300",
                  service.featured
                    ? "border-transparent bg-navy-900 text-white shadow-card-lg hover:-translate-y-1"
                    : "border-mist-200 bg-white text-navy-900 shadow-card hover:-translate-y-1 hover:border-royal-200 hover:shadow-card-lg",
                ].join(" ")}
              >
                {service.featured && (
                  <>
                    <div className="absolute inset-0 bg-hero-glow opacity-70" />
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
                    <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      <Icon name="sparkle" className="h-3.5 w-3.5" />
                      Most Requested
                    </span>
                  </>
                )}

                <span
                  className={[
                    "relative grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
                    service.featured
                      ? "bg-white/10 text-emerald-300"
                      : "bg-royal-50 text-royal-600 group-hover:bg-brand-gradient group-hover:text-white",
                    service.featured ? "mt-5" : "",
                  ].join(" ")}
                >
                  <Icon name={service.icon as IconName} className="h-7 w-7" />
                </span>

                <h3 className="relative mt-5 font-display text-xl font-bold">{service.title}</h3>
                <p
                  className={[
                    "relative mt-2.5 text-sm leading-relaxed",
                    service.featured ? "text-mist-300" : "text-mist-600",
                  ].join(" ")}
                >
                  {service.description}
                </p>

                <ul className="relative mt-5 space-y-2">
                  {service.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className={[
                        "flex items-center gap-2 text-sm",
                        service.featured ? "text-mist-300" : "text-mist-700",
                      ].join(" ")}
                    >
                      <Icon
                        name="check"
                        className={[
                          "h-4 w-4 shrink-0",
                          service.featured ? "text-emerald-400" : "text-emerald-500",
                        ].join(" ")}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span
                  className={[
                    "relative mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold",
                    service.featured ? "text-emerald-300" : "text-royal-600",
                  ].join(" ")}
                >
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
