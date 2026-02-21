"use client";

import { motion } from "framer-motion";
import styles from "./SectionHeading.module.css";

interface Props {
    title: string;
    description?: string;
}

export default function SectionHeading({ title, description }: Props) {
    return (
        <motion.div
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.desc}>{description}</p>}
            <div className={styles.line} />
        </motion.div>
    );
}
