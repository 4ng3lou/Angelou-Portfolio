"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./AppsIUse.module.css";
import { useRef, useState } from "react";

const apps = [
    { name: "Antigravity", icon: "/images/antigravity_logo.png" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Cursor", icon: "https://www.cursor.com/assets/images/logo.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
    { name: "Premiere Pro", icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
    { name: "CapCut", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg" },
    { name: "Chrome", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
    { name: "MS Office", icon: "__msoffice__" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

// ─── Icon ─────────────────────────────────────────────────────────────────────

function AppIcon({ app, size = 28 }: { app: typeof apps[0]; size?: number }) {
    if (app.icon === "__msoffice__") {
        return (
            <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="200" height="200" fill="#fff" rx="22" />
                <rect x="6" y="6" width="91" height="91" rx="10" fill="#2B579A" />
                <rect x="103" y="6" width="91" height="91" rx="10" fill="#217346" />
                <rect x="6" y="103" width="91" height="91" rx="10" fill="#D24726" />
                <rect x="103" y="103" width="91" height="91" rx="10" fill="#F2B50F" />
            </svg>
        );
    }
    return <img src={app.icon} alt={app.name} width={size} height={size} style={{ objectFit: "contain", display: "block" }} />;
}

// ─── Chip ─────────────────────────────────────────────────────────────────────

function Chip({ app }: { app: typeof apps[0] }) {
    const [hov, setHov] = useState(false);

    return (
        <motion.div
            className={styles.chip}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            animate={hov ? { y: -5, scale: 1.08 } : { y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
            <AppIcon app={app} size={52} />
        </motion.div>
    );
}

// ─── Scroller ────────────────────────────────────────────────────────────────

function Scroller() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const dragStartX = useRef(0);
    const dragStartAnim = useRef(0);

    function getCurrentOffset(): number {
        if (!trackRef.current) return 0;
        const mat = new DOMMatrix(getComputedStyle(trackRef.current).transform);
        return mat.m41;
    }

    function onPointerDown(e: React.PointerEvent) {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        dragStartX.current = e.clientX;
        dragStartAnim.current = getCurrentOffset();
        if (trackRef.current) {
            const offset = getCurrentOffset();
            trackRef.current.style.animationPlayState = "paused";
            trackRef.current.style.transform = `translateX(${offset}px)`;
        }
        setPaused(true);
    }

    function onPointerMove(e: React.PointerEvent) {
        if (!paused || !trackRef.current) return;
        const delta = e.clientX - dragStartX.current;
        trackRef.current.style.transform = `translateX(${dragStartAnim.current + delta}px)`;
    }

    function onPointerUp() {
        if (!trackRef.current) return;
        trackRef.current.style.transform = "";
        trackRef.current.style.animationPlayState = "running";
        setPaused(false);
    }

    return (
        <div
            className={styles.scrollerOuter}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            style={{ cursor: paused ? "grabbing" : "grab" }}
        >
            <div className={styles.fadeLeft} />
            <div className={styles.fadeRight} />
            <div ref={trackRef} className={styles.track}>
                {[...apps, ...apps].map((app, i) => <Chip key={i} app={app} />)}
            </div>
        </div>
    );
}

// ─── Particles ────────────────────────────────────────────────────────────────

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 43 + 9) % 100}%`,
    top: `${(i * 61 + 13) % 100}%`,
    size: 3 + (i % 5),
    dur: 4 + (i % 5),
    delay: (i * 0.35) % 4,
}));

function Particles() {
    return (
        <div className={styles.particles} aria-hidden>
            {PARTICLES.map((p, i) => (
                <motion.span key={i} className={styles.particle}
                    style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
                    animate={{ y: [0, -28, 0], scale: [1, 1.4, 1], opacity: [0.08, 0.3, 0.08] }}
                    transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                />
            ))}
        </div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AppsIUse() {
    return (
        <section id="apps" className={styles.section}>
            <Particles />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <SectionHeading
                        title="Apps I Use"
                        description="A collection of tools and software I rely on daily to create, code, and stay productive."
                    />
                </motion.div>

                <motion.div
                    className={styles.block}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <Scroller />
                </motion.div>
            </div>

            <motion.div className={styles.blob1}
                animate={{ scale: [1, 1.2, 1], x: [0, 28, 0], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        </section>
    );
}