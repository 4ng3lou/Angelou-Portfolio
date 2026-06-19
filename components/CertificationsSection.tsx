"use client";
import { useState } from "react";

const certifications = [
  { title: "C++ Programming", issuer: "Sololearn · 2024", img: "/images/Introduction_to_C++_certificate.jpg" },
  { title: "SQL Fundamentals", issuer: "Sololearn · 2024", img: "/images/Introduction_to_SQL_certificate.jpg" },
  { title: "Graphic & Design Professional", issuer: "JH Cerilles State College · 2024", img: "/images/graphic_design_certificate.jpg" },
  { title: "Video Editing & Videography", issuer: "Industry Workshop · 2024", img: "/images/videography_seminar_certificate.jpg" },
];

export default function CertificationsSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
        {certifications.map((c, i) => (
          <button
            key={c.title}
            onClick={() => setActive(c.img)}
            style={{
              width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
              borderBottom: i < certifications.length - 1 ? "1px solid var(--border)" : "none",
              display: "flex", alignItems: "center", gap: 10,
              padding: "12px 16px", transition: "background 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
          >
            <img src={c.img} alt={c.title} style={{ width: 44, height: 44, objectFit: "cover", borderRadius: 6, flexShrink: 0, border: "1px solid var(--border)" }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>{c.title}</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.issuer}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 24, cursor: "zoom-out",
          }}
        >
          <img
            src={active}
            alt="Certificate"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: 10, cursor: "default", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          />
          <button
            onClick={() => setActive(null)}
            style={{
              position: "fixed", top: 20, right: 20, background: "rgba(255,255,255,0.15)",
              border: "none", color: "#fff", width: 36, height: 36, borderRadius: "50%",
              fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >×</button>
        </div>
      )}
    </>
  );
}
