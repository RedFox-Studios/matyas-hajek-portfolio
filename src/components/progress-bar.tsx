"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-primary"
      style={{ scaleX }}
    />
  )
}
