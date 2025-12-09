"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CSSMockup from "./CSSMockup";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
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
        <div className="flex-1 relative overflow-hidden bg-muted">
          {/* CSS Mockup - Default state */}
          <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-95">
            <CSSMockup variant={project.mockupVariant} accentColor={project.accentColor} />
          </div>
          
          {/* Actual Image - Reveals on hover */}
          <div className="absolute inset-0 opacity-0 scale-110 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100">
            <Image
              src={project.image}
              alt={`${project.title} mockup`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Year badge - always visible */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`${project.accentColor} px-3 py-1 rounded-full text-xs font-mono font-semibold text-white shadow-lg`}>
              {project.year}
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
