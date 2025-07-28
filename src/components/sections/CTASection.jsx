"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { scrollToLeadForm } from "@/lib/utils";

const CTASection = () => {
  const stats = [
    { value: "24 Months", label: "Program Duration" },
    { value: "100%", label: "Online Learning" },
    { value: "No Cost EMI", label: "Payment Options" },
  ];

  return (
    <AnimatedSection className="py-10 sm:py-20 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to{" "}
          <span className="text-emerald-400">Transform Your Future?</span>
        </motion.h2>
        <motion.p
          className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join thousands of professionals who have accelerated their careers
          with our Online MBA program. Your success story starts here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #059669, #10b981)",
                boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
              }}
              onClick={scrollToLeadForm}
            >
              Enquire Now - Limited Seats
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Calendar className="ml-2 w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {item.value}
              </div>
              <div className="text-slate-300">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
