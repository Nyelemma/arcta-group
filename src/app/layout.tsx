import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-tag-manager";
import { JsonLd } from "@/components/json-ld";
import { LeadTracking } from "@/components/lead-tracking";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Arcta Group | AC & Home Care in Dubai",
    template: "%s | Arcta Group",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Property Services",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title: "Arcta Group | AC & Home Care in Dubai",
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 768,
        height: 1024,
        alt: "Arcta Group technician servicing a ceiling air vent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcta Group | AC & Home Care in Dubai",
    description: site.description,
    images: [site.ogImage],
  },
  icons: { icon: "/brand/icon.png", apple: "/brand/icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0E1B2B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        <LeadTracking />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <MobileActionBar />
        <CookieBanner />
      </body>
    </html>
  );
}
