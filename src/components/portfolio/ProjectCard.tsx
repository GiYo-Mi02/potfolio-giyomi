"use client";

import { ArrowUpRight } from "lucide-react";
import CSSMockup from "./CSSMockup";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  mockupVariant: "dashboard" | "ecommerce" | "saas" | "mobile";
  accentColor: string;
  span: "1x1" | "2x1" | "2x2";
  problem: string;
  process: string;
  result: string;
  tech: string[];
  year: string;
  websiteUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const spanClasses = {
    "1x1": "col-span-1 row-span-1",
    "2x1": "col-span-1 md:col-span-2 row-span-1",
    "2x2": "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  };

  const heightClasses = {
    "1x1": "aspect-square md:aspect-square",
    "2x1": "aspect-square md:aspect-[2/1]",
    "2x2": "aspect-square md:aspect-square",
  };

  return (
    <button
      onClick={onClick}
      className={`${spanClasses[project.span]} group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl text-left`}
    >
      <div className={`w-full h-full ${heightClasses[project.span]} flex flex-col`}>
        {/* Mockup area */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105">
            <CSSMockup variant={project.mockupVariant} accentColor={project.accentColor} />
          </div>
          
          {/* Year badge - always visible */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`${project.accentColor} px-3 py-1 rounded-full text-xs font-mono font-semibold text-white shadow-lg`}>
              {project.year}
            </div>
          </div>
          
          {/* Tech stack overlay - shows on hover */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-md">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground border border-border hover:border-primary hover:scale-110 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="p-4 md:p-6 border-t border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className={`text-xs font-mono uppercase tracking-wider ${project.accentColor.replace("bg-", "text-")}`}>
                {project.category}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mt-1 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {project.description}
              </p>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-1 text-xs font-medium mt-2 ${project.accentColor.replace("bg-", "text-")} hover:underline group/link`}
                  aria-label={`Visit ${project.title} website`}
                >
                  <span className="relative">
                    Visit Site
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
