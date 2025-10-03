export default function SiteFooter() {
  return (
    <footer style={{
      padding: '4rem 2rem 2.5rem',
      background: 'var(--text-dark)',
      color: 'rgba(255,255,255,0.9)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{
              color: 'white',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Rum River Barn</h4>
            <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.9)' }}>
              Minnesota's premier wedding venue<br />
              where dreams come to life
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'white',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Visit Us</h4>
            <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.9)' }}>
              42618 78th Street<br />
              Hillman, MN 56338<br />
              (320) 492-8584
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'white',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)'
            }}>Follow Along</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Facebook</a>
              <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Instagram</a>
              <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Pinterest</a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
        </div>
      </div>
    </footer>
  )
}