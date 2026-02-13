export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} Aerobotek Swarm Team. All rights
          reserved.
        </p>
        <p className="text-[0.7rem] text-slate-600">
          Engineered for autonomous swarm intelligence in{" "}
          <span className="text-cyan-300">competition</span>,{" "}
          <span className="text-cyan-300">rescue</span>, and{" "}
          <span className="text-cyan-300">research</span>.
        </p>
      </div>
    </footer>
  );
}

