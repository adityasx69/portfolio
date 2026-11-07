import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 26, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ index, title }) {
  return (
    <div className="section-kicker">
      <span>{index}</span>
      <span className="section-kicker-divider">/</span>
      <span>{title}</span>
    </div>
  );
}
