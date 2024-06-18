import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getCountryByCode } from '@/api/get-country-by-code'

interface CountryLink2Props {
  code: string
}

export async function CountryLink2({ code }: CountryLink2Props) {
  const { country } = await getCountryByCode(code)

  return (
    <main className="flex max-w-64 flex-col items-center space-y-4">
      {!country && <Loader2 className="mt-20 size-10 animate-spin" />}
      {country && (
        <Link
          href={`/country/${country[0].name.common}`}
          className="mt-8 flex w-1/2 flex-col items-center gap-2"
        >
          <Image
            src={country[0].flags.png}
            alt={country[0].translations.por.official}
            className="rounded-md border shadow-2xl"
            width={300}
            height={200}
            priority
          />
          <h2 className="text-center font-bold">
            {country[0].translations.por.official}
          </h2>
        </Link>
      )}
    </main>
  )
}
