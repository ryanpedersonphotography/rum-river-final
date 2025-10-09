import { useState, useEffect } from 'react'

/**
 * Custom hook to fetch and manage page content from CMS
 * @param {string} pageName - The name of the page content file (e.g., 'home', 'property')
 * @returns {Object|null} The page content object or null if loading
 */
export function usePageContent(pageName) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(`/content/pages/${pageName}.json`)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch content for ${pageName}`)
        }
        
        const data = await response.json()
        setContent(data)
      } catch (err) {
        console.error(`Error fetching page content for ${pageName}:`, err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (pageName) {
      fetchContent()
    }
  }, [pageName])

  return { content, loading, error }
}

export default usePageContent