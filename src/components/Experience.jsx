import Reveal, { SectionHeading } from "./Reveal.jsx";

const STOPS = [
  {
    station: "STN 02 — NEW DELHI",
    role: "Backend Developer Intern",
    org: "CRIS · Ministry of Railways",
    period: "may 2026 — present",
    live: true,
    points: [
      "Building the Railway Reservation Seat Optimization System — REST APIs and service-layer logic in Java + Spring Boot on PostgreSQL.",
      "Implementing route-segment based seat filtering that validates station-to-station journeys and recommends accurate vacant seats.",
      "Designing schemas for reservation charts, station routes, coaches and berth availability workflows.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
  },
  {
    station: "STN 01 — NEW DELHI",
    role: "Data Analytics Intern",
    org: "CRIS · Ministry of Railways",
    period: "jun 2025 — jul 2025",
    points: [
      "Analyzed large-scale Indian Railways freight data end to end.",
      "Built geospatial visualizations with Python, GeoPandas and Plotly; shipped Tableau dashboards used for operational insights.",
    ],
    stack: ["Python", "GeoPandas", "Plotly", "Tableau"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="02" title="Experience" hint="route map · origin → current" />

      <div className="relative ml-2 md:ml-6">
        {/* the railway line */}
        <div className="rail-line absolute bottom-6 left-0 top-2 w-px" aria-hidden="true" />

        {STOPS.map((stop, i) => (
          <Reveal key={stop.station} delay={i * 0.1} className="relative pb-16 pl-8 last:pb-0 md:pl-14">
            {/* station marker */}
            <span className="absolute -left-[9px] top-1.5 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-acid bg-ink">
              <span className={`h-[7px] w-[7px] rounded-full bg-acid ${stop.live ? "animate-pulse" : ""}`} />
            </span>

            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
              {stop.station}
              {stop.live && <span className="ml-3 text-bone">● in service</span>}
            </p>

            <div className="mt-3 border border-line bg-panel/90 p-6 backdrop-blur-md transition-colors hover:border-acid/50 md:p-8">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <h3 className="font-display text-xl font-semibold text-bone md:text-2xl">
                  {stop.role}
                </h3>
                <span className="font-mono text-xs text-fog">{stop.period}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-acid/90">{stop.org}</p>

              <ul className="mt-5 space-y-2.5">
                {stop.points.map((p) => (
                  <li key={p} className="flex gap-3 font-mono text-[13px] leading-relaxed text-fog">
                    <span className="mt-px shrink-0 text-acid">▸</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {stop.stack.map((t) => (
                  <span key={t} className="border border-line px-2.5 py-1 font-mono text-[11px] text-fog">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
