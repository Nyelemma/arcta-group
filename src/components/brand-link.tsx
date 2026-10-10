import Link from "next/link";
import { cn } from "cn";
import { QUOTE_HREF, QuoteLink } from "@/components/quote-link";
import { Button } from "@/components/ui/button";

const styles = {
  primary:
    "h-12 rounded-[10px] md:rounded-none bg-ink px-6 text-[0.78rem] font-medium tracking-[0.14em] text-white uppercase hover:bg-ink-soft",
  gold: "h-12 rounded-[10px] md:rounded-none bg-gold px-6 text-[0.78rem] font-medium tracking-[0.14em] text-ink uppercase hover:bg-gold-light",
  outline:
    "h-12 rounded-[10px] md:rounded-none border border-ink/20 bg-transparent px-6 text-[0.78rem] font-medium tracking-[0.14em] text-ink uppercase hover:border-ink hover:bg-white",
  outlineLight:
    "h-12 rounded-[10px] md:rounded-none border border-white/30 bg-transparent px-6 text-[0.78rem] font-medium tracking-[0.14em] text-white uppercase hover:border-white hover:bg-white/10",
  whatsapp:
    "h-12 rounded-[10px] md:rounded-none bg-whatsapp px-6 text-[0.78rem] font-medium tracking-[0.14em] text-white uppercase hover:bg-[#054940]",
} as const;

export function BrandLink({
  href,
  children,
  tone = "primary",
  className,
  external = false,
  prefillNotes,
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof styles;
  className?: string;
  external?: boolean;
  prefillNotes?: string;
}) {
  if (href === QUOTE_HREF) {
    return (
      <Button asChild className={cn(styles[tone], className)}>
        <QuoteLink prefillNotes={prefillNotes}>{children}</QuoteLink>
      </Button>
    );
  }

  return (
    <Button asChild className={cn(styles[tone], className)}>
      <Link
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    </Button>
  );
}
