import type { Country } from '@/DTOS/country'

import { api } from './api'

export async function getCountries() {
  const countries = await api.get('all').json<Country[]>()

  const countriesQtd = countries.length - 1
  console.log(countriesQtd)

  const countryList = []
  let i = 0

  while (i < 10) {
    const randonIndex = Math.floor(Math.random() * countriesQtd)

    countryList.push(countries[randonIndex])

    i++
  }

  return { countryList }
}
