"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Experience.module.css";

const experiences = [
    {
        title: "Programmer Assistant (Contract)",
        company: "SKOApp — Australian/French Client | Supervised by Pagadian City-based Lead",
        period: "2026 — Present",
        description:
            "Resolve an average of 2–3 bugs per day in SKOApp, a restaurant POS and management application, using Delphi (Pascal). Support 1 active mid-scale restaurant client in Australia, ensuring uninterrupted daily operations through timely bug fixes. Analyze legacy Delphi codebase to identify root causes, implement targeted patches, and document all changes for the team.",
        tech: ["Delphi", "Pascal", "POS Systems", "Bug Fixing", "Remote Support"],
        icon: "🔧",
    },
    {
        title: "Full Stack Developer (Contract)",
        company: "Maple Technology Developers, Davao City (Remote)",
        period: "2026 — Present",
        description:
            "Develop and maintain full-stack web applications using React, Next.js, Node.js, and PostgreSQL. Design RESTful APIs and relational database schemas; conduct code reviews and maintain technical documentation. Collaborate on feature development, automated testing, and CI/CD deployment pipelines. Deliver responsive, accessible user interfaces aligned with client branding and UX requirements.",
        tech: ["Next.js", "React", "Node.js", "PostgreSQL", "REST API", "CI/CD"],
        icon: "💻",
    },
    {
        title: "Junior Backend Engineer (Contract)",
        company: "DI Strategy Group, Taiwan Client (Remote)",
        period: "2026 — Present",
        description:
            "Build backend services using Node.js and Python supporting SEO tooling and ad campaign systems. Develop automated sitemap generation, metadata management, and search engine indexing pipelines. Design RESTful APIs consumed by frontend teams and third-party ad and SEO platforms. Contribute to query optimization and server-side performance improvements across production environments.",
        tech: ["Node.js", "Python", "REST API", "SEO", "PostgreSQL", "Performance"],
        icon: "⚙️",
    },
    {
        title: "Independent Technical Consultant",
        company: "Self-Employed | Remote",
        period: "2025 — Present",
        description:
            "Built SupportAI, an AI customer support system with live agent escalation deployed for early-stage clients using Next.js 15, PostgreSQL, and Drizzle ORM. Developed DentaFlow, an AI dental clinic platform with smart scheduling, patient records, automated follow-ups, and an integrated AI assistant. Created a multi-branch Laundry Management System with real-time tracking using PHP, MySQL, and JavaScript. Built a full-stack Online Job Portal with secure authentication; integrated Vercel AI SDK and OpenAI/Groq across projects.",
        tech: ["Next.js 15", "PostgreSQL", "Drizzle ORM", "OpenAI", "Groq", "PHP", "MySQL"],
        icon: "🤖",
    },
    {
        title: "Web Designer & Funnel Builder (Contract)",
        company: "UPSCALE — Philosophically Built Web Design",
        period: "2025 — Present",
        description:
            "Designed mobile-responsive gym landing pages and built a 3-step lead generation funnel using GoHighLevel. Integrated automated email and SMS sequences synced with Zoho CRM; increased trial sign-ups by 45% and improved lead response time by 70%. Built CRM-integrated prospect pipeline: New Lead to Contacted to Booked to Member.",
        tech: ["GoHighLevel", "Zoho CRM", "Email Automation", "SMS Sequences", "Funnel Building"],
        icon: "🚀",
    },
    {
        title: "Administrative Support & Intern",
        company: "Philippine Statistics Authority, Zamboanga del Sur",
        period: "Feb 2025 — May 2025",
        description:
            "Organized and digitized 300+ HR and administrative records, improving data retrieval efficiency for the agency. Edited explainer videos using CapCut and Adobe Rush (40% engagement increase); designed graphics via Canva and Adobe Express. Scheduled meetings with 100% accuracy; managed workflow boards in Trello, Airtable, and ClickUp. Built reporting dashboards in Google Data Studio; supported QA and documentation in Notion, Jira, and Confluence.",
        tech: ["Canva", "Adobe Express", "CapCut", "Google Data Studio", "Trello", "Notion"],
        icon: "🏢",
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
