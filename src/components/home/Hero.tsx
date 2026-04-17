import { motion } from "motion/react";
import { BRAND_DATA } from "../../data/madhurya";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-brand-beige md:grid md:grid-cols-[80px_1.2fr_1fr]">
      {/* Side Rail Rail */}
      <aside className="hidden md:flex flex-col justify-between py-12 items-center border-r border-brand-black/10 min-h-screen sticky top-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="vertical-rl rotate-180 text-[11px] uppercase tracking-[0.2em] font-medium opacity-40"
        >
          Est. 2009 — {BRAND_DATA.location}
        </motion.div>

        <div className="flex flex-col gap-3">
          {[1, 0, 0, 0].map((active, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full border border-brand-black ${active ? "bg-brand-black" : "bg-transparent"}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="vertical-rl rotate-180 text-[11px] uppercase tracking-[0.2em] font-medium opacity-40"
        >
          {BRAND_DATA.name} Premium
        </motion.div>
      </aside>

      {/* Main Hero Content */}
      <main className="flex flex-col justify-center px-12 md:px-20 pt-40 pb-20 md:py-12 bg-brand-beige min-h-screen overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col h-full"
        >
          <div className="font-serif text-3xl mb-16 hidden md:block">
            {BRAND_DATA.nam}
          </div>

          <div className="text-brand-gold italic font-serif text-lg mb-4 lowercase tracking-wide">
            {BRAND_DATA.tagline}
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8">
            A world of curated living
          </h1>

          <p className="text-brand-black/70 text-base leading-relaxed max-w-sm mb-12">
            Central India's premier destination for extraordinary objects.
            Madhurya is both a landmark showroom and a master styling studio,
            trusted by the region's top designers.
          </p>

          <div className="flex flex-wrap gap-6 items-center mb-12">
            <Link
              to="/collection"
              className="bg-brand-black text-brand-beige px-8 py-4 text-[12px] uppercase tracking-widest font-semibold hover:bg-brand-gold transition-colors duration-500 shadow-xl"
            >
              Explore Collection
            </Link>
            <Link
              to="/about"
              className="text-[12px] uppercase tracking-widest font-semibold border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-all"
            >
              Our Philosophy
            </Link>
          </div>

          <div className="mt-auto pt-12 hidden md:flex justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40">
            <span>Handpicked Decor</span>
            <span>On-Site Styling</span>
            <span>Artificial Landscaping</span>
          </div>
        </motion.div>
      </main>

      {/* Visual Section & Stats */}
     <section className="hidden md:flex flex-col gap-10 p-10 bg-brand-beige-dark relative min-h-screen">

  {/* IMAGE BLOCK */}
  <div className="flex-1 bg-brand-visual-bg rounded-sm relative flex items-center justify-center overflow-hidden shadow-inner">

    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full relative group"
    >

      {/* IMAGE */}
      <div className="overflow-hidden w-full h-full">
        <img
          src="hero.png"
          alt="Main Artifact"
          referrerPolicy="no-referrer"
          className="
            w-full h-full object-cover 
            grayscale brightness-75 opacity-80 scale-100
            transition-all duration-1000 ease-out
            group-hover:grayscale-0 
            group-hover:brightness-100 
            group-hover:opacity-100 
            group-hover:scale-110
          "
        />
      </div>

      {/* OVERLAY BORDER (SAFE) */}
      <div className="absolute inset-0 border-[30px] border-brand-beige-dark/50 pointer-events-none" />

      {/* OPTIONAL DARK GRADIENT (premium feel) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

    </motion.div>

    {/* BOTTOM TEXT */}
    <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-widest font-bold text-brand-black/40">
      Living Spaces — Archive 2026
    </div>
  </div>

  {/* STATS SECTION */}
  <div className="grid grid-cols-2 gap-x-8 gap-y-8">
    {[
      { num: "15+", label: "Years of Legacy" },
      { num: "250+", label: "Curated Products" },
      { num: "Indore", label: "Flagship Location" },
      { num: "∞", label: "Unique Expressions" },
    ].map((stat, i) => (
      <div key={i} className="border-t border-brand-black/10 pt-4">
        <div className="font-serif text-2xl mb-1">{stat.num}</div>
        <div className="text-[9px] uppercase tracking-widest font-bold opacity-40">
          {stat.label}
        </div>
      </div>
    ))}
  </div>

</section>

      {/* Mobile Background Fallback */}
      <div className="md:hidden absolute inset-0 -z-10 bg-brand-beige-dark opacity-30">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
          alt="mobile-bg"
          className="w-full h-full object-cover grayscale opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
