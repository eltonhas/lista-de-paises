import type { Country } from '@/types/country.types'

import { api } from './api'

export async function getCountryByCode(code: string) {
  const country = await api.get(`alpha/${code}`).json<Country[]>()

  return { country }
}
