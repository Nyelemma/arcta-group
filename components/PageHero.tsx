"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon, type IconName } from "./Icons";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  icon?: IconName;
  crumbs?: Crumb[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlights?: readonly string[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  icon = "ac",
  crumbs = [],
  primaryCta = { label: "Request Service", href: "/#contact" },
  secondaryCta,
  highlights = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-royal-500/20 blur-[120px]" />
      <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-[0.12] mask-fade-b" />

      <div className="container-x relative">
        <motion.nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-mist-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-2">
              <Icon name="arrowRight" className="h-3 w-3 text-mist-600" />
              <Link href={c.href} className="transition-colors hover:text-white">
                {c.label}
              </Link>
            </span>
          ))}
        </motion.nav>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-mist-200 backdrop-blur"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {eyebrow}
            </motion.span>

            <motion.h1
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-lg leading-relaxed text-mist-300"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6 }}
            >
              <Link href={primaryCta.href} className="btn btn-primary">
                {primaryCta.label}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn-ghost-light">
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>

            {highlights.length > 0 && (
              <motion.ul
                className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-mist-300">
                    <Icon name="check" className="h-4 w-4 text-emerald-400" />
                    {h}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="relative mx-auto grid aspect-square max-w-sm place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur grain">
              <div className="absolute inset-0 bg-grid-faint [background-size:30px_30px] opacity-30" />
              <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-royal-500/30 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-emerald-500/20 blur-3xl" />
              <span className="relative grid h-24 w-24 place-items-center rounded-3xl bg-white/10 text-emerald-300">
                <Icon name={icon} className="h-12 w-12" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
