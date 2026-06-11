"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Code, Lightbulb } from "lucide-react"

const aiProjects = [
  {
    icon: Brain,
    title: "Generative AI & LLM Exploration",
    description:
      "Deep experience with large language models, prompt engineering, and AI-driven automation",
    areas: ["LLM Fine-tuning", "Prompt Engineering", "RAG Systems", "AI Agents"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Automated Testing & Intelligence",
    description:
      "AI-powered test automation frameworks reducing manual testing effort by 70%",
    areas: [
      "Intelligent Test Generation",
      "Anomaly Detection",
      "Self-healing Tests",
      "Predictive Testing",
    ],
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Code,
    title: "ML-Driven Solutions",
    description:
      "Machine learning models for fraud detection, forecasting, and pattern recognition",
    areas: ["Fraud Detection", "Predictive Analytics", "Classification", "Clustering"],
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: Lightbulb,
    title: "AI Optimization Systems",
    description:
      "Intelligent optimization of deployment pipelines, resource allocation, and infrastructure",
    areas: ["Resource Optimization", "Pipeline Optimization", "Cost Reduction", "Performance Tuning"],
    color: "from-orange-400 to-red-400",
  },
]

export default function AIInnovation() {
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
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
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
              AI & Innovation
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pioneering AI-driven solutions and automation at scale
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* AI Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aiProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-xl glass border border-blue-500/10 hover:border-blue-500/30 p-8 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="space-y-3">
                <p className="text-xs text-muted-foreground font-semibold uppercase">
                  Areas of Focus
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {project.areas.map((area, idx) => (
                    <motion.div
                      key={idx}
                      className="px-3 py-2 bg-blue-500/5 border border-blue-500/20 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-sm text-blue-400 font-semibold">{area}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research & Innovations */}
        <motion.div
          className="mt-16 p-8 rounded-xl glass border border-purple-500/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Current Research & Innovation Focus
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Test Automation",
                items: [
                  "AI-powered test case generation",
                  "Self-healing test automation",
                  "Predictive failure detection",
                  "Intelligent test prioritization",
                ],
              },
              {
                title: "Enterprise AI/ML",
                items: [
                  "Generative AI integration for automation",
                  "LLM-based code analysis and generation",
                  "AI anomaly detection in logs",
                  "Intelligent resource optimization",
                ],
              },
              {
                title: "Cloud & Infrastructure",
                items: [
                  "AI-driven cloud cost optimization",
                  "Intelligent infrastructure deployment",
                  "Predictive scaling systems",
                  "Automated performance tuning",
                ],
              },
              {
                title: "Data Engineering",
                items: [
                  "Real-time data pipelines with ML",
                  "Automated data quality monitoring",
                  "Intelligent data cataloging",
                  "ML-powered analytics",
                ],
              },
            ].map((section, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h4 className="font-semibold text-blue-400 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-muted-foreground">
                      <span className="text-blue-400 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
