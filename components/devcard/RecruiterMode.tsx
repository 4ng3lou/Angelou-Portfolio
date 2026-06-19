"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, theme } from "@/lib/devcard-config";

export default function RecruiterMode() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [flash, setFlash] = useState(false);

  const run = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim();
    const cmd = raw.toLowerCase();
    setInput("");
    if (!cmd) return;

    if (cmd === "sudo hire me") {
      setResponse("> access elevated. welcome, recruiter.");
      setFlash(true);
      setTimeout(() => {
        setRevealed(true);
        setFlash(false);
      }, 420);
    } else if (cmd === "whoami") {
      setResponse(`> ${profile.name}`);
    } else if (cmd === "help") {
      setResponse("> this isn't a real shell. or is it? try harder.");
    } else if (cmd === "clear") {
      setResponse(null);
    } else {
      setResponse(`> command not found: ${raw}`);
    }
  };

  return (
    <div className="font-mono">
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42 }}
            className="fixed inset-0 z-40 pointer-events-none"
            style={{ background: theme.green }}
          />
        )}
      </AnimatePresence>

      {response && (
        <p className="mb-2 text-[12px]" style={{ color: revealed ? theme.green : "#9a9a9a" }}>
          {response}
        </p>
      )}

      <form onSubmit={run} className="flex items-center gap-2 rounded-md border px-3 py-2"
        style={{ borderColor: theme.line, background: theme.panel }}>
        <span style={{ color: theme.green }}>$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command..."
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full bg-transparent text-[13px] outline-none"
          style={{ color: "#d6d6d6" }}
        />
      </form>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-lg border p-4"
              style={{ borderColor: theme.green, background: "rgba(0,255,157,0.05)" }}>
              <p className="text-[12px] tracking-widest uppercase mb-3" style={{ color: theme.green }}>
                ▸ recruiter mode
              </p>
              <div className="flex flex-col gap-2 text-[13px]">
                {profile.resumeUrl && (
                  <a href={profile.resumeUrl} download
                    className="rounded-md border py-2 text-center"
                    style={{ borderColor: theme.green, color: theme.green }}>
                    ↓ download resume (pdf)
                  </a>
                )}
                <a href={`mailto:${profile.email}`}
                  className="rounded-md border py-2 text-center"
                  style={{ borderColor: theme.line, color: "#d6d6d6" }}>
                  ✉ {profile.email}
                </a>
                {profile.showPhoneInRecruiterMode && (
                  <a href={`tel:${profile.phone}`}
                    className="rounded-md border py-2 text-center"
                    style={{ borderColor: theme.line, color: "#d6d6d6" }}>
                    ☎ {profile.phone}
                  </a>
                )}
                {profile.bookingUrl && (
                  <a href={profile.bookingUrl} target="_blank" rel="noopener noreferrer"
                    className="rounded-md border py-2 text-center"
                    style={{ borderColor: theme.blue, color: theme.blue }}>
                    ◷ book a call
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
