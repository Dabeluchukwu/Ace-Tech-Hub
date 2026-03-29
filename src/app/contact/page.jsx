import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Send,
  Code,
  Cloud,
  Shield,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#081028] to-[#0b1a3a] text-white px-6 pt-24 pb-12">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="space-y-8">
          <h1 className="text-5xl font-semibold leading-tight">
            Ignite Your <br />
            <span className="text-cyan-400">Digital Vision</span>
          </h1>

          <p className="text-gray-400 max-w-md">
            Whether you're scaling a startup or modernizing an enterprise, our
            consultancy bridge the gap between complex tech and human impact.
          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-4">
            <div className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4">
              <Mail className="text-cyan-400" size={20} />
              <div>
                <p className="text-xs text-gray-400">EMAIL US</p>
                <p className="text-sm">hello@acetechhub.io</p>
              </div>
            </div>

            <div className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4">
              <Phone className="text-cyan-400" size={20} />
              <div>
                <p className="text-xs text-gray-400">CALL EXPERTS</p>
                <p className="text-sm">+1 (888) ACE-TECH</p>
              </div>
            </div>

            <div className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4">
              <MapPin className="text-cyan-400" size={20} />
              <div>
                <p className="text-xs text-gray-400">HEADQUARTERS</p>
                <p className="text-sm">
                  Silicon Valley • New York • Remote
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 pt-4">
            JOIN 100+ COMPANIES SCALING WITH US
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0f1c3d] p-8 rounded-2xl border border-cyan-500/20 shadow-xl">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="John Doe"
              className="bg-[#1a274f] p-3 rounded-lg text-sm outline-none"
            />
            <input
              placeholder="john@company.com"
              className="bg-[#1a274f] p-3 rounded-lg text-sm outline-none"
            />
          </div>

          <div className="mb-4 relative">
            <select className="w-full bg-[#1a274f] p-3 rounded-lg text-sm appearance-none outline-none">
              <option>Select a Service</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
          </div>

          <textarea
            rows={5}
            placeholder="Tell us about your challenges and goals..."
            className="w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none mb-6"
          />

          <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Send Request <Send size={16} />
          </button>

          <div className="mt-6 text-xs text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            AVERAGE RESPONSE TIME: 4 HOURS
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Engineering <span className="text-cyan-400">Excellence</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-[#0f1c3d] p-6 rounded-xl text-left">
            <Code className="text-cyan-400 mb-4" />
            <h3 className="font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-400 text-sm">
              Leveraging React, Node, and Rust to build bulletproof architectures
              that scale infinitely.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0f1c3d] p-6 rounded-xl text-left">
            <Cloud className="text-cyan-400 mb-4" />
            <h3 className="font-semibold mb-2">Cloud Native</h3>
            <p className="text-gray-400 text-sm">
              AWS, Azure, and Google Cloud experts ensuring your uptime remains
              at 99.99% globally.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0f1c3d] p-6 rounded-xl text-left">
            <Shield className="text-cyan-400 mb-4" />
            <h3 className="font-semibold mb-2">Security First</h3>
            <p className="text-gray-400 text-sm">
              Enterprise-grade security protocols baked into every line of code
              from day one.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}