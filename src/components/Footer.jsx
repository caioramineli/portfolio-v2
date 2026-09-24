import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { navItems } from '@/components/Navbar';
import { EASE } from '@/components/ui/motion';
import { useLocalTime } from '@/hooks/useLocalTime';

const socials = [
  { name: 'GitHub', href: 'https://github.com/caioramineli' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/caioramineli' },
  { name: 'WhatsApp', href: 'https://wa.me/5518996661215' },
  { name: 'Email', href: 'mailto:caiofrancoramineli3@gmail.com' },
];

const Footer = () => {
  const ref = useRef(null);
  const time = useLocalTime();
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['40%', '0%']);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-border pt-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="max-w-xs text-2xl font-medium leading-tight tracking-tight">
              Desenvolvedor full stack criando produtos web e automações com IA.
            </p>
          </div>

          <nav className="md:col-span-2 md:col-start-7" aria-label="Rodapé">
            <p className="eyebrow mb-4">Navegação</p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="link-underline text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Redes</p>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.name}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p className="eyebrow mb-4">Horário local</p>
            <p className="text-muted-foreground">
              {time} <span className="text-muted-foreground/60">GMT−3</span>
            </p>
            <p className="text-muted-foreground">Presidente Prudente, SP</p>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border py-6">
          <p className="eyebrow">&copy; {currentYear} Caio Ramineli</p>
          <a href="#home" className="eyebrow group flex items-center gap-2 transition-colors hover:!text-foreground">
            Voltar ao topo
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      <motion.p
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-center text-[21vw] font-medium leading-[0.75] tracking-[-0.07em] text-foreground/[0.06]"
        style={{ y: wordmarkY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        Ramineli
      </motion.p>
    </footer>
  );
};

export default Footer;
