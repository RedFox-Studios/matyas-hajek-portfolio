"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface HoverLinkProps {
  href: string
  children: React.ReactNode
  description: string
}

export function HoverLink({ href, children, description }: HoverLinkProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link 
          href={href}
          className="inline-flex items-center justify-center"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary underline decoration-primary decoration-2 underline-offset-4"
          >
            {children}
          </motion.span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">{description}</p>
        </motion.div>
      </HoverCardContent>
    </HoverCard>
  )
}

