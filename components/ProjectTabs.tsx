"use client";
import { useState, useEffect } from "react";

type GalleryItem = { type: "image" | "video"; url: string; title?: string };

type Project = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  category: string;
  liveUrl: string;
  gradient: string;
  emoji: string;
  image: string;
  gallery: GalleryItem[];
};

const allProjects: Project[] = [
  {
    id: "1",
    title: "Laundry Management System",
    description: "A multi-branch business tracking system with real-time tracking and scheduling module.",
    detailedDescription: "Designed for multi-branch laundry businesses. Features real-time tracking so customers can monitor laundry status, while owners manage scheduling, inventory, and multiple branches from a single dashboard.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    category: "Web App",
    liveUrl: "#",
    gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    emoji: "🧺",
    image: "/images/laundry_system.jpg",
    gallery: [
      { type: "image", url: "/images/laundry-dashboard.jpg", title: "Dashboard Overview" },
      { type: "image", url: "/images/laundry2.jpg" },
      { type: "image", url: "/images/laundry3.jpg" },
      { type: "image", url: "/images/laundry4.jpg" },
      { type: "image", url: "/images/laundry6.jpg" },
      { type: "image", url: "/images/laundry7.jpg" },
      { type: "image", url: "/images/laundry8.jpg" },
      { type: "image", url: "/images/laundry9.jpg" },
      { type: "image", url: "/images/laundry10.jpg" },
      { type: "image", url: "/images/laundry11.jpg" },
      { type: "image", url: "/images/laundry12.jpg" },
      { type: "image", url: "/images/laundry13.jpg" },
      { type: "image", url: "/images/laundry14.jpg" },
      { type: "image", url: "/images/laundry15.jpg" },
      { type: "image", url: "/images/laundry16.jpg" },
      { type: "image", url: "/images/laundry17.jpg" },
      { type: "image", url: "/images/laundry18.jpg" },
      { type: "image", url: "/images/laundry19.jpg" },
      { type: "image", url: "/images/laundry20.jpg" },
      { type: "image", url: "/images/laundry21.jpg" },
      { type: "image", url: "/images/laundry22.jpg" },
      { type: "image", url: "/images/laundry23.jpg" },
      { type: "image", url: "/images/laundry24.jpg" },
      { type: "image", url: "/images/laundry26.jpg" },
      { type: "image", url: "/images/laundry27.jpg" },
    ],
  },
  {
    id: "2",
    title: "SupportAI",
    description: "AI-powered first-line support with seamless live agent escalation — all within the same interface.",
    detailedDescription: "Customers chat with an AI assistant, submit support tickets, track their issues, and get connected to a human agent when needed. Agents monitor all incoming conversations, view full chat histories, and manage tickets from a dedicated Agent Panel. Admins have full visibility — managing users, agents, tickets, analytics, and the knowledge base.",
    tags: ["Next.js 15", "Bun", "PostgreSQL + Drizzle", "Vercel AI SDK + Groq", "Tailwind CSS v4"],
    category: "Web App",
    liveUrl: "https://ai-support-web-rose.vercel.app/",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    emoji: "🤖",
    image: "/images/aisupport.jpg",
    gallery: [],
  },
  {
    id: "3",
    title: "DentaFlow",
    description: "AI-powered dental clinic management with smart scheduling, patient records, and automated follow-ups.",
    detailedDescription: "Full-stack SaaS platform built for modern dental clinics. Features complete clinic management including patient records, appointment scheduling, treatment tracking, and invoicing. The integrated AI assistant helps with patient care recommendations and automated follow-ups. Clinics can onboard with a 14-day free trial.",
    tags: ["Next.js 15", "Better Auth", "PostgreSQL + Drizzle", "Groq AI", "Tailwind CSS", "Resend"],
    category: "Web App",
    liveUrl: "https://dental-clinic-rosy-eight.vercel.app/",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    emoji: "🦷",
    image: "/images/dentalclinic.jpg",
    gallery: [],
  },
  {
    id: "4",
    title: "Online Job Portal",
    description: "Full-stack job portal connecting job seekers and employers with secure authentication.",
    detailedDescription: "A feature-rich job portal bridging the gap between talent and opportunity. Employers post jobs and manage applications, while job seekers create profiles, upload resumes, and apply with a single click.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    category: "Web App",
    liveUrl: "#",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    emoji: "💼",
    image: "/images/job_portal.jpg",
    gallery: [
      { type: "image", url: "/images/ol1.jpg" },
      { type: "image", url: "/images/ol2.jpg" },
      { type: "image", url: "/images/ol3.jpg" },
      { type: "image", url: "/images/ol4.jpg" },
      { type: "image", url: "/images/ol5.jpg" },
      { type: "image", url: "/images/ol6.jpg" },
    ],
  },
  {
    id: "8",
    title: "Gym Landing Page Funnel",
    description: "3-step lead generation funnel with GoHighLevel CRM and email/SMS automation. 45% increase in trial sign-ups.",
    detailedDescription: "Mobile-responsive gym landing page integrated with a 3-step lead generation funnel using GoHighLevel. Configured automated email and SMS sequences synced with Zoho CRM to nurture leads. Implemented a CRM-integrated prospect workflow: New Lead → Contacted → Booked → Member. Achieved a 45% increase in trial sign-ups and improved lead response time by 70%.",
    tags: ["GoHighLevel", "Zoho CRM", "Email Automation", "SMS Sequences"],
    category: "Web App",
    liveUrl: "#",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    emoji: "🏋️",
    image: "",
    gallery: [],
  },
  {
    id: "10",
    title: "SRS — Student Record System",
    description: "Dark-themed CRUD app for managing student records with search, course stats, and full workflows.",
    detailedDescription: "Dashboard shows enrollment stats by course, a searchable student table with view/edit/delete actions, and dedicated flows to add students, search by ID or name, and view or update individual records. Built with a modern dark UI and form validation.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CRUD"],
    category: "Web App",
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
    id: "12",
    title: "Linggo — Filipino Language Translator",
    description: "C++ desktop translator for Bisaya, Tagalog, and English with translate and dictionary modes.",
    detailedDescription: "Switch between Bisaya, Tagalog, and English with color-coded language chips, swap source and target languages, and translate text in real time. Includes a Dictionary tab, Clear and Copy actions, and shortcut buttons. Dark-themed UI designed for fast everyday translation workflows.",
    tags: ["C++", "Desktop App", "Win32", "GUI", "Localization"],
    category: "Academic",
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
    description: "C++ scientific calculator with tabbed modes for algebra, trigonometry, statistics, complex numbers, and more.",
    detailedDescription: "Feature-rich scientific calculator desktop application with DEG/RAD toggle. Organized into tabs — Basic, Algebra, Trig, Log/Exp, Stat, Complex, Const, and Solver — supporting powers, roots, modulo, memory slots, and advanced operations.",
    tags: ["C++", "Desktop App", "Math", "GUI", "Algorithms"],
    category: "Academic",
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
    description: "All-in-one C++ business suite with CRM, inventory, invoicing, POS, payroll, and health scoring.",
    detailedDescription: "Desktop business management system for small businesses. Modules include a revenue dashboard, CRM with customer spend tracking, inventory with low-stock alerts, invoice and billing, walk-in quick sale with auto stock deduction, expense logging, employee payroll, financial reports, a proprietary Business Health Score (BHS), and file-based data persistence. Uses Philippine Peso (₱).",
    tags: ["C++", "Desktop App", "CRM", "Inventory", "POS", "File I/O"],
    category: "Academic",
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
    ],
  },
  {
    id: "15",
    title: "Student Registration System",
    description: "C++/CLR desktop enrollment form with cyberpunk-themed UI for student data and subject selection.",
    detailedDescription: "Academic Enrollment Module built with C++ and the CLR/.NET Framework. Captures first and last name, sex, multi-select subjects, and country via dropdown. Features a terminal-inspired dark UI with neon accents and system-ready status messaging.",
    tags: ["C++", "CLR", ".NET Framework", "WinForms", "Desktop App"],
    category: "Academic",
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
    description: "C++ desktop unit converter supporting 13 categories with bidirectional conversion and swap controls.",
    detailedDescription: "Windows desktop utility for converting values across 13 unit categories including length, mass, temperature, and more. Select category and from/to units via dropdowns, enter a value, and view results instantly. Clean blue-and-white UI.",
    tags: ["C++", "Desktop App", "GUI", "Algorithms"],
    category: "Academic",
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
    description: "Full-stack cybersecurity platform for risk registers, asset inventory, vulnerabilities, incidents, and SOC monitoring.",
    detailedDescription: "Enterprise-style information security and risk management web app. Includes authenticated access, CISO dashboard, risk heat maps, asset inventory with criticality scoring, CVE vulnerability tracking, incident response timelines, compliance frameworks (ISO 27001, NIST, SOC 2, GDPR, PCI DSS), security controls, threat intelligence, SOC/SIEM event monitoring, and user/identity access management.",
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
      { type: "image", url: "/images/isrm/isrm-users.png", title: "Users & Access Control" },
    ],
  },
  {
    id: "7",
    title: "Pulse Mobile App",
    description: "Comprehensive mobile dashboard for team collaboration, task management, and document vaulting.",
    detailedDescription: "State-of-the-art mobile application for high-performance teams. Features a secure login system, dynamic dashboard for 7-day activity tracking, automated alert system, collaborative task board, and secure document vault.",
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
      { type: "image", url: "/images/pulse_9.png", title: "Voice Recording" },
      { type: "image", url: "/images/pulse_10.png", title: "History Filter" },
      { type: "image", url: "/images/pulse_11.png", title: "User Settings" },
      { type: "image", url: "/images/pulse_12.png", title: "Text Reporting" },
    ],
  },
  {
    id: "9",
    title: "VROOOM — Delivery & Courier App",
    description: "Full-stack Flutter delivery app for food, grocery, pharmacy, and errand orders with real-time tracking.",
    detailedDescription: "Real-time courier and pabili-style delivery platform for the Philippine market. Customers place orders across food, grocery, pharmacy, and shopping categories with pickup and delivery flows, distance-based fees, and payments via COD, GCash, Maya, or card. Riders track earnings and delivery history; admins use a Command Center for live orders, rider management, and dispatch.",
    tags: ["Flutter", "Firebase", "Firestore", "Riverpod", "Google Maps"],
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
    id: "11",
    title: "KitchenApp — Recipes & Meal Planner",
    description: "C# mobile app for recipes, weekly meal planning, and smart shopping lists with quantity tracking.",
    detailedDescription: "Helps users plan meals and shop efficiently on Android. Browse and manage recipes, build meal plans across the week, and maintain shopping lists with item quantities and units. Lists can be generated from recipes, checked off as you shop, and organized with multiple named lists.",
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
    id: "5",
    title: "Edited Videos Collection",
    description: "A showcase of professionally edited videos including cinematic sequences and event coverage.",
    detailedDescription: "Showcases expertise in video editing and post-production. From cinematic storytelling to high-energy promotional content, each project demonstrates mastery of pacing, color grading, and sound design.",
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
    ],
  },
  {
    id: "6",
    title: "Canva Design Portfolio",
    description: "Creative graphic designs ranging from social media branding to professional presentations.",
    detailedDescription: "Diverse portfolio of graphic design work. Includes brand identity systems, social media marketing kits, event posters, and professional presentation decks.",
    tags: ["Canva", "Graphic Design", "Branding", "UI/UX"],
    category: "Graphics",
    liveUrl: "#",
    gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
    emoji: "🎨",
    image: "/images/canva_designs_featured.png",
    gallery: [
      { type: "image", url: "/images/1.png" },
      { type: "image", url: "/images/2.png" },
      { type: "image", url: "/images/3.png" },
      { type: "image", url: "/images/4.png" },
      { type: "image", url: "/images/5.png" },
      { type: "image", url: "/images/6.png" },
      { type: "image", url: "/images/7.png" },
      { type: "image", url: "/images/8.png" },
      { type: "image", url: "/images/9.png" },
      { type: "image", url: "/images/10.png" },
    ],
  },
];

