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
      color: "amber",
    },
    {
      icon: Trophy,
      title: "NIRF Ranked",
      desc: "Recognized in National Institutional Ranking Framework",
      color: "blue",
    },
    {
      icon: Shield,
      title: "UGC Approved",
      desc: "University Grants Commission recognized institution",
      color: "emerald",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      desc: "Internationally accepted degree with global validity",
      color: "purple",
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
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card
                className="py-0 h-full border-0 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default RankingSection;
