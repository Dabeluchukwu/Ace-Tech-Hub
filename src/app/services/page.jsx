"use client";

import { motion } from "framer-motion";
import ServicesHeader from "@/components/Services/ServicesHeader";
import ServicesGrid from "@/components/Services/ServicesGrid";
import ServicesFooter from "@/components/Services/ServicesFooter";

// Page transition animation
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.3 } 
  }
};

export default function Services() {
  return (
    <motion.main 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="bg-[#0b1220] text-white min-h-screen px-6 md:px-16 py-16"
    >
      <ServicesHeader />
      <ServicesGrid />
      <ServicesFooter />
    </motion.main>
  );
}