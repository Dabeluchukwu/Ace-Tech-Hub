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
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const scaleOnHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

export default function Mindset() {
  return (
    <motion.section 
      className="bg-[#06142A] text-white px-6 md:px-16 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* SECTION 1: Why Choose Us */}
        <motion.div variants={staggerContainer}>
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <motion.div variants={fadeUp}>
              <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3">
                WHY ACE TECH HUB
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Digital Evolution <br />
                <span className="text-cyan-400">Starts Here</span>
              </h2>
            </motion.div>
            <motion.div 
              className="text-right"
              variants={fadeUp}
            >
              <p className="text-4xl font-bold text-cyan-400">150+</p>
              <p className="text-xs text-gray-400 tracking-wider">
                COMBINED YEARS OF EXPERTISE
              </p>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            variants={fadeUp}
          >
            {[
              { icon: Award, text: "50+ Projects Delivered" },
              { icon: Users, text: "30+ Happy Clients" },
              { icon: Clock, text: "24/7 Support" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon size={16} className="text-cyan-400" />
                <span className="text-sm text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Full Stack */}
            <motion.div 
              className="md:col-span-2 bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group"
              variants={fadeLeft}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(34,211,238,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-cyan-500/10 rounded-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Layers className="text-cyan-400 w-6 h-6" />
                </motion.div>
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
            </motion.div>

            {/* Security First */}
            <motion.div 
              className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group"
              variants={fadeRight}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(34,211,238,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-cyan-500/10 rounded-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="text-cyan-400 w-6 h-6" />
                </motion.div>
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
            </motion.div>

            {/* Scalable Infrastructure */}
            <motion.div 
              className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group"
              variants={fadeLeft}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(34,211,238,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-cyan-500/10 rounded-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Cloud className="text-cyan-400 w-6 h-6" />
                </motion.div>
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
            </motion.div>

            {/* Innovation Engine */}
            <motion.div 
              className="md:col-span-2 bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group"
              variants={fadeRight}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(34,211,238,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-cyan-500/10 rounded-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Rocket className="text-cyan-400 w-6 h-6" />
                </motion.div>
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
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION 2: Core Values */}
        <motion.div 
          className="text-center"
          variants={staggerContainer}
        >
          <motion.div className="mb-12" variants={fadeUp}>
            <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3">
              WHAT WE BELIEVE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Values That <span className="text-cyan-400">Drive Results</span>
            </h2>
            <motion.div 
              className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "EXCELLENCE", desc: "We deliver nothing less than exceptional. Every line of code, every design decision, every solution is crafted with precision and pride." },
              { icon: Rocket, title: "INNOVATION", desc: "We push boundaries and challenge conventions. Our solutions don't just meet standards—they set new ones." },
              { icon: Users, title: "PARTNERSHIP", desc: "Your success is our success. We build lasting relationships through transparency, communication, and shared vision." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#0D1F3A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition group"
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 10px 40px rgba(34,211,238,0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="text-cyan-400 w-6 h-6" />
                </motion.div>
                <h4 className="tracking-widest text-sm font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 3: Results & Impact */}
        <motion.div 
          className="bg-[#0D1F3A] rounded-3xl p-8 md:p-12 border border-white/5"
          variants={staggerContainer}
          whileHover={{ boxShadow: "0 0 60px rgba(34,211,238,0.05)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeLeft}>
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
                {[
                  "50+ successful projects delivered",
                  "30+ satisfied clients across industries",
                  "150+ combined years of expertise",
                  "24/7 dedicated support",
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-300">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full font-medium hover:opacity-90 transition hover:scale-105 duration-300"
                >
                  View Our Work
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={fadeRight}
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "150+", label: "Years Expertise" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#06142A] p-6 rounded-xl text-center border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(34,211,238,0.3)" }}
                >
                  <p className="text-3xl font-bold text-cyan-400">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION 4: Final CTA */}
        <motion.div 
          className="text-center"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-3xl p-10 md:p-16 border border-white/5"
            whileHover={{ boxShadow: "0 0 60px rgba(34,211,238,0.1)" }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeUp}
            >
              Ready to Build Something <span className="text-cyan-400">Extraordinary?</span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto mb-8"
              variants={fadeUp}
            >
              Let's discuss your vision and create a solution that drives real results.
              Your digital transformation journey starts here.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full font-medium hover:opacity-90 transition hover:scale-105 duration-300"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition hover:scale-105 duration-300"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}