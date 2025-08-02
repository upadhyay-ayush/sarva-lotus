"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="bg-[#e6e6ed] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2db67c] font-semibold text-lg tracking-wider uppercase inline-flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#2db67c] inline-block animate-pulse"></span>
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2b2b2b] mt-3">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#2db67c] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#2b2b2b] flex items-center gap-2">
              <FaPaperPlane className="text-[#2db67c]" />
              Send us a message
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-[#f5f5f5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2db67c] text-[#2b2b2b] placeholder-gray-500 transition"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-[#f5f5f5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2db67c] text-[#2b2b2b] placeholder-gray-500 transition"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-[#f5f5f5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2db67c] text-[#2b2b2b] placeholder-gray-500 transition"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-[#f5f5f5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2db67c] text-[#2b2b2b] placeholder-gray-500 transition"
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px -10px rgba(45, 182, 124, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#2db67c] text-white py-4 rounded-lg font-semibold hover:bg-[#28a06c] transition-all duration-300 flex items-center justify-center gap-2"
              type="submit"
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-white p-8 rounded-2xl shadow-md text-[#2b2b2b]"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdSupportAgent className="text-[#2db67c]" />
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#2db67c1a] mr-4">
                    <FaMapMarkerAlt className="text-xl text-[#2db67c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2db67c]">
                      Our Location
                    </h4>
                    <p className="mt-1">
                      Syenexis Venture Pvt. Ltd.
                      <br />
                      123 Business Park, Mumbai
                      <br />
                      Maharashtra, 400001
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#2db67c1a] mr-4">
                    <FaPhoneAlt className="text-xl text-[#2db67c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2db67c]">
                      Phone Number
                    </h4>
                    <p className="mt-1">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#2db67c1a] mr-4">
                    <FaEnvelope className="text-xl text-[#2db67c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2db67c]">
                      Email Address
                    </h4>
                    <p className="mt-1">contact@syenexis.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-8 border-t border-[#2db67c33]">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-[#2b2b2b]">
                <a href="#" className="hover:text-[#2db67c] transition">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="hover:text-[#2db67c] transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-[#2db67c] transition">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="hover:text-[#2db67c] transition">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
