import { certifications } from "@/lib/data";
import { SectionHeader } from "./About";
import Link from "next/link";

export default function Certifications() {
  const recent = certifications.slice(0, 4);

  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader label="Recent Certifications" />
          <Link href="/certifications" className="view-all-link text-xs font-mono-custom tracking-widest uppercase">
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {recent.map((cert) => (
            <a
              key={cert.title}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl card-hover"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                textDecoration: "none",
              }}
            >
              {/* Badge icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{ background: "var(--color-surface-2)" }}
              >
                🏆
              </div>

              <div className="min-w-0">
                <p
                  className="font-display font-semibold text-sm truncate"
                  style={{ color: "var(--color-text)" }}
                >
                  {cert.title}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--color-muted)" }}
                >
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
