import Section from '../Section';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="bg-brand-beige-dark text-brand-black" editorial>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-brand-gold font-serif italic text-sm mb-4 block lowercase tracking-widest">
            Contact — Connect
          </span>
          <h2 className="font-serif text-6xl md:text-8xl mb-8 tracking-tighter leading-tight">
            Let’s start <br />
            your story.
          </h2>
          <p className="text-brand-black/50 text-base mb-12 max-w-sm leading-relaxed">
            Ready to transform your sanctuary? Visit our showroom in Indore or connect with our stylists online.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="mailto:hello@madhurya.com" className="group flex items-center justify-between border-b border-brand-black/10 py-5 hover:border-brand-gold transition-colors">
              <span className="flex items-center gap-4 text-xl font-serif tracking-tight">
                <Mail size={20} className="text-brand-gold" />
                Email us
              </span>
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-gold" />
            </a>
            <a href="#" className="group flex items-center justify-between border-b border-brand-black/10 py-5 hover:border-brand-gold transition-colors">
              <span className="flex items-center gap-4 text-xl font-serif italic-editorial italic tracking-tight">
                WhatsApp Connect
              </span>
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-gold" />
            </a>
          </div>
        </div>

        <div className="bg-brand-beige p-12 flex flex-col items-center justify-center text-center gap-10 border border-brand-black/5 shadow-sm">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-gold">Visit the Showroom</h3>
          <div>
            <p className="font-serif text-3xl leading-snug mb-2">
              Central India’s largest artifact destination.
            </p>
            <span className="text-xs font-sans tracking-[0.3em] uppercase opacity-40">Indore, India</span>
          </div>
          <div className="w-12 h-[1px] bg-brand-gold" />
          <button className="bg-brand-black text-brand-beige px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors duration-500 shadow-lg">
            Get Directions
          </button>
        </div>
      </div>
    </Section>
  );
}
