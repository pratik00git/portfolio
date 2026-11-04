import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { BrandMark, brandFonts, brandGradient } from "./brand-mark";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Next.js", "React", "TypeScript", "Redux", "Tailwind CSS", "AI / LLM"];

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0b12",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(93,108,196,0.28), transparent 45%), radial-gradient(circle at 10% 100%, rgba(201,120,90,0.18), transparent 45%)",
          color: "#eef0f6",
          fontFamily: "Jakarta",
          fontWeight: 500,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <BrandMark size={88} radius={24} />
          <div style={{ display: "flex", fontSize: 28, color: "#a3a9ba" }}>{profile.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>{profile.name}</div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
              backgroundImage: brandGradient,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.role}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#a3a9ba", maxWidth: 960, lineHeight: 1.4 }}>
            Building modern web applications with Next.js & React — frontend-first and AI-ready.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 24,
                color: "#d4d8e3",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: await brandFonts() },
  );
}
