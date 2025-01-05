"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ProgressBar } from "./progress-bar"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <ProgressBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          className="relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}