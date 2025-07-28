"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToLeadForm } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80  fixed w-full backdrop-blur-md border-b border-slate-200 top-0 z-50"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="GLA Online MBA"
              width={100}
              height={100}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden sm:block"
          >
            <Badge
              variant="secondary"
              className="bg-amber-100 text-amber-800 border-amber-200"
            >
              NAAC A+ Accredited
            </Badge>
          </motion.div>

          <motion.div
            className="animate-bounce -mb-4"
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
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #059669, #10b981)",
                  boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
                }}
                onClick={scrollToLeadForm}
              >
                Apply Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
