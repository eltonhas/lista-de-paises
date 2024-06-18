import type { Country } from '@/types/country.types'

import { api } from './api'

export async function getCountryByName(name: string) {
  const country = await api.get(`name/${name}`).json<Country[]>()

  return { country }
}
