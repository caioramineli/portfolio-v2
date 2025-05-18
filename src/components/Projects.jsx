
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Uma plataforma de e-commerce completa com sistema de pagamentos, gerenciamento de produtos e painel administrativo.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'E-commerce website with product listings and shopping cart',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com recursos de colaboração em equipe, notificações e relatórios de produtividade.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'Task management application with kanban board interface',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Real Estate Platform',
    description: 'Plataforma para busca e listagem de imóveis com filtros avançados, mapas interativos e agendamento de visitas.',
    tags: ['React', 'Express', 'PostgreSQL', 'Google Maps API'],
    image: 'Real estate website showing property listings with map view',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Aplicativo para acompanhamento de atividades físicas, nutrição e progresso com visualizações de dados personalizadas.',
    tags: ['React Native', 'Node.js', 'GraphQL'],
    image: 'Fitness tracking app showing workout statistics and progress charts',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
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
      <div className="h-48 overflow-hidden">
        <img  className="w-full h-full object-cover" alt={project.title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
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
              <span>Demo</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
