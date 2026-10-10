"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [position, setPosition] = useState(54);
  const frame = useRef<HTMLDivElement>(null);

  function move(clientX: number) {
    const bounds = frame.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(90, Math.max(10, next)));
  }

  return (
    <div
      ref={frame}
      className="relative aspect-[4/5] cursor-ew-resize overflow-hidden bg-ink select-none sm:aspect-[16/11]"
      onPointerDown={(event) => {
        (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
        move(event.clientX);
      }}
      onPointerMove={(event) => {
        if ((event.currentTarget as HTMLDivElement).hasPointerCapture(event.pointerId)) {
          move(event.clientX);
        }
      }}
      role="slider"
      aria-valuemin={10}
      aria-valuemax={90}
      aria-valuenow={Math.round(position)}
      aria-label="Before and after comparison"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") setPosition((value) => Math.max(10, value - 4));
        if (event.key === "ArrowRight") setPosition((value) => Math.min(90, value + 4));
      }}
    >
      <Image src={after} alt={afterAlt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={beforeAlt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white" style={{ left: `${position}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs text-ink">
          ↔
        </span>
      </div>
      <span className="pointer-events-none absolute top-4 left-4 bg-ink/85 px-3 py-1 text-[0.68rem] tracking-[0.16em] text-white uppercase">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 bg-white/90 px-3 py-1 text-[0.68rem] tracking-[0.16em] text-ink uppercase">
        After
      </span>
    </div>
  );
}
