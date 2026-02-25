"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";
import { useEffect, useRef, useState, useCallback } from "react";

const skillCategories = [
    {
        category: "Frontend Development",
        color: "#61dafb",
        glow: "rgba(97,218,251,0.4)",
        icon: "⚡",
        skills: [
            { name: "React / Next.js 15", level: 95 },
            { name: "TypeScript", level: 92 },
            { name: "Tailwind CSS v4", level: 90 },
            { name: "React Native + Expo", level: 80 },
            { name: "UI / UX Design", level: 87 },
            { name: "Framer Motion", level: 82 },
        ],
    },
    {
        category: "Backend Development",
        color: "#68a063",
        glow: "rgba(104,160,99,0.4)",
        icon: "🔧",
        skills: [
            { name: "Node.js", level: 88 },
            { name: "Next.js API Routes", level: 90 },
            { name: "Python", level: 75 },
            { name: "Laravel (PHP)", level: 78 },
            { name: "REST / GraphQL", level: 85 },
            { name: "Zod (Validation)", level: 88 },
            { name: "Better Auth", level: 82 },
        ],
    },
    {
        category: "Database & ORM",
        color: "#336791",
        glow: "rgba(51,103,145,0.4)",
        icon: "🗄️",
        skills: [
            { name: "PostgreSQL + Drizzle ORM", level: 85 },
            { name: "MySQL", level: 85 },
            { name: "Neon (Serverless PG)", level: 82 },
            { name: "Convex / Supabase", level: 80 },
        ],
    },
    {
        category: "AI & Cloud",
        color: "#f59e0b",
        glow: "rgba(245,158,11,0.4)",
        icon: "🤖",
        skills: [
            { name: "Vercel AI SDK", level: 85 },
            { name: "OpenAI / Groq (Llama)", level: 83 },
            { name: "Vercel + Neon + Expo EAS", level: 85 },
            { name: "AWS", level: 72 },
            { name: "Docker / CI/CD", level: 75 },
        ],
    },
    {
        category: "Tools & Package Managers",
        color: "#8b5cf6",
        glow: "rgba(139,92,246,0.4)",
        icon: "🛠️",
        skills: [
            { name: "Bun", level: 85 },
            { name: "Git / GitHub", level: 90 },
            { name: "Turborepo (Monorepo)", level: 80 },
            { name: "Figma", level: 82 },
            { name: "WordPress / Elementor", level: 88 },
            { name: "GoHighLevel (GHL)", level: 92 },
        ],
    },
    {
        category: "Administrative & Digital",
        color: "#f43f5e",
        glow: "rgba(244,63,94,0.4)",
        icon: "📊",
        skills: [
            { name: "Funnel Building (Lead Gen)", level: 95 },
            { name: "Task & Calendar Management", level: 95 },
            { name: "Automation & Documentation", level: 90 },
            { name: "Administrative Support", level: 95 },
            { name: "Video Editing", level: 88 },
            { name: "Canva / Adobe Express", level: 90 },
            { name: "Data Encoding", level: 95 },
        ],
    },
];

// Tech tags with category colors for the aurora cloud
const techTagGroups = [
    { label: "Languages", color: "#61dafb", tags: ["HTML", "CSS", "PHP", "JavaScript", "TypeScript", "Python", "C++", "C#", "Java"] },
    { label: "Frameworks", color: "#68a063", tags: ["Next.js 15", "React", "React Native", "Expo", "Node.js", "Laravel"] },
    { label: "Database", color: "#336791", tags: ["MySQL", "PostgreSQL", "Drizzle ORM", "Neon", "Convex", "Supabase"] },
    { label: "AI & Cloud", color: "#f59e0b", tags: ["Vercel AI SDK", "OpenAI", "Groq", "Vercel", "Expo EAS", "AWS", "Docker", "CI/CD"] },
    { label: "Styling & Tools", color: "#8b5cf6", tags: ["Tailwind CSS v4", "Bun", "Turborepo", "GitHub", "Git", "GraphQL", "REST", "Better Auth", "Zod"] },
    { label: "Design", color: "#f43f5e", tags: ["Figma", "Canva", "Adobe Express", "CapCut"] },
    { label: "Productivity", color: "#10b981", tags: ["Notion", "Trello", "ClickUp", "Airtable", "Asana", "Google Workspace", "MS Office", "Slack", "Teams", "Loom", "DocuSign"] },
    { label: "Marketing", color: "#a855f7", tags: ["WordPress", "Elementor", "GoHighLevel", "Zoho", "Meta Ads Manager", "Google Data Studio"] },
];

