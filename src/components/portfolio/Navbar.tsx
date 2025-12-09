"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          JD<span className="text-neutral-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#work"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            Work
          </a>
          <a
            href="#play"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            Play
          </a>
          <a
            href="#contact"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse" />
          <span className="text-sm text-neutral-400">Available</span>
        </div>
      </div>
    </nav>
  );
}
