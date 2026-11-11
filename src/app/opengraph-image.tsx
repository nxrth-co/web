import { ImageResponse } from "next/og";

export const alt = "NXRTH — Websites that move furniture.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070809",
          backgroundImage:
            "radial-gradient(circle at 80% 80%, rgba(200, 255, 0, 0.15), transparent 50%)",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#F4F4EF",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(200, 255, 0, 0.4)",
              backgroundColor: "rgba(200, 255, 0, 0.1)",
              color: "#C8FF00",
              fontSize: "14px",
              fontFamily: "monospace",
              letterSpacing: "0.2em",
            }}
          >
            WEB + AI FOR FURNITURE BRANDS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "76px",
              fontWeight: "400",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Websites that move <span style={{ color: "#C8FF00", fontStyle: "italic", marginLeft: "14px" }}>furniture.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#8B8D90",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            NXRTH builds fast, beautiful, AI-powered digital storefronts for furniture showrooms, workshops, and manufacturers.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            fontSize: "16px",
            fontFamily: "monospace",
            color: "#8B8D90",
          }}
        >
          <div style={{ display: "flex" }}>NXRTH.COM</div>
          <div style={{ display: "flex", color: "#C8FF00" }}>EST. 2026 · MUMBAI · SURAT · GLOBAL</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
