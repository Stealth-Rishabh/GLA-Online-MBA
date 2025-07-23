"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, FileText, CreditCard, GraduationCap, Monitor, BookOpen, UserCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const JourneySection = () => {
  const phases = [
    {
      phase: "01",
      title: "Registration Phase",
      subtitle: "Register yourself",
      description:
        "Start your journey by registering yourself and getting access to our comprehensive learning platform.",
      gradient: "linear-gradient(135deg, #f97316, #ea580c)",
      items: [
        {
          icon: "👤",
          title: "Create Your Profile",
          desc: "Set up your personal learning profile and preferences",
        },
        {
          icon: "📋",
          title: "Choose Your Path",
          desc: "Select your specialization and learning track",
        },
        {
          icon: "📝",
          title: "Assessment Test",
          desc: "Take initial assessment to customize your learning",
        },
        {
          icon: "🎯",
          title: "Set Goals",
          desc: "Define your career objectives and milestones",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "01", label: "Step" },
        { value: "5min", label: "Setup Time" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "02",
      title: "Application Phase",
      subtitle: "Submit your application",
      description:
        "Complete your application with required documents and submit for review by our admission team.",
      gradient: "linear-gradient(135deg, #ec4899, #be185d)",
      items: [
        {
          icon: "📄",
          title: "Document Upload",
          desc: "Submit all required academic and professional documents",
        },
        {
          icon: "💼",
          title: "Work Experience",
          desc: "Detail your professional background and achievements",
        },
        {
          icon: "📝",
          title: "Statement of Purpose",
          desc: "Write your motivation and career aspirations",
        },
        {
          icon: "🎯",
          title: "Application Review",
          desc: "Our team reviews your complete application",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "02", label: "Step" },
        { value: "24hrs", label: "Review Time" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "03",
      title: "Payment Phase",
      subtitle: "Pay your fee",
      description:
        "Secure your seat by completing the fee payment through our secure payment gateway with flexible options.",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      items: [
        {
          icon: "💳",
          title: "Multiple Payment Options",
          desc: "Credit card, debit card, UPI, and bank transfer",
        },
        {
          icon: "🔒",
          title: "Secure Gateway",
          desc: "SSL encrypted payment processing for safety",
        },
        {
          icon: "📊",
          title: "Installment Plans",
          desc: "Flexible EMI options available for easy payments",
        },
        {
          icon: "🧾",
          title: "Payment Confirmation",
          desc: "Instant receipt and enrollment confirmation",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "03", label: "Step" },
        { value: "100%", label: "Secure" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "04",
      title: "Verification Phase",
      subtitle: "Get your documents verified",
      description:
        "Our verification team will authenticate your documents and credentials to ensure program eligibility.",
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
      items: [
        {
          icon: "🔍",
          title: "Document Authentication",
          desc: "Thorough verification of academic credentials",
        },
        {
          icon: "✅",
          title: "Background Check",
          desc: "Professional background and experience validation",
        },
        {
          icon: "📞",
          title: "Reference Verification",
          desc: "Contact provided references for confirmation",
        },
        {
          icon: "📋",
          title: "Eligibility Confirmation",
          desc: "Final confirmation of program eligibility",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "04", label: "Step" },
        { value: "48hrs", label: "Verification" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "05",
      title: "Access Phase",
      subtitle: "Gain access to Learning Management System",
      description:
        "Get complete access to our advanced Learning Management System with all course materials and resources.",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      items: [
        {
          icon: "💻",
          title: "LMS Dashboard",
          desc: "Personalized dashboard with course progress tracking",
        },
        {
          icon: "📚",
          title: "Course Materials",
          desc: "Access to lectures, readings, and assignments",
        },
        {
          icon: "👥",
          title: "Student Community",
          desc: "Connect with peers and join study groups",
        },
        {
          icon: "🎯",
          title: "Progress Tracking",
          desc: "Monitor your learning progress and achievements",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "05", label: "Step" },
        { value: "24/7", label: "Access" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "06",
      title: "Assessment Phase",
      subtitle: "Appear in Exams",
      description:
        "Demonstrate your knowledge through comprehensive assessments and examinations conducted throughout the program.",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      items: [
        {
          icon: "📝",
          title: "Online Assessments",
          desc: "Regular quizzes and assignments to test understanding",
        },
        {
          icon: "⏰",
          title: "Timed Examinations",
          desc: "Proctored exams with flexible scheduling options",
        },
        {
          icon: "📊",
          title: "Performance Analytics",
          desc: "Detailed feedback and performance insights",
        },
        {
          icon: "🏆",
          title: "Certification Exams",
          desc: "Final assessments for program certification",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "06", label: "Step" },
        { value: "90%", label: "Pass Rate" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "07",
      title: "Completion Phase",
      subtitle: "Get your degree",
      description:
        "Graduate with your MBA degree and join our elite alumni network of successful business professionals.",
      gradient: "linear-gradient(135deg, #059669, #047857)",
      items: [
        {
          icon: "🎓",
          title: "Graduation Ceremony",
          desc: "Celebrate your achievement in our graduation ceremony",
        },
        {
          icon: "📜",
          title: "Official Degree",
          desc: "Receive your accredited MBA degree certificate",
        },
        {
          icon: "🌐",
          title: "Alumni Network",
          desc: "Lifetime access to our global alumni community",
        },
        {
          icon: "💼",
          title: "Career Support",
          desc: "Ongoing career guidance and placement assistance",
        },
      ],
      image:
      
        "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: [
        { value: "07", label: "Final Step" },
        { value: "₹15L", label: "Avg Package" },
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

      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4 relative z-10">
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
                                    <p className="text-white/80 text-lg">
                                      {phase.subtitle}
                                    </p>
                                  </div>
                                </div>

                                <p className="text-white/90 text-lg leading-relaxed">
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
                                    Step {phase.phase}
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
                                    {phase.subtitle}
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
                          alt={`${phase.title} process`}
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
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i <= 3 ? "#f97316" : i <= 5 ? "#ec4899" : "#10b981"
                      }, ${i <= 3 ? "#ea580c" : i <= 5 ? "#be185d" : "#059669"})`,
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
