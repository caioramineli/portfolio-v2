import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Whatsapp } from './ui/whatsappIcon';
import myPhoto from '../assets/foto.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Desenvolvedor Full Stack
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, eu sou <span className="gradient-text">Caio Ramineli</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Transformando ideias em experiências digitais excepcionais. Especializado em desenvolvimento web moderno e criação de aplicações intuitivas e de alto desempenho.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button className="gradient-border" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Entre em contato
              </Button>
              <Button variant="outline" className="border-primary/20" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                Ver projetos
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <a href="https://github.com/caioramineli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/caioramineli/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/5518996661215" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Whatsapp size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden p-4">
              <img className="w-full h-full rounded-full object-cover" alt="Developer portrait" src={myPhoto} fetchpriority="high" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute -bottom-2 md:bottom-10 inset-x-0 mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <Button variant="ghost" size="icon" onClick={scrollToAbout}>
              <ArrowDown size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;