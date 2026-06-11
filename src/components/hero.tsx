"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const roles = ["Senior Software Engineer", "AI Innovator", "Full-Stack Builder", "Cloud Architect"]

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 50)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 30)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main content */}
        <motion.div variants={itemVariants} className="text-center">
          {/* Profile image - Falling coin animation */}
          <motion.div
            className="mx-auto mb-8 w-32 h-32 rounded-full relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            initial={{ y: -400, opacity: 0, rotateZ: -180 }}
            animate={{ y: 0, opacity: 1, rotateZ: 360 }}
            transition={{
              duration: 1.2,
              type: "spring",
              bounce: 0.4,
              damping: 8,
              mass: 1.2,
            }}
          >
            {/* Rotating gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Rotating outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-50 blur-lg"
              style={{
                background:
                  "conic-gradient(from 0deg, rgb(59, 130, 246), rgb(168, 85, 247), rgb(236, 72, 153), rgb(59, 130, 246))",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner content with padding */}
            <div className="absolute inset-0.5 rounded-full bg-background flex items-center justify-center overflow-hidden p-1">
              <img
                src="/profile.jpg"
                alt="SWATI M"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SWATI M
            </span>
          </motion.h1>

          {/* Dynamic role */}
          <motion.div className="h-20 flex items-center justify-center mb-6" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400">
              {displayedRole}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Senior Software AI Automation Engineer at Morgan Stanley with 8+ years of experience in building scalable systems,
            AI/ML solutions, and mission-critical financial applications. Master&apos;s in Data Science & ML. AWS, Azure, and Oracle certified.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-black rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3 border border-blue-500/50 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div className="flex gap-4 justify-center" variants={itemVariants}>
            {[
              {
                icon: Mail,
                href: "mailto:swatimogelisetty@gmail.com",
                label: "Email",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/swati-m-arcturus",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/SwatiMogelisetty",
                label: "GitHub",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-blue-500/50 text-muted-foreground hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => {
            const aboutSection = document.getElementById("about")
            aboutSection?.scrollIntoView({ behavior: "smooth" })
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-blue-400 transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-muted-foreground text-sm group-hover:text-blue-400 transition-colors">
            Scroll to explore
          </div>
          <motion.svg
            className="w-6 h-6 mx-auto text-muted-foreground group-hover:text-blue-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </section>
  )
}
