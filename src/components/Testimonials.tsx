"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        name: "Jie Mawile",
        role: "PSA Zamboanga del Sur - Supervisor",
        quote:
            "“Angelou consistently delivered quality work ahead of deadlines. His tech skills and responsiveness made remote collaboration easy.",
        avatar: "👩‍💼",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
    }, []);

    const prev = () => {
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [next]);

    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className="container">
                <SectionHeading
                    title="What People Say"
                    description="Kind words from colleagues and clients I've had the pleasure of working with."
                />

                <div className={styles.carousel}>
                    <button className={styles.arrow} onClick={prev} aria-label="Previous">
                        ←
                    </button>

                    <div className={styles.slideWrap}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                className={`${styles.slide} glass`}
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -80 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className={styles.quoteIcon}>&ldquo;</div>
                                <p className={styles.quote}>{testimonials[current].quote}</p>
                                <div className={styles.author}>
                                    <span className={styles.authorAvatar}>
                                        {testimonials[current].avatar}
                                    </span>
                                    <div>
                                        <strong className={styles.authorName}>
                                            {testimonials[current].name}
                                        </strong>
                                        <span className={styles.authorRole}>
                                            {testimonials[current].role}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className={styles.arrow} onClick={next} aria-label="Next">
                        →
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
