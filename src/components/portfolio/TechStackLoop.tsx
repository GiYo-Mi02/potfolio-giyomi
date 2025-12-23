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

// 1. Duplicate only once. This is enough for most screens given the item count.
const duplicatedStack = [...techStack, ...techStack];

export default function TechStackLoop() {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-muted/30">
      <div className="mb-8 text-center">
        <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Technologies & Tools
        </h3>
      </div>
      
      {/* Container must mask the overflow */}
      <div className="flex overflow-hidden w-full select-none"> {/* Added select-none for UX */}
        <motion.div
          // 2. Remove gap-12 here. We handle spacing on items to ensure the loop math is perfect.
          className="flex flex-nowrap min-w-full"
          animate={{
            x: "-50%", // 3. Move exactly 50% (the width of one full set)
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // 4. Slower speed for better readability
            ease: "linear",
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              // 5. Add pr-12 (padding-right) here to replace the parent gap
              className="flex-shrink-0 flex flex-col items-center gap-3 group pr-12"
              title={tech.name}
            >
              <div className="w-16 h-16 flex items-center justify-center p-3 rounded-2xl border border-border bg-card hover:border-primary transition-colors duration-300">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  unoptimized
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

       {/* Optional: Gradient fade edges for polish */}
       {/* Ensure parent section has `relative` to position these */}
    </section>
  );
}