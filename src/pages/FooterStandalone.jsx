export default function FooterStandalone() {
  return (
    <>
      {/* Footer Section */}
      <footer style={{
        padding: '4rem 2rem 2.5rem',
        background: 'var(--text-dark)',
        color: 'white',
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
                color: 'var(--accent-gold)',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}>Rum River Barn</h4>
              <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'var(--accent-gold)' }}>
                Minnesota's premier wedding venue<br />
                where dreams come to life
              </p>
            </div>
            <div>
              <h4 style={{
                color: 'var(--accent-gold)',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}>Visit Us</h4>
              <p style={{ lineHeight: 1.8, fontFamily: 'var(--font-body)', color: 'var(--accent-gold)' }}>
                42618 78th Street<br />
                Hillman, MN 56338<br />
                (320) 492-8584
              </p>
            </div>
            <div>
              <h4 style={{
                color: 'var(--accent-gold)',
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
            <p style={{ color: 'var(--accent-gold)' }}>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
          </div>
        </div>
      </footer>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Footer Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the footer above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- Footer Section -->
<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-content">
      <!-- Business Information -->
      <div className="footer-section">
        <h4 className="footer-title">Rum River Barn</h4>
        <p className="footer-description">
          Minnesota's premier wedding venue<br />
          where dreams come to life
        </p>
      </div>
      
      <!-- Contact Information -->
      <div className="footer-section">
        <h4 className="footer-title">Visit Us</h4>
        <p className="footer-contact">
          42618 78th Street<br />
          Hillman, MN 56338<br />
          (320) 492-8584
        </p>
      </div>
      
      <!-- Social Media Links -->
      <div className="footer-section">
        <h4 className="footer-title">Follow Along</h4>
        <div className="social-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Pinterest</a>
        </div>
      </div>
    </div>
    
    <!-- Copyright Section -->
    <div className="footer-bottom">
      <p className="copyright">
        &copy; 2025 Rum River Barn. All rights reserved. | 
        Designed with love in Minnesota
      </p>
    </div>
  </div>
</footer>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>JavaScript Functionality</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Footer Component
export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 2rem 2.5rem',
      background: 'var(--text-dark)',
      color: 'white',
      textAlign: 'center'
    }}>
      {/* Footer content here */}
    </footer>
  )
}

// Enhanced Footer with Analytics Tracking
export default function Footer() {
  const handleSocialClick = (platform) => {
    // Track social media clicks
    if (typeof gtag !== 'undefined') {
      gtag('event', 'social_click', {
        'social_platform': platform,
        'page_location': window.location.href
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Social links with tracking */}
        <a 
          href="https://facebook.com/rumriverbarn" 
          onClick={() => handleSocialClick('facebook')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

// Vanilla JavaScript for Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add year auto-update
  const copyrightYear = document.querySelector('.copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* Site Footer */
.site-footer {
  padding: 4rem 2rem 2.5rem;
  background: var(--text-dark);
  color: white;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  color: var(--accent-gold);
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-family: var(--font-display);
  font-weight: 500;
}

.footer-description,
.footer-contact {
  line-height: 1.8;
  font-family: var(--font-body);
  color: var(--accent-gold);
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: var(--accent-gold);
  text-decoration: none;
  font-family: var(--font-body);
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
}

.social-link:hover {
  color: white;
  transform: translateY(-2px);
}

.social-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gold);
  transition: width 0.3s ease;
}

.social-link:hover::after {
  width: 100%;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  font-size: 0.875rem;
  text-align: center;
}

.copyright {
  color: var(--accent-gold);
  opacity: 0.8;
  font-family: var(--font-body);
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .site-footer {
    padding: 3rem 1rem 2rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}