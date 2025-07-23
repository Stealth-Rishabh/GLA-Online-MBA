"use client";

import React from "react";
import { motion } from "framer-motion";


const Footer = () => {

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
       

        <motion.div
          className=" text-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} GLA University. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
