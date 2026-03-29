"use client";

import { Monitor, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ auto close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[100%] md:w-[100%] lg:w-[100%]
         px-6 py-4 flex items-center justify-between
        transition-all duration-300
        backdrop-blur-xl bg-white/5 border border-white/10
        ${scrolled ? "shadow-lg shadow-black/30" : ""}
        `}
      >
        {/* LOGO */}
        <Link
          href="/"
         className="flex items-center gap-2">
          <Monitor className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-semibold tracking-wide">
            ACE TECH <span className="text-cyan-400">HUB</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition group
          ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}
        `}
              >
                {item.name}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>
        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={22} />
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE-IN PANEL */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-sm
        bg-[#0b1220]/90 backdrop-blur-xl border-l border-white/10
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 p-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-lg w-fit transition
  ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}
`}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                  ${isActive ? "w-full" : "w-0"}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
