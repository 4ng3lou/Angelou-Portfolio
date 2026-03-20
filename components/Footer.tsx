import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <>
      {/* Contact / Speaking */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Speaking */}
              <div>
                <span
                  className="text-xs font-mono-custom font-bold tracking-[0.3em] uppercase"
                  style={{ color: "var(--color-accent)" }}
                >
                  Speaking
                </span>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  Available for speaking at events about software development
                  and emerging technologies.
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl text-sm font-display font-semibold btn-accent"
                >
                  Get in touch
                </a>
              </div>

              {/* Contact links */}
              <div className="flex flex-col gap-3">
                <ContactRow
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  label="Let's Talk"
                  value="Schedule a Call"
                  href={profile.calendly}
                />
                <ContactRow
                  label="Blog"
                  value="Read my blog"
                  href={profile.blog}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs font-mono-custom"
            style={{ color: "var(--color-muted)" }}
          >
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {Object.entries(profile.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs font-mono-custom capitalize tracking-wide"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center justify-between p-3 rounded-xl contact-row"
      style={{ textDecoration: "none" }}
    >
      <span
        className="text-xs font-mono-custom tracking-widest uppercase"
        style={{ color: "var(--color-muted)" }}
      >
        {label}
      </span>
      <span
        className="text-sm font-display font-medium"
        style={{ color: "var(--color-text)" }}
      >
        {value}
      </span>
    </a>
  );
}
