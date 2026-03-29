import {
  Code2,
  Database,
  Cloud,
  Shield,
  Gauge,
  Network,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#0b1220] text-white min-h-screen px-6 md:px-16 py-16">
      
      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-16">
        <p className="text-xs tracking-widest text-cyan-400 mb-4">
          — ARCHITECTING EXCELLENCE
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Our <span className="text-cyan-400">Expertise</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
          We drive innovation through rigorous technical architecture and
          forward-thinking engineering. Our approach treats every project as a
          kinetic monolith—stable, powerful, and infinitely scalable.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        {/* Scalable Web Dev */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#1a2438] to-[#121a2d] p-8 rounded-2xl">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full bg-[#0f172a] flex items-center justify-center">
              <Code2 className="text-cyan-400" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-3">
            Scalable Web Development
          </h3>

          <p className="text-gray-400 max-w-lg mb-6">
            High-traffic architectures engineered for performance. We specialize
            in React and Next.js ecosystems, ensuring your interface is as
            responsive as it is beautiful.
          </p>

          <div className="flex gap-2 text-xs">
            {["NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#0f172a] rounded-full text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Software Consultancy */}
        <div className="bg-gradient-to-br from-[#1a2438] to-[#121a2d] p-8 rounded-2xl">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full bg-[#0f172a] flex items-center justify-center">
              <Wrench className="text-cyan-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Software Consultancy
          </h3>

          <p className="text-gray-400 mb-6">
            Strategic planning and architectural design to future-proof your
            digital landscape.
          </p>

          <ul className="text-sm text-cyan-400 space-y-2">
            <li>• TECH AUDIT</li>
            <li>• SCALING ROADMAP</li>
          </ul>
        </div>

        {/* Full Stack */}
        <div className="bg-gradient-to-br from-[#1a2438] to-[#121a2d] p-8 rounded-2xl">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full bg-[#0f172a] flex items-center justify-center">
              <Database className="text-cyan-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Full-Stack Solutions
          </h3>

          <p className="text-gray-400">
            End-to-end development bridging the gap between robust databases and
            elegant user interfaces.
          </p>

          <div className="mt-6 h-24 bg-[#0f172a] rounded-lg opacity-50"></div>
        </div>

        {/* Cloud Architecture */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#1a2438] to-[#121a2d] p-8 rounded-2xl flex flex-col md:flex-row justify-between gap-6">
          
          <div>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#0f172a] flex items-center justify-center">
                <Cloud className="text-cyan-400" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Cloud-Native Architecture
            </h3>

            <p className="text-gray-400 max-w-lg">
              Deployment strategies designed for the modern web. We leverage AWS,
              Azure, and GCP to build resilient, distributed systems that grow
              with your user base.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[Shield, Gauge, Network, Database].map((Icon, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-[#0f172a] rounded-xl flex items-center justify-center"
              >
                <Icon className="text-cyan-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="bg-gradient-to-br from-[#121a2d] to-[#1a2438] rounded-3xl p-12 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform <br /> Your Business?
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <button className="px-6 py-3 rounded-full bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition">
              Talk to an Expert ↗
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/5 transition">
              VIEW CASE STUDIES
            </button>
          </div>

          <p className="text-xs tracking-widest text-cyan-400">
            ● SYSTEMS OPERATIONAL • SCALE ACTIVE
          </p>
        </div>
      </section>
    </main>
  );
}