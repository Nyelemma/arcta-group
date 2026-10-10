import Image from "next/image";
import { Camera } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { recentWork, type WorkCard, type WorkPhoto } from "@/content/recent-work";

export function RecentWork() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-28">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6">
        <div>
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">Documented, not described.</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-quiet">
          Every visit is written up the same way. Before and after photographs are filed with the job report.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8">
        {recentWork.map((card) => (
          <li key={card.slug}>
            <WorkCardView card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function WorkCardView({ card }: { card: WorkCard }) {
  return (
    <article className="h-full rounded-[14px] border border-line bg-white p-4 md:rounded-none md:p-6">
      <h3 className="text-[0.72rem] font-normal tracking-[0.18em] text-gold-deep uppercase">{card.service}</h3>
      <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
        <Photo label="Before" photo={card.before} />
        <Photo label="After" photo={card.after} />
      </div>
      {card.description ? <p className="mt-5 text-sm leading-6 text-ink/75">{card.description}</p> : null}
    </article>
  );
}

function Photo({ label, photo }: { label: "Before" | "After"; photo?: WorkPhoto }) {
  return (
    <figure className="relative aspect-square overflow-hidden rounded-[10px] bg-mist md:rounded-none">
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 22vw, 44vw"
          className="object-cover"
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-2 px-3 text-center text-quiet">
          <Camera aria-hidden className="size-6 text-gold-deep" strokeWidth={1.2} />
          <span className="text-[0.68rem] tracking-[0.14em] uppercase">Photo coming soon</span>
        </div>
      )}
      <figcaption
        className={`absolute top-2 left-2 rounded-[6px] px-2 py-1 text-[0.62rem] tracking-[0.16em] uppercase md:rounded-none ${
          label === "After" ? "bg-gold text-ink" : "bg-ink/85 text-white"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}
