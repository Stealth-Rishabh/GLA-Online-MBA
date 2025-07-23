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
import { submitAdmissionQuery } from "@/lib/crm";
import { toast } from "sonner";
import { getAllStates, getCitiesForState } from "@/lib/stateData";

const HeroSection = () => {
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
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4 py-12 lg:py-20 relative z-10">
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
                <div
                  key={index}
                  className="text-center bg-green-500/10 outline-2 outline-emerald-500 outline-offset-2 backdrop-blur-3xl rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
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
          <LeadGenerationForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coursesid: "OGLAMBA201",
    state: "",
    city: "",
    page: "amity",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
      validation: (value) => value.trim().length >= 2,
      errorMessage: "Name must be at least 2 characters long",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: "Please enter a valid email address",
    },
    {
      name: "phone",
      label: "Mobile Number",
      type: "tel",
      placeholder: "+91 98765 43210",
      required: true,
      validation: (value) => /^[6-9][0-9]{9}$/.test(value),
      errorMessage:
        "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9",
    },
  ];

  const handleChange = (name, value) => {
    let processedValue = value;

    if (name === "name") {
      processedValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "phone") {
      processedValue = value.replace(/[^0-9]/g, "");
      if (processedValue.length > 10) {
        processedValue = processedValue.slice(0, 10);
      }
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, processedValue),
    }));

    if (name === "state") {
      // Reset city when state changes
      setFormData((prev) => ({ ...prev, city: "" }));
      // Get cities for selected state
      const stateCities = getCitiesForState(processedValue);
      setCities(stateCities);
    }
  };

  const validateField = (name, value) => {
    const field = formFields.find((f) => f.name === name);
    if (!field) return "";
    if (field.required && !value) return `${field.label} is required`;
    if (value && field.validation && !field.validation(value)) {
      return field.errorMessage;
    }
    return "";
  };

  const handlePhoneBlur = () => {
    const phone = formData.phone;
    if (/^[6-9][0-9]{9}$/.test(phone)) {
      let submittedPhoneNumbers =
        JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];
      if (submittedPhoneNumbers.includes(phone)) {
        toast.warning(
          "Note: This phone number may have already been used in this session."
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    // Validate state and city
    if (!formData.state) {
      newErrors.state = "Please select a state";
    }
    if (!formData.city) {
      newErrors.city = "Please select a city";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    // Frontend check for duplicate phone number using localStorage
    let submittedPhoneNumbers =
      JSON.parse(localStorage.getItem("submittedPhoneNumbers")) || [];
    if (submittedPhoneNumbers.includes(formData.phone)) {
      toast.warning(
        "This phone number has already been used to submit a query during this session."
      );
      return;
    }

    setIsLoading(true);

    try {
      const sanitizedFormData = {
        ...formData,
        city: formData.city.replace(/\s/g, ""),
        page: "amity",
      };

      // PARALLEL API CALLS for faster submission
      const [crmResult, sheetsResponse] = await Promise.all([
        submitAdmissionQuery(sanitizedFormData, {}),
        fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...sanitizedFormData,
            campaign: "",
            utm_source: "Stealth",
            utm_medium: "",
            utm_term: "",
            utm_content: "",
          }),
        }),
      ]);

      const sheetsData = await sheetsResponse.json();

      // Handle success case
      if (crmResult.success || sheetsData.success) {
        toast.success("Form submitted successfully!");
        if (!submittedPhoneNumbers.includes(formData.phone)) {
          submittedPhoneNumbers.push(formData.phone);
          localStorage.setItem(
            "submittedPhoneNumbers",
            JSON.stringify(submittedPhoneNumbers)
          );
        }
        setFormData({
          name: "",
          email: "",
          phone: "",
          coursesid: "OGLAMBA201",
          state: "",
          city: "",
          page: "amity",
        });
        setErrors({});
        window.location.href = "/thankyou.html";
      } else {
        // Handle error case
        if (sheetsData.isDuplicate) {
          toast.error(
            "This phone number has already been used to submit an inquiry."
          );
          if (!submittedPhoneNumbers.includes(formData.phone)) {
            submittedPhoneNumbers.push(formData.phone);
            localStorage.setItem(
              "submittedPhoneNumbers",
              JSON.stringify(submittedPhoneNumbers)
            );
          }
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Label
                    htmlFor={field.name}
                    className="text-slate-700 font-medium"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </Label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className={`mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400 rounded-lg transition-all duration-300 placeholder:text-slate-400 ${
                        errors[field.name] ? "border-red-500" : ""
                      }`}
                      style={{
                        boxShadow: "none",
                        "&:focus": {
                          boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.15)",
                        },
                      }}
                      required={field.required}
                      onBlur={
                        field.name === "phone" ? handlePhoneBlur : undefined
                      }
                    />
                  </motion.div>
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
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
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleChange("state", value)}
                  >
                    <SelectTrigger
                      className={`mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400 ${
                        errors.state ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-slate-900">
                      {getAllStates().map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <Label className="text-slate-700 font-medium">
                    City
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleChange("city", value)}
                    disabled={!formData.state}
                  >
                    <SelectTrigger
                      className={`mt-1 bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400 ${
                        errors.city ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-slate-900">
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>
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
                  disabled={isLoading}
                  className="w-full text-white py-3 rounded-lg font-semibold text-lg shadow-lg disabled:opacity-50"
                  style={{
                    background: isLoading
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
  );
};
