type Platform = {
  name: string
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  genres: string[]
  urlOfficial: string
  platforms: Platform[]
  assets: {
    imgBig: {
      url: string
      copyrightUrl: string
    }
    imgSmall: {
      url: string
      copyrightUrl: string
    }
  }
}
