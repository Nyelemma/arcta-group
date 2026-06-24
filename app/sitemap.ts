import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/snagging-inspections", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ac-maintenance", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/duct-coil-cleaning", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/home-sanitisation", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/water-filtration", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/property-maintenance", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/annual-maintenance-contracts", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/property-managers", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
