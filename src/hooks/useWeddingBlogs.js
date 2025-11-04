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
      // Always use fallback data from existing realWeddings (Contentful not configured)
      try {
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