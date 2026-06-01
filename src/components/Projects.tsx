"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import styles from "./Projects.module.css";

const categories = ["All", "Personal", "Web App", "Video Editing", "Graphics", "Mobile", "AI/ML"];

const projects = [
    {
        id: "1",
        title: "Laundry Management System",
        description:
            "A multi-branch business tracking system with a real-time tracking and scheduling module.",
        detailedDescription: "This comprehensive system was designed for multi-branch laundry businesses. It features a robust real-time tracking system where customers can monitor their laundry status. Owners can manage scheduling, inventory, and multiple branches from a single dashboard.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        emoji: "🧺",
        image: "/images/laundry_system.jpg",
        gallery: [
            { type: "image", url: "/images/laundry-dashboard.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry2.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry3.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry4.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry5.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry6.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry7.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry8.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry9.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry10.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry11.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry12.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry13.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry14.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry15.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry16.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry17.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry18.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry19.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry20.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry21.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry22.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry23.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry24.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry26.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/laundry27.jpg", title: "Dashboard Overview" },
        ]
    },
    {
        id: "2",
        title: "SupportAI",
        description: "SupportAI acts as a first-line support system that uses AI to instantly respond to customer inquiries. When a situation requires human empathy or expertise, it seamlessly escalates the conversation to a live human agent — all within the same interface.",
        detailedDescription: "Customers can chat with an AI assistant, submit support tickets, track their issues, and get connected to a human agent when needed. Agents can monitor all incoming conversations, view full chat histories, reply to customers directly, and manage support tickets from a dedicated Agent Panel. Admins have full visibility across the platform — managing users, agents, tickets, analytics, and the knowledge base.",
        tags: ["Next.js 15", "Bun", "PostgreSQL + Drizzle", "Vercel AI SDK + Groq", "Tailwind CSS v4", "Vercel + Neon", "React Native + Expo"],
        category: "Web App",
        liveUrl: "https://ai-support-web-rose.vercel.app/",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "🤖",
        image: "/images/aisupport.jpg",
        gallery: []
    },
    {
        id: "3",
        title: "DentaFlow",
        description:
            "An AI-powered dental clinic management platform with smart scheduling, patient records, automated follow-ups, and an integrated AI assistant for patient care.",
        detailedDescription: "DentaFlow is a full-stack SaaS platform built for modern dental clinics. It features complete clinic management including patient records, appointment scheduling, treatment tracking, and invoicing. The integrated AI assistant helps with patient care recommendations and automated follow-ups. Clinics can onboard with a 14-day free trial and manage everything from a single, beautifully designed dashboard.",
        tags: ["Next.js 15", "Better Auth", "PostgreSQL + Drizzle", "Groq AI", "Tailwind CSS", "Vercel + Neon", "Resend"],
        category: "Web App",
        liveUrl: "https://dental-clinic-rosy-eight.vercel.app/",
        gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
        emoji: "🦷",
        image: "/images/dentalclinic.jpg",
        gallery: []
    },
    {
        id: "4",
        title: "Online Job Portal",
        description:
            "A full-stack job portal connecting job seekers and employers with secure authentication.",
        detailedDescription: "A feature-rich job portal that bridges the gap between talent and opportunity. Employers can post jobs and manage applications, while job seekers can create profiles, upload resumes, and apply with a single click.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Web App",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
        emoji: "💼",
        image: "/images/job_portal.jpg",
        gallery: [
            { type: "image", url: "/images/ol1.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol2.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol3.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol4.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol5.jpg", title: "Dashboard Overview" },
            { type: "image", url: "/images/ol6.jpg", title: "Dashboard Overview" },
        ]
    },
    {
        id: "5",
        title: "Edited Videos Collection",
        description:
            "A showcase of professionally edited videos, including cinematic sequences and event coverage.",
        detailedDescription: "This collection showcases my expertise in video editing and post-production. From cinematic storytelling to high-energy promotional content, each project demonstrates a mastery of pacing, color grading, and sound design.",
        tags: ["CapCut", "Premiere Pro", "Color Grading", "Sound Design"],
        category: "Video Editing",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #f43f5e, #7c3aed)",
        emoji: "🎬",
        image: "/images/video_editing_featured.png",
        gallery: [
            { type: "video", url: "https://res.cloudinary.com/di7fwsdtu/video/upload/reel1_evw8ij.mp4" },
            { type: "video", url: "https://res.cloudinary.com/di7fwsdtu/video/upload/reel2_eyyufb.mp4" },
            { type: "video", url: "https://res.cloudinary.com/di7fwsdtu/video/upload/reel3_ztnzjs.mp4" },
        ]
    },
    {
        id: "6",
        title: "Canva Design Portfolio",
        description:
            "Creative graphic designs ranging from social media branding to professional presentations.",
        detailedDescription: "A diverse portfolio of graphic design work created using Canva. This collection includes brand identity systems, social media marketing kits, event posters, and professional presentation decks.",
        tags: ["Canva", "Graphic Design", "Branding", "UI/UX"],
        category: "Graphics",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
        emoji: "🎨",
        image: "/images/canva_designs_featured.png",
        gallery: [
            { type: "image", url: "/images/1.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/2.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/3.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/4.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/5.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/6.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/7.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/8.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/9.png", title: "Dashboard Overview" },
            { type: "image", url: "/images/10.png", title: "Dashboard Overview" },
        ]
    },
    {
        id: "7",
        title: "Pulse Mobile App",
        description: "A comprehensive mobile dashboard for team collaboration, task management, and document vaulting.",
        detailedDescription: "Pulse is a state-of-the-art mobile application designed for high-performance teams. It features a secure login system, a dynamic dashboard for 7-day activity tracking, an automated alert system, a collaborative task board, and a secure document vault. Built with a focus on user experience and productivity.",
        tags: ["Flutter", "Firebase", "Dart", "UI/UX Design"],
        category: "Mobile",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #00f2fe, #4facfe)",
        emoji: "📱",
        image: "/images/pulse_1.png",
        gallery: [
            { type: "image", url: "/images/pulse_1.png", title: "Login Screen" },
            { type: "image", url: "/images/pulse_2.png", title: "Dashboard" },
            { type: "image", url: "/images/pulse_3.png", title: "Alerts System" },
            { type: "image", url: "/images/pulse_4.png", title: "Task Board" },
            { type: "image", url: "/images/pulse_5.png", title: "Document Vault" },
            { type: "image", url: "/images/pulse_6.png", title: "Insights & Analytics" },
            { type: "image", url: "/images/pulse_7.png", title: "Team Management" },
            { type: "image", url: "/images/pulse_8.png", title: "Activity Home" },
            { type: "image", url: "/images/pulse_9.png", title: "Text Reporting" },
            { type: "image", url: "/images/pulse_10.png", title: "Voice Recording" },
            { type: "image", url: "/images/pulse_11.png", title: "History Filter" },
            { type: "image", url: "/images/pulse_12.png", title: "User Settings" },
        ]
    },
    {
        id: "8",
        title: "Gym Landing Page Funnel",
        description:
            "A 3-step lead generation funnel for a gym client with GoHighLevel CRM, automated email/SMS sequences, and Zoho analytics sync. Achieved a 45% increase in trial sign-ups.",
        detailedDescription: "Designed and built a mobile-responsive gym landing page integrated with a 3-step lead generation funnel using GoHighLevel. Configured automated email and SMS sequences synced with Zoho CRM to nurture leads through the pipeline. Implemented a CRM-integrated prospect workflow: New Lead → Contacted → Booked → Member. Achieved a 45% increase in trial sign-ups and improved lead response time by 70%.",
        tags: ["GoHighLevel", "Zoho CRM", "Email Automation", "SMS Sequences"],
        category: "Web App",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
        emoji: "🏋️",
        image: "",
        gallery: []
    },
    {
        id: "9",
        title: "VROOOM — Delivery & Courier App",
        description:
            "A full-stack Flutter delivery app for food, grocery, pharmacy, and errand orders with real-time tracking, local payments, and admin dispatch.",
        detailedDescription:
            "VROOOM is a real-time courier and pabili-style delivery platform built for the Philippine market. Customers place orders across food, grocery, pharmacy, and shopping categories with pickup and delivery flows, distance-based fees, and payments via Cash on Delivery, GCash, Maya, or card. Riders track earnings and delivery history; admins use a Command Center for live orders, rider management, and dispatch. Features include Google/Facebook sign-in, multi-step order status tracking, and Firebase-backed data sync.",
        tags: ["Flutter", "Firebase", "Firestore", "Riverpod", "Google Maps", "Google Sign-In"],
        category: "Mobile",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #f97316, #ea580c)",
        emoji: "🛵",
        image: "/images/vrooom/vrooom-home.png",
        gallery: [
            { type: "image", url: "/images/vrooom/vrooom-login.png", title: "Login & Register" },
            { type: "image", url: "/images/vrooom/vrooom-auth.png", title: "Sign In" },
            { type: "image", url: "/images/vrooom/vrooom-home.png", title: "Home & Live Tracking" },
            { type: "image", url: "/images/vrooom/vrooom-orders.png", title: "Order History" },
            { type: "image", url: "/images/vrooom/vrooom-new-order.png", title: "New Order Form" },
            { type: "image", url: "/images/vrooom/vrooom-checkout.png", title: "Checkout & Payments" },
            { type: "image", url: "/images/vrooom/vrooom-earnings.png", title: "Rider Earnings" },
            { type: "image", url: "/images/vrooom/vrooom-admin.png", title: "Admin Command Center" },
            { type: "image", url: "/images/vrooom/vrooom-riders.png", title: "Rider Management" },
        ],
    },
    {
        id: "10",
        title: "SRS — Student Record System",
        description:
            "A dark-themed web CRUD app for managing student records with search, course stats, and full add/view/edit/delete workflows.",
        detailedDescription:
            "SRS (Student Record System) is a personal academic project for organizing student data in one place. The dashboard shows enrollment stats by course, a searchable student table with view/edit/delete actions, and dedicated flows to add students, search by ID or name, and view or update individual records. Built with a modern dark UI, form validation, and clear navigation across Records, Add Student, and Search modules.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CRUD"],
        category: "Personal",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
        emoji: "🎓",
        image: "/images/srs/srs-dashboard.png",
        gallery: [
            { type: "image", url: "/images/srs/srs-dashboard.png", title: "Student Records Dashboard" },
            { type: "image", url: "/images/srs/srs-add.png", title: "Add New Student" },
            { type: "image", url: "/images/srs/srs-search.png", title: "Search Students" },
            { type: "image", url: "/images/srs/srs-view.png", title: "Student Details" },
            { type: "image", url: "/images/srs/srs-edit.png", title: "Edit Student Record" },
        ],
    },
    {
        id: "11",
        title: "KitchenApp — Recipes & Meal Planner",
        description:
            "A C# mobile app for recipes, weekly meal planning, and smart shopping lists with quantity tracking and list generation from recipes.",
        detailedDescription:
            "KitchenApp helps users plan meals and shop efficiently on Android. Browse and manage recipes, build meal plans across the week, and maintain shopping lists with item quantities and units. Lists can be generated from recipes, checked off as you shop, and organized with multiple named lists. Built with a clean orange-and-navy UI and bottom navigation across Recipes, Meal Plan, and Shopping modules.",
        tags: ["C#", ".NET", "Mobile App", "Android", "UI/UX"],
        category: "Mobile",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #f97316, #1e3a5f)",
        emoji: "🍳",
        image: "/images/kitchenapp/kitchen-shopping.png",
        gallery: [
            { type: "image", url: "/images/kitchenapp/kitchen-recipes.png", title: "Recipes" },
            { type: "image", url: "/images/kitchenapp/kitchen-mealplan.png", title: "Meal Plan" },
            { type: "image", url: "/images/kitchenapp/kitchen-shopping.png", title: "Shopping List" },
            { type: "image", url: "/images/kitchenapp/kitchen-shopping-alt.png", title: "List Management" },
        ],
    },
    {
        id: "12",
        title: "Linggo — Filipino Language Translator",
        description:
            "A C++ desktop translator for Bisaya, Tagalog, and English with translate and dictionary modes and quick language shortcuts.",
        detailedDescription:
            "Linggo is a Filipino language translator built as a Windows desktop app. Switch between Bisaya, Tagalog, and English with color-coded language chips, swap source and target languages, and translate text in real time. Includes a Dictionary tab, Clear and Copy actions, and shortcut buttons for Cebuano, Filipino, and English. Dark-themed UI designed for fast everyday translation workflows.",
        tags: ["C++", "Desktop App", "Win32", "GUI", "Localization"],
        category: "Personal",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #eab308, #ca8a04)",
        emoji: "🗣️",
        image: "/images/linggo/linggo-translate.png",
        gallery: [
            { type: "image", url: "/images/linggo/linggo-translate.png", title: "Translate — Bisaya to English" },
        ],
    },
    {
        id: "13",
        title: "Scientific Calculator",
        description:
            "A C++ scientific calculator with tabbed modes for basic math, algebra, trigonometry, statistics, complex numbers, and more.",
        detailedDescription:
            "A feature-rich scientific calculator desktop application with a dark UI and DEG/RAD toggle. Organized into tabs—Basic, Algebra, Trig, Log/Exp, Stat, Complex, Const, and Solver—supporting powers, roots, modulo, memory slots, and advanced operations. Built for students and engineers who need more than a standard calculator in a polished Windows interface.",
        tags: ["C++", "Desktop App", "Math", "GUI", "Algorithms"],
        category: "Personal",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        emoji: "🔢",
        image: "/images/scientific-calc/scientific-calc.png",
        gallery: [
            { type: "image", url: "/images/scientific-calc/scientific-calc.png", title: "Basic & Scientific Modes" },
        ],
    },
    {
        id: "14",
        title: "SmartBiz Pro — Business Command Center",
        description:
            "An all-in-one C++ business suite with CRM, inventory, invoicing, POS quick sale, payroll, expenses, reports, and health scoring.",
        detailedDescription:
            "SmartBiz Pro is a desktop business management system for small businesses in the Philippines. Modules include a revenue dashboard, CRM with customer spend tracking, inventory with low-stock alerts, invoice and billing with paid/unpaid status, walk-in quick sale with auto stock deduction, expense logging, employee payroll, financial reports with margin analysis, a proprietary Business Health Score (BHS), and settings with file-based data persistence. Uses Philippine Peso (₱) throughout.",
        tags: ["C++", "Desktop App", "CRM", "Inventory", "POS", "File I/O"],
        category: "Personal",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        emoji: "📊",
        image: "/images/smartbiz/smartbiz-dashboard.png",
        gallery: [
            { type: "image", url: "/images/smartbiz/smartbiz-dashboard.png", title: "Dashboard" },
            { type: "image", url: "/images/smartbiz/smartbiz-crm.png", title: "CRM Customers" },
            { type: "image", url: "/images/smartbiz/smartbiz-inventory.png", title: "Inventory Management" },
            { type: "image", url: "/images/smartbiz/smartbiz-invoice.png", title: "Invoice & Billing" },
            { type: "image", url: "/images/smartbiz/smartbiz-quicksale.png", title: "Quick Sale (POS)" },
            { type: "image", url: "/images/smartbiz/smartbiz-expenses.png", title: "Expense Tracker" },
            { type: "image", url: "/images/smartbiz/smartbiz-payroll.png", title: "Payroll" },
            { type: "image", url: "/images/smartbiz/smartbiz-reports.png", title: "Financial Reports" },
            { type: "image", url: "/images/smartbiz/smartbiz-health.png", title: "Business Health Score" },
            { type: "image", url: "/images/smartbiz/smartbiz-settings.png", title: "Settings & Data Files" },
        ],
    },
    {
        id: "15",
        title: "Student Registration System",
        description:
            "A C++/CLR desktop enrollment form with cyberpunk-themed UI for student name, subjects, and country selection.",
        detailedDescription:
            "Academic Enrollment Module built with C++ and the CLR/.NET Framework. Captures first and last name, sex, multi-select subjects (Programming 2, Intro to Computing, or custom), and country via dropdown. Features a terminal-inspired dark UI with neon accents, system-ready status messaging, and Submit, Clear, and Exit actions—demonstrating Windows Forms GUI development and structured user input handling.",
        tags: ["C++", "CLR", ".NET Framework", "WinForms", "Desktop App"],
        category: "Personal",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #22d3ee, #0891b2)",
        emoji: "📝",
        image: "/images/student-reg/student-reg.png",
        gallery: [
            { type: "image", url: "/images/student-reg/student-reg.png", title: "Enrollment Form" },
        ],
    },
    {
        id: "16",
        title: "Unit Converter",
        description:
            "A C++ desktop unit converter supporting 13 categories with bidirectional conversion and swap controls.",
        detailedDescription:
            "Unit Converter is a Windows desktop utility for converting values across 13 unit categories including length, mass, temperature, and more. Select category and from/to units via dropdowns, enter a value, and view results instantly. Includes a swap button to reverse units and a clear action to reset the form. Clean blue-and-white UI built for quick everyday conversions.",
        tags: ["C++", "Desktop App", "GUI", "Algorithms"],
        category: "Personal",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #2563eb, #1e40af)",
        emoji: "📐",
        image: "/images/unit-converter/unit-converter.png",
        gallery: [
            { type: "image", url: "/images/unit-converter/unit-converter.png", title: "Length Conversion" },
        ],
    },
    {
        id: "17",
        title: "I.S.R.M — Information Security & Risk Management",
        description:
            "A full-stack cybersecurity platform (SecureMatrix) for risk registers, asset inventory, vulnerabilities, incidents, compliance, and SOC monitoring.",
        detailedDescription:
            "I.S.R.M (SecureMatrix) is an enterprise-style information security and risk management web application built with HTML, CSS, JavaScript, PHP, and MySQL. It includes authenticated access, a CISO dashboard, risk heat maps and registers, asset inventory with criticality scoring, CVE vulnerability tracking, incident response timelines, compliance frameworks (ISO 27001, NIST, SOC 2, GDPR, PCI DSS), security controls library, policy management, threat intelligence and IOC tracking, SOC/SIEM event monitoring, analytics reports, system health insights, user and identity access management, and configurable system settings with integrations.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Cybersecurity"],
        category: "Web App",
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #06b6d4, #0e7490)",
        emoji: "🛡️",
        image: "/images/isrm/isrm-dashboard.png",
        gallery: [
            { type: "image", url: "/images/isrm/isrm-login.png", title: "SecureMatrix Login" },
            { type: "image", url: "/images/isrm/isrm-dashboard.png", title: "Security Dashboard" },
            { type: "image", url: "/images/isrm/isrm-risk-register.png", title: "Risk Register & Heat Map" },
            { type: "image", url: "/images/isrm/isrm-assets.png", title: "Asset Inventory" },
            { type: "image", url: "/images/isrm/isrm-vulnerabilities.png", title: "Vulnerability Management" },
            { type: "image", url: "/images/isrm/isrm-incidents.png", title: "Incident Response" },
            { type: "image", url: "/images/isrm/isrm-compliance.png", title: "Compliance Management" },
            { type: "image", url: "/images/isrm/isrm-controls.png", title: "Security Controls" },
            { type: "image", url: "/images/isrm/isrm-policies.png", title: "Policies & Procedures" },
            { type: "image", url: "/images/isrm/isrm-threat-intel.png", title: "Threat Intelligence" },
            { type: "image", url: "/images/isrm/isrm-soc.png", title: "SOC / SIEM Console" },
            { type: "image", url: "/images/isrm/isrm-reports.png", title: "Reports & Analytics" },
            { type: "image", url: "/images/isrm/isrm-insights.png", title: "System Insights" },
            { type: "image", url: "/images/isrm/isrm-users.png", title: "Users & Access Control" },
            { type: "image", url: "/images/isrm/isrm-identity.png", title: "Identity & Access Management" },
            { type: "image", url: "/images/isrm/isrm-settings.png", title: "System Settings" },
        ],
    },
];

