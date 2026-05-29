"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative text-center flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Get In Touch
          </h2>
          
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I&apos;m currently open for internship opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <FiMail size={24} />
            Say Hello
          </Link>
          
          <div className="flex items-center justify-center gap-8 mt-16">
            <Link 
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              className="text-slate-500 hover:text-blue-500 transition-colors flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                <FiLinkedin size={28} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
            
            <Link 
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              className="text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-2 group"
            >
              <div className="p-4 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                <FiGithub size={28} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
