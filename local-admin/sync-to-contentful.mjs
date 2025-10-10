#!/usr/bin/env node

/**
 * Local Admin → Contentful Sync
 * 
 * This script syncs local content and images to Contentful.
 * Edit files locally, then run this to push changes to the CMS.
 * 
 * Usage:
 *   npm run admin:sync     - Sync once
 *   npm run admin:watch    - Watch for changes and auto-sync
 */

import contentfulManagement from 'contentful-management'
import { readFileSync, existsSync, readdirSync, statSync, createReadStream, writeFileSync } from 'fs'
import { join, dirname, basename, extname } from 'path'
import { fileURLToPath } from 'url'
import crypto from 'crypto'
import chokidar from 'chokidar'
import mime from 'mime-types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Paths
const CONTENT_DIR = join(__dirname, 'content')
const IMAGES_DIR = join(__dirname, 'images')
const CACHE_FILE = join(__dirname, '.sync-cache.json')

// Load Contentful config
const configPath = join(__dirname, '..', '.contentfulrc.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))

const client = contentfulManagement.createClient({
  accessToken: config.managementToken
})

// Cache to track what's been uploaded
let syncCache = {}
if (existsSync(CACHE_FILE)) {
  syncCache = JSON.parse(readFileSync(CACHE_FILE, 'utf8'))
}

function saveCache() {
  writeFileSync(CACHE_FILE, JSON.stringify(syncCache, null, 2))
}

function getFileHash(filepath) {
  const content = readFileSync(filepath)
  return crypto.createHash('md5').update(content).digest('hex')
}

async function uploadImage(imagePath, title, description) {
  const space = await client.getSpace(config.activeSpaceId)
  const environment = await space.getEnvironment('master')
  
  const filename = basename(imagePath)
  const hash = getFileHash(imagePath)
  const contentType = mime.lookup(imagePath) || 'image/jpeg'
  
  // Check if already uploaded with same hash
  if (syncCache.images?.[filename]?.hash === hash) {
    console.log(`✓ Image unchanged: ${filename}`)
    return syncCache.images[filename].assetId
  }
  
  console.log(`📤 Uploading image: ${filename}`)
  
  try {
    let asset
    
    // Check if asset exists
    if (syncCache.images?.[filename]?.assetId) {
      try {
        asset = await environment.getAsset(syncCache.images[filename].assetId)
        // Asset exists, need to update it
        console.log(`  Updating existing asset...`)
      } catch (err) {
        // Asset doesn't exist, will create new
        asset = null
      }
    }
    
    if (asset) {
      // Upload new version
      const upload = await environment.createUpload({
        file: createReadStream(imagePath)
      })
      
      // Update asset with new file
      asset.fields.file['en-US'] = {
        contentType: contentType,
        fileName: filename,
        uploadFrom: {
          sys: {
            type: 'Link',
            linkType: 'Upload',
            id: upload.sys.id
          }
        }
      }
      asset.fields.title['en-US'] = title
      asset.fields.description['en-US'] = description
      
      asset = await asset.update()
    } else {
      // Create new upload
      const upload = await environment.createUpload({
        file: createReadStream(imagePath)
      })
      
      // Create new asset
      asset = await environment.createAsset({
        fields: {
          title: { 'en-US': title },
          description: { 'en-US': description },
          file: {
            'en-US': {
              contentType: contentType,
              fileName: filename,
              uploadFrom: {
                sys: {
                  type: 'Link',
                  linkType: 'Upload',
                  id: upload.sys.id
                }
              }
            }
          }
        }
      })
    }
    
    // Process and publish
    asset = await asset.processForAllLocales()
    asset = await asset.publish()
    
    // Update cache
    if (!syncCache.images) syncCache.images = {}
    syncCache.images[filename] = {
      assetId: asset.sys.id,
      hash: hash,
      uploadedAt: new Date().toISOString()
    }
    saveCache()
    
    console.log(`✅ Uploaded: ${filename} (${asset.sys.id})`)
    return asset.sys.id
    
  } catch (err) {
    console.error(`❌ Failed to upload ${filename}:`, err.message)
    return null
  }
}

async function syncHomePage() {
  console.log('\n🔄 Syncing HomePage content...\n')
  
  const contentPath = join(CONTENT_DIR, 'homepage.json')
  if (!existsSync(contentPath)) {
    console.error('❌ homepage.json not found')
    return
  }
  
  const localContent = JSON.parse(readFileSync(contentPath, 'utf8'))
  const contentHash = getFileHash(contentPath)
  
  // Check if content changed
  if (syncCache.content?.homepage?.hash === contentHash) {
    console.log('✓ HomePage content unchanged')
    return
  }
  
  const space = await client.getSpace(config.activeSpaceId)
  const environment = await space.getEnvironment('master')
  
  // Upload images first
  const imageMap = {}
  
  // Upload hero image if specified
  if (localContent.hero.imageFile) {
    const imagePath = join(IMAGES_DIR, localContent.hero.imageFile)
    if (existsSync(imagePath)) {
      const assetId = await uploadImage(
        imagePath,
        'Hero Background',
        localContent.hero.description
      )
      if (assetId) imageMap['hero'] = assetId
    }
  }
  
  // Upload feature block images
  for (const block of localContent.featureBlocks.blocks) {
    if (block.imageFile) {
      const imagePath = join(IMAGES_DIR, block.imageFile)
      if (existsSync(imagePath)) {
        const assetId = await uploadImage(
          imagePath,
          block.title,
          block.imageAlt
        )
        if (assetId) imageMap[block.imageFile] = assetId
      }
    }
  }
  
  // Upload experience image
  if (localContent.experience.imageFile) {
    const imagePath = join(IMAGES_DIR, localContent.experience.imageFile)
    if (existsSync(imagePath)) {
      const assetId = await uploadImage(
        imagePath,
        'Experience Section Image',
        localContent.experience.title
      )
      if (assetId) imageMap[localContent.experience.imageFile] = assetId
    }
  }
  
  console.log('\n📝 Updating HomePage content...')
  
  // Get or create feature blocks
  const featureBlocks = await environment.getEntries({
    content_type: 'featureBlock'
  })
  
  const blockIds = []
  for (const blockData of localContent.featureBlocks.blocks) {
    let block = featureBlocks.items.find(
      b => b.fields.number?.['en-US'] === blockData.number
    )
    
    if (!block) {
      // Create new block
      block = await environment.createEntry('featureBlock', {
        fields: {
          number: { 'en-US': blockData.number },
          title: { 'en-US': blockData.title },
          lead: { 'en-US': blockData.lead },
          content: { 'en-US': blockData.content },
          imageAlt: { 'en-US': blockData.imageAlt },
          reverse: { 'en-US': blockData.reverse || false }
        }
      })
    } else {
      // Update existing block
      block.fields.title['en-US'] = blockData.title
      block.fields.lead['en-US'] = blockData.lead
      block.fields.content['en-US'] = blockData.content
      block.fields.imageAlt['en-US'] = blockData.imageAlt
      block.fields.reverse = { 'en-US': blockData.reverse || false }
      block = await block.update()
    }
    
    // Link image if available
    if (imageMap[blockData.imageFile]) {
      block.fields.image = {
        'en-US': {
          sys: { type: 'Link', linkType: 'Asset', id: imageMap[blockData.imageFile] }
        }
      }
      block = await block.update()
    }
    
    block = await block.publish()
    blockIds.push(block.sys.id)
  }
  
  // Update experience features
  const experienceFeatures = []
  for (const feature of localContent.experience.features) {
    let expFeature = await environment.createEntry('experienceFeature', {
      fields: {
        title: { 'en-US': feature.title },
        description: { 'en-US': feature.description }
      }
    })
    expFeature = await expFeature.publish()
    experienceFeatures.push(expFeature.sys.id)
  }
  
  // Update testimonials
  const testimonialIds = []
  for (const testimonial of localContent.testimonials.items) {
    let test = await environment.createEntry('testimonial', {
      fields: {
        quote: { 'en-US': testimonial.quote },
        authorName: { 'en-US': testimonial.authorName },
        authorDetail: { 'en-US': testimonial.authorDetail }
      }
    })
    test = await test.publish()
    testimonialIds.push(test.sys.id)
  }
  
  // Update HomePage entry
  const homePages = await environment.getEntries({
    content_type: 'homePage',
    limit: 1
  })
  
  let homePage = homePages.items[0]
  if (!homePage) {
    console.error('❌ No HomePage entry found')
    return
  }
  
  // Update all fields
  homePage.fields.heroScriptAccent = { 'en-US': localContent.hero.scriptAccent }
  homePage.fields.heroTitleLine1 = { 'en-US': localContent.hero.titleLine1 }
  homePage.fields.heroTitleLine2 = { 'en-US': localContent.hero.titleLine2 }
  homePage.fields.heroDescription = { 'en-US': localContent.hero.description }
  homePage.fields.heroCtaText = { 'en-US': localContent.hero.ctaText }
  homePage.fields.heroCtaLink = { 'en-US': localContent.hero.ctaLink }
  
  // Link hero image if available
  if (imageMap['hero']) {
    homePage.fields.heroBackgroundImage = {
      'en-US': {
        sys: { type: 'Link', linkType: 'Asset', id: imageMap['hero'] }
      }
    }
  }
  
  homePage.fields.featureScriptAccent = { 'en-US': localContent.featureBlocks.scriptAccent }
  homePage.fields.featureTitle = { 'en-US': localContent.featureBlocks.title }
  homePage.fields.featureLead = { 'en-US': localContent.featureBlocks.lead }
  homePage.fields.featureBlocks = {
    'en-US': blockIds.map(id => ({ sys: { type: 'Link', linkType: 'Entry', id } }))
  }
  
  homePage.fields.experienceScriptAccent = { 'en-US': localContent.experience.scriptAccent }
  homePage.fields.experienceTitle = { 'en-US': localContent.experience.title }
  homePage.fields.experienceDescription = { 'en-US': localContent.experience.description }
  
  if (imageMap[localContent.experience.imageFile]) {
    homePage.fields.experienceImage = {
      'en-US': {
        sys: { type: 'Link', linkType: 'Asset', id: imageMap[localContent.experience.imageFile] }
      }
    }
  }
  
  homePage.fields.loveStoriesScriptAccent = { 'en-US': localContent.loveStories.scriptAccent }
  homePage.fields.loveStoriesTitle = { 'en-US': localContent.loveStories.title }
  homePage.fields.loveStoriesLead = { 'en-US': localContent.loveStories.lead }
  
  homePage.fields.testimonialsScriptAccent = { 'en-US': localContent.testimonials.scriptAccent }
  homePage.fields.testimonialsTitle = { 'en-US': localContent.testimonials.title }
  
  homePage = await homePage.update()
  homePage = await homePage.publish()
  
  // Update cache
  if (!syncCache.content) syncCache.content = {}
  syncCache.content.homepage = {
    hash: contentHash,
    syncedAt: new Date().toISOString()
  }
  saveCache()
  
  console.log('✅ HomePage synced successfully!\n')
}

async function sync() {
  try {
    console.log('🚀 Starting local → Contentful sync')
    console.log('=' .repeat(50))
    
    await syncHomePage()
    
    console.log('=' .repeat(50))
    console.log('✨ Sync complete!')
    
  } catch (error) {
    console.error('❌ Sync failed:', error)
    process.exit(1)
  }
}

// Check if running in watch mode
if (process.argv.includes('--watch')) {
  console.log('👀 Watching for changes...\n')
  
  // Initial sync
  await sync()
  
  // Watch for changes
  const watcher = chokidar.watch([CONTENT_DIR, IMAGES_DIR], {
    persistent: true,
    ignoreInitial: true
  })
  
  watcher.on('change', async (path) => {
    console.log(`\n📝 File changed: ${basename(path)}`)
    await sync()
  })
  
  watcher.on('add', async (path) => {
    console.log(`\n➕ File added: ${basename(path)}`)
    await sync()
  })
  
  console.log('Press Ctrl+C to stop watching\n')
  
} else {
  // Run once
  await sync()
}