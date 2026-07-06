import Reveal, { SectionHeading } from "./Reveal.jsx";
import { CERTS } from "../data/certs.js";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="06" title="Certifications" hint="receipts, notarized" />

      <div className="border border-line bg-panel/90 backdrop-blur-md">
        {CERTS.map((c, i) => (
          <Reveal key={c.id} delay={Math.min(i * 0.05, 0.25)}>
            <a
              href="/certificates"
              className="group flex flex-col gap-1.5 border-b border-line px-6 py-4 transition-colors last:border-b-0 hover:bg-acid/[0.04] sm:flex-row sm:items-center sm:gap-6 md:px-8"
            >
              <span className="text-outline-acid font-display text-xl font-bold sm:w-12 md:text-2xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-bone transition-colors group-hover:text-acid md:text-lg">
                  {c.name}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-fog">
                  {c.issuer}
                  {c.date && <span className="text-fog/60"> · {c.date}</span>}
                </p>
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
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <a
          href="/certificates"
          className="group mt-6 flex items-center justify-between border border-dashed border-line px-6 py-4 font-mono text-sm text-fog transition-colors hover:border-acid/60 hover:text-acid md:px-8"
        >
          <span>view the full certificate gallery — scans included</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </a>
      </Reveal>
    </section>
  );
}
