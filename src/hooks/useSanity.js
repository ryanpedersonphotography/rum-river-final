import { useState, useEffect, useCallback, useRef } from 'react'
import { sanityClient } from '../lib/sanityClient'

/**
 * Custom hooks for Sanity CMS integration
 */

/**
 * Generic hook for fetching Sanity data with caching and error handling
 */
export function useSanityFetch(query, params = {}, options = {}) {
  const {
    initialData = null,
    revalidateOnFocus = false,
    revalidateOnReconnect = true,
    refreshInterval = 0,
    enabled = true
  } = options

  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(enabled)
  const [error, setError] = useState(null)
  const abortControllerRef = useRef(null)
  const cacheRef = useRef(new Map())

  // Generate cache key from query and params
  const cacheKey = JSON.stringify({ query, params })

  const fetchData = useCallback(async (useCache = true) => {
    if (!enabled) return

    // Check cache first
    if (useCache && cacheRef.current.has(cacheKey)) {
      const cached = cacheRef.current.get(cacheKey)
      const isExpired = Date.now() - cached.timestamp > 300000 // 5 minutes
      
      if (!isExpired) {
        setData(cached.data)
        setLoading(false)
        return cached.data
      }
    }

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController()

    try {
      setLoading(true)
      setError(null)

      const result = await sanityClient.fetch(query, params, {
        signal: abortControllerRef.current.signal
      })

      // Cache the result
      cacheRef.current.set(cacheKey, {
        data: result,
        timestamp: Date.now()
      })

      setData(result)
      return result
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Sanity fetch error:', err)
        setError(err.message || 'Failed to fetch data')
      }
      return null
    } finally {
      setLoading(false)
      abortControllerRef.current = null
    }
  }, [query, cacheKey, enabled])

  // Initial fetch
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Refresh interval
  useEffect(() => {
    if (!refreshInterval || !enabled) return

    const interval = setInterval(() => {
      fetchData(false) // Don't use cache for refresh
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [refreshInterval, fetchData, enabled])

  // Revalidate on focus
  useEffect(() => {
    if (!revalidateOnFocus) return

    const handleFocus = () => fetchData(false)
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [revalidateOnFocus, fetchData])

  // Revalidate on reconnect
  useEffect(() => {
    if (!revalidateOnReconnect) return

    const handleOnline = () => fetchData(false)
    window.addEventListener('online', handleOnline)
    return () => window.removeEventListener('online', handleOnline)
  }, [revalidateOnReconnect, fetchData])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(false),
    mutate: setData
  }
}

/**
 * Hook for fetching page data with fallback content
 */
export function usePage(slug, fallbackContent = null) {
  const query = `
    *[_type == "page" && slug.current == $slug][0] {
      title,
      slug,
      seo,
      contentBlocks[] {
        _type,
        _type == "heroBlock" => {
          scriptAccent,
          titleLine1,
          titleLine2,
          description,
          ctaText,
          ctaLink,
          scrollText,
          backgroundImage,
          showFloatingCta,
          floatingCtaText,
          floatingCtaIcon
        },
        _type == "venueDiscoveryBlock" => {
          scriptAccent,
          title,
          description,
          sectionStyle,
          venues[]-> {
            title,
            key,
            description,
            capacity,
            features,
            lighting,
            climate,
            images[] {
              ...,
              alt,
              caption
            },
            order
          }
        },
        _type == "featureBlocksBlock" => {
          scriptAccent,
          title,
          lead,
          sectionStyle,
          centerContent,
          blocks[]-> {
            number,
            title,
            lead,
            content,
            image,
            imageAlt,
            reverse,
            ctaButton,
            highlights,
            order
          }
        },
        _type == "galleryBlock" => {
          scriptAccent,
          title,
          lead,
          sectionStyle,
          galleryType,
          maxWeddings,
          ctaText,
          ctaLink,
          showCta,
          featuredWeddings[]-> {
            title,
            slug,
            coupleName,
            weddingDate,
            season,
            location,
            coverImage,
            gallery
          },
          customImages[] {
            ...,
            title,
            caption,
            link
          }
        },
        _type == "experienceBlock" => {
          scriptAccent,
          title,
          description,
          sectionStyle,
          layout,
          image,
          imageAlt,
          features[]-> {
            title,
            description,
            icon,
            iconColor,
            iconSize,
            order
          }
        },
        _type == "testimonialsBlock" => {
          scriptAccent,
          title,
          sectionStyle,
          maxTestimonials,
          showStarRating,
          starCount,
          layout,
          testimonials[]-> {
            quote,
            authorName,
            authorDetail,
            authorImage,
            rating,
            eventType
          }
        },
        _type == "formBlock" => {
          title,
          subtitle,
          description,
          formType,
          formName,
          submitText,
          loadingText,
          redirectPath,
          sectionStyle,
          lightTheme,
          showHeader,
          customFields
        }
      }
    }
  `

  const { data, loading, error, refetch } = useSanityFetch(query, { slug })

  return {
    page: data || fallbackContent,
    loading,
    error,
    refetch,
    isFromSanity: !!data
  }
}

/**
 * Hook for fetching venues with caching
 */
export function useVenues() {
  const query = `
    *[_type == "venue"] | order(order asc) {
      title,
      key,
      description,
      capacity,
      features,
      lighting,
      climate,
      images[] {
        ...,
        alt,
        caption
      },
      order,
      vrTourUrl,
      dimensions,
      pricing,
      availability
    }
  `

  return useSanityFetch(query, {}, {
    refreshInterval: 600000 // 10 minutes
  })
}

/**
 * Hook for fetching testimonials
 */
export function useTestimonials(limit = 10) {
  const query = `
    *[_type == "testimonial" && approved == true] | order(featured desc, eventDate desc) [0...$limit] {
      quote,
      authorName,
      authorDetail,
      authorImage,
      rating,
      eventType,
      featured,
      eventDate
    }
  `

  return useSanityFetch(query, { limit })
}

/**
 * Hook for fetching wedding blogs
 */
export function useWeddingBlogs(options = {}) {
  const {
    limit = 10,
    featured = false,
    published = true
  } = options

  const query = `
    *[_type == "weddingBlog" 
      ${published ? '&& published == true' : ''} 
      ${featured ? '&& featured == true' : ''}
    ] | order(publishedDate desc) [0...$limit] {
      title,
      slug,
      coupleName,
      weddingDate,
      publishedDate,
      season,
      location,
      excerpt,
      coverImage,
      featuredImage,
      gallery[0..4],
      featured,
      tags
    }
  `

  return useSanityFetch(query, { limit })
}

/**
 * Hook for fetching site settings
 */
export function useSiteSettings() {
  const query = `
    *[_type == "siteSettings" && _id == "site-settings"][0] {
      title,
      description,
      url,
      logo,
      favicon,
      defaultSeo,
      contactInfo,
      socialMedia
    }
  `

  return useSanityFetch(query, {}, {
    refreshInterval: 3600000 // 1 hour
  })
}

/**
 * Hook for real-time updates (requires live query support)
 */
export function useLiveQuery(query, params = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const subscription = sanityClient
      .listen(query, params)
      .subscribe({
        next: (update) => {
          setData(update.result)
          setLoading(false)
        },
        error: (err) => {
          console.error('Live query error:', err)
          setError(err.message)
          setLoading(false)
        }
      })

    return () => subscription.unsubscribe()
  }, [query, JSON.stringify(params)])

  return { data, loading, error }
}

