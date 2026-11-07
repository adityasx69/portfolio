import Reveal, { SectionLabel } from "./Reveal.jsx";

const BACKGROUND = [
  {
    dates: "MAY 2026 — JUL 2026",
    type: "EXPERIENCE",
    title: "Backend Developer Intern",
    place: "Centre for Railway Information Systems · Ministry of Railways · New Delhi",
    body: "Developed REST APIs and service-layer logic using Java, Spring Boot and PostgreSQL for reservation chart and seat-availability workflows. Implemented route-segment filtering to validate station-to-station journeys and recommend accurate vacant seats.",
  },
  {
    dates: "JUN 2025 — JUL 2025",
    type: "EXPERIENCE",
    title: "Data Analytics Intern",
    place: "Centre for Railway Information Systems · Ministry of Railways · New Delhi",
    body: "Analyzed Indian Railways freight data, built geospatial visualizations with Python, GeoPandas and Plotly, and created Tableau dashboards for operational insights.",
  },
  {
    dates: "EXPECTED 2028",
    type: "EDUCATION",
    title: "B.Tech · Computer Science Engineering",
    place: "Manipal University Jaipur · Jaipur, India",
    body: "Data Science specialization.",
  },
  {
    dates: "MAY 2024",
    type: "EDUCATION · CLASS XII",
    title: "Class XII",
    place: "B.S. International School",
    body: "Secondary education.",
  },
  {
    dates: "MAR 2022",
    type: "EDUCATION · CLASS X",
    title: "Class X",
    place: "Delhi Public School Indirapuram",
    body: "Secondary education.",
  },
];

export default function Experience() {
  return (
    <section id="background" className="section-section background-section" aria-labelledby="background-title">
      <SectionLabel index="05" title="BACKGROUND" />

      <div className="background-layout">
        <Reveal>
          <h2 id="background-title" className="display-heading background-heading">
            <span>THE</span>
            <span className="outline-text">DETAILS<span className="accent-period">.</span></span>
          </h2>
        </Reveal>

        <div className="timeline-list">
          {BACKGROUND.map((item, index) => (
            <Reveal key={item.title + item.dates} delay={index * 0.06}>
              <article className="timeline-entry">
                <div className="timeline-date">
                  <span>{item.dates}</span>
                  <span className="timeline-type">{item.type}</span>
                </div>
                <div className="timeline-copy">
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  {item.body && <p className="body-copy">{item.body}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
