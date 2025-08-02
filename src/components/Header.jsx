"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FaArrowDownLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Contact", href: "/contact" },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden box-border">
      {/* Top Header */}
      <div
        className={`bg-[#f0f0f0] text-gray-700 p-[6px_20px] max-sm:p-[6px_10px] h-[44px] text-sm border-b border-[#d6d6d6] fixed top-0 w-full z-50 transition-transform duration-300 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex justify-between items-center h-[30px]">
          <div className={`flex items-center ${poppins.className} gap-2`}>
            <IoLocationOutline size={18} className="text-[#00A878]" />
            <span className="max-sm:text-[11px]">
              123 Main Street, City, State
            </span>
          </div>

          <div className="flex items-center gap-4 max-sm:gap-2">
            <a
              href="tel:+919876543210"
              className="group flex items-center gap-2 text-sm hover:text-[#00A878] transition"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-transparent group-hover:bg-[#00A8781a] transition">
                <FaPhoneAlt size={14} className="text-[#00A878]" />
              </div>
              <span className="max-sm:hidden">+91 98765 43210</span>
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm hover:text-[#00A878] transition"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-transparent group-hover:bg-[#00A8781a] transition">
                <FaWhatsapp size={16} className="text-[#00A878]" />
              </div>
              <span className="max-sm:hidden">Chat</span>
            </a>

            <Link
              href="/contact"
              className={`flex p-[2px_30px] max-sm:text-[12px] items-center gap-1 hover:text-[#00A878] transition ${poppins.className}`}
            >
              <span>Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed w-full bg-white shadow-md z-40 transition-all duration-300 h-[91px] border-b border-gray-200 ${
          hideTopBar ? "top-0" : "top-[40px]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center h-[60px]">
            <h2 className="text-[#00A878] font-semibold text-3xl -tracking-wide">
              Sarva Lotus
            </h2>
          </Link>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex gap-8 justify-around items-center flex-1 max-w-md">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-[16px] font-semibold transition ${
                      isActive
                        ? "text-[#00A878]"
                        : "text-gray-700 hover:text-[#00A878]"
                    } ${poppins.className}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Get in Touch Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative group inline-flex items-center justify-center overflow-hidden px-8 py-3 rounded-lg text-white text-[16px] font-medium"
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
                <FaArrowDownLong
                  size={20}
                  className="rotate-[-135deg] ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-[-90deg]"
                />
              </span>
              <span className="absolute inset-0 bg-[#00A878] transition-all duration-500 ease-out scale-x-0 origin-left group-hover:scale-x-100 z-0"></span>
              <span className="absolute inset-0 bg-[#008f6c] rounded-lg z-[-1]"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-[#00A878] transition"
            >
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#f9f9f9] shadow-lg border-t border-gray-200">
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`block py-2 font-medium transition ${
                        isActive
                          ? "text-[#00A878]"
                          : "text-gray-700 hover:text-[#00A878]"
                      } ${poppins.className}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2">
                <Link
                  href="/contact"
                  className="bg-[#00A878] text-white px-4 py-3 block text-center rounded-lg font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="h-[110px] md:h-[115px]"></div>
    </div>
  );
};

export default Header;
