import { Eyebrow } from "@/components/eyebrow";
import { ProposalForm } from "@/components/proposal-form";

/** Navy proposal section. Carries the #quote id so every quote button on the page scrolls here. */
export function ProposalSection({ source }: { source: string }) {
  return (
    <section id="quote" className="scroll-mt-14 bg-ink text-white md:scroll-mt-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <Eyebrow tone="gold">For property managers</Eyebrow>
          <h2 className="mt-5 max-w-[14ch] font-display text-4xl leading-[1.02] md:text-6xl">
            Request a proposal
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75 md:text-lg md:leading-8">
            Tell us about your portfolio and we&apos;ll come back with a clear proposal.
          </p>
        </div>
        <div className="rounded-[14px] bg-white p-6 text-ink md:rounded-none md:p-10">
          <ProposalForm source={source} />
        </div>
      </div>
    </section>
  );
}
