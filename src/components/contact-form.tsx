"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContact } from "@/app/actions"

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    try {
      setIsPending(true)
      const result = await submitContact(formData)
      
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        })
      } else {
        toast({
          title: "Success",
          description: result.message,
        })
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <motion.form
      action={handleSubmit}
      className="grid gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid gap-2">
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          disabled={isPending}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          disabled={isPending}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="min-h-[150px]"
          required
          disabled={isPending}
        />
      </div>
      <Button className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </motion.form>
  )
}