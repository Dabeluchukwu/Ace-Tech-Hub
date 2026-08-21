"use client";

import { ArrowRight, Sparkles, User, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <motion.main 
      className="bg-[#0b1220] text-white min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* HERO */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#0b1220] to-[#0e1a33] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-xs tracking-[0.3em] text-cyan-400 mb-6"
            variants={fadeUp}
          >
            OUR VISIONARY DIRECTIVE
          </motion.p>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            variants={fadeUp}
          >
            <span className="text-gray-300">ACE </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Hub
            </span>
          </motion.h1>

          <motion.p 
            className="mt-6 text-gray-400 max-w-2xl text-lg mx-auto"
            variants={fadeUp}
          >
            Redefining digital infrastructure through unyielding stability and
            fluid evolution. Your Partner in Digital Innovation.
          </motion.p>

          {/* Call to Action */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-4 justify-center"
            variants={fadeUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full text-sm font-medium hover:opacity-90 transition hover:scale-105 duration-300"
              >
                <Sparkles size={18} />
                Let's Build Together
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition hover:scale-105 duration-300"
              >
                <Briefcase size={18} />
                See Our Portfolio
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* STORY SECTION */}
      <motion.section 
        className="px-6 md:px-16 py-20 bg-[#0b1220]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* IMAGE WITH FOUNDER INFO */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0e1a33] to-[#0b1220] p-2 border border-white/5"
              whileHover={{ boxShadow: "0 0 40px rgba(34,211,238,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative aspect-[4/3] w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/dabimainpiccrop.jpeg"
                  alt="ACE TECH HUB Founders"
                  fill
                  unoptimized
                  className="rounded-xl object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
            
            {/* Founder Info */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <User size={16} className="text-cyan-400" />
                <span className="text-sm text-cyan-400">Founder</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">
                Nwabueze Dabeluchukwu
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Leading Digital Innovation at ACE TECH HUB
              </p>
              <div className="flex items-center gap-3 mt-3 justify-center md:justify-start">
                <span className="text-xs text-cyan-400/60">✦ Visionary Architect</span>
                <span className="w-1 h-1 bg-cyan-400/30 rounded-full"></span>
                <span className="text-xs text-cyan-400/60">✦ Tech Strategist</span>
              </div>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="w-10 h-[2px] bg-cyan-400 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* TEXT - COMPLETE REWRITE */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  {/* <motion.div 
    className="w-10 h-[2px] bg-cyan-400 mb-4"
    initial={{ width: 0 }}
    whileInView={{ width: 40 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  /> */}

  <motion.h2 
    className="text-3xl font-semibold mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1, duration: 0.5 }}
  >
    The Vision Behind ACE TECH HUB
  </motion.h2>

  <motion.p 
    className="text-gray-400 mb-6 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    My name is Nwabueze Dabeluchukwu, and I'm a technologist with a mission. 
    I founded ACE TECH HUB because I saw a gap between what businesses needed 
    and what technology was delivering.
  </motion.p>

  <motion.p 
    className="text-gray-400 mb-6 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.5 }}
  >
    Over the years, I've worked with startups, enterprises, and everything in between. 
    I've seen what works and what doesn't. I've learned that the best solutions aren't 
    just about the latest technology—they're about understanding people, their challenges, 
    and their aspirations.
  </motion.p>

  <motion.p 
    className="text-gray-400 mb-8 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4, duration: 0.5 }}
  >
    That's why ACE TECH HUB is different. We don't just build websites or write code—we 
    architect solutions that evolve with your business. We create technology that works 
    today and grows with you tomorrow. It's not just about being digital; it's about 
    being resilient, adaptable, and unshakeable.
  </motion.p>

  {/* QUOTE BOX */}
  <motion.div 
    className="border-l-4 border-cyan-400 bg-white/5 backdrop-blur p-4 rounded-md text-gray-300 italic"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.5 }}
    whileHover={{ x: 5 }}
  >
    "Technology is just a tool. It's the vision, the strategy, and the human touch that 
    makes it truly powerful. That's what we bring to every project."
  </motion.div>
</motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}