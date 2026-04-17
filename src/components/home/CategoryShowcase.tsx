import Section from '../Section';
import { BRAND_DATA } from '../../data/madhurya';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CategoryShowcase() {
  return (
    <Section id="collection" className="bg-brand-beige-dark text-brand-black" fullWidth>
      <div className="max-w-7xl mx-auto mb-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-end gap-8">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-4 tracking-tighter">Our Collection</h2>
          <p className="text-brand-black/40 text-sm tracking-[0.2em] uppercase">Curated by Hand, Chosen by Heart</p>
        </div>
        <div className="hidden md:block text-right pb-2">
          <p className="text-brand-gold italic font-serif text-lg tracking-tight">Explore the Extraordinary</p>
        </div>
      </div>

      <div className="flex flex-col gap-0 border-t border-brand-black/5">
        {BRAND_DATA.categories.map((category, index) => (
          <div
            key={category.id}
            className="group relative min-h-[70vh] w-full flex items-center overflow-hidden border-b border-brand-black/5 hover:bg-white transition-colors duration-700"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-center px-6 md:px-12 z-10 py-20">
              <div className="hidden md:block font-serif text-2xl opacity-20">
                0{index + 1}
              </div>

              <div className="mb-8 md:mb-0 md:pr-20">
                <span className="text-brand-gold font-serif italic text-sm mb-4 block lowercase tracking-widest">
                  Category — 0{index + 1}
                </span>
                <h3 className="font-serif text-4xl md:text-6xl mb-6 group-hover:italic transition-all duration-500 tracking-tighter">
                  {category.title}
                </h3>
                <p className="text-brand-black/60 max-w-sm mb-10 leading-relaxed text-sm">
                  {category.description}
                </p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold group/btn border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
                    View Chapter
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="flex justify-end items-center relative h-full">
                <div className="relative w-full aspect-[4/5] md:w-[320px] overflow-hidden artifact-mask bg-brand-visual-bg">
                  <motion.img
                    whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                    transition={{ duration: 1.2 }}
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover grayscale transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Architectural Badge */}
                <div className="hidden lg:block absolute -right-4 bottom-12 vertical-rl rotate-180 text-[9px] uppercase tracking-[0.4em] opacity-30">
                  Madhurya Curated Archives
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
