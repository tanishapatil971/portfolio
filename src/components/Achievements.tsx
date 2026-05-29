"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Achievements
            </h2>
          </div>
          <div className="h-1 w-20 bg-blue-500 mb-12 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass p-6 rounded-xl flex items-start gap-4 border border-blue-500/10 hover:border-blue-500/40 transition-colors"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0 mt-1">
                  <Award size={20} />
                </div>
                <p className="text-slate-300 font-medium leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
