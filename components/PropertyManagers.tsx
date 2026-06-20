"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { propertyManagers } from "@/lib/content";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";
import { Icon, type IconName } from "./Icons";

export default function PropertyManagers() {
  return (
    <section id="property-managers" className="relative bg-mist-100 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-royal-500" />
                {propertyManagers.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4">{propertyManagers.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-mist-600">
                {propertyManagers.intro}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {propertyManagers.audiences.map((aud) => (
                  <span key={aud} className="chip">
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />
                    {aud}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/property-managers" className="btn btn-primary mt-8">
                For Property Managers
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {propertyManagers.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group rounded-2xl border border-mist-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon name={feature.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
