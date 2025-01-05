"use client"

import { Loader2 } from 'lucide-react'
import { motion } from "framer-motion"

export function LoadingSpinner() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </motion.div>
    </div>
  )
}