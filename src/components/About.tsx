"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";

const skills = [
    { name: "Frontend Development", level: 85, color: "#61dafb" },
    { name: "Backend Development", level: 80, color: "#68a063" },
    { name: "Database (MySQL, PostgreSQL, Convex, Supabase)", level: 85, color: "#336791" },
    { name: "React / Next.js", level: 95, color: "#61dafb" },
    { name: "React Native", level: 80, color: "#016783ff" },
    { name: "TypeScript", level: 92, color: "#3178c6" },
    { name: "Node.js", level: 88, color: "#68a063" },
    { name: "UI / UX Design", level: 87, color: "#f43f5e" },
    { name: "Funnel Building (Lead Gen)", level: 95, color: "#f43f5e" },
    { name: "GoHighLevel Web Design", level: 92, color: "#3178c6" },
    { name: "Task & Calendar Management", level: 95, color: "#61dafb" },
    { name: "Automation & Documentation", level: 90, color: "#f59e0b" },
    { name: "Administrative Support", level: 95, color: "#8b5cf6" },
    { name: "Video Editing", level: 88, color: "#a855f7" },
    { name: "Canva Design", level: 90, color: "#f43f5e" },
    { name: "Data Encoding", level: 95, color: "#68a063" },
];

const softSkills = [
    "Strong Written Communicator",
    "Organized, Reliable & Independent",
    "Tech-Savvy & Fast Learner",
    "Quiet Worker – Efficient & Focused",
    "Detail-Oriented & Deadline Driven",
    "Marketing Automation & CRM",
    "Email/SMS Campaign Setup",
    "Performance Analytics"
];

const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
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

                    <motion.div
                        className={styles.right}
                        variants={containerVar}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.skillsTitle}>Core Skills</h3>

                        {skills.map((s) => (
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
                                        style={{ background: s.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}

                        <div className={styles.techTags}>
                            {[
                                "HTML",
                                "CSS",
                                "PHP",
                                "JavaScript",
                                "Next.js",
                                "TypeScript",
                                "C++",
                                "MySQL",
                                "Java",
                                "C#",
                                "Canva",
                                "Adobe Express",
                                "CapCut",
                                "Notion",
                                "Trello",
                                "ClickUp",
                                "Airtable",
                                "Asana",
                                "Google Workspace",
                                "MS Office",
                                "Slack",
                                "Teams",
                                "Loom",
                                "DocuSign",
                                "Google Data Studio",
                                "WordPress",
                                "Elementor",
                                "Figma",
                                "GitHub",
                                "Git",
                                "Docker",
                                "AWS",
                                "GraphQL",
                                "REST",
                                "CI/CD",
                                "GoHighLevel (GHL)",
                                "Zoho",
                                "Meta Ads Manager",
                            ].map((t) => (
                                <span key={t} className={styles.tag}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <h3 className={styles.softSkillsTitle}>Soft Skills & Attributes</h3>
                        <div className={styles.softSkillsList}>
                            {softSkills.map((st) => (
                                <span key={st} className={styles.softTag}>
                                    {st}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
