"use client";

import { motion } from "framer-motion";
import Hero from "@/components/AboutUs/Hero";
import Mindset from "@/components/AboutUs/Mindset";

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

export default function About() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="bg-[#0b1220] overflow-hidden"
    >
      <Hero />
      <Mindset />
    </motion.main>
  );
}