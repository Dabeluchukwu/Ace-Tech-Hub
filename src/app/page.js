"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";

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

export default function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="bg-[#020c1b] overflow-hidden"
    >
      <HeroSection />
      <AboutSection />
    </motion.main>
  );
}