const CATEGORIES = ["Web App", "Mobile", "Academic", "Video Editing", "Graphics"];

export default function ProjectTabs() {
  const [active, setActive] = useState("Web App");
  const [selected, setSelected] = useState<Project | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomedImage) setZoomedImage(null);
        else setSelected(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomedImage]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const filtered = allProjects.filter((p) => p.category === active);

  return (
    <>
      {/* Tab bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {CATEGORIES.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              border: active === tab ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: active === tab ? "var(--accent)" : "transparent",
              color: active === tab ? "#fff" : "var(--text-muted)",
              transition: "all 0.15s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 16 }}>
        {filtered.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            style={{
              borderRadius: 10,
              border: "1px solid var(--border)",
              background: "var(--bg-secondary)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div style={{ width: "100%", aspectRatio: "16/9", background: p.image ? "var(--border)" : p.gradient, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <span>{p.emoji}</span>
              )}
            </div>
            <div style={{ padding: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 3 }}>{p.title}</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8, lineHeight: 1.5 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag-small">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 16, overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              width: "100%", maxWidth: 680,
              maxHeight: "90vh", overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute", top: 12, right: 12, zIndex: 10,
                width: 32, height: 32, borderRadius: "50%",
                border: "1px solid var(--border)", background: "var(--bg)",
                cursor: "pointer", fontSize: 14, color: "var(--text)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ✕
            </button>

            {/* Hero */}
            <div style={{ height: 200, background: selected.gradient, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "16px 16px 0 0", overflow: "hidden" }}>
              {selected.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={selected.image} alt={selected.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <span style={{ fontSize: 56 }}>{selected.emoji}</span>
              )}
            </div>

            {/* Body */}
            <div style={{ padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{selected.title}</h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {selected.tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>

              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 20 }}>
                {selected.detailedDescription}
              </p>

              {/* Gallery */}
              {selected.gallery.length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>📷 Project Gallery</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8 }}>
                    {selected.gallery.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => item.type === "image" && setZoomedImage(item.url)}
                        style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "16/9", background: "var(--border)", cursor: item.type === "image" ? "zoom-in" : "default" }}
                      >
                        {item.type === "video" ? (
                          <video src={item.url} style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay loop muted playsInline />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={item.url} alt={item.title || `Gallery ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              {selected.liveUrl && selected.liveUrl !== "#" && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "10px 20px", borderRadius: 8,
                    background: "var(--text)", color: "var(--bg)",
                    fontSize: 13, fontWeight: 600, textDecoration: "none",
                  }}
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
          }}
        >
          <button
            onClick={() => setZoomedImage(null)}
            style={{
              position: "absolute", top: 16, right: 16,
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)",
              cursor: "pointer", fontSize: 16, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zoomedImage}
            alt="Zoomed"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 8, objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
