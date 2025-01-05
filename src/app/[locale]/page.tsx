import { Suspense } from 'react'
import { getDictionary } from "@/lib/dictionary"
import { HomeContent } from "@/components/home-content"
import { LoadingSpinner } from "@/components/loading-spinner"

export default async function HomePage({ 
  params 
}: { 
  params: { locale: string } 
}) {
  const dict = await getDictionary(params.locale as keyof typeof dictionaries)

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContent dict={dict} locale={params.locale} />
    </Suspense>
  )
}