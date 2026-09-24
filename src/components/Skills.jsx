import React from 'react';
import { motion } from 'framer-motion';
import { EASE, SectionHeader } from '@/components/ui/motion';

const stack = [
  {
    title: 'Frontend',
    note: 'Interfaces rápidas e acessíveis',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Vuetify', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    note: 'APIs e regras de negócio',
    items: ['Node.js', 'Express', 'Python', 'C#', 'PHP'],
  },
  {
    title: 'Dados',
    note: 'Modelagem e persistência',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'IA & Processo',
    note: 'Automação e trabalho em equipe',
    items: ['n8n', 'Automação com IA', 'Git', 'Scrum / Agile'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="container">
        <SectionHeader index="02" label="Stack">
          Ferramentas que uso no <span className="font-serif font-normal italic tracking-[-0.02em] text-primary">dia a dia</span>
        </SectionHeader>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.06, delayChildren: groupIndex * 0.1 }}
            >
              <motion.div
                className="border-t border-foreground pt-4"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-medium tracking-tight">{group.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    ({String(group.items.length).padStart(2, '0')})
                  </span>
                </div>
                <p className="eyebrow mt-2">{group.note}</p>
              </motion.div>

              <ul className="mt-6">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    className="group flex cursor-default items-center justify-between border-b border-border py-3 text-lg text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
                      {item}
                    </span>
                    <span className="h-1.5 w-1.5 scale-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-100" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
