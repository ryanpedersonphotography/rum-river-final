import PageTemplate from '../components/PageTemplate'

export default function PropertyPage() {
  const heroContent = (
    <>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: 'white'
      }}>
        The Property
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.
      </p>
    </>
  )

  return (
    <PageTemplate heroContent={heroContent}>
      
      {/* Discover Our Spaces Section */}
      <section id="venue-tabs" className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead">Every corner tells a story, every space creates memories</p>
          </div>

          <div className="venue-grid">
            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="White Barn Loft" width="800" height="600" />
                <div className="venue-card-badge">Main Event Space</div>
              </div>
              <div className="venue-card-content">
                <h3>White Barn Loft</h3>
                <p>The white barn is the main event barn consisting of the large loft area and the lower level lounge. The original hay loft is spacious and open with tall ceilings and hardwood floors. The loft can accommodate guests for a ceremony, reception dinner, and/or a dance.</p>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800" alt="Frame Barn" width="800" height="600" />
                <div className="venue-card-badge">Ceremony Space</div>
              </div>
              <div className="venue-card-content">
                <h3>Frame Barn</h3>
                <p>This open timber frame barn is a rustic shelter just begging for white sheers hanging in the breeze with string lights overhead at an outdoor ceremony. Either as first choice or a rain back-up location, there is plenty of space for a wedding ceremony. Also, with an expanse of grassy fields surrounding, the area is perfect for setting up a canopy tent, lawn games, or a dinner under the stars.</p>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="The Grounds" width="800" height="600" />
                <div className="venue-card-badge">22 Acres</div>
              </div>
              <div className="venue-card-content">
                <h3>The Grounds</h3>
                <p>With plenty of open space and grassy fields, the grounds offer many places for outdoor celebrations. The Vineyards boast 14 of the 22 Minnesota hardy grapes produced by the University of Minnesota for making wine. These grapevines make a beautiful natural backdrop for an outdoor ceremony or cocktails on the lawn.</p>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800" alt="Lounge" width="800" height="600" />
                <div className="venue-card-badge">Intimate Setting</div>
              </div>
              <div className="venue-card-content">
                <h3>Lounge</h3>
                <p>Located on the main level of the white barn, the Lounge is a perfect place for an intimate dinner or cocktail hour. Complete with high top tables, low lighting, and a full size bar, guests can have a drink or appetizers before moving to dinner or dancing upstairs.</p>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800" alt="Bridal Room" width="800" height="600" />
                <div className="venue-card-badge">Getting Ready</div>
              </div>
              <div className="venue-card-content">
                <h3>Bridal Room</h3>
                <p>As the original homestead of the property, this former one room house is a lovely little retreat for the Bride and bridal party to relax and get ready for the big day.</p>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800" alt="Bridal Courtyard" width="800" height="600" />
                <div className="venue-card-badge">Private Outdoor Space</div>
              </div>
              <div className="venue-card-content">
                <h3>Bridal Courtyard</h3>
                <p>This outdoor courtyard is the perfect place for the Bride to enjoy the beauty of the day while remaining private before her walk down the isle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--warm-cream) 0%, var(--blush-pink) 100%)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div className="script-accent">Ready to Visit?</div>
            <h2 className="section-title">Schedule Your Property Tour</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Experience the beauty of Rum River Barn in person. Contact us to schedule a private tour of our property.
            </p>
            <a href="/contact" className="romantic-button primary">
              Book Your Tour
            </a>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}