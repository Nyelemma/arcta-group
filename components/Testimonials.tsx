"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((prev) => (prev + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Feedback"
          title="Trusted by property professionals"
          description="Placeholder testimonials — ready to swap for real client reviews via your CMS."
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-mist-200 bg-mist-100/70 p-8 shadow-card sm:p-12">
            <div className="absolute -right-6 -top-8 select-none font-display text-[10rem] leading-none text-mist-200">
              &rdquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex gap-1 text-emerald-500">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl font-semibold leading-relaxed text-navy-900 sm:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white">
                    {active.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">{active.name}</p>
                    <p className="text-sm text-mist-600">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-royal-500" : "w-2 bg-mist-300 hover:bg-mist-400",
                  ].join(" ")}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-mist-200 bg-white text-navy-900 transition-colors hover:border-royal-300 hover:text-royal-600"
              >
                <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-mist-200 bg-white text-navy-900 transition-colors hover:border-royal-300 hover:text-royal-600"
              >
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
