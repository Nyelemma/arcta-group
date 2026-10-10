import Link from "next/link";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { name: string; path: string }[];
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-white/60" : "text-quiet";
  const strong = tone === "light" ? "text-white" : "text-ink";
  return (
    <nav aria-label="Breadcrumb" className={`text-[0.72rem] tracking-[0.14em] uppercase ${muted}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden className="text-gold">/</span> : null}
              {last ? (
                <span className={strong} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={tone === "light" ? "hover:text-white" : "hover:text-ink"}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
