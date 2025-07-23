"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  ChevronRight,
  DollarSign,
  Users,
  Settings,
  Globe,
  Smartphone,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ProgrammesSection = () => {
  const specializations = [
    {
      title: "Marketing Management",
      description:
        "Master digital marketing strategies, brand management, and consumer behavior analysis",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center&q=80",
      icon: TrendingUp,
    },
    {
      title: "Financial Management",
      description:
        "Develop expertise in corporate finance, investment strategies, and financial analysis",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center&q=80",
      icon: DollarSign,
    },
    {
      title: "Human Resource Management",
      description:
        "Learn talent acquisition, organizational behavior, and strategic HR planning",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=center&q=80",
      icon: Users,
    },
    {
      title: "Operations Management",
      description:
        "Optimize business processes, supply chain management, and quality control systems",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&crop=center&q=80",
      icon: Settings,
    },
    {
      title: "International Business",
      description:
        "Navigate global markets, cross-cultural management, and international trade strategies",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center&q=80",
      icon: Globe,
    },
    {
      title: "Digital Marketing",
      description:
        "Master SEO, social media marketing, content strategy, and digital analytics",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&crop=center&q=80",
      icon: Smartphone,
    },
    {
      title: "Business Analytics",
      description:
        "Harness data science, predictive modeling, and business intelligence tools",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center&q=80",
      icon: BarChart3,
    },
    {
      title: "Entrepreneurship",
      description:
        "Build startups, innovation management, and venture capital fundamentals",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop&crop=center&q=80",
      icon: Lightbulb,
    },
  ];

  return (
    <AnimatedSection className="py-10 sm:py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Choose Your <span className="text-emerald-600">Specialization</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover specialized MBA programs designed to match your career
            aspirations and industry demands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card
                className="py-0 h-full bg-white border-0 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <motion.img
                      src={spec.image}
                      alt={spec}
                      className="w-full h-32 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center mx-auto mb-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <spec.icon className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">
                      {spec.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {spec.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProgrammesSection;
