"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Shield, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Marquee } from "@/components/magicui/marquee";

// Reusable Logo Card Component
const LogoCard = ({ logo, index }) => {
  return (
    <motion.div
      key={index}
      className="flex items-center justify-center mx-8"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative group">
        <div className=" h-16 bg-white rounded-lg  flex items-center justify-center hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
          <img
            src={logo.image}
            alt={logo.name}
            className="max-w-full max-h-full object-contain  transition-all duration-300"
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-medium text-slate-600 bg-white px-2 py-1 rounded shadow-sm">
            {logo.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const RankingSection = () => {
  const rankingData = [
    {
      icon: Award,
      title: "NAAC A+ Grade",
      desc: "Highest accreditation grade for quality education standards",
      color: "text-amber-600",
      gradientFrom: "#fef3c7", // amber-100
      gradientTo: "#fde68a", // amber-200
      glowColor: "#f59e0b", // amber-500
      bgImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    },
    {
      icon: Trophy,
      title: "NIRF Ranked",
      desc: "Recognized in National Institutional Ranking Framework",
      color: "text-blue-600",
      gradientFrom: "#dbeafe", // blue-100
      gradientTo: "#bfdbfe", // blue-200
      glowColor: "#3b82f6", // blue-500
      bgImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    },
    {
      icon: Shield,
      title: "UGC Approved",
      desc: "University Grants Commission recognized institution",
      color: "text-emerald-600",
      gradientFrom: "#d1fae5", // emerald-100
      gradientTo: "#a7f3d0", // emerald-200
      glowColor: "#10b981", // emerald-500
      bgImage:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      desc: "Internationally accepted degree with global validity",
      color: "text-purple-600",
      gradientFrom: "#f3e8ff", // purple-100
      gradientTo: "#e9d5ff", // purple-200
      glowColor: "#8b5cf6", // purple-500
      bgImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    },
  ];

  // Ranking logos data
  const rankingLogos = [
    { name: "NAAC", image: "/images/ranking/c-naac.jpg" },
    { name: "NIRF", image: "/images/ranking/c-nirf.jpg" },
    { name: "UGC", image: "/images/ranking/c-ugc.jpg" },
    { name: "ACCA", image: "/images/ranking/c-acca.jpg" },
    { name: "AIU", image: "/images/ranking/c-aiu.jpg" },
    { name: "IACB", image: "/images/ranking/c-iacb.jpg" },
    { name: "IAU", image: "/images/ranking/c-iau.jpg" },
    { name: "Times", image: "/images/ranking/c-times.jpg" },
    { name: "WES", image: "/images/ranking/c-wes.jpg" },
  ];

  const firstRowLogos = rankingLogos.slice(0, rankingLogos.length / 2);
  const secondRowLogos = rankingLogos.slice(rankingLogos.length / 2);
  return (
    <AnimatedSection className="py-10 sm:py-20 bg-white">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Trusted by <span className="text-emerald-600">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to quality education is recognized by leading
            accreditation bodies and ranking agencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {rankingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotate: 2,
                transition: { type: "spring", stiffness: 300 },
              }}
              viewport={{ once: true }}
              className="group "
            >
              <motion.div
                whileHover={{
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.15), 0 0 40px ${item.glowColor}60`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl h-full relative overflow-hidden"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Blur and overlay */}
                <div
                  className="absolute inset-0 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)`,
                  }}
                />

                <Card
                  className="py-0 h-full border-0 rounded-2xl overflow-hidden transition-all duration-300 bg-transparent relative z-10"
                  style={{
                    boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 0 20px ${item.glowColor}20`,
                  }}
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${item.gradientFrom} 0%, ${item.gradientTo} 100%)`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Ranking Logos Marquee Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Recognized by Leading Bodies
            </h3>
            <p className="text-slate-600">
              Our accreditations and rankings speak for our quality
            </p>
          </div> */}

          {/* First Row - Forward Direction (Left to Right) */}
          <div className="mb-8">
            <Marquee className="sm:py-8 py-0" pauseOnHover={true}>
              {firstRowLogos.map((logo, index) => (
                <LogoCard key={index} logo={logo} index={index} />
              ))}
            </Marquee>
          </div>

          {/* Second Row - Reverse Direction (Right to Left) */}
          <div>
            <Marquee className="sm:py-8 py-0" reverse={true} pauseOnHover={true}>
              {secondRowLogos.map((logo, index) => (
                <LogoCard key={index} logo={logo} index={index} />
              ))}
            </Marquee>
          </div>
          
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default RankingSection;
