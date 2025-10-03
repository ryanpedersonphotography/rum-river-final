import Header from './Header'

export default function PageTemplate({ 
  children, 
  title = "Rum River Barn", 
  heroContent = null,
  className = ""
}) {
  return (
    <>
      <Header />
      
      {/* Hero Section - Optional */}
      {heroContent && (
        <section style={{
          minHeight: '40vh',
          background: 'linear-gradient(135deg, rgba(74, 52, 38, 0.9) 0%, rgba(45, 58, 47, 0.8) 100%), url("https://images.unsplash.com/photo-1519741497674-611481863552?w=1600") center/cover',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          padding: '5rem 0'
        }}>
          <div className="content-wrapper">
            <div style={{ padding: '0 2rem' }}>
              {heroContent}
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
