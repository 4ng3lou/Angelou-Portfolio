"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import styles from "./Hero.module.css";

const roles = [
    "Full-Stack Developer",
    "Virtual Assistant",
    "Backend Engineer",
    "IT Graduate (BS Information Technology)",
    "Creative Designer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const role = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!deleting && text.length < role.length) {
            timeout = setTimeout(() => setText(role.slice(0, text.length + 1)), 80);
        } else if (!deleting && text.length === role.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && text.length > 0) {
            timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
        } else if (deleting && text.length === 0) {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, roleIndex]);

    return (
        <section id="hero" className={styles.hero}>
            <ParticleCanvas />

            <div className={styles.blob1} />
            <div className={styles.blob2} />
            <div className={styles.blob3} />

            <div className={`${styles.content} container`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={`${styles.greeting} mono`}>
                        👋 Hello, I&apos;m
                    </span>
                </motion.div>

                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Angelou Vincent T. <span className="gradient-text">Ocampo</span>
                </motion.h1>

                <motion.div
                    className={styles.roleRow}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <span className={styles.roleText}>
                        {text}
                        <span className={styles.cursor}>|</span>
                    </span>
                </motion.div>

                <motion.p
                    className={styles.bio}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Results-driven Full-Stack Developer &amp; Virtual Assistant with hands-on experience delivering
                    <br />
                    production-grade web apps and backend systems across Australia, Taiwan, and the Philippines.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a href="#projects" className={styles.btnPrimary}>
                        <span>View My Work</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        Get In Touch
                    </a>
                </motion.div>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                >
                    <div className={styles.stat}>
                        <span className={styles.statNum}>7+</span>
                        <span className={styles.statLabel}>Key Projects</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>3</span>
                        <span className={styles.statLabel}>Time Zones</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>6+</span>
                        <span className={styles.statLabel}>Roles Held</span>
                    </div>

                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className={styles.mouse}>
                    <div className={styles.wheel} />
                </div>
            </motion.div>
        </section>
    );
}
