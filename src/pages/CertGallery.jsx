import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../components/Backdrop.jsx";
import Cursor from "../components/Cursor.jsx";
import Reveal from "../components/Reveal.jsx";
import { CERTS } from "../data/certs.js";

function Lightbox({ cert, onClose }) {
  // close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-10"
      onClick={onClose}
    >
      <div className="mb-4 flex w-full max-w-4xl items-center justify-between font-mono text-xs">
        <span className="truncate pr-4 text-fog">
          <span className="text-acid">▸</span> {cert.name}
        </span>
        <div className="flex shrink-0 items-center gap-5">
          <a
            href={cert.image}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="wipe-link text-acid"
          >
            full size ↗
          </a>
          <button
            onClick={onClose}
            className="border border-line px-3 py-1.5 text-fog transition-colors hover:border-acid hover:text-acid"
          >
            esc / close ✕
          </button>
        </div>
      </div>
      <motion.img
        initial={{ scale: 0.94, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        src={cert.image}
        alt={cert.name}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[78vh] w-auto max-w-full border border-line shadow-[0_0_80px_rgba(208,242,36,0.07)]"
      />
      {cert.credId && (
        <p className="mt-4 max-w-full truncate font-mono text-[10px] uppercase tracking-widest text-fog/70">
          credential id · {cert.credId}
        </p>
      )}
    </motion.div>
  );
}

export default function CertGallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.title = "Certificates — Aditya Saraswat";
    window.scrollTo(0, 0);
    return () => {
      document.title = "Aditya Saraswat — Backend Engineer";
    };
  }, []);

  return (
    <div className="grain min-h-svh">
      <Backdrop />
      <Cursor />

      <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="font-mono text-sm font-bold tracking-tight text-bone">
            <span className="text-acid">▚</span> adityasaraswat<span className="text-acid">.</span>me
          </a>
          <a
            href="/"
            className="wipe-link font-mono text-[13px] text-fog transition-colors hover:text-bone"
          >
            ← back to portfolio
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            appendix · proof of work
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-bone md:text-7xl">
            Certificate<span className="text-outline-acid">s</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-fog">
            {CERTS.length} on record — click any card to inspect the real thing.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {CERTS.map((c, i) => (
            <Reveal key={c.id} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <button
                onClick={() => setActive(c)}
                data-cursor
                className="group flex h-full w-full flex-col border border-line bg-panel/90 text-left backdrop-blur-md transition-colors hover:border-acid/60"
              >
                <div className="relative overflow-hidden border-b border-line">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-3 border border-acid/60 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-acid opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    inspect ↗
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-base font-semibold leading-snug text-bone transition-colors group-hover:text-acid">
                      {c.name}
                    </h2>
                    <span
                      className={`shrink-0 border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${
                        c.tag === "achievement"
                          ? "border-acid/60 text-acid"
                          : "border-line text-fog"
                      }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-xs text-fog">
                    {c.issuer}
                    {c.date && <span className="text-fog/60"> · {c.date}</span>}
                  </p>
                  {c.credId && (
                    <p className="mt-auto truncate pt-3 font-mono text-[9px] uppercase tracking-wider text-fog/50">
                      id · {c.credId}
                    </p>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 font-mono text-[11px] text-fog/70 md:px-8">
          <span>© {new Date().getFullYear()} aditya saraswat</span>
          <a href="/" className="wipe-link hover:text-acid">
            adityasaraswat.me
          </a>
        </div>
      </footer>

      <AnimatePresence>
        {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}
