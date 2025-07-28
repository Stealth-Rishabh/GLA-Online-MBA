"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shalini Chaudhry",
      role: "Online MBA, Batch 2022–24",
      content:
        "Pursuing Online MBA program at GLA Online was one of the best decisions of my career. The interactive sessions and practical assignments enhanced my learning experience. GLA Online didn't just provide education but empowered me with the skills to excel. Highly recommended",
      rating: 5,
      image: "/images/testimonials/shalini.png",
    },
    {
      name: "Anmol Nagpal",
      role: "Online MBA, Current Student",
      content:
        "Enrolling in the Online MBA program at GLA Online has been a transformative experience. I am thrilled to be part of the 2024‑26 batch, and I'm confident this program will be a cornerstone in my journey toward professional excellence.",
      rating: 5,
      image: "/images/testimonials/anmol.png",
    },
    {
      name: "Mukul",
      role: "Online MBA, Batch 2023–25",
      content:
        "GLA Online's MBA program was a game‑changer for me! The support system, from doubt‑clearing to career guidance, was exceptional.",
      rating: 5,
      image: "/images/testimonials/mukul.png",
    },
    {
      name: "Deeksha Agrawal",
      role: "Online MBA, Batch 2022–24",
      content:
        "The flexible learning environment, industry‑relevant curriculum, and exceptional faculty support made it possible for me to balance work and studies seamlessly. GLA Online truly empowered me with knowledge and confidence.",
      rating: 5,
      image: "/images/testimonials/deeksha.png",
    },
    {
      name: "Ashwini Chaudhry",
      role: "Online MBA, Batch 2024–26",
      content:
        "Studying MBA online from GLA University has been an enriching experience! The practical insights, coupled with academic excellence, have not only enhanced my business acumen but also broadened my perspective.",
      rating: 5,
      image: "/images/testimonials/ashwini.png",
    },
  ];

  // Carousel state for mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  // Desktop slider state
  const [desktopCurrentIndex, setDesktopCurrentIndex] = useState(0);
  const desktopContainerRef = useRef(null);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Desktop navigation functions
  const nextDesktopSlide = useCallback(() => {
    setDesktopCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - 2);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [testimonials.length]);

  const prevDesktopSlide = useCallback(() => {
    setDesktopCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - 2);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [testimonials.length]);

  const goToDesktopSlide = useCallback(
    (index) => {
      const maxIndex = Math.max(0, testimonials.length - 2);
      setDesktopCurrentIndex(Math.min(index, maxIndex));
    },
    [testimonials.length]
  );

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
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
  }, [isAutoPlaying, isPaused, nextSlide]);

  // Pause/Resume handlers
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Touch handlers for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const touchStartTime = useRef(0);
  const minSwipeDistance = 50;

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
    <AnimatedSection className="py-10 sm:py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Success Stories That{" "}
            <span className="text-emerald-600">Inspire</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our alumni who have transformed their careers and achieved
            their professional goals.
          </p>
        </motion.div>

        {/* Desktop Slider Layout */}
        <div className="hidden md:block">
          <div
            ref={desktopContainerRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Slider Container */}
            <div className="overflow-hidden p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={desktopCurrentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {testimonials
                      .slice(desktopCurrentIndex, desktopCurrentIndex + 2)
                      .map((testimonial, index) => (
                        <motion.div
                          key={`${desktopCurrentIndex}-${index}`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2, duration: 0.6 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <Card
                            className="py-0 h-full border-0 rounded-2xl bg-white transition-all duration-300"
                            style={{
                              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <CardContent className="p-8">
                              <motion.div
                                className="flex items-center mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                              >
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      delay: i * 0.1,
                                      duration: 0.3,
                                    }}
                                  >
                                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                                  </motion.div>
                                ))}
                              </motion.div>
                              <motion.p
                                className="text-slate-600 mb-6 leading-relaxed italic"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                              >
                                "{testimonial.content}"
                              </motion.p>
                              <motion.div
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                              >
                                <motion.img
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  className="w-12 h-12 rounded-full object-cover mr-4"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                />
                                <div>
                                  <h4 className="font-semibold text-slate-800">
                                    {testimonial.name}
                                  </h4>
                                  <p className="text-sm text-slate-600">
                                    {testimonial.role}
                                  </p>
                                </div>
                              </motion.div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Navigation Arrows */}
            <motion.button
              onClick={prevDesktopSlide}
              className="absolute left-4 sm:-left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </motion.button>

            <motion.button
              onClick={nextDesktopSlide}
              className="absolute right-4 sm:-right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </motion.button>

            {/* Desktop Dots Indicator */}
            <div className="flex justify-center items-center mt-8 space-x-3">
              {Array.from({ length: Math.max(1, testimonials.length - 1) }).map(
                (_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToDesktopSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === desktopCurrentIndex
                        ? "bg-emerald-500 scale-125"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: index === desktopCurrentIndex ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat:
                        index === desktopCurrentIndex
                          ? Number.POSITIVE_INFINITY
                          : 0,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Slider Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="w-full"
                  >
                    <Card
                      className="py-0 h-full border-0 rounded-2xl bg-white transition-all duration-300"
                      style={{
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <CardContent className="p-8">
                        <motion.div
                          className="flex items-center justify-center mb-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {[...Array(testimonials[currentIndex].rating)].map(
                            (_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                              >
                                <Star className="w-5 h-5 text-amber-400 fill-current" />
                              </motion.div>
                            )
                          )}
                        </motion.div>
                        <motion.p
                          className="text-slate-600 mb-6 leading-relaxed italic text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          "{testimonials[currentIndex].content}"
                        </motion.p>
                        <motion.div
                          className="flex items-center justify-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <motion.img
                            src={
                              testimonials[currentIndex].image ||
                              "/placeholder.svg"
                            }
                            alt={testimonials[currentIndex].name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {testimonials[currentIndex].role}
                            </p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full  flex items-center justify-center hover:bg-emerald-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full  flex items-center justify-center hover:bg-emerald-50 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
                    repeat:
                      index === currentIndex ? Number.POSITIVE_INFINITY : 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
