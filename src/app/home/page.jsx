"use client";

import React, { useState, useEffect } from "react";
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
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    // Get UTM parameters from URL using window.location
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const params = {
        utm_source: urlParams.get("utm_source"),
        utm_medium: urlParams.get("utm_medium"),
        utm_campaign: urlParams.get("utm_campaign"),
        utm_term: urlParams.get("utm_term"),
        utm_content: urlParams.get("utm_content"),
        campaign: urlParams.get("campaign"),
      };
      setUtmParams(params);
      // Store in localStorage for other components if needed
      localStorage.setItem("utmParams", JSON.stringify(params));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden">
      <Header />
      <HeroSection utmParams={utmParams} />
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
