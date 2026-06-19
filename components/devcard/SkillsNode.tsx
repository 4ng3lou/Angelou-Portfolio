"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, theme } from "@/lib/devcard-config";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const tile = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsNode() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = skills.find((s) => s.name === selected) ?? null;

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-2"
      >
        {skills.map((s) => {
          const on = s.name === selected;
          return (
            <motion.button
              key={s.name}
              variants={tile}
              onClick={() => setSelected(on ? null : s.name)}
              className="rounded-md border px-2 py-3 text-center text-[12px] font-mono transition-colors"
              style={{
                borderColor: on ? theme.green : theme.line,
                background: on ? "rgba(0,255,157,0.08)" : theme.panel,
                color: on ? theme.green : "#cfcfcf",
              }}
            >
              {s.name}
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.name}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="mt-3 rounded-md border p-3 font-mono text-[13px] leading-relaxed"
              style={{ borderColor: theme.line, background: theme.panel, color: "#d6d6d6" }}
            >
              <span style={{ color: theme.green }}>{active.name}</span> — {active.blurb}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
