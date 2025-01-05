"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Shield, Users } from 'lucide-react'
import type { Dictionary } from "@/lib/dictionary"

const features = [
  {
    title: "points.innovative",
    description: "I approach each project with creative solutions and modern technologies, ensuring optimal results.",
    icon: Lightbulb,
  },
  {
    title: "points.dedicated",
    description: "I maintain high standards in code quality, performance, and user experience.",
    icon: Shield,
  },
  {
    title: "points.collaborative",
    description: "I work effectively in teams, communicate clearly, and share knowledge with others.",
    icon: Users,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

interface WhyMeContentProps {
  dict: Dictionary
  locale: string
}

export function WhyMeContent({ dict, locale }: WhyMeContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10" ref={containerRef}>
      <motion.div 
        className="flex max-w-[980px] flex-col items-start gap-2"
        style={{ opacity, y }}
      >
        <h1 className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent md:text-4xl">
          {dict["why-me"].title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {dict["why-me"].description}
        </p>
      </motion.div>
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="flex h-full flex-col transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="rounded-lg bg-primary/10 p-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle>{dict["why-me"][feature.title]}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

