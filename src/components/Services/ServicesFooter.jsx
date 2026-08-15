"use client";

import {
  CheckCircle,
  Rocket,
  Shield,
  Users,
  BarChart3,
  Globe,
  LineChart,
  Smartphone,
  ArrowRight,
  Code2,
  Database,
  Zap,
  Lock,
  Image,
  GitBranch,
} from "lucide-react";
import Link from "next/link";

export default function ServicesFooter() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* TECH STACK SHOWCASE */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium">
            OUR TECHNOLOGY STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Modern Tools for <span className="text-cyan-400">Modern Solutions</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We leverage the latest technologies to deliver high-performance, secure, 
            and scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <Code2 className="text-cyan-400 w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white">Frontend</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">React</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Next.js</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">TypeScript</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Tailwind CSS</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Vite</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">JavaScript</span>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Database className="text-cyan-400 w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white">Backend & Database</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Node.js</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Express.js</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">MongoDB</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Mongoose</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">REST APIs</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">PostgreSQL</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Prisma</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">AWS</span>

            </div>
          </div>

          {/* State & Real-time */}
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <Zap className="text-cyan-400 w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white">State & Real-time</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Zustand</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">React Query</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Axios</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Socket.IO</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">LocalStorage</span>
            
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <Lock className="text-cyan-400 w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white">Auth & Security</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">JWT</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">bcrypt</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">RBAC</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Cloudflare Turnstile</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">HTTPS/TLS</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">CORS</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Helmet</span>
            </div>
          </div>

          {/* Media & Payments */}
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <Image className="text-cyan-400 w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white">Media & Payments</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Cloudinary</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Paystack</span>
               <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Cloudflare R2 + Images</span>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <GitBranch className="text-cyan-400 w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white">DevOps & Tools</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Git & GitHub</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">pnpm</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Nodemon</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Vercel</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">Render</span>
              <span className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium">
            WHY ACE TECH HUB
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built for <span className="text-cyan-400">Excellence</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We combine deep technical expertise with business acumen to deliver 
            solutions that drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#1a2438] p-6 rounded-2xl text-center border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition">
              <Rocket className="text-cyan-400 w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-2">Scalable by Design</h4>
            <p className="text-sm text-gray-400">Architecture that grows seamlessly with your business</p>
          </div>

          <div className="bg-[#1a2438] p-6 rounded-2xl text-center border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
            <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-cyan-400 w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-2">Enterprise Security</h4>
            <p className="text-sm text-gray-400">Bank-grade encryption built into every layer</p>
          </div>

          <div className="bg-[#1a2438] p-6 rounded-2xl text-center border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition">
              <Users className="text-cyan-400 w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-2">Expert Team</h4>
            <p className="text-sm text-gray-400">4+ years combined experience</p>
          </div>

          <div className="bg-[#1a2438] p-6 rounded-2xl text-center border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition">
              <BarChart3 className="text-cyan-400 w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mb-2">Measurable Results</h4>
            <p className="text-sm text-gray-400">Data-driven decisions on every project</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium">
            WHO WE WORK WITH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We <span className="text-cyan-400">Serve</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5">
            <Globe className="text-cyan-400 w-6 h-6 mb-3" />
            <h4 className="font-semibold text-white mb-2">Technology & SaaS</h4>
            <p className="text-sm text-gray-400">Platforms, products, and cloud-native applications</p>
          </div>
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-cyan-400/20">
            <LineChart className="text-cyan-400 w-6 h-6 mb-3" />
            <h4 className="font-semibold text-white mb-2">Finance & Fintech</h4>
            <p className="text-sm text-gray-400">Secure, compliant, high-performance financial systems</p>
          </div>
          <div className="bg-[#1a2438] p-6 rounded-2xl border border-white/5">
            <Smartphone className="text-cyan-400 w-6 h-6 mb-3" />
            <h4 className="font-semibold text-white mb-2">Startups & Scale-ups</h4>
            <p className="text-sm text-gray-400">From MVP to market leader with scalable solutions</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a2438] to-[#121a2d] rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Build Something <br />
              <span className="text-cyan-400">Extraordinary?</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Let's discuss your project and create a solution that drives real 
              business growth. Get a free consultation with our technical experts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition hover:scale-105 duration-300 shadow-lg shadow-cyan-500/25 text-lg"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-gray-600 text-gray-300 hover:bg-white/5 transition hover:scale-105 duration-300 text-lg"
              >
                View Case Studies
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={16} className="text-cyan-400" />
                50+ Projects Delivered
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={16} className="text-cyan-400" />
                99.9% Uptime
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={16} className="text-cyan-400" />
                30+ Happy Clients
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={16} className="text-cyan-400" />
                24/7 Support
              </span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for New Projects
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-cyan-400">✦ Scale Active</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}