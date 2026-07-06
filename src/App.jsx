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
import Backdrop from "./components/Backdrop.jsx";
import CertGallery from "./pages/CertGallery.jsx";

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
  // tiny path router — /certificates gets its own page, everything else is home
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/certificates") return <CertGallery />;
  return <Home />;
}

function Home() {
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
