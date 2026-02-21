"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Blog.module.css";

const posts = [
    {
        id: "1",
        title: "Building Scalable APIs with Next.js Route Handlers",
        excerpt:
            "A deep dive into designing production-ready APIs using Next.js App Router, middleware patterns, and database integration.",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        category: "Backend",
        gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        emoji: "🔗",
    },
    {
        id: "2",
        title: "The Art of Micro-Animations in Modern Web Design",
        excerpt:
            "How subtle animations can transform user experience — with practical Framer Motion examples and performance tips.",
        date: "Dec 28, 2025",
        readTime: "6 min read",
        category: "Design",
        gradient: "linear-gradient(135deg, #f43f5e, #f59e0b)",
        emoji: "✨",
    },
    {
        id: "3",
        title: "PostgreSQL Performance Tuning for Web Applications",
        excerpt:
            "Practical strategies for indexing, query optimization, and connection pooling in high-traffic web apps.",
        date: "Nov 10, 2025",
        readTime: "10 min read",
        category: "Database",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "🐘",
    },
];

const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const itemVar = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Blog() {
    return (
        <section id="blog" className={styles.blog}>
            <div className="container">
                <SectionHeading
                    title="Latest Articles"
                    description="Thoughts, tutorials, and insights on web development, design, and technology."
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {posts.map((post) => (
                        <motion.article
                            key={post.id}
                            className={`${styles.card} glass`}
                            variants={itemVar}
                            whileHover={{ y: -8 }}
                        >
                            <div
                                className={styles.cardImg}
                                style={{ background: post.gradient }}
                            >
                                <span className={styles.cardEmoji}>{post.emoji}</span>
                                <span className={styles.cardCategory}>{post.category}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardMeta}>
                                    <span>{post.date}</span>
                                    <span>·</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>
                                    Read Article →
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
