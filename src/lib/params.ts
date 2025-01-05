"use server"

export async function getValidatedParams(params: { locale?: string }) {
  return {
    locale: params.locale || 'en'
  }
}