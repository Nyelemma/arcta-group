import type { Metadata } from "next";
import { site } from "@/content/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = new URL(path, site.url).toString();
  const image = new URL(site.ogImage, site.url).toString();
  const fullTitle = title.includes("Arcta") ? title : `${title} | Arcta Group`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: image,
          width: 768,
          height: 1024,
          alt: "Arcta Group technician servicing a ceiling air vent",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
