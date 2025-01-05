"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center"
    >
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground">
        An error occurred while loading this page.
      </p>
      <Button onClick={reset} variant="outline">
        Try again
      </Button>
    </motion.div>
  )
}