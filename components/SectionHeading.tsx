import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={[
        isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left",
      ].join(" ")}
    >
      {eyebrow && (
        <Reveal>
          <span className={light ? "eyebrow-light" : "eyebrow"}>
            <span
              className={[
                "h-px w-6",
                light ? "bg-royal-300" : "bg-royal-500",
              ].join(" ")}
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={[
            "section-title mt-4",
            light ? "text-white" : "text-navy-900",
          ].join(" ")}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={[
              "mt-5 text-lg leading-relaxed text-pretty",
              light ? "text-mist-300" : "text-mist-600",
              isCenter ? "mx-auto" : "",
            ].join(" ")}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
