import { useState, useEffect } from 'react'

// JSON API configuration
const API_BASE_URL = 'http://localhost:3001'

/**
 * Hook to fetch wedding blog posts from Contentful
 * @param {Object} options - Query options
 * @param {number} options.limit - Number of posts to fetch
 * @param {boolean} options.featured - Only fetch featured posts
 * @param {string} options.slug - Fetch specific post by slug
 * @returns {Object} Wedding blogs data, loading state, and error
 */
export function useWeddingBlogs(options = {}) {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeddingBlogs = async () => {
      if (!client) {
        // Use fallback data from existing realWeddings
        const { realWeddings } = await import('../data/realWeddings')
        
        // Transform existing data to match new structure
        const transformedBlogs = realWeddings
          .slice(0, options.limit || realWeddings.length)
          .map(wedding => ({
            slug: wedding.slug,
            title: `${wedding.coupleName}'s Wedding`,
            coupleName: wedding.coupleName,
            weddingDate: new Date().toISOString(),
            publishedDate: new Date().toISOString(),
            heroImage: { url: wedding.heroImage },
            coverImage: { url: wedding.coverImage },
            featuredImage: { url: wedding.coverImage },
            location: wedding.location,
            season: wedding.date,
            introText: wedding.intro,
            photos: wedding.galleries?.[0]?.photos?.slice(0, 20).map(p => ({ url: p.src })) || [],
            featured: false,
            photoCredits: wedding.photographer,
            vendors: {}
          }))
        
        if (options.slug) {
          const blog = transformedBlogs.find(b => b.slug === options.slug)
          setBlogs(blog ? [blog] : [])
        } else {
          setBlogs(options.featured 
            ? transformedBlogs.slice(0, 6)
            : transformedBlogs
          )
        }
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // Build query
        const query = {
          content_type: 'weddingBlog',
          include: 2, // Include linked assets
          order: '-fields.publishedDate'
        }

        if (options.limit) {
          query.limit = options.limit
        }

        if (options.featured) {
          query['fields.featured'] = true
        }

        if (options.slug) {
          query['fields.slug'] = options.slug
          query.limit = 1
        }

        const response = await client.getEntries(query)
        
        // Transform Contentful response
        const transformedBlogs = response.items.map(item => {
          const fields = item.fields
          return {
            id: item.sys.id,
            slug: fields.slug,
            title: fields.title,
            coupleName: fields.coupleName,
            weddingDate: fields.weddingDate,
            publishedDate: fields.publishedDate,
            heroImage: {
              url: fields.heroImage?.fields?.file?.url,
              title: fields.heroImage?.fields?.title
            },
            coverImage: {
              url: fields.coverImage?.fields?.file?.url,
              title: fields.coverImage?.fields?.title
            },
            featuredImage: {
              url: fields.featuredImage?.fields?.file?.url,
              title: fields.featuredImage?.fields?.title,
              caption: fields.featuredImageCaption
            },
            location: fields.location,
            season: fields.season,
            introText: fields.introText,
            storyContent: fields.storyContent,
            testimonial: fields.testimonial,
            photos: fields.photos?.map(photo => ({
              url: photo.fields?.file?.url,
              title: photo.fields?.title
            })) || [],
            featured: fields.featured || false,
            photoCredits: fields.photoCredits,
            guestCount: fields.guestCount,
            tags: fields.tags || [],
            vendors: fields.vendors || {},
            seoTitle: fields.seoTitle || fields.title,
            seoDescription: fields.seoDescription || fields.introText
          }
        })

        setBlogs(transformedBlogs)
      } catch (err) {
        console.error('Error fetching wedding blogs:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeddingBlogs()
  }, [options.limit, options.featured, options.slug])

  return { blogs, loading, error }
}

/**
 * Hook to fetch a single wedding blog by slug
 */
export function useWeddingBlog(slug) {
  const result = useWeddingBlogs({ slug })
  return {
    blog: result.blogs[0] || null,
    loading: result.loading,
    error: result.error
  }
}

/**
 * Hook to fetch featured weddings for homepage
 */
export function useFeaturedWeddings(limit = 6) {
  return useWeddingBlogs({ featured: true, limit })
}

export default useWeddingBlogs