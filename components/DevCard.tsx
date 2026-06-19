"use client";
import { useRef } from "react";
import { VCARD_QR } from "./vcardQr";

export default function DevCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  };

  return (
    <>
      <style>{`
        .dev-card {
          position: relative;
          width: 100%;
          max-width: 260px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.28);
          transition: transform 0.15s ease-out, box-shadow 0.2s;
          will-change: transform;
          transform: perspective(800px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
          aspect-ratio: 3/4;
          cursor: pointer;
          --mx: 50%; --my: 50%; --rx: 0deg; --ry: 0deg;
        }
        .dev-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .dev-card-bg {
          position: absolute; inset: 0; border-radius: 12px;
          background: linear-gradient(
            203.33deg,
            rgb(17,17,17) 1.16%,
            rgb(51,51,51) 14.27%,
            rgb(85,85,85) 34.09%,
            rgb(68,68,68) 53.64%,
            rgb(34,34,34) 80.17%,
            rgb(17,17,17) 100%
          );
        }
        .dev-card-shimmer {
          position: absolute; inset: 0; border-radius: 12px;
          pointer-events: none; opacity: 0; transition: opacity 0.3s;
          background: radial-gradient(
            circle at var(--mx) var(--my),
            rgba(255,255,255,0.15) 0%,
            rgba(255,255,255,0.04) 40%,
            transparent 70%
          );
        }
        .dev-card:hover .dev-card-shimmer { opacity: 1; }
        .dev-card-border-inner {
          position: absolute; inset: 0; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          pointer-events: none; z-index: 20;
        }
      `}</style>

      <div
        ref={cardRef}
        className="dev-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="dev-card-bg" />
        <div className="dev-card-shimmer" />
        <div className="dev-card-border-inner" />

        {/* Top content */}
        <div style={{
          position: "absolute", left: 20, top: 30, zIndex: 10,
          display: "flex", flexDirection: "column",
        }}>
          {/* >_ terminal icon */}
          <div style={{
            color: "#fff", fontSize: 28, fontFamily: "monospace",
            fontWeight: 700, lineHeight: 1, marginBottom: 12,
            letterSpacing: "-2px",
          }}>
            &gt;_
          </div>

          <p style={{
            fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
            color: "#fff", margin: 0,
          }}>
            AVO PORTFOLIO
          </p>
          <p style={{
            marginTop: 5, fontSize: 9, fontFamily: "monospace",
            fontWeight: 500, textTransform: "uppercase",
            letterSpacing: "0.05em", color: "rgba(255,255,255,0.55)",
          }}>
            Access Card
          </p>

          <p style={{
            marginTop: 52, fontSize: 9, fontFamily: "monospace",
            fontWeight: 500, textTransform: "uppercase",
            letterSpacing: "0.05em", color: "rgba(255,255,255,0.55)",
          }}>
            Full-Stack &middot; AI &middot; GHL Developer
          </p>
          <p style={{
            marginTop: 4, fontSize: 14, fontFamily: "monospace",
            fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.04em", color: "#ffffff",
          }}>
            ANGELOU
          </p>
          <p style={{
            fontSize: 10, fontFamily: "monospace",
            color: "rgba(255,255,255,0.62)", marginTop: 2, letterSpacing: "0.02em",
          }}>
            Vincent T. Ocampo
          </p>
          <p style={{
            fontSize: 9, fontFamily: "monospace",
            color: "rgba(255,255,255,0.5)", marginTop: 3,
          }}>
            Zamboanga del Sur, PH
          </p>
        </div>

        {/* Bottom-left label */}
        <p style={{
          position: "absolute", bottom: 20, left: 20, zIndex: 10,
          fontSize: 9, fontFamily: "monospace", fontWeight: 500,
          textTransform: "uppercase", letterSpacing: "0.05em",
          color: "rgba(255,255,255,0.55)", margin: 0,
        }}>
          Developer &amp; Designer
        </p>

        {/* Bottom-right QR — real, scannable vCard (saves contact on scan) */}
        <p style={{ position: "absolute", bottom: 126, right: 18, zIndex: 10, margin: 0, fontSize: 8, fontFamily: "monospace", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.5)" }}>
          Scan &rarr; launch devcard
        </p>
        <div style={{ position: "absolute", bottom: 16, right: 16, zIndex: 10, width: 104, height: 104, padding: 7, borderRadius: 8, background: "#fff", boxSizing: "border-box" }}>
          <svg width="100%" height="100%" viewBox={`0 0 ${VCARD_QR.count} ${VCARD_QR.count}`} shapeRendering="crispEdges" role="img" aria-label="Scan to open Angelou Vincent T. Ocampo's DevCard OS">
            <path d={VCARD_QR.path} fill="#111" />
          </svg>
        </div>
      </div>
    </>
  );
}
