import { Suspense } from 'react'
import { getValidatedParams } from '@/lib/params'
import { getDictionary } from '@/lib/dictionary'
import { AboutContent } from '@/components/about-content'
import { LoadingSpinner } from '@/components/loading-spinner'

export default async function AboutPage({
  params,
}: {
  params: { locale?: string }
}) {
  const validatedParams = await getValidatedParams(params)
  const dict = await getDictionary(validatedParams.locale)

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AboutContent dict={dict} locale={validatedParams.locale} />
    </Suspense>
  )
}