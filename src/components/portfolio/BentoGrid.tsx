"use client";

import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";

const projects: Project[] = [
  {
    id: "1",
    title: "Analytics Dashboard",
    category: "Web Application",
    description: "Real-time analytics platform with customizable widgets and data visualization for enterprise clients.",
    mockupVariant: "dashboard",
    accentColor: "bg-blue-500",
    span: "2x2",
    problem: "Enterprise clients needed a unified view of their data across multiple sources, but existing solutions were either too complex or lacked real-time capabilities.",
    process: "Built a modular widget system using React and D3.js, with WebSocket connections for live data streaming. Implemented a drag-and-drop interface for dashboard customization.",
    result: "Reduced data analysis time by 60% and increased user engagement by 45%. Now serving 50+ enterprise clients with 99.9% uptime.",
    tech: ["React", "TypeScript", "D3.js", "WebSocket", "PostgreSQL", "Redis"],
    year: "2024",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Headless commerce solution with advanced inventory management and multi-currency support.",
    mockupVariant: "ecommerce",
    accentColor: "bg-purple-500",
    span: "1x1",
    problem: "Traditional e-commerce platforms couldn't handle the client's complex inventory across 12 warehouses and 8 currencies.",
    process: "Designed a headless architecture with Next.js frontend and Node.js microservices. Implemented event-driven inventory sync using Apache Kafka.",
    result: "Processed $2M+ in transactions within first quarter. Inventory accuracy improved from 87% to 99.5%.",
    tech: ["Next.js", "Node.js", "Kafka", "Stripe", "MongoDB"],
    year: "2024",
  },
  {
    id: "3",
    title: "SaaS Landing Page",
    category: "Marketing",
    description: "High-converting landing page with A/B testing infrastructure and analytics integration.",
    mockupVariant: "saas",
    accentColor: "bg-emerald-500",
    span: "1x1",
    problem: "Startup needed to validate product-market fit quickly with limited budget for marketing experiments.",
    process: "Created a component-based landing page system with built-in A/B testing. Integrated with analytics for real-time conversion tracking.",
    result: "Achieved 12% conversion rate (3x industry average). Reduced time-to-test new variants from days to hours.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "PostHog"],
    year: "2023",
  },
  {
    id: "4",
    title: "Mobile Banking App",
    category: "Mobile",
    description: "Secure mobile banking experience with biometric authentication and instant transfers.",
    mockupVariant: "mobile",
    accentColor: "bg-yellow-500",
    span: "1x1",
    problem: "Legacy banking app had poor UX and security vulnerabilities. Customer complaints were increasing 20% month-over-month.",
    process: "Rebuilt from scratch using React Native with a focus on security-first architecture. Implemented biometric auth and end-to-end encryption.",
    result: "App store rating improved from 2.1 to 4.8 stars. Security incidents reduced to zero. User adoption increased 300%.",
    tech: ["React Native", "TypeScript", "Node.js", "AWS"],
    year: "2023",
  },
  {
    id: "5",
    title: "Developer Portal",
    category: "Documentation",
    description: "Interactive API documentation with live code examples and SDK generation.",
    mockupVariant: "dashboard",
    accentColor: "bg-orange-500",
    span: "2x1",
    problem: "Developer onboarding took 2+ weeks due to scattered documentation and lack of interactive examples.",
    process: "Built a unified portal with MDX-based docs, interactive API playground, and automated SDK generation from OpenAPI specs.",
    result: "Developer onboarding time reduced to 2 days. API adoption increased 150% within 6 months.",
    tech: ["Next.js", "MDX", "OpenAPI", "Prism", "Docker"],
    year: "2023",
  },
];

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl">
            A curated collection of projects that showcase technical depth and design sensibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
