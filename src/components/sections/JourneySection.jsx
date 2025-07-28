"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Animation configurations
const animations = {
  card: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  cardAlt: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.1, duration: 0.5 },
  },
  stat: {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { delay: 0.5, duration: 0.6 },
  },
};

// Mobile Slider Component
const MobileSlider = ({ phases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);
  const sliderRef = useRef(null);
  const touchStartTime = useRef(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % phases.length);
  }, [phases.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + phases.length) % phases.length);
  }, [phases.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality with performance optimization
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Optimized touch handlers with better performance
  const onTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    touchStartTime.current = Date.now();
    setIsAutoPlaying(false);
  }, []);

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const swipeTime = Date.now() - touchStartTime.current;
    const isQuickSwipe = swipeTime < 300 && Math.abs(distance) > 100;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isQuickSwipe || isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Resume auto-play after 2 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 2000);
  }, [touchStart, touchEnd, minSwipeDistance, nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-fit">
      {/* Slider Container with hardware acceleration */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {phases.map((phase, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <MobilePhaseCard phase={phase} index={index}>
              <CardHeader phase={phase} />
              <CardBody phase={phase} />
            </MobilePhaseCard>
          </div>
        ))}
      </div>

      {/* Optimized Animated Dots */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {phases.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-emerald-500 scale-125"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentIndex ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: index === currentIndex ? Number.POSITIVE_INFINITY : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Reusable components
const PhaseCard = ({ phase, index, children }) => (
  <motion.div
    key={index}
    {...(index % 2 === 0 ? animations.card : animations.cardAlt)}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="grid gap-12 items-center lg:grid-cols-2">
      <div className={` ${phase.order} `}>
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-50 blur-xl"
            style={{
              background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              className="overflow-hidden relative py-0 bg-white rounded-3xl border-0 transition-all duration-500 group "
              style={{
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
            >
              <CardContent className="p-0">{children}</CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className={`${phase.imageOrder} hidden sm:block `}>
        <div className="relative group">
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
            style={{
              background: "linear-gradient(135deg, #34d399, #3b82f6)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
          <motion.div
            className="overflow-hidden relative rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={phase.image}
              alt={`${phase.title} process`}
              className="object-cover w-full h-80 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
              }}
            />

            {/* Floating Stats */}
            {phase.stats.map((stat, statIndex) => (
              <motion.div
                key={statIndex}
                {...animations.stat}
                viewport={{ once: true }}
                className={`absolute p-4 rounded-2xl shadow-lg ${
                  statIndex === 0 ? "top-6 right-6" : "bottom-6 left-6"
                }`}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Mobile-specific PhaseCard component with performance optimizations
const MobilePhaseCard = React.memo(({ phase, index, children }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative w-[95%] mx-auto"
  >
    <div className="relative">
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-30 blur-xl"
        style={{
          background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Card
          className="overflow-hidden relative py-0 bg-white rounded-3xl border-0 transition-all duration-300 group w-full"
          style={{
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
            willChange: "transform",
          }}
        >
          <CardContent className="p-0">{children}</CardContent>
        </Card>
      </motion.div>
    </div>
  </motion.div>
));

const CardHeader = React.memo(({ phase }) => (
  <div
    className="overflow-hidden relative p-6 text-white"
    style={{ background: phase.gradient }}
  >
    <motion.div
      className="absolute top-0 right-0 -mt-12 -mr-12 w-24 h-24 rounded-full"
      style={{ background: "rgba(255, 255, 255, 0.1)" }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute bottom-0 left-0 -mb-8 -ml-8 w-16 h-16 rounded-full"
      style={{ background: "rgba(255, 255, 255, 0.1)" }}
      animate={{ rotate: -360 }}
      transition={{
        duration: 12,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />

    <div className="relative z-10">
      <div className="flex items-center mb-3">
        <motion.div
          className="flex justify-center items-center mr-4 w-12 h-12 rounded-xl"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-xl font-bold text-white">{phase.phase}</span>
        </motion.div>
        <div>
          <h3 className="mb-1 text-xl font-bold lg:text-2xl">{phase.title}</h3>
          <p className="text-base text-white/80">{phase.subtitle}</p>
        </div>
      </div>

      <p className="text-base leading-relaxed text-white/90">
        {phase.description}
      </p>
    </div>
  </div>
));

const CardBody = React.memo(({ phase }) => (
  <div className="p-4">
    <div className="grid grid-cols-1 gap-0">
      {phase.items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.3 }}
          className="flex items-start p-3 space-x-3 rounded-lg transition-colors duration-200 hover:bg-emerald-50 group/item"
          whileHover={{ x: 3 }}
        >
          <motion.div
            className="text-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item.icon}
          </motion.div>
          <div className="flex-1">
            <h4 className="mb-1 text-sm font-semibold transition-colors text-slate-800 group-hover/item:text-emerald-600">
              {item.title}
            </h4>
            <p className="text-xs leading-relaxed text-slate-600">
              {item.desc}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </motion.div>
        </motion.div>
      ))}
    </div>

    <div className="pt-4 mt-4 border-t border-slate-100">
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span className="flex items-center">
          <motion.div
            className="mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
          Step {phase.phase}
        </span>
        <span className="flex items-center">
          <motion.div
            className="mr-2 w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.3,
            }}
          />
          {phase.subtitle}
        </span>
      </div>
    </div>
  </div>
));

const BottomCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    className="mt-20 text-center "
  >
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-around p-8 gap-8 rounded-3xl border border-emerald-100  w-full"
      style={{
        background: "linear-gradient(135deg, #ecfdf5, #dbeafe)",
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex -space-x-2">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            className="flex justify-center items-center w-12 h-12 text-sm font-bold text-white rounded-full border-4 border-white"
            style={{
              background: `linear-gradient(135deg, ${
                i <= 3 ? "#f97316" : i <= 5 ? "#ec4899" : "#10b981"
              }, ${i <= 3 ? "#ea580c" : i <= 5 ? "#be185d" : "#059669"})`,
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {i}
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <h4 className="mb-1 text-2xl sm:text-3xl font-light sm:font-bold text-emerald-900">
          Ready to Begin Your Journey?
        </h4>
        <p className="text-slate-600">
          Join 36,000+ professionals who transformed their careers
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button
          className="px-10 py-6 font-semibold text-white rounded-xl shadow-lg"
          style={{
            background: "linear-gradient(135deg, #059669, #3b82f6)",
            boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
          }}
        >
          Enquire Now
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
    </motion.div>
  </motion.div>
);

const JourneySection = () => {
  const phases = [
    {
      phase: "01",
      title: "Registration Phase",
      subtitle: "Register yourself",
      description:
        "Start your journey by registering yourself and getting access to our comprehensive learning platform.",
      gradient: "linear-gradient(135deg, #f97316, #ea580c)",
      items: [
        {
          icon: "👤",
          title: "Create Your Profile",
          desc: "Set up your personal learning profile and preferences",
        },
        {
          icon: "📋",
          title: "Choose Your Path",
          desc: "Select your specialization and learning track",
        },
        {
          icon: "📝",
          title: "Assessment Test",
          desc: "Take initial assessment to customize your learning",
        },
        {
          icon: "🎯",
          title: "Set Goals",
          desc: "Define your career objectives and milestones",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "01", label: "Step" },
        { value: "5min", label: "Setup Time" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "02",
      title: "Application Phase",
      subtitle: "Submit your application",
      description:
        "Complete your application with required documents and submit for review by our admission team.",
      gradient: "linear-gradient(135deg, #ec4899, #be185d)",
      items: [
        {
          icon: "📄",
          title: "Document Upload",
          desc: "Submit all required academic and professional documents",
        },
        {
          icon: "💼",
          title: "Work Experience",
          desc: "Detail your professional background and achievements",
        },
        {
          icon: "📝",
          title: "Statement of Purpose",
          desc: "Write your motivation and career aspirations",
        },
        {
          icon: "🎯",
          title: "Application Review",
          desc: "Our team reviews your complete application",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "02", label: "Step" },
        { value: "24hrs", label: "Review Time" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "03",
      title: "Payment Phase",
      subtitle: "Pay your fee",
      description:
        "Secure your seat by completing the fee payment through our secure payment gateway with flexible options.",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      items: [
        {
          icon: "💳",
          title: "Multiple Payment Options",
          desc: "Credit card, debit card, UPI, and bank transfer",
        },
        {
          icon: "🔒",
          title: "Secure Gateway",
          desc: "SSL encrypted payment processing for safety",
        },
        {
          icon: "📊",
          title: "Installment Plans",
          desc: "Flexible No Cost EMI options available for easy payments",
        },
        {
          icon: "🧾",
          title: "Payment Confirmation",
          desc: "Instant receipt and enrollment confirmation",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "03", label: "Step" },
        { value: "100%", label: "Secure" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "04",
      title: "Verification Phase",
      subtitle: "Get your documents verified",
      description:
        "Our verification team will authenticate your documents and credentials to ensure program eligibility.",
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
      items: [
        {
          icon: "🔍",
          title: "Document Authentication",
          desc: "Thorough verification of academic credentials",
        },
        {
          icon: "✅",
          title: "Background Check",
          desc: "Professional background and experience validation",
        },
        {
          icon: "📞",
          title: "Reference Verification",
          desc: "Contact provided references for confirmation",
        },
        {
          icon: "📋",
          title: "Eligibility Confirmation",
          desc: "Final confirmation of program eligibility",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "04", label: "Step" },
        { value: "48hrs", label: "Verification" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "05",
      title: "Access Phase",
      subtitle: "Gain access to our LMS",
      description:
        "Get complete access to our advanced Learning Management System with all course materials and resources.",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      items: [
        {
          icon: "💻",
          title: "LMS Dashboard",
          desc: "Personalized dashboard with course progress tracking",
        },
        {
          icon: "📚",
          title: "Course Materials",
          desc: "Access to lectures, readings, and assignments",
        },
        {
          icon: "👥",
          title: "Student Community",
          desc: "Connect with peers and join study groups",
        },
        {
          icon: "📊",
          title: "Progress Tracking",
          desc: "Monitor your learning progress and achievements",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "05", label: "Step" },
        { value: "24/7", label: "Access" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
    {
      phase: "06",
      title: "Assessment Phase",
      subtitle: "Appear in Exams",
      description:
        "Demonstrate your knowledge through comprehensive assessments and examinations conducted throughout the program.",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      items: [
        {
          icon: "📝",
          title: "Online Assessments",
          desc: "Regular quizzes and assignments to test understanding",
        },
        {
          icon: "⏰",
          title: "Timed Examinations",
          desc: "Proctored exams with flexible scheduling options",
        },
        {
          icon: "📊",
          title: "Performance Analytics",
          desc: "Detailed feedback and performance insights",
        },
        {
          icon: "🏆",
          title: "Certification Exams",
          desc: "Final assessments for program certification",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center&q=80",
      stats: [
        { value: "06", label: "Step" },
        { value: "90%", label: "Pass Rate" },
      ],
      order: "order-1 lg:order-2",
      imageOrder: "order-2 lg:order-1",
    },
    {
      phase: "07",
      title: "Completion Phase",
      subtitle: "Get your degree",
      description:
        "Graduate with your MBA degree and join our elite alumni network of successful business professionals.",
      gradient: "linear-gradient(135deg, #059669, #047857)",
      items: [
        {
          icon: "🎓",
          title: "Graduation Ceremony",
          desc: "Celebrate your achievement in our graduation ceremony",
        },
        {
          icon: "📜",
          title: "Official Degree",
          desc: "Receive your accredited MBA degree certificate",
        },
        {
          icon: "🌐",
          title: "Alumni Network",
          desc: "Lifetime access to our global alumni community",
        },
        {
          icon: "💼",
          title: "Career Support",
          desc: "Ongoing career guidance and placement assistance",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: [
        { value: "07", label: "Final Step" },
        { value: "₹15L", label: "Avg Package" },
      ],
      order: "order-2 lg:order-1",
      imageOrder: "order-1 lg:order-2",
    },
  ];

  return (
    <AnimatedSection className="overflow-hidden relative py-8 sm:py-16 bg-white">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div
          style={{
            background: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
          }}
          className="absolute inset-0"
        />
      </motion.div>

      <div className="container relative z-10 px-4 mx-auto sm:max-w-6xl md:max-w-7xl">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Learning Journey
            </motion.span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience a comprehensive learning path designed to transform you
            into a business leader through our structured, industry-aligned
            curriculum.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          {/* Mobile Slider - Only visible on mobile */}
          <div className="block sm:hidden h-fit">
            <MobileSlider phases={phases} />
          </div>

          {/* Desktop Layout - Only visible on desktop */}
          <div className="hidden sm:block">
            <div className="space-y-10 lg:space-y-10">
              {phases.map((phase, index) => (
                <PhaseCard key={index} phase={phase} index={index}>
                  <CardHeader phase={phase} />
                  <CardBody phase={phase} />
                </PhaseCard>
              ))}
            </div>
          </div>

          <BottomCTA />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default JourneySection;
