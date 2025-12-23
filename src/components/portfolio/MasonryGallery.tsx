"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Count up animation hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

const highlights = [
  {
    id: 1,
    type: "image",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    title: "Code & Design",
    color: "bg-gradient-to-br from-blue-500/40 to-purple-500/40 dark:from-blue-500/20 dark:to-purple-500/20",
    span: "row-span-3 col-span-1 md:col-span-2",
  },
  {
    id: 2,
    type: "stat",
    title: "50+",
    subtitle: "Active Users",
    color: "bg-blue-500/30 dark:bg-blue-500/20",
    span: "row-span-2",
  },
  {
    id: 3,
    type: "image",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    title: "Collaborative Work",
    color: "bg-gradient-to-br from-emerald-500/40 to-cyan-500/40 dark:from-emerald-500/20 dark:to-cyan-500/20",
    span: "row-span-2",
  },
  {
    id: 4,
    type: "stat",
    title: "30+",
    subtitle: "Projects Completed",
    color: "bg-purple-500/30 dark:bg-purple-500/20",
    span: "row-span-2",
  },
  {
    id: 5,
    type: "quote",
    title: "Building the future, one line at a time",
    color: "bg-emerald-500/30 dark:bg-emerald-500/20",
    span: "row-span-2 col-span-1 md:col-span-2",
  },
  {
    id: 6,
    type: "image",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    title: "Innovation",
    color: "bg-gradient-to-br from-orange-500/40 to-pink-500/40 dark:from-orange-500/20 dark:to-pink-500/20",
    span: "row-span-3",
  },
  {
    id: 7,
    type: "stat",
    title: "70%",
    subtitle: "Performance Boost",
    color: "bg-orange-500/30 dark:bg-orange-500/20",
    span: "row-span-2",
  },
  {
    id: 8,
    type: "skill",
    title: "Full-Stack Development",
    items: ["Frontend", "Backend", "Database", "AI Integration", "DevOps", "Security", "Systems Design"],
    color: "bg-cyan-500/30 dark:bg-cyan-500/20",
    span: "row-span-3",
  },
  {
    id: 9,
    type: "image",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    title: "Creative Solutions",
    color: "bg-gradient-to-br from-pink-500/40 to-purple-500/40 dark:from-pink-500/20 dark:to-purple-500/20",
    span: "row-span-2 col-span-1 md:col-span-2",
  },
  {
    id: 10,
    type: "stat",
    title: "2025",
    subtitle: "Year of Innovation",
    color: "bg-pink-500/30 dark:bg-pink-500/20",
    span: "row-span-2",
  },
];

// Stat card component with count-up animation
function StatCard({ item }: { item: typeof highlights[0] }) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract number from title (e.g., "10K+" -> 10000, "7+" -> 7, "40%" -> 40, "2025" -> 2025)
  const numericValue = item.title?.match(/\d+/)?.[0];
  const number = numericValue ? parseInt(numericValue, 10) : 0;
  const suffix = item.title?.replace(/\d+/, "") || "";
  
  const count = useCountUp(number, 2000, isVisible);

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="flex flex-col justify-center h-full p-6"
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
        {count}{suffix}
      </h3>
      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
    </motion.div>
  );
}

export default function MasonryGallery() {
  return (
    <section className="py-32 px-6 relative">
      {/* Decorative overlay */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="inline-block animate-blur-in">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in delay-200">
            Key achievements and metrics that define my work
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[100px]">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`${item.span} ${item.color} rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 group hover:scale-[1.02] cursor-pointer relative`}
            >
              {item.type === "image" && (
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image!}
                    alt={item.title!}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-background/90 dark:via-background/50 dark:to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-2xl">{item.title}</h3>
                  </div>
                </div>
              )}

              {item.type === "stat" && <StatCard item={item} />}

              {item.type === "quote" && (
                <div className="flex items-center justify-center h-full p-6">
                  <p className="text-xl md:text-2xl font-semibold text-center leading-tight">
                    {item.title}
                  </p>
                </div>
              )}

              {item.type === "skill" && (
                <div className="flex flex-col justify-center h-full p-6">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.items?.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
