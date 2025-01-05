import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getDictionary } from "@/lib/dictionary"

interface HeaderProps {
  locale: string
}

export async function Header({ locale }: HeaderProps) {
  const dict = await getDictionary(locale as keyof typeof dictionaries)

  const navItems = [
    {
      href: `/${locale}`,
      label: dict.navigation.home,
    },
    {
      href: `/${locale}/about`,
      label: dict.navigation.about,
    },
    {
      href: `/${locale}/skills`,
      label: dict.navigation.skills,
    },
    {
      href: `/${locale}/experience`,
      label: dict.navigation.experience,
    },
    {
      href: `/${locale}/why-me`,
      label: dict.navigation["why-me"],
    },
    {
      href: `/${locale}/contact`,
      label: dict.navigation.contact,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 min-h-[4rem] items-center justify-between">
        <Link 
          href={`/${locale}`} 
          className="mr-6 flex items-center space-x-2"
        >
          <span className="text-lg font-bold tracking-tight">MH</span>
        </Link>
        
        <div className="hidden flex-1 md:flex md:justify-center">
          <MainNav items={navItems} />
        </div>
        
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </nav>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pr-0">
              <MainNav items={navItems} className="flex-col items-start gap-4" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}