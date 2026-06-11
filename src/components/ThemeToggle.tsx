"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setIsDark(saved === "dark");
            document.documentElement.setAttribute("data-theme", saved);
        }
    }, []);

    const toggle = () => {
        const next = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    return (
        <motion.button
            className={styles.toggle}
            onClick={toggle}
            whileTap={{ scale: 0.85, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle theme"
        >
            <motion.span
                key={isDark ? "moon" : "sun"}
                initial={{ opacity: 0, rotate: -90, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.icon}
            >
                {isDark ? "🌙" : "☀️"}
            </motion.span>
        </motion.button>
    );
}
