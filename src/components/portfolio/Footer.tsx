"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Let&apos;s build
            <br />
            <span className="text-neutral-500">something great.</span>
          </h2>
          <a
            href="mailto:hello@johndoe.dev"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-neutral-300 hover:text-white transition-colors group"
          >
            hello@johndoe.dev
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
              <Mail className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-neutral-500">
            <span className="font-mono">Based in San Francisco</span>
            <span className="hidden md:block">•</span>
            <span>© {new Date().getFullYear()} John Doe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
