import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";
import ChatWidget from "@/components/ChatWidget";
import DevCard from "@/components/DevCard";
import ProjectTabs from "@/components/ProjectTabs";
import AppsIUse from "@/components/AppsIUse";
import StarBackground from "@/components/StarBackground";
import LocalTimeCard from "@/components/LocalTimeCard";
import HoverAvatar from "@/components/HoverAvatar";
import CertificationsSection from "@/components/CertificationsSection";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", position: "relative" }}>
      <StarBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="page-container">

          {/* ════ HERO ════ */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start", marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>

            {/* Avatar */}
            <HoverAvatar />

            {/* Info */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)" }}>
                    Angelou Vincent T. Ocampo
                  </h1>
                  {/* Clean filled-circle verified badge — same as Twitter blue check */}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-label="Verified" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="10" cy="10" r="10" fill="#1d9bf0" />
                    <path d="M6 10.5l2.5 2.5 5.5-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <ThemeToggle />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Lakewood, Zamboanga del Sur, Philippines
              </div>

              <p style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 16 }}>
                Full-Stack, AI & GHL Developer
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <a href="https://calendly.com/angeloocampo61/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book a Call
                </a>
                <a href="mailto:angeloocampo61@gmail.com" className="btn-secondary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* ════ TWO-COLUMN ════ */}
          <div className="two-col-layout">

            {/* ── LEFT ── */}
            <div className="main-col">

              {/* ABOUT */}
              <section id="about" className="section-card" style={{ marginBottom: 32 }}>
                <h2 className="section-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>About</h2>
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12, fontSize: 13, lineHeight: 1.75, color: "var(--text-2)" }}>
                  <p style={{ color: "var(--text)" }}>
                    I&apos;m a full-stack developer, AI integrator, and GoHighLevel specialist based in the
                    Philippines, with a background in Information Technology and hands-on experience across
                    web development, mobile apps, and digital marketing systems.
                  </p>
                  <p>
                    I work mostly with JavaScript, TypeScript, Python, and PHP, and I&apos;m comfortable
                    across the whole stack — from the server logic to the interface someone actually uses.
                    Beyond the code, I also work inside GoHighLevel — building funnels, automating workflows,
                    setting up CRM pipelines, and wiring it all together with email and SMS sequences for
                    real business results.
                  </p>
                  <p>
                    Over the past couple of years I&apos;ve worked with remote teams and clients in different
                    countries and time zones, which taught me to communicate clearly, stay dependable, and
                    deliver without needing to be chased. Lately I&apos;ve been especially drawn to AI and how
                    it&apos;s changing the way software gets built — I pick up new tools quickly and adapt to
                    whatever a project calls for. More than anything, I just like building things that are
                    genuinely useful to the people who use them.
                  </p>
                </div>

              </section>

              <div className="divider" />

              {/* TECH STACK */}
              <section id="tech-stack" className="section-card" style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h2 className="section-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>Tech Stack</h2>
                  <Link href="/tech-stack" className="view-all-link">
                    View All
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {Object.entries(techStack).map(([cat, { items }]) => (
                    <div key={cat}>
                      <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>{cat}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {items.map(t => <span key={t} className="skill-tag">{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="divider" />

              {/* PROJECTS */}
              <div className="section-card" style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h2 className="section-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>Projects</h2>
                  <Link href="/projects" className="view-all-link">
                    View All
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
                <ProjectTabs />
              </div>

              <div className="divider" />

              {/* APPS I USE */}
              <div className="section-card" style={{ marginBottom: 32 }}>
                <AppsIUse />
              </div>

              <div className="divider" />

              {/* BEYOND CODING */}
              <div className="section-card" style={{ marginBottom: 32 }}>
                <h2 className="section-title" style={{ marginBottom: 4 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>Beyond Coding</h2>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>More than just a developer</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                  {[
                    { title: "Video Editing", desc: "CapCut, Premiere Pro, After Effects, DaVinci Resolve — reels, events, cinematic content" },
                    { title: "Graphic Design", desc: "Canva & Adobe Express — branding kits, social media graphics, presentations" },
                    { title: "Admin Support", desc: "Data encoding, calendar management, documentation, and workflow automation" },
                    { title: "Always Exploring", desc: "Love learning new tech and tools — currently diving deeper into AI integrations and automation" },
                    { title: "Willing to Learn", desc: "Adaptable and fast learner, open to any stack, tool, or workflow needed for the job" },
                  ].map(item => (
                    <div key={item.title} style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 6 }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{item.title}</p>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider" />

              {/* CERTS + RECS */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 32 }}>
                <section id="certifications" className="section-card" style={{ flex: 1, minWidth: 220 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h2 className="section-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>Certifications</h2>
                    <Link href="/certifications" className="view-all-link">
                      View All
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </div>
                  <CertificationsSection />
                </section>

                <section id="recommendations" className="section-card" style={{ flex: 1, minWidth: 220 }}>
                  <h2 className="section-title" style={{ marginBottom: 12 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>Recommendations</h2>
                  <RecommendationsCarousel recommendations={recommendations} />
                </section>
              </div>

              <div className="divider" />

              {/* FOOTER INFO */}
              <div className="section-card" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
                <div>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Social Links</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { label: "Facebook", href: "https://www.facebook.com/angelou.ocampo.12", icon: <FacebookIcon /> },
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/angelou-vincent-t-ocampo-753175189/", icon: <LinkedinIcon /> },
                      { label: "Instagram", href: "https://www.instagram.com/_lou.ao?igsh=dTY2Y2o2b3BsODZv", icon: <InstagramIcon /> },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                        {s.icon}{s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    {
                      label: "Email", value: "angeloocampo61@gmail.com", href: "mailto:angeloocampo61@gmail.com",
                      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    },
                    {
                      label: "Location", value: "Zamboanga del Sur", href: "#",
                      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    },
                  ].map(item => (
                    <a key={item.label} href={item.href} className="contact-link">
                      <span className="contact-label" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }}>{item.icon}{item.label}</span>
                      <span className="contact-value" style={{ fontSize: 12, color: "var(--text)", fontWeight: 500, wordBreak: "break-all" }}>{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="sidebar-col">
              <LocalTimeCard />

              <DevCard />

              <section id="experience" className="section-card">
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>Experience</h2>
                <div style={{ position: "relative" }}>
                  {/* Vertical timeline line */}
                  <div style={{ position: "absolute", left: 4, top: 14, bottom: 14, width: 1.5, background: "var(--border-2)" }} />
                  {experience.map((item, i) => (
                    <div key={i} className="exp-item">
                      <div style={{ marginTop: 6, width: 10, height: 10, borderRadius: "50%", border: (i === 0 || i === 3) ? "1.5px solid var(--text)" : "1.5px solid var(--text-faint)", background: (i === 0 || i === 3) ? "var(--text)" : "var(--bg)", flexShrink: 0, zIndex: 1 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>{item.role}</p>
                        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{item.company}</p>
                      </div>
                      <span className="exp-year">{item.year}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>

          <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Angelou Vincent T. Ocampo. All rights reserved.
            </p>
          </div>

        </div>
      </div>
      <ChatWidget />
    </div>
  );
}

function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
}
function LinkedinIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
}
function InstagramIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}


const techStack: Record<string, { items: string[] }> = {
  "Frontend": { items: ["HTML", "CSS", "React / Next.js 15", "TypeScript", "Tailwind CSS v4", "React Native + Expo", "Flutter", "UI/UX Design", "Framer Motion", "Vite", "Vue", "Astro"] },
  "3D & Animations": { items: ["Three.js", "GSAP"] },
  "Backend": { items: ["Node.js", "Express.js", "Next.js API Routes", "Python", "Laravel (PHP)", "Delphi (Pascal)", "C++", "C#", "Java", "REST / GraphQL", "Zod (Validation)", "Better Auth"] },
  "Database & ORM": { items: ["PostgreSQL + Drizzle ORM", "MySQL", "Neon (Serverless PG)", "Supabase / Convex", "Firebase"] },
  "AI & Cloud": { items: ["Vercel AI SDK", "OpenAI / Groq (Llama)", "Vercel + Neon + Expo EAS", "AWS", "Docker / CI/CD"] },
  "Tools & Package Managers": { items: ["Bun", "Git / GitHub", "Turborepo (Monorepo)", "Figma", "WordPress / Elementor", "GoHighLevel (GHL)", "Zoho", "Meta Ads Manager", "Google Data Studio"] },
  "Administrative & Digital": { items: ["Funnel Building (Lead Gen)", "Task & Calendar Management", "Automation & Documentation", "Administrative Support", "Video Editing", "Canva / Adobe Express", "Data Encoding", "CapCut"] },
  "Productivity": { items: ["Notion", "Trello", "ClickUp", "Airtable", "Asana", "Slack", "Teams", "Loom", "DocuSign"] },
};


const experience = [
  { role: "Programmer Assistant (Contract)", company: "SKOApp — Australian/French Client", year: "2026 — Present" },
  { role: "Full Stack Developer (Contract)", company: "Maple Technology Developers, Davao (Remote)", year: "2026" },
  { role: "Junior Backend Engineer (Contract)", company: "DI Strategy Group, Taiwan (Remote)", year: "2026" },
  { role: "GHL Website & Marketing Assistant", company: "All My Notary Solutions LLC — NJ (Remote)", year: "2026 — Present" },
  { role: "Freelance Full-Stack Developer", company: "Self-Employed — SaaS & Client Projects (Remote)", year: "2025" },
  { role: "Web Designer & Funnel Builder", company: "UPSCALE — Web Design", year: "2025" },
  { role: "Administrative Support & Intern", company: "Philippine Statistics Authority", year: "2025" },
];

const recommendations = [
  { text: "Angelou consistently delivered quality work ahead of deadlines. His tech skills and responsiveness made remote collaboration easy.", author: "Jie Mawile", role: "PSA Zamboanga del Sur — Supervisor" },
  { text: "Angelou built our full-stack web app from scratch and handled deployment seamlessly. Great communication across time zones — highly recommended for remote dev work.", author: "SKOApp Client", role: "SKOApp — Australia/France" },
  { text: "Fast turnaround, clean code, and always available when we needed changes. Angelou understood the backend requirements quickly and delivered a solid API.", author: "DI Strategy Group", role: "DI Strategy Group — Taiwan (Remote)" },
];

