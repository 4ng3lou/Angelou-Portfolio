"use client";
import { useRef, useState } from "react";
import styles from "./AppsIUse.module.css";

const apps = [
  { name: "Antigravity",      icon: "/images/antigravity_logo.png" },
  { name: "VS Code",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Cursor",           icon: "https://www.cursor.com/assets/images/logo.svg" },
  { name: "GitHub",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Android Studio",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Flutter",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Firebase",         icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Vercel",           icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
  { name: "Docker",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Supabase",         icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  { name: "Postman",          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Canva",            icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
  { name: "Premiere Pro",     icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
  { name: "After Effects",    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" },
  { name: "CapCut",           icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg" },
  { name: "DaVinci Resolve",  icon: "__davinci__" },
  { name: "Notion",           icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Trello",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  { name: "Airtable",         icon: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg" },
  { name: "Slack",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Jira",             icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "Chrome",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
  { name: "MS Office",        icon: "__msoffice__" },
  { name: "WordPress",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

function AppIcon({ icon, name, size = 44 }: { icon: string; name: string; size?: number }) {
  if (icon === "__msoffice__") {
    return (
      <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect width="200" height="200" fill="#fff" rx="22" />
        <rect x="6"   y="6"   width="91" height="91" rx="10" fill="#2B579A" />
        <rect x="103" y="6"   width="91" height="91" rx="10" fill="#217346" />
        <rect x="6"   y="103" width="91" height="91" rx="10" fill="#D24726" />
        <rect x="103" y="103" width="91" height="91" rx="10" fill="#F2B50F" />
      </svg>
    );
  }
  if (icon === "__davinci__") {
    return (
      <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect width="200" height="200" rx="36" fill="#1c1c3a" />
        <circle cx="100" cy="100" r="66" fill="none" stroke="#6b5fff" strokeWidth="10" />
        <line x1="100" y1="34" x2="100" y2="166" stroke="#6b5fff" strokeWidth="8" strokeLinecap="round" />
        <line x1="34"  y1="100" x2="166" y2="100" stroke="#6b5fff" strokeWidth="8" strokeLinecap="round" />
        <line x1="53"  y1="53"  x2="147" y2="147" stroke="#6b5fff" strokeWidth="8" strokeLinecap="round" />
        <line x1="147" y1="53"  x2="53"  y2="147" stroke="#6b5fff" strokeWidth="8" strokeLinecap="round" />
        <circle cx="100" cy="100" r="16" fill="#6b5fff" />
      </svg>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={icon} alt={name} width={size} height={size} style={{ objectFit: "contain", display: "block" }} />;
}

export default function AppsIUse() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  function getOffset() {
    if (!trackRef.current) return 0;
    return new DOMMatrix(getComputedStyle(trackRef.current).transform).m41;
  }

  function onPointerDown(e: React.PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    dragStartOffset.current = getOffset();
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
      trackRef.current.style.transform = `translateX(${getOffset()}px)`;
    }
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging || !trackRef.current) return;
    const delta = e.clientX - dragStartX.current;
    trackRef.current.style.transform = `translateX(${dragStartOffset.current + delta}px)`;
  }

  function onPointerUp() {
    if (!trackRef.current) return;
    trackRef.current.style.transform = "";
    trackRef.current.style.animationPlayState = "running";
    setDragging(false);
  }

  return (
    <div>
      <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
        Apps I Use
      </p>
      <div
        className={styles.scrollerOuter}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div ref={trackRef} className={styles.track}>
          {[...apps, ...apps].map((app, i) => (
            <div key={i} className={styles.chip} title={app.name}>
              <AppIcon icon={app.icon} name={app.name} size={44} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
