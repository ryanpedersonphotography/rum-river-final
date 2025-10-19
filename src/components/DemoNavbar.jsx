import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function DemoNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Demo pages configuration
  const demoPages = [
    { path: '/', label: 'Home', category: 'Main' },
    { path: '/component', label: 'Components', category: 'Main' },
    { path: '/hero-demo', label: 'Hero Section', category: 'Sections' },
    { path: '/venue-demo', label: 'Venue Overview', category: 'Sections' },
    { path: '/menu-demo', label: 'Menu Navigation', category: 'Navigation' },
    { path: '/footer-demo', label: 'Footer', category: 'Navigation' },
    { path: '/spaces-demo', label: 'Venue Spaces', category: 'Sections' },
    { path: '/love-stories-demo', label: 'Love Stories', category: 'Gallery' },
    { path: '/schedule-tour-demo', label: 'Schedule Tour', category: 'Forms' },
    { path: '/feature-blocks-demo', label: 'Feature Blocks', category: 'Content' },
    { path: '/faq-accordion-demo', label: 'FAQ Accordion', category: 'Interactive' },
    { path: '/social-proof-demo', label: 'Social Proof', category: 'Content' },
    { path: '/love-letters-demo', label: 'Love Letters', category: 'Content' },
    { path: '/find-your-way-demo', label: 'Find Your Way', category: 'Maps' },
    { path: '/schedule-visit-form-demo', label: 'Visit Form', category: 'Forms' },
    { path: '/button-demo', label: 'Button System', category: 'Components' },
    { path: '/button-sandbox', label: 'Button Sandbox', category: 'Components' }
  ]

  // Group pages by category
  const groupedPages = demoPages.reduce((acc, page) => {
    if (!acc[page.category]) acc[page.category] = []
    acc[page.category].push(page)
    return acc
  }, {})

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Toggle navbar with Ctrl/Cmd + D
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
      // Minimize/maximize with Ctrl/Cmd + M
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault()
        setIsMinimized(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Check if we're on a demo page
  const isDemoPage = demoPages.some(page => page.path === location.pathname)
  
  if (!isDemoPage || !isVisible) return null

  return (
    <div className={`demo-navbar ${isMinimized ? 'minimized' : ''}`}>
      {/* Header */}
      <div className="demo-navbar-header">
        <div className="demo-navbar-title">
          <span className="demo-navbar-icon">🎛️</span>
          Demo Navigator
        </div>
        <div className="demo-navbar-controls">
          <button
            className="demo-navbar-btn"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? 'Expand (Ctrl+M)' : 'Minimize (Ctrl+M)'}
          >
            {isMinimized ? '⬆️' : '⬇️'}
          </button>
          <button
            className="demo-navbar-btn"
            onClick={() => setIsVisible(false)}
            title="Hide (Ctrl+D)"
          >
            ✖️
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="demo-navbar-content">
          <div className="demo-navbar-current">
            Current: <strong>{demoPages.find(p => p.path === location.pathname)?.label || 'Unknown'}</strong>
          </div>

          <div className="demo-navbar-sections">
            {Object.entries(groupedPages).map(([category, pages]) => (
              <div key={category} className="demo-navbar-section">
                <div className="demo-navbar-category">{category}</div>
                <div className="demo-navbar-links">
                  {pages.map(page => (
                    <button
                      key={page.path}
                      className={`demo-navbar-link ${location.pathname === page.path ? 'active' : ''}`}
                      onClick={() => navigate(page.path)}
                      title={`Go to ${page.label}`}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="demo-navbar-shortcuts">
            <div className="demo-navbar-shortcuts-title">Shortcuts:</div>
            <div className="demo-navbar-shortcuts-list">
              <span>Ctrl+D: Toggle</span>
              <span>Ctrl+M: Minimize</span>
            </div>
          </div>
        </div>
      )}

      {/* Show toggle hint when hidden */}
      {!isVisible && (
        <div className="demo-navbar-hint">
          Press Ctrl+D to show demo navigator
        </div>
      )}
    </div>
  )
}