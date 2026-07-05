import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "ml × backend engineer",
  "machine learning enthusiast",
  "spring boot developer",
  "problem solver",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const current = words[word];
      char += deleting ? -1 : 1;
      setText(current.slice(0, char));
      let delay = deleting ? 40 : 75;
      if (!deleting && char === current.length) {
        delay = 1700;
        deleting = true;
      } else if (deleting && char === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

const lineAnim = (i) => ({
  initial: { y: "110%" },
  animate: { y: "0%" },
  transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center px-5 pt-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-5 font-mono text-xs text-fog md:text-sm"
        >
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-acid align-middle" />
          backend intern @ CRIS, Ministry of Railways — New Delhi
        </motion.p>

        <h1 className="font-display font-bold uppercase leading-[0.93] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span {...lineAnim(0)} className="block text-[15vw] text-bone md:text-[7.5rem] lg:text-[9rem]">
              Aditya
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span {...lineAnim(1)} className="text-outline block text-[15vw] md:text-[7.5rem] lg:text-[9rem]">
              Saraswat
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md font-mono text-sm leading-relaxed text-fog md:text-base">
            <span className="text-acid">$</span> whoami —{" "}
            <span className="text-bone">{role}</span>
            <span className="caret text-acid">▍</span>
            <br />
            building seat-optimization systems for Indian Railways. Spring
            Boot by day, ML &amp; LeetCode by night.
          </p>

          <div className="flex items-center gap-5 font-mono text-[13px]">
            {[
              ["github", "https://github.com/adityasx69"],
              ["linkedin", "https://www.linkedin.com/in/adityasaraswat01/"],
              ["leetcode", "https://leetcode.com/u/adityassx/"],
              ["codeforces", "https://codeforces.com/profile/adityassx"],
            ].map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="wipe-link text-fog transition-colors hover:text-acid"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-fog"
      >
        scroll
        <span className="ml-2 inline-block animate-bounce text-acid">↓</span>
      </motion.div>
    </section>
  );
}
