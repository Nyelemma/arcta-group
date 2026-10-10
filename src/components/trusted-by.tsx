import Image from "next/image";
import { trustedClient } from "@/content/site";

/** Renders nothing until a client and logo are configured in `trustedClient`. */
export function TrustedBy() {
  if (!trustedClient) return null;

  return (
    <section aria-label="Client" className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-4 px-5 py-8 md:flex-row md:gap-8 md:px-8">
        <p className="text-[0.72rem] tracking-[0.2em] text-quiet uppercase">Trusted by {trustedClient.name}</p>
        <Image
          src={trustedClient.logo.src}
          alt={trustedClient.name}
          width={trustedClient.logo.width}
          height={trustedClient.logo.height}
          className="h-10 w-auto object-contain md:h-12"
        />
      </div>
    </section>
  );
}
