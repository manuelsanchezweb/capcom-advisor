import type { RequestHandler } from '@builder.io/qwik-city'

const gamesData = [
  {
    id: 1,
    name: 'Resident Evil 4 Remake',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris.',
    genres: ['action', 'shooting', 'adventure'],
    urlOfficial: 'https://www.google.com',
    platforms: [
      {
        name: 'ps5',
        url: 'https://www.google.com',
      },
      {
        name: 'ps4',
        url: 'https://www.google.com',
      },
    ],
    assets: {
      imgBig: {
        url: '',
        copyrightUrl: '',
      },
      imgSmall: {
        url: './img/smRE4.png',
        copyrightUrl: 'https://www.residentevil.com/re4/en-uk/',
      },
    },
  },
]

export const onGet: RequestHandler = async (requestEvent) => {
  // Enable CORS by setting the appropriate headers
  requestEvent.headers.set('Access-Control-Allow-Origin', '*')
  requestEvent.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  requestEvent.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  )

  // Check if the request is an OPTIONS request (pre-flight request)
  if (requestEvent.method === 'OPTIONS') {
    requestEvent.status(204)
    requestEvent.send(new Response(null))
    return
  }

  // Send the JSON response
  requestEvent.json(200, gamesData)
}
