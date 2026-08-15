"use client";

import ServicesHeader from "@/components/Services/ServicesHeader";
import ServicesGrid from "@/components/Services/ServicesGrid";
import ServicesFooter from "@/components/Services/ServicesFooter";

export default function Services() {
  return (
    <main className="bg-[#0b1220] text-white min-h-screen px-6 md:px-16 py-16">
      <ServicesHeader />
      <ServicesGrid />
      <ServicesFooter />
    </main>
  );
}