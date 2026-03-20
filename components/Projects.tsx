import { projects } from "@/lib/data";
import { SectionHeader } from "./About";
import Link from "next/link";

export default function Projects() {
  const recent = projects.slice(0, 4);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader label="Recent Projects" />
          <Link href="/projects" className="view-all-link text-xs font-mono-custom tracking-widest uppercase">
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {recent.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl card-hover"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3
                  className="font-display font-semibold text-base"
                  style={{ color: "var(--color-text)" }}
                >
                  {project.title}
                </h3>
                <ArrowIcon />
              </div>

              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {project.description}
              </p>

              <span
                className="text-xs font-mono-custom"
                style={{ color: "var(--color-accent-2)" }}
              >
                {project.domain}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      style={{ color: "var(--color-muted)" }}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
