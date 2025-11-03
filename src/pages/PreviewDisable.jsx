import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Disable Sanity Preview Mode
 * Called when exiting preview or manually disabling
 */
export default function PreviewDisable() {
  const navigate = useNavigate()

  useEffect(() => {
    // Clear preview mode
    sessionStorage.removeItem('sanity-preview-mode')

    // Get the redirect URL from query params
    const params = new URLSearchParams(window.location.search)
    const redirectTo = params.get('redirect') || '/'

    // Redirect to the requested page (normal mode)
    console.log('❌ Preview mode disabled')
    navigate(redirectTo)
  }, [navigate])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid #e53e3e',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1.5rem'
      }}></div>

      <h2 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>
        Disabling Preview Mode
      </h2>

      <p style={{ margin: 0, color: '#718096' }}>
        Returning to published content...
      </p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
