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
    <header className="fixed top-0 z-50 w-full glass-effect border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          href={`/${locale}`} 
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <span className="text-xl font-bold text-gradient">Matyáš Hájek</span>
        </Link>
        
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <MainNav items={navItems} />
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] glass-effect">
              <div className="mt-6">
                <MainNav items={navItems} className="flex-col items-start space-y-2" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}