"use client";
import { useState, useEffect } from "react";

export default function LocalTimeCard() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const timeStr = now.toLocaleTimeString("en-PH", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: true, timeZone: "Asia/Manila",
  });
  const dateStr = now.toLocaleDateString("en-PH", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    timeZone: "Asia/Manila",
  });
  const parts = dateStr.split(", ");
  const weekday = parts[0];
  const rest = parts.slice(1).join(", ");

  return (
    <div className="section-card" style={{ padding: 16 }}>
      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8 }}>
        Local Time · Philippines
      </p>
      <p style={{ fontSize: 26, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: 1.1 }}>
        {timeStr}
      </p>
      <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text)", marginTop: 6 }}>{weekday}</p>
      <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{rest}</p>
    </div>
  );
}
