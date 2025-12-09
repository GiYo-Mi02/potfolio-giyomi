"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Code2, Mail } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navItems = [
  { id: "home", icon: Home, label: "Home", href: "#" },
  { id: "work", icon: Briefcase, label: "Work", href: "#work" },
  { id: "play", icon: Code2, label: "Play", href: "#play" },
  { id: "contact", icon: Mail, label: "Contact", href: "#contact" },
];

export default function DockNav() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1 -translate-x-1/2 z-50 w-full flex justify-center"
    >
      <motion.div
        className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-full border border-border bg-background/95 backdrop-blur-xl shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Nav Items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => setActiveItem(item.id)}
                className="relative px-3 sm:px-4 py-2 rounded-full transition-colors duration-200 hover:bg-muted group touch-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navigate to ${item.label}`}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon className="w-5 h-5 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
                
                {/* Tooltip - appears above on bottom dock */}
                {activeItem === item.id && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground bg-card px-2 py-1 rounded border border-border whitespace-nowrap shadow-lg hidden sm:block"
                    role="tooltip"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Theme Switcher */}
        <div className="border-l border-border pl-1 sm:pl-2">
          <ThemeSwitcher />
        </div>

        {/* Status Indicator - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 border-l border-border pl-3 pr-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse" />
          <span className="text-xs font-mono text-muted-foreground">
            Available
          </span>
        </div>
      </motion.div>
    </motion.nav>
  );
}
