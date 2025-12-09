"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DecryptText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()";
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <span>{displayText}</span>;
};

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Hide loading screen after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="text-center space-y-8">
            {/* Animated logo/name */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-black dark:text-white font-mono">
                  <DecryptText text="Gio Joshua Gonzales" />
                </span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 sm:w-80 mx-auto">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full "
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-muted-foreground mt-3 font-mono"
              >
                {progress}%
              </motion.p>
            </div>

            {/* Spinning loader */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 mx-auto border-2 border-primary border-t-black dark:border-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
