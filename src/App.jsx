import React from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <motion.div
          aria-hidden
          className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-primary"
          style={{ scaleX: progress }}
        />
        <div aria-hidden className="grain" />

        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <Toaster />
      </div>
    </MotionConfig>
  );
}

export default App;
