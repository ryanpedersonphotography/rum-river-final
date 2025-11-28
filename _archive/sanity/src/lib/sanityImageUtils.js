import { getImageUrl } from './sanityClient'

/**
 * Advanced image utilities for Sanity images
 */

// Standard image sizes for the website
export const IMAGE_SIZES = {
  hero: { width: 1920, height: 1080 },
  feature: { width: 800, height: 500 },
  gallery: { width: 800, height: 800 },
  thumbnail: { width: 200, height: 150 },
  avatar: { width: 100, height: 100 },
  og: { width: 1200, height: 630 }
}

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1440
}

/**
 * Generate responsive image URLs for different screen sizes
 */
export function getResponsiveImageUrls(image, baseSize = 'feature') {
  if (!image) return null

  const { width, height } = IMAGE_SIZES[baseSize] || IMAGE_SIZES.feature
  
  return {
    mobile: getImageUrl(image, { 
      width: Math.round(width * 0.5), 
      height: Math.round(height * 0.5),
      quality: 75 
    }),
    tablet: getImageUrl(image, { 
      width: Math.round(width * 0.75), 
      height: Math.round(height * 0.75),
      quality: 80 
    }),
    desktop: getImageUrl(image, { 
      width, 
      height,
      quality: 85 
    }),
    large: getImageUrl(image, { 
      width: Math.round(width * 1.5), 
      height: Math.round(height * 1.5),
      quality: 90 
    })
  }
}

/**
 * Generate srcSet string for responsive images
 */
export function generateSrcSet(image, baseSize = 'feature') {
  const urls = getResponsiveImageUrls(image, baseSize)
  if (!urls) return ''

  return [
    `${urls.mobile} ${BREAKPOINTS.mobile}w`,
    `${urls.tablet} ${BREAKPOINTS.tablet}w`,
    `${urls.desktop} ${BREAKPOINTS.desktop}w`,
    `${urls.large} ${BREAKPOINTS.large}w`
  ].join(', ')
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(customSizes) {
  const defaultSizes = [
    '(max-width: 480px) 100vw',
    '(max-width: 768px) 90vw',
    '(max-width: 1024px) 80vw',
    '70vw'
  ]

  return (customSizes || defaultSizes).join(', ')
}

/**
 * Get optimized image URL with fallback
 */
export function getOptimizedImageUrl(image, options = {}) {
  const {
    size = 'feature',
    quality = 85,
    format = 'webp',
    fallbackFormat = 'jpg'
  } = options

  if (!image) return null

  const { width, height } = IMAGE_SIZES[size] || IMAGE_SIZES.feature

  try {
    return getImageUrl(image, {
      width,
      height,
      quality,
      format
    })
  } catch (error) {
    console.warn('Failed to generate WebP image, falling back to JPEG:', error)
    return getImageUrl(image, {
      width,
      height,
      quality,
      format: fallbackFormat
    })
  }
}

/**
 * Smart crop for different aspect ratios
 */
export function getSmartCropUrl(image, aspectRatio = '16:9', options = {}) {
  if (!image) return null

  const { quality = 85, width = 800 } = options
  
  // Calculate height based on aspect ratio
  const [w, h] = aspectRatio.split(':').map(Number)
  const height = Math.round((width * h) / w)

  return getImageUrl(image, {
    width,
    height,
    quality,
    fit: 'crop',
    crop: 'smart'
  })
}

/**
 * Generate blur placeholder for progressive loading
 */
export function getBlurPlaceholder(image) {
  if (!image) return null

  return getImageUrl(image, {
    width: 20,
    height: 20,
    quality: 20,
    blur: 20
  })
}

/**
 * Enhanced Image component with progressive loading
 */
export function SanityImage({ 
  image, 
  alt, 
  size = 'feature',
  className = '',
  loading = 'lazy',
  showPlaceholder = true,
  onLoad,
  onError,
  ...props 
}) {
  if (!image) {
    return (
      <div 
        className={`image-placeholder ${className}`}
        {...props}
      >
        No image available
      </div>
    )
  }

  const primaryUrl = getOptimizedImageUrl(image, { size })
  const blurUrl = showPlaceholder ? getBlurPlaceholder(image) : null
  const srcSet = generateSrcSet(image, size)
  const sizes = generateSizes()

  return (
    <picture className={className}>
      {/* WebP source */}
      <source 
        srcSet={srcSet.replace(/\.(jpg|jpeg|png)/g, '.webp')}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback */}
      <img
        src={primaryUrl}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt || image.alt || ''}
        loading={loading}
        onLoad={onLoad}
        onError={onError}
        style={blurUrl ? {
          backgroundImage: `url(${blurUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
        {...props}
      />
    </picture>
  )
}

/**
 * Gallery image utilities
 */
export function prepareGalleryImages(images, options = {}) {
  if (!images || !Array.isArray(images)) return []

  const { maxImages = 50, size = 'gallery' } = options

  return images.slice(0, maxImages).map((image, index) => ({
    id: image._key || index,
    src: getOptimizedImageUrl(image, { size }),
    thumb: getOptimizedImageUrl(image, { size: 'thumbnail' }),
    alt: image.alt || image.caption || `Gallery image ${index + 1}`,
    caption: image.caption,
    width: IMAGE_SIZES[size].width,
    height: IMAGE_SIZES[size].height
  }))
}

/**
 * Image SEO utilities
 */
export function generateImageMeta(image, options = {}) {
  if (!image) return {}

  const { size = 'og', title, description } = options
  const imageUrl = getOptimizedImageUrl(image, { size })

  return {
    'og:image': imageUrl,
    'og:image:width': IMAGE_SIZES[size].width,
    'og:image:height': IMAGE_SIZES[size].height,
    'og:image:alt': image.alt || title || 'Rum River Wedding Barn',
    'twitter:image': imageUrl,
    'twitter:image:alt': image.alt || title || 'Rum River Wedding Barn'
  }
}

/**
 * Performance monitoring for images
 */
export function trackImagePerformance(image, startTime) {
  if (!image || typeof performance === 'undefined') return

  const loadTime = performance.now() - startTime
  
  // Log slow loading images
  if (loadTime > 2000) {
    console.warn(`Slow image load: ${loadTime}ms for`, image)
  }

  // Track to analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'image_load', {
      event_category: 'Performance',
      event_label: 'Image Load Time',
      value: Math.round(loadTime)
    })
  }
}