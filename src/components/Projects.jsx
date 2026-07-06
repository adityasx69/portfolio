import { useRef } from "react";
import Reveal, { SectionHeading } from "./Reveal.jsx";

const PROJECTS = [
  {
    n: "001",
    name: "Railway Seat Optimization",
    tag: "production · under CRIS",
    desc: "Backend system that finds the best vacant seat between any two stations — querying reservation charts and filtering by journey segment, coach, class, berth type and travel date.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST"],
    links: [],
  },
  {
    n: "002",
    name: "Journal App",
    tag: "backend · in progress",
    desc: "Journal management backend with clean controller → service → repository layering, user management APIs and MongoDB persistence. Spring Security + JWT auth landing next.",
    stack: ["Java", "Spring Boot", "MongoDB", "Spring Security"],
    links: [["github", "https://github.com/adityasx69/journalApp"]],
  },
  {
    n: "003",
    name: "CineSearch",
    tag: "frontend · live",
    desc: "Real-time movie discovery platform where trending rankings update from live user search activity. Debounced search over the TMDB API with Appwrite handling analytics and storage.",
    stack: ["React", "Vite", "Tailwind", "Appwrite", "TMDB"],
    links: [
      ["live", "https://movie.projects.adityasaraswat.me/"],
      ["github", "https://github.com/adityasx69/web-dev/tree/main/react/movie-app"],
    ],
  },
];

// mouse-tracked tilt without a library
function TiltCard({ children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative h-full border border-line bg-panel/90 backdrop-blur-md transition-[border-color,transform] duration-200 hover:border-acid/60"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgb(208 242 36 / 0.09), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="03" title="Projects" hint="things I actually shipped" />

      <div className="grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.12} className="h-full">
            <TiltCard>
              <div className="flex h-full flex-col p-7" style={{ transform: "translateZ(24px)" }}>
                <div className="flex items-start justify-between">
                  <span className="text-outline-acid font-display text-5xl font-bold">
                    {p.n}
                  </span>
                  <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-fog">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-bone transition-colors group-hover:text-acid">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 font-mono text-[13px] leading-relaxed text-fog">
                  {p.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="border border-line px-2 py-0.5 font-mono text-[10px] text-fog">
                      {t}
                    </span>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="mt-5 flex gap-5 border-t border-line pt-4">
                    {p.links.map(([label, url]) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="wipe-link font-mono text-xs text-acid"
                      >
                        {label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
