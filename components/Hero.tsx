import { profile } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Profile */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-8 mb-10">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div
              className="w-24 h-24 rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--color-border-2)" }}
            >
              {/* Placeholder avatar - replace /avatar.jpg with real photo */}
              <div
                className="w-full h-full flex items-center justify-center text-4xl"
                style={{ background: "var(--color-surface-2)" }}
              >
                👨‍💻
              </div>
            </div>
            {/* Online dot */}
            <span
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full animate-pulse-glow"
              style={{
                background: "var(--color-accent)",
                border: "2px solid var(--color-bg)",
              }}
            />
          </div>

          {/* Name & titles */}
          <div>
            {/* Badge */}
            <a
              href={profile.badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-mono-custom tracking-wider transition-opacity hover:opacity-80"
              style={{
                background: "rgba(232, 255, 90, 0.08)",
                border: "1px solid rgba(232, 255, 90, 0.2)",
                color: "var(--color-accent)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-accent)" }}
              />
              {profile.badge.title} — {profile.badge.subtitle}
            </a>

            <h1
              className="font-display font-bold text-4xl sm:text-5xl mb-2 animate-fade-in-up"
              style={{ color: "var(--color-text)" }}
            >
              {profile.name}
            </h1>

            <p
              className="text-sm mb-3 animate-fade-in-up delay-100"
              style={{ color: "var(--color-muted)" }}
            >
              📍 {profile.location}
            </p>

            <div className="flex flex-wrap gap-2 animate-fade-in-up delay-200">
              {profile.titles.map((title) => (
                <span
                  key={title}
                  className="text-xs px-3 py-1 rounded-full font-mono-custom tracking-wide"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border-2)",
                    color: "var(--color-text)",
                  }}
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
          <a
            href={profile.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--color-accent)",
              color: "#000",
            }}
          >
            <CalendarIcon />
            Schedule a Call
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all card-hover"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            <MailIcon />
            Send Email
          </a>

          <a
            href={profile.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all card-hover"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            <BlogIcon />
            My Blog
          </a>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
