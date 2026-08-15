"use client";

import {
  Mail,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { SiCloudflare } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#020617] via-[#020c1b] to-[#031a2e] text-gray-300 pt-16 pb-8 px-6 md:px-12">
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* LEFT BRAND */}
        <div>
          <h2 className="text-white font-semibold text-xl mb-4 tracking-wide">
            ACE <span className="text-cyan-400">TECH</span> HUB
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
            Your Partner in Digital Innovation. Shaping the future through 
            scalable, high-performance solutions.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition border border-white/5 hover:border-cyan-500/30 group"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition border border-white/5 hover:border-cyan-500/30 group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition border border-white/5 hover:border-cyan-500/30 group"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition border border-white/5 hover:border-cyan-500/30 group"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition" />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition border border-white/5 hover:border-cyan-500/30 group"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4 font-medium">
            NAVIGATION
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-400 hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4 font-medium">
            CONTACT
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400 hover:text-white transition">
                acetechhub.africa@gmail.com
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400">
                Anambra State, <br />
                Nigeria
              </span>
            </div>

            <div className="flex items-start gap-3">
              <SiCloudflare className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400">
                Cloud-Native Infrastructure
              </span>
            </div>
          </div>
        </div>

        {/* SUBSCRIBE CARD */}
        <div className="bg-[#0b1220] rounded-2xl p-6 shadow-lg border border-white/5 hover:border-cyan-400/20 transition">
          <h3 className="text-white font-medium mb-2">
            Stay <span className="text-cyan-400">Kinetic</span>
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Subscribe for updates and insights
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2.5 rounded-full bg-[#111827] text-sm 
              text-gray-300 placeholder-gray-500 outline-none border border-white/5 
              focus:border-cyan-400/50 transition"
            />

            <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-medium 
              bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90 transition hover:scale-[1.02] duration-300">
              Subscribe
              <Send size={14} />
            </button>
          </div>

          <p className="text-[10px] text-gray-500 mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>
          © {new Date().getFullYear()} ACE TECH HUB. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-gray-300 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300 transition">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-gray-300 transition">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}