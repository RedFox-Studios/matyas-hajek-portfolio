"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { Dictionary } from "@/lib/dictionary"

interface AboutContentProps {
  dict: Dictionary
  locale: string
}

export function AboutContent({ dict, locale }: AboutContentProps) {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)]" />
      
      <section className="container space-y-8 py-8 md:py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {dict.about.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {dict.about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-[58rem]"
        >
          <Card className="border-2">
            <CardContent className="grid gap-4 p-6 sm:p-8">
              <div className="prose prose-gray dark:prose-invert">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {dict.about.content}
                </p>
                
                {/* Add more structured content here */}
                <div className="my-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Computer Science, B.Sc.
                      <br />
                      Technical University, 2018-2022
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Based in California
                      <br />
                      Originally from Czech Republic
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Interests</h3>
                  <ul className="list-inside list-disc text-sm text-muted-foreground">
                    <li>Web Development & Modern Technologies</li>
                    <li>Open Source Software</li>
                    <li>UI/UX Design</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}