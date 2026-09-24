import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

const items = ['React', 'Vue.js', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB', 'n8n', 'Automação com IA', 'Tailwind CSS'];

const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

const Star = () => (
  <svg viewBox="0 0 24 24" className="h-[0.45em] w-[0.45em] shrink-0 text-primary" aria-hidden>
    <path fill="currentColor" d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
  </svg>
);

// Faixa infinita que acelera e inverte o sentido conforme a rolagem da página.
const Marquee = ({ baseVelocity = -2.5 }) => {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) direction.current = -1;
    else if (velocityFactor.get() > 0) direction.current = 1;
    moveBy += direction.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section aria-label="Tecnologias" className="overflow-hidden border-y border-border py-6 md:py-9">
      <p className="sr-only">{items.join(', ')}</p>
      <motion.div className="flex w-max" style={{ x }} aria-hidden>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-8 pr-8 text-4xl font-medium tracking-[-0.04em] md:gap-12 md:pr-12 md:text-7xl"
          >
            {items.map((item, i) => (
              <li key={item} className="flex items-center gap-8 md:gap-12">
                <span className={i % 3 === 1 ? 'font-serif font-normal italic tracking-[-0.02em]' : ''}>{item}</span>
                <Star />
              </li>
            ))}
          </ul>
        ))}
      </motion.div>
    </section>
  );
};

export default Marquee;
