import { BrandLink } from "@/components/brand-link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[760px] px-5 py-28 md:px-8">
      <p className="text-[0.72rem] tracking-[0.18em] text-gold-deep uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink">This page is not on the site.</h1>
      <p className="mt-5 text-lg leading-8 text-quiet">
        The address may have changed. The services, annual care and contact pages are the useful places to continue.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <BrandLink href="/">Back home</BrandLink>
        <BrandLink href="/#quote" tone="outline">
          Get a free quote
        </BrandLink>
      </div>
    </div>
  );
}
