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

const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

export default function ServicesGrid() {
  return (
    <motion.div 
      className="max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerCards}
    >
      {/* SERVICE 1 - Web Development */}
      <motion.section 
        id="web-development" 
        className="mb-20 scroll-mt-20"
        variants={fadeUp}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 bg-cyan-500/10 rounded-xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Code2 className="text-cyan-400 w-8 h-8" />
              </motion.div>
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
              <motion.div variants={staggerContainer}>
                <h4 className="font-semibold text-cyan-400 mb-2">What We Build:</h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    "Enterprise web applications (React, Next.js)",
                    "E-commerce platforms with payment integration",
                    "Custom CMS and content platforms",
                    "Progressive Web Apps (PWAs) with offline support",
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={staggerContainer}>
                <h4 className="font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express.js"].map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-[#0f172a] rounded-full text-xs text-gray-300 border border-white/5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      whileHover={{ scale: 1.1, borderColor: "rgba(34,211,238,0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICE 2 - Consultancy */}
      <motion.section 
        id="consultancy" 
        className="mb-20 bg-[#1a2438]/30 rounded-3xl p-8 md:p-12 border border-cyan-400/10 scroll-mt-20"
        variants={fadeUp}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 bg-cyan-500/20 rounded-xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Wrench className="text-cyan-400 w-8 h-8" />
              </motion.div>
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
              <motion.div variants={staggerContainer}>
                <h4 className="font-semibold text-cyan-400 mb-2">Our Approach:</h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    { strong: "Technology Audit:", text: "Comprehensive assessment of your current stack" },
                    { strong: "Scaling Roadmap:", text: "Strategic plan for growth and infrastructure" },
                    { strong: "Architecture Design:", text: "Blueprints for scalable, resilient systems" },
                    { strong: "Tech Stack Advisory:", text: "Data-driven technology recommendations" },
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                      <span><strong className="text-white">{item.strong}</strong> {item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={staggerContainer}>
                <h4 className="font-semibold text-cyan-400 mb-2">Who Benefits:</h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    "Startups scaling from MVP to production",
                    "Enterprises modernizing legacy systems",
                    "Companies planning digital transformation",
                    "Venture-backed tech companies",
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICE 3 - Full Stack */}
      <motion.section 
        id="full-stack" 
        className="mb-20 scroll-mt-20"
        variants={fadeUp}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 bg-cyan-500/10 rounded-xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Layers className="text-cyan-400 w-8 h-8" />
              </motion.div>
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
              <motion.div variants={staggerContainer}>
                <h4 className="font-semibold text-cyan-400 mb-2">Frontend:</h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    "Responsive, accessible UI/UX implementations",
                    "Component-based architecture with React",
                    "State management (Zustand, React Query)",
                    "Performance optimization & SEO",
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={staggerContainer}>
                <h4 className="font-semibold text-cyan-400 mb-2">Backend:</h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    "RESTful APIs with Node.js & Express.js",
                    "Database design (MongoDB with Mongoose)",
                    "Authentication & authorization (JWT, RBAC)",
                    "Real-time features with Socket.IO",
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICE 4 - Cloud Architecture */}
      <motion.section 
        id="cloud-architecture" 
        className="bg-[#1a2438]/30 rounded-3xl p-8 md:p-12 border border-white/5 scroll-mt-20"
        variants={fadeUp}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 bg-cyan-500/10 rounded-xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Cloud className="text-cyan-400 w-8 h-8" />
              </motion.div>
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
              {[
                { icon: Server, title: "Infrastructure", items: ["MongoDB Atlas", "Vercel & Render", "Cloudflare Turnstile"] },
                { icon: Shield, title: "Security", items: ["JWT & bcrypt", "RBAC authorization", "HTTPS/TLS encryption"] },
                { icon: Gauge, title: "Performance", items: ["Auto-scaling", "CDN & edge computing", "Load balancing"] },
              ].map((item, colIndex) => (
                <motion.div 
                  key={colIndex}
                  className="bg-[#0f172a] p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * colIndex, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="text-cyan-400 w-5 h-5 mb-2" />
                  <h4 className="font-semibold text-sm text-white mb-1">{item.title}</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {item.items.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}