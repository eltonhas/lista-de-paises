'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { filterListCountries } from '@/api/filter-list-countries'
import type { Country } from '@/types/country.types'

import { CountryLink } from './county-link'

interface CountryListProps {
  countries: Country[]
}

const filterSchema = z.object({
  filter: z.string().min(1),
})

type FilterProps = z.infer<typeof filterSchema>

export function CountryList({ countries }: CountryListProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FilterProps>({
    resolver: zodResolver(filterSchema),
  })
  const [filterList, setFilterList] = useState<Country[]>()

  function handleFilter(data: FilterProps) {
    const filterList = filterListCountries({
      data: countries,
      text: data.filter,
    })

    setFilterList(filterList)
    reset({ filter: '' })
  }

  function clearFilter() {
    setFilterList(countries)
  }
  return (
    <div className="flex flex-col items-center justify-center pb-10 md:flex-row md:flex-wrap">
      <form
        className="mt-4 flex w-full flex-col items-center space-y-4"
        onSubmit={handleSubmit(handleFilter)}
      >
        <input
          placeholder="Digite o país que você está procurando"
          className="w-full rounded-xl border border-gray-600 p-4"
          id="filter"
          {...register('filter')}
        />
        <div className="flex w-full flex-col items-center gap-4 md:flex-row">
          <button
            type="submit"
            className="w-1/2 rounded-lg bg-gray-400 p-2 text-white"
          >
            Pesquisar
          </button>
          <button
            className="w-1/2 rounded-lg border p-2 text-black"
            onClick={clearFilter}
          >
            Limpar Filtro
          </button>
        </div>
      </form>
      {!countries ||
        (isSubmitting && <Loader2 className="mt-20 size-10 animate-spin" />)}
      {filterList
        ? filterList.map((country) => (
            <CountryLink
              key={country.name.official}
              name={country.translations.por.official}
              flag={country.flags.svg}
              commonName={country.name.common}
            />
          ))
        : countries.map((country) => (
            <CountryLink
              key={country.name.official}
              name={country.translations.por.official}
              flag={country.flags.svg}
              commonName={country.name.common}
            />
          ))}
    </div>
  )
}
