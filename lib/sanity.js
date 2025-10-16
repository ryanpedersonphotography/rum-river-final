import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create Sanity client
export const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // Set to false if you need fresh data
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
})

// Helper for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Wedding blog queries
export const queries = {
  // Get all wedding blogs
  allWeddings: `*[_type == "weddingBlog"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    season,
    venue,
    excerpt,
    story,
    photographerCredit,
    featuredImage,
    gallery,
    featured,
    published,
    _createdAt,
    _updatedAt
  }`,
  
  // Get published wedding blogs
  publishedWeddings: `*[_type == "weddingBlog" && published == true] | order(date desc) {
    _id,
    title,
    slug,
    date,
    season,
    venue,
    excerpt,
    story,
    photographerCredit,
    featuredImage,
    gallery,
    featured,
    _createdAt,
    _updatedAt
  }`,
  
  // Get featured weddings
  featuredWeddings: `*[_type == "weddingBlog" && featured == true && published == true] | order(date desc) {
    _id,
    title,
    slug,
    date,
    season,
    venue,
    excerpt,
    story,
    photographerCredit,
    featuredImage,
    gallery,
    _createdAt,
    _updatedAt
  }`,
  
  // Get wedding by slug
  weddingBySlug: (slug) => `*[_type == "weddingBlog" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    date,
    season,
    venue,
    excerpt,
    story,
    photographerCredit,
    featuredImage,
    gallery,
    featured,
    published,
    _createdAt,
    _updatedAt
  }`
}

// Helper functions for common operations
export const sanityHelpers = {
  // Fetch all weddings
  async getAllWeddings() {
    return client.fetch(queries.allWeddings)
  },
  
  // Fetch published weddings
  async getPublishedWeddings() {
    return client.fetch(queries.publishedWeddings)
  },
  
  // Fetch featured weddings
  async getFeaturedWeddings() {
    return client.fetch(queries.featuredWeddings)
  },
  
  // Fetch wedding by slug
  async getWeddingBySlug(slug) {
    return client.fetch(queries.weddingBySlug(slug))
  },
  
  // Create a new wedding blog
  async createWedding(weddingData) {
    return client.create({
      _type: 'weddingBlog',
      ...weddingData
    })
  },
  
  // Update a wedding blog
  async updateWedding(id, updates) {
    return client.patch(id).set(updates).commit()
  },
  
  // Delete a wedding blog
  async deleteWedding(id) {
    return client.delete(id)
  },
  
  // Upload an image
  async uploadImage(file) {
    return client.assets.upload('image', file)
  }
}