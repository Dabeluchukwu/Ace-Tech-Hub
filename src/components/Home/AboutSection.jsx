"use client";

import { Laptop, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function AboutSection() {
  return (
    <main className="bg-[#020c1b] text-white min-h-screen px-6 md:px-16 py-16">
      
      {/* ABOUT SECTION */}
      <motion.section 
        className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        
        {/* LEFT IMAGE */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/20 to-transparent p-2"
          variants={fadeRight}
        >
          <motion.div 
            className="rounded-xl h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/AceHome2.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b]/50 to-transparent rounded-xl" />
          </motion.div>
          
          {/* Floating Badge */}
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-[#0b1a2d] p-4 rounded-xl border border-cyan-400/20 shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">10+ Years</p>
                <p className="text-xs text-gray-400">Industry Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={fadeLeft}>
          <motion.p 
            className="text-sm tracking-[0.3em] text-cyan-400 mb-3 font-medium"
            variants={fadeUp}
          >
            ABOUT US
          </motion.p>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            variants={fadeUp}
          >
            Commitment to Digital <br />
            <span className="text-cyan-400">Innovation</span>
          </motion.h1>

          <motion.p 
            className="text-gray-400 mb-6 max-w-xl leading-relaxed"
            variants={fadeUp}
          >
            At ACE TECH HUB, we don't just build websites; we architect the
            future. Our team merges technical precision with creative vision to
            deliver scalable solutions that empower brands to dominate the
            digital landscape.
          </motion.p>

          <motion.p 
            className="text-gray-400 mb-8 max-w-xl leading-relaxed"
            variants={fadeUp}
          >
            We believe in building long-term partnerships with our clients,
            ensuring every solution evolves with their business needs.
          </motion.p>

          {/* STATS */}
          <motion.div 
            className="flex gap-12 mb-8"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold">
                <Laptop size={22} />
                50+
              </div>
              <p className="text-xs text-gray-400 tracking-wider mt-1">
                PROJECTS DELIVERED
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 text-cyan-400 text-2xl font-bold">
                <Headphones size={22} />
                24/7
              </div>
              <p className="text-xs text-gray-400 tracking-wider mt-1">
                TECHNICAL SUPPORT
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Link */}
          <motion.div variants={fadeUp}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium group"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section 
        className="mt-32 flex justify-center max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-full max-w-4xl bg-gradient-to-br from-[#0a1a2f] to-[#081426] border border-cyan-900/30 rounded-3xl p-12 text-center shadow-lg shadow-cyan-500/5"
          whileHover={{ boxShadow: "0 0 40px rgba(34,211,238,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Scale Your <span className="text-cyan-400">Vision?</span>
          </motion.h2>

          <motion.p 
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Join the ranks of innovative companies building their future with
            ACE TECH HUB.
          </motion.p>

          {/* BUTTONS */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition-all shadow-md shadow-cyan-500/25 hover:scale-105 duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-105 duration-300"
              >
                Speak to an Expert
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

    </main>
  );
}