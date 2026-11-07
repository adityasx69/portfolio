import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import CertGallery from "./pages/CertGallery.jsx";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/certificates") return <CertGallery />;
  return <Portfolio />;
}

function Portfolio() {
  useEffect(() => {
    document.title = "Aditya Saraswat — Computer Science & Data Science";
  }, []);

  return (
    <div className="site-shell">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
