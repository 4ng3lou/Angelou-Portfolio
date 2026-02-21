"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./AppsIUse.module.css";
import Image from "next/image";

const apps = [
    {
        name: "Antigravity",
        icon: "/images/antigravity_logo.png"
    },
    {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        category: "Development",
    },
    {
        name: "Cursor",
        icon: "https://www.cursor.com/assets/images/logo.svg",
        category: "Development",
    },
    {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
        category: "Design",
    },
    {
        name: "Premiere Pro",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
        category: "Video Editing",
    },
    {
        name: "CapCut",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg",
        category: "Video Editing",
    },
    {
        name: "Canva",
        icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
        category: "Design",
    },
    {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        category: "Design",
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        category: "Development",
    },
    {
        name: "Chrome",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        category: "Productivity",
    },
    {
        name: "MS Office",
        icon: "/images/ms_office.svg",
        category: "Productivity"
    },
    {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        category: "Web Development",
    }
];

const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const itemVar = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
};

export default function AppsIUse() {
    return (
        <section id="apps" className={styles.section}>
            <div className="container">
                <SectionHeading
                    title="Apps I Use"
                    description="A collection of tools and software I rely on daily to create, code, and stay productive."
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {apps.map((app) => (
                        <motion.div key={app.name} className={`${styles.card} glass`} variants={itemVar}>
                            <div className={styles.iconWrapper}>
                                {app.name === "MS Office" ? (
                                    <svg className={styles.icon} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <rect width="200" height="200" fill="#fff" rx="12"/>
                                        <rect x="4" y="4" width="94" height="94" rx="8" fill="#2B579A"/>
                                        <rect x="102" y="4" width="94" height="94" rx="8" fill="#217346"/>
                                        <rect x="4" y="102" width="94" height="94" rx="8" fill="#D24726"/>
                                        <rect x="102" y="102" width="94" height="94" rx="8" fill="#F2B50F"/>
                                    </svg>
                                ) : app.icon.endsWith('.svg') || app.icon.endsWith('.png') || app.icon.endsWith('.jpg') || app.icon.endsWith('.webp') || app.icon.startsWith('http') ? (
                                    <img src={app.icon} alt={app.name} className={styles.icon} />
                                ) : (
                                    <div className={styles.placeholderIcon}>{app.name.charAt(0)}</div>
                                )}
                            </div>
                            <h3 className={styles.appName}>{app.name}</h3>
                            <span className={styles.appCategory}>{app.category}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className={styles.blob1} />
            <div className={styles.blob2} />
        </section>
    );
}
