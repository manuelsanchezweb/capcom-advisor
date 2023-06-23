export async function getGames(): Promise<[]> {
  const url = `${process.env.PUBLIC_APP_URL}/api/games`

  const res = await fetch(url)
  const data = await res.json()

  return data
}
