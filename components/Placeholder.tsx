import { Icon, type IconName } from "./Icons";

type PlaceholderProps = {
  /** Slot label shown subtly so you know which photo goes here. */
  label?: string;
  icon?: IconName;
  className?: string;
  rounded?: string;
  tone?: "navy" | "royal" | "emerald" | "light";
};

/**
 * Premium gradient image placeholder.
 * Drop a real photo into /public/images and replace this with <Image /> when ready.
 */
export default function Placeholder({
  label,
  icon = "ac",
  className = "",
  rounded = "rounded-3xl",
  tone = "navy",
}: PlaceholderProps) {
  const tones: Record<string, string> = {
    navy: "from-navy-900 via-navy-800 to-royal-900",
    royal: "from-royal-700 via-royal-500 to-emerald-500",
    emerald: "from-emerald-600 via-emerald-500 to-royal-500",
    light: "from-mist-100 via-mist-200 to-mist-300",
  };
  const iconColor = tone === "light" ? "text-mist-400" : "text-white/30";
  const labelColor = tone === "light" ? "text-mist-500" : "text-white/40";

  return (
    <div
      className={`relative grain overflow-hidden bg-gradient-to-br ${tones[tone]} ${rounded} ${className}`}
    >
      <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-12 -left-6 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
        <Icon name={icon} className={`h-12 w-12 ${iconColor}`} />
        {label && (
          <span className={`text-xs font-medium uppercase tracking-widest2 ${labelColor}`}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
