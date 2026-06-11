"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"
import { useState, FormEvent } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("Failed to send message. Please try again or email directly.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "swatimogelisetty@gmail.com",
      href: "mailto:swatimogelisetty@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (716) 551-8552",
      href: "tel:+17165518552",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York City, USA",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "swati-m-arcturus",
      href: "https://www.linkedin.com/in/swati-m-arcturus",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SwatiMogelisetty",
      href: "https://github.com/SwatiMogelisetty",
    },
  ]

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="flex items-start gap-4 p-4 rounded-lg glass border border-blue-500/10 hover:border-blue-500/30 transition-all group"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <info.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">
                      {info.label}
                    </p>
                    <p className="text-foreground font-semibold hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div className="mt-12" variants={itemVariants}>
              <p className="text-sm text-muted-foreground font-semibold mb-4">
                FOLLOW
              </p>
              <div className="flex gap-4">
                {[
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
                  {
                    icon: Mail,
                    href: "mailto:swatimogelisetty@gmail.com",
                    label: "Email",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg glass border border-blue-500/10 hover:border-blue-500/30 text-muted-foreground hover:text-blue-400 transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-xl glass border border-purple-500/10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-input border border-input focus:border-blue-500 focus:outline-none transition-all text-foreground"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-input border border-input focus:border-blue-500 focus:outline-none transition-all text-foreground"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-input focus:border-blue-500 focus:outline-none transition-all text-foreground resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                {loading ? "Sending..." : submitted ? "Message Sent! 🎉" : "Send Message"}
              </motion.button>
            </form>

            {error && (
              <motion.p
                className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}

            {submitted && (
              <motion.p
                className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! I&apos;ll get back to you soon.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
