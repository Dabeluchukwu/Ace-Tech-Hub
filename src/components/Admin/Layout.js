'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { name: 'Services', href: '/admin/services', icon: '🛠️' },
  { name: 'Blog', href: '/admin/blog', icon: '📝' },
  { name: 'Messages', href: '/admin/messages', icon: '✉️' },
  { name: 'Certificates', href: '/admin/certificates', icon: '🏆' },
  { name: 'Notifications', href: '/admin/notifications', icon: '🔔' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Close sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Mobile Menu Button - Fixed */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ✅ Sidebar - Fixed with its own scroll */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 flex flex-col h-full`}
      >
        {/* ✅ Logo - Fixed at top */}
        <div className="flex-shrink-0 p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-800">ACE TECH HUB</h1>
          <p className="text-sm text-gray-500">Admin Panel</p>
        </div>

        {/* ✅ Navigation - Scrollable if content overflows */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition ${
                pathname === item.href
                  ? 'bg-cyan-50 text-cyan-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-cyan-600'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ✅ Bottom Section - Fixed at bottom */}
        <div className="flex-shrink-0 border-t border-gray-200 p-4 space-y-2">
          {/* View Site Button */}
          <Link
            href="/"
            className="flex items-center px-4 py-3 text-sm font-medium text-cyan-600 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition group"
          >
            <Globe size={18} className="mr-3 group-hover:scale-110 transition" />
            <span>View Site</span>
            <span className="ml-auto text-xs bg-cyan-200 text-cyan-700 px-2 py-0.5 rounded-full">
              Live
            </span>
          </Link>
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-50 rounded-lg transition"
          >
            <span className="mr-3 text-lg">🚪</span>
            Logout
          </button>
        </div>
      </div>

      {/* ✅ Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ✅ Main Content - Scrollable */}
      <div className={`lg:ml-64 min-h-screen transition-all duration-300 ${
        isSidebarOpen ? 'ml-64' : 'ml-0'
      }`}>
        <div className="p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}