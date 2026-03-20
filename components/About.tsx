import { profile } from "@/lib/data";

export default function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="About" />

        <div className="mt-8 space-y-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed"
              style={{ color: i === 0 ? "var(--color-text)" : "var(--color-muted)" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Membership badges */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span
            className="text-xs font-mono-custom tracking-widest uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            Member of
          </span>
          {profile.memberships.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 rounded-full btn-ghost"
            >
              {m.name}
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-8 flex items-center gap-4">
          {Object.entries(profile.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${platform} profile`}
              className="w-9 h-9 rounded-xl flex items-center justify-center social-icon"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <SocialIcon platform={platform} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    linkedin: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    instagram: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    twitter: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return <>{icons[platform] ?? null}</>;
}

export function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="text-xs font-mono-custom font-bold tracking-[0.3em] uppercase"
        style={{ color: "var(--color-accent)" }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-px max-w-16"
        style={{ background: "var(--color-border-2)" }}
      />
    </div>
  );
}
