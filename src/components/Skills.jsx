
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 80 },
      { name: 'Vue.js', level: 85 },
      { name: 'TailwindCSS', level: 75 },
      { name: 'Next', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 90 },
      { name: 'Python', level: 50 },
      { name: 'C#', level: 60 },
      { name: 'PHP', level: 65 },
    ],
  },
  {
    title: 'Outros',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Scrum/Agile', level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary/50 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative">
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
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas com as quais trabalho para criar soluções eficientes e modernas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card p-6 rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-6 skill-card rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-bold mb-6 text-center gradient-text">Tecnologias que utilizo</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 
              'Express', 'Next.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Git', 'TailwindCSS', 'Figma'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
