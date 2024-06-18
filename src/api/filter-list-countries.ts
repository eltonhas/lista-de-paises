import type { Country } from '@/types/country.types'

interface FilterListCountriesProps {
  data: Country[]
  text: string
}

export function filterListCountries({ data, text }: FilterListCountriesProps) {
  return data.filter((item) => {
    return item.translations.por.official
      .toLowerCase()
      .includes(text.toLowerCase())
  })
}
