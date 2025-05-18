
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full hero-gradient opacity-70"></div>
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-900/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-purple-900/10 blur-3xl"></div>
      </div>

      <Navbar scrollY={scrollY} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
