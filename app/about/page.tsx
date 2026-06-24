import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ServiceEnquiry from "@/components/ServiceEnquiry";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icons";
import { aboutPage } from "@/lib/content";
import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Arcta Group | Premium Property Services UAE",
  description:
    "Learn about Arcta Group — the UAE's trusted partner for AC maintenance, deep cleaning, water filtration and property care. Our mission, values and commitment to professional service.",
  path: "/about",
  keywords: ["about Arcta Group", "property services UAE", "maintenance company Dubai"],
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow={aboutPage.hero.eyebrow}
          title={aboutPage.hero.title}
          description={aboutPage.hero.description}
          icon="badge"
          crumbs={[{ label: "About", href: "/about" }]}
          highlights={[
            "Uniformed professionals",
            "Full job documentation",
            "Direct communication",
          ]}
        />

        <About />

        {/* Mission & values */}
        <section className="bg-mist-100 py-20 lg:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Our Mission"
              title="One call. One standard. Every time."
              description={aboutPage.mission}
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPage.values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-mist-200 bg-white p-6 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal-600">
                      <Icon name={value.icon as IconName} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-mist-600">
                {aboutPage.experience}
              </p>
            </Reveal>
          </div>
        </section>

        <WhyChooseUs />
        <Process />
        <Testimonials />
        <ServiceEnquiry
          title="Ready to work with Arcta Group?"
          description="Whether you manage one property or five hundred, we'd love to show you what a reliable maintenance partner looks like."
          ctaLabel="Get In Touch"
        />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
