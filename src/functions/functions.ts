import { type Game } from '~/types/types'

export function getGamesForUser(
  allGamesInfo: Game[],
  selectedGenre: string,
  selectedPlatform: string
): Game[] {
  if (!allGamesInfo) return []

  const gamesForGenre = allGamesInfo.filter((game) =>
    game.genres.includes(selectedGenre)
  )

  const gamesForPlatform = gamesForGenre.filter((game) =>
    game.platforms.some((platform) => platform.name === selectedPlatform)
  )

  return gamesForPlatform
}
