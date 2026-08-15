"use client";

import { Laptop, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <main className="bg-[#020c1b] text-white min-h-screen px-6 md:px-16 py-16">
      
      {/* ABOUT SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        {/* LEFT IMAGE */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/20 to-transparent p-2">
          <div 
            className="rounded-xl h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/AceHome2.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b]/50 to-transparent rounded-xl" />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#0b1a2d] p-4 rounded-xl border border-cyan-400/20 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">10+ Years</p>
                <p className="text-xs text-gray-400">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm tracking-[0.3em] text-cyan-400 mb-3 font-medium">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Commitment to Digital <br />
            <span className="text-cyan-400">Innovation</span>
          </h1>

          <p className="text-gray-400 mb-6 max-w-xl leading-relaxed">
            At ACE TECH HUB, we don't just build websites; we architect the
            future. Our team merges technical precision with creative vision to
            deliver scalable solutions that empower brands to dominate the
            digital landscape.
          </p>

          <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
            We believe in building long-term partnerships with our clients,
            ensuring every solution evolves with their business needs.
          </p>

          {/* STATS */}
          <div className="flex gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold">
                <Laptop size={22} />
                50+
              </div>
              <p className="text-xs text-gray-400 tracking-wider mt-1">
                PROJECTS DELIVERED
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold">
                <Headphones size={22} />
                24/7
              </div>
              <p className="text-xs text-gray-400 tracking-wider mt-1">
                TECHNICAL SUPPORT
              </p>
            </div>
          </div>

          {/* CTA Link */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium group"
          >
            Learn More About Us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-32 flex justify-center max-w-6xl mx-auto">
        <div className="w-full max-w-4xl bg-gradient-to-br from-[#0a1a2f] to-[#081426] border border-cyan-900/30 rounded-3xl p-12 text-center shadow-lg shadow-cyan-500/5">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your <span className="text-cyan-400">Vision?</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the ranks of innovative companies building their future with
            ACE TECH HUB.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition-all shadow-md shadow-cyan-500/25 hover:scale-105 duration-300"
            >
              Start Your Project
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-105 duration-300"
            >
              Speak to an Expert
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}