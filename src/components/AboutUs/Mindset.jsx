import {
  Layers,
  Shield,
  Cloud,
  Rocket,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#06142A] text-white min-h-screen px-6 md:px-16 py-16 space-y-28">
      
      {/* SECTION 1 */}
      <section>
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-xs tracking-widest text-cyan-400 mb-2">
              PROVEN COMPETENCE
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold">
              The Collective Mindset
            </h1>
          </div>

          <div className="text-right">
            <p className="text-4xl font-bold text-cyan-400">150+</p>
            <p className="text-xs text-gray-400">
              COMBINED YEARS OF SENIOR EXPERIENCE
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Full Stack */}
          <div className="md:col-span-2 bg-[#0D1F3A] p-8 rounded-2xl">
            <Layers className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Full-Stack Sovereignty
            </h3>
            <p className="text-gray-400 text-sm">
              From low-level kernel optimization to high-fidelity frontend
              orchestration, we own the entire technical stack with absolute
              precision.
            </p>
          </div>

          {/* Security */}
          <div className="bg-[#0D1F3A] p-8 rounded-2xl">
            <Shield className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Hardened Security
            </h3>
            <p className="text-gray-400 text-sm">
              Security is baked into the foundation, not bolted on as an
              afterthought.
            </p>
          </div>

          {/* Scale */}
          <div className="bg-[#0D1F3A] p-8 rounded-2xl">
            <Cloud className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Infinite Scale
            </h3>
            <p className="text-gray-400 text-sm">
              Architectures designed to handle exponential growth without
              latency.
            </p>
          </div>

          {/* Legacy */}
          <div className="md:col-span-2 bg-[#0D1F3A] p-8 rounded-2xl flex gap-6 items-center">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Layers className="text-cyan-400" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Legacy Modernization
              </h3>
              <p className="text-gray-400 text-sm">
                We don't just build the new; we breathe kinetic energy into
                aging systems, transforming liabilities into competitive
                assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-2">
          Our Core Values
        </h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Innovation */}
          <div className="space-y-4">
            <div className="w-14 h-14 mx-auto rounded-xl bg-[#0D1F3A] flex items-center justify-center">
              <Rocket className="text-cyan-400" />
            </div>
            <h4 className="tracking-widest text-sm font-semibold">
              INNOVATION
            </h4>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              Constant iteration is our pulse. We don't settle for "best
              practice"—we define the next frontier of digital capability.
            </p>
          </div>

          {/* Scalability */}
          <div className="space-y-4">
            <div className="w-14 h-14 mx-auto rounded-xl bg-[#0D1F3A] flex items-center justify-center">
              <TrendingUp className="text-cyan-400" />
            </div>
            <h4 className="tracking-widest text-sm font-semibold">
              SCALABILITY
            </h4>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              The Monolith must grow. We build systems that expand effortlessly,
              matching your ambition at every stage of the journey.
            </p>
          </div>

          {/* Integrity */}
          <div className="space-y-4">
            <div className="w-14 h-14 mx-auto rounded-xl bg-[#0D1F3A] flex items-center justify-center">
              <BadgeCheck className="text-cyan-400" />
            </div>
            <h4 className="tracking-widest text-sm font-semibold">
              INTEGRITY
            </h4>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              Absolute transparency in our architecture and our partnerships.
              We architect trust through flawless execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 CTA */}
      <section className="flex justify-center">
        <div className="bg-[#0D1F3A] rounded-3xl px-10 py-16 text-center max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Architect Your Future?
          </h2>

          <p className="text-gray-400 mb-8">
            Join ACE TECH HUB and experience the convergence of stability and
            speed.
          </p>

          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:opacity-90 transition">
            Meet the Team
          </button>
        </div>
      </section>

    </main>
  );
}