import { useEffect, useState } from "react";

const LINKS = [
  ["about", "ABOUT"],
  ["work", "SELECTED WORK"],
  ["background", "BACKGROUND"],
  ["credentials", "CREDENTIALS"],
  ["contact", "CONTACT"],
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav-inner" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Aditya Saraswat, home">
            <span className="brand-mark" aria-hidden="true">AS</span>
            <span className="brand-name">ADITYA SARASWAT</span>
          </a>

          <div className="desktop-links">
            {LINKS.map(([id, label]) => (
              <a
                className={active === id ? "nav-link is-active" : "nav-link"}
                href={"#" + id}
                key={id}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
            <a className="resume-nav" href="/resume.pdf" target="_blank" rel="noreferrer">
              RESUME <span aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        id="mobile-navigation"
        className={menuOpen ? "mobile-menu is-open" : "mobile-menu"}
        aria-hidden={!menuOpen}
      >
        {LINKS.map(([id, label], index) => (
          <a
            className="mobile-menu-link"
            href={"#" + id}
            key={id}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            style={{ "--menu-index": index }}
          >
            <span className="mobile-menu-number">0{index + 1}</span>
            {label}
          </a>
        ))}
        <a className="mobile-resume" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
          RESUME <span aria-hidden="true">↗</span>
        </a>
      </div>
    </>
  );
}
