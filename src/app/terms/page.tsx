import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: "Terms for requesting and receiving services from Arcta Group in the UAE.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms" path="/terms" updated="September 2026">
      <p>
        These terms apply when you ask Arcta Group for a quote or a service in the United Arab Emirates. They are the working terms of an enquiry. A signed annual plan or a written quote replaces them where the two differ.
      </p>
      <h2>Quotes</h2>
      <p>
        Quotes are free and itemised. They are an offer for the scope described, not a confirmation that work has started. Work proceeds when you accept the quote. Prices are in AED unless a quote says otherwise. We accept {site.paymentAccepted.join(", ").toLowerCase()}.
      </p>
      <h2>Access and the property</h2>
      <p>
        You arrange access and tell us about anything we need to know to work safely. Technicians will treat the property with care. If a job turns out to be larger than the quote — for example damage beyond a minor repair — we stop and requote rather than expanding the visit quietly.
      </p>
      <h2>Documentation</h2>
      <p>
        Visits include photographs and a written note of the work. Those records are for you, your landlord or your manager. They are a description of what was done, not a warranty beyond the scope that was agreed.
      </p>
      <h2>Timing</h2>
      <p>
        We aim to reply via WhatsApp within the hour, and emergency support is available 24/7. Those are service standards, not a guarantee that a technician will be inside every property within a fixed number of minutes, unless a contract specifically says so. Annual plans include 60-minute priority callouts for contract holders.
      </p>
      <h2>Law</h2>
      <p>
        These terms are governed by the laws of the United Arab Emirates, as they apply in Dubai. Questions: {site.email}.
      </p>
    </LegalPage>
  );
}
