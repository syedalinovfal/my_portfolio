const SKILLS = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  Backend: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "REST APIs"],
  Tools: ["Git", "GitHub", "Supabase", "Vercel"],
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-accent text-sm mb-3">// about.tsx</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
          From mockup to migration.
        </h2>
        <p className="text-muted leading-relaxed mb-10 max-w-xl">
          I&rsquo;m a full stack developer based in Chennai with 2+ years of
          experience shipping real products — animated marketing sites for
          international clients, and backend systems handling HR workflows,
          payments, and admin tooling. I like owning a feature end to end:
          schema, API, and the pixel-level polish on the UI.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
