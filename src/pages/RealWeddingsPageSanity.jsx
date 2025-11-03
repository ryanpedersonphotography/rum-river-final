import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createClient } from '@sanity/client'
import PageTemplate from '../components/PageTemplate'

// Configure Sanity client
const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default function RealWeddingsPageSanity() {
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
            venue,
            "coverImageUrl": coverImage.asset->url,
            "slug": slug.current,
            "galleryCount": count(gallery)
          }
        `)

        setWeddings(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching weddings from Sanity:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeddings()
  }, [])

  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Real Weddings
      </h1>
      <p className="page-hero-lead">
        Every celebration tells a unique story of love, laughter, and happily ever after
      </p>
      <div style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        background: 'rgba(108, 99, 255, 0.1)',
        border: '1px solid rgba(108, 99, 255, 0.3)',
        borderRadius: '4px',
        fontSize: '0.9rem',
        color: '#6c63ff'
      }}>
        <strong>✨ Powered by Sanity CMS</strong> - Content is live from Sanity
      </div>
    </>
  )

  return (
    <PageTemplate
      heroContent={heroContent}
      heroImage="/images/2014/04/Loria-Jason-wedding-2-0026.jpg"
    >

      {/* Weddings Gallery Grid */}
      <section className="love-stories-section section section-cream">
        <div className="content-wrapper">
          <div className="love-stories-content center">
            <div className="script-accent">Real Love Stories</div>
            <h2 className="section-title">Weddings at the Barn</h2>
            <p className="lead">Browse through our favorite celebrations from Sanity CMS</p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', gridColumn: '1 / -1' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--sage-green)' }}>Loading weddings from Sanity...</p>
            </div>
          ) : error ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              gridColumn: '1 / -1',
              background: '#fee',
              border: '2px solid #c33',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '1.2rem', color: '#c33', margin: '0 0 1rem' }}>
                <strong>Unable to load weddings from Sanity</strong>
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                Error: {error}
              </p>
            </div>
          ) : weddings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', gridColumn: '1 / -1' }}>
              <p style={{ fontSize: '1.2rem', color: '#999' }}>
                No published weddings found in Sanity
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                Go to <a href="https://rum-river-final.sanity.studio" target="_blank" rel="noopener noreferrer">
                  Sanity Studio
                </a> to publish weddings
              </p>
            </div>
          ) : (
            <div className="wedding-gallery">
              {weddings.map((wedding, index) => (
                <Link
                  key={wedding._id}
                  to={`/real-weddings-sanity/${wedding.slug || wedding._id}`}
                  className="gallery-item image-reveal"
                >
                  {wedding.coverImageUrl ? (
                    <img
                      src={wedding.coverImageUrl}
                      alt={`${wedding.coupleName} Wedding`}
                      width="800"
                      height="800"
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '400px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '4rem'
                    }}>
                      💑
                    </div>
                  )}
                  <div className="gallery-overlay">
                    <div className="gallery-couple-names">
                      {wedding.coupleName}
                      {wedding.featured && ' ⭐'}
                    </div>
                    <div className="gallery-season">
                      {wedding.season} • {new Date(wedding.weddingDate).getFullYear()}
                    </div>
                    <div className="gallery-details">
                      {wedding.galleryCount || 0} Photos • {wedding.venue?.name || 'Rum River Barn'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Debug Info */}
          {!loading && !error && (
            <div style={{
              marginTop: '3rem',
              padding: '1.5rem',
              background: '#f5f5f5',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#666'
            }}>
              <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>🔧 Sanity Connection Info</h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>Project ID: {import.meta.env.VITE_SANITY_PROJECT_ID}</li>
                <li>Dataset: {import.meta.env.VITE_SANITY_DATASET}</li>
                <li>Weddings Loaded: {weddings.length}</li>
                <li>Source: Sanity CMS (published weddings only)</li>
                <li>Studio: <a href="https://rum-river-final.sanity.studio" target="_blank" rel="noopener noreferrer">rum-river-final.sanity.studio</a></li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </PageTemplate>
  )
}
