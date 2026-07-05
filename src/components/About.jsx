import Reveal, { SectionHeading } from "./Reveal.jsx";

const FACTS = [
  ["base", "Ghaziabad / Jaipur, IN"],
  ["education", "B.Tech CSE, Manipal University Jaipur"],
  ["currently", "Backend Intern @ CRIS, Ministry of Railways"],
  ["learning", "JWT · ML (scikit-learn, PyTorch) · AWS"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="01" title="About" hint="the human behind the commits" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <p className="font-display text-xl leading-relaxed text-bone md:text-3xl md:leading-snug">
            Engineer at the crossing of{" "}
            <span className="text-acid">machine learning and backend</span> —
            leaning harder into ML every week, and spending most of my time
            teaching models to earn their keep.
          </p>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-fog">
            At CRIS I'm building route-segment based seat filtering for the
            reservation system — validating station-to-station journeys and
            recommending the best vacant berth. On the ML side I've worked
            through Python, NumPy, Pandas, Matplotlib and Seaborn, and I'm
            currently deep in scikit-learn and PyTorch. Java DSA on LeetCode
            keeps the fundamentals sharp.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="border border-line bg-panel/60 backdrop-blur-sm">
            {FACTS.map(([k, v]) => (
              <li
                key={k}
                className="flex flex-col gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-widest text-acid">
                  {k}
                </span>
                <span className="font-mono text-[13px] text-bone">{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
