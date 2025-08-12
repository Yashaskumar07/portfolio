"use client";

import { motion } from "framer-motion";
import { SiCplusplus, SiC, SiJavascript } from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "C", icon: SiC, color: "text-blue-800" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen dark:bg-gray-900 transition-colors duration-300 py-16 px-6 sm:px-12 md:px-24">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
      <span className="text-orange-500 dark:text-orange-400"> My Skills</span>
      </h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            className=" rounded-xl shadow-lg flex flex-col items-center justify-center p-6 cursor-default hover:shadow-xl transition-shadow"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Icon className={`text-6xl mb-4 ${color}`} />
            <p className="text-lg font-semibold text-gray-800">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
