"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle } from "lucide-react"

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "☁️",
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    year: "2023",
    icon: "📊",
  },
  {
    name: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    year: "2023",
    icon: "🔷",
  },
  {
    name: "Azure Solutions Architect",
    issuer: "Microsoft",
    year: "2023",
    icon: "🏗️",
  },
  {
    name: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    year: "2022",
    icon: "🗄️",
  },
  {
    name: "Machine Learning Engineering",
    issuer: "DeepLearning.AI",
    year: "2024",
    icon: "🤖",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    icon: "🧠",
  },
  {
    name: "The Digital Professional",
    issuer: "NASSCOM FutureSkills",
    year: "2023",
    icon: "💼",
  },
]

const education = [
  {
    degree: "Master of Science in Data Science & Machine Learning",
    school: "University at Buffalo, State University of New York",
    gpa: "4.0/4.0",
    graduation: "May 2024",
  },
  {
    degree: "Bachelor of Engineering",
    school: "Sri Padmavati Mahila Visvavidyalayam",
    gpa: "Honors",
    graduation: "2019",
  },
]

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Learning
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning and professional development
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-foreground">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg glass border border-blue-500/10 hover:border-blue-500/30 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-blue-400 font-semibold">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl glass border border-purple-500/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground mb-3">{edu.school}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-400 font-semibold">
                      GPA: {edu.gpa}
                    </span>
                    <span className="text-sm text-blue-400">{edu.graduation}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
