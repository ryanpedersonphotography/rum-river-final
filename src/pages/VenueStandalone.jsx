export default function VenueStandalone() {
  return (
    <>

      {/* Your Perfect Venue Section - Numbered Feature Blocks */}
      <section className="alternating-blocks">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Your Perfect Venue</div>
            <h2 className="section-title">Why Choose Rum River Barn</h2>
            <p className="lead">Discover what makes our venue the perfect setting for your unforgettable celebration</p>
          </div>

          <div className="blocks-container">
            <div className="block-item">
              <div className="block-content">
                <div className="number">01</div>
                <h3>A Picturesque Location For Your Special Event</h3>
                <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
                <p>When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.</p>
                <p>Here at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.</p>
                <p>Our goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at <strong>612-801-0546</strong>!</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg" alt="Special event venue" width="800" height="500" />
              </div>
            </div>

            <div className="block-item reverse">
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

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Perfect Venue Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML and CSS implementation of the alternating blocks section above</p>
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
{`<!-- Your Perfect Venue Section - Numbered Feature Blocks -->
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
      <div className="block-item">
        <div className="block-content">
          <div className="number">01</div>
          <h3>A Picturesque Location For Your Special Event</h3>
          <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
          <p>When it comes to special occasions such as weddings, birthday parties, 
             or other events, it is important to have the perfect setting...</p>
          <p>Here at Rum River Barn, we understand the importance of your special 
             occasion. We are different from other special event venues...</p>
          <p>Our goal is to help you have your perfect day. We tend to book up fast, 
             so don't wait—call us today at <strong>612-801-0546</strong>!</p>
        </div>
        <div className="block-image styled-image light no-link">
          <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg" 
               alt="Special event venue" width="800" height="500" />
        </div>
      </div>

      <div className="block-item reverse">
        <div className="block-content">
          <div className="number">02</div>
          <h3>Rum River Barn & Vineyard</h3>
          <p className="lead">Milaca, St. Cloud, Saint Paul, and Brainerd MN</p>
          <p>Nestled within 400 acres of pure country and rustic charm, this is 
             the perfect barn wedding venue in Minnesota...</p>
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
{`/* Numbered Feature Blocks - Alternating Layout */
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
  font-family: var(--font-display);
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.alternating-blocks .script-accent {
  color: var(--champagne-gold);
  font-family: var(--font-script);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.alternating-blocks .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  line-height: 1.7;
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
  color: var(--champagne-gold);
  opacity: 0.5;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 20px;
  font-family: var(--font-display);
}

.block-content h3 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  font-family: var(--font-display);
  color: white;
  line-height: 1.2;
}

.block-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

.block-content .lead {
  color: var(--champagne-gold);
  font-weight: 400;
  margin-bottom: 2rem;
}

.block-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
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
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}