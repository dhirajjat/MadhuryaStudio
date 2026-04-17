import Section from '../components/Section';
import { BRAND_DATA } from '../data/madhurya';

export default function AboutPage() {
  return (
    <div className=" bg-brand-beige min-h-screen">
      {/* Introduction — Zig (Text Left, Visual Right) */}
      <Section editorial>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="md:pr-10">
            <span className="text-brand-gold font-serif italic text-sm mb-4 block lowercase tracking-widest">
              Legacy — The Landmark
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-12 tracking-tighter">15 Years as the Expert Source</h1>
            <p className="font-serif text-2xl md:text-3xl italic text-brand-gold mb-12 leading-tight italic-editorial lowercase">
              "We don't just sell artifacts; we curate the identity of your home."
            </p>
            <div className="space-y-8 text-base text-brand-black/70 leading-relaxed">
              <p>{BRAND_DATA.philosophy.long}</p>
              <p className="font-bold text-brand-black">
                Madhurya is a hybrid of two worlds: a curated gallery of rare objects and a high-end styling studio. 
              </p>
            </div>
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden group bg-brand-beige-dark shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
            >
              <source src="video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none border-[20px] border-brand-beige-dark/50" />
            <div className="absolute bottom-8 left-8 vertical-rl rotate-180 text-[10px] uppercase tracking-[0.4em] opacity-40">
              Showroom Tour // Indore Flagship
            </div>
          </div>
        </div>
      </Section>

      {/* Showroom Depth — Zag (Visual Left, Text Right) */}
      <Section className="bg-white" editorial>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden artifact-mask bg-brand-beige-dark order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
              alt="Showroom Magnitude"
              className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 right-8 text-[10px] uppercase tracking-[0.4em] opacity-30 vertical-rl rotate-180">
              Archive Magnitude // 001
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-brand-gold font-serif italic text-sm mb-4 block lowercase tracking-widest">
              The Destination — Magnitude
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-12 tracking-tighter leading-none">Central India's Largest Showcase</h2>
            <div className="space-y-8">
              <p className="text-brand-black/70 leading-relaxed text-base italic-editorial italic">
                Madhurya is famous because of its monumental scale and uncompromising quality. Spanning thousands of square feet, our showroom in Indore is more than a store—it is a landmark destination. 
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-black/5">
                {BRAND_DATA.showroom?.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-serif text-3xl mb-1 text-brand-black">{stat.num}</div>
                    <div className="text-[9px] uppercase tracking-widest font-bold opacity-40 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Dual Roles — Zig (Text Left, Visual Right) */}
      <Section className="bg-brand-beige-dark text-brand-black" editorial>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.4em] mb-12 text-brand-gold font-bold">A Dual Legacy</h2>
            <div className="space-y-12">
              <div className="border-l border-brand-gold/30 pl-8">
                <div className="font-serif text-3xl mb-4 italic-editorial lowercase">01. The Destination Store</div>
                <p className="text-brand-black/70 leading-relaxed text-sm">
                  A massive hub for retail where unique objects are preserved. We source globally and curate locally, making us the primary suggestion for designers.
                </p>
              </div>
              <div className="border-l border-brand-gold/30 pl-8">
                <div className="font-serif text-3xl mb-4 italic-editorial lowercase">02. On-Site Styling</div>
                <p className="text-brand-black/70 leading-relaxed text-sm">
                  We don't just sell; we create. Our in-house stylists travel to your space to ensure that every object finds its perfect purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-brand-black p-4 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
              alt="Styling Studio"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center pointer-events-none">
              <div className="font-serif text-brand-beige text-2xl italic-editorial lowercase">"We curate the soul"</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
