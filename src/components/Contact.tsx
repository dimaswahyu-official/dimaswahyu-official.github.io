import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto border-t border-neutral-900 text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500">Get In Touch</h2>
        <p className="text-2xl md:text-4xl font-light text-neutral-300">Let's build reliable software systems together.</p>
      </div>

      <div className="flex justify-center gap-4">
        <motion.a 
          whileHover={{ y: -2 }}
          href="mailto:your.email@example.com" 
          className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-white text-black px-5 py-2.5 rounded text-sm font-medium transition-colors"
        >
          <Mail size={16} /> Contact Me
        </motion.a>
        
        <motion.a 
          whileHover={{ y: -2 }}
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white px-5 py-2.5 rounded text-sm transition-colors"
        >
          <Linkedin size={16} /> LinkedIn
        </motion.a>
      </div>
    </section>
  );
}