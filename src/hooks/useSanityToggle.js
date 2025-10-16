import { useState, useEffect } from 'react'

/**
 * Hook to check if Sanity data should be used
 * Returns [useSanityData, setUseSanityData]
 */
export function useSanityToggle() {
  const [useSanityData, setUseSanityData] = useState(() => {
    const saved = localStorage.getItem('useSanityData')
    return saved !== null ? JSON.parse(saved) : false
  })

  useEffect(() => {
    // Listen for storage changes (in case toggle is changed in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'useSanityData') {
        setUseSanityData(e.newValue !== null ? JSON.parse(e.newValue) : false)
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return useSanityData
}

/**
 * Check if Sanity data exists for a specific page
 * This helps determine if the toggle should actually affect the page
 */
export function hasSanityData(pageName) {
  // List of pages that have been migrated to Sanity
  const migratedPages = [
    'vendorsPage',
    'faqPage',
    'privacyPage',
    'termsPage',
    // Add more as they get migrated
  ]
  
  return migratedPages.includes(pageName)
}