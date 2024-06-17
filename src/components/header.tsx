import Image from 'next/image'

import World from '@/assets/world.svg'

export function Header() {
  return (
    <header className="flex w-full border border-b-gray-400 bg-white px-4 py-6 font-sans md:justify-center">
      <div className="flex w-full max-w-4xl items-center gap-3">
        <Image src={World} className="size-14" alt="mundo" />
        <h1 className="text-xl font-bold md:text-2xl">Países do mundo</h1>
      </div>
    </header>
  )
}
