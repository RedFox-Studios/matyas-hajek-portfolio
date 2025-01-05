import { Suspense } from 'react'
import { use } from 'react'
import { getDictionary } from '@/lib/dictionary'
import { SkillsContent } from '@/components/skills-content'
import { LoadingSpinner } from '@/components/loading-spinner'

async function getPageData(locale: string) {
  const dict = await getDictionary(locale)
  return { dict }
}

export default function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const { dict } = use(getPageData(locale))

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SkillsContent dict={dict} locale={locale} />
    </Suspense>
  )
}