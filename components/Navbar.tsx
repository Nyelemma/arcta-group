"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { business, nav } from "@/lib/content";
import { Icon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-[120] border-b bg-white/95 backdrop-blur-xl transition-all duration-300",
          scrolled ? "border-mist-200 shadow-glass" : "border-mist-200/70",
        ].join(" ")}
      >
        <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center gap-4 px-5 sm:px-8 lg:px-10">
          <Logo />

          <div className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-mist-700 transition-colors hover:bg-mist-100 hover:text-navy-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={business.phoneHref}
              className="hidden text-sm font-semibold text-navy-900 2xl:block"
            >
              {business.phoneDisplay}
            </a>
            <Link href="/#contact" className="btn btn-primary px-5 py-2.5 text-sm">
              Request Service
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-mist-200 bg-white text-navy-900 xl:hidden"
            aria-label="Open menu"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[130] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-card-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-navy-900">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-mist-200 text-navy-900"
                  aria-label="Close menu"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-navy-900 hover:bg-mist-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  Request Service
                </Link>
                <a href={business.whatsapp} className="btn btn-whatsapp w-full">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
