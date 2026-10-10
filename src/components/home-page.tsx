import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  FileText,
  House,
  ShieldCheck,
  Wrench,
  Snowflake,
  Sofa,
  type LucideIcon,
} from "lucide-react";
import { BrandLink } from "@/components/brand-link";
import { Eyebrow } from "@/components/eyebrow";
import { QUOTE_HREF } from "@/components/quote-link";
import { QuoteSection } from "@/components/quote-section";
import { RecentWork } from "@/components/recent-work";
import { TextLink } from "@/components/text-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { categories, servicesIn, type CategorySlug } from "@/content/services";
import {
  homepageFounderStory,
  managerPoints,
  mobileWhyPoints,
  whatsappHref,
  whyPoints,
} from "@/content/site";

const pillarImages = {
  "ac-services": {
    src: "/images/technician.jpg",
    alt: "Arcta Group technician servicing a ceiling air-conditioning vent",
  },
  "home-maintenance": {
    src: "/images/villa.jpg",
    alt: "White contemporary villa with a shaded terrace",
  },
  "upholstery-care": {
    src: "/images/sofa.jpg",
    alt: "A dark sofa framed by a pale arched opening",
  },
} as const;

const pillarIcons: Record<CategorySlug, LucideIcon> = {
  "ac-services": Snowflake,
  "home-maintenance": House,
  "upholstery-care": Sofa,
};

const heroTrust: { label: string; Icon: LucideIcon }[] = [
  { label: "Licensed & fully insured", Icon: ShieldCheck },
  { label: "Before & after documentation", Icon: Camera },
];
const mobileWhyIcons: LucideIcon[] = [FileText, Camera, Wrench];

