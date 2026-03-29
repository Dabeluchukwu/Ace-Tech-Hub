import { Rocket, Compass, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#020c1b] text-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT */}
        <div className="max-w-xl">
          <span className="text-xs tracking-widest text-cyan-400 uppercase border border-cyan-400/30 px-3 py-1 rounded-full">
            Engineering the Future
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-300">ACE</span>{" "}
            <span className="text-cyan-400">TECH</span>
            <br />
            <span className="text-cyan-400">HUB</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Your Partner in Digital Innovation. We engineer scalable,
            high-performance web solutions for the modern era.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium hover:opacity-90 transition">
              Get a Consultation
            </button>

            <button className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative w-full max-w-lg">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-900/40 p-4 backdrop-blur-xl">
            <div className="h-[320px] rounded-xl bg-[#021526] flex items-center justify-center text-cyan-400">
              <span className="text-6xl opacity-40">?</span>
            </div>
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-6 left-6 bg-[#0b1a2d] p-4 rounded-xl shadow-lg border border-cyan-400/20 w-64">
            <p className="text-sm font-semibold text-white">
              Performance Optimization
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Achieving 99.9% uptime with enterprise-grade edge computing.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cyan-400 uppercase tracking-widest text-sm">
          Our Services
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-200">
          Building Scalable Digital Ecosystems
        </h2>

        {/* CARDS */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-[#0b1a2d] p-8 rounded-2xl border border-transparent hover:border-cyan-400/30 transition">
            <Rocket className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Scalable Web Development
            </h3>
            <p className="text-gray-400 text-sm">
              High-traffic architectures built on React, Next.js, and cloud-native infrastructure.
            </p>
          </div>

          {/* CARD 2 (HIGHLIGHTED) */}
          <div className="bg-[#0b1a2d] p-8 rounded-2xl border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <Compass className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Software Consultancy
            </h3>
            <p className="text-gray-400 text-sm">
              Strategic planning and architecture design to align technology with your business goals.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0b1a2d] p-8 rounded-2xl border border-transparent hover:border-cyan-400/30 transition">
            <Layers className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Full-Stack Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              End-to-end development from database architecture to intuitive user experiences.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}