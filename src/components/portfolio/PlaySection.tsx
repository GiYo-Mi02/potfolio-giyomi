"use client";

import { ArrowUpRight } from "lucide-react";

interface PlayItem {
  id: string;
  title: string;
  description: string;
  type: string;
  link: string;
}

const playItems: PlayItem[] = [
  {
    id: "1",
    title: "React Component Library",
    description: "Open-source UI components with accessibility built-in",
    type: "Open Source",
    link: "#",
  },
  {
    id: "2",
    title: "CLI Tool for API Testing",
    description: "Terminal-based HTTP client with scripting support",
    type: "Developer Tool",
    link: "#",
  },
  {
    id: "3",
    title: "Generative Art Experiments",
    description: "Creative coding with p5.js and WebGL shaders",
    type: "Creative",
    link: "#",
  },
  {
    id: "4",
    title: "Tech Blog",
    description: "Writing about architecture, performance, and DX",
    type: "Writing",
    link: "#",
  },
  {
    id: "5",
    title: "VS Code Extension",
    description: "Productivity tools for faster development workflows",
    type: "Developer Tool",
    link: "#",
  },
];

export default function PlaySection() {
  return (
    <section id="play" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Play
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl">
            Side projects, experiments, and open-source contributions.
          </p>
        </div>

        <div className="border-t border-white/5">
          {playItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4 -mx-4"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 md:w-32 shrink-0">
                {item.type}
              </span>
              <h3 className="text-lg md:text-xl font-medium group-hover:text-neutral-200 transition-colors flex-1">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 md:w-80 shrink-0">
                {item.description}
              </p>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
