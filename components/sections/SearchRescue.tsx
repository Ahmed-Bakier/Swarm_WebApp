import { Activity, Radio, Waves } from "lucide-react";
import { ModuleCard } from "@/components/ui/ModuleCard";

const rescueModules = [
  {
    title: "Collaborative Search Patterns",
    description:
      "Coverage-optimized trajectories coordinate dozens of drones to sweep hazardous environments with minimal blind spots.",
    badge: "Multi-drone search",
    icon: <Waves className="h-5 w-5" />,
  },
  {
    title: "Onboard Sensing & Understanding",
    description:
      "Onboard RGB, thermal, and depth sensing fused with vision models to detect, localize, and prioritize points of interest.",
    badge: "Perception stack",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Resilient Mesh Networking",
    description:
      "Distributed communication between drones and ground station with graceful degradation when links are weak or lost.",
    badge: "Mesh comms",
    icon: <Radio className="h-5 w-5" />,
  },
];


export function SearchRescueSection() {
  return (
    <section
      id="rescue"
      className="mx-auto max-w-6xl px-6 lg:px-10"
      aria-labelledby="rescue-heading"
    >
      <div className="glass-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:p-10">
        <div className="space-y-4">
          <span className="badge-chip">Search &amp; rescue</span>
          <h2
            id="rescue-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Swarm autonomy for real-world emergencies.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
            In rescue operations, every second counts. Our swarm system is tuned
            for fast deployment, high situational awareness, and robust operation
            in GPS-denied, sensor-degraded environments.
          </p>
          <p className="text-sm leading-relaxed text-slate-300/85 sm:text-base">
            Drones coordinate to search, detect, and track signals of interest,
            while a command interface provides mission control teams with
            high-level controls, confidence overlays, and suggested next actions.
          </p>

          <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300/90 sm:text-sm">
            <div className="space-y-1">
              <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                Response time
              </dt>
              <dd className="text-sm font-semibold text-slate-50">
                &lt; 5 minutes to air
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                Coverage radius
              </dt>
              <dd className="text-sm font-semibold text-slate-50">
                Up to 4 km<sup>2</sup> per sortie
              </dd>
            </div>
          </dl>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {rescueModules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}

