import { experience } from "@/lib/data";
import { SectionHeader } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Experience" />

        <div className="mt-8 relative">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ background: "var(--color-border)" }}
          />

          <div className="space-y-0">
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full transition-all"
                  style={{
                    background:
                      item.type === "work"
                        ? "var(--color-bg)"
                        : item.type === "education"
                          ? "var(--color-accent-2)"
                          : "var(--color-accent)",
                    border:
                      item.type === "work"
                        ? "2px solid var(--color-border-2)"
                        : "none",
                  }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="font-display font-semibold text-sm leading-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.role}
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {item.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono-custom flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
