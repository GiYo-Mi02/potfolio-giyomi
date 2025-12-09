"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Project } from "./ProjectCard";
import Image from "next/image";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with mockup */}
        <div className="h-64 md:h-80 relative overflow-hidden rounded-t-3xl bg-muted">
          <Image
            src={project.image}
            alt={`${project.title} mockup`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`text-xs font-mono uppercase tracking-wider ${project.accentColor.replace("bg-", "text-")}`}>
              {project.category}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Case study sections */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Problem
              </h3>
              <p className="text-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Process
              </h3>
              <p className="text-foreground leading-relaxed">{project.process}</p>
            </div>
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Result
              </h3>
              <p className="text-foreground leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
