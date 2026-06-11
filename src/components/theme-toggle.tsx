"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    
    const initialTheme = savedTheme || "dark"
    setTheme(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)
  }, [])

  const applyTheme = (newTheme: "light" | "dark") => {
    const html = document.documentElement
    html.classList.remove("light", "dark")
    html.classList.add(newTheme)
    html.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    console.log("Theme applied:", newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  if (!mounted || theme === null) {
    return (
      <div className="p-2.5 rounded-lg glass border border-blue-500/10">
        <Moon className="w-5 h-5 text-muted-foreground" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg glass border border-blue-500/10 hover:border-blue-500/30 text-muted-foreground hover:text-blue-400 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  )
}
