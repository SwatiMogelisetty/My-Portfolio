"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Target, Zap } from "lucide-react"

export default function About() {
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
      transition: { duration: 0.8 },
    },
  }

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Excellence",
      description: "8+ years building scalable systems using Java, Python, and modern cloud technologies",
    },
    {
      icon: Lightbulb,
      title: "AI/ML Innovation",
      description: "Master's in Data Science with hands-on experience in generative AI and automated solutions",
    },
    {
      icon: Target,
      title: "Quality-First Leadership",
      description: "Leading test automation strategies and ensuring reliability across mission-critical systems",
    },
    {
      icon: Zap,
      title: "Cloud & DevOps",
      description: "AWS, Azure, and Oracle certified with expertise in CI/CD, microservices, and distributed systems",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Main content grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left side - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a <span className="text-blue-400 font-semibold">Senior Software AI Automation Lead</span> at Morgan Stanley, where I architect and lead test automation strategies for mission-critical financial applications including IMTOPS (Tax Optimized Portfolio System) and ONEMSIM Portals.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With a <span className="text-purple-400 font-semibold">Master&apos;s degree in Data Science & Machine Learning</span> (4.0 GPA) and 8+ years of hands-on engineering experience, I bridge the gap between traditional software engineering and cutting-edge AI/ML solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans from embedded systems and IoT at Unisys to designing scalable automation frameworks at Morgan Stanley. I&apos;m equally comfortable building generative AI applications, optimizing CI/CD pipelines, or mentoring junior engineers on best practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive at the intersection of <span className="text-pink-400 font-semibold">quality engineering and technical innovation</span>, delivering resilient solutions in fast-paced, high-stakes environments where reliability directly impacts business outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["AWS Certified", "Azure Certified", "Oracle Certified", "Tableau Certified"].map((cert, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={containerVariants}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl glass border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { label: "Years Experience", value: "8+" },
            { label: "Projects Delivered", value: "50+" },
            { label: "Systems Automated", value: "30+" },
            { label: "Team Members Mentored", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl glass border border-purple-500/10 text-center"
              variants={itemVariants}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
