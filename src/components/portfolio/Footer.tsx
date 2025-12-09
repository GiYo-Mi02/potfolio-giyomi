"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 border-t border-border relative overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-20 w-56 h-56 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-float delay-400" />
      
      <div className="max-w-7xl mx-auto relative z-10">
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
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-muted transition-all duration-300 hover:scale-110 animate-bounce-on-hover"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/gio-joshua-gonzales-828579205/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-muted transition-all duration-300 hover:scale-110 animate-bounce-on-hover"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/itsjuice.wa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-muted transition-all duration-300 hover:scale-110 animate-bounce-on-hover"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Instagram
              </span>
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
