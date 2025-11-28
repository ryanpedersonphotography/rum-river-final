import React, { useEffect } from 'react';

/**
 * VenueDemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the venue demo page.
 * Features:
 * - Alternating blocks layout with numbered features
 * - Dark gradient background with sophisticated styling
 * - Clean, readable structure for easy component migration
 * - All CSS inline for easy reading
 * - Complete venue section implementation with documentation
 */
export default function VenueDemoStandalone() {
  useEffect(() => {
    // Add scroll-triggered animations for demo purposes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all block items for animation
    const blockItems = document.querySelectorAll('.animate-on-scroll');
    blockItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(60px)';
      item.style.transition = `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0
    }}>
      
      {/* CSS Animations and Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          }
        }
        
        /* Venue Section Styles */
        .alternating-blocks {
          background: linear-gradient(135deg, rgba(74, 52, 38, 1) 0%, rgba(45, 58, 47, 1) 100%);
          color: white;
          padding: 100px 0;
        }
        
        .alternating-blocks .section-header {
          color: white;
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .alternating-blocks .section-title {
          color: white;
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
          line-height: 1.2;
        }
        
        .alternating-blocks .script-accent {
          color: #E4C896;
          font-family: 'Dancing Script', cursive;
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        
        .alternating-blocks .lead {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.25rem;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .blocks-container {
          margin-top: 4rem;
        }
        
        .block-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 120px;
        }
        
        .block-item:last-child {
          margin-bottom: 0;
        }
        
        .block-item.reverse {
          direction: rtl;
        }
        
        .block-item.reverse .block-content {
          direction: ltr;
        }
        
        .block-content {
          padding: 40px;
        }
        
        .block-content .number {
          font-size: 3rem;
          color: #E4C896;
          opacity: 0.5;
          font-weight: 500;
          line-height: 1;
          margin-bottom: 20px;
          font-family: 'Playfair Display', serif;
        }
        
        .block-content h3 {
          font-size: 2.5rem;
          margin-bottom: 25px;
          font-family: 'Playfair Display', serif;
          color: white;
          line-height: 1.2;
          font-weight: 400;
        }
        
        .block-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .block-content .lead {
          color: #E4C896;
          font-weight: 400;
          margin-bottom: 2rem;
        }
        
        .block-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          transition: transform 0.6s ease, box-shadow 0.6s ease;
        }
        
        .block-item:hover .block-image {
          transform: scale(1.02);
          animation: glow 3s ease-in-out infinite;
        }
        
        .block-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }
        
        /* Content wrapper */
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        /* Romantic overlay */
        .romantic-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, 
            rgba(157, 107, 123, 0.1) 0%, 
            rgba(157, 107, 123, 0.05) 50%, 
            transparent 100%
          );
          pointer-events: none;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .block-item {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 80px;
          }
          
          .block-item.reverse {
            direction: ltr;
          }
          
          .block-content {
            padding: 20px;
          }
          
          .block-content h3 {
            font-size: 2rem;
          }
          
          .block-content .number {
            font-size: 2.5rem;
          }
          
          .alternating-blocks .section-title {
            font-size: 2.5rem;
          }
          
          .alternating-blocks {
            padding: 60px 0;
          }
        }
      `}</style>


      {/* Your Perfect Venue Section - Numbered Feature Blocks */}
      <section className="alternating-blocks">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Your Perfect Venue</div>
            <h2 className="section-title">Why Choose Rum River Barn</h2>
            <p className="lead">Discover what makes our venue the perfect setting for your unforgettable celebration</p>
          </div>

          <div className="blocks-container">
            <div className="block-item animate-on-scroll">
              <div className="block-content">
                <div className="number">01</div>
                <h3>A Picturesque Location For Your Special Event</h3>
                <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
                <p>When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.</p>
                <p>Here at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.</p>
                <p>Our goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at <strong>320-492-8584</strong>!</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg" alt="Special event venue" width="800" height="500" />
              </div>
            </div>

            <div className="block-item reverse animate-on-scroll">
              <div className="block-content">
                <div className="number">02</div>
                <h3>Rum River Barn & Vineyard</h3>
                <p className="lead">Milaca, St. Cloud, Saint Paul, and Brainerd MN</p>
                <p>Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.</p>
                <p>Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/property-field-wildflowers-natural.jpg" alt="Rum River Barn and Vineyard" width="800" height="500" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Documentation Section */}
      <section style={{
        background: '#FEFDFB',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              color: '#2C2416',
              marginBottom: '1rem'
            }}>
              Venue Layout Implementation
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6B4E3D',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Complete code and documentation for the alternating blocks venue section above
            </p>
          </div>

          {/* HTML Structure */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              HTML Structure
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`<!-- Venue Section - Alternating Blocks Layout -->
<section className="alternating-blocks">
  <div className="content-wrapper">
    <div className="section-header center">
      <div className="script-accent">Your Perfect Venue</div>
      <h2 className="section-title">Why Choose Rum River Barn</h2>
      <p className="lead">
        Discover what makes our venue the perfect setting for your
        unforgettable celebration
      </p>
    </div>

    <div className="blocks-container">
      <div className="block-item animate-on-scroll">
        <div className="block-content">
          <div className="number">01</div>
          <h3>A Picturesque Location For Your Special Event</h3>
          <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
          <p>When it comes to special occasions such as weddings, birthday parties,
             or other events, it is important to have the perfect setting. You want
             to ensure that your event is at a location that people will remember.</p>
          <p>Here at Rum River Barn, we understand the importance of your special
             occasion. We are different from other special event venues because we
             allow you to pretty much run the show. When you choose us, you do not
             have to worry about us saying no.</p>
          <p>Our goal is to help you have your perfect day. We tend to book up fast,
             so don't wait—call us today at <strong>320-492-8584</strong>!</p>
        </div>
        <div className="block-image styled-image light no-link">
          <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
               alt="Special event venue" width="800" height="500" />
        </div>
      </div>

      <div className="block-item reverse animate-on-scroll">
        <div className="block-content">
          <div className="number">02</div>
          <h3>Rum River Barn & Vineyard</h3>
          <p className="lead">Milaca, St. Cloud, Saint Paul, and Brainerd MN</p>
          <p>Nestled within 400 acres of pure country and rustic charm, this is
             the perfect barn wedding venue in Minnesota. On a peaceful hillside
             overlooking grape vineyards, mile-long manicured old oak forests,
             and white pines next to a whispering brook, we offer Minnesota's
             premier barn wedding venue and country special events venue for
             your custom special event.</p>
          <p>Enjoy the serenity, peacefulness, and amazing beauty which has been
             carved out of the forests and developed for the past 100 years.</p>
        </div>
        <div className="block-image styled-image light no-link">
          <img src="/images/venue/property-field-wildflowers-natural.jpg"
               alt="Rum River Barn and Vineyard" width="800" height="500" />
        </div>
      </div>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Functionality */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              JavaScript Functionality
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`// Venue Component with Scroll Animations
import React, { useEffect } from 'react'

export default function VenueDemoStandalone() {
  useEffect(() => {
    // Add scroll-triggered animations for demo purposes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all block items for animation
    const blockItems = document.querySelectorAll('.animate-on-scroll');
    blockItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(60px)';
      item.style.transition = \`opacity 0.8s ease-out \${index * 0.2}s, transform 0.8s ease-out \${index * 0.2}s\`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="alternating-blocks">
      <div className="content-wrapper">
        <div className="section-header center">
          <div className="script-accent">Your Perfect Venue</div>
          <h2 className="section-title">Why Choose Rum River Barn</h2>
          <p className="lead">
            Discover what makes our venue the perfect setting for your
            unforgettable celebration
          </p>
        </div>

        <div className="blocks-container">
          <div className="block-item animate-on-scroll">
            <div className="block-content">
              <div className="number">01</div>
              <h3>A Picturesque Location For Your Special Event</h3>
              <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
              {/* Content continues... */}
            </div>
            <div className="block-image">
              <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
                   alt="Special event venue" width="800" height="500" />
            </div>
          </div>
          {/* More blocks... */}
        </div>
      </div>
    </section>
  )
}`}
            </pre>
          </div>

          {/* CSS Styles */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              CSS Styles
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`/* Venue Section - Alternating Blocks Layout */
.alternating-blocks {
  background: linear-gradient(135deg, rgba(74, 52, 38, 1) 0%, rgba(45, 58, 47, 1) 100%);
  color: white;
  padding: 100px 0;
}

.alternating-blocks .section-header {
  color: white;
  text-align: center;
  margin-bottom: 4rem;
}

.alternating-blocks .section-title {
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
}

.alternating-blocks .script-accent {
  color: #E4C896;
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 400;
}

.alternating-blocks .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

.blocks-container {
  margin-top: 4rem;
}

.block-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;
}

.block-item:last-child {
  margin-bottom: 0;
}

.block-item.reverse {
  direction: rtl;
}

.block-item.reverse .block-content {
  direction: ltr;
}

.block-content {
  padding: 40px;
}

.block-content .number {
  font-size: 3rem;
  color: #E4C896;
  opacity: 0.5;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.block-content h3 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  font-family: 'Playfair Display', serif;
  color: white;
  line-height: 1.2;
  font-weight: 400;
}

.block-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

.block-content .lead {
  color: #E4C896;
  font-weight: 400;
  margin-bottom: 2rem;
}

.block-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}

.block-item:hover .block-image {
  transform: scale(1.02);
}

.block-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .block-item {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 80px;
  }
  
  .block-item.reverse {
    direction: ltr;
  }
  
  .block-content {
    padding: 20px;
  }
  
  .block-content h3 {
    font-size: 2rem;
  }
  
  .block-content .number {
    font-size: 2.5rem;
  }
  
  .alternating-blocks .section-title {
    font-size: 2.5rem;
  }
  
  .alternating-blocks {
    padding: 60px 0;
  }
}`}
            </pre>
          </div>

          {/* Component Features */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              Key Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>🎨 Visual Design</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Dark gradient background with sophisticated typography</li>
                  <li>Alternating layout pattern for visual rhythm</li>
                  <li>Numbered progression system for clear hierarchy</li>
                  <li>Hover effects with subtle animations</li>
                  <li>Consistent image treatment and styling</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>⚡ Performance</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>CSS Grid for optimal layout performance</li>
                  <li>Intersection Observer for scroll animations</li>
                  <li>Hardware-accelerated CSS transforms</li>
                  <li>Optimized image loading and display</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>📱 Responsive Design</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Mobile-first responsive grid system</li>
                  <li>Adaptive content scaling and spacing</li>
                  <li>Touch-friendly image interactions</li>
                  <li>Flexible typography and layout adaptation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}