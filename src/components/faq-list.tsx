import Link from "next/link";
import type { Faq } from "@/content/services";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-xl text-ink md:text-2xl">
            {faq.question}
            <span aria-hidden className="text-gold transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pt-4 text-base leading-7 text-quiet">{faq.answer}</p>
          {faq.link ? (
            <Link
              href={faq.link.href}
              className="mt-3 inline-block text-sm text-ink underline decoration-gold underline-offset-4"
            >
              {faq.link.label}
            </Link>
          ) : null}
        </details>
      ))}
    </div>
  );
}
