import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';
import { JobExperience } from '../data/experience';

export default function ExperienceCard({ exp, index }: { exp: JobExperience; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0); // Open first card by default

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-neutral-800 py-6 last:border-0"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-4 group"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors">
              {exp.role}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-600 group-hover:text-neutral-400"
            >
              <ChevronRight size={18} />
            </motion.div>
          </div>
          <p className="text-sm text-neutral-400 font-light">
            {exp.company} • <span className="text-neutral-500">{exp.type}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 font-light">
          <div className="flex items-center gap-1"><Calendar size={14} /> {exp.duration}</div>
          <div className="flex items-center gap-1"><MapPin size={14} /> {exp.location} ({exp.setting})</div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-4 text-sm max-w-4xl">
              <p className="text-neutral-400 leading-relaxed font-light bg-neutral-950/50 p-3 rounded border border-neutral-900">
                {exp.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Key Contributions</h4>
                <ul className="space-y-2 pl-4 border-l border-neutral-800">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="text-neutral-400 font-light leading-relaxed relative">
                      <span className="absolute -left-[21px] top-2 w-1 h-1 rounded-full bg-neutral-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}