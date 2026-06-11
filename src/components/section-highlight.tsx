"use client"

import { useEffect, useState } from "react"

interface SectionHighlight {
  id: string
  label: string
}

const sections: SectionHighlight[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI & Innovation" },
  { id: "metrics", label: "Impact Metrics" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}
