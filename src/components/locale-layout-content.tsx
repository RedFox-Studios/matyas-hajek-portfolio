"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function LocaleLayoutContent({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}