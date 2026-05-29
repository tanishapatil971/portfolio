"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 mb-8 rounded-full" />
          
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            {DATA.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
