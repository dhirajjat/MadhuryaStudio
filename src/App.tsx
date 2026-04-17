/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Home Page Sections
import Hero from './components/home/Hero';
import Story from './components/home/Story';
import CategoryShowcase from './components/home/CategoryShowcase';
import Experience from './components/home/Experience';
import Contact from './components/home/Contact';

// Other Pages
import AboutPage from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <PageTransition>
      <Hero />
      <Story />
      <CategoryShowcase />
      <Experience />
      <Contact />
    </PageTransition>
  );
}

function AppContent() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-beige selection:bg-brand-gold selection:text-white min-h-screen flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/collection" element={<PageTransition><CategoryShowcase /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
