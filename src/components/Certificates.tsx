"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Certificates.module.css";
import Image from "next/image";

const certificates = [
    {
        id: "1",
        title: "Introduction to C++",
        issuer: "Sololearn",
        date: "Recent",
        image: "/images/Introduction to C++_certificate.jpg",
    },
    {
        id: "2",
        title: "Introduction to SQL",
        issuer: "Sololearn",
        date: "Recent",
        image: "/images/Introduction to SQL_certificate.jpg",
    },
    {
        id: "3",
        title: "Graphic and Design Professional",
        issuer: "Educational Institution",
        date: "Recent",
        image: "/images/graphic_design_certificate.jpg",
    },
    {
        id: "4",
        title: "Video Editing & Videography Seminar",
        issuer: "Industry Workshop",
        date: "Recent",
        image: "/images/videography_seminar_certificate.jpg",
    }
];

export default function Certificates() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section id="certificates" className={styles.section}>
            <div className="container">
                <SectionHeading
                    title="Certificates & Awards"
                    description="Professional certifications and ongoing education that fuel my technical growth."
                />

                <div className={styles.grid}>
                    {certificates.map((cert) => (
                        <motion.div
                            layoutId={`cert-container-${cert.id}`}
                            key={cert.id}
                            className={`${styles.card} glass`}
                            onClick={() => setSelectedId(cert.id)}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div className={styles.imageWrapper} layoutId={`cert-image-${cert.id}`}>
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className={styles.image}
                                    unoptimized
                                />
                                <div className={styles.imageOverlay}>
                                    <span>View Details</span>
                                </div>
                            </motion.div>
                            <div className={styles.content}>
                                <motion.h3 className={styles.title} layoutId={`cert-title-${cert.id}`}>
                                    {cert.title}
                                </motion.h3>
                                <motion.p className={styles.issuer} layoutId={`cert-issuer-${cert.id}`}>
                                    {cert.issuer} &bull; {cert.date}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        {certificates.map(
                            (cert) =>
                                cert.id === selectedId && (
                                    <motion.div
                                        key={cert.id}
                                        className={`${styles.modalContent} glass`}
                                        layoutId={`cert-container-${cert.id}`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className={styles.closeBtn}
                                            onClick={() => setSelectedId(null)}
                                        >
                                            &times;
                                        </button>
                                        <motion.div className={styles.modalImageWrapper} layoutId={`cert-image-${cert.id}`}>
                                            <Image
                                                src={cert.image}
                                                alt={cert.title}
                                                fill
                                                className={styles.modalImage}
                                                unoptimized
                                            />
                                        </motion.div>
                                        <div className={styles.modalBody}>
                                            <motion.h3 className={styles.modalTitle} layoutId={`cert-title-${cert.id}`}>
                                                {cert.title}
                                            </motion.h3>
                                            <motion.p className={styles.modalIssuer} layoutId={`cert-issuer-${cert.id}`}>
                                                Issued by {cert.issuer} in {cert.date}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
