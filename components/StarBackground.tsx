"use client";
import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.12 + 0.02,
      opacity: Math.random() * 0.65 + 0.15,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.014 + 0.003,
    }));

    // Subtle nebula glows
    const glows = [
      { xf: 0.1,  yf: 0.15, r: 150, rgb: "59,130,246"   },
      { xf: 0.9,  yf: 0.28, r: 120, rgb: "139,92,246"   },
      { xf: 0.55, yf: 0.05, r:  90, rgb: "34,211,238"   },
      { xf: 0.25, yf: 0.8,  r: 110, rgb: "99,102,241"   },
      { xf: 0.75, yf: 0.7,  r:  80, rgb: "244,114,182"  },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Glows
      glows.forEach(g => {
        const x = g.xf * canvas.width;
        const y = g.yf * canvas.height;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, g.r);
        grad.addColorStop(0,   `rgba(${g.rgb},0.10)`);
        grad.addColorStop(0.5, `rgba(${g.rgb},0.03)`);
        grad.addColorStop(1,   `rgba(${g.rgb},0)`);
        ctx.beginPath();
        ctx.arc(x, y, g.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Stars
      stars.forEach(s => {
        s.phase += s.phaseSpeed;
        const op = s.opacity * (0.55 + 0.45 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height + 2) {
          s.y = -2;
          s.x = Math.random() * canvas.width;
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star-canvas"
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}
