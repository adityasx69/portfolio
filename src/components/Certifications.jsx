import Reveal, { SectionHeading } from "./Reveal.jsx";

const CERTS = [
  {
    n: "01",
    name: "Python for Data Science, AI and Development",
    issuer: "IBM · Coursera",
    tag: "certification",
  },
  {
    n: "02",
    name: "Python for Data Analysis: Pandas and NumPy",
    issuer: "Coursera",
    tag: "certification",
  },
  {
    n: "03",
    name: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    tag: "certification",
  },
  {
    n: "04",
    name: "Programming in Java",
    issuer: "NPTEL",
    tag: "certification",
  },
  {
    n: "05",
    name: "ACM Hacks 9.0 — Finalist",
    issuer: "ranked among the top teams of 60",
    tag: "achievement",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="06" title="Certifications" hint="receipts, notarized" />

      <div className="border border-line bg-panel/90 backdrop-blur-md">
        {CERTS.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.06}>
            <div className="group flex flex-col gap-2 border-b border-line px-6 py-5 transition-colors last:border-b-0 hover:bg-acid/[0.04] sm:flex-row sm:items-center sm:gap-6 md:px-8">
              <span className="text-outline-acid font-display text-2xl font-bold sm:w-14 md:text-3xl">
                {c.n}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-bone transition-colors group-hover:text-acid md:text-xl">
                  {c.name}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-fog">{c.issuer}</p>
              </div>
              <span
                className={`self-start border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest sm:self-center ${
                  c.tag === "achievement"
                    ? "border-acid/60 text-acid"
                    : "border-line text-fog"
                }`}
              >
                {c.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
