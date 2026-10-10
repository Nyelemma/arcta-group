import type { MetadataRoute } from "next";
import { furtherServices } from "@/content/further-services";
import { categories, services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/annual-home-care",
    "/property-managers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const paths = [
    ...staticPaths,
    ...categories.map((category) => `/services/${category.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
    ...services.map((service) => `/${service.adsSlug}`),
    ...furtherServices.map((service) => `/${service.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
