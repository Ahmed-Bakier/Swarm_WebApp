import { Cpu, Radar, Route } from "lucide-react";
import { ModuleCard } from "@/components/ui/ModuleCard";

const competitionModules = [
  {
    title: "Swarm Competition Stack",
    description:
      "End-to-end autonomy pipeline for multi-stage missions: take-off, exploration, mapping, target classification, and landing.",
    badge: "Competition mission system",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Adaptive Mission Planning",
    description:
      "Real-time task allocation and trajectory optimization that reconfigures the swarm under strict competition time limits.",
    badge: "Multi-agent planning",
    icon: <Route className="h-5 w-5" />,
  },
  {
    title: "Live Arena Telemetry",
    description:
      "High-frequency telemetry and health monitoring overlayed on the competition map, enabling safe, aggressive maneuvers.",
    badge: "Telemetry & control",
    icon: <Radar className="h-5 w-5" />,
  },
];

export function CompetitionSection() {
  return (
    <section
      id="competition"
      className="mx-auto max-w-6xl px-6 lg:px-10"
      aria-labelledby="competition-heading"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <span className="badge-chip">Competition missions</span>
          <h2
            id="competition-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Designed for high-intensity swarm arenas.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Our swarm platform is stress-tested in international robotics and
            drone competitions. Each mission scenario pushes autonomy, safety,
            and reliability under strict scoring rules and unforgiving time
            windows.
          </p>
        </div>
        <div className="hidden text-right text-xs text-slate-400 sm:block">
          <p className="uppercase tracking-[0.22em]">Mode</p>
          <p className="font-medium text-cyan-300">Competition · Armed</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {competitionModules.map((module) => (
          <ModuleCard key={module.title} {...module} />
        ))}
      </div>
    </section>
  );
}

