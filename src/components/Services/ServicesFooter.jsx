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
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
};

const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export default function ServicesFooter() {
  const techCategories = [
    {
      icon: Code2,
      title: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "JavaScript"],
      highlight: false,
    },
    {
      icon: Database,
      title: "Backend & Database",
      techs: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "PostgreSQL", "Prisma", "AWS"],
      highlight: true,
    },
    {
      icon: Zap,
      title: "State & Real-time",
      techs: ["Zustand", "React Query", "Axios", "Socket.IO", "LocalStorage"],
      highlight: false,
    },
    {
      icon: Lock,
      title: "Auth & Security",
      techs: ["JWT", "bcrypt", "RBAC", "Cloudflare Turnstile", "HTTPS/TLS", "CORS", "Helmet"],
      highlight: false,
    },
    {
      icon: Image,
      title: "Media & Payments",
      techs: ["Cloudinary", "Paystack", "Cloudflare R2 + Images"],
      highlight: false,
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      techs: ["Git & GitHub", "pnpm", "Nodemon", "Vercel", "Render", "AWS"],
      highlight: false,
    },
  ];

  const whyChooseUs = [
    { icon: Rocket, title: "Scalable by Design", desc: "Architecture that grows seamlessly with your business" },
    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption built into every layer" },
    { icon: Users, title: "Expert Team", desc: "4+ years combined experience" },
    { icon: BarChart3, title: "Measurable Results", desc: "Data-driven decisions on every project" },
  ];

  const industries = [
    { icon: Globe, title: "Technology & SaaS", desc: "Platforms, products, and cloud-native applications" },
    { icon: LineChart, title: "Finance & Fintech", desc: "Secure, compliant, high-performance financial systems" },
    { icon: Smartphone, title: "Startups & Scale-ups", desc: "From MVP to market leader with scalable solutions" },
  ];

  return (
    <motion.div 
      className="max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* TECH STACK SHOWCASE */}
      <motion.section className="mb-20" variants={staggerContainer}>
        <div className="text-center mb-12">
          <motion.p 
            className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium"
            variants={fadeUp}
          >
            OUR TECHNOLOGY STACK
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            variants={fadeUp}
          >
            Modern Tools for <span className="text-cyan-400">Modern Solutions</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mt-4"
            variants={fadeUp}
          >
            We leverage the latest technologies to deliver high-performance, secure, 
            and scalable applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`bg-[#1a2438] p-6 rounded-2xl border hover:border-cyan-400/30 transition group ${
                category.highlight ? 'border-cyan-400/20' : 'border-white/5'
              }`}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(34,211,238,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className={`p-2 rounded-lg transition ${
                    category.highlight 
                      ? 'bg-cyan-500/20' 
                      : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                  }`}
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className="text-cyan-400 w-5 h-5" />
                </motion.div>
                <h4 className="font-semibold text-white">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-gray-300 border border-white/5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.03 * techIndex, duration: 0.3 }}
                    whileHover={{ scale: 1.1, borderColor: "rgba(34,211,238,0.3)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section className="mb-20" variants={staggerContainer}>
        <div className="text-center mb-12">
          <motion.p 
            className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium"
            variants={fadeUp}
          >
            WHY ACE TECH HUB
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            variants={fadeUp}
          >
            Built for <span className="text-cyan-400">Excellence</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mt-4"
            variants={fadeUp}
          >
            We combine deep technical expertise with business acumen to deliver 
            solutions that drive real results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-[#1a2438] p-6 rounded-2xl text-center border transition group ${
                index === 1 
                  ? 'border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.05)]' 
                  : 'border-white/5 hover:border-cyan-400/30'
              }`}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition ${
                  index === 1 
                    ? 'bg-cyan-500/20' 
                    : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                }`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-cyan-400 w-6 h-6" />
              </motion.div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* INDUSTRIES WE SERVE */}
      <motion.section className="mb-20" variants={staggerContainer}>
        <div className="text-center mb-12">
          <motion.p 
            className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium"
            variants={fadeUp}
          >
            WHO WE WORK WITH
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            variants={fadeUp}
          >
            Industries We <span className="text-cyan-400">Serve</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-[#1a2438] p-6 rounded-2xl border transition ${
                index === 1 ? 'border-cyan-400/20' : 'border-white/5'
              }`}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(34,211,238,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-cyan-400 w-6 h-6 mb-3" />
              </motion.div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section 
        className="max-w-6xl mx-auto"
        variants={fadeUp}
      >
        <motion.div 
          className="bg-gradient-to-br from-[#1a2438] to-[#121a2d] rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden"
          whileHover={{ boxShadow: "0 0 60px rgba(34,211,238,0.1)" }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Build Something <br />
              <span className="text-cyan-400">Extraordinary?</span>
            </motion.h2>

            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's discuss your project and create a solution that drives real 
              business growth. Get a free consultation with our technical experts.
            </motion.p>

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
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition hover:scale-105 duration-300 shadow-lg shadow-cyan-500/25 text-lg"
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-gray-600 text-gray-300 hover:bg-white/5 transition hover:scale-105 duration-300 text-lg"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { text: "50+ Projects Delivered" },
                { text: "99.9% Uptime" },
                { text: "30+ Happy Clients" },
                { text: "24/7 Support" },
              ].map((item, index) => (
                <motion.span 
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                >
                  <CheckCircle size={16} className="text-cyan-400" />
                  {item.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="mt-6 flex items-center justify-center gap-4 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for New Projects
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-cyan-400">✦ Scale Active</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}