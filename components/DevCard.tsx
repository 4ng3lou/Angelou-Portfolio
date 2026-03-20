"use client";
import { useRef } from "react";

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
            letterSpacing: "0.05em", color: "rgba(255,255,255,0.35)",
          }}>
            Access Card
          </p>

          <p style={{
            marginTop: 52, fontSize: 9, fontFamily: "monospace",
            fontWeight: 500, textTransform: "uppercase",
            letterSpacing: "0.05em", color: "rgba(255,255,255,0.35)",
          }}>
            IT Graduate &amp; Developer
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
            color: "rgba(255,255,255,0.5)", marginTop: 2, letterSpacing: "0.02em",
          }}>
            Vincent T. Ocampo
          </p>
          <p style={{
            fontSize: 9, fontFamily: "monospace",
            color: "rgba(255,255,255,0.25)", marginTop: 3,
          }}>
            Zamboanga del Sur, PH
          </p>
        </div>

        {/* Bottom-left label */}
        <p style={{
          position: "absolute", bottom: 20, left: 20, zIndex: 10,
          fontSize: 9, fontFamily: "monospace", fontWeight: 500,
          textTransform: "uppercase", letterSpacing: "0.05em",
          color: "rgba(255,255,255,0.35)", margin: 0,
        }}>
          Developer &amp; Designer
        </p>

        {/* Bottom-right QR */}
        <div style={{
          position: "absolute", bottom: 20, right: 20, zIndex: 10,
          width: 46, height: 46, opacity: 0.45,
        }}>
          <svg width="46" height="46" viewBox="0 0 50 50" fill="none">
            <rect x="2"  y="2"  width="16" height="16" rx="2" fill="white"/>
            <rect x="5"  y="5"  width="10" height="10" rx="1" fill="#111"/>
            <rect x="7"  y="7"  width="6"  height="6"  fill="white"/>
            <rect x="32" y="2"  width="16" height="16" rx="2" fill="white"/>
            <rect x="35" y="5"  width="10" height="10" rx="1" fill="#111"/>
            <rect x="37" y="7"  width="6"  height="6"  fill="white"/>
            <rect x="2"  y="32" width="16" height="16" rx="2" fill="white"/>
            <rect x="5"  y="35" width="10" height="10" rx="1" fill="#111"/>
            <rect x="7"  y="37" width="6"  height="6"  fill="white"/>
            <rect x="20" y="2"  width="4" height="4" fill="white"/>
            <rect x="26" y="4"  width="2" height="2" fill="white"/>
            <rect x="20" y="20" width="6" height="2" fill="white"/>
            <rect x="28" y="20" width="4" height="4" fill="white"/>
            <rect x="34" y="22" width="2" height="2" fill="white"/>
            <rect x="20" y="26" width="2" height="4" fill="white"/>
            <rect x="24" y="28" width="4" height="2" fill="white"/>
            <rect x="30" y="26" width="2" height="2" fill="white"/>
            <rect x="34" y="28" width="6" height="2" fill="white"/>
            <rect x="42" y="26" width="4" height="4" fill="white"/>
            <rect x="20" y="32" width="4" height="2" fill="white"/>
            <rect x="26" y="34" width="2" height="4" fill="white"/>
            <rect x="30" y="32" width="6" height="2" fill="white"/>
            <rect x="38" y="34" width="4" height="2" fill="white"/>
            <rect x="20" y="40" width="2" height="6" fill="white"/>
            <rect x="24" y="42" width="4" height="2" fill="white"/>
            <rect x="30" y="40" width="2" height="4" fill="white"/>
            <rect x="34" y="42" width="4" height="4" fill="white"/>
            <rect x="40" y="40" width="6" height="2" fill="white"/>
          </svg>
        </div>
      </div>
    </>
  );
}
