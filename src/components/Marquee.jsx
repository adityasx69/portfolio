const ITEMS = [
  "machine learning", "spring boot", "python", "pytorch", "java", "pandas",
  "numpy", "postgresql", "scikit-learn", "rest apis", "react", "dsa",
];

export default function Marquee({ reverse = false, className = "" }) {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className={`overflow-hidden border-y border-line py-4 ${className}`}>
      <div
        className={`marquee-track flex w-max gap-0 whitespace-nowrap ${reverse ? "marquee-reverse" : ""}`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display text-xl font-semibold uppercase tracking-tight text-fog/70 md:text-2xl"
          >
            <span className="px-6">{item}</span>
            <span className="text-acid">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
