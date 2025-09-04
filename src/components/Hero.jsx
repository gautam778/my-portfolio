import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="max-w-xl text-center md:text-left px-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-yellow-300">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          A passionate <span className="font-semibold">Frontend Developer</span>  
          specializing in React, TailwindCSS, and building modern, user-friendly web apps.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Content (Profile Image) */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src="https://via.placeholder.com/350"
          alt="Profile"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
        />
      </motion.div>
    </section>
  );
}