const softSkills = [
    { name: "Strong Written Communicator", icon: "✍️", desc: "Clear, concise, and impactful written communication across all formats.", color: "#61dafb", level: 95 },
    { name: "Organized & Reliable", icon: "📋", desc: "Structured workflow management with consistent delivery and zero dropped balls.", color: "#68a063", level: 97 },
    { name: "Tech-Savvy & Fast Learner", icon: "🚀", desc: "Rapidly adapts to new tools and technologies with minimal onboarding time.", color: "#f59e0b", level: 93 },
    { name: "Efficient & Focused", icon: "🎯", desc: "Deep work practitioner — quiet, distraction-free, and highly productive.", color: "#8b5cf6", level: 96 },
    { name: "Detail-Oriented", icon: "🔍", desc: "Nothing slips through. Every pixel, word, and number gets the attention it deserves.", color: "#f43f5e", level: 94 },
    { name: "Deadline Driven", icon: "⏱️", desc: "Thrives under pressure. Deadlines are a commitment, not a suggestion.", color: "#a855f7", level: 98 },
    { name: "Marketing Automation", icon: "⚙️", desc: "Expert in CRM workflows, email/SMS campaigns, and funnel automation.", color: "#10b981", level: 90 },
    { name: "Performance Analytics", icon: "📈", desc: "Data-driven decision making with clear reporting and actionable insights.", color: "#336791", level: 88 },
];

// ── Particle Canvas ─────────────────────────────────────────────────────────
function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let raf: number;
        let w: number, h: number;
        const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }> = [];
        const colors = ["#61dafb", "#8b5cf6", "#f59e0b", "#f43f5e", "#68a063", "#336791", "#10b981", "#a855f7"];
        const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
        resize();
        window.addEventListener("resize", resize);
        for (let i = 0; i < 150; i++) {
            particles.push({ x: Math.random() * 1400, y: Math.random() * 1000, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 2.5 + 0.3, alpha: Math.random() * 0.5 + 0.1, color: colors[Math.floor(Math.random() * colors.length)] });
        }
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(139,92,246,${0.1 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
                }
            }
            particles.forEach((p) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill(); ctx.globalAlpha = 1;
            });
            raf = requestAnimationFrame(draw);
        };
        draw();
        return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
    }, []);
    return <canvas ref={canvasRef} className={styles.particleCanvas} />;
}

// ── Glitch Text ─────────────────────────────────────────────────────────────
function GlitchText({ text, className }: { text: string; className?: string }) {
    const [glitch, setGlitch] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 300); }, 4000 + Math.random() * 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <span className={`${className ?? ""} ${glitch ? styles.glitchActive : ""} ${styles.glitchText}`}>
            {text}
            <span aria-hidden data-text={text} className={styles.glitchBefore} />
            <span aria-hidden data-text={text} className={styles.glitchAfter} />
        </span>
    );
}

// ── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ to, suffix = "%" }: { to: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !started) {
                setStarted(true);
                let start = 0;
                const step = to / 40;
                const timer = setInterval(() => { start += step; if (start >= to) { setCount(to); clearInterval(timer); } else setCount(Math.floor(start)); }, 30);
            }
        }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [to, started]);
    return <span ref={ref}>{count}{suffix}</span>;
}

// ── Magnetic Wrap ─────────────────────────────────────────────────────────────
function MagneticWrap({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0), y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 20 });
    const sy = useSpring(y, { stiffness: 200, damping: 20 });
    const onMove = (e: React.MouseEvent) => { const rect = ref.current!.getBoundingClientRect(); x.set((e.clientX - rect.left - rect.width / 2) * strength); y.set((e.clientY - rect.top - rect.height / 2) * strength); };
    const onLeave = () => { x.set(0); y.set(0); };
    return <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</motion.div>;
}

