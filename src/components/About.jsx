import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { EASE, SectionHeader } from '@/components/ui/motion';

const statement =
  'Sou desenvolvedor full stack há mais de três anos. Gosto de pegar ideias complexas e transformá-las em interfaces simples, rápidas e agradáveis de usar, cuidando também de tudo o que roda por trás delas.';

const facts = [
  {
    title: 'Experiência',
    text: 'Empresas de tecnologia e vários projetos freelance.',
  },
  {
    title: 'Formação',
    text: 'Tecnólogo em Análise e Desenvolvimento de Sistemas.',
  },
  {
    title: 'Web',
    text: 'React, Vue, Node.js e o ecossistema moderno em volta deles.',
  },
  {
    title: 'IA',
    text: 'Inteligência artificial aplicada e automação de processos.',
  },
];

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

// Palavras acendem uma a uma conforme o parágrafo atravessa a tela.
const ScrollHighlight = ({ text, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>{' '}
          </React.Fragment>
        ))}
      </span>
    </p>
  );
};

const Counter = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (value) => {
        if (ref.current) ref.current.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40">
      <div className="container">
        <SectionHeader index="01" label="Sobre" />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-32">
              <p className="text-[clamp(4.5rem,9vw,8rem)] font-medium leading-none tracking-[-0.06em]">
                <Counter to={3} suffix="+" />
              </p>
              <p className="eyebrow mt-3">Anos escrevendo código para a web</p>
            </div>
          </div>

          <div className="md:col-span-9">
            <ScrollHighlight
              text={statement}
              className="text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em]"
            />

            <motion.p
              className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              Ao longo do caminho passei por diversas tecnologias e frameworks, sempre atrás de boas práticas e de
              soluções que resolvam o problema de verdade. Hoje também dedico boa parte do tempo a IA e automação.
            </motion.p>

            <dl className="mt-16 grid border-t border-border sm:grid-cols-2">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  className="group relative border-b border-border py-7 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
                >
                  <dt className="flex items-baseline gap-3 text-xl font-medium tracking-tight">
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">{fact.title}</span>
                  </dt>
                  <dd className="mt-2 pl-7 text-muted-foreground">{fact.text}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
