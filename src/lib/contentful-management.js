// Simple Contentful Management API client for browser use

const MANAGEMENT_TOKEN = 'mrx3-UU2GRDcxHOiWyFcAFBu6ZuUyFqZc5GSuwPClpE'
const SPACE_ID = 'qqjgd2e69j47'
const BASE_URL = `https://api.contentful.com/spaces/${SPACE_ID}/environments/master`

async function managementFetch(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      ...options.headers
    }
  })
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(error.message || `HTTP ${response.status}`)
  }
  
  return response.json()
}

export async function getWeddingBlogs() {
  const data = await managementFetch('/entries?content_type=weddingBlog')
  return data.items.map(item => ({
    id: item.sys.id,
    version: item.sys.version,
    published: item.sys.publishedVersion !== undefined,
    ...Object.fromEntries(
      Object.entries(item.fields).map(([key, value]) => [key, value['en-US']])
    )
  }))
}

export async function createWeddingBlog(fields) {
  // Format fields for Contentful
  const formattedFields = Object.fromEntries(
    Object.entries(fields)
      .filter(([_, value]) => value !== undefined && value !== '')
      .map(([key, value]) => [key, { 'en-US': value }])
  )
  
  const data = await managementFetch('/entries', {
    method: 'POST',
    headers: {
      'X-Contentful-Content-Type': 'weddingBlog'
    },
    body: JSON.stringify({ fields: formattedFields })
  })
  
  // Publish the entry
  await managementFetch(`/entries/${data.sys.id}/published`, {
    method: 'PUT',
    headers: {
      'X-Contentful-Version': data.sys.version
    }
  })
  
  return {
    id: data.sys.id,
    ...fields
  }
}

export async function updateWeddingBlog(id, version, fields) {
  // Format fields for Contentful
  const formattedFields = Object.fromEntries(
    Object.entries(fields)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, { 'en-US': value }])
  )
  
  const data = await managementFetch(`/entries/${id}`, {
    method: 'PUT',
    headers: {
      'X-Contentful-Version': version
    },
    body: JSON.stringify({ fields: formattedFields })
  })
  
  // Publish the updated entry
  await managementFetch(`/entries/${id}/published`, {
    method: 'PUT',
    headers: {
      'X-Contentful-Version': data.sys.version
    }
  }).catch(() => {
    // If already published, might fail - that's ok
  })
  
  return {
    id: data.sys.id,
    ...fields
  }
}

export async function deleteWeddingBlog(id) {
  // First unpublish if published
  await managementFetch(`/entries/${id}/published`, {
    method: 'DELETE'
  }).catch(() => {
    // Might not be published, that's ok
  })
  
  // Then delete the entry
  await managementFetch(`/entries/${id}`, {
    method: 'DELETE'
  })
  
  return true
}

export async function testConnection() {
  try {
    await managementFetch('/content_types/weddingBlog')
    return true
  } catch (error) {
    console.error('Connection test failed:', error)
    return false
  }
}

// Upload an image to Contentful
export async function uploadImage(file, title) {
  try {
    // First create an upload
    const formData = new FormData()
    formData.append('file', file)
    
    const uploadResponse = await fetch(`https://upload.contentful.com/spaces/${SPACE_ID}/uploads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MANAGEMENT_TOKEN}`
      },
      body: formData
    })
    
    if (!uploadResponse.ok) {
      throw new Error('Failed to upload file')
    }
    
    const upload = await uploadResponse.json()
    
    // Create an asset with the upload
    const assetData = {
      fields: {
        title: { 'en-US': title },
        file: {
          'en-US': {
            contentType: file.type,
            fileName: file.name,
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
    }
    
    const asset = await managementFetch('/assets', {
      method: 'POST',
      body: JSON.stringify(assetData)
    })
    
    // Process the asset
    await managementFetch(`/assets/${asset.sys.id}/files/en-US/process`, {
      method: 'PUT',
      headers: {
        'X-Contentful-Version': asset.sys.version
      }
    })
    
    // Wait for processing to complete
    let processed = false
    let attempts = 0
    while (!processed && attempts < 30) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const checkAsset = await managementFetch(`/assets/${asset.sys.id}`)
      if (checkAsset.fields.file['en-US'].url) {
        processed = true
        
        // Publish the asset
        await managementFetch(`/assets/${asset.sys.id}/published`, {
          method: 'PUT',
          headers: {
            'X-Contentful-Version': checkAsset.sys.version
          }
        })
        
        return {
          id: checkAsset.sys.id,
          url: checkAsset.fields.file['en-US'].url
        }
      }
      attempts++
    }
    
    throw new Error('Asset processing timed out')
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// Update wedding with image references
export async function updateWeddingImages(weddingId, version, imageAssetIds) {
  const updates = {}
  
  if (imageAssetIds.heroImage) {
    updates.heroImage = { 
      'en-US': { 
        sys: { type: 'Link', linkType: 'Asset', id: imageAssetIds.heroImage } 
      } 
    }
  }
  
  if (imageAssetIds.coverImage) {
    updates.coverImage = { 
      'en-US': { 
        sys: { type: 'Link', linkType: 'Asset', id: imageAssetIds.coverImage } 
      } 
    }
  }
  
  if (imageAssetIds.featuredImage) {
    updates.featuredImage = { 
      'en-US': { 
        sys: { type: 'Link', linkType: 'Asset', id: imageAssetIds.featuredImage } 
      } 
    }
  }
  
  if (imageAssetIds.photos && imageAssetIds.photos.length > 0) {
    updates.photos = { 
      'en-US': imageAssetIds.photos.map(id => ({
        sys: { type: 'Link', linkType: 'Asset', id }
      }))
    }
  }
  
  if (Object.keys(updates).length === 0) return null
  
  // Get current entry
  const entry = await managementFetch(`/entries/${weddingId}`)
  
  // Merge updates with existing fields
  const mergedFields = { ...entry.fields, ...updates }
  
  // Update the entry
  const updated = await managementFetch(`/entries/${weddingId}`, {
    method: 'PUT',
    headers: {
      'X-Contentful-Version': version
    },
    body: JSON.stringify({ fields: mergedFields })
  })
  
  // Publish the updated entry
  await managementFetch(`/entries/${weddingId}/published`, {
    method: 'PUT',
    headers: {
      'X-Contentful-Version': updated.sys.version
    }
  }).catch(() => {
    // Already published, that's ok
  })
  
  return updated
}