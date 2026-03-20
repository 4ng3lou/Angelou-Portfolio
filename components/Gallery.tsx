"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./About";

// Placeholder gallery items - replace with real images
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  emoji: ["🎤", "💻", "🏆", "🤝", "📸", "🌏", "🎓", "👨‍💻", "🚀", "🎯", "📱", "⭐"][i],
  label: [
    "Speaking",
    "Coding",
    "Award",
    "Networking",
    "Event",
    "Travel",
    "Graduation",
    "Hacking",
    "Launch",
    "Workshop",
    "Mobile Dev",
    "Community",
  ][i],
}));

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Gallery" />
      </div>

      {/* Full-width masonry grid */}
      <div
        className="mt-8 columns-2 sm:columns-3 md:columns-4 gap-2 px-6 max-w-5xl mx-auto"
        style={{ columnGap: "8px" }}
      >
        {galleryItems.map((item, i) => (
          <div
            key={item.id}
            className="break-inside-avoid mb-2 overflow-hidden rounded-2xl group cursor-pointer"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "1/1" : "4/3",
            }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:scale-105"
              style={{
                minHeight: "120px",
                background: `linear-gradient(135deg, var(--color-surface), var(--color-surface-2))`,
              }}
            >
              <span className="text-3xl">{item.emoji}</span>
              <span
                className="text-xs font-mono-custom tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-muted)" }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p
        className="text-center mt-6 text-xs font-mono-custom tracking-widest uppercase"
        style={{ color: "var(--color-muted)" }}
      >
        Replace with real images in /public/gallery/
      </p>
    </section>
  );
}
