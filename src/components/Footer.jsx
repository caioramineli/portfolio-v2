
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">&lt;CaioRamineli/&gt;</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Desenvolvedor full stack especializado em criar experiências digitais excepcionais e soluções web modernas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:seuemail@exemplo.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                São Paulo, Brasil
              </li>
              <li>
                <a
                  href="mailto:seuemail@exemplo.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  seuemail@exemplo.com
                </a>
              </li>
              <li className="text-muted-foreground">
                (00) 12345-6789
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Caio Ramineli. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
