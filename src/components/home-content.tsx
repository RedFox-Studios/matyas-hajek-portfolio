"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import type { Dictionary } from "@/lib/dictionary"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

interface HomeContentProps {
  dict: Dictionary
  locale: string
}

export function HomeContent({ dict, locale }: HomeContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { currentTarget, clientX, clientY } = event
      if (!currentTarget || !(currentTarget instanceof HTMLElement)) return

      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    ref.current?.addEventListener("mousemove", handleMouseMove)

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <div 
      ref={ref} 
      className="relative min-h-screen bg-grid"
      style={{
        "--x": useMotionTemplate`${mouseX}px`,
        "--y": useMotionTemplate`${mouseY}px`,
      } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0 spotlight" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      
      <section className="container relative flex min-h-screen flex-col items-center justify-center gap-12 py-8 md:py-12">
        <motion.div
          className="flex max-w-[64rem] flex-col items-center gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <span className="block h-2 w-2 rounded-full bg-green-500" />
              <span className="ml-2">Available for work</span>
            </span>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <h1 className="balance-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient">{dict.home.title}</span>
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {dict.home.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            className="mx-auto mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8"
            variants={itemVariants}
          >
            <p className="balance-text">
              {dict.home.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Button 
              asChild 
              size="lg" 
              className="h-12 rounded-full px-8 text-base"
            >
              <Link href={`/${locale}/contact`} className="group">
                {dict.home.cta.contact}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-12 rounded-full px-8 text-base"
            >
              <Link href={`/${locale}/about`}>
                {dict.home.cta.about}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.a
            href="https://github.com/maty7253"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-3 transition-all hover:scale-110 hover:bg-secondary"
            variants={itemVariants}
          >
            <Github className="h-6 w-6" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/matyas-hajek"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-3 transition-all hover:scale-110 hover:bg-secondary"
            variants={itemVariants}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>

          <motion.a
            href="mailto:matyas.hajek.000@gmail.com"
            className="group relative rounded-full p-3 transition-all hover:scale-110 hover:bg-secondary"
            variants={itemVariants}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
          
        </motion.div>
      </section>
    </div>
  )
}