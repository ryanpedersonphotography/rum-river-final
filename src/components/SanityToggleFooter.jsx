import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './SanityToggleFooter.css'

// Pages that have been migrated to Sanity (with actual content)
const MIGRATED_PAGES = [
  '/',                // ✅ HomePage - fully migrated with all content
  '/vendor-list',     // ✅ VendorsPage - full vendor data migrated
  '/faq',            // ✅ FAQPage - has content (from earlier migration)
  '/events',         // ✅ EventsPage - fully migrated with all event blocks
  '/property',       // ✅ PropertyPage - fully migrated with venue discovery
  '/location',       // ✅ LocationPage - fully migrated with maps and amenities
  '/gallery',        // ✅ GalleryPage - fully migrated with categories
  '/contact',        // ✅ ContactPage - fully migrated with all sections
  '/testimonials',   // ✅ TestimonialsPage - fully migrated with 17 testimonials
  '/history',        // ✅ HistoryPage - fully migrated with timeline
  '/thank-you',      // ✅ ThankYouPage - fully migrated
]

export default function SanityToggleFooter() {
  const location = useLocation()
  const [useSanityData, setUseSanityData] = useState(() => {
    const saved = localStorage.getItem('useSanityData')
    return saved !== null ? JSON.parse(saved) : false
  })

  // Check if current page has Sanity data
  const hasSanityData = MIGRATED_PAGES.includes(location.pathname)
  
  // Get status text based on current state
  const getStatusText = () => {
    if (hasSanityData) {
      return useSanityData ? 'CMS ✓' : 'Local'
    } else {
      return useSanityData ? 'CMS ✗' : 'Local'
    }
  }
  
  // Get tooltip based on migration status
  const getTooltip = () => {
    if (hasSanityData) {
      return 'Page migrated - Toggle between CMS and local data'
    } else {
      return 'Page NOT migrated - Needs Sanity content'
    }
  }

  const handleToggle = (e) => {
    const newValue = e.target.checked
    setUseSanityData(newValue)
    localStorage.setItem('useSanityData', JSON.stringify(newValue))
    // Reload page to apply changes
    window.location.reload()
  }

  // Only show in development or if explicitly enabled
  const isDev = import.meta.env.DEV
  const showToggle = isDev || localStorage.getItem('showSanityToggle') === 'true'
  
  if (!showToggle) return null

  return (
    <div className="sanity-toggle-footer" title={getTooltip()}>
      <label className="sanity-toggle-label">
        <input
          type="checkbox"
          checked={useSanityData}
          onChange={handleToggle}
          className="sanity-toggle-checkbox"
        />
        <span className="sanity-toggle-text" style={{ 
          color: !hasSanityData && useSanityData ? '#ff6b6b' : '#999'
        }}>
          {getStatusText()}
        </span>
      </label>
    </div>
  )
}