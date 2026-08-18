"use client";

import {
  Code2,
  Database,
  Cloud,
  Shield,
  Gauge,
  Network,
  Wrench,
  Layers,
  CheckCircle,
  Server,
} from "lucide-react";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* SERVICE 1 - Web Development */}
      <section id="web-development" className="mb-20 scroll-mt-20"> {/* ✅ Added ID */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Code2 className="text-cyan-400 w-8 h-8" />
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                Core Service
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Scalable Web <br />
              <span className="text-cyan-400">Development</span>
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We build high-performance web applications engineered for scale. 
              Whether you're launching a startup or modernizing an enterprise platform, 
              our solutions handle millions of users without breaking a sweat.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">What We Build:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Enterprise web applications (React, Next.js)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>E-commerce platforms with payment integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Custom CMS and content platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Progressive Web Apps (PWAs) with offline support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">React</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">Next.js</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">JavaScript (ES6+)</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">TypeScript</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">Vite</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">Node.js</span>
                  <span className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5">Express.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2 - Consultancy */}
      <section id="consultancy" className="mb-20 bg-[#1a2438]/30 rounded-3xl p-8 md:p-12 border border-cyan-400/10 scroll-mt-20"> {/* ✅ Added ID */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <Wrench className="text-cyan-400 w-8 h-8" />
              </div>
              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                Strategic
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Software <br />
              <span className="text-cyan-400">Consultancy</span>
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Strategic technology consulting to align your digital infrastructure 
              with business goals. We help you make informed decisions about architecture, 
              technology selection, and digital transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Our Approach:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                    <span><strong className="text-white">Technology Audit:</strong> Comprehensive assessment of your current stack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                    <span><strong className="text-white">Scaling Roadmap:</strong> Strategic plan for growth and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                    <span><strong className="text-white">Architecture Design:</strong> Blueprints for scalable, resilient systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                    <span><strong className="text-white">Tech Stack Advisory:</strong> Data-driven technology recommendations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Who Benefits:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Startups scaling from MVP to production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Enterprises modernizing legacy systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Companies planning digital transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Venture-backed tech companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3 - Full Stack */}
      <section id="full-stack" className="mb-20 scroll-mt-20"> {/* ✅ Added ID */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Layers className="text-cyan-400 w-8 h-8" />
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                End-to-End
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Full-Stack <br />
              <span className="text-cyan-400">Solutions</span>
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Complete development services covering every layer of your application 
              stack. From database architecture to pixel-perfect interfaces, we deliver 
              cohesive, integrated solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Frontend:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Responsive, accessible UI/UX implementations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Component-based architecture with React</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>State management (Zustand, React Query)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Performance optimization & SEO</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Backend:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>RESTful APIs with Node.js & Express.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Database design (MongoDB with Mongoose)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Authentication & authorization (JWT, RBAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Real-time features with Socket.IO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4 - Cloud Architecture */}
      <section id="cloud-architecture" className="bg-[#1a2438]/30 rounded-3xl p-8 md:p-12 border border-white/5 scroll-mt-20"> {/* ✅ Added ID */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Cloud className="text-cyan-400 w-8 h-8" />
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                Infrastructure
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Cloud-Native <br />
              <span className="text-cyan-400">Architecture</span>
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Modern infrastructure designed for the cloud-first era. We build 
              resilient, distributed systems that automatically scale with your 
              user base while maintaining enterprise-grade security.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#0f172a] p-4 rounded-xl">
                <Server className="text-cyan-400 w-5 h-5 mb-2" />
                <h4 className="font-semibold text-sm text-white mb-1">Infrastructure</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>MongoDB Atlas</li>
                  <li>Vercel & Render</li>
                  <li>Cloudflare Turnstile</li>
                </ul>
              </div>
              <div className="bg-[#0f172a] p-4 rounded-xl">
                <Shield className="text-cyan-400 w-5 h-5 mb-2" />
                <h4 className="font-semibold text-sm text-white mb-1">Security</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>JWT & bcrypt</li>
                  <li>RBAC authorization</li>
                  <li>HTTPS/TLS encryption</li>
                </ul>
              </div>
              <div className="bg-[#0f172a] p-4 rounded-xl">
                <Gauge className="text-cyan-400 w-5 h-5 mb-2" />
                <h4 className="font-semibold text-sm text-white mb-1">Performance</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>Auto-scaling</li>
                  <li>CDN & edge computing</li>
                  <li>Load balancing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}