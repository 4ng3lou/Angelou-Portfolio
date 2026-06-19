"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, theme } from "@/lib/devcard-config";
import SkillsNode from "./SkillsNode";
import ProjectsNode from "./ProjectsNode";
import AboutNode from "./AboutNode";
import StatusCheck from "./StatusCheck";
import RecruiterMode from "./RecruiterMode";
import BottomCTA from "./BottomCTA";

function NodeCard({ index, title, defaultOpen, children }: { index: number; title: string; defaultOpen?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
      className="rounded-lg border"
      style={{ borderColor: theme.line, background: theme.panel }}
    >
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between px-4 py-3.5 font-mono">
        <span className="text-[14px]" style={{ color: open ? theme.green : "#e5e5e5" }}>
          <span style={{ color: theme.green }}>0{index}</span> {title}
        </span>
        <span className="text-lg" style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .2s", color: open ? theme.green : "#666" }}>
          ›
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Hud() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full px-4 pt-8"
      style={{ background: theme.bg, paddingBottom: 92 }}
    >
      <div className="mx-auto w-full max-w-md">
        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6 font-mono">
          <p className="text-[11px] tracking-[0.3em]" style={{ color: theme.green }}>
            {profile.initials} · DEVCARD OS
          </p>
          <h1 className="mt-2 text-2xl font-semibold leading-tight" style={{ color: "#fff" }}>
            {profile.name}
          </h1>
          <p className="mt-1 text-[13px]" style={{ color: "#9a9a9a" }}>
            {profile.role}
            <span className="ml-1 inline-block w-[8px] animate-pulse" style={{ background: theme.green }}>
              &nbsp;
            </span>
          </p>
        </motion.header>

        {/* 3 nodes */}
        <div className="flex flex-col gap-3">
          <NodeCard index={1} title="skills" defaultOpen>
            <SkillsNode />
          </NodeCard>
          <NodeCard index={2} title="projects">
            <ProjectsNode />
          </NodeCard>
          <NodeCard index={3} title="about">
            <AboutNode />
          </NodeCard>
        </div>

        {/* Live status */}
        <div className="mt-6">
          <p className="mb-2 font-mono text-[11px] tracking-widest uppercase" style={{ color: "#555" }}>
            // live signal
          </p>
          <StatusCheck />
        </div>

        {/* Recruiter terminal (easter egg lives here) */}
        <div className="mt-6">
          <RecruiterMode />
        </div>

        <p className="mt-8 text-center font-mono text-[10px]" style={{ color: "#3a3a3a" }}>
          angelou.dev OS v2.0 — hint: try a command
        </p>
      </div>

      <BottomCTA />
    </motion.main>
  );
}
