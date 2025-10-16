// Sanity Management API - for admin operations
// This calls the Netlify Function which handles server-side operations

const API_BASE = '/.netlify/functions/sanity-weddings-list'

// Helper to get authentication token
async function getAuthToken() {
  // In a real app, this would get the JWT from Netlify Identity
  // For now, we'll assume the admin is already authenticated
  const user = window.netlifyIdentity?.currentUser()
  if (user) {
    return await user.jwt()
  }
  throw new Error('User not authenticated')
}

// Test connection to Sanity
export async function testConnection() {
  try {
    const response = await fetch(API_BASE, {
      headers: {
        'Authorization': `Bearer ${await getAuthToken()}`
      }
    })
    return response.ok
  } catch (error) {
    console.error('Connection test failed:', error)
    return false
  }
}

// Get all wedding blogs
export async function getWeddingBlogs() {
  try {
    const token = await getAuthToken()
    const response = await fetch(API_BASE, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch weddings: ${response.statusText}`)
    }
    
    const data = await response.json()
    
    // Transform Sanity data to match expected format
    return data.weddings.map(wedding => ({
      id: wedding.id,
      slug: wedding.slug,
      title: wedding.title,
      coupleName: wedding.title.replace("'s Wedding", "").replace(" Wedding", ""),
      weddingDate: wedding.date ? wedding.date.split('T')[0] : '',
      publishedDate: wedding.createdAt ? wedding.createdAt.split('T')[0] : '',
      location: wedding.venue || 'Rum River Barn',
      season: wedding.season || '',
      introText: wedding.excerpt || '',
      story: wedding.story || '',
      photoCredits: wedding.photographerCredit || '',
      featured: wedding.featured || false,
      published: wedding.published !== false, // Default to true
      featuredImageUrl: wedding.featuredImage || '',
      coverImageUrl: wedding.featuredImage || '', // Use featured image as cover for now
      heroImageUrl: wedding.featuredImage || '',
      photoUrls: wedding.gallery?.map(img => img.url) || [],
      guestCount: null, // Not in current Sanity schema
      testimonial: '', // Not in current Sanity schema
      vendors: {}, // Not in current Sanity schema
      tags: [], // Not in current Sanity schema
      version: 1 // Sanity handles versioning differently
    }))
  } catch (error) {
    console.error('Error fetching wedding blogs:', error)
    throw error
  }
}

// Create new wedding blog
export async function createWeddingBlog(weddingData) {
  try {
    const token = await getAuthToken()
    
    // Transform data to Sanity format
    const sanityData = {
      title: weddingData.title,
      slug: weddingData.slug,
      date: weddingData.weddingDate ? new Date(weddingData.weddingDate).toISOString() : new Date().toISOString(),
      season: weddingData.season || '',
      venue: weddingData.location || 'Rum River Barn',
      excerpt: weddingData.introText || '',
      story: weddingData.story || '',
      photographerCredit: weddingData.photoCredits || '',
      featured: weddingData.featured || false,
      published: true
    }
    
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sanityData)
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.details || error.error || 'Failed to create wedding')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error creating wedding blog:', error)
    throw error
  }
}

// Update existing wedding blog
export async function updateWeddingBlog(id, version, weddingData) {
  try {
    const token = await getAuthToken()
    
    // Transform data to Sanity format
    const sanityData = {
      id: id,
      title: weddingData.title,
      slug: weddingData.slug,
      date: weddingData.weddingDate ? new Date(weddingData.weddingDate).toISOString() : new Date().toISOString(),
      season: weddingData.season || '',
      venue: weddingData.location || 'Rum River Barn',
      excerpt: weddingData.introText || '',
      story: weddingData.story || '',
      photographerCredit: weddingData.photoCredits || '',
      featured: weddingData.featured || false,
      published: true
    }
    
    const response = await fetch(API_BASE, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sanityData)
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.details || error.error || 'Failed to update wedding')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error updating wedding blog:', error)
    throw error
  }
}

// Delete wedding blog
export async function deleteWeddingBlog(id) {
  try {
    const token = await getAuthToken()
    
    const response = await fetch(API_BASE, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.details || error.error || 'Failed to delete wedding')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error deleting wedding blog:', error)
    throw error
  }
}

// Upload image (simplified for now - Sanity handles images differently)
export async function uploadImage(file, title) {
  // This is a placeholder - in Sanity, images are typically uploaded
  // when creating/updating documents, not separately
  return {
    id: `temp-${Date.now()}`,
    url: URL.createObjectURL(file)
  }
}

// Update wedding images (simplified for now)
export async function updateWeddingImages(id, version, imageAssets) {
  // This would need to be implemented to handle Sanity image references
  // For now, we'll handle images during the main update process
  console.log('Image update not yet implemented for Sanity')
  return Promise.resolve()
}