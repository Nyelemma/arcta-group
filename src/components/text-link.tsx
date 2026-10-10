import Link from "next/link";
import { cn } from "cn";

export function TextLink({
  href,
  children,
  className,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.16em] uppercase",
        light ? "text-white" : "text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "border-b pb-1",
          light ? "border-gold-light" : "border-gold",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
