"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";
import { Icon } from "./Icons";

const words = hero.headline.split(" ");

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900 text-white"
    >
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850" />
        <div className="absolute inset-0 bg-hero-glow" />
        <motion.div
          className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-royal-500/20 blur-[120px]"
          animate={reduce ? {} : { y: [0, 30, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[120px]"
          animate={reduce ? {} : { y: [0, -24, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-[0.18] mask-fade-b" />
      </div>

      <div className="container-x relative z-10 grain">
        <div className="grid items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-mist-200 backdrop-blur"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {hero.eyebrow}
            </motion.span>

            <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4rem]">
              {words.map((word, i) => {
                const clean = word.replace(/[^A-Za-z]/g, "");
                const isHighlight = (hero.highlight as readonly string[]).includes(clean);
                return (
                  <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        delay: 0.3 + i * 0.07,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {isHighlight ? <span className="text-brand">{word}</span> : word}
                    </motion.span>
                  </span>
                );
              })}
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300 sm:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
            >
              <Link href={hero.primaryCta.href} className="btn btn-primary">
                {hero.primaryCta.label}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link href={hero.secondaryCta.href} className="btn btn-ghost-light">
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } } }}
            >
              {hero.trustIndicators.map((t) => (
                <motion.div
                  key={t.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur"
                >
                  <Icon name={t.icon} className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-medium leading-snug text-mist-200">{t.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: glass media card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 shadow-card-lg">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -left-8 bottom-10 w-52 rounded-2xl border border-white/15 bg-white/95 p-4 shadow-card-lg backdrop-blur"
              animate={reduce ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon name="clipboard" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-navy-900">100%</p>
                  <p className="text-xs text-mist-600">Jobs documented</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-6 top-12 w-48 rounded-2xl border border-white/15 bg-white/95 p-4 shadow-card-lg backdrop-blur"
              animate={reduce ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal-50 text-royal-600">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-navy-900">24hr</p>
                  <p className="text-xs text-mist-600">Response time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
