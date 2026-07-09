"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const LINES = [
  { prompt: "whoami", output: "Syed Ali Novfal — Full Stack Developer" },
  {
    prompt: "cat focus.txt",
    output: "React · Next.js · Node.js · Express · PostgreSQL",
  },
  {
    prompt: "echo $STATUS",
    output: "Shipping production frontend builds & backend APIs for live clients",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const lineEls = el.querySelectorAll<HTMLElement>("[data-line]");
    const tl = gsap.timeline({ delay: 0.3 });

    lineEls.forEach((lineEl, i) => {
      const promptEl = lineEl.querySelector<HTMLElement>("[data-prompt]");
      const outputEl = lineEl.querySelector<HTMLElement>("[data-output]");
      if (!promptEl || !outputEl) return;

      const promptText = promptEl.dataset.full || "";
      const outputText = outputEl.dataset.full || "";

      tl.set(lineEl, { autoAlpha: 1 })
        .to(promptEl, {
          duration: promptText.length * 0.035,
          text: promptText,
          ease: "none",
        })
        .to(
          outputEl,
          {
            duration: outputText.length * 0.015,
            text: outputText,
            ease: "none",
          },
          "+=0.15"
        )
        .to({}, { duration: 0.25 }); // small pause between lines
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

          <div className="p-6 sm:p-8 font-mono text-sm sm:text-[15px] leading-relaxed">
            {LINES.map((line, i) => (
              <div key={i} data-line className="opacity-0 mb-4">
                <div>
                  <span className="text-green">➜ </span>
                  <span className="text-accent">~</span>{" "}
                  <span data-prompt data-full={line.prompt} className="text-text" />
                </div>
                <div
                  data-output
                  data-full={line.output}
                  className="text-muted pl-0 mt-1"
                />
              </div>
            ))}
            <span id="cursor" className="inline-block w-2 h-4 bg-accent align-middle" />
          </div>
        </div>

        <p className="mt-6 text-muted text-sm max-w-xl">
          Scroll down — or run{" "}
          <a href="#work" className="text-accent underline underline-offset-2">
            cd work.tsx
          </a>{" "}
          to see what&rsquo;s shipped to production.
        </p>
      </div>
    </section>
  );
}
