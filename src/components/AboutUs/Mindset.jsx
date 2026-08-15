"use client";

import {
  Layers,
  Shield,
  Cloud,
  Rocket,
  TrendingUp,
  BadgeCheck,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutCompetence() {
  return (
    <section className="bg-[#06142A] text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* SECTION 1: Why Choose Us */}
        <div>
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3">
                WHY ACE TECH HUB
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Digital Evolution <br />
                <span className="text-cyan-400">Starts Here</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-cyan-400">150+</p>
              <p className="text-xs text-gray-400 tracking-wider">
                COMBINED YEARS OF EXPERTISE
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <Award size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300">50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <Users size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300">30+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <Clock size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300">24/7 Support</span>
            </div>
          </div>

          {/* Core Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Full Stack */}
            <div className="md:col-span-2 bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Layers className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                    Full-Stack Excellence
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From concept to deployment, we own the entire technical stack. 
                    Our comprehensive approach ensures seamless integration, 
                    optimal performance, and a unified digital experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Security First */}
            <div className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Shield className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                    Security First
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enterprise-grade security built into every layer. We protect 
                    your data and your reputation with zero-compromise protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable Infrastructure */}
            <div className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Cloud className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Future-proof solutions that grow with your business. 
                    No bottlenecks, no limits—just seamless expansion.
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Engine */}
            <div className="md:col-span-2 bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Rocket className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                    Innovation Engine
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We don't just build solutions—we create competitive advantages. 
                    Our innovation-first approach delivers results that exceed 
                    expectations and drive real business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Core Values - Client Focused */}
        <div className="text-center">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3">
              WHAT WE BELIEVE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Values That <span className="text-cyan-400">Drive Results</span>
            </h2>
            <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition">
                <Award className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="tracking-widest text-sm font-semibold mb-3">
                EXCELLENCE
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                We deliver nothing less than exceptional. Every line of code, 
                every design decision, every solution is crafted with precision 
                and pride.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition">
                <Rocket className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="tracking-widest text-sm font-semibold mb-3">
                INNOVATION
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                We push boundaries and challenge conventions. Our solutions 
                don't just meet standards—they set new ones.
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group">
              <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition">
                <Users className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="tracking-widest text-sm font-semibold mb-3">
                PARTNERSHIP
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Your success is our success. We build lasting relationships 
                through transparency, communication, and shared vision.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: Results & Impact */}
        <div className="bg-[#0D1F3A] rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3">
                PROVEN RESULTS
              </p>
              <h2 className="text-3xl font-bold mb-4">
                We Deliver <span className="text-cyan-400">Tangible Impact</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our track record speaks for itself. From startups to enterprises, 
                we've helped businesses transform their digital presence and 
                achieve measurable results.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-300">50+ successful projects delivered</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-300">30+ satisfied clients across industries</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-300">150+ combined years of expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-300">24/7 dedicated support</span>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full font-medium hover:opacity-90 transition hover:scale-105 duration-300"
              >
                View Our Work
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#06142A] p-6 rounded-xl text-center border border-white/5">
                <p className="text-3xl font-bold text-cyan-400">50+</p>
                <p className="text-xs text-gray-400 mt-1">Projects</p>
              </div>
              <div className="bg-[#06142A] p-6 rounded-xl text-center border border-white/5">
                <p className="text-3xl font-bold text-cyan-400">30+</p>
                <p className="text-xs text-gray-400 mt-1">Clients</p>
              </div>
              <div className="bg-[#06142A] p-6 rounded-xl text-center border border-white/5">
                <p className="text-3xl font-bold text-cyan-400">150+</p>
                <p className="text-xs text-gray-400 mt-1">Years Expertise</p>
              </div>
              <div className="bg-[#06142A] p-6 rounded-xl text-center border border-white/5">
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-xs text-gray-400 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-3xl p-10 md:p-16 border border-white/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something <span className="text-cyan-400">Extraordinary?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss your vision and create a solution that drives real results.
              Your digital transformation journey starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full font-medium hover:opacity-90 transition hover:scale-105 duration-300"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition hover:scale-105 duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}