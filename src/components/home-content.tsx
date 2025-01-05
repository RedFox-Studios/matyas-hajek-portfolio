"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
  return (
    <div className="relative min-h-screen">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary.100/20),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,theme(colors.primary.900/20),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.purple.100/20),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,theme(colors.purple.900/20),transparent_50%)]" />
      </div>
      
      <section className="container flex min-h-screen flex-col items-center justify-center gap-12 py-8 md:py-12">
        <motion.div
          className="flex max-w-[64rem] flex-col items-center gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center rounded-full border bg-background/95 px-3 py-1 text-sm text-foreground backdrop-blur transition-colors dark:bg-background/85">
              <span className="mr-1">✨</span> Welcome to my portfolio
            </span>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {dict.home.title}
              </span>
            </h1>
            <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
              {dict.home.subtitle}
            </h2>
          </motion.div>
          
          <motion.p
            className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-8"
            variants={itemVariants}
          >
            {dict.home.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-6 transition-transform hover:translate-y-[-2px]"
            >
              <Link href={`/${locale}/contact`}>
                {dict.home.cta.contact}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/50 via-primary to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-6 transition-transform hover:translate-y-[-2px] hover:bg-muted/50"
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
            className="group relative rounded-full p-3 transition-transform hover:scale-110"
            variants={itemVariants}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-primary to-purple-600 opacity-0 blur transition-opacity group-hover:opacity-70" />
            <Github className="h-6 w-6 relative z-10" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/matyas-hajek"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-3 transition-transform hover:scale-110"
            variants={itemVariants}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-primary to-purple-600 opacity-0 blur transition-opacity group-hover:opacity-70" />
            <Linkedin className="h-6 w-6 relative z-10" />
          </motion.a>
          <motion.a
            href="mailto:contact@matyas-hajek.com"
            className="group relative rounded-full p-3 transition-transform hover:scale-110"
            variants={itemVariants}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-primary to-purple-600 opacity-0 blur transition-opacity group-hover:opacity-70" />
            <Mail className="h-6 w-6 relative z-10" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}