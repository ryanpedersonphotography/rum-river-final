import express from 'express'
import cors from 'cors'
import contentfulManagement from 'contentful-management'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const upload = multer({ dest: 'uploads/' })

// Middleware
app.use(cors())
app.use(express.json())

// Read config
const config = JSON.parse(fs.readFileSync('.contentfulrc.json', 'utf8'))
const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID

// Create Contentful client
const client = contentfulManagement.createClient({
  accessToken: config.managementToken
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '✨ Contentful Management API Server',
    status: 'running',
    endpoints: [
      'GET /api/venues - Get all venues',
      'PUT /api/venues/:id - Update venue',
      'POST /api/venues/:id/images - Upload image',
      'DELETE /api/venues/:id/images/:index - Remove image'
    ],
    frontend: 'http://localhost:3000',
    adminPanel: 'http://localhost:3000/admin/venues'
  })
})

// Get all venues
app.get('/api/venues', async (req, res) => {
  try {
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment('master')
    
    const entries = await environment.getEntries({
      content_type: 'venue',
      order: 'fields.order'
    })
    
    // Collect all asset IDs from venues
    const assetIds = new Set()
    entries.items.forEach(entry => {
      const images = entry.fields.images?.['en-US'] || []
      images.forEach(img => {
        if (img.sys && img.sys.id) {
          assetIds.add(img.sys.id)
        }
      })
    })
    
    // Fetch all assets
    const assets = []
    if (assetIds.size > 0) {
      const assetPromises = Array.from(assetIds).map(async id => {
        try {
          const asset = await environment.getAsset(id)
          return asset
        } catch (err) {
          console.warn(`Failed to fetch asset ${id}:`, err.message)
          return null
        }
      })
      
      const fetchedAssets = await Promise.all(assetPromises)
      assets.push(...fetchedAssets.filter(Boolean))
    }
    
    // Add includes section to response (mimicking CDN API structure)
    const response = {
      ...entries,
      includes: {
        Asset: assets
      }
    }
    
    res.json(response)
  } catch (error) {
    console.error('Error fetching venues:', error)
    res.status(500).json({ error: error.message })
  }
})

// Update venue
app.put('/api/venues/:id', async (req, res) => {
  try {
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment('master')
    
    const entry = await environment.getEntry(req.params.id)
    
    // Update fields
    const fields = req.body.fields
    Object.keys(fields).forEach(key => {
      entry.fields[key] = { 'en-US': fields[key] }
    })
    
    const updated = await entry.update()
    const published = await updated.publish()
    
    res.json(published)
  } catch (error) {
    console.error('Error updating venue:', error)
    res.status(500).json({ error: error.message })
  }
})

// Upload image for venue
app.post('/api/venues/:id/images', upload.single('image'), async (req, res) => {
  try {
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment('master')
    
    // Upload file to Contentful
    const file = fs.readFileSync(req.file.path)
    const upload = await environment.createUpload({ file })
    
    // Create asset
    const asset = await environment.createAsset({
      fields: {
        title: { 'en-US': req.file.originalname },
        file: {
          'en-US': {
            contentType: req.file.mimetype,
            fileName: req.file.originalname,
            uploadFrom: {
              sys: { type: 'Link', linkType: 'Upload', id: upload.sys.id }
            }
          }
        }
      }
    })
    
    const processedAsset = await asset.processForAllLocales()
    await processedAsset.publish()
    
    // Add to venue
    const entry = await environment.getEntry(req.params.id)
    const images = entry.fields.images?.['en-US'] || []
    images.push({
      sys: { type: 'Link', linkType: 'Asset', id: processedAsset.sys.id }
    })
    entry.fields.images = { 'en-US': images }
    
    const updated = await entry.update()
    await updated.publish()
    
    // Clean up temp file
    fs.unlinkSync(req.file.path)
    
    res.json({ success: true, asset: processedAsset })
  } catch (error) {
    console.error('Error uploading image:', error)
    res.status(500).json({ error: error.message })
  }
})

// Remove image from venue
app.delete('/api/venues/:id/images/:index', async (req, res) => {
  try {
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment('master')
    
    const entry = await environment.getEntry(req.params.id)
    const images = entry.fields.images?.['en-US'] || []
    
    images.splice(parseInt(req.params.index), 1)
    entry.fields.images = { 'en-US': images }
    
    const updated = await entry.update()
    await updated.publish()
    
    res.json({ success: true })
  } catch (error) {
    console.error('Error removing image:', error)
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`✨ Contentful API server running on http://localhost:${PORT}`)
})