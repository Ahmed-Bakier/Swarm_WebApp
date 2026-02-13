import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-14 lg:px-10 lg:pb-20"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="glass-panel p-6 sm:p-8">
          <span className="badge-chip mb-3 inline-flex">
            Contact &amp; partnerships
          </span>
          <h2
            id="contact-heading"
            className="mb-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Connect with the Aerobotek Swarm Team.
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Whether you&apos;re organizing a competition, exploring swarm
            technology for search &amp; rescue, or looking to collaborate on
            research, we&apos;d love to hear from you.
          </p>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-800/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-colors focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
                  placeholder="Mission control lead, organizer, or collaborator"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-800/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-colors focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
                  placeholder="you@organization.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="topic"
                className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400"
              >
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                className="w-full rounded-xl border border-slate-800/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-colors focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
              >
                <option>Competition invitation</option>
                <option>Search &amp; rescue collaboration</option>
                <option>Research partnership</option>
                <option>Speaking or demo request</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400"
              >
                Mission brief
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-800/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-colors focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
                placeholder="Share your mission objectives, timelines, and how swarm robotics fits into your vision."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)] via-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              <span>Transmit message</span>
            </button>

            <p className="text-[0.7rem] text-slate-500">
              This form is a visual prototype. Integrate with your preferred
              email, CRM, or mission-management pipeline.
            </p>
          </form>
        </div>

        <div className="glass-panel flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Mission channels
            </h3>
            <div className="space-y-3 text-sm text-slate-300/90">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                  Direct line
                </p>
                <p className="font-medium text-cyan-300">
                  swarm@aerobotek.example
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                  Lab location
                </p>
                <p>Robotics &amp; autonomy lab, Aerobotek campus</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-4 text-xs text-slate-300/90">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
              Mission readiness
            </p>
            <div className="flex items-center justify-between">
              <p>
                Swarm fleet status:{" "}
                <span className="font-semibold text-emerald-300">
                  Operational
                </span>
              </p>
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            </div>
            <p className="text-[0.7rem] text-slate-500">
              Typical response time for partnership requests: 3–5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

