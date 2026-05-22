import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { experiences } from './data/experience';

export default function App() {
  return (
    <div className="selection:bg-neutral-800 selection:text-white">
      {/* Background Soft Ambient Light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-neutral-900/20 to-transparent pointer-events-none filter blur-[120px]" />
      
      <Hero />
      
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-10">Professional History</h2>
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </section>

      <Skills />
      
      <Contact />
    </div>
  );
}