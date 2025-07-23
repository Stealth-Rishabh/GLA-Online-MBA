"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Target, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const RecruitersSection = () => {
  const recruiters = [
    
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
   
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
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
    <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
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
                className="bg-white p-6 rounded-xl border border-slate-100 transition-all duration-300"
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
                  className="w-full h-16 object-contain transition-all duration-300"
                  style={{ filter: "grayscale(0%)" }}
                  whileHover={{ filter: "grayscale(0%)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

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
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className={`w-8 h-8 text-${item.color}-600`} />
              </motion.div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default RecruitersSection;
