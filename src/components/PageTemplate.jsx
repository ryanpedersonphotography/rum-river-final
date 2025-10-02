import Header from './Header'

export default function PageTemplate({ 
  children, 
  title = "Rum River Barn", 
  heroTitle = null,
  heroDescription = null,
  heroContent = null,
  heroImage = "/images/venue/barn-exterior-full-view-landscape.jpg",
  heroBackground = "linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%)",
  className = "",
  currentPage = ""
}) {
  return (
    <>
      <Header currentPage={currentPage} />
      
      {/* Hero Section - Optional */}
      {(heroContent || heroTitle || heroDescription) && (
        <section 
          className="page-hero dark-section"
          style={{
            background: `${heroBackground}, url("${heroImage}") center/cover`
          }}
        >
          <div className="content-wrapper">
            <div className="page-hero-content">
              {heroContent ? heroContent : (
                <>
                  {heroTitle && <h1 className="page-hero-title">{heroTitle}</h1>}
                  {heroDescription && <p className="page-hero-lead">{heroDescription}</p>}
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className={className}>
        {children}
      </main>

      {/* ID: FOOTER_ENHANCED_001 - Enhanced 3-Column Footer */}
      <footer style={{
        padding: '60px 20px 40px',
        background: '#2C2416',
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
            textAlign: 'left'
          }}>
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: '1.125rem',
                fontFamily: 'Playfair Display, serif'
              }}>Rum River Barn</h4>
              <p style={{ lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                Minnesota's premier wedding venue<br />
                where dreams come to life
              </p>
            </div>
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: '1.125rem',
                fontFamily: 'Playfair Display, serif'
              }}>Visit Us</h4>
              <p style={{ lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                42618 78th Street<br />
                Hillman, MN 56338<br />
                (320) 492-8584
              </p>
            </div>
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: '1.125rem',
                fontFamily: 'Playfair Display, serif'
              }}>Follow Along</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" style={{ color: '#D4A574', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Facebook</a>
                <a href="#" style={{ color: '#D4A574', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Instagram</a>
                <a href="#" style={{ color: '#D4A574', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Pinterest</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            <p>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
          </div>
        </div>
      </footer>
    </>
  )
}
