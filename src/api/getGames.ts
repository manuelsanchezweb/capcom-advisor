import { type Game } from '~/types/types'

export async function getGames(): Promise<Game[]> {
  const url = `${process.env.PUBLIC_APP_URL}data/data.json`
  console.log('url', url)
  const res = await fetch(url)
  console.log('res', res)

  if (!res.ok) {
    throw new Error('Error fetching games')
  }

  const data = (await res.json()) as Game[]
  console.log('data', data)
  return data
}
