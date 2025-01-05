import { Suspense } from 'react'
import { getValidatedParams } from '@/lib/params'
import { getDictionary } from '@/lib/dictionary'
import { ContactContent } from '@/components/contact-content'
import { LoadingSpinner } from '@/components/loading-spinner'

export default async function ContactPage({
  params,
}: {
  params: { locale?: string }
}) {
  const validatedParams = await getValidatedParams(params)
  const dict = await getDictionary(validatedParams.locale)

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContactContent dict={dict} locale={validatedParams.locale} />
    </Suspense>
  )
}