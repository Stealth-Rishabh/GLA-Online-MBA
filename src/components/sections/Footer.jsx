"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className=" text-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} GO MBA. All rights
            reserved.
          </p>
        </motion.div>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="text-sm text-slate-400">
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" className="text-sm text-slate-400">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
