"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Projects.module.css";

const categories = ["All", "Web App", "Video Editing", "Graphics", "Mobile", "AI/ML"];

const projects = [
    {
        id: "1",
        title: "Laundry Management System",
        description:
            "A multi-branch business tracking system with a real-time tracking and scheduling module.",
        detailedDescription: "This comprehensive system was designed for multi-branch laundry businesses. It features a robust real-time tracking system where customers can monitor their laundry status. Owners can manage scheduling, inventory, and multiple branches from a single dashboard.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        emoji: "🧺",
        image: "/images/laundry_system.jpg",
        gallery: [
            { type: "image", url: "/images/laundry-dashboard.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry2.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry3.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry4.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry5.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry6.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry7.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry8.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry9.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry10.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry11.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry12.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry13.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry14.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry15.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry16.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry17.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry18.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry19.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry20.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry21.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry22.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry23.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry24.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry26.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry27.jpg", title: "Dashboard Overview" },
        ]
    },
    {
        id: "2",
        title: "SupportAI",
        description: "SupportAI acts as a first-line support system that uses AI to instantly respond to customer inquiries. When a situation requires human empathy or expertise, it seamlessly escalates the conversation to a live human agent — all within the same interface.",
        detailedDescription: "Customers can chat with an AI assistant, submit support tickets, track their issues, and get connected to a human agent when needed. Agents can monitor all incoming conversations, view full chat histories, reply to customers directly, and manage support tickets from a dedicated Agent Panel. Admins have full visibility across the platform — managing users, agents, tickets, analytics, and the knowledge base.",
        tags: ["Next.js 15", "Bun", "PostgreSQL + Drizzle", "Vercel AI SDK + Groq", "Tailwind CSS v4", "Vercel + Neon", "React Native + Expo"],
        category: "Web App",
        liveUrl: "https://ai-support-web-rose.vercel.app/",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "🤖",
        image: "/images/aisupport.jpg",
        gallery: []
    },

    {
        id: "3",
        title: "Online Job Portal",
        description:
            "A full-stack job portal connecting job seekers and employers with secure authentication.",
        detailedDescription: "A feature-rich job portal that bridges the gap between talent and opportunity. Employers can post jobs and manage applications, while job seekers can create profiles, upload resumes, and apply with a single click.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "💼",
        image: "/images/job_portal.jpg",
        gallery: [
            { type: "image", url: "/images/ol1.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol2.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol3.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol4.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol5.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol6.jpg", title: "Dashboard Overview" },
        ]
    },
    {
        id: "4",
        title: "Edited Videos Collection",
        description:
            "A showcase of professionally edited videos, including cinematic sequences and event coverage.",
        detailedDescription: "This collection showcases my expertise in video editing and post-production. From cinematic storytelling to high-energy promotional content, each project demonstrates a mastery of pacing, color grading, and sound design.",
        tags: ["CapCut", "Premiere Pro", "Color Grading", "Sound Design"],
        category: "Video Editing",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #f43f5e, #7c3aed)",
        emoji: "🎬",
        image: "/images/video_editing_featured.png",
        gallery: [
            { type: "video", url: "https://res.cloudinary.com/di7fwsdtu/video/upload/reel1_evw8ij.mp4" },
            { type: "video", url: "https://res.cloudinary.com/di7fwsdtu/video/upload/reel2_eyyufb.mp4" },
            { type: "video", url: "https://res.cloudinary.com/di7fwsdtu/video/upload/reel3_ztnzjs.mp4" },
        ]
    },
    {
        id: "5",
        title: "Canva Design Portfolio",
        description:
            "Creative graphic designs ranging from social media branding to professional presentations.",
        detailedDescription: "A diverse portfolio of graphic design work created using Canva. This collection includes brand identity systems, social media marketing kits, event posters, and professional presentation decks.",
        tags: ["Canva", "Graphic Design", "Branding", "UI/UX"],
        category: "Graphics",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
        emoji: "🎨",
        image: "/images/canva_designs_featured.png",
        gallery: [
            { type: "image", url: "/images/1.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/2.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/3.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/4.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/5.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/6.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/7.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/8.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/9.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/10.png", title: "Dashboard Overview" },
        ]
    },
];

