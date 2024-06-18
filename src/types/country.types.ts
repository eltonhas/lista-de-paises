interface PostalCode {
  format: string
  regex: string
}

interface CapitalInfo {
  latlng: number[]
}

interface CoatOfArms {}

interface Flags {
  png: string
  svg: string
}

interface Car {
  signs: string[]
  side: string
}

interface Maps {
  googleMaps: string
  openStreetMaps: string
}

interface Eng {
  f: string
  m: string
}

interface Demonyms {
  eng: Eng
}

interface Languages {
  fra: string
}

interface Idd {
  root: string
  suffixes: string[]
}

interface XPF {
  name: string
  symbol: string
}

interface Currencies {
  XPF: XPF
}

interface Fra {
  official: string
  common: string
}

interface Translations {
  ara: Fra
  bre: Fra
  ces: Fra
  cym: Fra
  deu: Fra
  est: Fra
  fin: Fra
  fra: Fra
  hrv: Fra
  hun: Fra
  ita: Fra
  jpn: Fra
  kor: Fra
  nld: Fra
  per: Fra
  pol: Fra
  por: Fra
  rus: Fra
  slk: Fra
  spa: Fra
  srp: Fra
  swe: Fra
  tur: Fra
  urd: Fra
  zho: Fra
}

interface NativeName {
  fra: Fra
}

interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface Country {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
  borders: string[]
}
