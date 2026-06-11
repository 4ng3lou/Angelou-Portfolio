"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Contact.module.css";

const socials = [
    { label: "GitHub", url: "https://github.com", icon: "🐙" },
    { label: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { label: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { label: "Email", url: "mailto:angeloocampo61@gmail.com", icon: "📧" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("sent");
                setForm({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <SectionHeading
                    title="Let's Work Together"
                    description="Have a project in mind or just want to say hello? I'd love to hear from you."
                />

                <div className={styles.grid}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`${styles.infoCard} glass`}>
                            <h3 className={styles.infoTitle}>Get in Touch</h3>
                            <p className={styles.infoDesc}>
                                I&apos;m always open to discussing new projects, creative ideas, or
                                opportunities to be part of something amazing.
                            </p>

                            <div className={styles.contactDetails}>
                                <div className={styles.detail}>
                                    <span className={styles.detailIcon}>📍</span>
                                    <span>Lakewood, Zamboanga del Sur</span>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailIcon}>📧</span>
                                    <span>angeloocampo61@gmail.com</span>
                                </div>
                                <div className={styles.detail}>
                                    <span className={styles.detailIcon}>📱</span>
                                    <span>09210592860</span>
                                </div>
                            </div>

                            <div className={styles.socials}>
                                {socials.map((s) => (
                                    <motion.a
                                        key={s.label}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.social}
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={s.label}
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={`${styles.form} glass`}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.field}>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                required
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className={styles.submit}
                            disabled={status === "sending"}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === "sending"
                                ? "Sending..."
                                : status === "sent"
                                    ? "✓ Message Sent!"
                                    : "Send Message"}
                        </motion.button>
                        {status === "error" && (
                            <p className={styles.error}>
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
