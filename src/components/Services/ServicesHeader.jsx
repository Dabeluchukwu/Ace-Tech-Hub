"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export default function ServicesHeader() {
  return (
    <motion.section 
      className="max-w-6xl mx-auto mb-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div variants={fadeUp}>
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 font-medium">
            — COMPREHENSIVE SOLUTIONS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            What We <span className="text-cyan-400">Deliver</span>
          </h1>
        </motion.div>
        <motion.div 
          className="flex items-center gap-3 text-sm text-gray-400 bg-[#1a2438]/50 px-4 py-2.5 rounded-full border border-white/5"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Available for New Projects</span>
        </motion.div>
      </div>

      <motion.p 
        className="mt-6 text-gray-400 max-w-3xl leading-relaxed text-lg"
        variants={fadeUp}
      >
        ACE TECH HUB provides end-to-end technology solutions for businesses ready 
        to scale. From strategic consulting to full-scale development, we deliver 
        enterprise-grade systems that drive growth and innovation.
      </motion.p>
    </motion.section>
  );
}