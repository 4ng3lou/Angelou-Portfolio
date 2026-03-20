import Link from "next/link";

const full: Record<string, { icon: string; items: string[] }> = {
  "Frontend Development": { icon: "", items: ["HTML", "CSS", "React", "Next.js 15", "TypeScript", "Tailwind CSS v4", "React Native + Expo", "UI/UX Design", "Framer Motion", "Vue", "Vite", "Astro"] },
  "3D & Animations": { icon: "", items: ["Three.js", "GSAP"] },
  "Backend Development": { icon: "", items: ["Node.js", "Express.js", "Next.js API Routes", "Python", "Laravel (PHP)", "C++", "C#", "Java", "REST / GraphQL", "Zod (Validation)", "Better Auth"] },
  "Database & ORM": { icon: "", items: ["PostgreSQL + Drizzle ORM", "MySQL", "Neon (Serverless PG)", "Convex", "Supabase"] },
  "AI & Cloud": { icon: "", items: ["Vercel AI SDK", "OpenAI", "Groq (Llama)", "Vercel + Neon + Expo EAS", "AWS", "Docker / CI/CD"] },
  "Tools & Package Managers": { icon: "", items: ["Bun", "Git / GitHub", "Turborepo (Monorepo)", "Figma", "WordPress / Elementor", "GoHighLevel (GHL)", "Zoho", "Meta Ads Manager", "Google Data Studio"] },
  "Administrative & Digital": { icon: "", items: ["Funnel Building (Lead Gen)", "Task & Calendar Management", "Automation & Documentation", "Administrative Support", "Video Editing", "Canva / Adobe Express", "Data Encoding", "CapCut"] },
  "Productivity": { icon: "", items: ["Notion", "Trello", "ClickUp", "Airtable", "Asana", "Slack", "Teams", "Loom", "DocuSign"] },
};

export default function TechStackPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-geist-sans), sans-serif" }}>

      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "40px 24px" }}>
        <Link href="/" className="back-link">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          Back
        </Link>
        <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: "var(--text)" }}>Full Tech Stack</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {Object.entries(full).map(([cat, { icon, items }]) => (
            <div key={cat}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>{cat}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}