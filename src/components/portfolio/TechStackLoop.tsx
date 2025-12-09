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

// Duplicate multiple times for seamless infinite loop
const duplicatedStack = [...techStack, ...techStack, ...techStack];

export default function TechStackLoop() {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-muted/30">
      <div className="mb-8 text-center">
        <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Technologies & Tools
        </h3>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-3 group"
              title={tech.name}
            >
              <div className="w-16 h-16 flex items-center justify-center p-3 rounded-2xl border border-border bg-card hover:border-primary hover:scale-110 transition-all duration-300">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  unoptimized
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
