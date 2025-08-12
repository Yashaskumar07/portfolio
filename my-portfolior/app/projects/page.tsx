"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Aushadi-mitra",
    description:
      "Aushadhi Mitra is a government-style medical portal built using Next.js and MongoDB, designed to help citizens easily access affordable medicines, locate nearby Jan Aushadhi stores.",
    imageUrl: "/vercel.png",
    githubUrl: "https://github.com/Yashaskumar07/aushadhi-mitra",
    demoUrl: "https://aushadhi-mitra.vercel.app",
  },
  {
    title: "Animal-care",
    description:
      "AnimalCare is a full-stack web application that provides a platform for animal lovers to share, adopt, and take care of pets. The project includes user registration, login, authentication, and protected routes.",
    imageUrl: "/home.PNG",
    githubUrl: "https://github.com/Yashaskumar07/animalcare",
    demoUrl: "https://healthbot-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS.",
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://yourdomain.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 px-6 sm:px-12 md:px-24">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
      <span className="text-orange-500 dark:text-orange-400"> My Projects</span>
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(({ title, description, imageUrl, githubUrl, demoUrl }) => (
          <motion.div
            key={title}
            className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden cursor-default hover:shadow-2xl transition-shadow"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={imageUrl}
                alt={`${title} screenshot`}
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {title}
              </h3>
              <p className="text-gray-700 flex-grow">{description}</p>

              <div className="mt-6 flex gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
