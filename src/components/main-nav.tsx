"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface MainNavProps {
  items: {
    href: string
    label: string
  }[]
  className?: string
}

export function MainNav({ items, className }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex gap-2", className)}>
      {items.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className="w-full justify-start md:w-auto"
          asChild
        >
          <Link href={item.href}>
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}