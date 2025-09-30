import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Floating CTA Button */}
      <div className="floating-cta">
        <span>📅</span>
        Schedule Your Tour
      </div>

      {/* Hero Section - Enhanced */}
      <section id="home" className="hero-enhanced">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="hero-year-badge">Est. 2005</div>
            <div className="script-accent">Where Dreams Begin</div>
            <h1 className="hero-headline">
              Rum River<br />
              <span className="hero-accent">Wedding Barn</span>
            </h1>
            <p className="lead hero-lead">
              Nestled along Minnesota's scenic Rum River, our historic barn offers
              the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="romantic-button primary">Schedule Your Visit</a>
              <a href="/gallery" className="romantic-button outline">View Our Gallery</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover Your Perfect Day</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="trust-section">
        <div className="content-wrapper">
          <div className="script-accent center">As Featured In</div>
          <div className="trust-badges">
            <div className="trust-badge">The Knot</div>
            <div className="trust-badge">WeddingWire</div>
            <div className="trust-badge">Martha Stewart Weddings</div>
            <div className="trust-badge">Minnesota Bride</div>
            <div className="trust-badge">Style Me Pretty</div>
          </div>
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Couples Married</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Star Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Showcase Section */}
      <section className="venue-showcase-enhanced section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead">Every corner tells a story, every space creates memories that last a lifetime.</p>
          </div>

          <div className="venue-grid">
            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Historic Barn Interior" width="800" height="600" />
                <div className="venue-card-badge">Historic Barn</div>
              </div>
              <div className="venue-card-content">
                <h3>The Grand Barn</h3>
                <p>Our crown jewel features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into historic charm.</p>
                <div className="venue-features">
                  <span>• Up to 300 guests</span>
                  <span>• Climate controlled</span>
                  <span>• Original 1920s architecture</span>
                </div>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800" alt="Vineyard Ceremony" width="800" height="600" />
                <div className="venue-card-badge">Ceremony Sites</div>
              </div>
              <div className="venue-card-content">
                <h3>Vineyard Ceremonies</h3>
                <p>Exchange vows surrounded by rolling hills and grape vines, with multiple ceremony locations to choose from.</p>
                <div className="venue-features">
                  <span>• 5 ceremony locations</span>
                  <span>• Natural amphitheater</span>
                  <span>• Sunset perfection</span>
                </div>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800" alt="Bridal Suite" width="800" height="600" />
                <div className="venue-card-badge">Bridal Suite</div>
              </div>
              <div className="venue-card-content">
                <h3>Bridal Retreat</h3>
                <p>A private sanctuary for getting ready, complete with vintage furnishings, natural lighting, and peaceful garden views.</p>
                <div className="venue-features">
                  <span>• Professional lighting</span>
                  <span>• Garden views</span>
                  <span>• Vintage charm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Stories Gallery */}
      <section className="love-stories-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Real Love Stories</div>
            <h2 className="section-title">Weddings at the Barn</h2>
            <p className="lead">Every celebration tells a unique story of love, laughter, and happily ever after.</p>
          </div>

          <div className="wedding-gallery">
            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200" alt="Emma & James Wedding" width="1200" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Emma & James</div>
                <div className="gallery-season">Summer 2024</div>
                <div className="gallery-details">200 Guests • Garden Ceremony</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800" alt="Sarah & Michael Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Sarah & Michael</div>
                <div className="gallery-season">Fall 2024</div>
                <div className="gallery-details">150 Guests • Barn Reception</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800" alt="Rachel & David Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Rachel & David</div>
                <div className="gallery-season">Spring 2024</div>
                <div className="gallery-details">175 Guests • Vineyard Ceremony</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Jessica & Ryan Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Jessica & Ryan</div>
                <div className="gallery-season">Summer 2024</div>
                <div className="gallery-details">125 Guests • Forest Ceremony</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800" alt="Amanda & Chris Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Amanda & Chris</div>
                <div className="gallery-season">Winter 2023</div>
                <div className="gallery-details">75 Guests • Intimate Celebration</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200" alt="Lauren & Mark Wedding" width="1200" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Lauren & Mark</div>
                <div className="gallery-season">Fall 2023</div>
                <div className="gallery-details">250 Guests • Full Weekend</div>
              </div>
            </div>
          </div>

          <div className="gallery-footer">
            <a href="/gallery" className="romantic-button outline">View Full Gallery</a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section">
        <div className="content-wrapper">
          <div className="content-grid">
            <div className="experience-content">
              <div className="script-accent">The Rum River Experience</div>
              <h2 className="section-title">More Than a Venue</h2>
              <p className="lead">
                We don't just provide a space—we create an experience. From your first visit to your last dance,
                our dedicated team ensures every detail reflects your unique love story.
              </p>

              <div className="experience-features">
                <div className="feature-item">
                  <div className="feature-icon">🌿</div>
                  <div className="feature-content">
                    <h4>All-Inclusive Planning</h4>
                    <p>Our experienced coordinators handle every detail, so you can focus on what matters most—each other.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✨</div>
                  <div className="feature-content">
                    <h4>Customizable Packages</h4>
                    <p>From intimate gatherings to grand celebrations, we tailor every element to your vision and budget.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🏡</div>
                  <div className="feature-content">
                    <h4>Historic Charm</h4>
                    <p>Our lovingly restored 1920s barn combines century-old character with modern convenience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-image image-reveal">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" alt="Wedding Celebration" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="investment-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Investment in Forever</div>
            <h2 className="section-title">Wedding Collections</h2>
            <p className="lead">Choose the collection that best fits your celebration, with transparent pricing and no hidden fees.</p>
          </div>

          <div className="packages-grid">
            <div className="package-card">
              <div className="package-header">
                <h3>Intimate</h3>
                <div className="package-price">
                  <span className="amount">$3,500</span>
                  <span className="detail">up to 75 guests</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature">✓ 6-hour venue rental</div>
                <div className="feature">✓ Ceremony & reception spaces</div>
                <div className="feature">✓ Tables, chairs & linens</div>
                <div className="feature">✓ Bridal suite access</div>
                <div className="feature">✓ Setup & breakdown</div>
              </div>
              <a href="/rental-info" className="romantic-button outline full-width">Learn More</a>
            </div>

            <div className="package-card featured">
              <div className="package-badge">Most Popular</div>
              <div className="package-header">
                <h3>Classic</h3>
                <div className="package-price">
                  <span className="amount">$5,500</span>
                  <span className="detail">up to 150 guests</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature">✓ 10-hour venue rental</div>
                <div className="feature">✓ Full property access</div>
                <div className="feature">✓ Premium décor package</div>
                <div className="feature">✓ Both suites included</div>
                <div className="feature">✓ Day-before setup</div>
                <div className="feature">✓ Complimentary rehearsal</div>
              </div>
              <a href="/contact" className="romantic-button primary full-width">Book Consultation</a>
            </div>

            <div className="package-card">
              <div className="package-header">
                <h3>Grand</h3>
                <div className="package-price">
                  <span className="amount">$8,500</span>
                  <span className="detail">up to 300 guests</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature">✓ Full weekend rental</div>
                <div className="feature">✓ All spaces included</div>
                <div className="feature">✓ Luxury décor collection</div>
                <div className="feature">✓ Golf cart transportation</div>
                <div className="feature">✓ Welcome reception</div>
                <div className="feature">✓ Morning-after brunch</div>
              </div>
              <a href="/rental-info" className="romantic-button outline full-width">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Love Letters</div>
            <h2 className="section-title">What Couples Say</h2>
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

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="content-wrapper">
          <div className="contact-grid">
            <div className="contact-content">
              <div className="script-accent">Let's Start Planning</div>
              <h2 className="section-title">Schedule Your Visit</h2>
              <p className="lead">
                Ready to see where your love story will unfold? Schedule a private tour
                and let us show you why Rum River Wedding Barn is the perfect setting for your celebration.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Visit Us</h4>
                    <p>42618 78th Street<br />Hillman, MN 56338</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>612-801-0546<br />320-492-8584</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>hello@rumriverweddings.com<br />We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-header">
                  <h3>Book Your Tour</h3>
                  <p>Fill out the form below and we'll be in touch within 24 hours.</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Bride's Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Partner's Name</label>
                    <input type="text" placeholder="Partner's name" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(123) 456-7890" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Wedding Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Guest Count</label>
                    <select>
                      <option>Select guest count</option>
                      <option>50-100 guests</option>
                      <option>100-150 guests</option>
                      <option>150-200 guests</option>
                      <option>200+ guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Tell us about your dream wedding</label>
                  <textarea rows={4} placeholder="Share your vision with us..."></textarea>
                </div>

                <button type="submit" className="romantic-button primary full-width">
                  Schedule My Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
