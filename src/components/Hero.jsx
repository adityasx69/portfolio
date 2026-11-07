import { motion, useReducedMotion } from "framer-motion";

const lineVariants = {
  hidden: { y: "108%", opacity: 0 },
  visible: (index) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.95, delay: 0.18 + index * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="section-kicker hero-kicker">
          <span>01</span>
          <span>/</span>
          <span>INTRODUCTION</span>
        </div>

        <div className="hero-grid">
          <div className="hero-name-block">
            <motion.p
              className="availability"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <span className="availability-dot" aria-hidden="true" />
              BACKEND SYSTEMS · MACHINE LEARNING
            </motion.p>

            <h1 id="hero-title" className="hero-title">
              <span className="hero-line-mask">
                <motion.span
                  className="hero-line"
                  custom={0}
                  variants={lineVariants}
                  initial={reduceMotion ? false : "hidden"}
                  animate="visible"
                >
                  ADITYA
                </motion.span>
              </span>
              <span className="hero-line-mask">
                <motion.span
                  className="hero-line hero-line-outline"
                  custom={1}
                  variants={lineVariants}
                  initial={reduceMotion ? false : "hidden"}
                  animate="visible"
                >
                  SARASWAT<span className="hero-period">.</span>
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            className="hero-aside"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
          >
            <p className="hero-summary">
              I build dependable backend systems and data-informed tools, with a growing focus on
              machine learning.
            </p>
            <a className="text-link hero-cta" href="#work">
              VIEW SELECTED WORK <span aria-hidden="true">↘</span>
            </a>
          </motion.div>
        </div>

        <div className="hero-footnote">
          <span>JAVA · SPRING BOOT · PYTHON · MACHINE LEARNING</span>
          <a href="#about" aria-label="Scroll to about section">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
