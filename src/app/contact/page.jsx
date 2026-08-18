"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Send,
  Code,
  Cloud,
  Shield,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { sendMessage } from "@/lib/api";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setError("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await sendMessage(formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTouched({});
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        err.response?.data?.message || 
        "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (fieldName) => {
    if (touched[fieldName] && !formData[fieldName]?.trim()) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (fieldName === 'email' && touched.email && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      return "Please enter a valid email address";
    }
    return null;
  };

  return (
    <motion.main 
      className="min-h-screen bg-gradient-to-br from-[#081028] to-[#0b1a3a] text-white px-6 pt-24 pb-12"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <motion.div className="space-y-8" variants={fadeLeft}>
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 font-medium">
              — GET IN TOUCH
            </p>
            <h1 className="text-5xl font-semibold leading-tight">
              Ignite Your <br />
              <span className="text-cyan-400">Digital Vision</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-gray-400 max-w-md leading-relaxed"
            variants={fadeUp}
          >
            Whether you're scaling a startup or modernizing an enterprise, our
            consultancy bridges the gap between complex tech and human impact.
          </motion.p>

          {/* CONTACT CARDS */}
          <motion.div className="space-y-4" variants={staggerContainer}>
            {[
              { icon: Mail, label: "EMAIL US", value: "acetechhub.africa@gmail.com" },
              { icon: Phone, label: "CALL EXPERTS", value: "+234 705 882 5172" },
              { icon: MapPin, label: "HEADQUARTERS", value: "Anambra • Nigeria • Remote" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-cyan-400/30 transition group"
                variants={fadeUp}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="text-cyan-400" size={20} />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-400 tracking-wider">{item.label}</p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex items-center gap-3 pt-4"
            variants={fadeUp}
          >
            <div className="flex -space-x-2">
              {["JD", "SK", "MR"].map((initials, index) => (
                <motion.div 
                  key={index}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-cyan-400 to-blue-500' :
                    index === 1 ? 'from-purple-400 to-pink-500' :
                    'from-orange-400 to-red-500'
                  } flex items-center justify-center text-xs font-bold text-black`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  {initials}
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-gray-500 tracking-wider">
              JOIN COMPANIES SCALING WITH US
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div 
          className="bg-[#0f1c3d] p-8 rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/5"
          variants={fadeRight}
          whileHover={{ boxShadow: "0 0 60px rgba(34,211,238,0.05)" }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <motion.div variants={fadeUp}>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none transition ${
                    getFieldError('name') 
                      ? 'border-2 border-red-500/50 focus:border-red-500' 
                      : 'border-2 border-transparent focus:border-cyan-400/50'
                  }`}
                />
                {getFieldError('name') && (
                  <motion.p 
                    className="text-xs text-red-400 mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {getFieldError('name')}
                  </motion.p>
                )}
              </motion.div>
              <motion.div variants={fadeUp}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none transition ${
                    getFieldError('email') 
                      ? 'border-2 border-red-500/50 focus:border-red-500' 
                      : 'border-2 border-transparent focus:border-cyan-400/50'
                  }`}
                />
                {getFieldError('email') && (
                  <motion.p 
                    className="text-xs text-red-400 mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {getFieldError('email')}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div className="mb-4" variants={fadeUp}>
              <input
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none border-2 border-transparent focus:border-cyan-400/50 transition"
              />
            </motion.div>

            <motion.div className="mb-4" variants={fadeUp}>
              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none transition ${
                  getFieldError('subject') 
                    ? 'border-2 border-red-500/50 focus:border-red-500' 
                    : 'border-2 border-transparent focus:border-cyan-400/50'
                }`}
              />
              {getFieldError('subject') && (
                <motion.p 
                  className="text-xs text-red-400 mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {getFieldError('subject')}
                </motion.p>
              )}
            </motion.div>

            <motion.div className="mb-6" variants={fadeUp}>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your challenges and goals..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none resize-none transition ${
                  getFieldError('message') 
                    ? 'border-2 border-red-500/50 focus:border-red-500' 
                    : 'border-2 border-transparent focus:border-cyan-400/50'
                }`}
              />
              {getFieldError('message') && (
                <motion.p 
                  className="text-xs text-red-400 mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {getFieldError('message')}
                </motion.p>
              )}
            </motion.div>

            {error && (
              <motion.div 
                className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </motion.div>
            )}

            {success && (
              <motion.div 
                className="flex items-start gap-2 bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Message Sent Successfully!</p>
                  <p className="text-xs text-green-400/70 mt-0.5">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Request
                  <Send size={16} />
                </>
              )}
            </motion.button>

            <motion.div 
              className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-2"
              variants={fadeUp}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AVERAGE RESPONSE TIME: WITHIN 24 HOURS
            </motion.div>
          </form>
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <motion.div 
        className="max-w-6xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium">
            WHY WORK WITH US
          </p>
          <h2 className="text-3xl font-semibold">
            Engineering <span className="text-cyan-400">Excellence</span>
          </h2>
          <motion.div 
            className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code, title: "Modern Stack", desc: "Leveraging React, Node, and Next.js to build bulletproof architectures that scale infinitely." },
            { icon: Cloud, title: "Cloud Native", desc: "AWS, Azure, and Google Cloud experts ensuring your uptime remains at 99.99% globally.", highlight: true },
            { icon: Shield, title: "Security First", desc: "Enterprise-grade security protocols baked into every line of code from day one." },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-xl text-left border transition group ${
                item.highlight 
                  ? 'bg-[#0f1c3d] border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.05)]' 
                  : 'bg-[#0f1c3d] border-white/5 hover:border-cyan-400/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`p-3 rounded-lg w-fit mb-4 transition ${
                  item.highlight 
                    ? 'bg-cyan-500/20' 
                    : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                }`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-cyan-400" size={24} />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}