import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

const CONTENT_DIR = path.join(__dirname, 'content')

// Helper to read JSON file
async function readJSON(filename) {
  try {
    const data = await fs.readFile(path.join(CONTENT_DIR, filename), 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return null
  }
}

// Helper to write JSON file
async function writeJSON(filename, data) {
  await fs.writeFile(
    path.join(CONTENT_DIR, filename),
    JSON.stringify(data, null, 2),
    'utf8'
  )
}

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '✨ JSON File Storage API',
    status: 'running',
    endpoints: [
      'GET /api/weddings - Get all weddings',
      'POST /api/weddings - Create wedding',
      'PUT /api/weddings/:id - Update wedding',
      'DELETE /api/weddings/:id - Delete wedding',
      'GET /api/venues - Get all venues',
      'PUT /api/venues/:id - Update venue'
    ]
  })
})

// Weddings endpoints
app.get('/api/weddings', async (req, res) => {
  try {
    const data = await readJSON('weddings.json')
    res.json(data.weddings || [])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/weddings', async (req, res) => {
  try {
    const data = await readJSON('weddings.json') || { weddings: [] }
    const newWedding = {
      ...req.body,
      id: Date.now().toString()
    }
    data.weddings.push(newWedding)
    await writeJSON('weddings.json', data)
    res.json(newWedding)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.put('/api/weddings/:id', async (req, res) => {
  try {
    const data = await readJSON('weddings.json') || { weddings: [] }
    const index = data.weddings.findIndex(w => w.id === req.params.id)
    if (index === -1) {
      return res.status(404).json({ error: 'Wedding not found' })
    }
    data.weddings[index] = { ...data.weddings[index], ...req.body }
    await writeJSON('weddings.json', data)
    res.json(data.weddings[index])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.delete('/api/weddings/:id', async (req, res) => {
  try {
    const data = await readJSON('weddings.json') || { weddings: [] }
    data.weddings = data.weddings.filter(w => w.id !== req.params.id)
    await writeJSON('weddings.json', data)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Venues endpoints
app.get('/api/venues', async (req, res) => {
  try {
    const data = await readJSON('venues.json')
    res.json(data.venues || [])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.put('/api/venues/:id', async (req, res) => {
  try {
    const data = await readJSON('venues.json') || { venues: [] }
    const index = data.venues.findIndex(v => v.id === req.params.id)
    if (index === -1) {
      return res.status(404).json({ error: 'Venue not found' })
    }
    data.venues[index] = { ...data.venues[index], ...req.body }
    await writeJSON('venues.json', data)
    res.json(data.venues[index])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`✨ JSON API server running on http://localhost:${PORT}`)
  console.log(`📁 Content directory: ${CONTENT_DIR}`)
})
