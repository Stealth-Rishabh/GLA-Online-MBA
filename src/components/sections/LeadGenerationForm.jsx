"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
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

import { Card, CardContent } from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import { submitAdmissionQuery } from "@/lib/crm";
import { toast } from "sonner";
import { getAllStates, getCitiesForState } from "@/lib/stateData";

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
  {
    name: "coursesid",
    type: "hidden",
    value: "OGLAMBA201",
  },
  {
    name: "state",
    label: "State",
    type: "select",
    placeholder: "Select your state",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a state",
    options: getAllStates(),
  },
  {
    name: "city",
    label: "City",
    type: "select",
    placeholder: "Select your city",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a city",
    options: [], // Will be populated based on selected state
  },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  coursesid: "OGLAMBA201",
  state: "",
  city: "",
};

const LeadGenerationForm = forwardRef(({ utmParams = {} }, ref) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);
  const nameInputRef = React.useRef(null);

  // Expose the focus method through ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      nameInputRef.current?.focus();
    },
  }));

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

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

    setIsSubmitting(true);

    try {
      const sanitizedFormData = {
        ...formData,
        city: formData.city.replace(/\s/g, ""),
      };
      const dataForSheet = {
        ...sanitizedFormData,
        campaign: utmParams?.campaign || utmParams?.utm_campaign,
        utm_source: utmParams?.utm_source || "Stealth", // Use URL parameter instead of hardcoding
        utm_medium: utmParams?.utm_medium,
        utm_term: utmParams?.utm_term,
        utm_content: utmParams?.utm_content,
      };

      // PARALLEL API CALLS for faster submission
      const [crmResult, sheetsResponse] = await Promise.all([
        submitAdmissionQuery(sanitizedFormData, utmParams),
        fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForSheet),
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
        setFormData(initialFormData);
        setErrors({});
        // Immediate redirect
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
          toast.error(
            crmResult.message || "Failed to submit form. Please try again."
          );
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <motion.div
      id="lead-generation-form"
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
          className="overflow-hidden py-0 w-full bg-white rounded-2xl border-0 sm:max-w-md "
          style={{
            background: "linear-gradient(135deg, #f8fafc 60%, #d1fae5 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.10)",
          }}
        >
          <CardContent className="p-8">
            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="mb-2 text-2xl sm:text-2xl font-bold text-emerald-800 tracking-wide">
                Enquire Now
              </h3>
              <p className="text-emerald-700 hidden sm:block">
                Get personalized program details instantly
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.slice(0, 3).map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Label
                    htmlFor={field.name}
                    className="font-medium text-slate-700"
                  >
                    {field.label}
                    {field.required && (
                      <span className="ml-1 text-red-500">*</span>
                    )}
                  </Label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      id={field.name}
                      name={field.name}
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
                      ref={field.name === "name" ? nameInputRef : null}
                    />
                  </motion.div>
                  {errors[field.name] && (
                    <p className="mt-1 text-sm text-red-500">
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
                <div className="w-full">
                  <Label className="font-medium text-slate-700">
                    State
                    <span className="ml-1 text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleChange("state", value)}
                  >
                    <SelectTrigger
                      className={`mt-1 w-full bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400 ${
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
                    <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                  )}
                </div>

                <div className="w-full">
                  <Label className="font-medium text-slate-700">
                    City
                    <span className="ml-1 text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleChange("city", value)}
                    disabled={!formData.state}
                  >
                    <SelectTrigger
                      className={`mt-1 w-full bg-white text-slate-900 border-slate-300 focus:border-emerald-400 rounded-lg placeholder:text-slate-400 ${
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
                    <p className="mt-1 text-sm text-red-500">{errors.city}</p>
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
                  disabled={isSubmitting}
                  className="py-3 w-full text-lg font-semibold text-white rounded-lg shadow-lg disabled:opacity-50"
                  style={{
                    background: isSubmitting
                      ? "#94a3b8"
                      : "linear-gradient(135deg, #059669, #10b981)",
                    boxShadow: "0 10px 25px rgba(16, 185, 129, 0.15)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center items-center"
                      >
                        <motion.div
                          className="mr-2 w-5 h-5 text-base rounded-full border-b-2 border-white"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                        ⌛Please wait ! Form is Submitting...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center items-center"
                      >
                        Submit Query
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
              className="mt-4 text-center"
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
});

export default LeadGenerationForm;
