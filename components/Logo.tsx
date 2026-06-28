import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/content";

type LogoProps = {
  /** default: light backgrounds (navbar) | footer & loader: dark backgrounds */
  variant?: "default" | "footer" | "loader";
  linked?: boolean;
  className?: string;
};

const sizes = {
  default: "h-7 w-auto sm:h-8",
  footer: "h-9 w-auto",
  loader: "h-9 w-auto sm:h-11",
};

export default function Logo({
  variant = "default",
  linked = true,
  className = "",
}: LogoProps) {
  const onDark = variant === "footer" || variant === "loader";

  const img = (
    <Image
      src={onDark ? business.logoLight : business.logo}
      alt={business.logoAlt}
      width={1840}
      height={244}
      priority={variant === "loader"}
      className={`${sizes[variant]} ${className}`}
    />
  );

  if (!linked) return img;

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Arcta Group home"
    >
      {img}
    </Link>
  );
}
