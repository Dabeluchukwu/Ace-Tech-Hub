"use client";

import { ArrowRight, Sparkles, User, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#0b1220] text-white min-h-screen">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#0b1220] to-[#0e1a33] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-6">
            OUR VISIONARY DIRECTIVE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gray-300">ACE </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Hub
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl text-lg mx-auto">
            Redefining digital infrastructure through unyielding stability and
            fluid evolution. Your Partner in Digital Innovation.
          </p>

          {/* Call to Action */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full text-sm font-medium hover:opacity-90 transition hover:scale-105 duration-300"
            >
              <Sparkles size={18} />
              Let's Build Together
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition hover:scale-105 duration-300"
            >
              <Briefcase size={18} />
              See Our Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 md:px-16 py-20 bg-[#0b1220]">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* IMAGE WITH FOUNDER INFO */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0e1a33] to-[#0b1220] p-2 border border-white/5">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/DabiMainPicCrop.jpeg"
                  alt="ACE TECH HUB Founders"
                  fill
                  className="rounded-xl object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            
            {/* Founder Info */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 mb-3">
                <User size={16} className="text-cyan-400" />
                <span className="text-sm text-cyan-400">Founder</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Nwabueze Dabeluchukwu
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Leading Digital Innovation at ACE TECH HUB
              </p>
              <div className="flex items-center gap-3 mt-3 justify-center md:justify-start">
                <span className="text-xs text-cyan-400/60">✦ Visionary Architect</span>
                <span className="w-1 h-1 bg-cyan-400/30 rounded-full"></span>
                <span className="text-xs text-cyan-400/60">✦ Tech Strategist</span>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div className="w-10 h-[2px] bg-cyan-400 mb-4"></div>

            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              ACE TECH HUB emerged from a simple observation: most digital
              systems are either rigid structures that break or fluid
              experiments that fail under pressure.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              We pioneered the 'Kinetic Monolith'—a philosophy where foundational
              code remains as solid as granite while the interface layers remain
              as adaptable as water. This duality allows our partners to scale
              without friction.
            </p>

            {/* QUOTE BOX */}
            <div className="border-l-4 border-cyan-400 bg-white/5 backdrop-blur p-4 rounded-md text-gray-300 italic">
              "Architecture is not just about structure; it's about the energy
              that flows through it."
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}