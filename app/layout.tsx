import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aerobotek Swarm Team",
  description:
    "Autonomous drone swarm intelligence for competition, search & rescue, and scientific research.",
  metadataBase: new URL("https://aerobotek-swarm.team"),
  openGraph: {
    title: "Aerobotek Swarm Team",
    description:
      "High-performance autonomous drone swarm systems for competition, rescue, and research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Global background lighting and grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(94,59,255,0.35),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(43,103,246,0.28),_transparent_60%),radial-gradient(circle_at_center,_rgba(56,189,248,0.22),_transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-30 bg-grid-slate/20"
          />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
