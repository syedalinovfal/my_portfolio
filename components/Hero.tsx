"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const LINES = [
  { text: "Full Stack Developer based in Chennai" },
  { text: "I've built live apps for clients in Dubai, Italy & India" },
  { text: "From pixel-perfect UIs to scalable APIs" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const lineEls = el.querySelectorAll<HTMLElement>("[data-line]");
    const tl = gsap.timeline({ delay: 0.3 });

    lineEls.forEach((lineEl) => {
      const textEl = lineEl.querySelector<HTMLElement>("[data-text]");
      if (!textEl) return;

      const fullText = textEl.dataset.full || "";

      tl.set(lineEl, { autoAlpha: 1 })
        .to(textEl, {
          duration: fullText.length * 0.03,
          text: fullText,
          ease: "none",
        })
        .to({}, { duration: 0.3 });
    });

    tl.call(() => {
      gsap.to("#cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "steps(1)",
      });
    });
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center pt-20 px-6"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="rounded-lg border border-border bg-surface shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-xs font-mono text-muted">
              syed@portfolio — zsh
            </span>
          </div>

          <div className="p-6 sm:p-8 font-mono leading-relaxed">
            {LINES.map((line, i) => (
              <div key={i} data-line className="opacity-0 mb-5">
                <span
                  data-text
                  data-full={line.text}
                  className={`
                    ${i === 0 ? "text-accent text-lg sm:text-xl font-bold" : ""}
                    ${i === 1 ? "text-text text-sm sm:text-base" : ""}
                    ${i === 2 ? "text-muted text-sm sm:text-base" : ""}
                  `}
                />
              </div>
            ))}
            <span
              id="cursor"
              className="inline-block w-2 h-5 bg-accent align-middle"
            />
          </div>
        </div>

        <p className="mt-6 text-muted text-sm max-w-xl">
          Scroll down — or{" "}
          <a href="#work" className="text-accent underline underline-offset-2">
            see what I&rsquo;ve shipped
          </a>{" "}
          to production.
        </p>
      </div>
    </section>
  );
}
