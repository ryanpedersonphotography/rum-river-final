export default function LoveLettersStandalone() {
  return (
    <>
      {/* Love Letters - What Couples Say */}
      <section className="testimonials-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Love Letters</div>
            <h2 className="section-title">What Couples Say</h2>
            <p className="lead">Real stories from real couples who celebrated at Rum River Barn</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "From our first tour to our last dance, the team at Rum River made our dreams come true.
                The barn was absolutely magical, and our guests are still talking about how perfect everything was."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Sarah & Michael Johnson</div>
                <div className="author-detail">Married October 2024</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations.
                The historic charm combined with modern amenities was exactly what we were looking for."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Emma & James Wilson</div>
                <div className="author-detail">Married June 2024</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "The team went above and beyond to make our winter wedding absolutely magical.
                Even in February, the barn felt warm and romantic. We couldn't have asked for more."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Amanda & Chris Thompson</div>
                <div className="author-detail">Married February 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Love Letters Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the testimonials section above</p>
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
{`<!-- Love Letters - What Couples Say Section -->
<section className="testimonials-section section">
  <div className="content-wrapper">
    <div className="section-header center">
      <div className="script-accent">Love Letters</div>
      <h2 className="section-title">What Couples Say</h2>
      <p className="lead">Real stories from real couples who celebrated at Rum River Barn</p>
    </div>

    <div className="testimonials-grid">
      <!-- Testimonial Card 1 -->
      <div className="testimonial-card">
        <div className="five-star-rating">★★★★★</div>
        <blockquote className="testimonial-quote">
          "From our first tour to our last dance, the team at Rum River made our dreams come true.
          The barn was absolutely magical, and our guests are still talking about how perfect everything was."
        </blockquote>
        <div className="testimonial-author">
          <div className="author-name">Sarah & Michael Johnson</div>
          <div className="author-detail">Married October 2024</div>
        </div>
      </div>

      <!-- Testimonial Card 2 -->
      <div className="testimonial-card">
        <div className="five-star-rating">★★★★★</div>
        <blockquote className="testimonial-quote">
          "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations.
          The historic charm combined with modern amenities was exactly what we were looking for."
        </blockquote>
        <div className="testimonial-author">
          <div className="author-name">Emma & James Wilson</div>
          <div className="author-detail">Married June 2024</div>
        </div>
      </div>

      <!-- Testimonial Card 3 -->
      <div className="testimonial-card">
        <div className="five-star-rating">★★★★★</div>
        <blockquote className="testimonial-quote">
          "The team went above and beyond to make our winter wedding absolutely magical.
          Even in February, the barn felt warm and romantic. We couldn't have asked for more."
        </blockquote>
        <div className="testimonial-author">
          <div className="author-name">Amanda & Chris Thompson</div>
          <div className="author-detail">Married February 2024</div>
        </div>
      </div>
    </div>
  </div>
</section>`}
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
{`// Simple React Component - No JavaScript needed!
// This is a static section with no interactivity

export default function LoveLettersSection() {
  return (
    <section className="testimonials-section section">
      <div className="content-wrapper">
        <div className="section-header center">
          <div className="script-accent">Love Letters</div>
          <h2 className="section-title">What Couples Say</h2>
          <p className="lead">Real stories from real couples who celebrated at Rum River Barn</p>
        </div>

        <div className="testimonials-grid">
          {/* Static testimonial cards - no dynamic behavior */}
          <div className="testimonial-card">
            <div className="five-star-rating">★★★★★</div>
            <blockquote className="testimonial-quote">
              "From our first tour to our last dance, the team at Rum River made our dreams come true.
              The barn was absolutely magical, and our guests are still talking about how perfect everything was."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-name">Sarah & Michael Johnson</div>
              <div className="author-detail">Married October 2024</div>
            </div>
          </div>

          {/* Additional static cards... */}
        </div>
      </div>
    </section>
  )
}`}
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
{`/* Love Letters Testimonials Section */
.testimonials-section {
  background: white;
  padding: 100px 0;
}

.testimonials-section .section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials-section .script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
  display: block;
}

.testimonials-section .section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
}

.testimonials-section .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Testimonial Cards */
.testimonial-card {
  background: var(--romantic-ivory);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}


/* Subtle background pattern */
.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(212, 165, 165, 0.03) 0%, 
    transparent 50%, 
    rgba(212, 165, 165, 0.03) 100%);
  pointer-events: none;
}

/* Five Star Rating */
.five-star-rating {
  font-size: 1.5rem;
  color: var(--champagne-gold);
  margin-bottom: 1.5rem;
  letter-spacing: 0.25rem;
}

/* Testimonial Quote */
.testimonial-quote {
  font-family: var(--font-display);
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--warm-walnut);
  font-style: italic;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 1;
}

/* Quote marks */
.testimonial-quote::before,
.testimonial-quote::after {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--dusty-rose);
  opacity: 0.3;
  position: absolute;
  line-height: 1;
}

.testimonial-quote::before {
  content: '"';
  top: -10px;
  left: -20px;
}

.testimonial-quote::after {
  content: '"';
  bottom: -25px;
  right: -20px;
}

/* Testimonial Author */
.testimonial-author {
  position: relative;
  z-index: 1;
}

.author-name {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dusty-rose);
  margin-bottom: 0.5rem;
}

.author-detail {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--sage-green);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Animation Classes */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }
  
  .testimonials-section .section-title {
    font-size: 2.5rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonial-quote {
    font-size: 1rem;
  }
  
  .testimonial-quote::before,
  .testimonial-quote::after {
    font-size: 1.5rem;
  }
  
  .testimonial-quote::before {
    top: -5px;
    left: -15px;
  }
  
  .testimonial-quote::after {
    bottom: -15px;
    right: -15px;
  }
}

/* Alternative Layout - Masonry Style */
.testimonials-grid.masonry {
  columns: 3;
  column-gap: 2.5rem;
}

.testimonials-grid.masonry .testimonial-card {
  break-inside: avoid;
  margin-bottom: 2.5rem;
}

@media (max-width: 1024px) {
  .testimonials-grid.masonry {
    columns: 2;
  }
}

@media (max-width: 768px) {
  .testimonials-grid.masonry {
    columns: 1;
  }
}

/* Featured Testimonial Variant */
.testimonial-card.featured {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--blush-pink) 0%, var(--romantic-ivory) 100%);
}

.testimonial-card.featured .testimonial-quote {
  font-size: 1.25rem;
}

.testimonial-card.featured .author-name {
  font-size: 1.25rem;
}

/* Compact Version */
.testimonials-section.compact {
  padding: 60px 0;
}

.testimonials-section.compact .testimonials-grid {
  gap: 1.5rem;
}

.testimonials-section.compact .testimonial-card {
  padding: 1.5rem;
}

.testimonials-section.compact .testimonial-quote {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}