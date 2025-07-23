"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shalini Chaudhry",
      role: "Online MBA, Batch 2022–24",
      content:
        "Pursuing Online MBA program at GLA Online was one of the best decisions of my career. The interactive sessions and practical assignments enhanced my learning experience. GLA Online didn't just provide education but empowered me with the skills to excel. Highly recommended",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anmol Nagpal",
      role: "Online MBA, Current Student",
      content:
        "Enrolling in the Online MBA program at GLA Online has been a transformative experience. I am thrilled to be part of the 2024‑26 batch, and I'm confident this program will be a cornerstone in my journey toward professional excellence.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Mukul",
      role: "Online MBA, Batch 2023–25",
      content:
        "GLA Online's MBA program was a game‑changer for me! The support system, from doubt‑clearing to career guidance, was exceptional.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Deeksha Agrawal",
      role: "Online MBA, Batch 2022–24",
      content:
        "The flexible learning environment, industry‑relevant curriculum, and exceptional faculty support made it possible for me to balance work and studies seamlessly. GLA Online truly empowered me with knowledge and confidence.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Ashwini Chaudhry",
      role: "Online MBA, Batch 2024–26",
      content:
        "Studying MBA online from GLA University has been an enriching experience! The practical insights, coupled with academic excellence, have not only enhanced my business acumen but also broadened my perspective.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Success Stories That{" "}
            <span className="text-emerald-600">Inspire</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our alumni who have transformed their careers and achieved
            their professional goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <Card
                className="py-0 h-full border-0 rounded-2xl bg-white transition-all duration-300"
                style={{
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent className="p-8">
                  <motion.div
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 text-amber-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.p
                    className="text-slate-600 mb-6 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
