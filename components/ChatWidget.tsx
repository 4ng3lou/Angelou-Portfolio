"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM = `You are Angelou Vincent T. Ocampo, an IT graduate from JH Cerilles State College in Lakewood, Zamboanga del Sur, Philippines. You are a passionate full-stack developer, creative designer, and administrative support specialist.
Technical skills: React, Next.js 15, TypeScript, Tailwind CSS v4, Node.js, Python, Laravel (PHP), PostgreSQL + Drizzle ORM, React Native + Expo, Vercel AI SDK, Bun, Docker, AWS, GoHighLevel, Figma, Canva.
Projects: SupportAI (AI customer support), DentaFlow (AI dental clinic), Laundry Management System, Online Job Portal.
Experience: Full-Stack Developer (freelance), Web Designer & Funnel Builder at UPSCALE (+45% sign-ups), Admin Support & Intern at PSA (Jan-May 2025).
Contact: angeloocampo61@gmail.com | 09210592860. Be friendly and concise. Never say you are an AI.`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about my skills, projects, experience, video editing, admin support, design, or how to get in touch!",
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const updated: Message[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated, system: SYSTEM }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply || "Sorry, I couldn't respond." }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Something went wrong. Please try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} style={{ position: "fixed", bottom: 20, right: 20, zIndex: 50, display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 50, background: "#111", color: "#fff", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          Chat with Me
        </button>
      )}
      {open && (
        <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 50, width: 340, height: 480, background: "var(--bg)", border: "1px solid var(--border-2)", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/images/download.jpg" alt="Angelou" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", objectPosition: "center 40%", border: "1px solid var(--border)" }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Angelou Vincent</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-start", gap: 8 }}>
                {msg.role === "assistant" && (
                  <img
                    src="/images/download.jpg"
                    alt="Angelou"
                    style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", objectPosition: "center 40%", flexShrink: 0, marginTop: 2, border: "1px solid var(--border)" }}
                  />
                )}
                <div style={{ maxWidth: "75%", padding: "8px 12px", borderRadius: 12, fontSize: 13, lineHeight: 1.5, ...(msg.role === "user" ? { background: "#0066ff", color: "#fff", borderBottomRightRadius: 3 } : { background: "var(--bg-secondary)", color: "var(--text)", border: "1px solid var(--border)", borderTopLeftRadius: 3 }) }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <img src="/images/download.jpg" alt="Angelou" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", objectPosition: "center 40%", flexShrink: 0, marginTop: 2, border: "1px solid var(--border)" }} />
                <div style={{ padding: "8px 14px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 12, borderTopLeftRadius: 3, display: "flex", gap: 4, alignItems: "center" }}>
                  {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-faint)", display: "inline-block", animation: `chatBounce 1s ${i * 0.15}s ease-in-out infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: 12, borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--bg)" }}>
              <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Type a message..." maxLength={1000} style={{ flex: 1, background: "none", border: "none", outline: "none", fontSize: 13, color: "var(--text)" }} />
              <button onClick={send} disabled={!input.trim() || loading} style={{ width: 28, height: 28, borderRadius: 8, border: "none", cursor: input.trim() && !loading ? "pointer" : "default", background: input.trim() && !loading ? "#111" : "var(--border-2)", color: input.trim() && !loading ? "#fff" : "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes chatBounce { 0%,60%,100% { transform:translateY(0);opacity:0.4; } 30% { transform:translateY(-5px);opacity:1; } }`}</style>
    </>
  );
}