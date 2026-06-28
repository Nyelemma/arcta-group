import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, business, seoKeywords } from "@/lib/content";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const TITLE = "Arcta Group | Premium AC Maintenance & Property Services Across The UAE";
const DESCRIPTION =
  "Arcta Group delivers premium AC maintenance, duct cleaning, home sanitisation, water filtration, snagging inspections and property maintenance across Dubai and the UAE. Cleaner air, healthier homes and better living environments. Request a service today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Arcta Group",
  },
  description: DESCRIPTION,
  applicationName: business.name,
  keywords: seoKeywords,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  alternates: { canonical: "/" },
  appleWebApp: {
    capable: true,
    title: business.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: business.name,
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Property Services",
};

export const viewport: Viewport = {
  themeColor: "#0E1B2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-royal-500 focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
      </body>
    </html>
  );
}
