export default function FooterDemoStandalone() {
  return (
    <>
      {/* Footer Component */}
      <footer style={{
        padding: '4rem 2rem 2.5rem',
        background: '#2C2416', // text-dark
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem' 
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            {/* Business Information */}
            <div>
              <h4 style={{
                color: '#D4A574', // accent-gold
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '500'
              }}>
                Rum River Barn
              </h4>
              <p style={{ 
                lineHeight: '1.8', 
                fontFamily: "'Montserrat', sans-serif", 
                color: '#D4A574', // accent-gold
                opacity: '0.9' 
              }}>
                Minnesota's premier wedding venue<br />
                where dreams come to life
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 style={{
                color: '#D4A574', // accent-gold
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '500'
              }}>
                Visit Us
              </h4>
              <p style={{ 
                lineHeight: '1.8', 
                fontFamily: "'Montserrat', sans-serif", 
                color: '#D4A574', // accent-gold
                opacity: '0.9' 
              }}>
                42618 78th Street<br />
                Hillman, MN 56338<br />
                (320) 492-8584
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 style={{
                color: '#D4A574', // accent-gold
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '500'
              }}>
                Follow Along
              </h4>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap' 
              }}>
                <a 
                  href="#" 
                  style={{ 
                    color: '#D4A574', // accent-gold
                    textDecoration: 'none', 
                    fontFamily: "'Montserrat', sans-serif",
                    padding: '0.5rem 0',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#D4A574';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: '#D4A574', // accent-gold
                    textDecoration: 'none', 
                    fontFamily: "'Montserrat', sans-serif",
                    padding: '0.5rem 0',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#D4A574';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: '#D4A574', // accent-gold
                    textDecoration: 'none', 
                    fontFamily: "'Montserrat', sans-serif",
                    padding: '0.5rem 0',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#D4A574';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#D4A574', // accent-gold
              opacity: '0.8',
              fontFamily: "'Montserrat', sans-serif",
              margin: '0'
            }}>
              &copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota
            </p>
          </div>
        </div>
      </footer>

      {/* Documentation Section */}
      <section style={{ 
        background: '#FFFCF8', // cream-pearl
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#2C2416', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Footer Component</h2>
            <p style={{ color: '#6B4E3D', fontFamily: "'Montserrat', sans-serif" }}>Responsive footer with business info, contact details, and social links</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
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
          <a href="https://facebook.com/rumriverbarn" className="social-link" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com/rumriverbarn" className="social-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://pinterest.com/rumriverbarn" className="social-link" target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
        </div>
      </div>
    </div>
    
    <!-- Copyright Section -->
    <div className="footer-bottom">
      <p className="copyright">
        &copy; <span className="copyright-year">2025</span> Rum River Barn. All rights reserved. | 
        Designed with love in Minnesota
      </p>
    </div>
  </div>
</footer>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>JavaScript Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`// React Footer Component
export default function Footer() {
  // Business information data
  const businessInfo = {
    name: "Rum River Barn",
    description: "Minnesota's premier wedding venue where dreams come to life",
    address: {
      street: "42618 78th Street",
      city: "Hillman",
      state: "MN",
      zip: "56338"
    },
    phone: "(320) 492-8584"
  };

  // Social media links
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/rumriverbarn" },
    { name: "Instagram", url: "https://instagram.com/rumriverbarn" },
    { name: "Pinterest", url: "https://pinterest.com/rumriverbarn" }
  ];

  // Handle social media click tracking
  const handleSocialClick = (platform) => {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'social_click', {
        'social_platform': platform.toLowerCase(),
        'page_location': window.location.href,
        'custom_parameter': 'footer_click'
      });
    }
    
    // Custom analytics or logging
    console.log(\`Social click: \${platform}\`);
  };

  // Interactive hover handlers
  const handleSocialHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.color = 'white';
      e.target.style.transform = 'translateY(-2px)';
    } else {
      e.target.style.color = '#D4A574'; // accent-gold
      e.target.style.transform = 'translateY(0)';
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Business Information Section */}
          <div className="footer-section">
            <h4 className="footer-title">{businessInfo.name}</h4>
            <p className="footer-description">
              {businessInfo.description}
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h4 className="footer-title">Visit Us</h4>
            <p className="footer-contact">
              {businessInfo.address.street}<br />
              {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}<br />
              <a href={\`tel:\${businessInfo.phone}\`} className="phone-link">
                {businessInfo.phone}
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h4 className="footer-title">Follow Along</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(social.name)}
                  onMouseEnter={(e) => handleSocialHover(e, true)}
                  onMouseLeave={(e) => handleSocialHover(e, false)}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; <span className="copyright-year">{new Date().getFullYear()}</span> {businessInfo.name}. 
            All rights reserved. | Designed with love in Minnesota
          </p>
        </div>
      </div>
    </footer>
  );
}

// Enhanced Footer with Analytics and Auto-updating Year
export function FooterWithAnalytics() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update year annually
    const updateYear = () => setCurrentYear(new Date().getFullYear());
    const interval = setInterval(updateYear, 86400000); // Check daily
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Footer currentYear={currentYear} />
  );
}

// Vanilla JavaScript Enhancement
document.addEventListener('DOMContentLoaded', function() {
  // Add enhanced hover effects to social links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    // Create underline effect element
    const underline = document.createElement('div');
    underline.style.cssText = \`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #D4A574;
      transition: width 0.3s ease;
    \`;
    link.style.position = 'relative';
    link.appendChild(underline);
    
    // Hover effects with underline animation
    link.addEventListener('mouseenter', function() {
      this.style.color = 'white';
      this.style.transform = 'translateY(-2px)';
      underline.style.width = '100%';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.color = '#D4A574';
      this.style.transform = 'translateY(0)';
      underline.style.width = '0';
    });
  });
  
  // Auto-update copyright year
  const copyrightYear = document.querySelector('.copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
  
  // Phone number click tracking
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_click', {
          'phone_number': this.href.replace('tel:', ''),
          'page_location': window.location.href
        });
      }
    });
  });
});`}
            </pre>
          </div>

          {/* CSS Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>CSS Styling</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`/* Site Footer Component */
.site-footer {
  padding: 4rem 2rem 2.5rem;
  background: #2C2416; /* text-dark */
  color: white;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Footer Content Grid */
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

/* Footer Section Titles */
.footer-title {
  color: #D4A574; /* accent-gold */
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
}

/* Footer Text Content */
.footer-description,
.footer-contact {
  line-height: 1.8;
  font-family: 'Montserrat', sans-serif;
  color: #D4A574; /* accent-gold */
  opacity: 0.9;
  margin: 0;
}

/* Phone Link Styling */
.phone-link {
  color: #D4A574; /* accent-gold */
  text-decoration: none;
  transition: all 0.3s ease;
}

.phone-link:hover {
  color: white;
  text-decoration: underline;
}

/* Social Media Links */
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: #D4A574; /* accent-gold */
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.social-link:hover {
  color: white;
  transform: translateY(-2px);
}

/* Animated Underline Effect */
.social-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #D4A574; /* accent-gold */
  transition: width 0.3s ease;
}

.social-link:hover::after {
  width: 100%;
}

/* Footer Bottom Section */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  font-size: 0.875rem;
  text-align: center;
}

.copyright {
  color: #D4A574; /* accent-gold */
  opacity: 0.8;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

/* Focus States for Accessibility */
.social-link:focus,
.phone-link:focus {
  outline: 2px solid #D4A574;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Print Styles */
@media print {
  .site-footer {
    background: white !important;
    color: black !important;
    border-top: 2px solid #2C2416;
  }
  
  .footer-title,
  .footer-description,
  .footer-contact,
  .social-link,
  .copyright {
    color: black !important;
  }
  
  .social-links {
    display: none; /* Hide social links in print */
  }
}

/* Mobile Responsive Design */
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
  
  .footer-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 2.5rem 1rem 1.5rem;
  }
  
  .footer-content {
    gap: 1.5rem;
  }
  
  .footer-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .footer-description,
  .footer-contact {
    font-size: 0.875rem;
  }
  
  .social-links {
    gap: 0.75rem;
  }
  
  .social-link {
    font-size: 0.875rem;
    padding: 0.25rem 0;
  }
  
  .copyright {
    font-size: 0.75rem;
    line-height: 1.6;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .site-footer {
    border-top: 3px solid white;
  }
  
  .footer-title,
  .social-link:hover {
    color: white !important;
  }
  
  .social-link::after {
    background: white;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .social-link,
  .phone-link,
  .social-link::after {
    transition: none;
  }
  
  .social-link:hover {
    transform: none;
  }
}

/* Dark Mode Alternative */
.site-footer.dark-mode {
  background: #1a1a1a;
  border-top: 1px solid #333;
}

.site-footer.dark-mode .footer-title {
  color: #ffd700; /* bright gold for dark mode */
}

.site-footer.dark-mode .footer-description,
.site-footer.dark-mode .footer-contact,
.site-footer.dark-mode .social-link,
.site-footer.dark-mode .copyright {
  color: #e0e0e0;
}

.site-footer.dark-mode .social-link:hover {
  color: #ffd700;
}`}
            </pre>
          </div>

          {/* Key Features */}
          <div>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Key Features</h3>
            <div style={{
              background: '#F4E4E1',
              padding: '2rem',
              borderRadius: '8px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>Responsive Grid Layout:</strong> Auto-fit grid that adapts from 3-column desktop to 1-column mobile</li>
                <li><strong>Business Information:</strong> Company name, description, and branding in the first section</li>
                <li><strong>Contact Details:</strong> Complete address and phone number with click-to-call functionality</li>
                <li><strong>Social Media Links:</strong> Facebook, Instagram, and Pinterest with hover animations</li>
                <li><strong>Interactive Hover Effects:</strong> Links lift up and change color with smooth transitions</li>
                <li><strong>Animated Underlines:</strong> Social links get animated underline effects on hover</li>
                <li><strong>Auto-updating Copyright:</strong> JavaScript automatically updates the year</li>
                <li><strong>Analytics Integration:</strong> Built-in Google Analytics tracking for social clicks</li>
                <li><strong>Accessibility Features:</strong> Proper focus states, semantic HTML, screen reader support</li>
                <li><strong>Print-Friendly Styling:</strong> Optimized appearance for printed pages</li>
                <li><strong>Mobile-First Design:</strong> Responsive breakpoints for tablet and mobile devices</li>
                <li><strong>Design System Integration:</strong> Uses consistent typography, colors, and spacing tokens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}