
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

import fswBarber from '@/assets/fsw-barber.png';
import techInsights from '@/assets/tech-insights.png';
import planner from '@/assets/planner.png';
import twitch from '@/assets/twitch.png';
import shopee from '@/assets/shopee.png';
import scaLogin from '@/assets/sca-login.png';

const projects = [
  {
    title: 'FSW Barber',
    description: 'Sistema para barbearias, desenvolvido especialmente para dispositivos mobile. Foi utilizado as tecnologias mais recentes do mercado.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    image: fswBarber,
    liveLink: 'https://fsw-barber-caio.vercel.app/',
    githubLink: 'https://github.com/caioramineli/fsw-barber',
  },
  {
    title: 'Tech Insights',
    description: 'Plataforma de e-commerce especializado em hardwares e equipamentos de informática, onde o diferencial será conteúdo informativo.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    image: techInsights,
    liveLink: 'https://techinsights.store/',
    githubLink: 'https://github.com/caioramineli/tech-insights',
  },
  {
    title: 'Planejador de Viagem',
    description: 'O projeto é um site responsivo para montar um roteiro de viagem, cadastrando atividades. O projeto é do evento NLW Journey, um evento da Rocketseat.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: planner,
    liveLink: 'https://planner-nlw.vercel.app/',
    githubLink: 'https://github.com/caioramineli/planner.er',
  },
  {
    title: 'Clone da Twitch',
    description: 'Projeto acadêmico para praticar o conhecimento adquirido sobre Programação WEB e Banco de dados MySql.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: twitch,
    liveLink: '#',
    githubLink: 'https://github.com/caioramineli/twitch-clone',
  },
  {
    title: 'Xhopii',
    description: 'Projeto acadêmico, focado em utilizar os conceitos absorvidos sobre programação Web. Não é um clone da shopee!',
    tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    image: shopee,
    liveLink: 'https://caioramineli.github.io/shopee-eletiva/',
    githubLink: 'https://github.com/caioramineli/shopee-eletiva',
  },
  {
    title: 'Sistema Conveniência Araújo',
    description: 'Sistema para uma conveniência, seguindo como base a ERS (Especificação de Requisitos de Software).',
    tags: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
    image: scaLogin,
    liveLink: '#',
    githubLink: 'https://github.com/caioramineli/sistema-SCA',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card bg-secondary/20 rounded-lg overflow-hidden gradient-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="h-56 overflow-hidden">
        <img className="w-full h-full object-cover" alt={project.title} src={project.image} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            asChild
          >
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              <span>Projeto</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            asChild
          >
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              <span>Código</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            className="gradient-border"
            asChild
          >
            <a href="https://github.com/caioramineli" target="_blank" rel="noopener noreferrer">
              Ver mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
