import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How the Arcta Group website uses cookies.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" path="/cookies" updated="September 2026">
      <p>
        This website uses Google Tag Manager and Google Analytics to understand how visitors find us and which pages lead to an enquiry. These cookies are only set if you choose Accept in the cookie banner.
      </p>
      <h2>What may be stored</h2>
      <p>
        If you accept, Google Analytics and Google Ads may set cookies that record which pages you view and whether you arrived from a search, an advert or another site. If you decline, those cookies are not set. The site also remembers your cookie choice in your browser, and keeps the source of your visit (for example, a Google search or an advert) for the length of your visit so we know where an enquiry came from. You can change your choice at any time using &quot;Cookie settings&quot; at the bottom of any page.
      </p>
      <h2>Third parties</h2>
      <p>
        If you leave this site for WhatsApp, Instagram or your email provider, those services use their own cookies under their own policies. We do not control them.
      </p>
      <h2>Changes</h2>
      <p>
        If we add another kind of cookie, this page will say so before it is used. Questions: {site.email}.
      </p>
    </LegalPage>
  );
}
