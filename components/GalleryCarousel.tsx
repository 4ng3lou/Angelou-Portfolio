"use client";
import { useRef } from "react";

const galleryImages = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
];

export default function GalleryCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: "left" | "right") =>
    ref.current?.scrollBy({ left: d === "right" ? 320 : -320, behavior: "smooth" });

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute", left: -14, top: "50%",
          transform: "translateY(-50%)", zIndex: 10,
          width: 28, height: 28, borderRadius: "50%",
          border: "1px solid var(--border-2)", background: "var(--bg)",
          color: "var(--text-muted)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        aria-label="Previous"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <div ref={ref} style={{ display: "flex", gap: 12, overflowX: "auto", scrollbarWidth: "none" }}>
        {galleryImages.map((src, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0, width: 200, height: 148,
              borderRadius: 10, border: "1px solid var(--border)",
              overflow: "hidden", position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Gallery photo ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute", right: -14, top: "50%",
          transform: "translateY(-50%)", zIndex: 10,
          width: 28, height: 28, borderRadius: "50%",
          border: "1px solid var(--border-2)", background: "var(--bg)",
          color: "var(--text-muted)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        aria-label="Next"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  );
}
