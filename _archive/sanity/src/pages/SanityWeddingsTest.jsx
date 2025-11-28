import { useState, useEffect } from 'react'
import { createClient } from '@sanity/client'

// Configure Sanity client
const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default function SanityWeddingsTest() {
  const [weddings, setWeddings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeddings() {
      try {
        setLoading(true)

        // Fetch published weddings from Sanity
        const data = await client.fetch(`
          *[_type == "wedding" && published == true] | order(weddingDate desc) {
            _id,
            coupleName,
            weddingDate,
            season,
            excerpt,
            featured,
            "coverImageUrl": coverImage.asset->url,
            "galleryCount": count(gallery)
          }
        `)

        setWeddings(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching weddings:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeddings()
  }, [])

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        marginBottom: '3rem',
        borderBottom: '2px solid #333',
        paddingBottom: '1rem'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>
          🧪 Sanity Weddings Test Page
        </h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          Testing connection to Sanity CMS • Project: {import.meta.env.VITE_SANITY_PROJECT_ID}
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{
          textAlign: 'center',
          padding: '4rem',
          fontSize: '1.2rem',
          color: '#666'
        }}>
          Loading weddings from Sanity...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={{
          background: '#fee',
          border: '2px solid #c33',
          color: '#c33',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <strong>❌ Error:</strong> {error}
        </div>
      )}

      {/* Success State */}
      {!loading && !error && (
        <>
          <div style={{
            background: '#efe',
            border: '2px solid #3c3',
            color: '#3c3',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <strong>✅ Success!</strong> Connected to Sanity CMS • Found {weddings.length} published wedding{weddings.length !== 1 ? 's' : ''}
          </div>

          {/* Weddings Grid */}
          {weddings.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {weddings.map((wedding) => (
                <div
                  key={wedding._id}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Wedding Image */}
                  {wedding.coverImageUrl ? (
                    <img
                      src={wedding.coverImageUrl}
                      alt={`${wedding.coupleName} Wedding`}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '250px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '3rem'
                    }}>
                      💑
                    </div>
                  )}

                  {/* Wedding Info */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <h2 style={{
                        margin: 0,
                        fontSize: '1.5rem',
                        color: '#333'
                      }}>
                        {wedding.coupleName}
                      </h2>
                      {wedding.featured && (
                        <span style={{ fontSize: '1.2rem' }}>⭐</span>
                      )}
                    </div>

                    <p style={{
                      color: '#666',
                      fontSize: '0.9rem',
                      margin: '0.5rem 0',
                      textTransform: 'capitalize'
                    }}>
                      {wedding.season} • {new Date(wedding.weddingDate).getFullYear()}
                    </p>

                    <p style={{
                      color: '#444',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      margin: '1rem 0'
                    }}>
                      {wedding.excerpt || 'No description available'}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#666',
                      fontSize: '0.85rem',
                      marginTop: '1rem'
                    }}>
                      <span>📸</span>
                      <span>{wedding.galleryCount || 0} photos</span>
                    </div>

                    <div style={{
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #eee',
                      fontSize: '0.8rem',
                      color: '#999'
                    }}>
                      ID: {wedding._id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem',
              color: '#999',
              fontSize: '1.1rem'
            }}>
              No published weddings found in Sanity
            </div>
          )}
        </>
      )}

      {/* Debug Info */}
      <div style={{
        marginTop: '4rem',
        padding: '1.5rem',
        background: '#f5f5f5',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <h3 style={{ marginTop: 0 }}>🔧 Debug Info</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>Project ID: {import.meta.env.VITE_SANITY_PROJECT_ID}</li>
          <li>Dataset: {import.meta.env.VITE_SANITY_DATASET}</li>
          <li>Weddings Loaded: {weddings.length}</li>
          <li>Loading: {loading ? 'Yes' : 'No'}</li>
          <li>Error: {error || 'None'}</li>
        </ul>
      </div>
    </div>
  )
}
