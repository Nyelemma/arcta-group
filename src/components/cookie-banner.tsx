"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getConsent, resetConsent, setConsent, subscribeConsent } from "@/lib/consent";

/** On the server and during hydration the banner stays hidden to avoid a flash. */
const getServerConsent = () => "granted" as const;

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);
  if (consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-[60] rounded-[14px] border border-line bg-white p-4 shadow-[0_8px_30px_rgb(0_0_0/0.08)] sm:right-auto sm:bottom-4 sm:left-4 sm:max-w-[22rem]"
    >
      <p className="text-xs leading-5 text-quiet">
        We use cookies to see how people find us and to improve the site.{" "}
        <Link href="/cookies" className="text-ink underline underline-offset-2">
          Cookie policy
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="inline-flex h-9 flex-1 items-center justify-center rounded-[10px] bg-ink px-4 text-xs font-medium text-white transition-colors hover:bg-ink/90"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="inline-flex h-9 flex-1 items-center justify-center rounded-[10px] border border-line px-4 text-xs font-medium text-ink transition-colors hover:bg-mist"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={resetConsent} className={className}>
      Cookie settings
    </button>
  );
}
