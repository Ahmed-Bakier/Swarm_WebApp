import { FileText, Network, Sparkles } from "lucide-react";
import { ModuleCard } from "@/components/ui/ModuleCard";

const researchItems = [
  {
    title: "Distributed Swarm Coordination for SAR",
    description:
      "Field-tested algorithms for distributed task allocation and coverage in cluttered, partially observable environments.",
    badge: "Paper · 2025",
    icon: <Network className="h-5 w-5" />,
  },
  {
    title: "Learning-based Multi-Agent Navigation",
    description:
      "Hybrid control combining model-based safety guarantees with learning-driven navigation in dense, dynamic scenes.",
    badge: "Preprint",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Simulation-to-Field Transfer",
    description:
      "Bridging the gap between simulation and hardware through domain randomization and fleet-level system testing.",
    badge: "Workshop",
    icon: <FileText className="h-5 w-5" />,
  },
];

export function ResearchSection() {
  return (
    <section
      id="research"
      className="mx-auto max-w-6xl px-6 lg:px-10"
      aria-labelledby="research-heading"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <span className="badge-chip">Research &amp; publications</span>
          <h2
            id="research-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Scientific work behind the swarm.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Our competition and field deployments are backed by peer-reviewed
            research and open scientific collaboration, focusing on autonomy,
            safety, and resilient multi-robot systems.
          </p>
        </div>
        <p className="text-xs text-slate-400 sm:text-right">
          Selected highlights. Full publication list available upon request.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {researchItems.map((paper) => (
          <ModuleCard
            key={paper.title}
            {...paper}
            ctaLabel="Open abstract"
            href="#"
          />
        ))}
      </div>
    </section>
  );
}

