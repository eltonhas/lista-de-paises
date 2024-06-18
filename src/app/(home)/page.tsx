import { getCountries } from '@/api/get-countries'
import { CountryList } from '@/components/country-list'

export default async function Home() {
  const { countries } = await getCountries()
  return <CountryList countries={countries} />
}
