"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Projects.module.css";

const categories = ["All", "Web App", "Video Editing", "Graphics", "Mobile", "AI/ML"];

const projects = [
    {
        id: "1",
        title: "Comprehensive Laundry Management System",
        description:
            "A multi-branch business tracking system with a real-time tracking and scheduling module to manage laundry cycles simultaneously.",
        detailedDescription: "This comprehensive system was designed for multi-branch laundry businesses. It features a robust real-time tracking system where customers can monitor their laundry status. Owners can manage scheduling, inventory, and multiple branches from a single dashboard. Built with a focus on scalability and user-friendly interface.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        githubUrl: "#",
        gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        emoji: "🧺",
        image: "/images/laundry_system.jpg"
    },
    {
        id: "2",
        title: "Online Job Portal",
        description:
            "A full-stack job portal connecting job seekers and employers. Features secure login authentication, resume storage, and job postings.",
        detailedDescription: "A feature-rich job portal that bridges the gap between talent and opportunity. Employers can post jobs and manage applications, while job seekers can create profiles, upload resumes, and apply with a single click. Includes secure authentication and advanced search filters.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        githubUrl: "#",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "💼",
        image: "/images/job_portal.jpg"
    },
    {
        id: "3",
        title: "Edited Videos Collection",
        description:
            "A showcase of professionally edited videos, including cinematic sequences, promotional content, and event coverage highlights.",
        detailedDescription: "This collection showcases my expertise in video editing and post-production. From cinematic storytelling to high-energy promotional content, each project demonstrates a mastery of pacing, color grading, and sound design. Using industry-standard tools like Premiere Pro and CapCut to deliver professional-grade visuals.",
        tags: ["CapCut", "Premiere Pro", "Color Grading", "Sound Design"],
        category: "Video Editing",
        liveUrl: "#",
        githubUrl: "#",
        gradient: "linear-gradient(135deg, #f43f5e, #7c3aed)",
        emoji: "🎬",
        image: "/images/video_editing.jpg"
    },
    {
        id: "4",
        title: "Canva Design Portfolio",
        description:
            "Creative graphic designs ranging from social media branding and marketing materials to professional presentations and logos.",
        detailedDescription: "A diverse portfolio of graphic design work created using Canva. This collection includes brand identity systems, social media marketing kits, event posters, and professional presentation decks. Each design is crafted with attention to typography, color theory, and visual hierarchy to effectively communicate the intended message.",
        tags: ["Canva", "Graphic Design", "Branding", "UI/UX"],
        category: "Graphics",
        liveUrl: "#",
        githubUrl: "#",
        gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
        emoji: "🎨",
        image: "/images/canva_designs.jpg"
    },
];

export default function Projects() {
    const [active, setActive] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleCloseModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [handleCloseModal]);

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
                                onClick={() => setSelectedProject(p)}
                            >
                                <div
                                    className={styles.cardTop}
                                    style={{ background: p.gradient }}
                                >
                                    {p.image ? (
                                        <img src={p.image} alt={p.title} className={styles.cardImage} />
                                    ) : (
                                        <span className={styles.cardEmoji}>{p.emoji}</span>
                                    )}
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{p.title}</h3>
                                    <p className={styles.cardDesc}>{p.description}</p>
                                    <div className={styles.cardTags}>
                                        {p.tags.slice(0, 3).map((t) => (
                                            <span key={t} className={styles.cardTag}>
                                                {t}
                                            </span>
                                        ))}
                                        {p.tags.length > 3 && (
                                            <span className={styles.cardTag}>+{p.tags.length - 3} more</span>
                                        )}
                                    </div>
                                    <div className={styles.cardLinks}>
                                        <span className={styles.cardLink}>
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={handleCloseModal}>
                                ✕
                            </button>

                            <div className={styles.modalHero} style={{ background: selectedProject.gradient }}>
                                {selectedProject.image ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className={styles.modalImage} />
                                ) : (
                                    <span className={styles.modalEmoji}>{selectedProject.emoji}</span>
                                )}
                            </div>

                            <div className={styles.modalBody}>
                                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                                <div className={styles.modalTags}>
                                    {selectedProject.tags.map((t) => (
                                        <span key={t} className={styles.cardTag}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className={styles.modalDescription}>
                                    {selectedProject.detailedDescription || selectedProject.description}
                                </p>

                                <div className={styles.modalActions}>
                                    <a
                                        href={selectedProject.liveUrl}
                                        className={`${styles.modalButton} ${styles.primaryButton}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Collection ↗
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        className={`${styles.modalButton} ${styles.secondaryButton}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
