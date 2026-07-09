"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  name: string;
  role: string;
  stack: string;
  description: string;
  status: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    name: "LITE SUITE",
    role: "Backend Developer",
    stack: "Node.js · Express.js · Prisma · PostgreSQL",
    description:
      "An internal HR and admin management dashboard. Built the backend APIs and database schema for employee check-in/check-out, leave applications, HR document verification, and file uploads.",
    status: "In development",
  },
  {
    name: "Sabriya Solutions",
    role: "Frontend Developer",
    stack: "React.js · Tailwind CSS · GSAP",
    description:
      "A live e-commerce platform for a Dubai-based client. Built responsive storefront interfaces and GSAP-powered animations for product browsing and checkout flows.",
    status: "Live in production",
    link: "https://sabriyasolutions.ae/",
  },
  {
    name: "DMC&B",
    role: "Frontend Developer",
    stack: "React.js · Tailwind CSS · GSAP",
    description:
      "A marketing website for an Italian luxury chandelier manufacturing brand. Built animation-rich, scroll-based interactions to match the brand's premium positioning.",
    status: "Live in production",
    link: "https://dmc-b.com/",
  },
  {
    name: "Foodie",
    role: "Backend Developer",
    stack: "Next.js · Prisma · PostgreSQL · Supabase",
    description:
      "A restaurant discovery app aggregating genuine reviews to surface signature dishes nearby. Designed the database schema and REST APIs, and integrated Supabase for auth and real-time data.",
    status: "Project",
  },
  {
    name: "Gold Scheme Management System",
    role: "Full-Stack Developer",
    stack: "Next.js · React.js · Tailwind CSS · Supabase · Prisma",
    description:
      "An admin panel for creating and managing gold investment schemes — enrollment, filtered views, and customer purchase order tracking for financial transparency.",
    status: "Project",
  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards) return;

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={ref} className="py-28 px-6 border-t border-border bg-surface/40">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-accent text-sm mb-3">// work.tsx</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
          Things I&rsquo;ve shipped.
        </h2>

        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              data-card
              className="opacity-0 rounded-lg border border-border bg-surface p-6 sm:p-7 hover:border-accent/60 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="font-mono text-xs text-muted mt-1">{p.role}</p>
                </div>
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                    p.status === "Live in production"
                      ? "border-green/40 text-green"
                      : "border-border text-muted"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs text-accent">{p.stack}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-text hover:text-accent transition-colors"
                  >
                    Visit site <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
