"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "GPT-4", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "p5.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/p5js/p5js-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const duplicatedStack = [...techStack, ...techStack];

export default function TechStackLoop() {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-muted/30">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-8 text-center">
        <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Technologies & Tools
        </h3>
      </div>

      {/* FIX: Added 'py-4' (padding-y-4) to this container. 
          This creates extra vertical space inside the overflow-hidden area,
          accommodating the upward movement on hover. */}
      <div 
        className="group relative flex overflow-hidden w-full select-none py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="flex flex-nowrap w-max animate-marquee">
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-3 pr-12 group/item cursor-pointer"
            >
              {/* The hover effect moves it up by 5px (y: -5) */}
              <motion.div 
                className="w-16 h-16 flex items-center justify-center p-3 rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain grayscale group-hover/item:grayscale-0 transition-all duration-300"
                  unoptimized
                />
              </motion.div>
              <span className="text-xs font-medium text-muted-foreground group-hover/item:text-foreground transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}