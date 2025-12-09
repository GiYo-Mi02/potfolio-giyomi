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
    title: "Interactive DSA Visualizations",
    description: "Exploring p5.js for dynamic algorithm animations and learning tools",
    type: "Creative Coding",
    link: "https://interactive-dsa-fawn.vercel.app/",
  },
  {
    id: "2",
    title: "AI Integration Experiments",
    description: "Building with OpenAI GPT-4o, Deepseek OCR, and Puter.js",
    type: "AI/ML",
    link: "https://snap-noting-ai-ybs6.vercel.app/",
  },
  {
    id: "3",
    title: "Real-time Web Applications",
    description: "Experimenting with WebSocket, Redis, and Supabase for live features",
    type: "Full Stack",
    link: "https://logistics-system-one.vercel.app/",
  },
  {
    id: "4",
    title: "Event Tech Solutions",
    description: "Custom systems for university events and pageants",
    type: "Open Source",
    link: "https://github.com/GiYo-Mi02/MMU-TabulationSystem",
  },
  {
    id: "5",
    title: "Web-Based Creative Tools",
    description: "Building interactive photobooth and media capture applications",
    type: "Creative",
    link: "https://github.com/GiYo-Mi02/My-Photobooth",
  },
];

export default function PlaySection() {
  return (
    <section id="play" className="py-32 px-6 border-t border-border relative">
      {/* Decorative overlays */}
      <div className="absolute top-40 right-10 w-56 h-56 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float-slow delay-300" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="inline-block animate-blur-in">Play</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl animate-fade-in delay-200">
            Side projects, experiments, and open-source contributions.
          </p>
        </div>

        <div className="border-t border-border">
          {playItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-border hover:bg-muted/50 transition-all duration-300 px-4 -mx-4 hover:translate-x-2"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground md:w-32 shrink-0">
                {item.type}
              </span>
              <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors flex-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground md:w-80 shrink-0">
                {item.description}
              </p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
