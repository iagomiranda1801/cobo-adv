import { ImageResponse } from "next/og";

export const alt = "COBO Advocacia - Advocacia estratégica em Uberaba/MG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "white",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ position: "absolute", inset: 38, border: "1px solid rgba(201,165,91,.35)" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ color: "#d9bd7c", fontSize: 118, lineHeight: 1 }}>CA</div>
          <div style={{ width: 190, height: 1, background: "#b68a3c", margin: "20px 0" }} />
          <div style={{ fontSize: 76, letterSpacing: 22, marginLeft: 22 }}>COBO</div>
          <div style={{ color: "#d9bd7c", fontFamily: "Arial, sans-serif", fontSize: 18, letterSpacing: 12, marginTop: 16 }}>ADVOCACIA</div>
          <div style={{ color: "rgba(255,255,255,.55)", fontFamily: "Arial, sans-serif", fontSize: 21, marginTop: 36 }}>Advocacia estratégica em Uberaba/MG</div>
        </div>
      </div>
    ),
    size,
  );
}
