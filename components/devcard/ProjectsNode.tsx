"use client";

import { useRef, useState } from "react";
import { projects, theme } from "@/lib/devcard-config";

export default function ProjectsNode() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setIdx(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-3 pb-1 -mx-1 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p) => {
          const hasLive = p.liveUrl && !p.liveUrl.startsWith("//");
          const hasRepo = p.githubUrl && !p.githubUrl.startsWith("//");
          return (
            <div
              key={p.name}
              className="snap-center shrink-0 w-full rounded-lg border p-4 font-mono"
              style={{ borderColor: theme.line, background: theme.panel }}
            >
              <p className="text-[15px] font-semibold" style={{ color: theme.green }}>
                {p.name}
              </p>

              <div className="mt-3 space-y-1.5 text-[12.5px] leading-relaxed">
                <p style={{ color: "#9a9a9a" }}>
                  <span style={{ color: theme.blue }}>problem:</span> {p.problem.replace("// TODO:", "").trim() || "—"}
                </p>
                <p style={{ color: "#d6d6d6" }}>
                  <span style={{ color: theme.blue }}>solution:</span> {p.solution.replace("// TODO:", "").trim() || "—"}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded px-2 py-0.5 text-[11px]"
                    style={{ background: "rgba(56,189,248,0.1)", color: theme.blue }}
                  >
                    {t.replace("//", "").trim()}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={hasLive ? p.liveUrl : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!hasLive}
                  className="flex-1 rounded-md border py-2 text-center text-[12px] transition-colors"
                  style={
                    hasLive
                      ? { borderColor: theme.green, color: theme.green }
                      : { borderColor: theme.line, color: "#555", pointerEvents: "none" }
                  }
                >
                  {hasLive ? "live ↗" : "soon"}
                </a>
                {hasRepo && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-md border py-2 text-center text-[12px]"
                    style={{ borderColor: theme.line, color: "#cfcfcf" }}
                  >
                    code ↗
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {projects.map((p, i) => (
          <button
            key={p.name}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === idx ? 18 : 6,
              background: i === idx ? theme.green : theme.line,
            }}
          />
        ))}
      </div>
    </div>
  );
}
