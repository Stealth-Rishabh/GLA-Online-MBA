"use client";

import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import RankingSection from "@/components/sections/RankingSection";
import ProgrammesSection from "@/components/sections/ProgrammesSection";
import AboutGLASection from "@/components/sections/AboutGLASection";
import RecruitersSection from "@/components/sections/RecruitersSection";
import JourneySection from "@/components/sections/JourneySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutGLASection />
      <ProgrammesSection />
      <RecruitersSection />
      <RankingSection />
      <JourneySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
