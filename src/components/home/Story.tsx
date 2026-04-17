import Section from '../Section';
import { BRAND_DATA } from '../../data/madhurya';
import { motion } from 'motion/react';

export default function Story() {
  return (
    <Section id="philosophy" className="bg-brand-beige" editorial>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 block text-brand-black"
          >
            Est. 2009 — {BRAND_DATA.location}
          </motion.span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-brand-black mb-10 tracking-tighter">
            Sirf decoration nahi… <br />
            <span className="italic text-brand-gold lowercase italic-editorial">ehsaas create karna</span> <br />
            hamara maksad hai.
          </h2>
          <p className="text-brand-black/70 text-base leading-relaxed max-w-lg mb-10">
            {BRAND_DATA.philosophy.long}
          </p>
          <div className="grid grid-cols-2 gap-12 mt-12 border-t border-brand-black/5 pt-12">
            <div>
              <p className="text-4xl font-serif text-brand-black">15+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mt-2">Years of Legacy</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-brand-black">250+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mt-2">Curated Products</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden group bg-brand-beige-dark">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 shadow-xl"
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 pointer-events-none border-[30px] border-brand-beige-dark/50" />
          <div className="absolute inset-x-8 bottom-8 bg-brand-beige/90 backdrop-blur-sm p-8 shadow-sm">
            <p className="text-sm italic font-serif leading-relaxed text-brand-black lowercase tracking-tight">
              "Luxury is not what you see... it’s what you feel"
            </p>
          </div>
          <div className="absolute top-12 right-12 mix-blend-difference text-brand-beige text-[10px] uppercase tracking-[0.4em] font-bold vertical-rl rotate-180">
            Showroom Tour — Pure Madhurya
          </div>
        </div>
      </div>
    </Section>
  );
}
