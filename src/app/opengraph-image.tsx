import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B1F3A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40 118 L40 32 L75 32"
              stroke="#ffffff"
              strokeWidth="17"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path d="M58 78 L110 32" stroke="#00B894" strokeWidth="17" strokeLinecap="square" />
          </svg>
          <div style={{ display: "flex", color: "#ffffff", fontSize: 56, fontWeight: 800 }}>
            {site.logoWord}
            <span style={{ color: "#00B894" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 28, marginTop: 32, maxWidth: 920 }}>
          {site.description}
        </div>
        <div
          style={{
            display: "flex",
            color: "#00B894",
            fontSize: 20,
            marginTop: 28,
            textTransform: "uppercase",
            letterSpacing: 4,
            fontWeight: 700,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
