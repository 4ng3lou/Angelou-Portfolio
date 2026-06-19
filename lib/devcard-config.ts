// ============================================================
// DevCard OS — single source of truth.
// Edit everything here; components read from these constants.
// ============================================================

export const profile = {
  name: "Angelou Vincent T. Ocampo",
  initials: "AVO",
  role: "Full-Stack · AI · GHL Developer",
  location: "Zamboanga del Sur, PH",
  email: "angeloocampo61@gmail.com",
  phone: "+639210592860",
  github: "https://github.com/4ng3lou",
  githubUser: "4ng3lou", // used by the live GitHub status check
  linkedin: "https://www.linkedin.com/in/angelou-vincent-t-ocampo-753175189/",

  // TODO: drop your resume PDF into /public and set the path here.
  // Note: this app has basePath "/portfolio", so Next serves /public files
  // under that prefix automatically for <a href>. Leave "" to hide the button.
  resumeUrl: "", // e.g. "/portfolio/angelou-ocampo-resume.pdf"

  // TODO: add a Calendly / booking link, or leave "" to hide the button.
  bookingUrl: "",

  // Spec asked before exposing the phone in Recruiter Mode. Flip to true to show it.
  showPhoneInRecruiterMode: false,
} as const;

export const theme = {
  green: "#00ff9d",
  greenDim: "#0b3d2e",
  blue: "#38bdf8",
  bg: "#000000",
  panel: "#0a0a0a",
  line: "#1a1a1a",
} as const;

// Phase 1 — boot sequence lines (typed out one char at a time).
export const bootLines = [
  "> Scanning DevCard signature...",
  "> Access granted.",
  "> Initializing angelou.dev OS v2.0...",
  "> Loading skills... 100%",
  "> Mounting project archive... 100%",
] as const;

// Node 1 — Skills. Edit the blurbs to your real voice (1–2 sentences each).
export const skills: { name: string; blurb: string }[] = [
  { name: "Next.js", blurb: "App Router, server components, and static export — the backbone of every site I ship, including this one." },
  { name: "TypeScript", blurb: "Strict types end to end. If it compiles, it ships." },
  { name: "React", blurb: "Component-driven UIs with hooks — the foundation under everything I build on the web." },
  { name: "Node.js", blurb: "API routes, tooling, and the glue between services." },
  { name: "Python", blurb: "Automation, scripting, and data work when JS isn't the right tool." },
  { name: "PostgreSQL", blurb: "My default database — relational, reliable, battle-tested." },
  { name: "Drizzle ORM", blurb: "Type-safe queries across every Postgres-backed project I ship." },
  { name: "Flutter", blurb: "One codebase to hit both iOS and Android when a project needs mobile." },
  { name: "Firebase", blurb: "Auth, realtime data, and hosting when I need to move fast." },
  { name: "Tailwind CSS", blurb: "Utility-first styling — design in the markup, ship faster." },
  { name: "Docker", blurb: "Containerized, reproducible environments from dev to deploy." },
];

// Node 2 — Projects. Max 3. Pre-filled with two real, live builds + one TODO.
// Swap any of these for your candidates (vrooom_complete / SecureMatrix / APEX).
// Set githubUrl to "" to hide the GitHub button on that card.
export const projects: {
  name: string;
  problem: string;
  solution: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}[] = [
  {
    name: "SupportAI",
    problem: "Support teams drown in repetitive first-line tickets.",
    solution: "AI agent that handles first-line support and hands off to a human in the same thread.",
    tech: ["Next.js", "Bun", "PostgreSQL", "Drizzle"],
    liveUrl: "https://ai-support-web-rose.vercel.app/",
    githubUrl: "", // TODO: add repo link
  },
  {
    name: "DentaFlow",
    problem: "Dental clinics juggle scheduling, records, and follow-ups by hand.",
    solution: "AI-assisted clinic manager with smart scheduling, patient records, and automated follow-ups.",
    tech: ["Next.js", "Better Auth", "PostgreSQL", "Drizzle"],
    liveUrl: "https://dental-clinic-rosy-eight.vercel.app/",
    githubUrl: "", // TODO: add repo link
  },
  {
    // TODO: replace with vrooom_complete / SecureMatrix / APEX — real name, copy, links.
    name: "vrooom_complete",
    problem: "// TODO: one sentence — the problem this solves.",
    solution: "// TODO: one sentence — how you solved it.",
    tech: ["// TODO", "tech", "badges"],
    liveUrl: "", // TODO
    githubUrl: "", // TODO
  },
];

// Node 3 — About. Edit to your real voice; the flavor line is the subtle personality touch.
export const about = {
  bio: "I'm Angelou — a full-stack developer from the Philippines who ships AI-powered SaaS, mobile apps, and GoHighLevel systems. I care about things that are genuinely useful, fast, and built to last. Always leveling up, always shipping.",
  // Subtle One Piece nod — keep it understated. Edit or clear it.
  flavor: "// still chasing the One Piece of clean, shippable code.",
} as const;
