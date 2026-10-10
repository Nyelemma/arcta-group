import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Arcta Group | AC & Home Care in Dubai",
  description:
    "Professional AC services, home maintenance and upholstery care across Dubai. Clear quotes, documented visits and direct WhatsApp contact with Arcta Group.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
