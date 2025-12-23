"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl animate-float-slow delay-200" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-2xl animate-float delay-300" />
      
      {/* Professional Photo - Behind text on right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] md:w-[45%] lg:w-[50%] h-[80%] hidden md:block pointer-events-none">
        <div className="relative w-full h-full">
          {/* Gradient overlay to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-10" />
          {/* Professional photo */}
          <Image
            src="/last.png"
            alt="Professional portrait"
            fill
            className="object-cover object-center grayscale dark:opacity-80 opacity-100"
            priority
          />
          {/* Subtle color tint overlay - only in dark mode */}
          <div className="absolute inset-0 dark:bg-background/30 z-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-30">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 status-pulse" />
            <span className="text-sm text-muted-foreground font-mono">
              Available for freelance / Full time opportunities
            </span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
          <span className="inline-block animate-blur-in">Aspiring</span>
          <br />
          <span className="inline-block animate-blur-in blur-delay-100">Full-Stack</span>
          <br />
          <span className="text-muted-foreground inline-block animate-blur-in blur-delay-200">Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 animate-fade-in delay-200">
          Building digital products with precision and purpose. Specializing in, Next,
          React, Node.js, and Automations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center animate-fade-in delay-300">
          <a
            href="#work"
            className="group relative flex items-center gap-3 text-lg font-medium hover:text-foreground transition-all duration-300 hover:translate-x-1"
            aria-label="View selected work projects"
          >
            <span className="relative">
              View Selected Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
          <span className="text-muted-foreground">—</span>
          <span className="text-muted-foreground font-mono text-sm">
            2+ years experience
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block z-30">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent animate-pulse" />
      </div>
    </section>
  );
}
