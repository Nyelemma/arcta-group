import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Arcta Group handles enquiry details sent by phone, email or WhatsApp.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="September 2026">
      <p>
        Arcta Group (&quot;we&quot;) provides AC, home maintenance and property services in Dubai and the wider UAE. This page explains what we do with the information you send us. We do not publish a street address; contact us at {site.email} or {site.phoneDisplay}.
      </p>
      <h2>What we collect</h2>
      <p>
        If you use the booking form, call, or message us, we receive the details you choose to give: name, phone number, email address, the service you need, the property or area, your message, and how you prefer to be contacted.
      </p>
      <h2>Website analytics</h2>
      <p>
        If you accept cookies, we use Google Analytics and Google Tag Manager to measure how visitors find the site and which pages lead to an enquiry. When you send an enquiry, we also note where your visit came from, such as a Google search or an advert, so we know which marketing works. See our Cookie Policy for details and how to change your choice.
      </p>
      <h2>How we use it</h2>
      <p>
        We use those details to reply, quote, schedule and carry out the work, and to send the documentation that belongs with the visit. We do not sell personal information.
      </p>
      <h2>WhatsApp and email</h2>
      <p>
        If you choose WhatsApp, your message is sent through WhatsApp, which is operated by a third party under its own terms. If you choose email, the message is sent to {site.email}. Please do not include information you would not want held in those channels.
      </p>
      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and job records for as long as we need them to complete the work, handle a follow-up, or meet a legal duty. You can ask us to delete an enquiry that has not become a job.
      </p>
      <h2>Your requests</h2>
      <p>
        To ask what we hold, or to correct it, email {site.email}. We will respond to the address or number you used to contact us.
      </p>
    </LegalPage>
  );
}
