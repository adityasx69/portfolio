import { useState } from "react";
import Reveal, { SectionLabel } from "./Reveal.jsx";

const EMAIL = "adityassx1@gmail.com";
const SOCIALS = [
  ["GITHUB", "https://github.com/adityasx69"],
  ["LINKEDIN", "https://www.linkedin.com/in/adityasaraswat01/"],
  ["LEETCODE", "https://leetcode.com/u/adityassx/"],
  ["CODEFORCES", "https://codeforces.com/profile/adityassx"],
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent("Portfolio enquiry from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);

    setStatus("Your email app should open with a prepared draft. Send it there to deliver your message.");
    window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
  };

  return (
    <section id="contact" className="section-section contact-section" aria-labelledby="contact-title">
      <SectionLabel index="08" title="CONTACT" />

      <div className="contact-layout">
        <Reveal>
          <h2 id="contact-title" className="display-heading contact-heading">
            <span>LET’S</span>
            <span className="outline-text">CONNECT<span className="accent-period">.</span></span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="contact-copy">
            <p className="lead-copy">
              Have a role, project or conversation in mind? I’d be glad to hear from you.
            </p>
            <a className="contact-email text-link" href={"mailto:" + EMAIL}>
              <span aria-hidden="true">✉</span> {EMAIL} <span aria-hidden="true">↗</span>
            </a>
            <ul className="social-links" aria-label="Social profiles">
              {SOCIALS.map(([label, href]) => (
                <li key={label}>
                  <a className="text-link" href={href} target="_blank" rel="noreferrer">
                    {label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">NAME</label>
                <input id="contact-name" name="name" autoComplete="name" required minLength={2} placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">EMAIL</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
              </div>
              <div className="form-field form-field-message">
                <label htmlFor="contact-message">MESSAGE</label>
                <textarea id="contact-message" name="message" required minLength={10} rows={3} placeholder="Write your message…" />
              </div>
              <div className="form-submit-row">
                <button className="send-button" type="submit">
                  SEND MESSAGE <span aria-hidden="true">↗</span>
                </button>
                <p className="form-status" role="status" aria-live="polite">{status}</p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ADITYA SARASWAT</span>
        <a href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </footer>
    </section>
  );
}
