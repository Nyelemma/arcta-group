import Link from "next/link";
import { business, serviceNav, companyLinks, legalLinks, serviceAreas } from "@/lib/content";
import { Icon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-mist-300">
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient font-display text-lg font-bold text-white">
                A
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Arcta Group
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist-400">
              Premium AC maintenance, duct cleaning, snagging inspections and property
              maintenance, trusted by property managers, landlords and homeowners across the UAE.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={business.whatsapp}
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-[#25D366] hover:border-transparent"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
              </a>
              <a
                href={business.instagramUrl}
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-brand-gradient hover:border-transparent"
              >
                <Icon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href={business.emailHref}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-royal-500 hover:border-transparent"
              >
                <Icon name="mail" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest2 text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-mist-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest2 text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-mist-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest2 text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={business.phoneHref} className="group flex items-start gap-3 text-mist-400 hover:text-white">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{business.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="group flex items-start gap-3 text-mist-400 hover:text-white">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span className="break-all">{business.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-mist-400">
                <Icon name="pin" className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Serving Dubai &amp; the wider UAE</span>
              </li>
              <li className="flex items-start gap-3 text-mist-400">
                <Icon name="clock" className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>{business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-widest2 text-mist-500">Service Areas</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-mist-400">
            {serviceAreas.map((area) => (
              <span key={area.name}>{area.name}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-mist-500 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
