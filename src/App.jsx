import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import LiveStats from "./components/LiveStats.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";

function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* faint blueprint grid, faded toward the edges */}
      <div className="bg-grid absolute inset-0" />
      {/* two very low-key color washes so pure black doesn't feel flat */}
      <div className="absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-acid/[0.045] blur-[130px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-fog/[0.05] blur-[130px]" />
    </div>
  );
}

function Preloader({ done }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setCount((c) => (c >= 100 ? 100 : c + Math.ceil(Math.random() * 9))),
      55
    );
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex items-end justify-between bg-ink p-6 md:p-10"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            aditya saraswat // portfolio — loading
          </span>
          <span className="font-display text-7xl font-bold text-acid md:text-9xl">
            {Math.min(count, 100)}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // anchors: lets #hash nav links scroll smoothly with no leftover offset
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const t = setTimeout(() => setLoaded(true), 1400);
    return () => {
      clearTimeout(t);
      lenis.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="grain">
      <Preloader done={loaded} />
      <Backdrop />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Marquee reverse />
        <Projects />
        <LiveStats />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
