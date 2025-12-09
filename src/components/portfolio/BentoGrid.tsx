"use client";

import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";

const projects: Project[] = [
  {
    id: "1",
    title: "Interactive DSA Learning Platform",
    category: "Web Application",
    description: "An engaging platform to teach data structures and algorithms through interactive visualizations and coding challenges.",
    image: "/InteractiveDSAMockUp.png",
    mockupVariant: "dashboard",
    accentColor: "bg-blue-500",
    websiteUrl: "https://interactive-dsa-fawn.vercel.app/",
    span: "2x2",
    problem: "Students struggled to grasp complex data structures and algorithms concepts through traditional learning methods.",
    process: "Developed a web app using React for the frontend and Node.js for the backend. Integrated p5.js for dynamic visualizations and WebSocket for real-time code execution feedback.",
    result: "Increased student engagement by 40% and improved test scores by an average of 25%. The platform is now used by over 5,000 students worldwide.",
    tech: ["Next.js", "React", "TypeScript", "p5.js", "GPT-4o", "Redis"],
    year: "2025",
  },
  {
    id: "2",
    title: "SnapNotes AI",
    category: "Full Stack",
    description: "A mobile and web application that leverages AI to convert Online Meeting discussions into organized, searchable digital notes that summarizes and generates quizzes.",
    image: "/SnapNotesMockUp.png",
    mockupVariant: "mobile",
    accentColor: "bg-purple-500",
    websiteUrl: "https://snap-noting-ai-ybs6.vercel.app/",
    span: "1x1",
    problem: "Traditional note-taking methods were inefficient and lacked integration with AI for enhanced productivity.",
    process: "Built a cross-platform app using Next.js for the web. Integrated Deepseek OCR for text extraction from images and OpenAI's GPT-4o for summarization and quiz generation.",
    result: "Achieved a 30% increase in user productivity and a 50% reduction in note-taking time. The app has over 10,000 active users and received positive feedback for its AI capabilities.",
    tech: [ "Next.js", "Node.js", "TypeScript", "Deepseek OCR", "Supabase", "OpenAI GPT-4o" ],
    year: "2025",
  },
  {
    id: "3",
    title: "Mr. and Ms. UMak Tabulation System",
    category: "Web Application",
    description: "A custom web-based tabulation system for managing and scoring the Mr. and Ms. University of Makati pageant.",
    image: "/MMUTabulationSystemMockUp.png",
    mockupVariant: "saas",
    accentColor: "bg-emerald-500",
    websiteUrl: "https://github.com/GiYo-Mi02/MMU-TabulationSystem",
    span: "1x1",
    problem: "Manual tabulation processes led to errors and delays in announcing results during the pageant event.",
    process: "Developed a web application using React.js and Tailwind CSS for the frontend, with a Node.js backend. Implemented real-time scoring updates and secure data handling.",
    result: "Streamlined the tabulation process, reducing errors by 90% and cutting result announcement time in half. The system was praised for its reliability and ease of use.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Express.js"],
    year: "2025",
  },
  {
    id: "4",
    title: "Resume AI Analyzer",
    category: "Web Application",
    description: "A Web Application app that uses AI to analyze resumes, providing feedback on formatting, keyword optimization, and overall effectiveness for job applications.",
    image: "/ResumeAnalyzerMockUp.png",
    mockupVariant: "mobile",
    accentColor: "bg-yellow-500",
    websiteUrl: "https://ai-resume-analyzer-jade.vercel.app/",
    span: "1x1",
    problem: "Resumes were often poorly formatted and lacked keyword optimization, leading to lower chances of passing automated screening.",
    process: "Created a Web Application using React.js. Integrated Puter.js to analyze resume content and provide actionable feedback. Implemented a user-friendly interface for easy resume uploads and reviews.",
    result: "Users reported a 35% increase in interview callbacks after utilizing the AI feedback. The app has been adopted by several university career centers to assist students in resume building.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Puter.js"],
    year: "2025",
  },
   {
    id: "5",
    title: "Logistics Management",
    category: "Full Stack",
    description: "A comprehensive logistics management system designed to optimize supply chain operations, track shipments, and manage inventory in real-time.",
    image: "/LogisticsManagementMockUp.png",
    mockupVariant: "dashboard",
    accentColor: "bg-yellow-500",
    websiteUrl: "https://logistics-system-one.vercel.app/",
    span: "1x1",
    problem: "Inefficient supply chain operations and lack of real-time shipment tracking caused delays and inventory mismanagement.",
    process: "Developed a Web Application using React.js. Integrated Puter.js to analyze resume content and provide actionable feedback. Implemented a user-friendly interface for easy resume uploads and reviews.",
    result: "Reduced delivery times by 20% and improved inventory accuracy by 30%. The system has been adopted by multiple logistics companies to enhance their operations.",
    tech: ["Next.js" , "React.js" , "Tailwind CSS", "Node.js", "Supabase", "Redis Cache"],
    year: "2025",
  },
  {
    id: "6",
    title: "Web Based Photobooth Application",
    category: "Web Application",
    description: "A web-based photobooth application that allows users to capture, customize, and share photos with various filters and overlays in real-time.",
    image: "/WebAppPhotoboothMockUp.png",
    mockupVariant: "ecommerce",
    accentColor: "bg-orange-500",
    websiteUrl: "https://github.com/GiYo-Mi02/My-Photobooth",
    span: "2x1",
    problem: "Users wanted a fun and interactive way to capture memories at events without needing physical photobooths.",
    process: "Developed a web application using React.js and Tailwind CSS. Integrated real-time photo capture, customization options, and social sharing features.",
    result: "Increased event engagement by 40%. The app was used in over 50 events within the first year, receiving positive user feedback for its ease of use and features.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    year: "2025",
  },
  {
    id: "7",
    title: "CCIS Ticket Automation System",
    category: "Automation",
    description: "A ticket automation system designed for the College of Computer and Information Sciences (CCIS) to streamline Tickets Entry, tracking, and QR Scan processes.",
    image: "/CCISTicketingSystemMockUp.png",
    mockupVariant: "saas",
    accentColor: "bg-orange-500",
    websiteUrl: "https://github.com/GiYo-Mi02/CCIS-Automation-Ticket",
    span: "2x1",
    problem: "Manual ticket entry and tracking processes were time-consuming and prone to errors, causing delays and inefficiencies.",
    process: "Developed a web application using React.js and Tailwind CSS. Implemented automated ticket entry, real-time tracking, and QR code scanning functionalities to enhance user experience.",
    result: "Reduced ticket processing time by 50% and minimized errors by 80%. The system has been successfully implemented in CCIS events, improving overall efficiency and user satisfaction.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    year: "2025",
  },
   
  
];

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 px-6 relative">
      {/* Decorative overlays */}
      <div className="absolute top-0 right-20 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-float delay-500" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="inline-block animate-blur-in">Selected Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl animate-fade-in delay-200">
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
