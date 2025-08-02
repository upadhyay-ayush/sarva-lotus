"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaTrophy,
  FaChartLine,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-4 lg:px-24 relative overflow-hidden">
      {/* Decorative green elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00A878] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 w-64 h-64 bg-[#00A878] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT - Headings and Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-wide uppercase text-[#00A878] font-semibold"
          >
            Our Story & Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            Your Vision, <span className="text-[#00A878]">Our Expertise</span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              Your Success Amplified
            </span>
          </motion.h2>

          <div className="relative h-60 sm:h-80 md:h-96 w-full">
            {/* Main image */}
            <motion.div className="absolute top-0 left-0 w-2/3 h-full rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/AboutUsImg/team-meeting.jpg"
                alt="Office Team"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Secondary image overlapping */}
            <div className="absolute bottom-0 right-0 w-1/2 h-2/3 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/AboutUsImg/company-space.jpeg"
                alt="Work Culture"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Text, Stats, Video CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We transform ideas into market-leading digital experiences. Our team
            of award-winning strategists, designers, and developers create
            solutions that drive measurable business growth and establish
            industry leadership.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 gap-6 mt-8"
          >
            {[
              {
                title: "Innovation",
                icon: <FaLightbulb className="text-[#00A878] text-xl mb-2" />,
                desc: "We embrace fresh ideas and turn them into market-ready solutions.",
              },
              {
                title: "Client-Centric",
                icon: <FaChartLine className="text-[#00A878] text-xl mb-2" />,
                desc: "Our client success is our biggest priority and goal.",
              },
              {
                title: "Global Vision",
                icon: <FaGlobe className="text-[#00A878] text-xl mb-2" />,
                desc: "Thinking global while delivering locally, always future-focused.",
              },
              {
                title: "Excellence",
                icon: <FaTrophy className="text-[#00A878] text-xl mb-2" />,
                desc: "Committed to delivering high-quality services, every time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-[#00A878]/50 transition-colors"
              >
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 168, 120, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-[#00A878] hover:bg-[#00926c] text-white px-8 py-4 rounded-full transition-all font-medium group"
            >
              <span className="relative">
                <FaPlay className="text-white" />
                <span className="absolute inset-0 bg-[#00A878] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
              </span>
              WATCH OUR STORY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
