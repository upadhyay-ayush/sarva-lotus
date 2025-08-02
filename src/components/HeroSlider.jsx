"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/heroSliderImg/hero1.jpg",
    title: "Empowering Innovation",
    subtitle: "Building a smarter financial future with natural solutions.",
    buttonText: "Explore Now",
  },
  {
    id: 2,
    image: "/heroSliderImg/hero2.jpeg",
    title: "Trusted Natural Products",
    subtitle: "Pure ingredients for a sustainable and healthy lifestyle.",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image: "/heroSliderImg/hero3.jpg",
    title: "Sustainable Living",
    subtitle: "Join the movement towards a greener tomorrow.",
    buttonText: "Get Started",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover w-full h-full"
          />
          {/* Light white overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        <motion.button
          className="px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg font-medium text-white bg-[#00A878] hover:bg-[#00926c] transition-all duration-300 shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {slides[currentSlide].buttonText}
        </motion.button>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#00A878]/10 hover:bg-[#00A878]/20 text-[#00A878]"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#00A878]/10 hover:bg-[#00A878]/20 text-[#00A878]"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="w-4 h-4 rounded-full border border-[#00A878]/60 relative"
          >
            <span
              className={`absolute inset-0 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#00A878]" : "bg-[#00A878]/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#00A878]/50 z-30"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 8, ease: "linear" }}
        key={currentSlide}
      />
    </section>
  );
};

export default HeroSlider;
