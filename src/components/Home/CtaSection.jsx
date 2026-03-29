"use client";

import { Laptop, Headphones } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#020c1b] text-white min-h-screen px-6 md:px-16 py-16">
      
      {/* ABOUT SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-teal-900/40 to-transparent p-4">
          <img
            src="/laptop.jpg" // replace with your image
            alt="Laptop"
            className="rounded-xl object-cover w-full h-full opacity-90"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-blue-400 mb-3">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Commitment to Digital Innovation
          </h1>

          <p className="text-gray-400 mb-8 max-w-xl">
            At ACE TECH HUB, we don’t just build websites; we architect the
            future. Our team merges technical precision with creative vision to
            deliver scalable solutions that empower brands to dominate the
            digital landscape.
          </p>

          {/* STATS */}
          <div className="flex gap-12">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold">
                <Laptop size={22} />
                100+
              </div>
              <p className="text-xs text-gray-400 tracking-wider mt-1">
                PROJECTS DELIVERED
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-300 text-2xl font-bold">
                <Headphones size={22} />
                24/7
              </div>
              <p className="text-xs text-gray-400 tracking-wider mt-1">
                TECHNICAL SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-32 flex justify-center">
        <div className="w-full max-w-4xl bg-gradient-to-br from-[#0a1a2f] to-[#081426] border border-cyan-900/30 rounded-3xl p-12 text-center shadow-lg">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Vision?
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the ranks of innovative companies building their future with
            ACE TECH HUB.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all shadow-md">
              Start Your Project
            </button>

            <button className="px-8 py-3 rounded-full border border-cyan-500 text-white hover:bg-cyan-500/10 transition-all">
              Speak to an Expert
            </button>

          </div>
        </div>
      </section>

    </main>
  );
}