"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const filters = [
  "All Projects",
  "Web Development",
  "Software Consultancy",
  "Cloud Solutions",
  "Enterprise Software",
];

const projects = [
  {
    tag: "Enterprise CRM",
    category: "Enterprise Software",
    title: "Quantum Nexus",
    desc: "A scalable enterprise CRM built with React and Node.js. High-tech visual mapping for global data management.",
    gradient: "from-cyan-500/20 to-blue-600/10",
    button: true,
  },
  {
    tag: "Logistics",
    category: "Software Consultancy",
    title: "Velocity ERP",
    desc: "Real-time resource planning for a global logistics firm. Modernizing the supply chain.",
    gradient: "from-slate-700/40 to-slate-900",
    button: false,
  },
  {
    tag: "Cybersecurity",
    category: "Web Development",
    title: "Sentinel Shield",
    desc: "A cybersecurity dashboard and intrusion detection system. Neon accents for critical alerts.",
    gradient: "from-purple-500/20 to-indigo-600/10",
    button: false,
  },
  {
    tag: "Cloud Infrastructure",
    category: "Cloud Solutions",
    title: "Aether Cloud",
    desc: "Custom cloud-native infrastructure for an e-commerce giant, handling 1M+ requests per second.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    button: true,
  },
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          The Portfolio of the Kinetic{" "}
          <span className="text-cyan-400">Monolith</span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl text-lg">
          Architecting digital stability and fluid evolution through our past
          successes. Explore the intersection of technical precision and
          creative momentum.
        </p>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-3">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm border transition
            ${
              activeFilter === f
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${p.gradient} p-6 md:p-8 min-h-[260px] flex flex-col justify-end`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.15),transparent_60%)]" />

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-slate-300">
                {p.tag}
              </span>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                {p.title}
              </h2>

              <p className="mt-3 text-slate-400 max-w-md">
                {p.desc}
              </p>

              <button
                className={`mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm transition
                ${
                  p.button
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                View Case Study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}