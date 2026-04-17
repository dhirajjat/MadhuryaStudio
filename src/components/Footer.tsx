import { BRAND_DATA } from '../data/madhurya';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-beige-dark text-brand-black py-24 px-6 md:px-12 border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="md:col-span-1">
          <h2 className="font-serif text-3xl mb-6 tracking-tighter">{BRAND_DATA.name}</h2>
          <p className="text-brand-black/50 text-sm leading-relaxed max-w-xs">
            {BRAND_DATA.philosophy.short}
          </p>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-black/40">Navigation</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline">Home</a></li>
            <li><a href="#philosophy" className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline">Philosophy</a></li>
            <li><a href="#collection" className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline">Collection</a></li>
            <li><a href="#experience" className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline">Experience</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-black/40">Contact</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-4">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-brand-gold" />
              <span>{BRAND_DATA.location}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="flex-shrink-0 text-brand-gold" />
              <span>+91 99999 00000</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={16} className="flex-shrink-0 text-brand-gold" />
              <span>hello@madhurya.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-brand-black/40">Connect</h3>
          <div className="flex gap-6">
            <a href="https://instagram.com/madhuryaartifacts" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-beige border border-brand-black/5 rounded-full hover:text-brand-gold transition-colors shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-8 text-xs font-bold uppercase tracking-widest self-center">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-black/30">
        <p>© 2026 {BRAND_DATA.name}. All rights reserved.</p>
        <p>Crafted for emotional spaces</p>
      </div>
    </footer>
  );
}
