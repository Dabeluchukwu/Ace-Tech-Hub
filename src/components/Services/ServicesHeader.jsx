"use client";

import Link from "next/link";

export default function ServicesHeader() {
  return (
    <section className="max-w-6xl mx-auto mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 font-medium">
            — COMPREHENSIVE SOLUTIONS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            What We <span className="text-cyan-400">Deliver</span>
          </h1>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400 bg-[#1a2438]/50 px-4 py-2.5 rounded-full border border-white/5">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Available for New Projects</span>
        </div>
      </div>

      <p className="mt-6 text-gray-400 max-w-3xl leading-relaxed text-lg">
        ACE TECH HUB provides end-to-end technology solutions for businesses ready 
        to scale. From strategic consulting to full-scale development, we deliver 
        enterprise-grade systems that drive growth and innovation.
      </p>
    </section>
  );
}