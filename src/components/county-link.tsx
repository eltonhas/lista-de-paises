import Image from 'next/image'
import Link from 'next/link'

interface CountryLinkProps {
  name: string
  flag: string
  commonName: string
}

export function CountryLink({ name, flag, commonName }: CountryLinkProps) {
  return (
    <Link
      href={`/country/${commonName}`}
      className="mt-8 flex w-1/2 flex-col items-center gap-4 md:w-1/3"
    >
      <Image
        src={flag}
        alt={name}
        className="rounded-md border shadow-2xl"
        width={200}
        height={100}
        priority
      />
      <h2 className="text-center font-bold">{name}</h2>
    </Link>
  )
}
