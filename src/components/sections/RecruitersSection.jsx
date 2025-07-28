"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Target, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const RecruitersSection = () => {
  const recruiters = [
    {
      name: "Jindal",
      logo: "/images/logos/logo6.png",
    },
    {
      name: "Tech Mahindra",
      logo: "/images/logos/logo9.png",
    },
    {
      name: "Honda",
      logo: "/images/logos/logo3.png",
    },
    {
      name: "HDFC Bank",
      logo: "/images/logos/logo4.png",
    },
    {
      name: "NTT Data",
      logo: "/images/logos/logo5.png",
    },
    {
      name: "Amazon",
      logo: "/images/logos/logo1.png",
    },
    {
      name: "Afcons",
      logo: "/images/logos/logo7.png",
    },
    {
      name: "Mu Sigma",
      logo: "/images/logos/logo8.png",
    },
    {
      name: "Samsung",
      logo: "/images/logos/logo2.png",
    },
    {
      name: "Azure Power",
      logo: "/images/logos/logo10.png",
    },
  ];

  const stats = [
    {
      icon: Building2,
      title: "500+ Companies",
      desc: "Partner with us for campus recruitment",
      color: "emerald",
    },
    {
      icon: Target,
      title: "₹12 LPA",
      desc: "Average salary package offered",
      color: "emerald",
    },
    {
      icon: Briefcase,
      title: "Multiple Offers",
      desc: "Students receive multiple job offers",
      color: "emerald",
    },
  ];

  return (
    <AnimatedSection className="pb-10 sm:pb-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Trusted by <span className="text-emerald-600">Top Recruiters</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our graduates are highly sought after by leading companies across
            various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {recruiters.map((recruiter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white p-6 rounded-xl  transition-all duration-300"
                style={{
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <motion.img
                  src={recruiter.logo || "/placeholder.svg"}
                  alt={recruiter.name}
                  className="w-full h-16 object-contain grayscale transition-all duration-300"
                  style={{ filter: "grayscale(0%)" }}
                  whileHover={{ filter: "grayscale(0%)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
{/* 
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50  p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4 `}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className={`w-8 h-8 text-${item.color}-600`} />
              </motion.div>
              <h4 className="text-3xl font-bold text-emerald-900 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </AnimatedSection>
  );
};

export default RecruitersSection;
