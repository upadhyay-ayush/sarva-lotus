"use client";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaTruck,
  FaWarehouse,
  FaRoute,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    question: "How can this service improve my logistics operations?",
    answer:
      "Our logistics solutions streamline supply chain processes, reduce costs by up to 30%, and enhance delivery efficiency with 99.5% on-time performance across the board.",
  },
  {
    question: "Is this suitable for global logistics?",
    answer:
      "Yes, our service is designed to scale for both domestic and international needs, with expertise in 150+ countries and compliance with all major trade regulations.",
  },
  {
    question: "Do you offer real-time tracking support?",
    answer:
      "Absolutely! Our solutions integrate advanced tracking systems with AI-powered analytics for real-time visibility and data-driven decisions that reduce delays by 40%.",
  },
];

const Logistics = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-[#f8fafc] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-28 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-blue-300">Supply Chain</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Intelligent logistics solutions that reduce costs, improve
              efficiency, and give you complete visibility across your
              operations.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
              >
                Get Started <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              {
                value: "30%",
                label: "Cost Reduction",
                icon: (
                  <FaChartLine className="text-blue-600 text-3xl mx-auto mb-3" />
                ),
              },
              {
                value: "99.5%",
                label: "On-Time Delivery",
                icon: (
                  <FaTruck className="text-blue-600 text-3xl mx-auto mb-3" />
                ),
              },
              {
                value: "40%",
                label: "Faster Fulfillment",
                icon: (
                  <FaWarehouse className="text-blue-600 text-3xl mx-auto mb-3" />
                ),
              },
              {
                value: "150+",
                label: "Countries Served",
                icon: (
                  <FaRoute className="text-blue-600 text-3xl mx-auto mb-3" />
                ),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {stat.icon}
                <p className="text-3xl font-bold text-blue-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                Next-Gen Logistics Solutions
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our end-to-end logistics services leverage AI and machine
                learning to optimize transportation, inventory, and fulfillment
                processes. We partner with businesses to create agile supply
                chains that respond swiftly to market dynamics and customer
                demand.
              </p>
              <ul className="space-y-4">
                {[
                  "AI-powered route optimization",
                  "Real-time inventory tracking",
                  "Automated warehouse management",
                  "Predictive analytics for demand forecasting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <FaCheckCircle className="text-blue-600 text-sm" />
                    </div>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/logistics-dashboard.jpg"
                  alt="Logistics Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Real-Time Visibility
                  </h3>
                  <p>Track every shipment with our intuitive dashboard</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              Comprehensive Logistics Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From first mile to last mile, we've got your supply chain covered
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Smart Warehousing",
                description:
                  "Automated storage solutions with real-time inventory tracking and predictive restocking.",
                icon: <FaWarehouse className="text-blue-600 text-4xl mb-4" />,
              },
              {
                title: "Fleet Optimization",
                description:
                  "AI-powered route planning that reduces fuel costs and improves delivery times.",
                icon: <FaRoute className="text-blue-600 text-4xl mb-4" />,
              },
              {
                title: "Last-Mile Delivery",
                description:
                  "Specialized solutions for urban logistics with 98% on-time delivery performance.",
                icon: <FaTruck className="text-blue-600 text-4xl mb-4" />,
              },
              {
                title: "Cross-Border Logistics",
                description:
                  "Seamless international shipping with customs clearance and compliance handled for you.",
                icon: <FaRoute className="text-blue-600 text-4xl mb-4" />,
              },
              {
                title: "Cold Chain Solutions",
                description:
                  "Temperature-controlled logistics for pharmaceuticals and perishable goods.",
                icon: <FaWarehouse className="text-blue-600 text-4xl mb-4" />,
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Actionable insights to continuously improve your supply chain performance.",
                icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-[#f8fafc] p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              See how we've transformed logistics operations for industry
              leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaTruck className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail Giant</h3>
              <p className="text-blue-100 mb-4">
                Reduced last-mile delivery costs by 28% while improving customer
                satisfaction scores.
              </p>
              <button className="text-blue-300 hover:text-white flex items-center gap-1 text-sm font-medium">
                Read Case Study <FiArrowRight />
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaWarehouse className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Commerce Leader</h3>
              <p className="text-blue-100 mb-4">
                Automated warehouse operations leading to 40% faster order
                fulfillment.
              </p>
              <button className="text-blue-300 hover:text-white flex items-center gap-1 text-sm font-medium">
                Read Case Study <FiArrowRight />
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaRoute className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturer</h3>
              <p className="text-blue-100 mb-4">
                Optimized global distribution network saving $2.4M annually in
                logistics costs.
              </p>
              <button className="text-blue-300 hover:text-white flex items-center gap-1 text-sm font-medium">
                Read Case Study <FiArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our logistics solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-[#f8fafc] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center font-medium text-lg text-blue-900 hover:bg-blue-50 transition"
                >
                  {faq.question}
                  {openFAQ === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-blue-600" />
                  )}
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses that trust us with their logistics
              operations. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg text-lg"
              >
                Request Demo <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold shadow-lg text-lg"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
