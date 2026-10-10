import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BrandLink } from "@/components/brand-link";
import { CaseStudyFeature } from "@/components/case-study";
import { Eyebrow } from "@/components/eyebrow";
import { FaqList } from "@/components/faq-list";
import { ProcessList } from "@/components/process-list";
import { QUOTE_HREF, QuoteLink } from "@/components/quote-link";
import { WorkCardView } from "@/components/recent-work";
import { QuoteSection } from "@/components/quote-section";
import { TextLink } from "@/components/text-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { caseStudies } from "@/content/case-studies";
import { recentWork } from "@/content/recent-work";
import type { FurtherService } from "@/content/further-services";
import {
  getCategory,
  servicesIn,
  type CategoryRecord,
  type ServiceRecord,
} from "@/content/services";
import { telHref, whatsappHref } from "@/content/site";
import { quoteServiceFor } from "@/lib/quote-service";

export function CategoryView({ category }: { category: CategoryRecord }) {
  const items = servicesIn(category.slug);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1320px] items-end gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: category.name, path: `/services/${category.slug}` },
              ]}
            />
            <h1 className="mt-6 max-w-[14ch] font-display text-5xl leading-[0.95] text-ink md:text-7xl">
              {category.name}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-ink">{category.headline}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-quiet">{category.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandLink href={QUOTE_HREF}>Get a free quote</BrandLink>
              <a
                href={whatsappHref(`Hi Arcta Group, I'd like to ask about ${category.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 px-3 text-[0.78rem] tracking-[0.14em] uppercase"
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-mist sm:aspect-[5/4]">
            <Image src={category.image} alt={category.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[860px] px-5 py-16 md:px-8 md:py-20">
        {category.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-5 text-lg leading-8 text-quiet first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>

      <div>
        {items.map((service, index) => (
          <ServiceBand key={service.slug} service={service} index={index} layout={category.layout} />
        ))}
      </div>

      <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-4xl text-ink">How a visit works</h2>
        <div className="mt-10">
          <ProcessList />
        </div>
      </section>

      <QuoteSection anchor defaultService={quoteServiceFor(category.slug)} source={`service:${category.slug}`} />
    </>
  );
}

function ServiceBand({
  service,
  index,
  layout,
}: {
  service: ServiceRecord;
  index: number;
  layout: CategoryRecord["layout"];
}) {
  const reverse = layout !== "editorial" && index % 2 === 1;
  return (
    <section id={service.slug} className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : undefined}>
          <div className={`relative overflow-hidden bg-mist ${layout === "editorial" ? "aspect-[16/11]" : "aspect-[4/5] sm:aspect-[5/4]"}`}>
            <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" />
          </div>
        </div>
        <div className={reverse ? "lg:order-1" : undefined}>
          <p className="text-[0.72rem] tracking-[0.16em] text-gold-deep">0{index + 1}</p>
          <h2 className="mt-3 font-display text-4xl text-ink">{service.name}</h2>
          <p className="mt-4 text-lg leading-8 text-ink">{service.lede}</p>
          <ul className="mt-6 space-y-2 text-sm leading-6 text-quiet">
            {service.benefits.slice(0, 3).map((benefit) => (
              <li key={benefit.title}>
                <span className="text-ink">{benefit.title}. </span>
                {benefit.text}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BrandLink href={QUOTE_HREF}>Get a free quote</BrandLink>
            <a
              href={whatsappHref(`Hi Arcta Group, I'd like to book ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.14em] uppercase"
            >
              <WhatsAppIcon className="size-4 text-whatsapp" />
              WhatsApp
            </a>
            <TextLink href={`/services/${service.slug}`}>Service details</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceView({ service }: { service: ServiceRecord }) {
  const category = getCategory(service.category);
  const related = caseStudies.filter((study) => study.serviceSlug === service.slug);
  const siblings = servicesIn(service.category).filter((item) => item.slug !== service.slug);
  const beforeAfterCards = recentWork.filter((card) => service.beforeAfter?.includes(card.slug));

  return (
    <>
      <section className="bg-white">
        <div
          className={`mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-8 md:py-24 ${
            service.hideHeroImage ? "" : "lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          }`}
        >
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: category?.name ?? "Services", path: `/services/${service.category}` },
                { name: service.name, path: `/services/${service.slug}` },
              ]}
            />
            {service.heroEyebrow ? (
              <div className="mt-6">
                <Eyebrow>{service.heroEyebrow}</Eyebrow>
              </div>
            ) : null}
            <h1
              className={`${service.heroEyebrow ? "mt-4" : "mt-6"} font-display text-5xl leading-[0.95] text-ink md:text-6xl`}
            >
              {service.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-quiet">{service.callHero?.lede ?? service.heroLede ?? service.lede}</p>
            <div className="mt-8 grid gap-3 sm:max-w-[27rem] sm:grid-cols-2">
              {service.callHero ? (
                <BrandLink href={telHref()} tone="gold">
                  <Phone aria-hidden className="size-4" strokeWidth={1.8} />
                  Call now
                </BrandLink>
              ) : (
                <BrandLink href={QUOTE_HREF} tone="gold">
                  Get a free quote
                </BrandLink>
              )}
              <BrandLink
                href={whatsappHref(`Hi Arcta Group, I'd like to book ${service.name}.`)}
                tone="outline"
                external
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                {service.callHero ? "WhatsApp us" : "WhatsApp"}
              </BrandLink>
            </div>
            {service.callHero?.note ?? service.heroNote ? (
              <p className="mt-4 text-sm text-quiet">{service.callHero?.note ?? service.heroNote}</p>
            ) : null}
            {service.heroPhoto ? (
              <div className="relative mt-8 aspect-[16/10] max-w-xl overflow-hidden lg:max-w-2xl rounded-[14px] bg-mist md:rounded-none">
                <Image
                  src={service.heroPhoto.src}
                  alt={service.heroPhoto.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
          {service.hideHeroImage ? null : (
            <div className="relative aspect-[4/5] bg-mist sm:aspect-[5/4]">
              <Image src={service.image} alt={service.imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-5 text-lg leading-8 text-ink first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="border border-line bg-white p-7 md:p-9">
          <p className="text-[0.72rem] tracking-[0.16em] text-gold-deep uppercase">
            {service.includesHeading ?? "Included"}
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-ink">
            {service.includes.map((item) => (
              <li key={item} className="border-b border-line pb-3 last:border-0">
                {item}
              </li>
            ))}
          </ul>
          {service.includesNote ? <p className="mt-5 text-sm leading-6 text-quiet">{service.includesNote}</p> : null}
        </div>
      </section>

      {service.signs ? (
        <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-4xl text-ink">{service.signs.heading}</h2>
          <ul className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {service.signs.items.map((item) => (
              <li
                key={item}
                className="flex gap-4 rounded-[14px] border border-line bg-white p-5 text-base leading-7 text-ink md:rounded-none"
              >
                <span aria-hidden className="mt-3 block h-px w-5 shrink-0 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-4xl text-ink">Why it matters</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <article key={benefit.title}>
                <h3 className="font-display text-2xl text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-quiet">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {beforeAfterCards.length ? (
        <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-4xl text-ink">Before and after</h2>
          <ul className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-8">
            {beforeAfterCards.map((card) => (
              <li key={card.slug}>
                <WorkCardView card={card} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {related.map((study) => (
        <section key={study.slug} className="mx-auto max-w-[1320px] px-5 py-16 md:px-8">
          <p className="text-[0.72rem] tracking-[0.18em] text-gold-deep uppercase">Recent work</p>
          <div className="mt-8">
            <CaseStudyFeature study={study} />
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-[1320px] px-5 py-8 md:px-8 md:py-12">
        <h2 className="font-display text-4xl text-ink">How a visit works</h2>
        <div className="mt-10">
          <ProcessList />
        </div>
      </section>

      {service.annualCare ? (
        <section className="mx-auto max-w-[900px] px-5 pt-8 md:px-8 md:pt-12">
          <div className="rounded-[14px] border-2 border-gold bg-white p-6 md:rounded-none md:p-10">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">{service.annualCare}</p>
            <div className="mt-6">
              <BrandLink href="/annual-home-care" tone="gold" className="w-full sm:w-auto">
                View Annual Home Care
              </BrandLink>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-[900px] px-5 py-16 md:px-8">
        <h2 className="font-display text-4xl text-ink">Questions</h2>
        <div className="mt-8">
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <QuoteSection
        anchor
        defaultService={quoteServiceFor(service.slug)}
        source={`service:${service.slug}`}
        heading={service.quoteHeading}
      />

      {siblings.length ? (
        <section className="mx-auto max-w-[1320px] px-5 py-14 md:px-8">
          <p className="text-[0.72rem] tracking-[0.16em] text-quiet uppercase">Also in {category?.name}</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {siblings.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="text-sm text-ink underline decoration-gold underline-offset-4">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}

export function LandingView({ service }: { service: ServiceRecord }) {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-[0.72rem] tracking-[0.18em] text-gold-deep uppercase">Dubai & the wider UAE</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-ink md:text-6xl">{service.adsH1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-quiet">{service.adsLede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteLink className="inline-flex h-12 items-center bg-ink px-6 text-[0.78rem] tracking-[0.14em] text-white uppercase">
                Get a free quote
              </QuoteLink>
              <a
                href={whatsappHref(`Hi Arcta Group, I'd like to book ${service.name} in Dubai.`)}
                className="inline-flex h-12 items-center gap-2 border border-ink/15 px-5 text-[0.78rem] tracking-[0.14em] uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-mist sm:aspect-[5/4]">
            <Image src={service.image} alt={service.imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-14 md:px-8">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 36)} className="mt-5 text-lg leading-8 text-quiet first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>
      <section className="bg-mist">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          {service.benefits.map((benefit) => (
            <article key={benefit.title}>
              <h2 className="font-display text-2xl text-ink">{benefit.title}</h2>
              <p className="mt-3 text-sm leading-7 text-quiet">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1320px] px-5 py-14 md:px-8">
        <h2 className="font-display text-4xl text-ink">What happens next</h2>
        <div className="mt-8">
          <ProcessList />
        </div>
      </section>
      <section className="mx-auto max-w-[860px] px-5 pb-6 md:px-8">
        <h2 className="font-display text-4xl text-ink">Questions</h2>
        <div className="mt-6">
          <FaqList faqs={service.faqs} />
        </div>
      </section>
      <QuoteSection
        anchor
        defaultService={quoteServiceFor(service.slug)}
        source={`landing:${service.adsSlug}`}
        heading={service.quoteHeading}
      />
      <p className="mx-auto max-w-[1320px] px-5 py-8 text-sm text-quiet md:px-8">
        Prefer the full service page?{" "}
        <Link href={`/services/${service.slug}`} className="text-ink underline decoration-gold underline-offset-4">
          Read about {service.name}
        </Link>
        .
      </p>
    </>
  );
}

export function FurtherView({ service }: { service: FurtherService }) {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: service.name, path: `/${service.slug}` },
              ]}
            />
            <p className="mt-6 text-[0.72rem] tracking-[0.18em] text-gold-deep uppercase">{service.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-ink md:text-6xl">{service.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-quiet">{service.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandLink href={QUOTE_HREF}>Get a free quote</BrandLink>
              <a
                href={whatsappHref(`Hi Arcta Group, I'd like to enquire about ${service.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 px-2 text-[0.78rem] tracking-[0.14em] uppercase"
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/4] bg-mist">
            <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" priority />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[820px] px-5 py-16 md:px-8">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-5 text-lg leading-8 text-ink first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          {service.groups.map((group) => (
            <article key={group.title} className="border-t border-line pt-6">
              <h2 className="font-display text-2xl text-ink">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-quiet">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit) => (
            <article key={benefit.title}>
              <h2 className="font-display text-2xl text-ink">{benefit.title}</h2>
              <p className="mt-3 text-sm leading-7 text-quiet">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[900px] px-5 py-8 md:px-8">
        <h2 className="font-display text-4xl text-ink">Questions</h2>
        <div className="mt-6">
          <FaqList faqs={service.faqs} />
        </div>
      </section>
      <QuoteSection anchor defaultService="other" source={`service:${service.slug}`} />
    </>
  );
}
