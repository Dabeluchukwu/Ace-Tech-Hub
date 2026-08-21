"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Lock, Eye, Server, Mail, FileText } from "lucide-react";

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

export default function PrivacyPolicy() {
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
              <Shield size={24} className="text-cyan-400" />
            </div>
            <span className="text-sm text-cyan-400 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            How we collect, use, and protect your information
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-cyan-400" />
              Last Updated: {lastUpdated}
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1.5">
              <Eye size={14} className="text-cyan-400" />
              Effective: {lastUpdated}
            </span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p className="text-gray-400 leading-relaxed">
            ACE TECH HUB ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website, use our services, or interact with us.
          </p>
          <p className="text-gray-400 leading-relaxed mt-3">
            By using our website and services, you agree to the collection and use of 
            information in accordance with this policy.
          </p>
        </motion.div>

        {/* Information We Collect */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Server size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
          </div>
          
          <h3 className="text-sm font-semibold text-cyan-400 mb-2">Personal Information</h3>
          <ul className="space-y-2 text-gray-400 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Name and contact information (email, phone number)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Business information and project requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Communication preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Payment information for services rendered</span>
            </li>
          </ul>

          <h3 className="text-sm font-semibold text-cyan-400 mb-2">Automatically Collected Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>IP address and browser type</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Pages visited and time spent on our website</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Device information and operating system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Referral sources and search queries</span>
            </li>
          </ul>
        </motion.div>

        {/* How We Use Information */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Eye size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
          </div>
          
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>To provide and improve our services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>To communicate with you about your projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>To send you relevant updates and marketing materials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>To process transactions and manage billing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>To enhance security and prevent fraud</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>To comply with legal obligations</span>
            </li>
          </ul>
        </motion.div>

        {/* Data Security */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">4. Data Security</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Encryption of data in transit and at rest</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Secure servers with controlled access</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Regular security audits and vulnerability assessments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Staff training on data protection best practices</span>
            </li>
          </ul>
          
          <p className="text-gray-400 leading-relaxed mt-4">
            While we strive to protect your information, no method of transmission over the 
            internet is 100% secure. We encourage you to take precautions to protect your 
            personal data.
          </p>
        </motion.div>

        {/* Data Retention */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
          <p className="text-gray-400 leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the 
            purposes outlined in this Privacy Policy. When we no longer need your information, 
            we will securely delete or anonymize it.
          </p>
        </motion.div>

        {/* Your Rights */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Right to access your personal information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Right to correct inaccurate information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Right to request deletion of your information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Right to withdraw consent at any time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Right to data portability</span>
            </li>
          </ul>
        </motion.div>

        {/* Cookies */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
          <p className="text-gray-400 leading-relaxed">
            Our website uses cookies to enhance your experience. Cookies are small files 
            stored on your device that help us remember your preferences and improve our services. 
            You can control cookie settings in your browser preferences.
          </p>
        </motion.div>

        {/* Third-Party Services */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Services</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We may use third-party services to enhance our offerings, including:
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Cloud hosting and infrastructure providers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Email and communication platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Analytics and tracking services</span>
            </li>
          </ul>
          <p className="text-gray-400 leading-relaxed mt-4">
            These third-party services have their own privacy policies, and we encourage you 
            to review them.
          </p>
        </motion.div>

        {/* Children's Privacy */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">9. Children's Privacy</h2>
          <p className="text-gray-400 leading-relaxed">
            Our services are not directed to individuals under the age of 16. We do not 
            knowingly collect personal information from children. If you believe we have 
            collected information from a child, please contact us.
          </p>
        </motion.div>

        {/* Changes to Policy */}
        <motion.div variants={fadeUp} className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the "Last Updated" date. 
            We encourage you to review this policy periodically.
          </p>
        </motion.div>

        {/* Contact Us */}
        <motion.div variants={fadeUp} className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-cyan-400/20">
          <div className="flex items-center gap-3 mb-4">
            <Mail size={20} className="text-cyan-400" />
            <h2 className="text-xl font-semibold text-white">11. Contact Us</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300">
              <span className="text-cyan-400">Email:</span>{" "}
              <a href="mailto:hello@acetechhub.io" className="text-cyan-400 hover:text-cyan-300 transition">
                hello@acetechhub.io
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