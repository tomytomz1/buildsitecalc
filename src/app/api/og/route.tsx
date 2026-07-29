import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const WIDTH = 1200;
const HEIGHT = 630;

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const rawTitle = searchParams.get("title") ?? siteConfig.brand.name;
  const locale = searchParams.get("locale") === "es" ? "es" : "en";
  const title = rawTitle.slice(0, 90);
  const tagline =
    locale === "es"
      ? "Calculadoras de construcción que muestran su fórmula"
      : "Home improvement calculators that show their math";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0f172a",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: 30,
          fontWeight: 700,
          color: "#f59e0b",
          letterSpacing: "-0.5px",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#f59e0b",
          }}
        />
        {siteConfig.brand.name}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 44 ? 62 : 76,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.12,
          letterSpacing: "-2px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 26,
          color: "#94a3b8",
        }}
      >
        <div style={{ display: "flex" }}>{tagline}</div>
        <div style={{ display: "flex", color: "#f59e0b" }}>buildsitecalc.com</div>
      </div>
    </div>,
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
