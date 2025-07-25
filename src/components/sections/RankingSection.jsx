"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Shield, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </AnimatedSection>
  );
};

export default RankingSection;
