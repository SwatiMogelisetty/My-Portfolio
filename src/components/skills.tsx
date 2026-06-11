"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const skillsData = {
  "Programming Languages": {
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "SQL", level: 92 },
    ],
  },
  "Frameworks & Tools": {
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "React", level: 87 },
      { name: "Angular", level: 85 },
      { name: "Django", level: 82 },
      { name: "FastAPI", level: 80 },
    ],
  },
  "Testing & Automation": {
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "Selenium", level: 95 },
      { name: "Playwright", level: 92 },
      { name: "Cucumber (BDD)", level: 90 },
      { name: "JUnit/PyTest", level: 88 },
      { name: "CI/CD (Jenkins)", level: 90 },
      { name: "GitHub Actions", level: 85 },
    ],
  },
  "Cloud & DevOps": {
    color: "from-orange-400 to-red-400",
    skills: [
      { name: "AWS", level: 92 },
      { name: "Azure", level: 90 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 85 },
      { name: "Oracle Cloud", level: 82 },
      { name: "Terraform", level: 80 },
    ],
  },
  "Databases": {
    color: "from-indigo-400 to-purple-400",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 90 },
      { name: "Oracle DB", level: 85 },
      { name: "DynamoDB", level: 80 },
      { name: "Redis", level: 82 },
    ],
  },
  "AI/ML & Data": {
    color: "from-rose-400 to-pink-400",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "scikit-learn", level: 87 },
      { name: "Generative AI/LLMs", level: 92 },
      { name: "Data Visualization", level: 85 },
      { name: "Analytics", level: 88 },
    ],
  },
}

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "Programming Languages"
  )

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across modern tech stack and enterprise systems
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(skillsData).map((category) => (
            <motion.div key={category[0]} variants={itemVariants}>
              <motion.button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category[0] ? null : category[0]
                  )
                }
                className="w-full"
              >
                <motion.div
                  className={`p-6 rounded-xl glass border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h3
                        className={`text-xl font-semibold mb-2 bg-gradient-to-r ${category[1].color} bg-clip-text text-transparent`}
                      >
                        {category[0]}
                      </h3>
                      {expandedCategory === category[0] && (
                        <p className="text-sm text-muted-foreground">
                          {category[1].skills.length} core skills
                        </p>
                      )}
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedCategory === category[0] ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.button>

              {/* Skills Grid */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedCategory === category[0] ? 1 : 0,
                  height: expandedCategory === category[0] ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {category[1].skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        expandedCategory === category[0]
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10 }
                      }
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 rounded-lg bg-card border border-border hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category[1].color}`}
                          initial={{ width: 0 }}
                          animate={
                            expandedCategory === category[0]
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{ delay: idx * 0.05 + 0.2, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { label: "Technologies", value: "40+" },
            { label: "Programming Languages", value: "6" },
            { label: "Cloud Platforms", value: "3" },
            { label: "Certifications", value: "8" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg glass border border-purple-500/10 text-center"
              variants={itemVariants}
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
