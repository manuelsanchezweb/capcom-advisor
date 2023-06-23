import type { RequestHandler } from '@builder.io/qwik-city'
import { promises as fs } from 'fs'
import path from 'path'

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

  const jsonDirectory = path.join(process.cwd(), 'data')

  // Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')

  const gamesData = JSON.parse(fileContents)

  // Send the JSON response
  requestEvent.json(200, gamesData)
}