export default function Projects() {
    const [active, setActive] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    // We keep zoomedVideo state for logic consistency, but we won't trigger it for the gallery items
    const [zoomedVideo, setZoomedVideo] = useState<string | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
        setZoomedImage(null);
        setZoomedVideo(null);
    }, []);

    const scrollToContact = () => {
        handleCloseModal();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (zoomedImage) {
                    setZoomedImage(null);
                } else if (zoomedVideo) {
                    setZoomedVideo(null);
                } else {
                    handleCloseModal();
                }
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [handleCloseModal, zoomedImage, zoomedVideo]);

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <SectionHeading
                    title="Featured Projects"
                    description="A curated selection of projects that showcase my skills in building full-stack, scalable applications and creative media."
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
                                transition={{ duration: 0.4, ease: "easeOut" }}
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
                                    </div>
                                    <div className={styles.cardLinks}>
                                        <span className={styles.cardLink}>
                                            Explore Collection →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Main Project Modal */}
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
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={handleCloseModal} aria-label="Close modal">
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
                                <div className={styles.modalHeader}>
                                    <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                                    <div className={styles.modalTags}>
                                        {selectedProject.tags.map((t) => (
                                            <span key={t} className={styles.cardTag}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className={styles.modalDescription}>
                                    {selectedProject.detailedDescription || selectedProject.description}
                                </p>

                                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                                    <div className={styles.gallerySection} ref={galleryRef}>
                                        <h4 className={styles.galleryTitle}>
                                            <span>📷</span> Project Gallery
                                        </h4>
                                        <div className={styles.galleryGrid}>
                                            {selectedProject.gallery.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={styles.galleryItem}
                                                    onClick={(e) => {
                                                        // ONLY OPEN LIGHTBOX FOR IMAGES
                                                        if (item.type === "image") {
                                                            e.stopPropagation();
                                                            setZoomedImage(item.url);
                                                        }
                                                        // Videos are now inline GIFs, so no click action needed
                                                    }}
                                                >
                                                    {item.type === "video" ? (
                                                        // --- NEW: AUTO-PLAYING GIF-LIKE VIDEO ---
                                                        <video
                                                            src={item.url}
                                                            className={styles.galleryVideo}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            disablePictureInPicture
                                                            controlsList="nodownload nofullscreen noremoteplayback"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={item.url}
                                                            alt={`Gallery item ${idx + 1}`}
                                                            className={styles.galleryImg}
                                                            onError={(e) => {
                                                                const parent = (e.target as HTMLImageElement).closest(`.${styles.galleryItem}`) as HTMLElement;
                                                                if (parent) parent.style.display = "none";
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className={styles.modalActions}>
                                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? (
                                        <a
                                            href={selectedProject.liveUrl}
                                            className={`${styles.modalButton} ${styles.primaryButton}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Visit Full Collection ↗
                                        </a>
                                    ) : (
                                        <button
                                            onClick={scrollToContact}
                                            className={`${styles.modalButton} ${styles.primaryButton}`}
                                        >
                                            <span>💬</span> Contact Developer
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomedImage(null)}
                    >
                        <button className={styles.lightboxClose} onClick={() => setZoomedImage(null)}>
                            ✕
                        </button>
                        <motion.img
                            src={zoomedImage}
                            alt="Zoomed content"
                            className={styles.lightboxImage}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Lightbox - We keep this code but it won't be triggered from the gallery anymore */}
            <AnimatePresence>
                {zoomedVideo && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomedVideo(null)}
                    >
                        <button className={styles.lightboxClose} onClick={() => setZoomedVideo(null)}>
                            ✕
                        </button>
                        <motion.video
                            src={zoomedVideo}
                            className={styles.lightboxImage}
                            controls
                            autoPlay
                            playsInline
                            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}