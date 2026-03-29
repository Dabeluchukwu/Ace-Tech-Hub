"use client";

import {
  Mail,
  MapPin,
  Share2,
  Image as ImageIcon,
  Cloud,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#020617] via-[#020c1b] to-[#031a2e] text-gray-300 pt-16 pb-8 px-8">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT BRAND */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            ACE TECH HUB
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
            Your Partner in Digital Innovation. Shaping the future through atmospheric code.
          </p>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <Share2 className="w-4 h-4 cursor-pointer hover:text-cyan-400" />
            <ImageIcon className="w-4 h-4 cursor-pointer hover:text-cyan-400" />
            <Cloud className="w-4 h-4 cursor-pointer hover:text-cyan-400" />
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-xs tracking-widest text-gray-500 mb-4">
            NAVIGATION
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xs tracking-widest text-gray-500 mb-4">
            CONTACT
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-cyan-400 mt-1" />
              <span className="text-gray-400">
                hello@acetechhub.io
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
              <span className="text-gray-400">
                120 Innovation Way, <br />
                Tech District, SF 94105
              </span>
            </div>
          </div>
        </div>

        {/* SUBSCRIBE CARD */}
        <div className="bg-[#0b1220] rounded-2xl p-6 shadow-lg border border-white/5">
          <h3 className="text-white font-medium mb-4">
            Stay Kinetic
          </h3>

          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 px-4 py-2 rounded-full bg-[#111827] text-sm 
            text-gray-300 placeholder-gray-500 outline-none border border-white/5"
          />

          <button className="w-full py-2 rounded-full text-sm font-medium 
            bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">

        <p>
          © 2024 ACE TECH HUB. All rights reserved.
        </p>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          <span className="hover:text-gray-300 cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}