"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ArrowRight, Play, Calendar } from "lucide-react";


const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    program: "",
    consent: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const specializations = [
    "Marketing Management",
    "Financial Management",
    "Human Resource Management",
    "Operations Management",
    "International Business",
    "Digital Marketing",
    "Business Analytics",
    "Entrepreneurship",
  ];

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
    },
    {
      id: "phone",
      label: "Mobile Number",
      type: "tel",
      placeholder: "+91 98765 43210",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium">
                  🎓 Admissions Open 2025
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-slate-200">Elevate Your Career</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Anytime, Anywhere
                </motion.span>
                <br />
                <span className="text-slate-200">with Our</span>
                
                <motion.span
                  className="text-emerald-400 ml-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Online MBA
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Transform your professional journey with India's most flexible
                and industry-relevant MBA program. Designed for working
                professionals who refuse to compromise on their ambitions.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
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
                  className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
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
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { value: 15000, label: "Alumni Network", suffix: "+" },
                { value: 98, label: "Placement Rate", suffix: "%" },
                { value: 4.8, label: "Student Rating", suffix: "" },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-green-500/10 outline-2 outline-emerald-500 outline-offset-2 backdrop-blur-3xl rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl font-bold text-emerald-400">
                    {stat.value} 
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lead Generation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:ml-auto"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="py-0 w-full max-w-md border-0 rounded-2xl overflow-hidden bg-white"
                style={{
                  background: "linear-gradient(135deg, #f8fafc 60%, #d1fae5 100%)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.10)",
                }}
              >
                <CardContent className="p-8">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Begin Your Transformation
                    </h3>
                    <p className="text-emerald-700">
                      Get personalized program details instantly
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formFields.map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      >
                        <Label
                          htmlFor={field.id}
                          className="text-slate-700 font-medium"
                        >
                          {field.label}
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                [field.id]: e.target.value,
                              })
                            }
                            className="mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400 rounded-lg transition-all duration-300 placeholder:text-slate-400"
                            style={{
                              boxShadow: "none",
                              "&:focus": {
                                boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.15)",
                              },
                            }}
                            required
                          />
                        </motion.div>
                      </motion.div>
                    ))}

                    <motion.div
                      className="grid grid-cols-2 gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <div>
                        <Label className="text-slate-700 font-medium">
                          State
                        </Label>
                        <Select
                          value={formData.state}
                          onValueChange={(value) =>
                            setFormData({ ...formData, state: value })
                          }
                        >
                          <SelectTrigger className="mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400">
                            <SelectValue placeholder="Select State" />
                          </SelectTrigger>
                          <SelectContent className="bg-white text-slate-900">
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="pune">Pune</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-slate-700 font-medium">
                          City
                        </Label>
                        <Select
                          value={formData.city}
                          onValueChange={(value) =>
                            setFormData({ ...formData, city: value })
                          }
                        >
                          <SelectTrigger className="mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400">
                            <SelectValue placeholder="Select City" />
                          </SelectTrigger>
                          <SelectContent className="bg-white text-slate-900">
                            <SelectItem value="central-delhi">
                              Central Delhi
                            </SelectItem>
                            <SelectItem value="south-delhi">
                              South Delhi
                            </SelectItem>
                            <SelectItem value="north-delhi">
                              North Delhi
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Label className="text-slate-700 font-medium">
                        Specialization Interest
                      </Label>
                      <Select
                        value={formData.program}
                        onValueChange={(value) =>
                          setFormData({ ...formData, program: value })
                        }
                      >
                        <SelectTrigger className="mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400">
                          <SelectValue placeholder="Select Specialization" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-slate-900">
                          {specializations.map((spec) => (
                            <SelectItem
                              key={spec}
                              value={spec.toLowerCase().replace(/\s+/g, "-")}
                            >
                              {spec}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 pt-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, consent: checked })
                        }
                        className="border-slate-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 bg-white"
                      />
                      <Label
                        htmlFor="consent"
                        className="text-sm text-slate-600 leading-relaxed"
                      >
                        I authorize GLA University to contact me with program
                        updates and career guidance.
                      </Label>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <Button
                        type="submit"
                        disabled={isLoading || !formData.consent}
                        className="w-full text-white py-3 rounded-lg font-semibold text-lg shadow-lg disabled:opacity-50"
                        style={{
                          background:
                            isLoading || !formData.consent
                              ? "#94a3b8"
                              : "linear-gradient(135deg, #059669, #10b981)",
                          boxShadow: "0 10px 25px rgba(16, 185, 129, 0.15)",
                        }}
                      >
                        <AnimatePresence mode="wait">
                          {isLoading ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center"
                            >
                              <motion.div
                                className="rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />
                              Processing...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="submit"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center"
                            >
                              Get Program Details
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Number.POSITIVE_INFINITY,
                                }}
                              >
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>
                  </form>

                  <motion.div
                    className="text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <p className="text-xs text-slate-500">
                      🔒 Your information is secure and confidential
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
