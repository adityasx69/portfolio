import Reveal from "./Reveal.jsx";

const SOCIALS = [
  ["github", "https://github.com/adityasx69"],
  ["linkedin", "https://www.linkedin.com/in/adityasaraswat01/"],
  ["leetcode", "https://leetcode.com/u/adityassx/"],
  ["codeforces", "https://codeforces.com/profile/adityassx"],
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            07 · next station
          </p>
          <h2 className="mt-6 font-display text-[11vw] font-bold uppercase leading-[0.95] tracking-tight md:text-8xl">
            <span className="block text-bone">Let's build</span>
            <span className="text-outline-acid block">something</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="max-w-sm font-mono text-sm leading-relaxed text-fog">
                Open to backend / full-stack internships and freelance work.
                Replies faster than a PostgreSQL index scan.
              </p>
              <a
                href="mailto:adityassx1@gmail.com"
                className="wipe-link mt-6 inline-block font-display text-2xl font-semibold text-acid md:text-4xl"
              >
                adityassx1@gmail.com
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-sm">
              {SOCIALS.map(([label, url]) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="wipe-link text-fog transition-colors hover:text-acid"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[11px] text-fog/70 md:flex-row md:items-center md:justify-between md:px-8">
          <span>© {new Date().getFullYear()} aditya saraswat</span>
          <a href="https://adityasaraswat.me" className="wipe-link text-fog/70 hover:text-acid">
            adityasaraswat.me
          </a>
        </div>
      </footer>
    </section>
  );
}
