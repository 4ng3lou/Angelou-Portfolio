"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Experience.module.css";

const experiences = [
    {
        title: "Web Designer & Funnel Builder",
        company: "UPSCALE - Philosophically Built Web Design",
        period: "Recent",
        description:
            "Designed mobile-responsive gym landing pages and set up a 3-step lead generation funnel. Integrated automated email/SMS sequences and synced with Zoho CRM. Increased trial sign-ups by 45% and improved lead response time by 70%.",
        tech: ["GoHighLevel", "Zoho", "Funnel Setup", "Automation"],
        icon: "🚀",
    },
    {
        title: "Administrative Support",
        company: "Philippine Statistics Authority",
        description:
            "Organized 300+ HR/digital records and scheduled meetings with 100% accuracy. Designed graphics via Canva and edited explainer videos via CapCut (↑ 40% engagement). Managed workflow boards and created reporting dashboards to support leadership.",
        tech: ["Google Workspace", "Canva", "CapCut", "Data Studio"],
        icon: "🏢",
    },
    {
        title: "Intern",
        company: "Philippine Statistics Authority — Admin Office",
        period: "Jan 2025 — May 2025",
        description:
            "Conducted high-volume data entry, contributed to internal system deployment, created visual updates using Canva, and performed essential office administrative tasks.",
        tech: ["Canva", "Data Entry", "System Support", "Admin"],
        icon: "🏢",
    },
    {
        title: "Developer",
        description:
            "High-performance, type-safe web applications built from the database to the UI. Specialized in crafting seamless digital experiences with a focus on relational data integrity and modern server-side rendering.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Rest"],
        icon: "📈",
    },
];

const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const itemVar = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                <SectionHeading
                    title="Work Experience"
                    description="A timeline of my professional journey and growth."
                />

                <motion.div
                    className={styles.timeline}
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className={styles.line} />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.item} ${i % 2 === 0 ? styles.itemLeft : styles.itemRight
                                }`}
                            variants={itemVar}
                        >
                            <div className={styles.dot}>
                                <span>{exp.icon}</span>
                            </div>
                            <div className={`${styles.card} glass`}>
                                <span className={styles.period}>{exp.period}</span>
                                <h3 className={styles.title}>{exp.title}</h3>
                                <p className={styles.company}>{exp.company}</p>
                                <p className={styles.desc}>{exp.description}</p>
                                <div className={styles.techList}>
                                    {exp.tech.map((t) => (
                                        <span key={t} className={styles.techTag}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
