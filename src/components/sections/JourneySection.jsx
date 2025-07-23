"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const JourneySection = () => {
  const phases = [
    {
      phase: "01",
      title: "Foundation Phase",
      subtitle: "Months 1-8",
      description:
        "Build unshakeable business fundamentals with core subjects that form the backbone of modern management.",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      items: [
        {
          icon: "📊",
          title: "Management Fundamentals",
          desc: "Core principles of modern business management",
        },
        {
          icon: "💰",
          title: "Business Economics",
          desc: "Economic theories applied to business decisions",
        },
        {
          icon: "📈",
          title: "Quantitative Methods",
          desc: "Statistical tools for business analytics",
        },
        {
          icon: "⚖️",
          title: "Business Ethics",
          desc: "Ethical frameworks for responsible leadership",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "95%", label: "Completion Rate" },
        { value: "4.9/5", label: "Student Rating" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "02",
      title: "Specialization Phase",
      subtitle: "Months 9-16",
      description:
        "Deep dive into your chosen domain with advanced courses and industry-specific expertise.",
      gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      items: [
        {
          icon: "🎯",
          title: "Advanced Specialization",
          desc: "Deep expertise in your chosen field",
        },
        {
          icon: "📋",
          title: "Industry Case Studies",
          desc: "Real-world business scenarios and solutions",
        },
        {
          icon: "🔬",
          title: "Research Projects",
          desc: "Independent research in specialized areas",
        },
        {
          icon: "👥",
          title: "Peer Collaboration",
          desc: "Group projects with industry professionals",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "8+", label: "Specializations" },
        { value: "100+", label: "Case Studies" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "03",
      title: "Application Phase",
      subtitle: "Months 17-24",
      description:
        "Apply your expertise through capstone projects and real-world business challenges.",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      items: [
        {
          icon: "🚀",
          title: "Capstone Project",
          desc: "Comprehensive business solution development",
        },
        {
          icon: "💼",
          title: "Industry Internship",
          desc: "Hands-on experience with leading companies",
        },
        {
          icon: "🎓",
          title: "Career Placement",
          desc: "Dedicated placement support and guidance",
        },
        {
          icon: "🌐",
          title: "Alumni Network",
          desc: "Lifetime access to professional network",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "₹12L", label: "Avg Package" },
        { value: "500+", label: "Recruiters" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div
          style={{
            background: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
          }}
          className="absolute inset-0"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-2 h-2 bg-emerald-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            Your Learning Path
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your{" "}
            <motion.span
              className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Learning Journey
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience a comprehensive learning path designed to transform you
            into a business leader through our structured, industry-aligned
            curriculum.
          </motion.p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="space-y-32 lg:space-y-40">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`lg:pr-16 ${phase.order}`}>
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-4 rounded-3xl opacity-50 blur-xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #ecfdf5, #d1fae5)",
                        }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card
                          className="py-0 relative bg-white border-0 rounded-3xl overflow-hidden transition-all duration-500 group"
                          style={{
                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                          }}
                        >
                          <CardContent className="p-0">
                            {/* Card Header */}
                            <div
                              className="p-8 text-white relative overflow-hidden"
                              style={{
                                background: phase.gradient,
                              }}
                            >
                              <motion.div
                                className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16"
                                style={{
                                  background: "rgba(255, 255, 255, 0.1)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 20,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />
                              <motion.div
                                className="absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12"
                                style={{
                                  background: "rgba(255, 255, 255, 0.1)",
                                }}
                                animate={{ rotate: -360 }}
                                transition={{
                                  duration: 15,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />

                              <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                  <motion.div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6"
                                    style={{
                                      background: "rgba(255, 255, 255, 0.2)",
                                      backdropFilter: "blur(10px)",
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                    }}
                                  >
                                    <span className="text-2xl font-bold text-white">
                                      {phase.phase}
                                    </span>
                                  </motion.div>
                                  <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-1">
                                      {phase.title}
                                    </h3>
                                    <p className="text-emerald-100 text-lg">
                                      {phase.subtitle}
                                    </p>
                                  </div>
                                </div>

                                <p className="text-emerald-50 text-lg leading-relaxed">
                                  {phase.description}
                                </p>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                              <div className="grid grid-cols-1 gap-0">
                                {phase.items.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                      delay: idx * 0.1,
                                      duration: 0.5,
                                    }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300 group/item"
                                    whileHover={{ x: 5 }}
                                  >
                                    <motion.div
                                      className="text-2xl"
                                      whileHover={{ scale: 1.2, rotate: 10 }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 300,
                                      }}
                                    >
                                      {item.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-slate-800 mb-1 group-hover/item:text-emerald-600 transition-colors">
                                        {item.title}
                                      </h4>
                                      <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                      </p>
                                    </div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      whileHover={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    </motion.div>
                                  </motion.div>
                                ))}
                              </div>

                              <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                  <span className="flex items-center">
                                    <motion.div
                                      className="w-2 h-2 bg-emerald-500 rounded-full mr-2"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                      }}
                                    />
                                    Duration: 8 Months
                                  </span>
                                  <span className="flex items-center">
                                    <motion.div
                                      className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: 0.5,
                                      }}
                                    />
                                    6 Core Subjects
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>

                  <div className={`${phase.imageOrder} lg:pl-16`}>
                    <div className="relative group">
                      <motion.div
                        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #34d399, #3b82f6)",
                        }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <motion.div
                        className="relative overflow-hidden rounded-3xl shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.img
                          src={phase.image}
                          alt={`${phase.title} learning environment`}
                          className="w-full h-80 lg:h-96 object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                          }}
                        />

                        {/* Floating Stats */}
                        {phase.stats.map((stat, statIndex) => (
                          <motion.div
                            key={statIndex}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                              delay: 0.5 + statIndex * 0.2,
                              duration: 0.6,
                            }}
                            viewport={{ once: true }}
                            className={`absolute p-4 rounded-2xl shadow-lg ${
                              statIndex === 0
                                ? "top-6 right-6"
                                : "bottom-6 left-6"
                            }`}
                            style={{
                              background: "rgba(255, 255, 255, 0.95)",
                              backdropFilter: "blur(10px)",
                            }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="text-center">
                              <div className="text-2xl font-bold text-emerald-600">
                                {stat.value}
                              </div>
                              <div className="text-xs text-slate-600 font-medium">
                                {stat.label}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.div
              className="inline-flex items-center space-x-4 p-8 rounded-3xl border border-emerald-100"
              style={{
                background: "linear-gradient(135deg, #ecfdf5, #dbeafe)",
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i <= 2 ? "#34d399" : "#3b82f6"
                      }, ${i <= 2 ? "#10b981" : "#1d4ed8"})`,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-slate-800 mb-1">
                  Ready to Begin Your Journey?
                </h4>
                <p className="text-slate-600">
                  Join 15,000+ professionals who transformed their careers
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  className="text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #059669, #3b82f6)",
                    boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
                  }}
                >
                  Start Application
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default JourneySection;
