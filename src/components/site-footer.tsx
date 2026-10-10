import Image from "next/image";
import Link from "next/link";
import { categories } from "@/content/services";
import { furtherServices } from "@/content/further-services";
import { site, whatsappHref } from "@/content/site";
import { CookieSettingsButton } from "@/components/cookie-banner";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookie Policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo-light.png"
            alt="Arcta"
            width={736}
            height={547}
            className="h-24 w-auto md:h-28"
          />
          <p className="mt-8 max-w-sm text-sm leading-7 text-white/70">
            Premium AC care, home maintenance and upholstery care for homes and
            managed properties across Dubai and the wider UAE.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 border border-white/20 px-5 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:border-gold hover:text-gold-light"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp Arcta
          </a>
        </div>

        <div>
          <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/services/${category.slug}`} className="hover:text-white">
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/annual-home-care" className="hover:text-white">
                Annual Home Care
              </Link>
            </li>
            <li>
              <Link href="/property-managers" className="hover:text-white">
                Property Managers
              </Link>
            </li>
            {furtherServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">Company</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.coverage}</li>
            <li>{site.hours}</li>
          </ul>
          <p className="mt-8 text-[0.72rem] tracking-[0.18em] text-gold uppercase">Service areas</p>
          <p className="mt-4 text-sm leading-7 text-white/75">{site.areas.join(" · ")}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-5 pt-6 pb-24 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8 md:pb-6">
          <p>© {new Date().getFullYear()} Arcta Group. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <CookieSettingsButton className="underline underline-offset-2 hover:text-white" />
            <p>Dubai & the wider UAE</p>
            <p>
              Created by{" "}
              <a
                href="https://blueframedigital.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                blueframedigital.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
