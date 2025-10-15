// JSON File-Based Storage API client
// Replaces Contentful - saves $300/month!

const API_BASE = import.meta.env.DEV
  ? 'http://localhost:3001/api'
  : '/.netlify/functions/json-storage'

async function jsonFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(error.error || `HTTP ${response.status}`)
  }

  return response.json()
}

export async function getWeddingBlogs() {
  return await jsonFetch('/weddings')
}

export async function createWeddingBlog(fields) {
  return await jsonFetch('/weddings', {
    method: 'POST',
    body: JSON.stringify(fields)
  })
}

export async function updateWeddingBlog(id, version, fields) {
  return await jsonFetch(`/weddings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(fields)
  })
}

export async function deleteWeddingBlog(id) {
  await jsonFetch(`/weddings/${id}`, {
    method: 'DELETE'
  })
  return true
}

export async function testConnection() {
  try {
    await jsonFetch('/weddings')
    return true
  } catch (error) {
    console.error('Connection test failed:', error)
    return false
  }
}

// Image upload - now just stores URLs or base64
export async function uploadImage(file, title) {
  try {
    // For now, create a data URL (you can later add image hosting)
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        resolve({
          id: Date.now().toString(),
          url: e.target.result,
          title: title
        })
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// Update wedding with image data
export async function updateWeddingImages(weddingId, version, imageData) {
  const updates = {}

  if (imageData.heroImage) {
    updates.heroImageUrl = imageData.heroImage
  }

  if (imageData.coverImage) {
    updates.coverImageUrl = imageData.coverImage
  }

  if (imageData.featuredImage) {
    updates.featuredImageUrl = imageData.featuredImage
  }

  if (imageData.photos && imageData.photos.length > 0) {
    updates.photoUrls = imageData.photos
  }

  if (Object.keys(updates).length === 0) return null

  return await jsonFetch(`/weddings/${weddingId}`, {
    method: 'PUT',
    body: JSON.stringify(updates)
  })
}

// Venue management
export async function getVenues() {
  return await jsonFetch('/venues')
}

export async function updateVenue(id, fields) {
  return await jsonFetch(`/venues/${id}`, {
    method: 'PUT',
    body: JSON.stringify(fields)
  })
}
