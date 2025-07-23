"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: ["About Program", "Admissions", "Curriculum", "Faculty"],
    },
    {
      title: "Support",
      links: [
        "Student Portal",
        "Technical Help",
        "Career Services",
        "Alumni Network",
      ],
    },
  ];

  const contactInfo = [
    { icon: Phone, text: "1800-XXX-XXXX" },
    { icon: Mail, text: "admissions@gla.ac.in" },
    { icon: MapPin, text: "Mathura, Uttar Pradesh" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">GLA University</h3>
                <p className="text-sm text-slate-400">Online Education</p>
              </div>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering professionals with world-class education and
              industry-relevant skills.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-slate-400">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; 2025 GLA University. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
