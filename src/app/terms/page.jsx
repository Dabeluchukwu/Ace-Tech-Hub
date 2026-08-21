"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Scale, Shield, Users, Clock, CheckCircle, Lock,  AlertCircle, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

export default function TermsOfService() {
  const lastUpdated = "August 19, 2026";

  return (
    <motion.div 
      className="min-h-screen bg-[#0b1220] text-white pt-24 pb-16 px-6 md:px-16"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Scale size={24} className="text-cyan-400" />
            </div>
            <span className="text-sm text-cyan-400 font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of <span className="text-cyan-400">Service</span>
          </h1>
          <p className="text-gray-400 text-lg">
            The terms and conditions that govern your use of ACE TECH HUB
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-cyan-400" />
              Last Updated: {lastUpdated}
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-cyan-400" />
              Effective: {lastUpdated}
            </span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-400 leading-relaxed">
            By using ACE TECH HUB's website, services, and products ("Services"), you agree 
            to be bound by these Terms of Service ("Terms"). If you do not agree to these 
            Terms, please do not use our Services.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            These Terms constitute a legally binding agreement between you and ACE TECH HUB 
            regarding your use of our Services.
          </p>
        </motion.div>

        {/* Services Description */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">2. Description of Services</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-4">
            ACE TECH HUB provides a range of technology services, including but not limited to:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Web development and software engineering</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Technology consulting and advisory services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Cloud architecture and infrastructure management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Digital transformation and innovation strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Project management and technical leadership</span>
            </li>
          </ul>
        </motion.div>

        {/* User Obligations */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">3. User Obligations</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-4">
            When using our Services, you agree to:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Provide accurate and complete information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Use our Services in compliance with all applicable laws</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Respect the intellectual property rights of ACE TECH HUB</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Not misuse or attempt to damage our systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Maintain the confidentiality of any access credentials</span>
            </li>
          </ul>
        </motion.div>

        {/* Intellectual Property */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            All content, materials, and intellectual property on our website and Services 
            are owned by ACE TECH HUB or our licensors.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>You may not copy, modify, or distribute our content without permission</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>You retain ownership of content you submit, but grant us a license to use it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>All trademarks, logos, and service marks are our property</span>
            </li>
          </ul>
        </motion.div>

        {/* Payment Terms */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">5. Payment Terms</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Fees and pricing will be communicated in project proposals or agreements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Invoices are due within the timeframe specified in your agreement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Late payments may incur interest charges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>We reserve the right to suspend services for non-payment</span>
            </li>
          </ul>
        </motion.div>

        {/* Confidentiality */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">6. Confidentiality</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed">
            Both parties agree to maintain the confidentiality of any proprietary or 
            confidential information disclosed during the course of engagement. This 
            includes business plans, technical specifications, source code, and client data.
          </p>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">7. Limitation of Liability</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-4">
            ACE TECH HUB is not liable for:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Indirect or consequential damages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Loss of profits, revenue, or data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Third-party claims against you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Damages exceeding the total fees paid</span>
            </li>
          </ul>
        </motion.div>

        {/* Termination */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We may terminate or suspend your access to our Services immediately, without 
            prior notice or liability, for any reason including:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Breach of these Terms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Non-payment of fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Engaging in prohibited activities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>At our discretion for any other reason</span>
            </li>
          </ul>
        </motion.div>

        {/* Governing Law */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">9. Governing Law</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of 
            the Federal Republic of Nigeria. Any disputes arising under these Terms shall 
            be subject to the exclusive jurisdiction of the courts of Nigeria.
          </p>
        </motion.div>

        {/* Changes to Terms */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
          <p className="text-gray-400 leading-relaxed">
            We reserve the right to update these Terms at any time. We will notify you of 
            changes by posting the new Terms on this page. Your continued use of our Services 
            after changes indicates your acceptance of the revised Terms.
          </p>
        </motion.div>

        {/* Contact Us */}
        <motion.div variants={fadeUp} className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-cyan-400/20">
          <div className="flex items-center gap-3 mb-4">
            <Mail size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">11. Contact Us</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300">
              <span className="text-cyan-400">Email:</span>{" "}
              <a href="mailto:hello@acetechhub.io" className="text-cyan-400 hover:text-cyan-300 transition">
                acetechhub.africa@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              <span className="text-cyan-400">Phone:</span>{" "}
              <a href="tel:+2347058825172" className="text-gray-400 hover:text-white transition">
                +234 705 882 5172
              </a>
            </p>
            <p className="text-gray-300">
              <span className="text-cyan-400">Address:</span> Anambra, Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}