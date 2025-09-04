import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-12">
          I’d love to hear from you! Whether you have a question, a project idea,
          or just want to say hi, feel free to reach out.
        </p>

        {/* Contact Form */}
        <motion.form
          className="bg-white shadow-lg rounded-xl p-8 grid gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* OR Simple Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            💻 GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
