import { recommendations } from "@/lib/data";
import { SectionHeader } from "./About";

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Recommendations" />

        <div className="mt-8 space-y-4">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl card-hover"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-display font-bold leading-none mb-4 -mt-1"
                style={{ color: "var(--color-border-2)" }}
              >
                &ldquo;
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-muted)" }}
              >
                {rec.text}
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border-2)",
                    color: "var(--color-accent)",
                  }}
                >
                  {rec.author.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-sm font-display font-semibold leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {rec.author}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {rec.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
