"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 rounded-l-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experience
            </h2>
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
              <Briefcase size={24} />
            </div>
          </div>
          <div className="h-1 w-20 bg-blue-500 mb-12 rounded-full" />
          
          <div className="grid grid-cols-1 gap-8">
            {DATA.work.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                <div className="relative glass p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{work.title}</h3>
                        <h4 className="text-lg text-blue-400 font-medium">{work.company}</h4>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="text-sm font-medium text-slate-300 bg-slate-800 px-4 py-1.5 rounded-full">
                          {work.start} - {work.end}
                        </span>
                        <div className="flex gap-2">
                          {work.badges.map((badge, bIdx) => (
                            <span key={bIdx} className="text-xs font-medium text-cyan-300 bg-cyan-900/40 px-2 py-1 rounded-md border border-cyan-800/50">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
