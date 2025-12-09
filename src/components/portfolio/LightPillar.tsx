"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function LightPillar() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effect - pillars move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main light pillars with parallax */}
      <motion.div
        className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        style={{ y: y1 }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent"
        style={{ y: y2 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
        style={{ y: y3 }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Horizontal gradient lines at intersections */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      {/* Glow effect around pillars */}
      <motion.div
        className="absolute top-0 left-1/4 w-40 h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent blur-3xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 w-48 h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-0 left-3/4 w-40 h-full bg-gradient-to-b from-transparent via-secondary/15 to-transparent blur-3xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
