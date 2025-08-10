"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 text-gray-700 dark:text-gray-200 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-200 dark:border-gray-700">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4 flex justify-center">
         
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
