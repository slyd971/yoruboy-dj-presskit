import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Yoruboy Dj press kit preview";

export default function OpenGraphImage() {
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
            "linear-gradient(135deg, #120805 0%, #2c1208 35%, #5a250f 100%)",
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
              "radial-gradient(circle at 18% 20%, rgba(255,176,93,0.30), transparent 30%), radial-gradient(circle at 85% 22%, rgba(255,255,255,0.10), transparent 24%), radial-gradient(circle at 72% 85%, rgba(255,132,0,0.22), transparent 26%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -70,
            top: -90,
            width: 420,
            height: 420,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.16)",
            opacity: 0.28,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 70,
            top: 96,
            width: 320,
            height: 320,
            borderRadius: 32,
            background: "rgba(0,0,0,0.18)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 34,
                letterSpacing: 8,
                fontWeight: 800,
                color: "#ffd3a6",
              }}
            >
              YORUBOY
            </div>
            <div
              style={{
                fontSize: 18,
                color: "rgba(255,247,237,0.84)",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Afrobeat • Amapiano • Hip-Hop • House
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 64px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              color: "#ffd3a6",
              textTransform: "uppercase",
              letterSpacing: 3,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
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
              gap: 22,
              maxWidth: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 90,
                lineHeight: 0.92,
                fontWeight: 900,
                letterSpacing: -3,
              }}
            >
              <span>YORUBOY</span>
              <span style={{ color: "#ffb05d" }}>DJ PRESS KIT</span>
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(255,247,237,0.90)",
                maxWidth: 680,
              }}
            >
              DJ open format base a Paris pour clubs, brand events et bookings
              prives.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 26px",
                borderRadius: 9999,
                background: "#ff8a3d",
                color: "#1a0d06",
                fontSize: 22,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              Booking Available
            </div>
            <div
              style={{
                fontSize: 22,
                color: "rgba(255,247,237,0.72)",
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
