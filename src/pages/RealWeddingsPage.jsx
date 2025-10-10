import { Link } from 'react-router-dom'
import PageTemplate from '../components/PageTemplate'
import { useWeddingBlogs } from '../hooks/useWeddingBlogs'
import { realWeddings } from '../data/realWeddings' // Fallback

export default function RealWeddingsPage() {
  // Fetch wedding blogs from Contentful
  const { blogs: weddings, loading, error } = useWeddingBlogs()
  
  // Use fallback data if Contentful is not available
  const displayWeddings = weddings.length > 0 ? weddings : realWeddings.map(w => ({
    slug: w.slug,
    coupleName: w.coupleName,
    coverImage: { url: w.coverImage },
    season: w.date,
    location: w.location,
    photos: [],
    introText: w.intro
  }))

  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Real Weddings
      </h1>
      <p className="page-hero-lead">
        Every celebration tells a unique story of love, laughter, and happily ever after
      </p>
    </>
  )

  return (
    <PageTemplate 
      heroContent={heroContent}
      heroImage="/images/2014/04/Loria-Jason-wedding-2-0026.jpg"
    >

      {/* Weddings Gallery Grid */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Real Love Stories</div>
            <h2 className="section-title">Weddings at the Barn</h2>
            <p className="lead">Browse through our favorite celebrations and get inspired for your own special day</p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', gridColumn: '1 / -1' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--sage-green)' }}>Loading weddings...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', gridColumn: '1 / -1' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--warm-walnut)' }}>Unable to load weddings. Please try again later.</p>
            </div>
          ) : (
            <div className="wedding-gallery">
              {displayWeddings.map((wedding, index) => (
                <Link
                  key={wedding.slug}
                  to={`/real-weddings/${wedding.slug}`}
                  className="gallery-item image-reveal"
                >
                  <img
                    src={wedding.coverImage?.url?.startsWith('//') 
                      ? `https:${wedding.coverImage.url}` 
                      : wedding.coverImage?.url || wedding.coverImage}
                    alt={`${wedding.coupleName} Wedding`}
                    width="800"
                    height="800"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-couple-names">{wedding.coupleName}</div>
                    <div className="gallery-season">{wedding.season}</div>
                    <div className="gallery-details">
                      {wedding.photos?.length || wedding.photoCount || 20} Photos • {wedding.location.split('•')[0].trim()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div className="script-accent" style={{ marginBottom: '1rem' }}>Ready to Create Your Story?</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Let Your Love Story Unfold Here
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Schedule a tour to see how we can help bring your wedding vision to life
            </p>
            <a href="/contact" className="romantic-button">
              Schedule Your Tour
            </a>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}
