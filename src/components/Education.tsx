"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12 rounded-full" />
          
          <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
            {DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <span className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-slate-900 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                
                <div className="glass p-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <span className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      {edu.start ? `${edu.start} - ${edu.end}` : edu.end}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-300 mb-4">{edu.school}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
