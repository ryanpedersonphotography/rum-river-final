/**
 * Sanity Image URL Builder Utilities
 * 
 * These utilities help convert Sanity image references to optimized CDN URLs
 * for use in the frontend React components.
 */

// Sanity project configuration
const SANITY_PROJECT_ID = 'vicw6cgb'
const SANITY_DATASET = 'production'

/**
 * Build a Sanity CDN URL from an image asset reference
 * @param {Object|string} image - Sanity image object or asset reference
 * @param {Object} options - Image transformation options
 * @returns {string} Optimized CDN URL
 */
export function buildSanityImageUrl(image, options = {}) {
  if (!image) return null
  
  // Handle different image formats
  let assetRef
  if (typeof image === 'string') {
    assetRef = image
  } else if (image.asset?._ref) {
    assetRef = image.asset._ref
  } else if (image._ref) {
    assetRef = image._ref
  } else {
    console.warn('Invalid image object:', image)
    return null
  }
  
  // Default options
  const {
    width,
    height, 
    quality = 85,
    format = 'webp',
    fit = 'crop',
    auto = 'format'
  } = options
  
  // Extract the actual file reference
  const imageId = assetRef.replace('image-', '').replace(/-(\w+)$/, '.$1')
  
  // Build the base URL
  let url = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${imageId}`
  
  // Build query parameters
  const params = []
  
  if (width) params.push(`w=${width}`)
  if (height) params.push(`h=${height}`)
  if (quality) params.push(`q=${quality}`)
  if (format) params.push(`fm=${format}`)
  if (fit) params.push(`fit=${fit}`)
  if (auto) params.push(`auto=${auto}`)
  
  // Add parameters to URL
  if (params.length > 0) {
    url += '?' + params.join('&')
  }
  
  return url
}

/**
 * Get responsive image URLs for different screen sizes
 * @param {Object} image - Sanity image object
 * @param {Object} options - Base options for all sizes
 * @returns {Object} Object with URLs for different screen sizes
 */
export function getResponsiveImageUrls(image, options = {}) {
  if (!image) return {}
  
  const baseOptions = {
    quality: 85,
    format: 'webp',
    ...options
  }
  
  return {
    mobile: buildSanityImageUrl(image, { ...baseOptions, width: 640 }),
    tablet: buildSanityImageUrl(image, { ...baseOptions, width: 1024 }),
    desktop: buildSanityImageUrl(image, { ...baseOptions, width: 1920 }),
    original: buildSanityImageUrl(image, baseOptions)
  }
}

/**
 * Get optimized hero image URLs
 * @param {Object} image - Sanity image object
 * @returns {Object} Optimized URLs for hero sections
 */
export function getHeroImageUrls(image) {
  return getResponsiveImageUrls(image, {
    quality: 90,
    format: 'webp',
    fit: 'crop'
  })
}

/**
 * Get gallery thumbnail and full size URLs
 * @param {Object} image - Sanity image object
 * @returns {Object} Thumbnail and full URLs
 */
export function getGalleryImageUrls(image) {
  if (!image) return {}
  
  return {
    thumbnail: buildSanityImageUrl(image, { 
      width: 400, 
      height: 300, 
      fit: 'crop',
      quality: 80,
      format: 'webp'
    }),
    medium: buildSanityImageUrl(image, { 
      width: 800, 
      height: 600, 
      fit: 'crop',
      quality: 85,
      format: 'webp'
    }),
    large: buildSanityImageUrl(image, { 
      width: 1600, 
      height: 1200, 
      fit: 'crop',
      quality: 90,
      format: 'webp'
    }),
    original: buildSanityImageUrl(image)
  }
}

/**
 * Extract alt text from Sanity image object
 * @param {Object} image - Sanity image object
 * @param {string} fallback - Fallback alt text
 * @returns {string} Alt text for accessibility
 */
export function getImageAlt(image, fallback = 'Rum River Barn image') {
  if (!image) return fallback
  
  return image.alt || image.caption || fallback
}

/**
 * Create a complete image object for React components
 * @param {Object} image - Sanity image object
 * @param {Object} options - Image options
 * @returns {Object} Complete image data for components
 */
export function createImageData(image, options = {}) {
  if (!image) return null
  
  const {
    sizes = 'default',
    ...imageOptions
  } = options
  
  let urls
  
  switch (sizes) {
    case 'hero':
      urls = getHeroImageUrls(image)
      break
    case 'gallery':
      urls = getGalleryImageUrls(image)
      break
    case 'responsive':
      urls = getResponsiveImageUrls(image, imageOptions)
      break
    default:
      urls = {
        default: buildSanityImageUrl(image, imageOptions)
      }
  }
  
  return {
    urls,
    alt: getImageAlt(image),
    caption: image.caption,
    credit: image.credit
  }
}

/**
 * React hook for Sanity images (if using hooks)
 * @param {Object} image - Sanity image object
 * @param {Object} options - Image options
 * @returns {Object} Image data and loading state
 */
export function useSanityImage(image, options = {}) {
  const imageData = createImageData(image, options)
  
  return {
    imageData,
    isLoading: !imageData,
    error: image && !imageData ? 'Failed to process image' : null
  }
}