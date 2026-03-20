import Link from "next/link";

const all = [
  { title:"Introduction to C++",             issuer:"Sololearn",              year:"Recent", href:"#" },
  { title:"Introduction to SQL",             issuer:"Sololearn",              year:"Recent", href:"#" },
  { title:"Graphic and Design Professional", issuer:"Educational Institution", year:"Recent", href:"#" },
  { title:"Video Editing & Videography",     issuer:"Industry Workshop",       year:"Recent", href:"#" },
];

export default function CertificationsPage() {
  return (
    <div style={{ minHeight:"100vh", background:"var(--bg)", color:"var(--text)", fontFamily:"var(--font-geist-sans), sans-serif" }}>
      <div style={{ height:3, background:"#0066ff" }}/>
      <div style={{ maxWidth:1024, margin:"0 auto", padding:"40px 24px" }}>
        <Link href="/" className="back-link">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </Link>
        <h1 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:"var(--text)" }}>All Certifications</h1>
        <div style={{ border:"1px solid var(--border)", borderRadius:10, overflow:"hidden" }}>
          {all.map((c, i) => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"
              className="cert-row"
              style={{ display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom: i < all.length-1 ? "1px solid var(--border)" : "none" }}>
              <div>
                <p style={{ fontSize:14, fontWeight:500, color:"var(--text)" }}>{c.title}</p>
                <p style={{ fontSize:12, color:"var(--text-muted)" }}>{c.issuer}</p>
              </div>
              <span style={{ fontSize:11, color:"var(--text-faint)" }}>{c.year}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
