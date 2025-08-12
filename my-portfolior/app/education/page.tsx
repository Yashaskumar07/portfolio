"use client";

import { motion } from "framer-motion";
import { FaFootballBall, FaPencilAlt } from "react-icons/fa";

const educationData = [
  {
    year: "2022-2026 ",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Aj Institute of Engineering And Technology",
    description:
      "Focused on full-stack web development, algorithms, and AI-driven applications.",
  },
  {
    year: "2020 - 2022",
    degree: "PUC  (Science)",
    institution: "St.Aloysius Pu College",
    description:
      "Specialized in Physics, Chemistry, and Mathematics with a strong foundation in problem-solving.",
  },
  {
    year: "2017 - 2020",
    degree: "Secondary Education",
    institution: "St Aloysius High School",
    description:
      "Developed early interest in programming and digital product creation.",
  },
];

const interests = [
  {
    name: "Sports",
    icon: <FaFootballBall className="text-4xl text-green-500" />,
    description: "Passionate about playing football, cricket, and staying active.",
  },
  {
    name: "Drawing",
    icon: <FaPencilAlt className="text-4xl text-orange-500" />,
    description: "Love sketching and exploring creative art styles.",
  },
];

export default function Education() {
  return (
    <main className="min-h-screen  dark:bg-gray-900 transition-colors duration-300 py-16 px-6 md:px-20">
      {/* Education Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
      >
       <span className="text-orange-500 dark:text-orange-400">Education</span> 
      </motion.h1>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full" />
        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-lg absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                {index + 1}
              </div>
              <div
                className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg md:w-[45%] mt-12 md:mt-0 transition-colors duration-300 ${
                  index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                }`}
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {edu.year}
                </h3>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {edu.degree}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  {edu.institution}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mt-20 mb-10 text-gray-800 dark:text-white"
      >
         <span className="text-orange-500 dark:text-orange-400">My Interests</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-colors duration-300"
          >
            {interest.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              {interest.name}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
