'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Layout/NavBar';
import Footer from './Layout/Footer';
import { useEffect, useState } from 'react';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  // Check if we're on any admin page
  const isAdminPage = pathname?.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';
  
  useEffect(() => {
    // Get navbar height after mount
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  
  return (
    <>
      {/* Show navbar everywhere except admin pages and login page */}
      {!isAdminPage && <Navbar />}
      <main 
        className={`flex-1`}
        style={!isAdminPage ? { paddingTop: `${navbarHeight}px` } : {}}
      >
        {children}
      </main>
      {/* Show footer everywhere except admin pages */}
      {!isAdminPage && <Footer />}
    </>
  );
}