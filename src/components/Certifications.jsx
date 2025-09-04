import { motion } from "framer-motion";

const certifications = [
  {
    title: "Frontend Development with React",
    issuer: "Coursera",
    year: "2023",
    logo: "https://via.placeholder.com/80x80", // replace with issuer logo
    link: "https://coursera.org/verify/your-cert-id",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    logo: "https://via.placeholder.com/80x80",
    link: "https://freecodecamp.org/certification/your-cert-id",
  },
  {
    title: "TailwindCSS Mastery",
    issuer: "Udemy",
    year: "2021",
    logo: "https://via.placeholder.com/80x80",
    link: "https://udemy.com/certificate/your-cert-id",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuer} • {cert.year}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
