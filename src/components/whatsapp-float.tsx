"use client";

import { usePathname } from "next/navigation";
import { whatsappHref } from "@/content/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Arcta Group"
      className="fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-12px_rgba(7,94,84,0.8)] transition-transform hover:scale-105 md:inline-flex"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