/**
 * Hook for prefetching data
 */
export function usePrefetch() {
  const prefetchCache = useRef(new Map())

  const prefetch = useCallback(async (query, params = {}) => {
    const cacheKey = JSON.stringify({ query, params })
    
    if (prefetchCache.current.has(cacheKey)) {
      return prefetchCache.current.get(cacheKey)
    }

    try {
      const data = await sanityClient.fetch(query, params)
      prefetchCache.current.set(cacheKey, data)
      return data
    } catch (error) {
      console.error('Prefetch error:', error)
      return null
    }
  }, [])

  const getCached = useCallback((query, params = {}) => {
    const cacheKey = JSON.stringify({ query, params })
    return prefetchCache.current.get(cacheKey)
  }, [])

  return { prefetch, getCached }
}

/**
 * Hook for handling form submissions to Sanity (if using Sanity forms)
 */
export function useSanityForm() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const submitForm = useCallback(async (formData, formType = 'contact') => {
    setSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      // Create document in Sanity
      const result = await sanityClient.create({
        _type: 'formSubmission',
        formType,
        submittedAt: new Date().toISOString(),
        data: formData
      })

      setSuccess(true)
      return result
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Failed to submit form')
      return null
    } finally {
      setSubmitting(false)
    }
  }, [])

  const reset = useCallback(() => {
    setSubmitting(false)
    setSuccess(false)
    setError(null)
  }, [])

  return {
    submitForm,
    submitting,
    success,
    error,
    reset
  }
}