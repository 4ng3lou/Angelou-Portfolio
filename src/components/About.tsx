"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";

const skillCategories = [
    {
        category: "Frontend Development",
        color: "#61dafb",
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

const techTags = [
    "HTML", "CSS", "PHP", "JavaScript", "TypeScript", "Next.js 15", "React",
    "React Native", "Expo", "Bun", "Node.js", "Python", "C++", "C#", "Java",
    "MySQL", "PostgreSQL", "Drizzle ORM", "Neon", "Convex", "Supabase",
    "Vercel AI SDK", "OpenAI", "Groq", "Tailwind CSS v4", "Better Auth", "Zod",
    "Vercel", "Expo EAS", "Turborepo", "GitHub", "Git", "Docker", "AWS",
    "GraphQL", "REST", "CI/CD", "Figma", "Canva", "Adobe Express", "CapCut",
    "Notion", "Trello", "ClickUp", "Airtable", "Asana", "Google Workspace",
    "MS Office", "Slack", "Teams", "Loom", "DocuSign", "WordPress", "Elementor",
    "GoHighLevel", "Zoho", "Meta Ads Manager", "Google Data Studio",
];

const softSkills = [
    "Strong Written Communicator",
    "Organized, Reliable & Independent",
    "Tech-Savvy & Fast Learner",
    "Quiet Worker – Efficient & Focused",
    "Detail-Oriented & Deadline Driven",
    "Marketing Automation & CRM",
    "Email/SMS Campaign Setup",
    "Performance Analytics",
];

const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const itemVar = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
};

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <SectionHeading
                    title="Turning Ideas Into Digital Reality"
                    description="A passionate and adaptable IT graduate with hands-on experience in administrative support, data management, and digital content creation."
                />

                <div className={styles.grid}>
                    {/* Left — Avatar & Info Cards */}
                    <motion.div
                        className={styles.left}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.avatarWrap}>
                            <div className={styles.avatarRing} />
                            <div className={styles.avatar}>
                                <Image
                                    src="/images/download.jpg"
                                    alt="Angelou Vincent T. Ocampo"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div className={styles.infoCards}>
                            <div className={`${styles.infoCard} glass`}>
                                <span className={styles.infoIcon}>🎓</span>
                                <div>
                                    <strong>BS in IT</strong>
                                    <p>JH Cerilles State College</p>
                                </div>
                            </div>
                            <div className={`${styles.infoCard} glass`}>
                                <span className={styles.infoIcon}>📍</span>
                                <div>
                                    <strong>Based in</strong>
                                    <p>Lakewood, Zamboanga del Sur</p>
                                </div>
                            </div>
                            <div className={`${styles.infoCard} glass`}>
                                <span className={styles.infoIcon}>💼</span>
                                <div>
                                    <strong>Seeking</strong>
                                    <p>Admin & IT Roles</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Skills */}
                    <motion.div
                        className={styles.right}
                        variants={containerVar}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {skillCategories.map((cat) => (
                            <motion.div key={cat.category} variants={itemVar} className={styles.skillCategory}>
                                <h3 className={styles.skillsTitle} style={{ color: cat.color }}>
                                    {cat.category}
                                </h3>
                                {cat.skills.map((s) => (
                                    <motion.div
                                        key={s.name}
                                        className={styles.skillRow}
                                        variants={itemVar}
                                    >
                                        <div className={styles.skillMeta}>
                                            <span className={styles.skillName}>{s.name}</span>
                                            <span className={styles.skillPct}>{s.level}%</span>
                                        </div>
                                        <div className={styles.skillTrack}>
                                            <motion.div
                                                className={styles.skillBar}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${s.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                style={{ background: cat.color }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}

                        {/* Tech Tags */}
                        <h3 className={styles.skillsTitle} style={{ color: "#a855f7" }}>Tech Stack & Tools</h3>
                        <div className={styles.techTags}>
                            {techTags.map((t) => (
                                <span key={t} className={styles.tag}>{t}</span>
                            ))}
                        </div>

                        {/* Soft Skills */}
                        <h3 className={styles.softSkillsTitle}>Soft Skills & Attributes</h3>
                        <div className={styles.softSkillsList}>
                            {softSkills.map((st) => (
                                <span key={st} className={styles.softTag}>{st}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}