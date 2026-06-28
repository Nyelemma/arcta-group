import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arcta Group — premium property services across the UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #060D16 0%, #0E1B2B 55%, #1C3454 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #C9A84B 0%, #D4B85A 100%)",
              fontSize: "44px",
              fontWeight: 800,
              color: "white",
            }}
          >
            A
          </div>
          <div style={{ fontSize: "40px", fontWeight: 700, color: "white" }}>Arcta Group</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              maxWidth: "950px",
            }}
          >
            Professional Property Services Across The UAE
          </div>
          <div style={{ fontSize: "30px", color: "#DFC67E", maxWidth: "880px" }}>
            AC Maintenance · Duct Cleaning · Snagging Inspections · Property Maintenance
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["24hr Response", "UAE Wide Coverage", "Fully Documented"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: "24px",
                color: "white",
                padding: "10px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
