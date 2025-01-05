import { Suspense } from 'react'
import { use } from 'react'
import { getDictionary } from '@/lib/dictionary'
import { WhyMeContent } from '@/components/why-me-content'
import { LoadingSpinner } from '@/components/loading-spinner'

async function getPageData(locale: string) {
  const dict = await getDictionary(locale)
  return { dict }
}

export default function WhyMePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const { dict } = use(getPageData(locale))

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WhyMeContent dict={dict} locale={locale} />
    </Suspense>
  )
}