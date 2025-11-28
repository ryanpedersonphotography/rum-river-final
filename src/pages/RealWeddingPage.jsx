import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { realWeddings } from '../data/realWeddings'

// Photo card for gallery
const PhotoCard = ({ data: photo, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        marginBottom: '20px',
        breakInside: 'avoid'
      }}
      className="wedding-photo-card"
    >
      <img
        src={photo.src}
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
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    setLoading(true)
    // Find the wedding in static data
    const foundWedding = realWeddings.find(w => w.slug === slug)
    
    if (foundWedding) {
      // Transform static data to match component needs
      // Combine all galleries into one list for the masonry view
      const allPhotos = foundWedding.galleries 
        ? foundWedding.galleries.flatMap(g => g.photos)
        : []
        
      setWedding({
        ...foundWedding,
        // Map mismatched fields
        coupleNames: foundWedding.coupleName,
        weddingDate: foundWedding.date,
        // Static data usually has 'intro', map to story if story is missing
        story: foundWedding.story || foundWedding.intro, 
        gallery: allPhotos
      })
    } else {
      setWedding(null)
    }
    setLoading(false)
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
    src: photo.src,
    alt: photo.alt || 'Wedding photo'
  }))

  return (
    <>
      <SEO 
        title={`${wedding.coupleNames} - Real Wedding`}
        description={wedding.intro || `See ${wedding.coupleNames}' beautiful wedding at Rum River Barn`}
        image={wedding.coverImage}
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
            ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${wedding.coverImage})`
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
            {wedding.weddingDate} • Rum River Barn • Hillman, Minnesota
          </div>
        </div>
      </section>

      {/* Intro/Excerpt */}
      {wedding.intro && (
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
            {wedding.intro}
          </p>
        </section>
      )}

      {/* Wedding Story (Simple Text for Static) */}
      {wedding.story && wedding.story !== wedding.intro && (
        <section style={{
          padding: '2rem 2rem 4rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
             fontFamily: 'var(--font-body)',
             fontSize: '1.1rem',
             lineHeight: 1.7,
             color: 'var(--sage-green)',
             marginBottom: '1.5rem'
          }}>
             {wedding.story}
          </div>
        </section>
      )}

      {/* Wedding Gallery */}
      {galleryPhotos.length > 0 && (
        <section className="section">
          <div className="content-wrapper">
            <h2 className="section-title center">
              Wedding Gallery
            </h2>
            
            <div className="gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <PhotoCard
                  key={index}
                  data={photo}
                  onClick={() => handlePhotoClick(index)}
                />
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
        .gallery-grid {
          column-count: 3;
          column-gap: 20px;
          width: 100%;
          max-width: 100%;
        }
        @media (max-width: 900px) {
          .gallery-grid {
            column-count: 2;
          }
        }
        @media (max-width: 600px) {
          .gallery-grid {
            column-count: 1;
          }
        }
      `}</style>
    </>
  )
}