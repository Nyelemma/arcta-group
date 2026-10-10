import { Breadcrumbs } from "@/components/breadcrumbs";

export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[760px] px-5 py-16 md:px-8 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: title, path },
        ]}
      />
      <h1 className="mt-6 font-display text-5xl text-ink">{title}</h1>
      <p className="mt-4 text-sm text-quiet">Last updated {updated}</p>
      <div className="mt-10 space-y-5 text-base leading-8 text-quiet [&_h2]:pt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </article>
  );
}
