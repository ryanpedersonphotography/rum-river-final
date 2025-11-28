import { localHomePageContent } from '../lib/localContent.js'

/**
 * Hook to fetch HomePage content
 * Returns static local content immediately for best performance
 */
export function useContentfulHomePage() {
  return { content: localHomePageContent, loading: false, error: null }
}

export default useContentfulHomePage