import { LogoMark } from "@/components/ui/logo-mark";
import { site } from "@/lib/site";

const sizes = {
  md: { icon: "h-7 w-7", text: "text-xl" },
  lg: { icon: "h-9 w-9", text: "text-2xl" },
} as const;

// Full logo lock-up: the monogram mark + the "anuradha." wordmark
// (Concept 5 — "The Premium Wordmark" — lower case, tight tracking, the
// trailing full stop redrawn as the same accent-green used in the mark).
export function Logo({
  tone = "navy",
  size = "md",
  className = "",
}: {
  tone?: "navy" | "white";
  size?: keyof typeof sizes;
  className?: string;
}) {
  const textColor = tone === "white" ? "text-white" : "text-navy";
  const s = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={`${s.icon} ${textColor}`} />
      <span
        className={`${s.text} font-extrabold ${textColor}`}
        style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
      >
        {site.logoWord}
        <span className="text-green">.</span>
      </span>
    </span>
  );
}
