"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const tabs = [
  { label: "hero.tsx", href: "#hero" },
  { label: "about.tsx", href: "#about" },
  { label: "work.tsx", href: "#work" },
  { label: "contact.tsx", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center h-11">
          <div className="flex items-center gap-1.5 px-4 border-r border-border h-full shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>

          <nav className="hidden sm:flex overflow-x-auto h-full">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="group relative px-4 h-full flex items-center text-sm font-mono text-muted hover:text-text transition-colors whitespace-nowrap border-r border-border"
              >
                {tab.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* resume button */}

          <a
            href="/Syed_Ali_Novfal_Resume.pdf"
            className="ml-auto mr-3 text-sm font-mono px-3 py-1.5 rounded border border-accent text-accent hover:bg-accent-soft transition-colors whitespace-nowrap shrink-0"
          >
            resume.pdf ↓
          </a>

          {/* hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden flex items-center justify-center w-11 h-11 border-l border-border text-muted hover:text-text transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* mobile dropdown menu */}
      {menuOpen && (
        <div className="fixed top-11 left-0 right-0 z-40 bg-surface border-b border-border sm:hidden">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3.5 font-mono text-sm text-muted hover:text-text hover:bg-surface-2 border-b border-border transition-colors"
            >
              <span className="text-accent mr-2">→</span> {tab.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
