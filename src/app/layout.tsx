import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import FloatingParticles from "@/components/floating-particles"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SWATI M - Senior Software AI Automation Engineer",
  description:
    "Portfolio of SWATI M - Senior Software AI Automation Engineer at Morgan Stanley with 8+ years of experience in building scalable systems, AI/ML solutions, and mission-critical financial applications.",
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Test Automation",
    "Cloud Engineer",
    "Python",
    "Java",
    "AWS",
    "Azure",
    "Machine Learning",
    "Morgan Stanley",
  ],
  authors: [{ name: "SWATI M", url: "https://swatim.dev" }],
  creator: "SWATI M",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swatim.dev",
    title: "SWATI M - Senior Software AI Automation Engineer",
    description:
      "Innovative software engineer with expertise in AI, automation, and cloud technologies",
    siteName: "SWATI M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWATI M - Senior Software AI Automation Engineer",
    description:
      "Innovative software engineer with expertise in AI, automation, and cloud technologies",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://swatim.dev",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ScrollProgress />
        <div className="min-h-screen flex flex-col relative">
          <FloatingParticles count={60} colors={["#3b82f6", "#a855f7", "#ec4899"]} />
          {children}
        </div>
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}
