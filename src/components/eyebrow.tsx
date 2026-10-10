import { cn } from "cn";

/**
 * Small uppercase label above a heading. Below `md` it gains a short gold rule
 * in front of the text; from `md` upwards it is unchanged.
 */
export function Eyebrow({
  children,
  tone = "gold-deep",
  className,
}: {
  children: React.ReactNode;
  tone?: "gold-deep" | "gold";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.72rem] tracking-[0.2em] uppercase",
        "before:mr-3 before:inline-block before:h-px before:w-6 before:bg-gold before:align-middle md:before:hidden",
        tone === "gold" ? "text-gold" : "text-gold-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}
