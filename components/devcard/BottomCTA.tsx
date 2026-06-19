"use client";

import { motion } from "framer-motion";
import { profile, theme } from "@/lib/devcard-config";

function downloadVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name}`,
    `TITLE:${profile.role}`,
    `TEL;TYPE=CELL:${profile.phone}`,
    `EMAIL:${profile.email}`,
    "URL:https://angelou.dev",
    `URL:${profile.github}`,
    `URL:${profile.linkedin}`,
    "END:VCARD",
  ];
  const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Angelou-Ocampo.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const I = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Item({ label, onClick, href, children }: { label: string; onClick?: () => void; href?: string; children: React.ReactNode }) {
  const cls = "flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] tracking-wide";
  const content = (
    <>
      {children}
      <span style={{ color: "#8a8a8a" }}>{label}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={{ color: "#cfcfcf" }} aria-label={label}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={{ color: theme.green }} aria-label={label}>
      {content}
    </button>
  );
}

export default function BottomCTA() {
  return (
    <motion.nav
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 26 }}
      className="fixed inset-x-0 bottom-0 z-30 flex items-stretch border-t font-mono"
      style={{ borderColor: theme.line, background: "rgba(5,5,5,0.92)", backdropFilter: "blur(8px)" }}
    >
      <Item label="save" onClick={downloadVCard}>
        <svg {...I} viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg>
      </Item>
      <Item label="email" href={`mailto:${profile.email}`}>
        <svg {...I} viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
      </Item>
      <Item label="github" href={profile.github}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
      </Item>
      <Item label="linkedin" href={profile.linkedin}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.96H5.56v8.38h2.78zM6.95 8.81a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.53v-4.6c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.78c.04.78 0 8.38 0 8.38h2.78v-4.68c0-.25.02-.5.09-.68.2-.5.66-1.01 1.42-1.01.99 0 1.39.75 1.39 1.86v4.51h2.78z" /></svg>
      </Item>
    </motion.nav>
  );
}
