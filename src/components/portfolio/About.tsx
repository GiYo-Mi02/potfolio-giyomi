"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern technologies",
    color: "text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative solutions to complex technical challenges",
    color: "text-yellow-500",
  },
  {
    icon: Rocket,
    title: "AI Integration",
    description: "Leveraging AI/ML to enhance user experiences",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and with clients",
    color: "text-green-500",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-float-slow delay-300" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="inline-block animate-blur-in">About Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I&apos;m <span className="text-foreground font-semibold">Gio</span>, a Full-Stack Developer with <span className="text-foreground font-semibold">2+ years of experience</span> shipping robust web applications.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Based in the Philippines, I bridge the gap between engineering and design, specializing in scalable solutions using <span className="text-foreground font-semibold">Next.js, React, and Node.js</span>.
            </p>
          </motion.div>

          {/* Right Column - Skills Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${skill.color} bg-current/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience & Education - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Quick Stats */}
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
            <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            
            <h3 className="text-2xl font-bold mb-6 text-foreground relative z-10">Quick Stats</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                <span className="text-muted-foreground">Projects Delivered</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50+</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                <span className="text-muted-foreground">Active Users Reached</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">10K+</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                <span className="text-muted-foreground">Years Experience</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">8+</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                <span className="text-muted-foreground">Technologies Mastered</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">18+</span>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Current Focus</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">AI Integration</span>
                  <span className="text-xs text-muted-foreground">Learning</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Full-Stack Dev</span>
                  <span className="text-xs text-muted-foreground">Expert</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">UI/UX Design</span>
                  <span className="text-xs text-muted-foreground">Proficient</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">DevOps & Cloud</span>
                  <span className="text-xs text-muted-foreground">Proficient</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
