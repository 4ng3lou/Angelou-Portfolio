"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`${styles.inner} container`}>
                <div className={styles.top}>
                    <a href="#hero" className={styles.logo}>
                        <span className={styles.logoIcon}>⬡</span>
                        <span>
                            Angelou Vincent T.<span className="gradient-text">Ocampo</span>
                        </span>
                    </a>

                    <div className={styles.links}>
                        {["About", "Projects", "Experience", "Blog", "Contact"].map(
                            (l) => (
                                <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>
                                    {l}
                                </a>
                            )
                        )}
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        © {year} Angelou Vincent T. Ocampo. Crafted with ❤️ and Next.js
                    </p>

                    <motion.button
                        className={styles.backTop}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Back to top"
                    >
                        ↑ Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
