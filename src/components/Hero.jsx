import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { EASE, Magnetic, RevealWords, RollText } from '@/components/ui/motion';
import { useLocalTime } from '@/hooks/useLocalTime';
import myPhoto from '../assets/foto.jpg';

const letterVariants = {
  hidden: { y: '105%' },
  visible: { y: '0%', transition: { duration: 1.1, ease: EASE } },
};

const SplitLetters = ({ text, className = '', delay = 0 }) => (
  <motion.span
    className={`block overflow-hidden pb-[0.06em] ${className}`}
    initial="hidden"
    animate="visible"
    transition={{ staggerChildren: 0.045, delayChildren: delay }}
  >
    {text.split('').map((letter, i) => (
      <motion.span key={i} className="inline-block" variants={letterVariants}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const RotatingBadge = () => (
  <a
    href="#contact"
    aria-label="Disponível para novos projetos. Ir para contato"
    className="group relative grid h-28 w-28 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-black/40 transition-transform duration-500 hover:scale-105 lg:h-32 lg:w-32"
  >
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
      <defs>
        <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
      </defs>
      <text className="fill-current font-mono text-[9.5px] uppercase" letterSpacing="2.2">
        <textPath href="#badge-circle">Disponível p/ projetos • Full stack • </textPath>
      </text>
    </svg>
    <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
  </a>
);

const Hero = () => {
  const ref = useRef(null);
  const time = useLocalTime();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[100svh] flex-col pb-8 pt-24 md:pt-28">
      <div aria-hidden className="hairline-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="container relative flex flex-1 flex-col">
        <motion.div
          className="eyebrow grid gap-y-2 border-b border-border pb-4 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span>Desenvolvedor full stack</span>
          <span className="hidden md:block">Presidente Prudente — SP</span>
          <span className="hidden md:block">
            {time} <span className="text-muted-foreground/60">· GMT−3</span>
          </span>
          <span className="flex items-center gap-2 md:justify-end">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponível para projetos
          </span>
        </motion.div>

        <div className="grid flex-1 items-center gap-10 py-10 md:grid-cols-12 md:py-14">
          <motion.h1
            className="text-[clamp(4.5rem,22vw,8rem)] font-medium md:text-[clamp(4.5rem,15vw,13.5rem)] leading-[0.86] tracking-[-0.055em] md:col-span-8"
            style={{ y: nameY }}
          >
            <span className="sr-only">Caio Ramineli</span>
            <span aria-hidden>
              <SplitLetters text="Caio" delay={0.2} />
              <SplitLetters
                text="Ramineli"
                delay={0.4}
                className="-mt-[0.04em] font-serif font-normal italic tracking-[-0.03em] text-primary md:pl-[0.6em]"
              />
            </span>
          </motion.h1>

          <motion.div className="hidden md:col-span-4 md:block" style={{ y: photoY }}>
            <div className="relative ml-auto w-full max-w-[340px]">
              <motion.div
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-card"
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.5 }}
              >
                <motion.img
                  src={myPhoto}
                  alt="Retrato de Caio Ramineli"
                  fetchpriority="high"
                  className="h-full w-full object-cover object-[50%_30%] grayscale transition-[filter] duration-700 group-hover:grayscale-0"
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.8, ease: EASE, delay: 0.5 }}
                />
                <span className="eyebrow absolute bottom-3 left-3 !text-white/80 mix-blend-difference">Fig. 01 — Caio</span>
              </motion.div>
              <motion.div
                className="absolute -left-12 bottom-10"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 1.3 }}
              >
                <RotatingBadge />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div className="grid items-end gap-8 md:grid-cols-12" style={{ opacity: fade }}>
          <div className="flex items-start gap-4 md:col-span-5">
            <motion.img
              src={myPhoto}
              alt=""
              aria-hidden
              className="h-14 w-14 shrink-0 rounded-full object-cover grayscale md:hidden"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            />
            <RevealWords
              as="p"
              immediate
              delay={0.8}
              stagger={0.018}
              className="max-w-md text-lg leading-snug text-muted-foreground md:text-xl"
              text="Construo produtos web de ponta a ponta, da interface em React e Vue às APIs em Node.js, e automações com IA que tiram o trabalho repetitivo do caminho."
            />
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-3 md:col-span-4 md:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
          >
            <Magnetic>
              <a href="#projects" className="btn btn-primary group">
                <RollText>Ver projetos</RollText>
                <ArrowDown size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-outline group">
                <RollText>Entre em contato</RollText>
              </a>
            </Magnetic>
          </motion.div>

          <motion.a
            href="#about"
            className="eyebrow group hidden items-center justify-end gap-3 md:col-span-2 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Role
            <span className="relative block h-10 w-px overflow-hidden bg-border">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-foreground"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
