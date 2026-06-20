# Arcta Group — Premium Property Services Website

Enterprise-grade marketing website for **Arcta Group**, a UAE-based AC maintenance, duct cleaning, property maintenance and snagging inspection company.

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS** and **Framer Motion**, with a premium navy / royal-blue / emerald design system, full structured-data markup and an SEO-first hybrid page architecture.

## Tech stack

- Next.js 14 (App Router, Server Components)
- TypeScript
- Tailwind CSS 3.4
- Framer Motion 11
- `next/font` (Inter + Plus Jakarta Sans)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Project structure

```
app/
  layout.tsx                     Root layout, metadata, LocalBusiness JSON-LD
  page.tsx                       Home (full premium landing page)
  globals.css                    Theme tokens, components, utilities
  sitemap.ts / robots.ts         SEO route files
  icon.svg                       Favicon
  snagging-inspections/          Dedicated SEO sub-page
  ac-maintenance/                Dedicated SEO sub-page
  duct-coil-cleaning/            Dedicated SEO sub-page
  property-maintenance/          Dedicated SEO sub-page
  annual-maintenance-contracts/  Dedicated SEO sub-page
  property-managers/             B2B SEO sub-page
components/                      One component per section + shared helpers
lib/
  content.ts                     SINGLE SOURCE OF TRUTH for copy + image slots
  seo.ts                         Shared SEO/schema helpers
public/images/                   Drop real photography here (see lib/content.ts)
```

## Editing content

All copy, contact details, services, pricing tiers, FAQs and **image slots** live in
[`lib/content.ts`](lib/content.ts). Update text there and it flows through the whole site.

## Adding photography

The site ships with premium CSS/gradient placeholders so it looks finished out of the box.
To use real photos, drop image files into `public/images/<folder>/` and point the matching
`image` field in `lib/content.ts` at the new path (e.g. `/images/hero/hero.jpg`). Components
automatically render the photo instead of the placeholder.

## Contact details

- Email: alie@arctagroup.ae
- WhatsApp / Phone: +971 50 554 0919
- Instagram: [@arcta.ae](https://www.instagram.com/arcta.ae/)
