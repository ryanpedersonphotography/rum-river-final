/**
 * Centralized Sanity Configuration
 * 
 * CDN Usage Guidelines:
 * - useCdn: true  → Production reads (frontend, public data)
 * - useCdn: false → Development, previews, or when fresh data is critical
 * 
 * The CDN has a ~1-60 second cache delay but provides global edge caching
 */

const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'vicw6cgb',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  
  // CDN configuration based on environment and use case
  cdn: {
    // Frontend read operations - always use CDN in production
    frontend: isProduction ? true : false,
    
    // Preview/draft content - never use CDN
    preview: false,
    
    // Admin/write operations - never use CDN
    admin: false,
    
    // Development - optional CDN (false for fresh data during dev)
    development: false
  }
}

/**
 * Get Sanity client configuration based on context
 * @param {'frontend' | 'preview' | 'admin'} context - The usage context
 * @returns {Object} Sanity client configuration
 */
export function getClientConfig(context = 'frontend') {
  const useCdn = context === 'frontend' 
    ? sanityConfig.cdn.frontend
    : context === 'preview' 
    ? sanityConfig.cdn.preview
    : sanityConfig.cdn.admin

  return {
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    apiVersion: sanityConfig.apiVersion,
    useCdn,
    // Perspective for draft content
    perspective: context === 'preview' ? 'previewDrafts' : 'published'
  }
}

/**
 * CDN Usage Reference:
 * 
 * ✅ Use CDN (useCdn: true):
 * - Public website content
 * - Blog posts and articles  
 * - Image galleries
 * - Any read-only operations in production
 * 
 * ❌ Don't use CDN (useCdn: false):
 * - Content preview/drafts
 * - Admin operations
 * - Write operations
 * - Real-time data requirements
 * - Development (optional, but recommended false)
 */