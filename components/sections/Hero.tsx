"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const Spline = dynamic(
  () => import("@splinetool/react-spline"),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center gap-12 px-6 pt-10 lg:flex-row lg:items-stretch lg:px-10 lg:pt-14"
    >
      {/* Left: copy and CTAs */}
      <div className="relative z-10 flex w-full flex-1 flex-col gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          Live swarm telemetry · Mission-ready
        </div>

        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Aerobotek{" "}
            <span className="heading-gradient block">Swarm Team</span>
          </h1>
          <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Autonomous drone swarm intelligence engineered for{" "}
            <span className="text-cyan-300">elite competition</span>,
            time-critical{" "}
            <span className="text-cyan-300">search &amp; rescue missions</span>,
            and frontier{" "}
            <span className="text-cyan-300">scientific research</span>. A
            full-stack aerospace lab built around collaborative robotics.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-3">
            <Link
              href="#competition"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-amber)] via-[var(--color-accent-purple)] to-[var(--color-accent-blue)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_35px_rgba(94,59,255,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Mission</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#research"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-[0_0_20px_rgba(15,23,42,0.9)] transition-colors hover:border-cyan-400/80 hover:text-cyan-200"
            >
              <PlayCircle className="h-4 w-4 text-cyan-300" />
              <span>View Research</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 text-[0.7rem] text-slate-400">
            <div className="flex -space-x-1 overflow-hidden">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 shadow-[0_0_15px_rgba(248,250,252,0.6)]" />
            </div>
            <span className="max-w-[12rem] text-xs leading-snug text-slate-400">
              Multi-agent autonomy stack tested in live field exercises.
            </span>
          </div>
        </div>
      </div>

      {/* Right: Spline swarm visualization */}
      <div className="relative z-0 w-full flex-1">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(245,164,91,0.48),_transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-12 top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,_rgba(94,59,255,0.55),_transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-52 rounded-full bg-[radial-gradient(circle_at_center,_rgba(43,103,246,0.55),_transparent_60%)] blur-3xl" />

        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950/40 glow-ring sm:h-[420px] lg:h-[460px]">
          <div className="pointer-events-none absolute inset-0 spline-glow opacity-60" />
          <Spline
            scene="https://prod.spline.design/r-px93szD5rk2Buu/scene.splinecode"
            className="h-full w-full"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
          </div>

          <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-[0.65rem] text-slate-300/90 backdrop-blur-2xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="uppercase tracking-[0.22em] text-slate-400">
                Swarm Link · Online
              </span>
            </div>
            <div className="flex items-center gap-3 text-[0.6rem] text-slate-400">
              <span>
                24 drones · <span className="text-cyan-300">synchronized</span>
              </span>
              <span>Latency &lt; 40 ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

