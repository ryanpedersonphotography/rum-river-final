import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { Masonry } from 'masonic'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

// Sanity client
const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})

// Image URL builder
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

// GROQ queries
const WEDDING_BY_SLUG = `
  *[_type == "wedding" && slug.current == $slug][0] {
    title,
    slug,
    coupleNames,
    weddingDate,
    coverImage,
    gallery,
    excerpt,
    story,
    venue,
    season,
    tags
  }
`

const MORE_WEDDINGS = `
  *[_type == "wedding" && slug.current != $slug && featured == true][0...3] {
    title,
    slug,
    coupleNames,
    coverImage
  }
`

// Portable Text components
const ptComponents = {
  types: {
    customImage: ({ value }) => (
      <figure className="styled-image" style={{ margin: '2rem 0' }}>
        <img
          src={urlFor(value).width(800).height(600).fit('crop').auto('format').url()}
          alt={value.alt || ''}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '4px'
          }}
        />
        {value.caption && (
          <figcaption style={{
            textAlign: 'center',
            fontSize: '0.875rem',
            color: 'var(--sage-green)',
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    )
  },
  block: {
    h2: ({ children }) => (
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.75rem',
        color: 'var(--warm-walnut)',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
        {children}
      </h2>
    ),
    normal: ({ children }) => (
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1.1rem',
        lineHeight: 1.7,
        color: 'var(--sage-green)',
        marginBottom: '1.5rem'
      }}>
        {children}
      </p>
    )
  }
}

// Photo card for Masonic gallery
const PhotoCard = ({ data: photo, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      className="wedding-photo-card"
    >
      <img
        src={urlFor(photo).width(400).height(300).fit('crop').auto('format').url()}
        alt={photo.alt || 'Wedding photo'}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
    </div>
  )
}

