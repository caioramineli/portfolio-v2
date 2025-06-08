
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Bot } from 'lucide-react';
import notebook from '@/assets/notebook.webp'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada, experiência e paixão pelo desenvolvimento de software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden gradient-border">
              <img  className="w-full h-full object-cover" alt="Developer working" src={notebook} loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-background rounded-lg shadow-lg gradient-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-md">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium">Experiência</p>
                  <p className="text-2xl font-bold">3+ Anos</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold">
              Desenvolvedor apaixonado por criar soluções inovadoras
            </h3>
            <p className="text-muted-foreground">
              Sou um desenvolvedor full stack com mais de 3 anos de experiência na criação de aplicações web. Minha paixão está em transformar ideias complexas em interfaces intuitivas e funcionais que proporcionam experiências excepcionais aos usuários.
            </p>
            <p className="text-muted-foreground">
              Ao longo da minha carreira, trabalhei com diversas tecnologias e frameworks, sempre buscando as melhores práticas e soluções inovadoras para os desafios que encontro.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-md mt-1">
                  <Briefcase className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Experiência Profissional</h4>
                  <p className="text-sm text-muted-foreground">
                    Trabalhei em empresas de tecnologia e vários projetos freelance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-md mt-1">
                  <GraduationCap className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Formação Acadêmica</h4>
                  <p className="text-sm text-muted-foreground">
                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-md mt-1">
                  <Code className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Desenvolvimento Web</h4>
                  <p className="text-sm text-muted-foreground">
                    Especializado em React, Vue, Node.js e tecnologias modernas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-md mt-1">
                  <Bot className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">IA</h4>
                  <p className="text-sm text-muted-foreground">
                    Ampla experiência em inteligência artificial e automação de processos
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
