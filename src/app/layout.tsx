import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angelou Vincent T. Ocampo — Full-Stack Developer & Creative Technologist",
  description:
    "Award-winning full-stack developer crafting pixel-perfect digital experiences with Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "Next.js",
    "TypeScript",
    "React",
  ],
  openGraph: {
    title: "Angelou Vincent T. Ocampo — Full-Stack Developer",
    description:
      "Award-winning full-stack developer crafting pixel-perfect digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
