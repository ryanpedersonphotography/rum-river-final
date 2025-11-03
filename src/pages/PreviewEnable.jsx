import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Enable Sanity Preview Mode
 * Called from Sanity Studio Presentation Tool
 */
export default function PreviewEnable() {
  const navigate = useNavigate()

  useEffect(() => {
    // Set preview mode cookie/flag
    sessionStorage.setItem('sanity-preview-mode', 'true')

    // Get the redirect URL from query params
    const params = new URLSearchParams(window.location.search)
    const redirectTo = params.get('redirect') || '/'

    // Redirect to the requested page in preview mode
    console.log('✅ Preview mode enabled')
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
        border: '4px solid #48bb78',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1.5rem'
      }}></div>

      <h2 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>
        Enabling Preview Mode
      </h2>

      <p style={{ margin: 0, color: '#718096' }}>
        Connecting to Sanity Studio...
      </p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
