"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Portfolio/Hero";

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

export default function Portfolio() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="bg-[#020617] overflow-hidden"
    >
      <Hero />
    </motion.main>
  );
}