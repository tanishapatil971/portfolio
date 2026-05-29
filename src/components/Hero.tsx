"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Code2, Download } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";
import Link from "next/link";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  code: FiCode,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
          >
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {DATA.name.toUpperCase()}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-medium"
          >
            AI/ML Engineer &bull; Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 max-w-lg leading-relaxed"
          >
            {DATA.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
            >
              View Projects
            </Link>
            <button className="px-6 py-3 rounded-lg glass flex items-center gap-2 text-white hover:bg-white/10 transition-colors border border-white/10 font-medium">
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 mt-8"
          >
            <span className="text-sm text-slate-500 font-medium mr-2">Connect:</span>
            {Object.entries(DATA.contact.social).map(([key, social]) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link
                  key={key}
                  href={social.url}
                  target="_blank"
                  className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700/50 hover:border-blue-500/50"
                  title={social.name}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700/50 hover:border-blue-500/50"
              title="Email"
            >
              <FiMail size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Right side animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Futuristic Engineering Visual (Orb/Network) */}
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-2xl animate-pulse" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-cyan-500/20"
            />
            <div className="absolute inset-8 rounded-full glass flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/40" />
               <Code2 size={64} className="text-blue-400 opacity-80" />
            </div>
            
            {/* Floating nodes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -15, 0], 
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ 
                  duration: 3 + i, 
                  repeat: Infinity,
                  delay: i * 0.5 
                }}
                className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
