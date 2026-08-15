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
    
    // Mark all fields as touched
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
      
      // Auto-hide success message after 5 seconds
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
    <main className="min-h-screen bg-gradient-to-br from-[#081028] to-[#0b1a3a] text-white px-6 pt-24 pb-12">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="space-y-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 font-medium">
              — GET IN TOUCH
            </p>
            <h1 className="text-5xl font-semibold leading-tight">
              Ignite Your <br />
              <span className="text-cyan-400">Digital Vision</span>
            </h1>
          </div>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Whether you're scaling a startup or modernizing an enterprise, our
            consultancy bridges the gap between complex tech and human impact.
          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-4">
            <div className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-cyan-400/30 transition group">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <Mail className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-wider">EMAIL US</p>
                <p className="text-sm text-white">acetechhub.africa@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-cyan-400/30 transition group">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <Phone className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-wider">CALL EXPERTS</p>
                <p className="text-sm text-white">+234 705 882 5172</p>
              </div>
            </div>

            <div className="bg-[#0f1c3d] p-4 rounded-xl flex items-center gap-4 border border-white/5 hover:border-cyan-400/30 transition group">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition">
                <MapPin className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-wider">HEADQUARTERS</p>
                <p className="text-sm text-white">Anambra • Nigeria • Remote</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-black">JD</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-xs font-bold text-black">SK</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xs font-bold text-black">MR</div>
            </div>
            <p className="text-xs text-gray-500 tracking-wider">
              JOIN COMPANIES SCALING WITH US
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0f1c3d] p-8 rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/5">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
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
                  <p className="text-xs text-red-400 mt-1">{getFieldError('name')}</p>
                )}
              </div>
              <div>
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
                  <p className="text-xs text-red-400 mt-1">{getFieldError('email')}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <input
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a274f] p-3 rounded-lg text-sm outline-none border-2 border-transparent focus:border-cyan-400/50 transition"
              />
            </div>

            <div className="mb-4">
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
                <p className="text-xs text-red-400 mt-1">{getFieldError('subject')}</p>
              )}
            </div>

            <div className="mb-6">
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
                <p className="text-xs text-red-400 mt-1">{getFieldError('message')}</p>
              )}
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-start gap-2 bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg mb-4">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Message Sent Successfully!</p>
                  <p className="text-xs text-green-400/70 mt-0.5">
                    We'll get back to you within 4 hours.
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
            </button>

            <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AVERAGE RESPONSE TIME: 4 HOURS
            </div>
          </form>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-3 font-medium">
            WHY WORK WITH US
          </p>
          <h2 className="text-3xl font-semibold">
            Engineering <span className="text-cyan-400">Excellence</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-[#0f1c3d] p-6 rounded-xl text-left border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4 group-hover:bg-cyan-500/20 transition">
              <Code className="text-cyan-400" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">Modern Stack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leveraging React, Node, and Next.js to build bulletproof architectures
              that scale infinitely.
            </p>
          </div>

          {/* CARD 2 - Highlighted */}
          <div className="bg-[#0f1c3d] p-6 rounded-xl text-left border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
            <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
              <Cloud className="text-cyan-400" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">Cloud Native</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AWS, Azure, and Google Cloud experts ensuring your uptime remains
              at 99.99% globally.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0f1c3d] p-6 rounded-xl text-left border border-white/5 hover:border-cyan-400/30 transition group">
            <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4 group-hover:bg-cyan-500/20 transition">
              <Shield className="text-cyan-400" size={24} />
            </div>
            <h3 className="font-semibold text-white mb-2">Security First</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise-grade security protocols baked into every line of code
              from day one.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}