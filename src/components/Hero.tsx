import { motion } from 'framer-motion';
import { Smartphone, Globe, Code2, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 max-w-5xl mx-auto pt-20">
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-xs text-neutral-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for innovative architectures
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold tracking-tight text-neutral-100"
        >
          Building Resilient <br />
          <span className="text-neutral-500">Mobile & Web Ecosystems</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-neutral-400 max-w-2xl leading-relaxed font-light"
        >
          Software Developer with over 7 years of experience crafting enterprise-grade mobile and web applications. Specializing in high-performance cross-platform setups, offline-first syncing, and highly robust financial systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-6 pt-4 text-neutral-400 text-sm"
        >
          <div className="flex items-center gap-2"><Smartphone size={18} className="text-neutral-600" /> Android / React Native / Flutter</div>
          <div className="flex items-center gap-2"><Globe size={18} className="text-neutral-600" /> React / Next.js</div>
          <div className="flex items-center gap-2"><Code2 size={18} className="text-neutral-600" /> Docker & Architecture</div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 flex items-center gap-2 text-xs text-neutral-600 tracking-widest uppercase cursor-pointer hover:text-neutral-400 transition-colors"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll Exploration</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}