"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Recommendations", href: "#recommendations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ borderColor: "var(--color-border)" }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      role="banner"
    >
      <nav
        className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display font-bold text-sm tracking-wider uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          YN
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-xs font-mono-custom tracking-widest uppercase">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:you@example.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-xs font-display font-semibold tracking-wider uppercase rounded-full btn-accent"
        >
          Hire Me
        </a>

        {/* Mobile menu */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "var(--color-text)" }}
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className="block h-px transition-all"
              style={{
                background: "var(--color-text)",
                transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block h-px transition-all"
              style={{
                background: "var(--color-text)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all"
              style={{
                background: "var(--color-text)",
                transform: open
                  ? "rotate(-45deg) translate(3px, -3px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
          className="md:hidden border-t"
        >
          <ul className="flex flex-col py-4 px-6 gap-4" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-sm tracking-widest uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
