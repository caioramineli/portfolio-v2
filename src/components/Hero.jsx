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
    <section id="home" className="relative flex min-h-screen items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="w-full space-y-6 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Desenvolvedor Full Stack
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Olá, eu sou <span className="gradient-text">Caio Ramineli</span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transformando ideias em experiências digitais excepcionais. Especializado em desenvolvimento web moderno e criação de aplicações intuitivas e de alto desempenho.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button 
                className="gradient-border" 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Entre em contato
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/20" 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ver projetos
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <a href="https://github.com/caioramineli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/caioramineli/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/5518996661215" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Whatsapp size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="flex w-full justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-full p-1 md:h-96 md:w-96">
              <img className="h-full w-full rounded-full object-cover" alt="Retrato do Desenvolvedor Caio Ramineli" src={myPhoto} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-x-0 -bottom-2 mx-auto flex flex-col items-center md:bottom-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <span className="mb-2 text-sm text-muted-foreground">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Rolar para a seção Sobre">
              <ArrowDown size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;