import { BeforeAfter } from "@/components/before-after";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyFeature({ study }: { study: CaseStudy }) {
  const hasPhotos = Boolean(study.beforeImage && study.afterImage);

  return (
    <article className="grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <p className="text-[0.72rem] tracking-[0.18em] text-gold-deep uppercase">
          {study.service}
          <span className="mx-3 text-gold">/</span>
          {study.location}
        </p>
        <h3 className="mt-4 font-display text-4xl text-ink md:text-5xl">{study.title}</h3>
        <dl className="mt-10 space-y-7">
          <div>
            <dt className="text-[0.72rem] tracking-[0.16em] text-quiet uppercase">Problem</dt>
            <dd className="mt-2 text-lg text-ink">{study.problem}</dd>
          </div>
          <div>
            <dt className="text-[0.72rem] tracking-[0.16em] text-quiet uppercase">What we did</dt>
            <dd className="mt-2 max-w-md text-base leading-7 text-quiet">{study.work}</dd>
          </div>
          <div>
            <dt className="text-[0.72rem] tracking-[0.16em] text-quiet uppercase">Result</dt>
            <dd className="mt-2 text-lg text-ink">{study.result}</dd>
          </div>
        </dl>
      </div>

      {hasPhotos ? (
        <BeforeAfter
          before={study.beforeImage!}
          after={study.afterImage!}
          beforeAlt={study.beforeAlt ?? `Before: ${study.title}`}
          afterAlt={study.afterAlt ?? `After: ${study.title}`}
        />
      ) : (
        <div className="grid min-h-[320px] grid-cols-1 border border-line sm:grid-cols-2">
          <div className="flex flex-col justify-between bg-mist p-7 md:p-10">
            <p className="text-[0.72rem] tracking-[0.18em] text-quiet uppercase">Before</p>
            <p className="mt-8 font-display text-3xl leading-tight text-ink">{study.problem}</p>
          </div>
          <div className="flex flex-col justify-between bg-ink p-7 text-white md:p-10">
            <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">After</p>
            <p className="mt-8 font-display text-3xl leading-tight">{study.result}</p>
          </div>
        </div>
      )}
    </article>
  );
}