export default function RealWeddingPage() {
  const { slug } = useParams()
  const [wedding, setWedding] = useState(null)
  const [moreWeddings, setMoreWeddings] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    async function fetchWedding() {
      try {
        setLoading(true)
        const [weddingData, moreWeddingsData] = await Promise.all([
          client.fetch(WEDDING_BY_SLUG, { slug }),
          client.fetch(MORE_WEDDINGS, { slug })
        ])
        
        setWedding(weddingData)
        setMoreWeddings(moreWeddingsData)
      } catch (error) {
        console.error('Error fetching wedding:', error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchWedding()
    }
  }, [slug])

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        fontFamily: 'var(--font-body)',
        color: 'var(--sage-green)'
      }}>
        Loading wedding...
      </div>
    )
  }

  if (!wedding) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '2rem', 
          marginBottom: '1rem',
          color: 'var(--warm-walnut)'
        }}>
          Wedding Not Found
        </h1>
        <Link to="/real-weddings" className="romantic-button">
          ← Back to Real Weddings
        </Link>
      </div>
    )
  }

  // Prepare gallery photos for lightbox
  const galleryPhotos = wedding.gallery || []
  const handlePhotoClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const slides = galleryPhotos.map(photo => ({
    src: urlFor(photo).width(1600).height(1200).fit('crop').auto('format').url(),
    alt: photo.alt || 'Wedding photo'
  }))

  // Format date
  const formattedDate = wedding.weddingDate 
    ? new Date(wedding.weddingDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : ''

  return (
    <>
      <SEO 
        title={`${wedding.coupleNames} - Real Wedding`}
        description={wedding.excerpt || `See ${wedding.coupleNames}' beautiful wedding at Rum River Barn`}
        image={wedding.coverImage ? urlFor(wedding.coverImage).width(1200).height(630).fit('crop').auto('format').url() : undefined}
      />

      {/* Page Hero */}
      <section className="page-hero" style={{
        position: 'relative',
        height: '85vh',
        minHeight: '600px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: wedding.coverImage 
            ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${urlFor(wedding.coverImage).width(1920).height(1080).fit('crop').auto('format').url()})`
            : 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), var(--sage-green)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        {/* Back Button */}
        <Link
          to="/real-weddings"
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '0.75rem 1.5rem',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.6)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
        >
          ← All Weddings
        </Link>

        {/* Hero Content */}
        <div style={{
          position: 'absolute',
          bottom: '4rem',
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'white',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 400,
            marginBottom: '1rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.1
          }}>
            {wedding.coupleNames}
          </h1>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: 0.95,
            textShadow: '0 1px 10px rgba(0,0,0,0.3)'
          }}>
            {formattedDate} • Rum River Barn • Hillman, Minnesota
          </div>
        </div>
      </section>

      {/* Intro/Excerpt */}
      {wedding.excerpt && (
        <section style={{
          padding: '4rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            lineHeight: 1.8,
            color: 'var(--sage-green)',
            fontStyle: 'italic'
          }}>
            {wedding.excerpt}
          </p>
        </section>
      )}

      {/* Wedding Story */}
      {wedding.story && wedding.story.length > 0 && (
        <section style={{
          padding: '2rem 2rem 4rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <PortableText 
            value={wedding.story} 
            components={ptComponents}
          />
        </section>
      )}

      {/* Wedding Gallery */}
      {galleryPhotos.length > 0 && (
        <section className="wedding-gallery" style={{
          padding: '2rem 2rem 4rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            textAlign: 'center',
            color: 'var(--warm-walnut)',
            marginBottom: '3rem'
          }}>
            Wedding Gallery
          </h2>
          
          <Masonry
            items={galleryPhotos.map((photo, index) => ({ ...photo, index }))}
            render={({ data: photo }) => (
              <PhotoCard
                data={photo}
                onClick={() => handlePhotoClick(photo.index)}
              />
            )}
            columnGutter={20}
            columnWidth={350}
            overscanBy={5}
          />
        </section>
      )}

      {/* Venue Details */}
      {wedding.venue && (
        <section style={{
          padding: '3rem 2rem',
          background: 'var(--cream-pearl)',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: 'var(--warm-walnut)',
              marginBottom: '2rem'
            }}>
              Venue Details
            </h3>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              lineHeight: 2,
              color: 'var(--sage-green)'
            }}>
              {wedding.venue.ceremony && (
                <div><strong>Ceremony:</strong> {wedding.venue.ceremony.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
              )}
              {wedding.venue.reception && (
                <div><strong>Reception:</strong> {wedding.venue.reception.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
              )}
              {wedding.season && (
                <div><strong>Season:</strong> {wedding.season.charAt(0).toUpperCase() + wedding.season.slice(1)}</div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* More Real Weddings */}
      {moreWeddings.length > 0 && (
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              textAlign: 'center',
              color: 'var(--warm-walnut)',
              marginBottom: '3rem'
            }}>
              More Real Weddings
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {moreWeddings.map((moreWedding) => (
                <Link
                  key={moreWedding.slug.current}
                  to={`/real-weddings/${moreWedding.slug.current}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    {moreWedding.coverImage && (
                      <img
                        src={urlFor(moreWedding.coverImage).width(400).height(300).fit('crop').auto('format').url()}
                        alt={`${moreWedding.coupleNames} wedding`}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover'
                        }}
                      />
                    )}
                    <div style={{ padding: '1.5rem' }}>
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        color: 'var(--warm-walnut)',
                        marginBottom: '0.5rem'
                      }}>
                        {moreWedding.coupleNames}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <div className="script-accent" style={{ marginBottom: '1rem' }}>
            Ready to Create Your Story?
          </div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Let Your Love Story Unfold Here
          </h2>
          <p className="lead" style={{ marginBottom: '2rem' }}>
            Schedule a tour to see how we can help bring your wedding vision to life
          </p>
          <Link to="/contact" className="romantic-button">
            Schedule Your Tour
          </Link>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />

      <style>{`
        .wedding-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  )
}