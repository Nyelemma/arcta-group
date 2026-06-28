import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/content";

type LogoProps = {
  /** default: navbar | footer: dark footer bar | loader: splash screen */
  variant?: "default" | "footer" | "loader";
  linked?: boolean;
  className?: string;
};

const sizes = {
  default: { height: 38, className: "h-[38px] w-auto" },
  footer: { height: 34, className: "h-[34px] w-auto" },
  loader: { height: 52, className: "h-[52px] w-auto" },
};

export default function Logo({
  variant = "default",
  linked = true,
  className = "",
}: LogoProps) {
  const size = sizes[variant];
  const img = (
    <Image
      src={business.logo}
      alt={business.logoAlt}
      width={240}
      height={50}
      priority={variant === "loader"}
      className={`${size.className} ${className}`}
    />
  );

  const wrap =
    variant === "footer" || variant === "loader" ? (
      <span className="inline-flex rounded-lg bg-white px-3 py-2">{img}</span>
    ) : (
      img
    );

  if (!linked) return wrap;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Arcta Group home">
      {wrap}
    </Link>
  );
}
