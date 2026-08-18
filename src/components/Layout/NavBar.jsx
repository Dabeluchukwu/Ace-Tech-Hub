"use client";

import { Monitor, Menu, X, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" }, 
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resources", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if we're on an admin page
  const isAdminPage = pathname?.startsWith('/admin');

  // ✅ Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsLoggedIn(!!token);
  }, [pathname]); // Re-check on route change

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
        bg-[#0b1220] border-b border-white/10
        ${scrolled ? "shadow-lg shadow-black/30" : ""}
        `}
      >
        {/* LOGO */}
        <Link
          href={isAdminPage ? "/admin/dashboard" : "/"}
          className="flex items-center gap-2"
        >
          <Monitor className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-semibold tracking-wide">
            ACE TECH <span className="text-cyan-400">HUB</span>
          </span>
          {/* ✅ Only show "Admin" badge when logged in AND on admin page */}
          {isLoggedIn && isAdminPage && (
            <span className="ml-2 text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/30">
              Admin
            </span>
          )}
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {isAdminPage ? (
            // Admin Nav Items
            <>
              <Link
                href="/admin/dashboard"
                className={`relative transition group ${
                  pathname === '/admin/dashboard' 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Dashboard
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  pathname === '/admin/dashboard' ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
              <Link
                href="/"
                className="relative transition group text-gray-300 hover:text-cyan-400"
              >
                View Site
                <span className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 w-0 group-hover:w-full" />
              </Link>
            </>
          ) : (
            // Regular Site Nav Items
            navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition group ${
                    isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })
          )}
          
          {/* Admin Dashboard Link (visible on non-admin pages when logged in) */}
          {!isAdminPage && isLoggedIn && (
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition border border-cyan-500/30"
            >
              <LayoutDashboard size={16} />
              <span className="text-sm">Admin</span>
            </Link>
          )}
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
        bg-[#0b1220] border-l border-white/10
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-semibold">
            {isAdminPage ? "Admin Menu" : "Menu"}
          </span>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 p-6">
          {isAdminPage ? (
            // Admin Mobile Links
            <>
              <Link
                href="/admin/dashboard"
                className={`relative text-lg w-fit transition ${
                  pathname === '/admin/dashboard' 
                    ? "text-cyan-400" 
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                Dashboard
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    pathname === '/admin/dashboard' ? "w-full" : "w-0"
                  }`}
                />
              </Link>
              <Link
                href="/"
                className="relative text-lg w-fit transition text-gray-300 hover:text-cyan-400"
              >
                View Site
                <span className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 w-0" />
              </Link>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/admin/services"
                  className="block text-gray-300 hover:text-cyan-400 transition py-2"
                >
                  🛠️ Services
                </Link>
                <Link
                  href="/admin/blog"
                  className="block text-gray-300 hover:text-cyan-400 transition py-2"
                >
                  📝 Blog
                </Link>
                <Link
                  href="/admin/messages"
                  className="block text-gray-300 hover:text-cyan-400 transition py-2"
                >
                  ✉️ Messages
                </Link>
              </div>
            </>
          ) : (
            // Regular Site Mobile Links
            <>
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-lg w-fit transition ${
                      isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
              {/* ✅ Only show Admin Dashboard in mobile menu when logged in */}
              {isLoggedIn && (
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/admin/dashboard"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition py-2"
                  >
                    <LayoutDashboard size={18} />
                    <span>Admin Dashboard</span>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}