"use client";

import { Rocket, Compass, Layers, ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="bg-[#020c1b] text-white overflow-hidden">
      
      {/* HERO SECTION - Full Background Image */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image using CSS */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/AceHomeHero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020c1b]/90 via-[#020c1b]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT - Content */}
            <div className="max-w-xl">
              <span className="inline-block text-xs tracking-[0.3em] text-cyan-400 uppercase border border-cyan-400/30 px-4 py-2 rounded-full mb-6">
                Engineering the Future
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-200">ACE</span>{" "}
                <span className="text-cyan-400">TECH</span>
                <br />
                <span className="text-cyan-400">HUB</span>
              </h1>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
                Your Partner in Digital Innovation. We engineer scalable,
                high-performance web solutions for the modern era.
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle size={16} className="text-cyan-400" />
                  <span>50+ Projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle size={16} className="text-cyan-400" />
                  <span>30+ Clients</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle size={16} className="text-cyan-400" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium hover:opacity-90 transition hover:scale-105 duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Get a Consultation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition hover:scale-105 duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* RIGHT - Floating Stats Card */}
            <div className="relative hidden lg:block">
              <div className="bg-[#0b1a2d]/90 backdrop-blur-xl p-8 rounded-2xl border border-cyan-400/20 shadow-2xl max-w-sm ml-auto">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl">
                      <Zap className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">99.9%</p>
                      <p className="text-xs text-gray-400">Uptime Guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl">
                      <Shield className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">Enterprise</p>
                      <p className="text-xs text-gray-400">Grade Security</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl">
                      <TrendingUp className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">10x</p>
                      <p className="text-xs text-gray-400">Performance Boost</p>
                    </div>
                  </div>
                </div>
                
                {/* Performance Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/10">
                  <p className="text-sm font-semibold text-white">
                    ⚡ Performance Optimization
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Enterprise-grade edge computing for maximum speed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">
            Building Scalable Digital <br />
            <span className="text-cyan-400">Ecosystems</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that drive growth and innovation
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-[#0b1a2d] p-8 rounded-2xl border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
            <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-4 group-hover:bg-cyan-500/20 transition">
              <Rocket className="text-cyan-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition">
              Scalable Web Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-traffic architectures built on React, Next.js, and cloud-native infrastructure. 
              Designed to grow with your business.
            </p>
            <Link 
              href="/services/web-development"
              className="inline-flex items-center gap-2 mt-4 text-cyan-400 text-sm font-medium hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="group bg-[#0b1a2d] p-8 rounded-2xl border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-cyan-500/20 rounded-xl w-fit mb-4">
              <Compass className="text-cyan-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition">
              Software Consultancy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strategic planning and architecture design to align technology 
              with your business goals and drive digital transformation.
            </p>
            <Link 
              href="/services/consultancy"
              className="inline-flex items-center gap-2 mt-4 text-cyan-400 text-sm font-medium hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#0b1a2d] p-8 rounded-2xl border border-transparent hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
            <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-4 group-hover:bg-cyan-500/20 transition">
              <Layers className="text-cyan-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition">
              Full-Stack Solutions
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              End-to-end development from database architecture to intuitive 
              user experiences that delight your customers.
            </p>
            <Link 
              href="/services/full-stack"
              className="inline-flex items-center gap-2 mt-4 text-cyan-400 text-sm font-medium hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl p-12 md:p-16 border border-cyan-400/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something <span className="text-cyan-400">Extraordinary?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and create a solution that drives real results.
            Your digital transformation journey starts here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full font-medium hover:opacity-90 transition hover:scale-105 duration-300 shadow-lg shadow-cyan-500/25"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition hover:scale-105 duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}