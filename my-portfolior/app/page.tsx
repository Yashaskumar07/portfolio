"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaDev,
} from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  { icon: FaLinkedin, url: "https://linkedin.com/in/yourprofile" },
  { icon: FaGithub, url: "https://github.com/yourprofile" },
  { icon: FaTwitter, url: "https://twitter.com/yourprofile" },
  { icon: FaTelegram, url: "https://t.me/yourprofile" },
  { icon: FaInstagram, url: "https://instagram.com/yourprofile" },
  { icon: FaDev, url: "https://dev.to/yourprofile" },
];

const typingWords = [
  "Web Development",
  "CyberSecurity",
  "React.js ",
  "Next.js Enthusiast",
];

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = index % typingWords.length;
    const fullText = typingWords[current];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, 100);
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 200);
    }

    if (!isDeleting && text === fullText) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), 1500);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <main className="min-h-screen relative overflow-hidden  dark:bg-gray-900 transition-colors duration-300">
      {/* Background network effect */}
      <canvas
        id="network-canvas"
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      />

<div className="mx-auto flex flex-col md:flex-row items-center justify-between md:py-24 py-16 gap-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-orange-500">
          <span className="text-sky-400 dark:text-sky-400">Hi There,</span>

          </h1>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-orange-400">
          <span className="text-orange-500 dark:text-orange-400"> I&apos;m Yashas{" "}</span>
            <span className="text-orange-500 dark:text-orange-400">Kumar</span>
          </h2>
          <p className="text-xl font-semibold text-red-700 dark:text-red-400">
            I Am Into{" "}
            <span className="border-b-2 border-red-700 dark:border-red-400">
              {text}&nbsp;
            </span>
          </p>

          <Link
            href="/resume.pdf"
            className="bg-blue-900 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-full px-6 py-3 shadow-lg transition inline-block"
          >
            Resume ↓
          </Link>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-gray-700 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition"
                aria-label="Social link"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 w-64 h-64 rounded-full bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center shadow-lg"
        >
          <Image
            src="/yashas.jpg"
            alt="Yashas Kumar Avatar"
            width={300}
            height={224}
            className="rounded-full object-cover border-4 border-yellow-300 dark:border-yellow-400 bg-black shadow-lg"
          />
        </motion.div>
      </div>
    </main>
  );
}
