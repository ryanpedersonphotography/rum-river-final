#!/usr/bin/env node

import contentfulManagement from 'contentful-management'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load management token from config
const configPath = join(__dirname, '..', '.contentfulrc.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))

const client = contentfulManagement.createClient({
  accessToken: config.managementToken
})

async function createApiKey() {
  try {
    const space = await client.getSpace(config.activeSpaceId)
    
    // Create a new API key
    const apiKey = await space.createApiKey({
      name: 'Website Delivery API',
      description: 'Delivery API key for the Rum River website',
      environments: [{
        sys: {
          type: 'Link',
          linkType: 'Environment',
          id: 'master'
        }
      }]
    })
    
    console.log('✅ API Key created successfully!')
    console.log('\n📋 Add these to your .env file:')
    console.log(`VITE_CONTENTFUL_SPACE_ID=${config.activeSpaceId}`)
    console.log(`VITE_CONTENTFUL_ACCESS_TOKEN=${apiKey.accessToken}`)
    
    return {
      spaceId: config.activeSpaceId,
      accessToken: apiKey.accessToken
    }
  } catch (error) {
    console.error('Error creating API key:', error)
    process.exit(1)
  }
}

createApiKey()