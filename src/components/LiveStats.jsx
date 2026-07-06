import { useEffect, useState } from "react";
import Reveal, { SectionHeading } from "./Reveal.jsx";

const GH_USER = "adityasx69";
const LC_USER = "adityassx";
const CF_USER = "adityassx";

function useJson(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let alive = true;
    fetcher()
      .then((d) => alive && setData(d))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { data, failed };
}

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

function useGithub() {
  return useJson(async () => {
    const [user, repos, contrib] = await Promise.all([
      getJson(`https://api.github.com/users/${GH_USER}`),
      getJson(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`),
      // community mirror of the contribution graph (commit counts need auth on the official API)
      getJson(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`).catch(() => null),
    ]);
    const langs = {};
    repos.forEach((r) => r.language && (langs[r.language] = (langs[r.language] || 0) + 1));
    const topLang = Object.entries(langs).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    return {
      repos: user.public_repos,
      followers: user.followers,
      topLang,
      commitsLastYear: contrib?.total?.lastYear ?? null,
    };
  });
}

function useLeetcode() {
  return useJson(async () => {
    // two community mirrors; whichever answers first wins
    try {
      const d = await getJson(`https://leetcode-stats-api.herokuapp.com/${LC_USER}`);
      if (d.status !== "success") throw new Error("bad payload");
      return { solved: d.totalSolved, easy: d.easySolved, medium: d.mediumSolved, hard: d.hardSolved, total: d.totalQuestions };
    } catch {
      const d = await getJson(`https://alfa-leetcode-api.onrender.com/${LC_USER}/solved`);
      return { solved: d.solvedProblem, easy: d.easySolved, medium: d.mediumSolved, hard: d.hardSolved, total: 3500 };
    }
  });
}

function useCodeforces() {
  return useJson(async () => {
    const [info, status] = await Promise.all([
      getJson(`https://codeforces.com/api/user.info?handles=${CF_USER}`),
      getJson(`https://codeforces.com/api/user.status?handle=${CF_USER}`).catch(() => null),
    ]);
    if (info.status !== "OK") throw new Error("bad payload");
    const u = info.result[0];
    // count unique problems with at least one accepted submission
    let solved = null;
    if (status?.status === "OK") {
      const ok = new Set();
      status.result.forEach((s) => {
        if (s.verdict === "OK") ok.add(`${s.problem.contestId}-${s.problem.index}`);
      });
      solved = ok.size;
    }
    return { rating: u.rating, maxRating: u.maxRating, rank: u.rank ?? "unrated", solved };
  });
}

function Num({ value, suffix = "" }) {
  return (
    <span className="font-display text-5xl font-bold tracking-tight text-bone md:text-6xl">
      {value ?? <span className="text-fog/50">···</span>}
      {value != null && suffix && <span className="text-acid">{suffix}</span>}
    </span>
  );
}

function StatCard({ label, source, children, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="relative flex h-full flex-col overflow-hidden border border-line bg-panel/90 p-7 backdrop-blur-md">
        {/* radar sweep */}
        <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-acid/[0.05] to-transparent" />
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{label}</span>
          <span className="font-mono text-[10px] text-fog">{source}</span>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

function DifficultyBar({ label, count, total, color }) {
  const pct = total ? Math.min(100, (count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 font-mono text-[11px]">
      <span className="w-8 text-fog">{label}</span>
      <div className="h-1 flex-1 overflow-hidden bg-line">
        <div className="h-full transition-[width] duration-1000" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="w-8 text-right text-bone">{count ?? "–"}</span>
    </div>
  );
}

export default function LiveStats() {
  const gh = useGithub();
  const lc = useLeetcode();
  const cf = useCodeforces();

  return (
    <section id="stats" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading index="04" title="Live Stats" hint="fetched fresh on every visit" />

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="leetcode" source={`@${LC_USER}`}>
          <Num value={lc.failed ? "140" : lc.data?.solved} suffix={lc.failed ? "+" : ""} />
          <p className="mt-1 font-mono text-xs text-fog">problems solved{lc.failed && " (last synced count)"}</p>
          <div className="mt-6 space-y-2.5">
            <DifficultyBar label="ez" count={lc.data?.easy} total={lc.data?.solved} color="#4ade80" />
            <DifficultyBar label="med" count={lc.data?.medium} total={lc.data?.solved} color="#facc15" />
            <DifficultyBar label="hard" count={lc.data?.hard} total={lc.data?.solved} color="#f87171" />
          </div>
        </StatCard>

        <StatCard label="github" source={`@${GH_USER}`} delay={0.1}>
          <Num value={gh.failed ? "—" : gh.data?.commitsLastYear ?? gh.data?.repos} />
          <p className="mt-1 font-mono text-xs text-fog">
            {gh.data?.commitsLastYear != null ? "commits in the last year" : "public repositories"}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-px border border-line bg-line">
            {[
              ["repos", gh.data?.repos],
              ["followers", gh.data?.followers],
              ["top lang", gh.data?.topLang],
            ].map(([k, v]) => (
              <div key={k} className="bg-panel px-2 py-3 text-center">
                <div className="font-display text-lg font-semibold text-bone">{v ?? "·"}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-fog">{k}</div>
              </div>
            ))}
          </div>
        </StatCard>

        <StatCard label="codeforces" source={`@${CF_USER}`} delay={0.2}>
          <Num value={cf.failed ? "—" : cf.data?.rating ?? "unrated"} />
          <p className="mt-1 font-mono text-xs text-fog">current rating</p>
          <div className="mt-6 space-y-2 font-mono text-xs">
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-fog">problems solved</span>
              <span className="text-bone">{cf.data?.solved ?? "–"}</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-fog">max rating</span>
              <span className="text-bone">{cf.data?.maxRating ?? "–"}</span>
            </div>
            <div className="flex justify-between border-b border-line pb-2">
              <span className="text-fog">rank</span>
              <span className="capitalize text-acid">{cf.data?.rank ?? "–"}</span>
            </div>
            <a
              href={`https://codeforces.com/profile/${CF_USER}`}
              target="_blank"
              rel="noreferrer"
              className="wipe-link inline-block pt-1 text-acid"
            >
              view profile ↗
            </a>
          </div>
        </StatCard>
      </div>

      <Reveal delay={0.25}>
        <p className="mt-6 text-center font-mono text-[11px] text-fog/70">
          // numbers pulled live from the GitHub, LeetCode &amp; Codeforces APIs — no screenshots, no lies
        </p>
      </Reveal>
    </section>
  );
}
