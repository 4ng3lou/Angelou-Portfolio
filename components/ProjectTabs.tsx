"use client";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  url: string;
  domain: string;
  tags: string[];
  thumb?: string;
};

const projects: Record<string, Project[]> = {
  "Web Dev": [
    {
      title: "SupportAI",
      description: "AI-powered first-line customer support with seamless human handoff",
      url: "#", domain: "supportai.app",
      tags: ["Next.js 15", "Bun", "PostgreSQL + Drizzle"],
      thumb: "/images/aisupport.jpg",
    },
    {
      title: "DentaFlow",
      description: "AI dental clinic management with smart scheduling and patient records",
      url: "#", domain: "dentaflow.app",
      tags: ["Next.js 15", "Better Auth", "Drizzle ORM"],
      thumb: "/images/dentalclinic.jpg",
    },
    {
      title: "Laundry Management System",
      description: "Multi-branch business tracking with real-time scheduling module",
      url: "#", domain: "laundry.app",
      tags: ["PHP", "MySQL", "JavaScript"],
      thumb: "/images/laundry_system.jpg",
    },
    {
      title: "Online Job Portal",
      description: "Full-stack job portal connecting seekers and employers with auth",
      url: "#", domain: "jobportal.app",
      tags: ["PHP", "MySQL", "JavaScript"],
      thumb: "/images/job_portal.jpg",
    },
  ],
  "Video Editing": [
    {
      title: "Event Highlights Reel",
      description: "Dynamic event recaps with motion graphics and color grading",
      url: "#", domain: "portfolio",
      tags: ["CapCut", "Premiere Pro", "Color Grading"],
      thumb: "/images/video_editing_featured.png",
    },
    {
      title: "Cinematic Travel Video",
      description: "Cinematic sequences with sound design and smooth transitions",
      url: "#", domain: "portfolio",
      tags: ["CapCut", "After Effects", "DaVinci Resolve"],
      thumb: "/images/video_editing_featured.png",
    },
    {
      title: "Social Media Short Clips",
      description: "Vertical short-form content optimized for reels and TikTok",
      url: "#", domain: "portfolio",
      tags: ["CapCut", "IG Reels", "TikTok"],
      thumb: "/images/video_editing_featured.png",
    },
    {
      title: "PSA Explainer Video",
      description: "Animated explainer video for PSA internal operations communication",
      url: "#", domain: "portfolio",
      tags: ["CapCut", "Animation", "Narration"],
      thumb: "/images/video_editing_featured.png",
    },
  ],
  "Design": [
    {
      title: "Canva Design Portfolio",
      description: "Social media branding, posters, and professional presentation decks",
      url: "#", domain: "portfolio",
      tags: ["Canva", "Branding", "Typography"],
      thumb: "/images/canva_designs_featured.png",
    },
    {
      title: "UI/UX Mockups",
      description: "High-fidelity wireframes and clickable prototypes for web apps",
      url: "#", domain: "figma.com",
      tags: ["Figma", "UI/UX", "Prototyping"],
      thumb: "/images/canva_designs_featured.png",
    },
    {
      title: "Brand Identity Kit",
      description: "Logo, color palette, and brand guidelines for local businesses",
      url: "#", domain: "portfolio",
      tags: ["Canva", "Adobe Express", "Branding"],
      thumb: "/images/canva_designs_featured.png",
    },
    {
      title: "Gym Landing Page",
      description: "Mobile-responsive landing page design for UPSCALE fitness studio",
      url: "#", domain: "upscale.ph",
      tags: ["Figma", "GoHighLevel", "Funnel Design"],
      thumb: "/images/canva_designs_featured.png",
    },
  ],
};

const TABS = ["Web Dev", "Video Editing", "Design"] as const;
type Tab = typeof TABS[number];

export default function ProjectTabs() {
  const [active, setActive] = useState<Tab>("Web Dev");

  return (
    <section>
      {/* Tab bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              fontSize: 13,
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {projects[active].map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: 10,
              border: "1px solid var(--border)",
              background: "var(--card)",
              overflow: "hidden",
              textDecoration: "none",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                background: "var(--border)",
                overflow: "hidden",
              }}
            >
              {p.thumb && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.thumb}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>

            {/* Info */}
            <div style={{ padding: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 3 }}>
                {p.title}
              </p>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8, lineHeight: 1.5 }}>
                {p.description}
              </p>
              <span className="tag-mono">{p.domain}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 7 }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag-small">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
