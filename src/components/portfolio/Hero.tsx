"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
      {/* Professional Photo - Behind text on right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] md:w-[45%] lg:w-[50%] h-[80%] hidden md:block pointer-events-none">
        <div className="relative w-full h-full">
          {/* Gradient overlay to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-550/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-150/50 z-10" />
          {/* Professional photo */}
          <Image
            src="/portrait.png"
            alt="Professional portrait"
            fill
            className="object-cover object-center grayscale opacity-800"
            priority
          />
          {/* Subtle color tint overlay */}
          <div className="absolute inset-0 bg-neutral-950/30 mix-blend-multiply z-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-30">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 status-pulse" />
            <span className="text-sm text-neutral-400 font-mono">
              Available for freelance / Full time opportunities
            </span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
          Aspiring
          <br />
          Full-Stack
          <br />
          <span className="text-neutral-500">Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12">
          Building digital products with precision and purpose. Specializing in, Next,
          React, Node.js, and Automations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <a
            href="#work"
            className="group flex items-center gap-3 text-lg font-medium hover:text-neutral-300 transition-colors"
          >
            View Selected Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
          <span className="text-neutral-600">—</span>
          <span className="text-neutral-500 font-mono text-sm">
            8+ years experience
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block z-30">
        <div className="w-px h-16 bg-gradient-to-b from-neutral-700 to-transparent" />
      </div>
    </section>
  );
}
