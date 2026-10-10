# Arcta Group

Premium website for [Arcta Group](https://arctagroup.ae/), a Dubai home-services company. The live brand — navy and gold, the wordmark, and the published services — is the source of truth. The site covers AC care, home maintenance, upholstery care, annual home care and property managers.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal.

```bash
npm run build
npm run start
```

## Where to edit content

Business details live in `src/content/`, separate from the layout.

| File | What it controls |
| --- | --- |
| `src/content/site.ts` | Phone, email, WhatsApp number, areas, founder story |
| `src/content/services.ts` | Service copy, FAQs, images, and Google Ads slugs |
| `src/content/further-services.ts` | Deep cleaning, snagging |
| `src/content/plans.ts` | Annual Home Care plans, how it works and FAQs |
| `src/content/recent-work.ts` | Homepage before/after cards. Add `after` and `description` to a card as the photos and copy arrive |
| `src/content/case-studies.ts` | Case study shown on a service page when its `serviceSlug` matches |

WhatsApp links are built from `site.whatsappNumber` only.

## Quote form

The homepage (under the hero and as the final section) and every service page carry the same quote form. It posts to `/api/quote`, which validates the request and delivers it by email and WhatsApp. Every "Get a free quote" button scrolls to the `#quote` section on the current page, or to the homepage form when the page has none.

Copy `.env.example` to `.env.local` and fill in what you have. The server variables are read at runtime; the `NEXT_PUBLIC_` ones are read at build time.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY`, `QUOTE_EMAIL_FROM`, `QUOTE_EMAIL_TO` | Email delivery through [Resend](https://resend.com). Defaults to `info@arctagroup.ae`. Verify the sending domain in Resend and use an address on it for `QUOTE_EMAIL_FROM` |
| `WHATSAPP_CLOUD_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `QUOTE_WHATSAPP_TO` | WhatsApp delivery through the Meta WhatsApp Business Cloud API. Defaults to +44 7593 838658 |
| `WHATSAPP_TEMPLATE_NAME`, `WHATSAPP_TEMPLATE_LANG` | An approved message template with one body variable. WhatsApp only delivers free-form text to numbers that messaged your business in the last 24 hours, so a template is needed for reliable delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 (`G-XXXXXXXXXX`). A successful submit sends the `generate_lead` event; mark it as a key event in GA4 |
| `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSION` | Google Ads tag (`AW-XXXXXXXXX`) and the conversion `send_to` value (`AW-XXXXXXXXX/label`) |

A submission counts as delivered when at least one channel accepts it. If none is configured, or all fail, the visitor sees a prompt to send the same details on WhatsApp instead, and no conversion is tracked.

## Adding a service or ads page

1. Add a record to `services` in `src/content/services.ts`.
2. Set `slug` (becomes `/services/your-slug`) and `adsSlug` (becomes `/your-slug`).
3. The service page, ads landing page and sitemap pick it up automatically.

Old Arcta URLs redirect: `/ac-maintenance`, `/duct-coil-cleaning`, `/property-maintenance`, `/contracts`.

## Photography

`public/brand` holds the Arcta logo and mark. `public/images/technician.jpg` is an Arcta photograph. Other interiors are editorial placeholders for atmosphere — they are not documented jobs. Replace them with Arcta photography when it is available, and point case studies at real before/after files.

## Stack

Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui primitives for buttons, inputs and labels.
