import { processSteps } from "@/content/site";

export function ProcessList() {
  return (
    <ol className="grid gap-8 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.title} className="border-t border-line pt-5">
          <p className="text-[0.72rem] tracking-[0.16em] text-gold-deep">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-quiet">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
