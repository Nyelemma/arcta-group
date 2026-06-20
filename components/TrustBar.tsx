"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";
import CountUp from "./CountUp";

export default function TrustBar() {
  return (
    <section className="relative border-y border-mist-200 bg-mist-100">
      <div className="container-x py-10 lg:py-12">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                <CountUp
                  to={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                />
              </span>
              <span className="mt-2 text-sm font-medium text-mist-600">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
