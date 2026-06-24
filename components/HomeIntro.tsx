"use client";

import Link from "next/link";
import { homeIntro } from "@/lib/content";
import Reveal from "./Reveal";
import { Icon } from "./Icons";

export default function HomeIntro() {
  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-royal-500" />
              {homeIntro.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">{homeIntro.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-mist-600 text-pretty">
              {homeIntro.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href={homeIntro.cta.href} className="btn btn-ghost mt-8">
              {homeIntro.cta.label}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
