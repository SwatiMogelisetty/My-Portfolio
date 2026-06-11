"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Counter {
  label: string
  value: number
  suffix: string
  description: string
  icon: string
}

const metrics: Counter[] = [
  {
    label: "Automations Built",
    value: 50,
    suffix: "+",
    description: "Test suites and automation frameworks",
    icon: "🤖",
  },
  {
    label: "Systems Deployed",
    value: 30,
    suffix: "+",
    description: "Cloud and enterprise systems",
    icon: "🚀",
  },
  {
    label: "Data Pipelines",
    value: 20,
    suffix: "+",
    description: "ETL and real-time data solutions",
    icon: "📊",
  },
  {
    label: "Team Members Mentored",
    value: 15,
    suffix: "+",
    description: "Junior engineers guided to growth",
    icon: "👥",
  },
  {
    label: "False Positives Reduced",
    value: 20,
    suffix: "%",
    description: "Improved data accuracy and reliability",
    icon: "✨",
  },
  {
    label: "Accuracy Improvement",
    value: 50,
    suffix: "%",
    description: "Enhanced system reliability",
    icon: "⚡",
  },
  {
    label: "Testing Time Reduced",
    value: 70,
    suffix: "%",
    description: "Through intelligent automation",
    icon: "⏱️",
  },
  {
    label: "Years in Tech",
    value: 8,
    suffix: "+",
    description: "Building and innovating",
    icon: "📅",
  },
]

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 50)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [value])

  return <>{count}</>
}

export default function ImpactMetrics() {
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
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
              Impact Metrics
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quantifiable results and outcomes achieved
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl glass border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 text-center group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-4xl mb-3 text-center">{metric.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                <AnimatedCounter value={metric.value} />
                <span className="text-blue-400">{metric.suffix}</span>
              </div>
              <p className="font-semibold text-foreground text-sm mb-1">
                {metric.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="mt-16 p-8 rounded-xl glass border border-purple-500/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Key Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Morgan Stanley - Current Role",
                achievements: [
                  "Leading test automation for mission-critical IMTOPS system",
                  "Architecting comprehensive framework for financial applications",
                  "Mentoring team members on automation best practices",
                ],
              },
              {
                title: "Technical Excellence",
                achievements: [
                  "Reduced false positives by 20%",
                  "Improved data accuracy by 50%",
                  "Decreased testing time by 70% through automation",
                ],
              },
              {
                title: "Innovation & Impact",
                achievements: [
                  "Designed Stealth Security Dashboard for 10,000+ logs/day",
                  "Built fraud detection ML system improving platform security",
                  "Developed VMware automation framework saving significant effort",
                ],
              },
            ].map((section, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h4 className="font-semibold text-blue-400 mb-4 text-lg">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.achievements.map((achievement, aidx) => (
                    <li
                      key={aidx}
                      className="flex gap-3 items-start text-muted-foreground"
                    >
                      <span className="text-blue-400 font-bold mt-1">✓</span>
                      <span className="text-sm">{achievement}</span>
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
