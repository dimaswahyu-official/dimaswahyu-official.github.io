import { motion } from 'framer-motion';

const skills = [
  "React Native", "Android (Java)", "Flutter", "Next.js", "React", "Redux", 
  "TypeScript", "JavaScript (ES6+)", "REST APIs Integration", "Offline-First Sync", 
  "Role-Based Access Control (RBAC)", "Git & Version Control", "Docker Architecture"
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-neutral-900">
      <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-10">Capabilities & Tooling</h2>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, borderColor: "#525252", color: "#ffffff" }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded text-neutral-400 text-sm font-light cursor-default transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}