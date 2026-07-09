import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-accent text-sm mb-3">// contact.tsx</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
          Let&rsquo;s build something.
        </h2>
        <p className="text-muted mb-10 max-w-md mx-auto">
          Open to full-time roles and freelance work. Reach out — I usually
          reply within a day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-mono text-sm">
          <a
            href="mailto:syed.vskp39@gmail.com"
            className="flex items-center gap-2 text-text hover:text-accent transition-colors"
          >
            <Mail size={16} /> syed.vskp39@gmail.com
          </a>
          <a
            href="tel:+918465833508"
            className="flex items-center gap-2 text-text hover:text-accent transition-colors"
          >
            <Phone size={16} /> +91 8465833508
          </a>
          <span className="flex items-center gap-2 text-muted">
            <MapPin size={16} /> Chennai, India
          </span>
        </div>

        <p className="mt-16 text-xs font-mono text-muted">
          © {new Date().getFullYear()} Syed Ali Novfal. Built with Next.js,
          Tailwind CSS & GSAP.
        </p>
      </div>
    </section>
  );
}
