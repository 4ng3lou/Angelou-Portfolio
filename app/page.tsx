import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";
import ChatWidget from "@/components/ChatWidget";
import DevCard from "@/components/DevCard";
import ProjectTabs from "@/components/ProjectTabs";
import StarBackground from "@/components/StarBackground";
import LocalTimeCard from "@/components/LocalTimeCard";
import HoverAvatar from "@/components/HoverAvatar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", position: "relative" }}>
      <StarBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "40px 24px" }}>

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
                IT Graduate &nbsp;·&nbsp; Full-Stack Developer
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
                <a href="/resume.pdf" download="Angelou_Ocampo_Resume.pdf" className="btn-secondary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* ════ TWO-COLUMN ════ */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>

            {/* ── LEFT ── */}
            <div style={{ flex: 1, minWidth: 280 }}>

              {/* ABOUT */}
              <section id="about" className="section-card" style={{ marginBottom: 32 }}>
                <h2 className="section-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>About</h2>
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12, fontSize: 13, lineHeight: 1.75, color: "var(--text-2)" }}>
                  <p style={{ color: "var(--text)" }}>
                    A passionate and adaptable IT graduate with hands-on experience in administrative support,
                    data management, and digital content creation. I bring together technical programming skills,
                    creative design, and efficient administrative capabilities.
                  </p>
                  <p>
                    I&apos;ve helped businesses streamline their processes — from building full-stack web apps
                    to designing lead generation funnels that increased trial sign-ups by 45%.
                  </p>
                  <p>
                    Currently building AI-powered applications with Next.js 15, TypeScript, and modern LLM
                    integrations like OpenAI and Groq.
                  </p>
                </div>

                <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {facts.map(f => (
                    <div key={f.label} className="fact-card">
                      <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--bg-hover)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {f.icon}
                      </div>
                      <div>
                        <p style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</p>
                        <p style={{ fontSize: 12, color: "var(--text)", fontWeight: 500 }}>{f.sub}</p>
                      </div>
                    </div>
                  ))}
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
                <h2 className="section-title" style={{ marginBottom: 16 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>Projects</h2>
                <ProjectTabs />
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
                  <div style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
                    {certifications.map((c, i) => (
                      <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="cert-row"
                        style={{ borderBottom: i < certifications.length - 1 ? "1px solid var(--border)" : "none" }}>
                        <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>{c.title}</p>
                        <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.issuer}</p>
                      </a>
                    ))}
                  </div>
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
                      { label: "GitHub", href: "https://github.com/angeloocampo", icon: <GithubIcon /> },
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/angelou-vincent-ocampo", icon: <LinkedinIcon /> },
                      { label: "Twitter/X", href: "#", icon: <TwitterIcon /> },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                        {s.icon}{s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Speaking</p>
                  <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 12 }}>
                    Available for speaking events about software development and emerging technologies.
                  </p>
                  <a href="mailto:angeloocampo61@gmail.com" style={{ fontSize: 12, fontWeight: 600, color: "var(--text)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    Get in touch
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    {
                      label: "Email", value: "angeloocampo61@gmail.com", href: "mailto:angeloocampo61@gmail.com",
                      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    },
                    {
                      label: "Phone", value: "09210592860", href: "tel:09210592860",
                      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.25-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
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
            <div style={{ width: 260, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, position: "sticky", bottom: 24, alignSelf: "flex-end" }}>
              <LocalTimeCard />

              <DevCard />

              <section id="experience" className="section-card">
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>Experience</h2>
                <div style={{ position: "relative" }}>
                  {/* Vertical timeline line */}
                  <div style={{ position: "absolute", left: 4, top: 14, bottom: 14, width: 1.5, background: "var(--border-2)" }} />
                  {experience.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingTop: 12, paddingBottom: 12, position: "relative" }}>
                      <div style={{ marginTop: 6, width: 10, height: 10, borderRadius: "50%", border: i === 0 ? "1.5px solid var(--text)" : "1.5px solid var(--text-faint)", background: i === 0 ? "var(--text)" : "var(--bg)", flexShrink: 0, zIndex: 1 }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>{item.role}</p>
                        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{item.company}</p>
                      </div>
                      <span style={{ fontSize: 11, color: "var(--text-faint)", flexShrink: 0 }}>{item.year}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>

          {/* BEYOND CODING */}
          <div className="section-card" style={{ marginTop: 32 }}>
            <h2 className="section-title" style={{ marginBottom: 4 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>Beyond Coding</h2>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>More than just a developer</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
              {[
                { icon: "🎬", title: "Video Editing", desc: "CapCut, Premiere Pro, After Effects, DaVinci Resolve — reels, events, cinematic content" },
                { icon: "🎨", title: "Graphic Design", desc: "Canva & Adobe Express — branding kits, social media graphics, presentations" },
                { icon: "🗂️", title: "Admin Support", desc: "Data encoding, calendar management, documentation, and workflow automation" },
                { icon: "🔍", title: "Always Exploring", desc: "Love learning new tech and tools — currently diving deeper into AI integrations and automation" },
                { icon: "🤝", title: "Willing to Learn", desc: "Adaptable and fast learner, open to any stack, tool, or workflow needed for the job" },
              ].map(item => (
                <div key={item.title} style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{item.title}</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 20 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>Gallery</h2>
            <GalleryCarousel />
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

function GithubIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>;
}
function LinkedinIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
}
function TwitterIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}

const facts = [
  {
    label: "BS in IT", sub: "JH Cerilles State College",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
  },
  {
    label: "Based in", sub: "Lakewood, Zamboanga del Sur",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  },
  {
    label: "Seeking", sub: "Admin & IT Roles",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" /></svg>
  },
  {
    label: "Email", sub: "angeloocampo61@gmail.com",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
  },
];

const techStack: Record<string, { items: string[] }> = {
  "Frontend": { items: ["HTML", "CSS", "React", "Next.js 15", "TypeScript", "Tailwind CSS v4", "React Native + Expo", "UI/UX Design", "Framer Motion", "Vue", "Vite", "Astro"] },
  "3D & Animations": { items: ["Three.js", "GSAP"] },
  "Backend": { items: ["Node.js", "Express.js", "Next.js API Routes", "Python", "Laravel (PHP)", "C#", "REST / GraphQL", "Zod", "Better Auth"] },
  "Database & ORM": { items: ["PostgreSQL + Drizzle ORM", "MySQL", "Neon", "Convex", "Supabase"] },
  "AI & Cloud": { items: ["Vercel AI SDK", "OpenAI", "Groq (Llama)", "AWS", "Docker", "CI/CD"] },
  "Tools": { items: ["Bun", "Git / GitHub", "Figma", "GoHighLevel", "Zoho", "WordPress", "Notion", "Airtable"] },
};

const certifications = [
  { title: "Introduction to C++", issuer: "Sololearn · Recent", href: "#" },
  { title: "Introduction to SQL", issuer: "Sololearn · Recent", href: "#" },
  { title: "Graphic and Design Professional", issuer: "Educational Institution · Recent", href: "#" },
  { title: "Video Editing & Videography", issuer: "Industry Workshop · Recent", href: "#" },
];

const experience = [
  { role: "Full-Stack Developer", company: "Freelance Projects", year: "Ongoing" },
  { role: "Web Designer & Funnel Builder", company: "UPSCALE — Web Design", year: "Recent" },
  { role: "Administrative Support", company: "Philippine Statistics Authority", year: "2025" },
  { role: "Intern — Admin Office", company: "Philippine Statistics Authority", year: "Jan–May 2025" },
  { role: "BS Information Technology", company: "JH Cerilles State College", year: "2025" },
];

const recommendations = [
  { text: "Angelou consistently delivered quality work ahead of deadlines. His tech skills and responsiveness made remote collaboration easy.", author: "Jie Mawile", role: "PSA Zamboanga del Sur — Supervisor" },
  { text: "A reliable and tech-savvy professional. Angelou brings both creative and technical skills to every project he takes on.", author: "Colleague", role: "Philippine Statistics Authority" },
];