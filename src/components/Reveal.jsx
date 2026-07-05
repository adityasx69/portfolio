import { motion } from "framer-motion";

// Shared scroll-into-view reveal used across sections.
export default function Reveal({ children, delay = 0, y = 36, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, title, hint }) {
  return (
    <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-5 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-acid md:text-sm">{index}</span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-bone md:text-5xl">
          {title}
        </h2>
      </div>
      {hint && (
        <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-widest text-fog md:block">
          {hint}
        </span>
      )}
    </Reveal>
  );
}
