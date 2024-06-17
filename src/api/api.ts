import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'https://restcountries.com/v3.1',
})
