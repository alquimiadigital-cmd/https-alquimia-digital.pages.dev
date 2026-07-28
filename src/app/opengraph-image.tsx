import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 80,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#67e8f9", textTransform: "uppercase" }}>
          ALQUIMIA DIGITAL
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16 }}>
          Soluciones industriales para operar con confianza
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#cbd5e1" }}>
          Repuestos · Hidráulica · Metalúrgica · Rodamientos · Transmisión
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
