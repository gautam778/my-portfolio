import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://via.placeholder.com/400"
            alt="About me"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-blue-500"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’m a <span className="font-semibold">Frontend Developer</span> with
            a passion for creating interactive, user-friendly, and modern web
            applications. Skilled in{" "}
            <span className="font-semibold text-blue-600">
              React, TailwindCSS, and JavaScript
            </span>
            , I enjoy transforming ideas into real-world projects.
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-white shadow-md rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-600">2+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
