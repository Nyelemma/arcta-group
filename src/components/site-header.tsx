"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { categories, servicesIn } from "@/content/services";
import { furtherServices } from "@/content/further-services";
import { site, whatsappHref } from "@/content/site";
import { QuoteLink } from "@/components/quote-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/annual-home-care", label: "Annual Home Care" },
  { href: "/property-managers", label: "Property Managers" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [pathSeen, setPathSeen] = useState(pathname);

  if (pathSeen !== pathname) {
    setPathSeen(pathname);
    setOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between gap-6 px-5 md:h-24 md:px-8">
        <Link href="/" className="shrink-0" aria-label="Arcta, home">
          <Image
            src="/brand/logo.png"
            alt="Arcta"
            width={736}
            height={547}
            priority
            className="h-10 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-5 min-[1280px]:gap-7 min-[1120px]:flex" aria-label="Primary">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={navClass(pathname === "/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            aria-current={isCurrent(pathname, "/about") ? "page" : undefined}
            className={navClass(isCurrent(pathname, "/about"))}
          >
            About
          </Link>

          <div
            className="relative flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(navClass(pathname.startsWith("/services")), "inline-flex items-center gap-1.5 leading-none")}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronDown
                aria-hidden
                className={cn("size-3 shrink-0 transition", servicesOpen && "rotate-180")}
                strokeWidth={1.75}
              />
            </button>
            {servicesOpen ? (
              <div className="absolute top-full left-1/2 z-50 w-[760px] -translate-x-1/2 pt-4">
                <div className="border border-line bg-white p-8 shadow-[0_24px_60px_-36px_rgba(14,27,43,0.45)]">
                  <div className="mb-6 h-px w-10 bg-gold" />
                  <div className="grid grid-cols-3 gap-8">
                    {categories.map((category) => (
                      <div key={category.slug}>
                        <Link
                          href={`/services/${category.slug}`}
                          className="font-display text-base text-ink"
                        >
                          {category.name}
                        </Link>
                        <ul className="mt-4 space-y-2.5">
                          {servicesIn(category.slug).map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="text-sm text-quiet transition-colors hover:text-ink"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 text-xs tracking-wide text-quiet uppercase">
                    {furtherServices.map((service) => (
                      <Link key={service.slug} href={`/${service.slug}`} className="hover:text-ink">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className={navClass(isCurrent(pathname, link.href))}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 min-[1120px]:flex">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 px-3 text-[0.75rem] font-medium tracking-[0.14em] text-ink uppercase"
          >
            <WhatsAppIcon className="size-4 text-whatsapp" />
            WhatsApp
          </a>
          <QuoteLink className="inline-flex h-11 items-center bg-ink px-5 text-[0.75rem] font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-ink-soft">
            Get a free quote
          </QuoteLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 min-w-11 items-center justify-end px-1 text-[0.75rem] tracking-[0.16em] text-ink uppercase md:min-w-0 md:justify-start min-[1120px]:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden className="md:hidden">
            {open ? <X className="size-7" strokeWidth={1.4} /> : <Menu className="size-7" strokeWidth={1.4} />}
          </span>
          <span aria-hidden className="hidden md:inline">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-14 bottom-0 z-[60] overflow-auto border-t border-line bg-white md:top-24 min-[1120px]:hidden"
        >
          <nav className="mx-auto flex max-w-[1320px] flex-col px-5 py-6 pb-28" aria-label="Mobile">
            <MobileLink href="/" current={pathname === "/"}>
              Home
            </MobileLink>
            <MobileLink href="/about" current={isCurrent(pathname, "/about")}>
              About
            </MobileLink>
            <button
              type="button"
              className="flex items-center justify-between border-b border-line py-3.5 text-left font-display text-xl text-ink md:py-4 md:text-3xl"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((value) => !value)}
            >
              Services
              <ChevronDown
                aria-hidden
                className={cn("size-5 text-quiet transition-transform md:hidden", mobileServices && "rotate-180")}
                strokeWidth={1.4}
              />
              <span className="hidden font-sans text-sm tracking-[0.14em] text-quiet uppercase md:inline">
                {mobileServices ? "Hide" : "Show"}
              </span>
            </button>
            {mobileServices ? (
              <div className="border-b border-line py-4">
                {categories.map((category) => (
                  <div key={category.slug} className="mb-5">
                    <Link href={`/services/${category.slug}`} className="text-sm tracking-[0.14em] text-gold-deep uppercase">
                      {category.name}
                    </Link>
                    <ul className="mt-2 space-y-2">
                      {servicesIn(category.slug).map((service) => (
                        <li key={service.slug}>
                          <Link href={`/services/${service.slug}`} className="text-base text-ink">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
            <MobileLink href="/annual-home-care" current={isCurrent(pathname, "/annual-home-care")}>
              Annual Home Care
            </MobileLink>
            <MobileLink href="/property-managers" current={isCurrent(pathname, "/property-managers")}>
              Property Managers
            </MobileLink>
            <MobileLink href="/contact" current={isCurrent(pathname, "/contact")}>
              Contact
            </MobileLink>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 bg-whatsapp text-[0.78rem] tracking-[0.14em] text-white uppercase"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
              <QuoteLink
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center bg-gold text-[0.78rem] font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:bg-gold-light"
              >
                Get a free quote
              </QuoteLink>
            </div>
            <p className="mt-6 text-sm text-quiet">
              {site.phoneDisplay}
              <span className="mx-2 text-gold">/</span>
              {site.email}
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function navClass(active: boolean) {
  return cn(
    "text-[0.75rem] tracking-[0.14em] whitespace-nowrap uppercase transition-colors",
    active ? "text-ink" : "text-quiet hover:text-ink",
  );
}

function MobileLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className="border-b border-line py-3.5 font-display text-xl text-ink md:py-4 md:text-3xl"
    >
      {children}
    </Link>
  );
}
