"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Apps", href: "#apps" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
        );

        navLinks.forEach(({ href }) => {
            const el = document.querySelector(href);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        >
            <div className={`${styles.inner} container`}>
                <a href="#hero" className={styles.logo}>
                    <span className={styles.logoIcon}>⬡</span>
                    <span className={styles.logoText}>
                        <span className="gradient-text">A.V.O</span>
                    </span>
                </a>

                <div className={styles.links}>
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ""
                                }`}
                        >
                            {label}
                            {activeSection === href.slice(1) && (
                                <motion.div
                                    layoutId="navIndicator"
                                    className={styles.indicator}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className={styles.right}>
                    <ThemeToggle />
                    <a href="#contact" className={styles.cta}>
                        Let&apos;s Talk
                    </a>
                    <button
                        className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={styles.mobileMenu}
                    >
                        {navLinks.map(({ label, href }, i) => (
                            <motion.a
                                key={href}
                                href={href}
                                className={styles.mobileLink}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
