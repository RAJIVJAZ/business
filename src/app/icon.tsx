import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Browser favicon / tab icon — the bare monogram mark, no container, per the
// brand system's "the letterform itself is the entire mark" rule. Stroke
// weight is bumped up from the on-page mark (17 -> 20) purely for legibility
// at 16-32px, matching the size-ladder tests in the brand deck.
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="32" height="32" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 118 L40 32 L75 32"
          stroke="#0B1F3A"
          strokeWidth="20"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path d="M58 78 L110 32" stroke="#00B894" strokeWidth="20" strokeLinecap="square" />
      </svg>
    ),
    { ...size }
  );
}