export function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1320px] lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="flex flex-col justify-center px-5 py-10 md:px-8 md:py-20 lg:py-16 lg:pr-16">
            <Eyebrow>
              <span className="md:hidden">AC specialists Dubai</span>
              <span className="hidden md:inline">Dubai & the wider UAE</span>
            </Eyebrow>
            <h1 className="mt-5 max-w-none font-display text-[2.25rem] leading-[1.02] text-ink md:leading-[0.92] md:max-w-[12ch] md:text-6xl lg:text-[4.6rem]">
              <span className="md:hidden">
                <span className="block">Cleaner AC.</span>
                <span className="block">Cooler home.</span>
                <span className="block text-gold-deep">Done properly.</span>
              </span>
              <span className="hidden md:inline">AC & home care, done properly.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-quiet md:mt-7 md:text-lg md:leading-8">
              <span className="md:hidden">
                AC servicing, coil and duct cleaning with photos of every job before and after.
              </span>
              <span className="hidden md:inline">
                Professional AC services, home maintenance and upholstery care across Dubai.
              </span>
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
              <BrandLink
                href={QUOTE_HREF}
                className="bg-gold text-ink hover:bg-gold-light md:bg-ink md:text-white md:hover:bg-ink-soft"
              >
                Get a free quote
                <ArrowRight aria-hidden className="size-4 md:hidden" />
              </BrandLink>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-line bg-white px-6 text-[0.78rem] font-medium tracking-[0.14em] text-ink uppercase md:rounded-none md:border-0 md:bg-transparent md:px-2 md:font-normal"
              >
                <WhatsAppIcon className="size-4 text-whatsapp" />
                WhatsApp<span className="md:hidden"> Us</span>
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-line pt-6 md:mt-12 md:gap-x-6">
              {heroTrust.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-[0.68rem] leading-[1.35] tracking-[0.08em] text-ink uppercase md:block md:text-[0.72rem] md:leading-5"
                >
                  <Icon aria-hidden className="size-6 shrink-0 text-gold-deep md:hidden" strokeWidth={1.2} />
                  <span aria-hidden className="mb-2 hidden h-px w-6 bg-gold md:block" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[380px] bg-ink md:min-h-[420px] lg:min-h-full">
            <Image
              src="/images/technician.jpg"
              alt="Arcta Group technician in uniform working on a ceiling air vent inside a home"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[center_20%]"
            />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-5 pt-20 pb-5 text-[0.68rem] leading-5 tracking-[0.18em] text-white uppercase md:hidden">
              Cleaner homes. Healthier spaces. A higher standard.
            </p>
          </div>
        </div>
      </section>

      <QuoteSection anchor source="home-hero" />

      <section id="services" className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">AC care, done properly.</h2>
        </div>

        <div className="mt-8 md:hidden">
          <div className="rounded-[14px] bg-ink p-6 text-white shadow-[0_24px_48px_-28px_rgba(14,27,43,0.7)]">
            <Snowflake aria-hidden className="size-9 text-gold" strokeWidth={1.1} />
            <h3 className="mt-5 font-display text-3xl text-white">AC Services</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Servicing, repairs and cleaning for every part of your system, with a clear quote first.
            </p>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {servicesIn("ac-services").map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between gap-4 py-3.5 text-base text-white transition-colors active:text-gold"
                  >
                    {service.name}
                    <ArrowRight aria-hidden className="size-4 shrink-0 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
            <BrandLink href="/services/ac-services" tone="gold" className="mt-6 w-full">
              Explore AC Services
              <ArrowRight aria-hidden className="size-4" />
            </BrandLink>
          </div>

          <p className="mt-8 text-[0.72rem] tracking-[0.2em] text-quiet uppercase">We also offer</p>
          <ul className="mt-3 space-y-3">
            {categories
              .filter((category) => category.slug !== "ac-services")
              .map((category) => {
                const Icon = pillarIcons[category.slug];
                return (
                  <li key={category.slug}>
                    <Link
                      href={`/services/${category.slug}`}
                      className="flex items-center gap-4 rounded-[14px] border border-line bg-white p-4 transition-colors active:bg-mist"
                    >
                      <Icon aria-hidden className="size-7 shrink-0 text-gold-deep" strokeWidth={1.1} />
                      <span className="min-w-0 flex-1 font-display text-lg font-medium tracking-[-0.034em] text-ink">
                        {category.name}
                      </span>
                      <ArrowRight aria-hidden className="size-4 shrink-0 text-ink" />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="hidden md:mt-24 md:block md:space-y-28">
          {categories.map((category, index) => {
            const image = pillarImages[category.slug];
            const reversed = index === 1;
            return (
              <article
                key={category.slug}
                className="reveal grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16 lg:pt-14"
              >
                <div className={reversed ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[5/4]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className={reversed ? "lg:order-1" : undefined}>
                  <p className="text-[0.72rem] tracking-[0.18em] text-gold-deep">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-4xl text-ink md:text-5xl">{category.name}</h3>
                  <p className="mt-5 max-w-md text-lg leading-8 text-ink">{category.headline}</p>
                  <p className="mt-4 max-w-md text-base leading-7 text-quiet">{category.lede}</p>
                  <div className="mt-8">
                    <TextLink href={`/services/${category.slug}`}>{category.navCta}</TextLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <RecentWork />

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-32">
          <h2 className="font-display text-4xl text-ink md:text-6xl">Why Arcta</h2>
          <p className="mt-3 font-display text-xl leading-snug text-quiet md:hidden">
            A higher standard in home care.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line md:hidden">
            {mobileWhyPoints.map((point, index) => {
              const Icon = mobileWhyIcons[index];
              return (
                <li key={point.title} className="flex gap-4 py-6">
                  {Icon ? <Icon aria-hidden className="mt-0.5 size-7 shrink-0 text-gold-deep" strokeWidth={1.1} /> : null}
                  <div>
                    <h3 className="font-display text-lg text-ink">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-quiet">{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="reveal mt-10 hidden gap-x-5 gap-y-9 md:mt-14 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8">
            {whyPoints.map((point, index) => {
              return (
                <article key={point.title}>
                  <p className="text-[0.72rem] tracking-[0.16em] text-gold-deep">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-2xl text-ink">{point.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-quiet">
                    {point.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="bg-ink">
          <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 md:py-28">
            <p className="max-w-4xl font-display text-3xl leading-tight text-white md:text-5xl">
              Built around the standard of service we&apos;d expect in our own homes.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute top-0 right-0 h-full w-px bg-gold/40" />
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-16 md:gap-12 md:px-8 md:py-32 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <Eyebrow tone="gold">Annual Home Care</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] font-display text-4xl leading-[1.02] md:text-6xl">
              One less thing to remember.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:mt-7 md:text-lg md:leading-8">
              When was your AC last cleaned? Most people can&apos;t remember. With Annual Care, you don&apos;t have to. We schedule your visits, keep track of everything, and look after your home all year round.
            </p>
            <div className="mt-8 md:mt-10">
              <BrandLink href="/annual-home-care" tone="gold" className="w-full md:w-auto">
                View Annual Home Care
                <ArrowRight aria-hidden className="size-4 md:hidden" />
              </BrandLink>
            </div>
          </div>
          <div className="rounded-[14px] border border-white/15 p-6 md:rounded-none md:p-9">
            <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">Membership, not a callout list</p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/80">
              <li>4 scheduled AC services a year, booked in for you</li>
              <li>Priority booking for repairs and callouts</li>
              <li>Discounted repair labour</li>
              <li>A record of every visit, with photos</li>
              <li>Two plans: Essential and Complete</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-16 md:gap-12 md:px-8 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>The founder</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">{homepageFounderStory.heading}</h2>
            <p className="mt-5 text-sm tracking-[0.14em] text-quiet uppercase md:mt-8">
              {homepageFounderStory.attribution}
            </p>
          </div>
          <div className="border-l border-gold pl-5 md:pl-10">
            {homepageFounderStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-5 text-base leading-7 text-ink first:mt-0 md:mt-6 md:text-lg md:leading-8"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <TextLink href="/about">Read my story</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-10 md:hidden">
        <Link
          href="/property-managers"
          className="flex items-center gap-4 rounded-[14px] bg-gold/10 p-5 transition-colors active:bg-gold/20"
        >
          <Building2 aria-hidden className="size-8 shrink-0 text-gold-deep" strokeWidth={1.1} />
          <p className="min-w-0 flex-1 text-sm leading-6 text-quiet">
            <span className="block font-display text-lg font-medium tracking-[-0.034em] text-ink">
              Managing properties?
            </span>
            Maintenance support for holiday homes and portfolios
          </p>
          <ArrowRight aria-hidden className="size-5 shrink-0 text-ink" />
        </Link>
      </section>

      <section className="hidden border-t border-line md:block">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-8 py-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>For portfolios</Eyebrow>
            <h2 className="mt-4 font-display text-5xl text-ink">
              Reliable maintenance support for property managers.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-quiet">
              Fast communication, clear quotes, before & after documentation and detailed service reports for every property.
            </p>
            <div className="mt-8">
              <TextLink href="/property-managers">Property management enquiries</TextLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-px bg-line">
            {managerPoints.map((point) => (
              <li key={point} className="bg-paper px-5 py-6 text-sm text-ink">
                <span className="mb-3 block h-px w-5 bg-gold" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteSection source="home-final" showContact />
    </>
  );
}
