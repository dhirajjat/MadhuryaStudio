import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_DATA } from '../data/madhurya';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collection', href: '/collection' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-8 px-6 md:px-12 flex items-center justify-between',
        isScrolled ? 'bg-brand-beige/80 backdrop-blur-md py-6 border-b border-brand-black/5' : 'bg-transparent'
      )}
    >
      <Link to="/" className="flex-shrink-0 group">
        <h1 className="font-serif text-3xl tracking-tighter text-brand-black group-hover:italic transition-all">
          {BRAND_DATA.name}
        </h1>
      </Link>

      <div className="flex-1 hidden md:flex justify-end items-center gap-12">
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black hover:text-brand-gold transition-colors relative group",
                location.pathname === link.href && "text-brand-gold"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full",
                location.pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 text-brand-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-brand-beige z-50 p-12 flex flex-col justify-center items-center gap-8 md:hidden shadow-2xl"
          >
            <button 
              className="absolute top-8 right-8 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif tracking-tighter hover:text-brand-gold text-brand-black"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-12 vertical-rl rotate-180 text-[10px] uppercase tracking-[0.4em] opacity-40">
              Est. 2009 — {BRAND_DATA.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
