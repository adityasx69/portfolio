import Reveal, { SectionHeading } from "./Reveal.jsx";

const GROUPS = [
  {
    title: "machine learning",
    primary: true,
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn ↗", "PyTorch ↗"],
    note: "↗ = currently learning",
  },
  {
    title: "backend",
    items: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JWT", "API Design"],
  },
  {
    title: "databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Schema Design", "Query Optimization"],
  },
  {
    title: "frontend",
    items: ["React.js", "JavaScript", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "languages & core cs",
    items: ["Java", "Python", "C", "C++", "SQL", "DSA", "OOP", "DBMS", "Networks"],
  },
  {
    title: "cloud & tools",
    items: ["AWS", "Cloud Deployment", "Git", "GitHub", "Postman", "IntelliJ IDEA", "Vercel", "Appwrite", "Tableau"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="05" title="Arsenal" hint="tools of the trade" />

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.07} className="h-full">
            <div
              className={`group h-full p-7 transition-colors duration-300 ${
                g.primary ? "bg-acid text-ink" : "bg-panel hover:bg-panel/40"
              }`}
            >
              <h3
                className={`mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] ${
                  g.primary ? "text-ink" : "text-acid"
                }`}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {g.title}
                {g.primary && <span className="ml-auto text-[9px]">★ current focus</span>}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className={`font-display text-base font-medium md:text-lg ${
                      g.primary ? "text-ink" : "text-bone/90"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {g.note && (
                <p className={`mt-4 font-mono text-[10px] ${g.primary ? "text-ink/70" : "text-fog"}`}>
                  {g.note}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
