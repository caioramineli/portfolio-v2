import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

// Cada palavra sobe de dentro de uma máscara, em sequência.
export const RevealWords = ({ text, className = '', delay = 0, stagger = 0.04, immediate = false, as = 'span' }) => {
  const Tag = motion[as];
  const words = text.split(' ');
  const trigger = immediate
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.6 } };

  return (
    <Tag className={className} {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span aria-hidden className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export const SectionHeader = ({ index, label, children }) => (
  <div className="mb-14 md:mb-24">
    <div className="flex items-center gap-4">
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="text-primary">({index})</span> {label}
      </motion.span>
      <motion.span
        className="h-px flex-1 origin-left bg-border"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
      />
    </div>
    {children && (
      <motion.h2
        className="mt-8 max-w-4xl overflow-hidden pb-[0.1em] text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="block"
          variants={{ hidden: { y: '105%' }, visible: { y: '0%' } }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
        >
          {children}
        </motion.span>
      </motion.h2>
    )}
  </div>
);

// Puxa o elemento levemente em direção ao cursor.
export const Magnetic = ({ children, strength = 0.3, className = '' }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export const RollText = ({ children }) => (
  <span className="roll">
    <span>{children}</span>
    <span aria-hidden>{children}</span>
  </span>
);
