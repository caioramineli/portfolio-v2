import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { EASE, Magnetic, RollText, SectionHeader } from '@/components/ui/motion';

import fswBarber from '@/assets/fsw-barber.webp';
import techInsights from '@/assets/tech-insights.webp';
import planner from '@/assets/planner.webp';
import twitch from '@/assets/twitch.webp';
import shopee from '@/assets/shopee.webp';
import scaLogin from '@/assets/sca-login.webp';

const projects = [
  {
    title: 'FSW Barber',
    kind: 'Produto',
    description: 'Sistema de agendamento para barbearias, pensado primeiro para o celular.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    image: fswBarber,
    liveLink: 'https://fsw-barber-caio.vercel.app/',
    githubLink: 'https://github.com/caioramineli/fsw-barber',
  },
  {
    title: 'Tech Insights',
    kind: 'E-commerce',
    description: 'Loja de hardware e informática em que o diferencial é o conteúdo informativo.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    image: techInsights,
    liveLink: 'https://techinsights.store/',
    githubLink: 'https://github.com/caioramineli/tech-insights',
  },
  {
    title: 'Planejador de Viagem',
    kind: 'NLW Journey',
    description: 'Monte o roteiro da viagem cadastrando atividades. Feito no evento NLW Journey, da Rocketseat.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: planner,
    liveLink: 'https://planner-nlw.vercel.app/',
    githubLink: 'https://github.com/caioramineli/planner.er',
  },
  {
    title: 'Clone da Twitch',
    kind: 'Acadêmico',
    description: 'Projeto da faculdade para praticar programação web e banco de dados MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: twitch,
    liveLink: null,
    githubLink: 'https://github.com/caioramineli/twitch-clone',
  },
  {
    title: 'Xhopii',
    kind: 'Acadêmico',
    description: 'Exercício de programação web com os conceitos vistos em aula. Não é um clone da Shopee!',
    tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    image: shopee,
    liveLink: 'https://caioramineli.github.io/shopee-eletiva/',
    githubLink: 'https://github.com/caioramineli/shopee-eletiva',
  },
  {
    title: 'Conveniência Araújo',
    kind: 'Sistema',
    description: 'Sistema de gestão para uma conveniência, construído a partir de uma ERS completa.',
    tags: ['PHP', 'MySQL', 'jQuery'],
    image: scaLogin,
    liveLink: null,
    githubLink: 'https://github.com/caioramineli/sistema-SCA',
  },
];

// Prévia que segue o cursor e troca de imagem deslizando entre projetos.
const CursorPreview = ({ active, x, y }) => (
  <motion.div className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block" style={{ x, y }} aria-hidden>
    <div className="-translate-x-1/2 -translate-y-1/2">
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="relative h-[240px] w-[360px] overflow-hidden rounded-md bg-card shadow-2xl shadow-black/60"
            initial={{ scale: 0.4, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: 6 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <motion.div
              className="h-full"
              animate={{ y: `${-active * 100}%` }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              {projects.map((project) => (
                <img key={project.title} src={project.image} alt="" className="h-full w-full object-cover object-top" />
              ))}
            </motion.div>
            <span className="absolute bottom-3 right-3 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <ArrowUpRight size={20} />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

const ProjectRow = ({ project, index, onEnter }) => {
  const mainLink = project.liveLink || project.githubLink;

  return (
    <motion.li
      className="group relative"
      onPointerEnter={onEnter}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-border"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 1.1, ease: EASE }}
      />

      <motion.div
        className="grid gap-5 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        <div className="overflow-hidden rounded-md bg-card md:hidden">
          <img src={project.image} alt={project.title} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
        </div>

        <span className="hidden font-mono text-xs text-muted-foreground md:col-span-1 md:block">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="md:col-span-6">
          <h3 className="text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-none tracking-[-0.04em]">
            <a href={mainLink} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
              <span className="inline-block transition-[transform,color] duration-500 ease-out-expo lg:group-hover:translate-x-4 lg:group-hover:text-primary">
                {project.title}
              </span>
            </a>
          </h3>
          <p className="mt-3 max-w-md text-muted-foreground transition-transform duration-500 ease-out-expo lg:group-hover:translate-x-4">
            {project.description}
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-3">{project.kind}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
            {project.tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                {i < project.tags.length - 1 && <span className="ml-3 text-border">/</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 md:col-span-1 md:justify-end">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código de ${project.title} no GitHub`}
            className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
          >
            <Github size={17} />
          </a>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:hidden lg:grid">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </motion.div>
    </motion.li>
  );
};

const Projects = () => {
  const [active, setActive] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.5 });

  const handleMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <section id="projects" className="py-24 md:py-40">
      <div className="container">
        <SectionHeader index="03" label="Projetos">
          Trabalhos <span className="font-serif font-normal italic tracking-[-0.02em] text-primary">selecionados</span>
        </SectionHeader>

        <ul className="relative border-b border-border" onPointerMove={handleMove} onPointerLeave={() => setActive(null)}>
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} onEnter={() => setActive(index)} />
          ))}
        </ul>

        <CursorPreview active={active} x={springX} y={springY} />

        <motion.div
          className="mt-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="max-w-sm text-muted-foreground">
            Esses são alguns recortes. O resto do código, experimentos e estudos estão no GitHub.
          </p>
          <Magnetic>
            <a href="https://github.com/caioramineli" target="_blank" rel="noopener noreferrer" className="btn btn-outline group">
              <Github size={16} />
              <RollText>Ver mais no GitHub</RollText>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
