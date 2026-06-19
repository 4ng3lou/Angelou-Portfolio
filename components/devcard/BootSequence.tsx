"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { bootLines, theme } from "@/lib/devcard-config";

const DURATION = 1800; // ms — total boot time before auto-advance

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const fullText = bootLines.join("\n");
  const total = fullText.length;
  const [chars, setChars] = useState(0);
  const [progress, setProgress] = useState(0);
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    onComplete();
  };

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      setProgress(p);
      setChars(Math.floor(p * total));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setChars(total);
        setTimeout(finish, 220);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shown = fullText.slice(0, chars).split("\n");

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Skip boot sequence"
      onClick={finish}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && finish()}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-50 flex flex-col justify-center px-6 font-mono cursor-pointer select-none"
      style={{ background: theme.bg }}
    >
      <div className="text-sm sm:text-base leading-relaxed" style={{ color: theme.green }}>
        {shown.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {line}
            {i === shown.length - 1 && (
              <span className="inline-block w-[0.6ch] -mb-[2px] animate-pulse" style={{ background: theme.green, height: "1em" }} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full" style={{ background: theme.line }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: theme.green, width: `${progress * 100}%` }}
        />
      </div>

      <p className="mt-4 text-[11px] tracking-widest uppercase" style={{ color: "#3a3a3a" }}>
        tap anywhere to skip
      </p>
    </motion.div>
  );
}
