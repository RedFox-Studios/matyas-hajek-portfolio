"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { getDictionary } from "@/lib/dictionary"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { ScrollFadeIn, ScrollScale } from "@/components/scroll-animation"
import { HoverLink } from "@/components/hover-link"

export default function TestPage({ params: { locale } }: { params: { locale: string } }) {
  const [count, setCount] = useState(0)
  const { toast } = useToast()
  const dict = await getDictionary(locale)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Test Page
        </h1>
        <p className="text-lg text-muted-foreground">
          Testing various components and features
        </p>
      </div>

      {/* Test Cards with Animations */}
      <div className="grid gap-6 md:grid-cols-2">
        <ScrollFadeIn>
          <Card>
            <CardHeader>
              <CardTitle>Theme Test</CardTitle>
              <CardDescription>Verify dark/light mode styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Current navigation items in {locale}:
              </p>
              <ul className="mt-2 space-y-2">
                {Object.entries(dict.navigation).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollFadeIn>

        <ScrollScale>
          <Card>
            <CardHeader>
              <CardTitle>Animation Test</CardTitle>
              <CardDescription>Testing interactive elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => {
                    setCount(c => c + 1)
                    toast({
                      title: "Button clicked!",
                      description: `Count is now ${count + 1}`,
                    })
                  }}
                >
                  Click me! ({count})
                </Button>
              </motion.div>

              <div className="pt-4">
                <HoverLink 
                  href={`/${locale}`}
                  description="Go back to the homepage"
                >
                  Hover over me
                </HoverLink>
              </div>
            </CardContent>
          </Card>
        </ScrollScale>
      </div>

      {/* Responsive Test */}
      <Card>
        <CardHeader>
          <CardTitle>Responsive Test</CardTitle>
          <CardDescription>Testing responsive design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg bg-muted p-4 text-center"
              >
                Box {i + 1}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Language Test */}
      <Card>
        <CardHeader>
          <CardTitle>{dict.contact.title}</CardTitle>
          <CardDescription>{dict.contact.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Current language: {locale}</p>
          <p className="mt-2 text-muted-foreground">
            Testing translations for: {dict.home.description}
          </p>
        </CardContent>
      </Card>
    </section>
  )
}