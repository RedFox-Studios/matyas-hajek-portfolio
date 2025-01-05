"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, MessageCircle, Loader2, Mail, ArrowRight } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import type { Dictionary } from "@/lib/dictionary"

interface ContactContentProps {
  dict: Dictionary
  locale: string
}

export function ContactContent({ dict, locale }: ContactContentProps) {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    try {
      setIsPending(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Success",
        description: dict.contact.form.success,
      })
      
      const form = document.querySelector('form') as HTMLFormElement
      form.reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: dict.contact.form.error,
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary.100/20),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,theme(colors.primary.900/20),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,theme(colors.purple.100/20),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,theme(colors.purple.900/20),transparent_50%)]" />
      </div>

      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {dict.contact.title}
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {dict.contact.description}
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full overflow-hidden border-2">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">{dict.contact.form.title}</CardTitle>
                <CardDescription>
                  {dict.contact.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Input
                      name="name"
                      placeholder={dict.contact.form.name}
                      required
                      disabled={isPending}
                      className="h-12"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder={dict.contact.form.email}
                      required
                      disabled={isPending}
                      className="h-12"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Textarea
                      name="message"
                      placeholder={dict.contact.form.message}
                      className="min-h-[150px] resize-none"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <Button 
                    className="group relative h-12 overflow-hidden rounded-full bg-primary transition-transform hover:translate-y-[-2px]"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {dict.contact.form.sending}
                      </>
                    ) : (
                      <>
                        {dict.contact.form.send}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                    <span className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/50 via-primary to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full border-2">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">{dict.contact.connect.title}</CardTitle>
                <CardDescription>
                  {dict.contact.connect.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <a
                  href="mailto:contact@matyas-hajek.com"
                  className="group flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <div className="rounded-full border p-2 transition-colors group-hover:border-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Email</span>
                    <span className="text-sm text-muted-foreground">contact@matyas-hajek.com</span>
                  </div>
                </a>
                
                <a
                  href="https://github.com/maty7253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <div className="rounded-full border p-2 transition-colors group-hover:border-primary">
                    <Github className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{dict.contact.connect.github}</span>
                    <span className="text-sm text-muted-foreground">github.com/maty7253</span>
                  </div>
                </a>

                <a
                  href="https://discord.com/users/maty7253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <div className="rounded-full border p-2 transition-colors group-hover:border-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{dict.contact.connect.discord}</span>
                    <span className="text-sm text-muted-foreground">discord.com/users/maty7253</span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}