import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TextLink } from "@/components/text-link";
import { furtherServices } from "@/content/further-services";
import { categories } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "AC services, home maintenance and upholstery care from Arcta Group, plus deep cleaning and snagging across Dubai.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <h1 className="mt-6 max-w-[14ch] font-display text-5xl text-ink md:text-6xl">
        Everything your home needs.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-quiet">
        Three ways to look after a home, each with its own page, and the property services Arcta already carries out across the UAE.
      </p>
      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {categories.map((category) => (
          <article key={category.slug} className="flex flex-col">
            <div className="relative aspect-[4/5] bg-mist">
              <Image src={category.image} alt={category.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <h2 className="mt-6 font-display text-3xl text-ink">{category.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-quiet">{category.lede}</p>
            <div className="mt-5">
              <TextLink href={`/services/${category.slug}`}>{category.navCta}</TextLink>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-16 border-t border-line pt-10">
        <p className="text-[0.72rem] tracking-[0.18em] text-gold-deep uppercase">Also from Arcta</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {furtherServices.map((service) => (
            <li key={service.slug}>
              <TextLink href={`/${service.slug}`}>{service.name}</TextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
