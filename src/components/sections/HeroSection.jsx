"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

import LeadGenerationForm from "./LeadGenerationForm";

const HeroSection = ({ utmParams = {} }) => {
  const formRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white sm:h-[calc(100vh-100px)] flex items-center mt-20">
      <motion.div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="container relative z-10 px-4 py-8 mx-auto sm:max-w-6xl md:max-w-7xl lg:py-10 sm:py-20">
        <div className="grid gap-0 sm:gap-12 items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700">
                  🎓 Admissions Open 2025
                </Badge>
              </motion.div> */}

              <motion.h1
                className="text-4xl font-semibold sm:font-bold leading-normal md:text-5xl lg:text-6xl text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-slate-200">Elevate Your Career</span>
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Anytime, Anywhere
                </motion.span>
                <br />
                <span className="text-slate-200">with</span>

                <motion.span
                  className="-mb-4 sm:-mb-6  ml-2 inline-block text-white bg-emerald-600 font-bold border rounded border-emerald-400 bg-white-20 px-4 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <span className="relative z-10">Online</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  />
                  <span className="ml-1 relative z-10">MBA</span>
                </motion.span>
              </motion.h1>
              {/* 
              <motion.p
                className="max-w-2xl text-xl leading-relaxed text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Transform your professional journey with India's most flexible
                and industry-relevant MBA program. Designed for working
                professionals who refuse to compromise on their ambitions.
              </motion.p> */}

              <motion.div
                className="hidden sm:block p-5 w-full max-w-2xl bg-gradient-to-r from-emerald-100 to-green-50 rounded-xl border border-l-4 border-emerald-200 border-l-emerald-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex gap-3 items-start animate-pulse">
                  {/*  */}
                  <div>
                    <motion.h3
                      className="mb-2 font-bold text-emerald-700 sm:text-2xl text-center sm:text-left text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      🎓 ADMISSIONS OPEN 2025 - Limited Seats!
                    </motion.h3>
                    <motion.p
                      className="text-base leading-relaxed text-emerald-600 text-center sm:text-left hidden sm:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      Premium MBA education with flexible learning for ambitious
                      professionals.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="block sm:hidden p-5 w-full max-w-2xl bg-gradient-to-r from-emerald-100 to-green-50 rounded-xl border border-l-4 border-emerald-200 border-l-emerald-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex gap-3 items-center justify-center animate-pulse">
                  {/*  */}
                  <div>
                    <motion.h3
                      className="font-bold text-emerald-700 font-serif text-xl text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      ADMISSIONS OPEN 2025
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-xl shadow-lg hover:bg-emerald-700"
                  style={{
                    background: "linear-gradient(135deg, #059669, #10b981)",
                    boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
                  }}
                >
                  Start Your Journey
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

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold text-emerald-400 bg-transparent rounded-xl border-2 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Play className="mr-2 w-5 h-5" />
                  </motion.div>
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div> */}

            <motion.div
              className=" items-center pt-2 space-x-8 flex hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                {
                  value: "NAAC 'A+'",
                  label: "Accredited University",
                  suffix: "",
                },
                { value: "₹1,05,000", label: "(All Inclusive)", suffix: "" },
                { value: "24", label: "Months", suffix: "" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 text-center rounded-2xl shadow-lg backdrop-blur-3xl transition-all duration-300 bg-green-500/10 outline-2 outline-emerald-500 outline-offset-2 hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold text-emerald-400 sm:text-3xl">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lead Generation Form */}
          <LeadGenerationForm ref={formRef} utmParams={utmParams} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
