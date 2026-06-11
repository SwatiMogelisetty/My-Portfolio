"use client"

import { ReactNode } from "react"
import FloatingParticles from "./floating-particles"

interface SectionParticlesProps {
  children: ReactNode
  colors?: string[]
  particleCount?: number
}

export default function SectionParticles({
  children,
  colors = ["#3b82f6", "#a855f7"],
  particleCount = 40,
}: SectionParticlesProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingParticles count={particleCount} colors={colors} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
