"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { useActiveSection } from "./section-highlight"
import ThemeToggle from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "AI & Innovation", href: "#ai", id: "ai" },
  { label: "Impact Metrics", href: "#metrics", id: "metrics" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-blue-500/10"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SM
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="relative text-muted-foreground hover:text-blue-400 font-semibold transition-colors cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="navbar-highlight"
                    transition={{ duration: 0.3 }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-4">
            <ThemeToggle />
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
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-blue-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden"
        >
          {/* Backdrop blur */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />
            )}
          </AnimatePresence>

          {/* Drawer menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-blue-500/10 z-50 overflow-y-auto bg-background/80 backdrop-blur-sm"
              >
                <div className="px-6 py-4 space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                        setIsOpen(false)
                      }}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                        activeSection === item.id
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10"
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Mobile social links */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground font-semibold mb-4">FOLLOW</p>
                    <div className="flex gap-3">
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
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass border border-blue-500/10 hover:border-blue-500/30 text-muted-foreground hover:text-blue-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  )
}
