import Reveal, { SectionLabel } from "./Reveal.jsx";

const SUMMARY = [
  ["EDUCATION", "B.Tech CSE · Data Science specialization · Manipal University Jaipur · Expected 2028"],
  ["EXPERIENCE", "Backend development and data analytics internships at CRIS"],
  ["TECHNICAL FOCUS", "Java · Spring Boot · React · Python · FastAPI · PostgreSQL · ML"],
  ["SELECTED WORK", "Finora AI · CredSight · Journal App · CineSearch"],
];

export default function Resume() {
  return (
    <section id="resume" className="section-section resume-section" aria-labelledby="resume-title">
      <div className="resume-topline">
        <SectionLabel index="07" title="NEXT STEP" />
      </div>

      <div className="resume-layout">
        <Reveal>
          <h2 id="resume-title" className="display-heading resume-heading">
            <span>LET’S TALK</span>
            <span>ABOUT WHAT</span>
            <span className="outline-text">I CAN BUILD<span className="accent-period">.</span></span>
          </h2>
          <a className="resume-download" href="/resume.pdf" download="Aditya-Saraswat-Resume.pdf" aria-describedby="resume-note">
            DOWNLOAD RESUME <span aria-hidden="true">↗</span>
          </a>
          <p id="resume-note" className="resume-note">
            One-page resume with experience, projects, technical skills and credentials.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="resume-aside">
            <p className="resume-intro">
              A concise overview of my education, experience, technical focus, projects and
              credentials.
            </p>
            <dl className="resume-summary">
              {SUMMARY.map(([label, text]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
