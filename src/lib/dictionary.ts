const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  cs: () => import('@/dictionaries/cs.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
}

export type Dictionary = Awaited<ReturnType<typeof dictionaries['en']>>

export async function getDictionary(locale: keyof typeof dictionaries) {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    return await dictionaries.en() // Fallback to English
  }
}