import PageTemplate from '../components/PageTemplate'
import CTAFormSection from '../components/CTAFormSection'

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
      author: "Sarah & Michael Johnson",
      detail: "Married October 2024"
    },
    {
      quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
      author: "Emma & James Wilson",
      detail: "Married June 2024"
    },
    {
      quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
      author: "Amanda & Chris Thompson",
      detail: "Married February 2024"
    },
    {
      quote: "The vineyard backdrop for our ceremony was breathtaking! Our photographer couldn't stop raving about the golden hour light. This venue is a photographer's dream.",
      author: "Jennifer & David Martinez",
      detail: "Married September 2024"
    },
    {
      quote: "Our guests traveled from all over the country, and everyone said this was the most beautiful wedding they'd ever attended. The rustic elegance was perfect for our style.",
      author: "Rachel & Tyler Anderson",
      detail: "Married May 2024"
    },
    {
      quote: "The staff made everything so easy. From setup to cleanup, they handled every detail with care. We got to enjoy our day without worrying about a thing.",
      author: "Melissa & Brandon Cooper",
      detail: "Married August 2024"
    },
    {
      quote: "We fell in love with the property the moment we saw it. The barn, the vineyard, the open fields - it was everything we dreamed of for our outdoor ceremony.",
      author: "Lauren & Matthew Stevens",
      detail: "Married July 2024"
    },
    {
      quote: "The bridal suite was beautiful and so comfortable for getting ready. Having that private space for our bridal party made the morning feel special and relaxed.",
      author: "Olivia & Joshua Roberts",
      detail: "Married April 2024"
    },
    {
      quote: "Our fall wedding had the most gorgeous natural colors. The changing leaves combined with the rustic barn created the coziest atmosphere. Absolutely perfect!",
      author: "Hannah & Ethan Phillips",
      detail: "Married November 2023"
    },
    {
      quote: "The dance floor in the barn loft was incredible! Our DJ said the acoustics were amazing, and we danced until midnight. Such a fun celebration!",
      author: "Sophia & Noah Bennett",
      detail: "Married December 2023"
    },
    {
      quote: "We loved that we could have our ceremony and reception in one location. The frame barn for the ceremony and the white barn for the reception was the perfect flow.",
      author: "Ava & Mason Parker",
      detail: "Married March 2024"
    },
    {
      quote: "The sunset photos by the vineyard are some of our favorite memories. The property offers so many beautiful photo opportunities at every turn.",
      author: "Isabella & Logan Turner",
      detail: "Married August 2023"
    }
  ]

  return (
    <PageTemplate 
      currentPage="testimonials"
      heroTitle="Love Stories & Testimonials"
      heroDescription="Hear from the couples who celebrated their special day at Rum River Barn"
      heroImage="/images/venue/barn-exterior-deck-swing-under-tree.jpg"
    >

      {/* Featured Testimonial */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div className="five-star-rating" style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              color: 'var(--gold-accent, #D4A574)'
            }}>
              ★★★★★
            </div>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              lineHeight: 1.6,
              color: 'var(--warm-walnut)',
              marginBottom: '2rem',
              fontStyle: 'italic'
            }}>
              "From our first tour to our last dance, the team at Rum River made our dreams come true.
              The barn was absolutely magical, and our guests are still talking about how perfect everything was."
            </blockquote>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              color: 'var(--sage-green)'
            }}>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Sarah & Michael Johnson</div>
              <div>Married October 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Love Letters</div>
            <h2 className="section-title">What Couples Say</h2>
            <p className="lead">Real stories from real couples who celebrated at Rum River Barn</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="five-star-rating">★★★★★</div>
                <blockquote className="testimonial-quote">
                  {testimonial.quote}
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-detail">{testimonial.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">By the Numbers</div>
            <h2 className="section-title">Our Happy Couples</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '0.5rem'
              }}>
                200+
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--sage-green)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Weddings Hosted
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '0.5rem'
              }}>
                5.0
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--sage-green)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Average Rating
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '0.5rem'
              }}>
                100%
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--sage-green)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Would Recommend
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '0.5rem'
              }}>
                10+
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--sage-green)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Mini Form */}
      <CTAFormSection
        variant="light"
        background="cream"
        formSize="mini"
        scriptAccent="Ready to Create Your Own Story?"
        title="Let's Start Planning Your Perfect Day"
        description="Schedule a tour to see why so many couples choose Rum River Barn for their celebration"
        formName="testimonials-cta"
      />

    </PageTemplate>
  )
}
