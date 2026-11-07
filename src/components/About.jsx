import Reveal, { SectionLabel } from "./Reveal.jsx";

const FACTS = [
  ["EDUCATION", "B.Tech CSE · Data Science · Manipal University Jaipur"],
  ["FOCUS", "Backend systems · machine learning"],
  ["LOCATION", "Jaipur / Ghaziabad, India"],
];

export default function About() {
  return (
    <section id="about" className="section-section about-section" aria-labelledby="about-title">
      <SectionLabel index="02" title="ABOUT" />

      <div className="about-grid">
        <Reveal>
          <h2 id="about-title" className="display-heading about-heading">
            <span>FUNCTION</span>
            <span className="outline-text">WITH</span>
            <span>INTENT<span className="accent-period">.</span></span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="about-copy">
            <p className="lead-copy">
              I work across backend engineering and data science, building useful systems with
              clear interfaces and dependable data flows.
            </p>
            <p className="body-copy">
              At the Centre for Railway Information Systems, I developed reservation APIs and
              journey-based seat filtering, and previously analyzed freight data. I’m studying
              Computer Science with a Data Science specialization at Manipal University Jaipur.
              Outside that work, I’m building finance and credit-risk projects that bring machine
              learning into practical applications.
            </p>

            <dl className="fact-list">
              {FACTS.map(([label, value]) => (
                <div className="fact-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
