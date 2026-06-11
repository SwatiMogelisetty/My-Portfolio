"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Zap } from "lucide-react"

const projects = [
  {
    title: "IMTOPS - Tax Optimized Portfolio System",
    company: "Morgan Stanley",
    description: "Mission-critical financial application for tax optimization strategies",
    problem:
      "Need for reliable, scalable tax portfolio optimization with real-time data validation",
    solution:
      "Engineered comprehensive test automation framework with Python, Selenium, and Playwright",
    impact: "20% reduction in false positives, 50% improvement in data accuracy",
    technologies: [
      "Python",
      "Selenium",
      "Playwright",
      "Azure",
      "CI/CD",
      "Cucumber",
    ],
    features: [
      "Automated functional and non-functional testing",
      "Real-time data validation",
      "API-level testing with Swagger",
      "Performance monitoring with Kibana",
    ],
    type: "Enterprise Automation",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Stealth Security Dashboard",
    company: "Unisys India",
    description: "Real-time security monitoring system analyzing 10,000+ server logs daily",
    problem:
      "Enterprise needed to process and visualize massive volumes of security logs with minimal latency",
    solution:
      "Built Grafana & AWS-based monitoring dashboard with automated anomaly detection",
    impact: "20% false positive reduction, 50% accuracy improvement, real-time insights",
    technologies: ["AWS", "Grafana", "Kibana", "Python", "Pandas", "SQL"],
    features: [
      "Real-time log analysis",
      "Automated anomaly detection",
      "Custom dashboards with Grafana",
      "Data validation pipeline",
    ],
    type: "DevOps/Monitoring",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "E-Commerce Fraud Detection System",
    company: "University at Buffalo",
    description: "ML-powered fraud detection system for e-commerce transactions",
    problem:
      "High false positive rates in fraud detection affecting customer experience",
    solution:
      "Developed machine learning model using scikit-learn and Pandas with Tableau visualization",
    impact: "Reduced false positives significantly, improved platform security and trust",
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "SQL",
      "Tableau",
      "Machine Learning",
    ],
    features: [
      "Advanced fraud pattern recognition",
      "Real-time transaction analysis",
      "Interactive dashboards",
      "Model performance monitoring",
    ],
    type: "ML/Data Science",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "VMware CI/CD Automation Framework",
    company: "Unisys India",
    description:
      "Comprehensive Python-based automation framework for VSphere infrastructure",
    problem:
      "Manual infrastructure provisioning was time-consuming and error-prone",
    solution:
      "Engineered API-level interface for VSphere infrastructure automation",
    impact: "Substantial savings in time and effort, improved deployment reliability",
    technologies: [
      "Python",
      "VMware VSphere",
      "Jenkins",
      "CI/CD",
      "Infrastructure as Code",
    ],
    features: [
      "Automated VM provisioning",
      "Infrastructure validation",
      "Error handling and rollback",
      "Integration with CI/CD pipelines",
    ],
    type: "DevOps/Infrastructure",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "IPL Result Prediction Model",
    company: "Unisys",
    description:
      "Statistical model for predicting IPL cricket tournament winners",
    problem:
      "Need to analyze complex cricket data patterns for accurate predictions",
    solution: "Built predictive model using statistical analysis and machine learning",
    impact: "Accurate tournament predictions with data-driven insights",
    technologies: ["Python", "Flask", "scikit-learn", "Pandas", "MySQL", "Git"],
    features: [
      "Historical data analysis",
      "Statistical modeling",
      "Web interface",
      "Real-time predictions",
    ],
    type: "ML/Data Science",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Facial Recognition Surveillance System",
    company: "Unisys & National Project",
    description: "AI/ML-powered surveillance system for border security",
    problem:
      "Need for automated, real-time facial recognition at national borders",
    solution:
      "Implemented deep learning-based facial recognition using PyTorch",
    impact: "Enhanced border security with automated threat detection",
    technologies: ["Python", "PyTorch", "Deep Learning", "OpenCV", "ML"],
    features: [
      "Real-time facial detection",
      "Person identification",
      "Threat alerting",
      "Large-scale deployment",
    ],
    type: "AI/ML",
    github: "https://github.com/SwatiMogelisetty/Facial-Recognition-using-AI-ML",
    liveDemo: "#",
  },
]

export default function Projects() {
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
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            High-impact solutions delivering measurable results
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-xl glass border border-blue-500/10 hover:border-blue-500/30 overflow-hidden transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-semibold mb-3">
                    {project.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-sm text-muted-foreground">{project.company}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold mb-1">
                      CHALLENGE
                    </p>
                    <p className="text-sm text-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold mb-1">
                      SOLUTION
                    </p>
                    <p className="text-sm text-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20 mb-6">
                  <p className="text-sm font-semibold text-green-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {project.impact}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground font-semibold mb-2">
                    KEY FEATURES
                  </p>
                  <div className="space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <p key={idx} className="text-sm text-foreground">
                        • {feature}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground font-semibold mb-2">
                    TECHNOLOGIES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-500/5 border border-blue-500/20 rounded text-xs text-blue-400 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-auto pt-6 border-t border-border">
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-semibold hover:bg-blue-500/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                  {project.liveDemo !== "#" && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-semibold hover:bg-purple-500/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
