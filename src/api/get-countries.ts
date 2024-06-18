import type { Country } from '@/types/country.types'

import { api } from './api'

export async function getCountries() {
  const countries = await api.get('all').json<Country[]>()

  return { countries }
}
