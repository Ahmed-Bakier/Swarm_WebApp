import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ModuleCardProps = {
  title: string;
  description: string;
  badge: string;
  href?: string;
  ctaLabel?: string;
  icon?: ReactNode;
};

export function ModuleCard({
  title,
  description,
  badge,
  href,
  ctaLabel = "Learn More",
  icon,
}: ModuleCardProps) {
  const Container = href ? Link : "div";

  return (
    <Container
      href={href as string}
      className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] ring-1 ring-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:ring-cyan-500/50"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-cyan-300 ring-1 ring-cyan-500/40 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            {icon}
          </div>
        )}
        <div className="space-y-3">
          <span className="badge-chip">{badge}</span>
          <h3 className="text-lg font-semibold tracking-tight text-slate-50">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300/80">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-1 font-medium text-cyan-300">
          {ctaLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
          Swarm Module
        </span>
      </div>
    </Container>
  );
}

