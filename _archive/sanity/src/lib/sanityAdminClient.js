/**
 * Sanity Admin Client
 * 
 * This client is for admin/write operations and preview functionality.
 * It NEVER uses CDN to ensure fresh data and successful writes.
 */

import { createClient } from '@sanity/client'
import { getClientConfig } from '../config/sanity.config'

// Admin client - no CDN, requires token for write operations
export const sanityAdminClient = createClient({
  ...getClientConfig('admin'),
  token: import.meta.env.VITE_SANITY_API_TOKEN || process.env.SANITY_API_TOKEN
})

// Preview client - no CDN, draft perspective
export const sanityPreviewClient = createClient(getClientConfig('preview'))

/**
 * Write operations (requires token)
 */
export async function createDocument(doc) {
  try {
    const result = await sanityAdminClient.create(doc)
    console.log('Document created:', result._id)
    return result
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

export async function updateDocument(docId, updates) {
  try {
    const result = await sanityAdminClient
      .patch(docId)
      .set(updates)
      .commit()
    console.log('Document updated:', docId)
    return result
  } catch (error) {
    console.error('Error updating document:', error)
    throw error
  }
}

export async function deleteDocument(docId) {
  try {
    const result = await sanityAdminClient.delete(docId)
    console.log('Document deleted:', docId)
    return result
  } catch (error) {
    console.error('Error deleting document:', error)
    throw error
  }
}

/**
 * Upload asset (image/file)
 */
export async function uploadAsset(file, type = 'image') {
  try {
    const asset = await sanityAdminClient.assets.upload(type, file)
    console.log('Asset uploaded:', asset._id)
    return asset
  } catch (error) {
    console.error('Error uploading asset:', error)
    throw error
  }
}

/**
 * Preview functions
 */
export async function fetchDraftDocument(docId) {
  try {
    // Fetch both published and draft versions
    const [published, draft] = await Promise.all([
      sanityAdminClient.fetch(`*[_id == $id][0]`, { id: docId }),
      sanityAdminClient.fetch(`*[_id == $draftId][0]`, { draftId: `drafts.${docId}` })
    ])
    
    // Return draft if exists, otherwise published
    return draft || published
  } catch (error) {
    console.error('Error fetching draft:', error)
    return null
  }
}

// Listen to real-time changes (for preview mode)
export function subscribeToDocument(docId, callback) {
  const query = `*[_id in [$id, $draftId]]`
  const params = { 
    id: docId, 
    draftId: `drafts.${docId}` 
  }
  
  return sanityPreviewClient
    .listen(query, params)
    .subscribe(callback)
}