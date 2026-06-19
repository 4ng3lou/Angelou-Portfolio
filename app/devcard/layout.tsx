import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Angelou Vincent T. Ocampo — DevCard",
  description:
    "Scan-to-meet developer card — skills, live projects, real-time GitHub status, and one-tap contact for Angelou Vincent T. Ocampo.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function DevCardLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#000000", minHeight: "100vh" }}>{children}</div>;
}
