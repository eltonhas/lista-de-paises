import { ArrowLeft, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getCountryByName } from '@/api/get-country-by-name'
import { CountryLink2 } from '@/components/country-link-2'

interface CountryInfosProps {
  params: {
    name: string
  }
}

export default async function CountryInfos({ params }: CountryInfosProps) {
  const { country } = await getCountryByName(params.name)
  return (
    <main className="mt-10 flex flex-col items-center space-y-4">
      {!country && <Loader2 className="mt-20 size-10 animate-spin" />}
      {country && (
        <>
          <h1 className="text-2xl font-bold">
            {country[0].translations.por.official}
          </h1>
          <section className="w-full pb-10">
            <Link href={'/'} className="flex items-center gap-2">
              <ArrowLeft size={14} /> <span className="text-sm">Voltar</span>
            </Link>
            <div className="mt-8 flex w-full flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <p className="font-bold">🏙️ Capital:</p>{' '}
                  <span>{country[0].capital[0]}</span>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold">🗺️ Continente: </p>{' '}
                  <span>{country[0].continents[0]}</span>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold">👨🏻 População:</p>{' '}
                  <span>{country[0].population} M</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">🗣️ Linguas faladas:</p>{' '}
                  <div className="flex w-full flex-col items-center gap-4 pt-5 md:flex-row">
                    {Object.values(country[0].languages).map((language) => (
                      <span
                        key={language}
                        className="flex w-full max-w-32 items-center justify-center rounded-full bg-indigo-700 p-2 text-white"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3">
                <Image
                  src={country[0].flags.svg}
                  alt={`bandeira ${country[0].translations.por.official}`}
                  priority
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold">Países que fazem fronteira</h2>
            <div className="flex flex-col items-center pb-10 md:flex-row md:flex-wrap">
              {!Object.hasOwn(country[0], 'borders') && (
                <p>Não faz fronteiras com outros países</p>
              )}

              {Object.hasOwn(country[0], 'borders') &&
                country[0].borders.map((country) => (
                  <CountryLink2 code={country} key={country} />
                ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}
