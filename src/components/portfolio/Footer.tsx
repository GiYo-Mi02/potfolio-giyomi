"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Let&apos;s build
            <br />
            <span className="text-muted-foreground">something great.</span>
          </h2>
          <a
            href="mailto:ggiojoshua2006@gmail.com"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors group"
          >
            ggiojoshua2006@gmail.com
            <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-muted transition-all">
              <Mail className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GiYo-Mi02"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-muted transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gio-joshua-gonzales-828579205/"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-muted transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/itsjuice.wa/"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-muted transition-all"
              aria-label="Twitter"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <span className="font-mono">Based in Philippines</span>
            <span className="hidden md:block">•</span>
            <span>© {new Date().getFullYear()} Gio Joshua Gonzales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
