import { useState, useEffect } from 'react'
import { getHomePageContent } from '../lib/contentful'
import { localHomePageContent } from '../lib/localContent.js'

/**
 * Hook to fetch HomePage content from Contentful
 * Falls back to local content if Contentful is not configured or unavailable
 */
export function useContentfulHomePage() {
  // Start with local content immediately to avoid flash
  const [content, setContent] = useState(localHomePageContent)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Don't show loading state - we already have content
        setError(null)
        
        // Try Contentful in background
        const contentfulData = await getHomePageContent()
        
        if (contentfulData) {
          setContent(contentfulData)
        }
        // If no Contentful data, we're already showing local content
      } catch (err) {
        console.error('Error fetching HomePage content:', err)
        // Don't set error - we have fallback content
        // setError(err.message)
      }
    }

    fetchContent()
  }, [])

  return { content, loading, error }
}

export default useContentfulHomePage