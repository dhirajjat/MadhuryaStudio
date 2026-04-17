import Section from '../Section';
import { BRAND_DATA } from '../../data/madhurya';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <Section id="experience" className="bg-brand-beige" editorial>
      <div className="mb-24">
        <span className="text-brand-gold font-serif italic text-sm mb-4 block lowercase tracking-widest">
          Legacy — 15+ Years
        </span>
        <h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter">
          Crafting <span className="italic-editorial italic text-brand-gold">Atmospheres</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {BRAND_DATA.projects.map((project, index) => (
          <div key={project.id} className="relative group">
            <div className="overflow-hidden aspect-[16/10] mb-8 bg-brand-beige-dark p-6">
              <motion.img
                whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                transition={{ duration: 1.2 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 grayscale shadow-lg group-hover:shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] text-brand-black/40 mb-3 block">
                  Project Archive 0{index + 1} // {project.location}
                </span>
                <h3 className="font-serif text-3xl tracking-tight text-brand-black group-hover:italic transition-all">
                  {project.title}
                </h3>
              </div>
              <button className="text-[10px] uppercase tracking-[0.2em] border-b border-brand-black pb-1 font-bold hover:text-brand-gold hover:border-brand-gold transition-colors">
                Archive
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="mt-40 max-w-2xl border-t border-brand-black/10 pt-20">
        <p className="font-serif text-2xl md:text-4xl italic text-brand-black leading-[1.2] mb-10 lowercase tracking-tighter italic-editorial">
          "Each space is a new chapter of a story waiting to be told. We just provide the words, the colors, and the objects to tell it perfectly."
        </p>
        <div className="text-[10px] uppercase tracking-[0.4em] opacity-40">
          — The Madhurya Philosophy
        </div>
      </div>
    </Section>
  );
}
