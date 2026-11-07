import Reveal, { SectionLabel } from "./Reveal.jsx";

const GROUPS = [
  {
    number: "01",
    title: "LANGUAGES",
    items: ["Java · Python", "C · C++", "JavaScript · SQL", "HTML5 · CSS3"],
  },
  {
    number: "02",
    title: "FRONTEND",
    items: ["React · React Native", "Vite · Tailwind CSS", "Responsive UI design"],
  },
  {
    number: "03",
    title: "BACKEND & DATA",
    items: [
      "Spring Boot · Spring Security",
      "Spring Cloud Gateway · REST APIs",
      "JWT authentication · API design · FastAPI",
      "PostgreSQL · MongoDB · MySQL",
      "Database design · query optimization",
      "NumPy · Pandas · Matplotlib · Seaborn",
      "scikit-learn · XGBoost · SHAP · PyTorch",
    ],
  },
  {
    number: "04",
    title: "TOOLS & DEPLOYMENT",
    items: [
      "Docker · AWS CDK · ECS · ECR",
      "GitHub Actions · Vercel · Appwrite",
      "Git · GitHub · Postman",
      "IntelliJ IDEA · VS Code",
      "Tableau · GeoPandas · Plotly",
    ],
  },
];

export default function Skills() {
  return (
    <section id="technical-index" className="section-section skills-section" aria-labelledby="skills-title">
      <SectionLabel index="04" title="TECHNICAL INDEX" />

      <div className="skills-layout">
        <Reveal>
          <h2 id="skills-title" className="display-heading skills-heading">
            <span>TOOLS FOR</span>
            <span className="outline-text">MAKING<span className="accent-period">.</span></span>
          </h2>
        </Reveal>

        <div className="skill-groups">
          {GROUPS.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.07}>
              <article className="skill-group">
                <div className="skill-group-top">
                  <span className="skill-number">{group.number}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
