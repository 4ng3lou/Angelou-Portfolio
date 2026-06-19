"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, theme } from "@/lib/devcard-config";

type Result = { repo: string; message: string; when: string };
type State = "idle" | "loading" | "done" | "error";

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function StatusCheck() {
  const [state, setState] = useState<State>("idle");
  const [result, setResult] = useState<Result | null>(null);

  const verify = async () => {
    setState("loading");
    try {
      const res = await fetch(
        `https://api.github.com/users/${profile.githubUser}/events/public`,
        { headers: { Accept: "application/vnd.github+json" } }
      );
      if (!res.ok) throw new Error(String(res.status));
      const events: any[] = await res.json();
      const push = events.find((e) => e.type === "PushEvent" && e.payload?.commits?.length);
      if (push) {
        const commits = push.payload.commits;
        setResult({
          repo: push.repo.name,
          message: commits[commits.length - 1].message.split("\n")[0],
          when: timeAgo(push.created_at),
        });
      } else if (events.length) {
        const e = events[0];
        setResult({ repo: e.repo?.name ?? "—", message: `${e.type}`, when: timeAgo(e.created_at) });
      } else {
        setResult({ repo: profile.githubUser, message: "no recent public activity", when: "" });
      }
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="font-mono">
      <button
        onClick={verify}
        disabled={state === "loading"}
        className="w-full rounded-md border py-2.5 text-[13px] tracking-wide transition-colors"
        style={{ borderColor: theme.green, color: theme.green, background: "rgba(0,255,157,0.05)" }}
      >
        {state === "loading" ? "› checking signal..." : state === "done" ? "↻ re-verify status" : "› verify status"}
      </button>

      <AnimatePresence>
        {state === "done" && result && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 rounded-md border p-3 text-[12.5px] leading-relaxed"
            style={{ borderColor: theme.line, background: theme.panel }}
          >
            <p style={{ color: "#9a9a9a" }}>
              <span style={{ color: theme.green }}>● live</span> · last push{" "}
              {result.when && <span style={{ color: "#cfcfcf" }}>{result.when}</span>}
            </p>
            <p className="mt-1 break-words" style={{ color: "#d6d6d6" }}>
              <span style={{ color: theme.blue }}>{result.repo}</span> — {result.message}
            </p>
          </motion.div>
        )}
        {state === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-[12px]"
            style={{ color: "#b9742f" }}
          >
            &gt; status check unavailable — try again later
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
