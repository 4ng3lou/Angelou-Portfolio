import Link from "next/link";

const all = [
  { title:"SupportAI", description:"AI-powered first-line customer support with seamless human handoff escalation.", url:"#", domain:"supportai.app", tags:["Next.js 15","Bun","PostgreSQL + Drizzle"], cat:"Web Dev" },
  { title:"DentaFlow", description:"AI dental clinic management with smart scheduling, patient records, and automated follow-ups.", url:"#", domain:"dentaflow.app", tags:["Next.js 15","Better Auth","Drizzle ORM"], cat:"Web Dev" },
  { title:"Laundry Management System", description:"Multi-branch business tracking with real-time scheduling module.", url:"#", domain:"laundry.app", tags:["PHP","MySQL","JavaScript"], cat:"Web Dev" },
  { title:"Online Job Portal", description:"Full-stack job portal connecting seekers and employers with secure auth.", url:"#", domain:"jobportal.app", tags:["PHP","MySQL","JavaScript"], cat:"Web Dev" },
  { title:"Event Highlights Reel", description:"Dynamic event recaps with motion graphics and professional color grading.", url:"#", domain:"portfolio", tags:["CapCut","Premiere Pro","Color Grading"], cat:"Video Editing" },
  { title:"Cinematic Travel Video", description:"Cinematic sequences with sound design and smooth transitions.", url:"#", domain:"portfolio", tags:["CapCut","After Effects","DaVinci Resolve"], cat:"Video Editing" },
  { title:"Social Media Short Clips", description:"Vertical short-form content optimized for reels and TikTok engagement.", url:"#", domain:"portfolio", tags:["CapCut","IG Reels","TikTok"], cat:"Video Editing" },
  { title:"PSA Explainer Video", description:"Animated explainer for PSA internal operations communication.", url:"#", domain:"portfolio", tags:["CapCut","Animation","Narration"], cat:"Video Editing" },
  { title:"Canva Design Portfolio", description:"Social media branding, posters, and professional decks.", url:"#", domain:"portfolio", tags:["Canva","Branding","Typography"], cat:"Design" },
  { title:"UI/UX Mockups", description:"High-fidelity wireframes and clickable prototypes for web apps.", url:"#", domain:"figma.com", tags:["Figma","UI/UX","Prototyping"], cat:"Design" },
  { title:"Brand Identity Kit", description:"Logo, color palette, and brand guidelines for local businesses.", url:"#", domain:"portfolio", tags:["Canva","Adobe Express","Branding"], cat:"Design" },
  { title:"Gym Landing Page", description:"Mobile-responsive landing page design for UPSCALE fitness studio.", url:"#", domain:"upscale.ph", tags:["Figma","GoHighLevel","Funnel Design"], cat:"Design" },
];

const CAT_COLORS: Record<string, string> = {
  "Web Dev": "#0066ff",
  "Video Editing": "#e11d48",
  "Design": "#7c3aed",
};

export default function ProjectsPage() {
  return (
    <div style={{ minHeight:"100vh", background:"var(--bg)", color:"var(--text)", fontFamily:"var(--font-geist-sans), sans-serif" }}>
      <div style={{ height:3, background:"#0066ff" }}/>
      <div style={{ maxWidth:1024, margin:"0 auto", padding:"40px 24px" }}>
        <Link href="/" className="back-link">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </Link>
        <h1 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:"var(--text)" }}>All Projects</h1>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:16 }}>
          {all.map(p => (
            <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
              className="hover-card"
              style={{ border:"1px solid var(--border)", borderRadius:12, overflow:"hidden", textDecoration:"none", display:"block" }}>
              <div style={{ width:"100%", height:90, background:"linear-gradient(135deg, var(--bg-secondary), var(--bg-hover))", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 10px", borderRadius:20, color:"#fff", background:CAT_COLORS[p.cat] || "#444" }}>{p.cat}</span>
              </div>
              <div style={{ padding:16 }}>
                <p style={{ fontSize:14, fontWeight:600, color:"var(--text)", marginBottom:6 }}>{p.title}</p>
                <p style={{ fontSize:12, color:"var(--text-muted)", marginBottom:10, lineHeight:1.5 }}>{p.description}</p>
                <span className="tag-mono" style={{ marginBottom:8, display:"inline-block" }}>{p.domain}</span>
                <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginTop:6 }}>
                  {p.tags.map(t => <span key={t} className="tag-small">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
