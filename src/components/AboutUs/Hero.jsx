import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#0b1220] text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#0b1220] to-[#0e1a33]">
        <p className="text-xs tracking-[0.3em] text-cyan-400 mb-6">
          OUR VISIONARY DIRECTIVE
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          <span className="text-gray-300">Architect the </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Kinetic Monolith
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Redefining digital infrastructure through unyielding stability and
          fluid evolution. Your Partner in Digital Innovation.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium hover:opacity-90 transition">
            <Sparkles size={18} />
            Join Our Mission
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500 text-blue-300 hover:bg-blue-500/10 transition">
            Explore The Tech
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 md:px-16 py-20 bg-[#0b1220]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0e1a33] to-[#0b1220] p-2">
            <img
              src="/monolith.png"
              alt="Monolith"
              className="rounded-xl object-cover w-full h-full opacity-90"
            />
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
              We pioneered the ‘Kinetic Monolith’—a philosophy where foundational
              code remains as solid as granite while the interface layers remain
              as adaptable as water. This duality allows our partners to scale
              without friction.
            </p>

            {/* QUOTE BOX */}
            <div className="border-l-4 border-cyan-400 bg-white/5 backdrop-blur p-4 rounded-md text-gray-300 italic">
              “Architecture is not just about structure; it's about the energy
              that flows through it.”
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}