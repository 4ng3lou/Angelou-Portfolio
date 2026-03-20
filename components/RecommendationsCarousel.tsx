"use client";
import { useState } from "react";

interface Rec {
  text: string;
  author: string;
  role: string;
}

export default function RecommendationsCarousel({ recommendations }: { recommendations: Rec[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <div style={{ minHeight: 130 }}>
        <p style={{
          fontSize: 13, lineHeight: 1.7,
          color: "var(--text-2)", marginBottom: 16,
        }}>
          &ldquo;{recommendations[current].text}&rdquo;
        </p>
        {/* ✅ var(--text) ensures visibility in BOTH light and dark mode */}
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
          {recommendations[current].author}
        </p>
        <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
          {recommendations[current].role}
        </p>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 16 }}>
        {recommendations.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to recommendation ${i + 1}`}
            style={{
              borderRadius: "50%", border: "none", cursor: "pointer",
              transition: "all 0.15s", padding: 0,
              width: i === current ? 16 : 8,
              height: 8,
              background: i === current ? "var(--text)" : "var(--border-2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
