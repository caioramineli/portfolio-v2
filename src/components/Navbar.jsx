import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE, RollText } from '@/components/ui/motion';

export const navItems = [
  { name: 'Início', id: 'home' },
  { name: 'Sobre', id: 'about' },
  { name: 'Stack', id: 'skills' },
  { name: 'Projetos', id: 'projects' },
  { name: 'Contato', id: 'contact' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/caioramineli' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/caioramineli/' },
  { name: 'WhatsApp', href: 'https://wa.me/5518996661215' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    setHidden(latest > previous && latest > 400);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !isOpen ? 'bg-background/70 backdrop-blur-xl' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: hidden && !isOpen ? -100 : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <a href="#home" className="group relative z-10 flex items-center gap-2.5 text-[15px] font-medium tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground font-serif text-lg italic text-background transition-colors duration-500 group-hover:bg-primary">
              c
            </span>
            <RollText>Caio Ramineli</RollText>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Principal">
            <ul className="flex items-center rounded-full border border-border bg-background/60 p-1 backdrop-blur-md">
              {navItems.slice(1).map((item) => {
                const active = activeSection === item.id;
                return (
                  <li key={item.id} className="relative">
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-foreground/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? 'true' : undefined}
                      className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors ${
                        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a href="#contact" className="btn btn-primary group hidden !py-2.5 md:inline-flex">
            <RollText>Contrate-me</RollText>
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
          </a>

          <button
            type="button"
            className="relative z-10 flex items-center gap-3 text-sm md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="eyebrow !text-foreground">{isOpen ? 'Fechar' : 'Menu'}</span>
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-full bg-foreground transition-all duration-500 ${
                  isOpen ? 'top-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-foreground transition-all duration-500 ${
                  isOpen ? 'top-1/2 -rotate-45' : 'top-full'
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-background px-5 pb-8 pt-24 md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav aria-label="Menu mobile" className="flex-1">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={item.id} className="overflow-hidden">
                    <motion.a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-baseline gap-4 py-1 text-5xl font-medium tracking-[-0.04em] ${
                        activeSection === item.id ? 'text-primary' : 'text-foreground'
                      }`}
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.15 + index * 0.05 }}
                    >
                      <span className="font-mono text-xs tracking-normal text-muted-foreground">0{index + 1}</span>
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow flex items-center gap-1 !text-foreground"
                >
                  {social.name} <ArrowUpRight size={12} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
