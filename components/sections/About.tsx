export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 lg:px-10"
      aria-labelledby="about-heading"
    >
      <div className="glass-panel p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:items-start">
          <div className="space-y-5">
            <span className="badge-chip">About the swarm team</span>
            <h2
              id="about-heading"
              className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              Aerospace-grade autonomy, built with Aerobotek.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
              The Aerobotek Swarm Team unites robotics engineers, AI
              researchers, and pilots to design, build, and deploy autonomous
              drone swarms. From high-intensity competition arenas to
              time-critical search &amp; rescue environments, we treat every
              mission as a full-stack systems challenge.
            </p>
            <p className="text-sm leading-relaxed text-slate-300/85 sm:text-base">
              In collaboration with{" "}
              <span className="font-medium text-cyan-300">Aerobotek</span>, we
              integrate perception, planning, and communication pipelines into a
              single, field-tested swarm stack. Each vehicle is a node in a
              larger aerial mesh — coordinating trajectories, sensing the world,
              and adapting in real time.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_0_26px_rgba(15,23,42,0.9)]">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              System snapshot
            </h3>
            <dl className="grid grid-cols-2 gap-4 text-xs text-slate-300/90 sm:text-sm">
              <div className="space-y-1">
                <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                  Swarm size
                </dt>
                <dd className="text-sm font-semibold text-slate-50">
                  10–40 vehicles
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                  Mission profiles
                </dt>
                <dd className="text-sm font-semibold text-slate-50">
                  Competition, SAR, R&amp;D
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                  Core stack
                </dt>
                <dd className="text-sm font-semibold text-slate-50">
                  Multi-agent planning, onboard vision, UWB mesh
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                  Lab footprint
                </dt>
                <dd className="text-sm font-semibold text-slate-50">
                  Indoor arena &amp; outdoor test ranges
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

