"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Zap, Users, Network, Lightbulb } from "lucide-react";

const AboutGLASection = () => {
  const features = [
    {
      icon: Zap,
      title: "Flexible Learning Schedule",
      desc: "Study at your own pace with 24/7 access to course materials and recorded lectures.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      desc: "Learn from industry experts and experienced academicians with real-world insights.",
    },
    {
      icon: Network,
      title: "Strong Alumni Network",
      desc: "Connect with 36,000+ alumni across various industries and leadership positions.",
    },
    {
      icon: Lightbulb,
      title: "Practical Learning Approach",
      desc: "Real-world case studies, live projects, and industry simulations for hands-on experience.",
    },
  ];

  return (
    <AnimatedSection className="py-10 sm:py-20 bg-white">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center sm:text-left font-bold text-slate-800 mb-6">
              About <span className="text-emerald-600 block sm:inline">GLA Online MBA</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed text-center sm:text-left">
              Experience world-class education designed for the modern
              professional. Our program combines academic excellence with
              practical industry insights.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #059669, #10b981)",
                    boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
                  }}
                >
                  Enquire Now
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

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center&q=80"
                alt="Students collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
                }}
              />
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">No Cost EMI</div>
                <div className="text-sm text-slate-600">Payment Options</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">36K</div>
                <div className="text-sm text-slate-600">Alumni Network</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutGLASection;
