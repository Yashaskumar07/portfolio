"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import Image from "next/image";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-blue-500" />, name: "React" },
  { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
  { icon: <SiTypescript className="text-blue-700" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
  { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
];

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto p-8 
      via-blue-50 to-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-10"
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl flex-shrink-0"
      >
        <Image
  src="/image.jpg"
  alt="Yashas Kumar"
  width={192}
  height={192}
  className="object-cover w-full h-full"
/>

      </motion.div>

      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900"><span className="text-orange-500 dark:text-orange-400">About Me</span></h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-700 mb-5"
        >
          Hi! I’m{" "}
          <span className="font-semibold text-blue-600">Yashas Kumar</span>, a passionate software engineer specializing in web development and building interactive user experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-gray-700 mb-6"
        >
          I primarily work with <span className="font-semibold">React, Next.js, TypeScript, and Tailwind CSS</span> to create scalable and modern web applications.
        </motion.p>

        {/* Skill Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-5 mb-8"
        >
          {skills.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 cursor-default select-none"
              title={name}
            >
              <div className="text-3xl">{icon}</div>
              <span className="text-lg font-medium">{name}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg text-gray-700 mb-4"
        >
          I love solving complex problems and turning ideas into functional, beautiful digital products.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg text-gray-700 mb-6"
        >
          I have worked on projects ranging from e-commerce websites to AI-powered healthcare tools, focusing on performance and usability.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-lg text-gray-700 mb-6"
        >
          When I’m not coding, you can find me playing handball or exploring new technologies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-lg font-semibold text-gray-800"
        >
          Feel free to check out my projects below or{" "}
          <a
            href="/contact"
            className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            contact me
          </a>{" "}
          for collaboration!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
