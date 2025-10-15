import fs from 'fs/promises'
import path from 'path'

// In Netlify Functions, use relative path from function location
const CONTENT_DIR = path.resolve(process.cwd(), 'content')

async function readJSON(filename) {
  try {
    const data = await fs.readFile(path.join(CONTENT_DIR, filename), 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return null
  }
}

async function writeJSON(filename, data) {
  await fs.writeFile(
    path.join(CONTENT_DIR, filename),
    JSON.stringify(data, null, 2),
    'utf8'
  )
}

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  try {
    const path = event.path.replace('/.netlify/functions/json-storage', '')
    const method = event.httpMethod

    // Weddings endpoints
    if (path === '/weddings' && method === 'GET') {
      const data = await readJSON('weddings.json') || { weddings: [] }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data.weddings)
      }
    }

    if (path === '/weddings' && method === 'POST') {
      const data = await readJSON('weddings.json') || { weddings: [] }
      const newWedding = {
        ...JSON.parse(event.body),
        id: Date.now().toString()
      }
      data.weddings.push(newWedding)
      await writeJSON('weddings.json', data)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(newWedding)
      }
    }

    if (path.startsWith('/weddings/') && method === 'PUT') {
      const id = path.split('/')[2]
      const data = await readJSON('weddings.json') || { weddings: [] }
      const index = data.weddings.findIndex(w => w.id === id)
      if (index === -1) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Wedding not found' })
        }
      }
      data.weddings[index] = { ...data.weddings[index], ...JSON.parse(event.body) }
      await writeJSON('weddings.json', data)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data.weddings[index])
      }
    }

    if (path.startsWith('/weddings/') && method === 'DELETE') {
      const id = path.split('/')[2]
      const data = await readJSON('weddings.json') || { weddings: [] }
      data.weddings = data.weddings.filter(w => w.id !== id)
      await writeJSON('weddings.json', data)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true })
      }
    }

    // Venues endpoints
    if (path === '/venues' && method === 'GET') {
      const data = await readJSON('venues.json') || { venues: [] }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data.venues)
      }
    }

    if (path.startsWith('/venues/') && method === 'PUT') {
      const id = path.split('/')[2]
      const data = await readJSON('venues.json') || { venues: [] }
      const index = data.venues.findIndex(v => v.id === id)
      if (index === -1) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Venue not found' })
        }
      }
      data.venues[index] = { ...data.venues[index], ...JSON.parse(event.body) }
      await writeJSON('venues.json', data)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data.venues[index])
      }
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found' })
    }

  } catch (error) {
    console.error('Function error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    }
  }
}
