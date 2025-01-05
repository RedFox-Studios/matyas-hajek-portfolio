"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/lib/dictionary"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Developing and maintaining web applications using Next.js, React, and TypeScript.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description: "Created responsive web applications and implemented modern UI designs.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Web Developer Intern",
    company: "Startup",
    period: "2020 - 2021",
    description: "Assisted in developing web applications and learned modern development practices.",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

interface ExperienceContentProps {
  dict: Dictionary
  locale: string
}

export function ExperienceContent({ dict, locale }: ExperienceContentProps) {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex max-w-[980px] flex-col items-start gap-2"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          {dict.experience.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {dict.experience.description}
        </p>
      </motion.div>
      <motion.div
        className="grid gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                  </div>
                  <Badge variant="outline">
                    {experience.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p className="text-muted-foreground">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

