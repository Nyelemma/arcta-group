import Link from "next/link";
import { business } from "@/lib/content";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

type CTABandProps = {
  title?: string;
  description?: string;
};

export default function CTABand({
  title = "Ready to work with Arcta Group?",
  description = "Free quotes returned within the hour. Tell us about your property and we'll show you what a reliable maintenance partner looks like.",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-mist-100 py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-royal-900 px-8 py-12 text-center shadow-card-lg sm:px-12 lg:py-16">
            <div className="absolute inset-0 bg-emerald-glow opacity-50" />
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-[100px]" />
            <div className="absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-royal-500/20 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-mist-300">{description}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary">
                  Request Service
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
                <a href={business.whatsappMessage} className="btn btn-whatsapp">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
