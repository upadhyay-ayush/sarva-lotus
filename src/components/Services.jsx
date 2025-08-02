"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaHotel,
  FaTruck,
  FaPlane,
  FaMoneyBillWave,
  FaBullhorn,
  FaBalanceScale,
  FaGavel,
  FaUsersCog,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "Manpower & Hospitality",
    description:
      "Comprehensive staffing and hospitality solutions tailored to your organizational needs.",
    icon: <FaHotel className="text-[#2db67c]" />,
    delay: 0.1,
    slug:"manpower-hospitality"
  },
  {
    title: "Business Development & Licensing",
    description:
      "Strategic business growth, licensing assistance, and market entry support.",
    icon: <FaUserTie className="text-[#2db67c]" />,
    delay: 0.2,
    slug:"business-development-licensing"
  },
  {
    title: "HR & Recruitment",
    description:
      "End-to-end hiring, background checks, and talent acquisition services.",
    icon: <FaUsersCog className="text-[#2db67c]" />,
    delay: 0.3,
    slug:"hr-recruitment"
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Efficient logistics planning and supply chain management for streamlined operations.",
    icon: <FaTruck className="text-[#2db67c]" />,
    delay: 0.4,
    slug:"logistics"
  },
  {
    title: "Travel Services",
    description:
      "Corporate and personal travel management with tailored itineraries.",
    icon: <FaPlane className="text-[#2db67c]" />,
    delay: 0.5,
    slug:"travel-services"
  },
  {
    title: "Finance",
    description:
      "Financial planning, budgeting, and advisory services for sustainable growth.",
    icon: <FaMoneyBillWave className="text-[#2db67c]" />,
    delay: 0.6,
    slug:"finance"
  },
  {
    title: "Marketing",
    description:
      "Offline and digital marketing strategies to grow your brand visibility.",
    icon: <FaBullhorn className="text-[#2db67c]" />,
    delay: 0.7,
    slug:"marketing"
  },
  {
    title: "CA & CS Services",
    description:
      "Chartered Accountancy and Company Secretary services for compliance and audits.",
    icon: <FaBalanceScale className="text-[#2db67c]" />,
    delay: 0.8,
    slug:"ca-cs-services"
  },
  {
    title: "Legal Advisory",
    description:
      "Legal consultancy, documentation, and contract management solutions.",
    icon: <FaGavel className="text-[#2db67c]" />,
    delay: 0.9,
    slug:"legal-advisory"
  },
  {
    title: "Investment & Valuation",
    description:
      "Business valuation, funding readiness, and investment strategy advisory.",
    icon: <FaSearch className="text-[#2db67c]" />,
    delay: 1.0,
    slug:"investment-valuation"
  },
];

const Services = () => {
  return (
    <section className="bg-[#e6e6ed] text-[#2b2b2b] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2db67c] font-semibold text-lg tracking-wider">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Comprehensive Digital Solutions
          </h2>
          <div className="w-20 h-1 bg-[#2db67c] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-[#2db67c1a]">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-3xl">
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link href={`/services/${service.slug}`}>
                    <button className="text-[#2db67c] text-sm font-medium flex items-center gap-2 hover:underline">
                      Learn more
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-[#2db67c] hover:bg-[#28a06c] text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-3 mx-auto">
            <span>View all services</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