export default function Projects() {
    const [active, setActive] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [zoomedVideo, setZoomedVideo] = useState<string | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
        setZoomedImage(null);
        setZoomedVideo(null);
    }, []);

    const scrollToContact = () => {
        handleCloseModal();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (zoomedImage) {
                    setZoomedImage(null);
                } else if (zoomedVideo) {
                    setZoomedVideo(null);
                } else {
                    handleCloseModal();
                }
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [handleCloseModal, zoomedImage, zoomedVideo]);

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <SectionHeading
                    title="Featured Projects"
                    description="A curated selection of projects that showcase my skills in building full-stack, scalable applications and creative media."
                />

                <div className={styles.tabs}>
                    {categories.map((c) => (
                        <button
                            key={c}
                            className={`${styles.tab} ${active === c ? styles.tabActive : ""}`}
                            onClick={() => setActive(c)}
                        >
                            {c}
                            {active === c && (
                                <motion.div
                                    layoutId="projectTab"
                                    className={styles.tabBg}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div className={styles.grid} layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={`${styles.card} glass`}
                                onClick={() => setSelectedProject(p)}
                            >
                                <div
                                    className={styles.cardTop}
                                    style={{ background: p.gradient }}
                                >
                                    {p.image ? (
                                        <img src={p.image} alt={p.title} className={styles.cardImage} />
                                    ) : (
                                        <span className={styles.cardEmoji}>{p.emoji}</span>
                                    )}
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{p.title}</h3>
                                    <p className={styles.cardDesc}>{p.description}</p>
                                    <div className={styles.cardTags}>
                                        {p.tags.slice(0, 3).map((t) => (
                                            <span key={t} className={styles.cardTag}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.cardLinks}>
                                        <span className={styles.cardLink}>
                                            Explore Collection →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Main Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={handleCloseModal} aria-label="Close modal">
                                ✕
                            </button>

                            <div className={styles.modalHero} style={{ background: selectedProject.gradient }}>
                                {selectedProject.image ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className={styles.modalImage} />
                                ) : (
                                    <span className={styles.modalEmoji}>{selectedProject.emoji}</span>
                                )}
                            </div>

                            <div className={styles.modalBody}>
                                <div className={styles.modalHeader}>
                                    <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                                    <div className={styles.modalTags}>
                                        {selectedProject.tags.map((t) => (
                                            <span key={t} className={styles.cardTag}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className={styles.modalDescription}>
                                    {selectedProject.detailedDescription || selectedProject.description}
                                </p>

                                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                                    <div className={styles.gallerySection} ref={galleryRef}>
                                        <h4 className={styles.galleryTitle}>
                                            <span>📷</span> Project Gallery
                                        </h4>
                                        <div className={styles.galleryGrid}>
                                            {selectedProject.gallery.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={styles.galleryItem}
                                                    onClick={(e) => {
                                                        if (item.type === "image") {
                                                            e.stopPropagation();
                                                            setZoomedImage(item.url);
                                                        }
                                                    }}
                                                >
                                                    {item.type === "video" ? (
                                                        <video
                                                            src={item.url}
                                                            className={styles.galleryVideo}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            disablePictureInPicture
                                                            controlsList="nodownload nofullscreen noremoteplayback"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={item.url}
                                                            alt={`Gallery item ${idx + 1}`}
                                                            className={styles.galleryImg}
                                                            onError={(e) => {
                                                                const parent = (e.target as HTMLImageElement).closest(`.${styles.galleryItem}`) as HTMLElement;
                                                                if (parent) parent.style.display = "none";
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className={styles.modalActions}>
                                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? (
                                        <a
                                            href={selectedProject.liveUrl}
                                            className={`${styles.modalButton} ${styles.primaryButton}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo ↗
                                        </a>
                                    ) : (
                                        <button
                                            onClick={scrollToContact}
                                            className={`${styles.modalButton} ${styles.primaryButton}`}
                                        >
                                            <span>💬</span> Contact Developer
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomedImage(null)}
                    >
                        <button className={styles.lightboxClose} onClick={() => setZoomedImage(null)}>
                            ✕
                        </button>
                        <motion.img
                            src={zoomedImage}
                            alt="Zoomed content"
                            className={styles.lightboxImage}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Lightbox */}
            <AnimatePresence>
                {zoomedVideo && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomedVideo(null)}
                    >
                        <button className={styles.lightboxClose} onClick={() => setZoomedVideo(null)}>
                            ✕
                        </button>
                        <motion.video
                            src={zoomedVideo}
                            className={styles.lightboxImage}
                            controls
                            autoPlay
                            playsInline
                            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}