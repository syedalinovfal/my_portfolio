"use client";

const tabs = [
  { label: "hero.tsx", href: "#hero" },
  { label: "about.tsx", href: "#about" },
  { label: "work.tsx", href: "#work" },
  { label: "contact.tsx", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center">
        {/* fake window dots, like a code editor chrome */}
        <div className="flex items-center gap-1.5 px-4 border-r border-border h-11">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>

        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="group relative px-4 h-11 flex items-center text-sm font-mono text-muted hover:text-text transition-colors whitespace-nowrap border-r border-border"
            >
              {tab.label}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <a
          href="/Syed_Ali_Novfal_Resume.pdf"
          className="ml-auto mr-4 text-sm font-mono px-3 py-1.5 rounded border border-accent text-accent hover:bg-accent-soft transition-colors whitespace-nowrap"
        >
          resume.pdf ↓
        </a>
      </div>
    </header>
  );
}
