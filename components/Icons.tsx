import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<string, React.ReactNode> = {
  ac: (
    <>
      <rect x="2.5" y="4.5" width="19" height="10" rx="2" />
      <path d="M6 11h12M6.5 18l1.5-3.5M17.5 18 16 14.5M11 18v-3.5M14 17.5l-3 .5-3-.5" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.4-.4-2.3 2.2-2.8Z" />
  ),
  droplet: <path d="M12 3s6 6.4 6 10.5A6 6 0 1 1 6 13.5C6 9.4 12 3 12 3Z" />,
  duct: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 6v12M11 6v12M15 6v12M19 6v12" />
    </>
  ),
  coil: <path d="M5 5h11a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h11" />,
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.4-.4-2.3 2.2-2.8Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M8.5 12l2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5 9 4l1 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1 .5 2.5a2 2 0 0 1-2.2 2.4A16 16 0 0 1 4.1 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l5 5v13H7V3Z" />
      <path d="M14 3v5h5M10 13h6M10 16.5h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4M9 14l2 2 3-3.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="3.5" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="3.5" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 3h-2" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="m11 11 8 8M16 16l2-2M18.5 18.5l1.5-1.5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l9 9-7 7-9-9Z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  star: (
    <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9L12 3Z" />
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.9 12.4c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6a9.3 9.3 0 0 1-3.6-3.3c-.3-.4-.6-1-.6-1.6 0-.6.3-1 .5-1.2.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4l.6 1.4c0 .2.1.3 0 .4l-.3.5-.3.3c-.1.1-.2.2-.1.4.2.4.6 1 1.2 1.5.7.6 1.2.8 1.6 1 .2 0 .3 0 .5-.1l.6-.7c.2-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.3.1.1.1.6-.1 1.1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  sparkle: (
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
};

export type IconName = keyof typeof iconNames;
const iconNames = {
  ac: 1, wrench: 1, droplet: 1, duct: 1, coil: 1, tools: 1, search: 1, clock: 1,
  pin: 1, clipboard: 1, badge: 1, chat: 1, phone: 1, shield: 1, document: 1,
  calendar: 1, chart: 1, headset: 1, key: 1, tag: 1, building: 1, check: 1,
  arrowRight: 1, arrowUpRight: 1, star: 1, whatsapp: 1, mail: 1, instagram: 1,
  menu: 1, close: 1, sparkle: 1, bolt: 1,
} as const;

export function Icon({ name, ...props }: IconProps) {
  const filled = name === "star" || name === "whatsapp";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
