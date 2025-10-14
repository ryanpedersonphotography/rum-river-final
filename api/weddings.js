// This is a serverless function for Netlify Functions
// It handles wedding blog management operations

import contentfulManagement from 'contentful-management'

const MANAGEMENT_TOKEN = process.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN
const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID

export async function handler(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  }

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  try {
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN
    })
    
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment('master')
    
    // Parse the action from the query or body
    const { action, data } = event.body ? JSON.parse(event.body) : { action: 'list' }
    
    switch (action) {
      case 'list':
        const entries = await environment.getEntries({
          content_type: 'weddingBlog'
        })
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            weddings: entries.items.map(item => ({
              id: item.sys.id,
              ...item.fields
            }))
          })
        }
        
      case 'create':
        const newEntry = await environment.createEntry('weddingBlog', {
          fields: data
        })
        await newEntry.publish()
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            wedding: {
              id: newEntry.sys.id,
              ...newEntry.fields
            }
          })
        }
        
      case 'update':
        const entry = await environment.getEntry(data.id)
        Object.assign(entry.fields, data.fields)
        await entry.update()
        await entry.publish()
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            wedding: {
              id: entry.sys.id,
              ...entry.fields
            }
          })
        }
        
      case 'delete':
        const deleteEntry = await environment.getEntry(data.id)
        if (deleteEntry.isPublished()) {
          await deleteEntry.unpublish()
        }
        await deleteEntry.delete()
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true
          })
        }
        
      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            error: 'Invalid action'
          })
        }
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    }
  }
}