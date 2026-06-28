import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arcta Group — Premium Property Services Across The UAE",
    short_name: "Arcta Group",
    description:
      "Premium AC maintenance, duct cleaning, home sanitisation, water filtration, snagging inspections and property maintenance across Dubai and the UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E1B2B",
    theme_color: "#0E1B2B",
    lang: "en-AE",
    categories: ["business", "utilities", "lifestyle"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