// ── Holo Bar ─────────────────────────────────────────────────────────────────
function HoloBar({ level, color, glow, name }: { level: number; color: string; glow: string; name: string }) {
    const [hovered, setHovered] = useState(false);
    const [sparks, setSparks] = useState<{ id: number; x: number; delay: number }[]>([]);
    const spawn = () => { const ps = Array.from({ length: 6 }, (_, i) => ({ id: Date.now() + i, x: Math.random() * level, delay: i * 0.04 })); setSparks(ps); setTimeout(() => setSparks([]), 800); };
    return (
        <div className={styles.holoBarWrap} onMouseEnter={() => { setHovered(true); spawn(); }} onMouseLeave={() => setHovered(false)}>
            <div className={styles.skillMeta}>
                <span className={styles.skillName}>{name}</span>
                <span className={styles.skillPct} style={{ color }}><AnimatedCounter to={level} /></span>
            </div>
            <div className={styles.skillTrack}>
                <motion.div className={styles.skillBar} initial={{ width: 0, opacity: 0 }} whileInView={{ width: `${level}%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ background: `linear-gradient(90deg, ${color}88, ${color}, ${color}cc)`, boxShadow: hovered ? `0 0 24px ${glow}, 0 0 48px ${glow}` : `0 0 8px ${glow}` }}>
                    <motion.div className={styles.shimmer} animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }} />
                </motion.div>
                {sparks.map((p) => (<motion.div key={p.id} className={styles.barParticle} style={{ left: `${p.x}%`, background: color }} initial={{ y: 0, opacity: 1, scale: 1 }} animate={{ y: -22, opacity: 0, scale: 0 }} transition={{ duration: 0.55, delay: p.delay }} />))}
                {[25, 50, 75].map((m) => (<div key={m} className={styles.milestone} style={{ left: `${m}%` }} />))}
            </div>
        </div>
    );
}

// ── Floating Orb ─────────────────────────────────────────────────────────────
function FloatingOrb({ style }: { style?: React.CSSProperties }) {
    return <motion.div className={styles.orb} style={style} animate={{ y: [0, -30, 0], scale: [1, 1.08, 1], rotate: [0, 180, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />;
}

// ── Tilt Card ─────────────────────────────────────────────────────────────────
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const rotX = useMotionValue(0), rotY = useMotionValue(0);
    const sRotX = useSpring(rotX, { stiffness: 200, damping: 25 });
    const sRotY = useSpring(rotY, { stiffness: 200, damping: 25 });
    const onMove = (e: React.MouseEvent) => { const rect = ref.current!.getBoundingClientRect(); rotX.set(-((e.clientY - rect.top) / rect.height - 0.5) * 15); rotY.set(((e.clientX - rect.left) / rect.width - 0.5) * 15); };
    const onLeave = () => { rotX.set(0); rotY.set(0); };
    return <motion.div ref={ref} className={className} style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: "preserve-3d", perspective: 800 }} onMouseMove={onMove} onMouseLeave={onLeave} whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>{children}</motion.div>;
}

// ── Simple Tech Tag ───────────────────────────────────────────────────────────
function UltraTag({ text, color }: { text: string; color: string; i?: number; groupIndex?: number }) {
    return (
        <span
            className={styles.ultraTag}
            style={{ "--tag-color": color } as React.CSSProperties}
        >
            {text}
        </span>
    );
}

// ── Simple Soft Skill Card ────────────────────────────────────────────────────
function SoftSkillCard({ skill, i }: { skill: typeof softSkills[0]; i: number }) {
    return (
        <motion.div
            className={styles.softCardOuter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 180, damping: 20 }}
        >
            <div className={styles.softCardFront} style={{ "--skill-color": skill.color } as React.CSSProperties}>
                <div className={styles.softCardTop}>
                    <span className={styles.softCardIcon}>{skill.icon}</span>
                    <svg className={styles.softRing} viewBox="0 0 36 36">
                        <circle className={styles.softRingBg} cx="18" cy="18" r="15" />
                        <motion.circle
                            className={styles.softRingFill}
                            cx="18" cy="18" r="15"
                            strokeDasharray="94"
                            initial={{ strokeDashoffset: 94 }}
                            whileInView={{ strokeDashoffset: 94 - (skill.level / 100) * 94 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            style={{ stroke: skill.color }}
                        />
                        <text x="18" y="21" className={styles.softRingText}>{skill.level}%</text>
                    </svg>
                </div>
                <p className={styles.softCardName}>{skill.name}</p>
                <p className={styles.softCardDesc}>{skill.desc}</p>
                <div className={styles.softCardLine} style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }} />
            </div>
        </motion.div>
    );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const spotX = useTransform(mouseX, (v) => `${v}px`);
    const spotY = useTransform(mouseY, (v) => `${v}px`);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) { mouseX.set(e.clientX - rect.left); mouseY.set(e.clientY - rect.top); }
    }, [mouseX, mouseY]);

    const containerVar = {
        hidden: {},
        show: { transition: { staggerChildren: 0.07 } },
    };
    const itemVar = {
        hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
        show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 200, damping: 22 } },
    };

    return (
        <section id="about" ref={containerRef} className={styles.about} onMouseMove={handleMouseMove}>
            <ParticleCanvas />

            <FloatingOrb style={{ top: "5%", left: "8%", width: 350, height: 350, background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)" }} />
            <FloatingOrb style={{ top: "35%", right: "3%", width: 280, height: 280, background: "radial-gradient(circle, rgba(97,218,251,0.18) 0%, transparent 70%)" }} />
            <FloatingOrb style={{ bottom: "8%", left: "25%", width: 220, height: 220, background: "radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)" }} />
            <FloatingOrb style={{ top: "60%", left: "10%", width: 180, height: 180, background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }} />

            <motion.div className={styles.spotlight} style={{ left: spotX, top: spotY }} />
            <div className={styles.gridOverlay} />

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }}>
                    <SectionHeading
                        title="Turning Ideas Into Digital Reality"
                        description="A passionate and adaptable IT graduate with hands-on experience in administrative support, data management, and digital content creation."
                    />
                </motion.div>

                {/* ── PROFILE + INFO ── */}
                <div className={styles.profileRow}>
                    <motion.div
                        className={styles.profileLeft}
                        initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, type: "spring", stiffness: 120 }}
                    >
                        <MagneticWrap strength={0.2}>
                            <div className={styles.avatarWrap}>
                                <motion.div className={styles.ring1} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                                <motion.div className={styles.ring2} animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
                                <motion.div className={styles.ring3} animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
                                <div className={styles.avatar}>
                                    <Image src="/images/download.jpg" alt="Angelou Vincent T. Ocampo" fill style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                        </MagneticWrap>

                        <div className={styles.infoCards}>
                            {[
                                { icon: "🎓", strong: "BS in IT", p: "JH Cerilles State College" },
                                { icon: "📍", strong: "Based in", p: "Lakewood, Zamboanga del Sur" },
                                { icon: "💼", strong: "Seeking", p: "Admin & IT Roles" },
                            ].map((card, i) => (
                                <TiltCard key={i} className={`${styles.infoCard} glass`}>
                                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, type: "spring", stiffness: 220 }} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                        <motion.span className={styles.infoIcon} animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, type: "tween", ease: "easeInOut" }}>{card.icon}</motion.span>
                                        <div><strong>{card.strong}</strong><p>{card.p}</p></div>
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── SKILLS GRID ── */}
                    <motion.div className={styles.skillsGrid} variants={containerVar} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        {skillCategories.map((cat, ci) => (
                            <motion.div key={cat.category} variants={itemVar} className={styles.skillCategory} style={{ "--cat-color": cat.color } as React.CSSProperties}>
                                <div className={styles.catHeader}>
                                    <motion.span className={styles.catIcon} animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, delay: ci * 0.5, type: "tween", ease: "easeInOut" }}>{cat.icon}</motion.span>
                                    <motion.div className={styles.catDot} style={{ background: cat.color, boxShadow: `0 0 12px ${cat.glow}` }} animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Infinity, delay: ci * 0.3, type: "tween", ease: "easeInOut" }} />
                                    <h3 className={styles.skillsTitle} style={{ color: cat.color }}><GlitchText text={cat.category} /></h3>
                                </div>
                                <motion.div className={styles.catUnderline} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: ci * 0.1 }} style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />
                                {cat.skills.map((s) => (<HoloBar key={s.name} name={s.name} level={s.level} color={cat.color} glow={cat.glow} />))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ══════════════════════════════════════════════
                    ULTRA TECH STACK SECTION
                ══════════════════════════════════════════════ */}
                <motion.div
                    className={styles.techSection}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    {/* Section header */}
                    <div className={styles.bigSectionHeader}>
                        <motion.div
                            className={styles.bigSectionIcon}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <span>⚙️</span>
                        </motion.div>
                        <div>
                            <h2 className={styles.bigSectionTitle}>
                                <GlitchText text="Tech Stack & Tools" />
                            </h2>

                        </div>
                    </div>

                    {/* Aurora background pulse */}
                    <motion.div
                        className={styles.techAurora}
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Tag groups */}
                    <div className={styles.techGroups}>
                        {techTagGroups.map((group, gi) => (
                            <motion.div
                                key={group.label}
                                className={styles.techGroup}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: gi * 0.1, type: "spring", stiffness: 200 }}
                            >
                                {/* Group label */}
                                <motion.div
                                    className={styles.techGroupLabel}
                                    style={{ borderColor: group.color + "44", color: group.color }}
                                    whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${group.color}44` }}
                                >
                                    <motion.span
                                        className={styles.techGroupDot}
                                        style={{ background: group.color }}
                                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: gi * 0.2, type: "tween", ease: "easeInOut" }}
                                    />
                                    {group.label}
                                </motion.div>

                                {/* Tags */}
                                <div className={styles.techGroupTags}>
                                    {group.tags.map((tag, ti) => (
                                        <UltraTag key={tag} text={tag} color={group.color} i={ti} groupIndex={gi} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ══════════════════════════════════════════════
                    ULTRA SOFT SKILLS SECTION
                ══════════════════════════════════════════════ */}
                <motion.div
                    className={styles.softSection}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className={styles.bigSectionHeader}>
                        <motion.div
                            className={styles.bigSectionIcon}
                            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", type: "tween" }}
                        >
                            <span>🧠</span>
                        </motion.div>
                        <div>
                            <h2 className={styles.bigSectionTitle}>
                                <GlitchText text="Soft Skills & Attributes" />
                            </h2>

                        </div>
                    </div>

                    {/* Soft skills card grid */}
                    <div className={styles.softGrid}>
                        {softSkills.map((skill, i) => (
                            <SoftSkillCard key={skill.name} skill={skill} i={i} />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}