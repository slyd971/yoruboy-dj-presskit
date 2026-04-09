import "./globals.css";
import type { Metadata } from "next";
import { yoruboyPressKitConfig } from "@/data/artists/yoruboy";

export const metadata: Metadata = {
  metadataBase: new URL("https://yoruboy-dj.vercel.app"),
  title: yoruboyPressKitConfig.metadata.title,
  description: yoruboyPressKitConfig.metadata.description,
  openGraph: {
    title: yoruboyPressKitConfig.metadata.title,
    description: yoruboyPressKitConfig.metadata.description,
    url: "https://yoruboy-dj.vercel.app",
    siteName: "Yoruboy Dj",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yoruboy Dj press kit preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: yoruboyPressKitConfig.metadata.title,
    description: yoruboyPressKitConfig.metadata.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
