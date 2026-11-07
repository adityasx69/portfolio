import Reveal, { SectionLabel } from "./Reveal.jsx";
import { CERTS } from "../data/certs.js";

export default function Certifications() {
  return (
    <section id="credentials" className="section-section credentials-section" aria-labelledby="credentials-title">
      <SectionLabel index="06" title="CREDENTIALS" />

      <div className="section-intro credentials-intro">
        <Reveal>
          <h2 id="credentials-title" className="display-heading section-display-heading">
            <span>EARNED</span>
            <span className="outline-text">PROOF<span className="accent-period">.</span></span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="section-intro-copy">
            Certifications and achievements documented in the portfolio, with scans available to
            inspect.
          </p>
        </Reveal>
      </div>

      <div className="credential-list">
        {CERTS.map((credential, index) => (
          <Reveal key={credential.id} delay={Math.min(index * 0.035, 0.21)}>
            <a className="credential-row" href={credential.document || credential.image} target="_blank" rel="noreferrer">
              <span className="credential-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="credential-name">
                <strong>{credential.name}</strong>
                <span>{credential.issuer}</span>
              </span>
              <span className="credential-date">{credential.date || "DATE NOT LISTED"}</span>
              <span className="credential-open">VIEW SCAN <span aria-hidden="true">↗</span></span>
            </a>
          </Reveal>
        ))}
        <a className="credential-row achievement-row" href="https://leetcode.com/u/adityassx/" target="_blank" rel="noreferrer">
          <span className="credential-number">12</span>
          <span className="credential-name">
            <strong>240+ LeetCode problems solved</strong>
            <span>Java-based data structures and algorithms solutions</span>
          </span>
          <span className="credential-date">ACHIEVEMENT</span>
          <span className="credential-open">PROFILE <span aria-hidden="true">↗</span></span>
        </a>
      </div>

      <Reveal delay={0.12}>
        <a className="text-link gallery-link" href="/certificates">
          OPEN CERTIFICATE GALLERY <span aria-hidden="true">↗</span>
        </a>
      </Reveal>
    </section>
  );
}
