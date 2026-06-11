"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const experiences = [
  {
    title: "Senior Software AI Automation Lead Engineer",
    company: "Morgan Stanley",
    location: "New York City, USA",
    period: "Nov 2024 – Present",
    achievements: [
      "Lead test automation strategy for mission-critical IMTOPS & ONEMSIM financial applications",
      "Engineered Azure-based UI applications, reducing false positives by 20%",
      "Orchestrated data validation integration, improving accuracy by 50%",
      "Design and deploy comprehensive test frameworks using Python, Java, Selenium, Playwright",
      "Optimize CI/CD pipelines, reducing execution times and enhancing feedback cycles",
    ],
    skills: ["Python", "Java", "Selenium", "Playwright", "Azure", "CI/CD"],
    impact: "Mission-critical financial systems automation",
  },
  {
    title: "Data Engineer & Research",
    company: "University at Buffalo",
    location: "Buffalo, NY, USA",
    period: "Jan 2023 – June 2024",
    achievements: [
      "Designed and implemented automated test scripts for web/mobile using Selenium, Cucumber",
      "Collaborated with cross-functional teams to define test requirements",
      "Executed functional, regression, and performance tests in Agile sprints",
      "Managed CI/CD test environments using Jenkins and GitHub",
      "Improved testing methodologies and automation strategies",
    ],
    skills: ["Selenium", "Cucumber", "Jenkins", "GitHub", "SQL", "Agile"],
    impact: "Production-ready automated testing infrastructure",
  },
  {
    title: "Software Engineer",
    company: "Unisys India Pvt Ltd",
    location: "Bangalore, India",
    period: "June 2019 – Dec 2022",
    achievements: [
      "Engineered Stealth Security Dashboard using Grafana & AWS, analyzing 10,000+ logs daily",
      "Reduced false positives by 20% and improved data accuracy by 50%",
      "Developed Python-based automation framework for CI/CD pipeline (VMware Integration)",
      "Designed API level interface for VSphere infrastructure automation",
      "Conducted IoT research and developed smart applications (R&D team of 8)",
    ],
    skills: ["Python", "AWS", "Grafana", "Kibana", "Java", "IoT"],
    impact: "Enterprise-scale monitoring and automation",
  },
  {
    title: "Summer Intern",
    company: "Electronics Corporation of India Limited (ECIL)",
    location: "Hyderabad, India",
    period: "March 2018 – June 2018",
    achievements: [
      "Developed web-based University Computerization Tool for student management",
      "Automated manual Student Management System",
      "Led team in enhancing data management efficiency",
      "Streamlined administrative operations and improved staff productivity",
    ],
    skills: ["Web Development", "Java", "Database Management", "SQL"],
    impact: "Automated administrative workflows",
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl">
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
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            8+ years of driving innovation and excellence
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-16 flex justify-center">
                <motion.div
                  className="w-4 h-4 bg-blue-500 rounded-full border-4 border-background shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.3 }}
                />
              </div>

              {/* Experience card */}
              <motion.div
                className="ml-24 p-6 rounded-xl glass border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-sm text-blue-400 font-semibold mt-2 sm:mt-0 sm:text-right whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-sm font-semibold text-blue-300">
                    💡 Impact: <span className="text-muted-foreground">{exp.impact}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
