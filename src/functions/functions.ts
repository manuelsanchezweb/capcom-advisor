import { Game } from '~/types/types'

export function getGamesForUser(
  allGamesInfo: Game[],
  selectedGenre: string,
  selectedPlatform: string
): Game[] {
  const gamesForGenre = allGamesInfo.filter((game) =>
    game.genres.includes(selectedGenre)
  )
  // console.log(allGamesInfo, selectedGenre, selectedPlatform)
  // console.log('gamesForGenre', gamesForGenre)

  const gamesForPlatform = gamesForGenre.filter((game) =>
    game.platforms.some((platform) => platform.name === selectedPlatform)
  )
  // console.log('gamesForPlatform', gamesForPlatform)

  return gamesForPlatform
}
