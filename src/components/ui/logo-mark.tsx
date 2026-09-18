// The primary brand mark (Concept 1 — "The Monogram" from the logo brand system):
// a single letterform built from two square-capped strokes on an 8-unit grid —
// a vertical stroke (reads as the letter "A" / structural stability) crossed by
// one diagonal stroke in the accent color (the "growth line"). No container
// shape is added around it — see docs/business-strategy.md-adjacent brand deck
// for the full rationale. `currentColor` drives the main stroke so it inherits
// text color (text-navy on light backgrounds, text-white on dark ones).
export function LogoMark({
  className = "h-7 w-7",
  accent = "#00B894",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 150 150" fill="none" className={className} aria-hidden="true">
      <path
        d="M40 118 L40 32 L75 32"
        stroke="currentColor"
        strokeWidth="17"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path d="M58 78 L110 32" stroke={accent} strokeWidth="17" strokeLinecap="square" />
    </svg>
  );
}
