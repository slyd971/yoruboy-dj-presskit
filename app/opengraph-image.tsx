import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Yoruboy Dj press kit preview";

async function getHeroDataUrl() {
  const heroPath = path.join(process.cwd(), "public/yoruboy/hero.jpeg");
  const heroBuffer = await readFile(heroPath);
  const heroBase64 = heroBuffer.toString("base64");

  return `data:image/jpeg;base64,${heroBase64}`;
}

export default async function OpenGraphImage() {
  const heroDataUrl = await getHeroDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #110804 0%, #2a140a 50%, #4f230f 100%)",
          color: "#fff7ed",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 16% 16%, rgba(255,179,102,0.22), transparent 26%), radial-gradient(circle at 84% 18%, rgba(255,255,255,0.10), transparent 22%), radial-gradient(circle at 74% 82%, rgba(255,123,0,0.22), transparent 28%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 470,
            height: 630,
            display: "flex",
            overflow: "hidden",
          }}
        >
          <img
            src={heroDataUrl}
            alt="Yoruboy Dj hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "flex",
              filter: "saturate(1.02) contrast(1.02)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(90deg, rgba(17,8,4,0.94) 0%, rgba(17,8,4,0.40) 34%, rgba(17,8,4,0.20) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "54px 58px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#ffd6b0",
              fontSize: 22,
              letterSpacing: 3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 9999,
                background: "#ff9f5a",
                display: "flex",
              }}
            />
            Paris • France & International
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 690,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 88,
                lineHeight: 0.92,
                letterSpacing: -3,
                fontWeight: 900,
              }}
            >
              <span>YORUBOY</span>
              <span style={{ color: "#ffb05d" }}>DJ PRESS KIT</span>
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.34,
                color: "rgba(255,247,237,0.92)",
                maxWidth: 650,
              }}
            >
              Afro, Amapiano, Hip-Hop et House pour clubs, marques et
              evenements prives.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                borderRadius: 9999,
                background: "#ff8a3d",
                color: "#1a0d06",
                fontSize: 21,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.3,
              }}
            >
              Booking Available
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 21,
                color: "rgba(255,247,237,0.74)",
              }}
            >
              yoruboy-dj.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
