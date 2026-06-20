"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "@/lib/content";
import { Icon } from "./Icons";

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={business.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Arcta Group on WhatsApp"
          className="group fixed bottom-5 right-5 z-[110] flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] sm:bottom-7 sm:right-7"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.5s]" />
          <Icon name="whatsapp" className="relative h-6 w-6" />
          <span className="relative hidden text-sm font-semibold sm:block">WhatsApp Us</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
