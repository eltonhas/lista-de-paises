import { getCountries } from '@/api/get-countries'

export default async function Home() {
  const { countryList } = await getCountries()
  return (
    <div className="flex flex-col">
      {countryList.map((country) => (
        <span key={country.name.common}>{country.name.common}</span>
      ))}
    </div>
  )
}
