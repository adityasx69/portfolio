import Reveal, { SectionLabel } from "./Reveal.jsx";
import {
  JournalVisual,
  CineSearchVisual,
  FinoraVisual,
  CredSightVisual,
} from "./ProjectVisuals.jsx";

const PROJECTS = [
  {
    number: "01",
    name: "Finora AI",
    category: "CROSS-PLATFORM FINANCE · IN PROGRESS",
    description:
      "A personal finance platform in development for managing expenses and budgets across web and mobile, with analytics for making spending patterns easier to understand.",
    stack: ["React", "React Native", "Spring Boot", "Spring Cloud Gateway", "PostgreSQL", "Python", "FastAPI", "Docker", "AWS"],
    notes: [
      "Developing web and mobile clients backed by Spring Boot services and REST APIs.",
      "Implementing JWT authentication, resource-level authorization, transaction management and budget tracking.",
      "Building a Python analytics service for machine-learning spending insights and forecasting, with natural-language finance queries.",
      "Automating containerized deployment and cloud infrastructure with AWS CDK, ECS, ECR and GitHub Actions.",
    ],
    linkStatus: "IN DEVELOPMENT · NO PUBLIC SOURCE LINK",
    visual: <FinoraVisual />,
  },
  {
    number: "02",
    name: "CredSight",
    category: "EXPLAINABLE CREDIT RISK · IN PROGRESS",
    description:
      "An explainable credit-risk assessment project in development, combining default prediction with clear explanations of the factors behind each estimate.",
    stack: ["Python", "XGBoost", "scikit-learn", "SHAP", "FastAPI"],
    notes: [
      "Developing a validated data pipeline with preprocessing and class-imbalance handling.",
      "Comparing Logistic Regression and XGBoost, with randomized search and stratified cross-validation.",
      "Tuning decision thresholds and probability calibration for risk classification.",
      "Using SHAP for global and individual explanations, with a FastAPI endpoint and interactive estimate view.",
    ],
    linkStatus: "IN DEVELOPMENT · NO PUBLIC SOURCE LINK",
    visual: <CredSightVisual />,
  },
  {
    number: "03",
    name: "Journal App",
    category: "BACKEND APPLICATION",
    description:
      "A journal management backend with user management APIs and journal CRUD operations, backed by MongoDB and organized around clear service boundaries.",
    stack: ["Java", "Spring Boot", "MongoDB", "Spring Security"],
    notes: [
      "Separates request handling, application logic, models and repository access into focused layers.",
      "Provides user-management and journal CRUD APIs with MongoDB persistence.",
      "The resume lists Spring Security and JWT authentication as ongoing work.",
    ],
    links: [["SOURCE", "https://github.com/adityasx69/journalApp"]],
    visual: <JournalVisual />,
  },
  {
    number: "04",
    name: "CineSearch",
    category: "MOVIE DISCOVERY",
    description:
      "A movie discovery app that searches the TMDB catalogue and ranks trending titles from live search activity.",
    stack: ["React", "Vite", "Tailwind CSS", "Appwrite", "TMDB API"],
    notes: [
      "Debounces searches before requesting movie data from TMDB.",
      "Uses Appwrite to store search activity and support the trending ranking.",
      "Built as an interactive React application with a Vite toolchain.",
    ],
    links: [
      ["LIVE DEMO", "https://movie.projects.adityasaraswat.me/"],
      ["SOURCE", "https://github.com/adityasx69/web-dev/tree/main/react/movie-app"],
    ],
    visual: <CineSearchVisual />,
  },
];

function ProjectRow({ project, reverse }) {
  return (
    <article className={reverse ? "project-row is-reversed" : "project-row"}>
      <Reveal className="project-visual-reveal">
        <div className="project-visual-wrap">{project.visual}</div>
      </Reveal>

      <Reveal delay={0.12} className="project-copy-reveal">
        <div className="project-meta">
          <span>PROJECT {project.number}</span>
          <span>{project.category}</span>
        </div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-stack" aria-label="Technologies used">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <div className="project-links">
          {project.links ? project.links.map(([label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={label} className="text-link">
              {label} <span aria-hidden="true">↗</span>
            </a>
          )) : (
            <span className="project-private-note">{project.linkStatus}</span>
          )}
        </div>

        <details className="implementation-notes">
          <summary>IMPLEMENTATION NOTES <span aria-hidden="true">+</span></summary>
          <ul>
            {project.notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </details>
      </Reveal>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-section work-section" aria-labelledby="work-title">
      <SectionLabel index="03" title="SELECTED WORK" />

      <div className="section-intro work-intro">
        <Reveal>
          <h2 id="work-title" className="display-heading section-display-heading">
            <span>BUILT TO BE</span>
            <span className="outline-text">USED<span className="accent-period">.</span></span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="section-intro-copy">
            Backend, data and interactive products built around real workflows and practical details.
          </p>
        </Reveal>
      </div>

      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.number} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
