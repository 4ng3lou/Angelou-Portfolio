"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Projects.module.css";

const categories = ["All", "Web App", "Mobile", "AI/ML", "Open Source"];

const projects = [
    {
        id: "1",
        title: "Comprehensive Laundry Management System",
        description:
            "A multi-branch business tracking system with a real-time tracking and scheduling module to manage laundry cycles simultaneously.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        githubUrl: "#",
        gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        emoji: "🧺",
    },
    {
        id: "2",
        title: "Online Job Portal",
        description:
            "A full-stack job portal connecting job seekers and employers. Features secure login authentication, resume storage, and job postings.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        githubUrl: "#",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "💼",
    },

];

export default function Projects() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <SectionHeading
                    title="Featured Projects"
                    description="A curated selection of projects that showcase my skills in building full-stack, scalable applications."
                />

                <div className={styles.tabs}>
                    {categories.map((c) => (
                        <button
                            key={c}
                            className={`${styles.tab} ${active === c ? styles.tabActive : ""}`}
                            onClick={() => setActive(c)}
                        >
                            {c}
                            {active === c && (
                                <motion.div
                                    layoutId="projectTab"
                                    className={styles.tabBg}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div className={styles.grid} layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35 }}
                                className={`${styles.card} glass`}
                            >
                                <div
                                    className={styles.cardTop}
                                    style={{ background: p.gradient }}
                                >
                                    <span className={styles.cardEmoji}>{p.emoji}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{p.title}</h3>
                                    <p className={styles.cardDesc}>{p.description}</p>
                                    <div className={styles.cardTags}>
                                        {p.tags.map((t) => (
                                            <span key={t} className={styles.cardTag}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.cardLinks}>
                                        <a href={p.liveUrl} className={styles.cardLink}>
                                            Live Demo ↗
                                        </a>
                                        <a href={p.githubUrl} className={styles.cardLink}>
                                            GitHub ↗
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
