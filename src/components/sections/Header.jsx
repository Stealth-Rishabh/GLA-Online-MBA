"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GraduationCap className="w-7 h-7 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">GLA University</h1>
            <p className="text-sm text-slate-600">Online Education</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Badge
            variant="secondary"
            className="bg-amber-100 text-amber-800 border-amber-200"
          >
            NAAC A+ Accredited
          </Badge>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
