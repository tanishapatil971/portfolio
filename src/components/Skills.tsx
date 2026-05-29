"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Layout, BrainCircuit, Database, Wrench } from "lucide-react";

const categoryIcons = {
  programming: Code,
  web: Layout,
  ai: BrainCircuit,
  databases: Database,
  tools: Wrench,
};

const categoryLabels = {
  programming: "Programming",
  web: "Web Development",
  ai: "AI & ML",
  databases: "Databases",
  tools: "Tools & DevOps",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof DATA.skills>("programming");

  return (
    <section id="skills" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Skills Arsenal
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12 rounded-full" />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Category Selector */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:w-64 shrink-0 no-scrollbar">
              {(Object.keys(DATA.skills) as Array<keyof typeof DATA.skills>).map((key) => {
                const Icon = categoryIcons[key];
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all text-left whitespace-nowrap",
                      isActive
                        ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        : "glass text-slate-400 hover:text-white hover:bg-slate-800/80"
                    )}
                  >
                    <Icon size={20} className={isActive ? "text-white" : "text-slate-500"} />
                    {categoryLabels[key]}
                  </button>
                );
              })}
            </div>

            {/* Skills Display */}
            <div className="flex-1 min-h-[300px]">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {DATA.skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="glass flex items-center justify-center p-4 rounded-xl text-slate-200 font-medium hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
