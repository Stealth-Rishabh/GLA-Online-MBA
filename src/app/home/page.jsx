"use client";

import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import RankingSection from "@/components/sections/RankingSection";
import ProgrammesSection from "@/components/sections/ProgrammesSection";
import WhyGLASection from "@/components/sections/WhyGLASection";
import RecruitersSection from "@/components/sections/RecruitersSection";
import JourneySection from "@/components/sections/JourneySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <HeroSection />
      <RankingSection />
      <ProgrammesSection />
      <WhyGLASection />
      <RecruitersSection />
      <JourneySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
