import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const LINKS = [
  ["about", "01"],
  ["experience", "02"],
  ["projects", "03"],
  ["stats", "04"],
  ["skills", "05"],
  ["certifications", "06"],
  ["contact", "07"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-acid"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-ink/80 backdrop-blur-md border-b border-line" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-bone"
          >
            <span className="text-acid">▚</span> adityasaraswat<span className="text-acid">.</span>me
          </a>

          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {LINKS.map(([id, n]) => (
              <a
                key={id}
                href={`#${id}`}
                className="wipe-link font-mono text-[13px] text-fog transition-colors hover:text-bone"
              >
                <span className="text-acid/70">{n}.</span>
                {id === "certifications" ? "certs" : id}
              </a>
            ))}
            <a
              href="mailto:adityassx1@gmail.com"
              className="border border-acid/60 px-4 py-1.5 font-mono text-[13px] text-acid transition-all hover:bg-acid hover:text-ink"
            >
              hire me
            </a>
          </div>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-6 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {LINKS.map(([id, n], i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className="border-b border-line py-4 font-display text-2xl font-semibold text-bone"
            style={{
              transition: `transform 0.5s ${0.05 * i}s, opacity 0.5s ${0.05 * i}s`,
              transform: open ? "translateY(0)" : "translateY(24px)",
              opacity: open ? 1 : 0,
            }}
          >
            <span className="mr-3 font-mono text-sm text-acid">{n}</span>
            {id}
          </a>
        ))}
        <a
          href="mailto:adityassx1@gmail.com"
          onClick={() => setOpen(false)}
          className="mt-8 self-start border border-acid px-6 py-3 font-mono text-sm text-acid"
        >
          hire me →
        </a>
      </div>
    </>
  );
}
