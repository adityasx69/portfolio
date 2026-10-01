import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../components/Backdrop.jsx";

const CMD = "sudo systemctl restart adityasaraswat.me";

const OUTPUT = [
  { tag: "ok", text: "stopped previous build" },
  { tag: "ok", text: "pulled latest changes from main" },
  { tag: "ok", text: "installed dependencies" },
  { tag: "..", text: "compiling the new portfolio" },
];

const LINKS = [
  { label: "github", href: "https://github.com/adityasx69" },
  { label: "leetcode", href: "https://leetcode.com/u/adityassx/" },
  { label: "linkedin", href: "https://www.linkedin.com/in/adityasaraswat01/" },
  { label: "codeforces", href: "https://codeforces.com/profile/adityassx" },
];

export default function Maintenance() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [typed, setTyped] = useState(reduce ? CMD.length : 0);
  const [lines, setLines] = useState(reduce ? OUTPUT.length : 0);

  useEffect(() => {
    document.title = "Back soon — Aditya Saraswat";
  }, []);

  // type the command, then reveal output one line at a time
  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let t;
    const typeCmd = () => {
      i += 1;
      setTyped(i);
      if (i < CMD.length) t = setTimeout(typeCmd, 38);
      else t = setTimeout(reveal, 500);
    };
    let n = 0;
    const reveal = () => {
      n += 1;
      setLines(n);
      if (n < OUTPUT.length) t = setTimeout(reveal, 650);
    };
    t = setTimeout(typeCmd, 600);
    return () => clearTimeout(t);
  }, [reduce]);

  const done = lines >= OUTPUT.length;

  return (
    <div className="grain">
      <Backdrop />
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-5 py-16">
        <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-line bg-panel">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-3 font-mono text-xs text-fog">aditya@portfolio: ~</span>
          </div>

          <div
            role="status"
            className="min-h-[300px] space-y-2 p-5 font-mono text-[13px] leading-relaxed text-bone sm:text-sm"
          >
            <p>
              <span className="text-acid">aditya@portfolio</span>
              <span className="text-fog">:~$ </span>
              {CMD.slice(0, typed)}
              {typed < CMD.length && <Caret />}
            </p>

            {OUTPUT.slice(0, lines).map((l) => (
              <p key={l.text} className="text-fog">
                <span className={l.tag === "ok" ? "text-acid" : "text-bone"}>
                  [ {l.tag === "ok" ? "ok" : ".."} ]
                </span>{" "}
                {l.text}
                {l.tag === ".." && (
                  <span className="mt-2 block h-1.5 w-56 overflow-hidden rounded-full bg-line">
                    <motion.span
                      className="block h-full rounded-full bg-acid"
                      initial={{ width: "8%" }}
                      animate={reduce ? { width: "60%" } : { width: ["8%", "92%"] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                  </span>
                )}
              </p>
            ))}

            {done && (
              <>
                <p className="pt-3 text-bone">adityasaraswat.me is being rebuilt and will be back soon.</p>
                <p>
                  <span className="text-acid">aditya@portfolio</span>
                  <span className="text-fog">:~$ </span>
                  <Caret />
                </p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 font-mono text-sm text-bone transition-colors hover:border-acid hover:text-acid focus-visible:border-acid focus-visible:text-acid focus-visible:outline-none"
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-fog">Aditya Saraswat · Backend Engineer</p>
      </main>
    </div>
  );
}

function Caret() {
  return (
    <span
      aria-hidden="true"
      className="caret ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[3px] bg-acid"
    />
  );
}
