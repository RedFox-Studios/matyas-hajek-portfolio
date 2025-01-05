"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/lib/dictionary"

const skills = {
  frontend: [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Redux", level: "Intermediate" },
    { name: "Framer Motion", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Express", level: "Advanced" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "GraphQL", level: "Intermediate" },
    { name: "Prisma", level: "Advanced" },
    { name: "tRPC", level: "Intermediate" },
  ],
  tools: [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Vercel", level: "Advanced" },
    { name: "Figma", level: "Intermediate" },
    { name: "Jest", level: "Intermediate" },
    { name: "Cypress", level: "Intermediate" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

interface SkillsContentProps {
  dict: Dictionary
  locale: string
}

export function SkillsContent({ dict, locale }: SkillsContentProps) {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)]" />
      
      <section className="container space-y-8 py-8 md:py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {dict.skills.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {dict.skills.description}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full border-2 transition-colors hover:border-primary/50">
              <CardHeader>
                <CardTitle>{dict.skills.frontend}</CardTitle>
                <CardDescription>
                  {dict.skills.sections.frontend}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant={skill.level === "Advanced" ? "default" : "secondary"}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full border-2 transition-colors hover:border-primary/50">
              <CardHeader>
                <CardTitle>{dict.skills.backend}</CardTitle>
                <CardDescription>
                  {dict.skills.sections.backend}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {skills.backend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant={skill.level === "Advanced" ? "default" : "secondary"}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="h-full md:col-span-2 lg:col-span-1">
            <Card className="h-full border-2 transition-colors hover:border-primary/50">
              <CardHeader>
                <CardTitle>{dict.skills.tools}</CardTitle>
                <CardDescription>
                  {dict.skills.sections.tools}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {skills.tools.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant={skill.level === "Advanced" ? "default" : "secondary"}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}