import { useState, useEffect } from 'react'

/**
 * Custom hook to fetch and manage venue data from CMS
 * @returns {Object} Object containing venues data, loading state, and error
 */
export function useVenueData() {
  const [venues, setVenues] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        setLoading(true)
        setError(null)

        // List of venue files to fetch
        const venueFiles = ['barn', 'frame-barn', 'bridal', 'grounds']
        
        const venuePromises = venueFiles.map(async (venueKey) => {
          const response = await fetch(`/content/venues/${venueKey}.json`)
          if (!response.ok) {
            throw new Error(`Failed to fetch ${venueKey} venue data`)
          }
          const data = await response.json()
          return { [data.key]: data }
        })

        const venueResults = await Promise.all(venuePromises)
        
        // Combine all venue data into a single object
        const combinedVenues = venueResults.reduce((acc, venue) => ({
          ...acc,
          ...venue
        }), {})

        setVenues(combinedVenues)
      } catch (err) {
        console.error('Error fetching venue data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVenueData()
  }, [])

  return { venues, loading, error }
}

/**
 * Custom hook to fetch testimonials data from CMS
 * @returns {Object} Object containing testimonials data, loading state, and error
 */
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        setError(null)

        // For now, we'll fetch the known testimonials
        // In a real implementation, we might need a manifest file or API endpoint
        const testimonialFiles = [
          'sarah-michael-johnson',
          'emma-james-wilson', 
          'amanda-chris-thompson'
        ]
        
        const testimonialPromises = testimonialFiles.map(async (fileName) => {
          const response = await fetch(`/content/testimonials/${fileName}.json`)
          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName} testimonial`)
          }
          return await response.json()
        })

        const results = await Promise.all(testimonialPromises)
        
        // Sort by order field
        const sortedTestimonials = results.sort((a, b) => a.order - b.order)
        
        setTestimonials(sortedTestimonials)
      } catch (err) {
        console.error('Error fetching testimonials:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}

export default useVenueData