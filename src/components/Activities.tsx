"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Activity } from "lucide-react";

export function Activities() {
  return (
    <section id="activities" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Extracurricular Activities
            </h2>
          </div>
          <div className="h-1 w-20 bg-cyan-500 mb-12 rounded-full" />
          
          <div className="flex flex-wrap gap-4">
            {DATA.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass px-6 py-4 rounded-full flex items-center gap-3 border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <Activity size={18} className="text-cyan-400" />
                <span className="text-slate-200 font-medium">{activity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
