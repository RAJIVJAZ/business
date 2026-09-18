import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — full-bleed navy square (iOS applies its own corner
// rounding/mask, so no border-radius is added here) with the mark in white +
// accent green, matching the "mobile app icon" treatment in the brand deck.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B1F3A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="96" height="96" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 118 L40 32 L75 32"
            stroke="#ffffff"
            strokeWidth="20"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M58 78 L110 32" stroke="#00B894" strokeWidth="20" strokeLinecap="square" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
