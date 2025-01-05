"use client"

import { usePathname } from "next/navigation"
import { i18n, type Locale } from "@/lib/i18n-config"

export function useLanguageSwitcher() {
  const pathname = usePathname()

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/"
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return {
    currentLocale: pathname?.split("/")[1] as Locale,
    locales: i18n.locales,
    redirectedPathname,
  }
}

