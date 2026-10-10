import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";

export function Field({
  label,
  required = false,
  htmlFor,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-[0.72rem] tracking-[0.14em] text-ink uppercase">
        {label}
        {required ? (
          <span aria-hidden className="ml-1 text-gold-deep">
            *
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm text-[#9f2d2d]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-quiet"
      />
    </div>
  );
}
