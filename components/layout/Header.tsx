"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#competition", label: "Competition" },
  { href: "#rescue", label: "Search & Rescue" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/80 ring-1 ring-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            <span className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-400/30 via-slate-900 to-slate-950" />
            <span className="relative h-1.5 w-4 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Aerobotek
            </span>
            <span className="text-sm font-medium text-slate-100">
              Swarm Team
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-medium text-slate-300/90 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative tracking-[0.18em] transition-colors hover:text-cyan-300"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 opacity-70 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/80 text-slate-100 shadow-[0_0_15px_rgba(15,23,42,0.9)] md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 px-6 py-3 md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 tracking-[0.16em] text-xs uppercase text-slate-300 transition-colors hover:bg-slate-900/80 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

