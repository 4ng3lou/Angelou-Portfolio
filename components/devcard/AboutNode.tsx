"use client";

import { motion } from "framer-motion";
import { about, profile, theme } from "@/lib/devcard-config";

export default function AboutNode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="font-mono"
    >
      <p className="text-[13.5px] leading-relaxed" style={{ color: "#d6d6d6" }}>
        {about.bio}
      </p>
      {about.flavor && (
        <p className="mt-3 text-[12px] italic" style={{ color: theme.green }}>
          {about.flavor}
        </p>
      )}
      <p className="mt-4 text-[11px] tracking-wide" style={{ color: "#666" }}>
        <span style={{ color: theme.blue }}>loc:</span> {profile.location}
      </p>
    </motion.div>
  );
}
