export default function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* faint blueprint grid, faded toward the edges */}
      <div className="bg-grid absolute inset-0" />
      {/* two very low-key color washes so pure black doesn't feel flat */}
      <div className="absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-acid/[0.045] blur-[130px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-fog/[0.05] blur-[130px]" />
    </div>
  );
}
