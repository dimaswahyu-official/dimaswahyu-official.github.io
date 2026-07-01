import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';
import { JobExperience } from '../data/experience';

export default function ExperienceCard({ exp, index }: { exp: JobExperience; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  // Variasi animasi untuk memunculkan konten secara berurutan (staggered)
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      // Memberikan efek highlight background yang sangat halus saat kartu terbuka
      className={`border-b border-neutral-800 transition-colors duration-300 ${
        isOpen ? "bg-neutral-900/20" : "hover:bg-neutral-900/10"
      } last:border-0 rounded-xl mb-2`}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.99 }} // Efek taktil saat diklik
        className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-4 group p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-xl"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors">
              {exp.role}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                isOpen ? "bg-neutral-800 text-white" : "text-neutral-500 group-hover:bg-neutral-800/50 group-hover:text-neutral-300"
              }`}
            >
              <ChevronRight size={16} />
            </motion.div>
          </div>
          <p className="text-sm text-neutral-400 font-light">
            {exp.company} • <span className="text-neutral-500">{exp.type}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500 font-light">
          <div className="flex items-center gap-1.5 bg-neutral-900/50 px-2.5 py-1 rounded-md">
            <Calendar size={14} /> {exp.duration}
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900/50 px-2.5 py-1 rounded-md">
            <MapPin size={14} /> {exp.location} ({exp.setting})
          </div>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Easing yang lebih mulus
            className="overflow-hidden px-6"
          >
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pb-6 space-y-5 text-sm max-w-4xl"
            >
              {/* Deskripsi */}
              <motion.p variants={itemVariants} className="text-neutral-400 leading-relaxed font-light bg-neutral-900/30 p-4 rounded-lg border border-neutral-800/50">
                {exp.description}
              </motion.p>
              
              {/* Poin Kontribusi */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  Key Contributions
                </h4>
                <ul className="space-y-2.5 pl-4 border-l border-neutral-800">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="text-neutral-400 font-light leading-relaxed relative group/item">
                      {/* Indikator bullet point interaktif */}
                      <span className="absolute -left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-neutral-400 group-hover/item:scale-125 transition-all duration-300" />
                      <span className="group-hover/item:text-neutral-300 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tags/Tech Stack */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-3">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[11px] font-medium bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md hover:bg-neutral-800 hover:text-neutral-200 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}