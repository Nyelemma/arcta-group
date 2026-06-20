"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs as defaultFaqs, type Faq } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function FAQ({ items = defaultFaqs }: { items?: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know about working with Arcta Group across the UAE."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-mist-200 overflow-hidden rounded-3xl border border-mist-200 bg-white shadow-card">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-mist-100"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={[
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "rotate-45 border-royal-300 bg-royal-50 text-royal-600"
                        : "border-mist-200 text-mist-600",
                    ].join(" ")}
                  >
                    <Icon name="close" className="h-4 w-4 rotate-45" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-mist-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
