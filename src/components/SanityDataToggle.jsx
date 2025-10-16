import { useState, useEffect } from 'react'
import './SanityDataToggle.css'

export default function SanityDataToggle({ onToggle, initialState = false }) {
  const [useSanityData, setUseSanityData] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('useSanityData')
    return saved !== null ? JSON.parse(saved) : initialState
  })

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('useSanityData', JSON.stringify(useSanityData))
    // Call the toggle callback
    if (onToggle) {
      onToggle(useSanityData)
    }
  }, [useSanityData, onToggle])

  return (
    <div className="sanity-toggle-container">
      <div className="sanity-toggle-wrapper">
        <span className={`toggle-label ${!useSanityData ? 'active' : ''}`}>
          📄 Hardcoded
        </span>
        <button
          className={`sanity-toggle ${useSanityData ? 'active' : ''}`}
          onClick={() => setUseSanityData(!useSanityData)}
          aria-label="Toggle data source"
        >
          <span className="toggle-slider" />
        </button>
        <span className={`toggle-label ${useSanityData ? 'active' : ''}`}>
          🌐 Sanity CMS
        </span>
      </div>
      <div className="toggle-status">
        Currently showing: <strong>{useSanityData ? 'Sanity CMS' : 'Hardcoded'}</strong> data
      </div>
    </div>
  )
}