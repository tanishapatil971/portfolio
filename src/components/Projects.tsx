"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

export function Projects() {
  const featuredProject = DATA.projects.find(p => p.featured);
  const otherProjects = DATA.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-500 mb-12 rounded-full" />
          
          {/* Featured Project - Large Showcase */}
          {featuredProject && (
            <div className="relative group mb-24">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass rounded-2xl overflow-hidden flex flex-col lg:flex-row">
                <div className="lg:w-3/5 min-h-[300px] bg-slate-800/50 relative overflow-hidden flex items-center justify-center">
                  {/* Placeholder for project image since no image was provided */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/80" />
                  <div className="text-6xl font-black text-white/10 rotate-[-15deg] scale-150 select-none">
                    {featuredProject.title.toUpperCase()}
                  </div>
                </div>
                <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-cyan-400 font-mono text-sm mb-2">Featured Project</h4>
                  <h3 className="text-3xl font-bold text-white mb-6">{featuredProject.title}</h3>
                  <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50 mb-6 text-slate-300 leading-relaxed z-10 relative -ml-0 lg:-ml-12 shadow-2xl">
                    {featuredProject.description}
                  </div>
                  <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-400 mb-8">
                    {featuredProject.technologies.map((tech, i) => (
                      <li key={i} className="bg-slate-800 px-3 py-1 rounded-md">{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {featuredProject.links.map((link, i) => (
                      <Link 
                        key={i} 
                        href={link.href}
                        target="_blank"
                        className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                      >
                        <FiGithub size={24} />
                        <span className="font-medium">View Source</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <h3 className="text-2xl font-bold text-white mb-8">AI/ML Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-cyan-500/50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div className="flex gap-3">
                    {project.links.map((link, i) => (
                      <Link 
                        key={i} 
                        href={link.href}
                        target="_blank"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <FiGithub size={20} />
                      </Link>
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-slate-500 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
