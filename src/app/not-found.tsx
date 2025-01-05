"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <section className="container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4">
      <FadeIn className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <motion.h1 
          className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-medium text-muted-foreground md:text-4xl">
          Page Not Found
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
      </FadeIn>
    </section>
  )
}