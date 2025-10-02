import PageTemplate from '../components/PageTemplate'


// Hero Strip Component
function EventHeroStrip({ title, subtitle, image, ctaHref = "/contact", ctaLabel = "Check availability" }) {
  return (
    <div className="rrb-hero-strip">
      <div style={{ display: 'grid', gap: '.5rem' }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', 
          lineHeight: 1.15,
          fontFamily: 'var(--font-display)',
          color: 'var(--warm-walnut)'
        }}>
          {title}
        </h1>
        <p style={{ 
          margin: 0, 
          color: 'var(--sage-green)',
          fontSize: '1.125rem',
          lineHeight: 1.6
        }}>
          {subtitle}
        </p>
        <div>
          <a className="rrb-btn" href={ctaHref}>{ctaLabel}</a>
        </div>
      </div>
      <div className="rrb-aspect" style={{ '--rrb-aspect-ratio': '66.67%' }}>
        <img 
          src={image.src} 
          alt={image.alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px'
          }}
        />
      </div>
    </div>
  );
}


export default function EventsPage() {
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
        Events & Celebrations
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion
      </p>
    </>
  )

  return (
    <>
      {/* Hero Strip Component CSS */}
      <style>{`
        .rrb-hero-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          padding: 2rem 0;
        }

        .rrb-aspect {
          position: relative; 
          width: 100%;
        }
        .rrb-aspect::before { 
          content: ""; 
          display: block; 
          padding-top: var(--rrb-aspect-ratio, 56.25%); 
        }
        .rrb-aspect > img {
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block;
        }

        .rrb-btn {
          display: inline-block; 
          text-decoration: none;
          margin-top: .5rem; 
          padding: .6rem 1rem;
          background: var(--warm-walnut); 
          color: #fff; 
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .rrb-btn:hover { 
          background: var(--sage-green);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .rrb-hero-strip {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
      
      <PageTemplate heroContent={heroContent}>


      {/* Wedding Events - Dark Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(74, 52, 38, 1) 0%, rgba(45, 58, 47, 1) 100%)',
        color: 'white',
        padding: '100px 0'
      }}>
        <div className="content-wrapper">
          <div className="block-item">
            <div className="block-content">
              <h3 style={{
                fontSize: '42px',
                marginBottom: '25px',
                fontFamily: 'var(--font-display)',
                color: 'white'
              }}>Wedding Events</h3>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.8,
                marginBottom: '30px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces. 
                Our immaculate grounds provide the perfect backdrop for photography in every season, creating 
                memories that will last a lifetime.
              </p>
              <ul className="feature-list" style={{
                listStyle: 'none',
                marginBottom: '30px',
                paddingLeft: 0
              }}>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Indoor and outdoor ceremony spaces with flexible configurations</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Year-round venue availability with climate-controlled comfort</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Picturesque grounds perfect for wedding photography</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Capacity for up to 600 guests with authentic barn charm</li>
              </ul>
              <a href="/contact" className="btn-outline" style={{
                borderColor: 'var(--champagne-gold)',
                color: 'var(--champagne-gold)'
              }}>Plan Your Wedding</a>
            </div>
            <div className="block-image">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800" alt="Wedding Events at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Parties - Light Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        color: 'var(--warm-walnut)',
        padding: '100px 0'
      }}>
        <div className="content-wrapper">
          <div className="block-item reverse" style={{ direction: 'rtl' }}>
            <div className="block-content" style={{ direction: 'ltr' }}>
              <h3 style={{
                fontSize: '42px',
                marginBottom: '25px',
                fontFamily: 'var(--font-display)',
                color: 'var(--warm-walnut)'
              }}>Engagement Parties</h3>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.8,
                marginBottom: '30px',
                color: 'var(--sage-green)'
              }}>
                Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty and 
                picturesque vineyards. The perfect way to bring both sides of your family together before your 
                special day in an intimate, rustic setting.
              </p>
              <ul className="feature-list" style={{
                listStyle: 'none',
                marginBottom: '30px',
                paddingLeft: 0
              }}>
                <li style={{ color: 'var(--sage-green)' }}>Bring both families together in a relaxed, beautiful setting</li>
                <li style={{ color: 'var(--sage-green)' }}>Rustic venue setting with stunning vineyard views</li>
                <li style={{ color: 'var(--sage-green)' }}>Flexible capacity arrangements for intimate gatherings</li>
                <li style={{ color: 'var(--sage-green)' }}>Pre-wedding celebration planning with experienced staff</li>
              </ul>
              <a href="/contact" className="btn-outline" style={{
                borderColor: 'var(--warm-walnut)',
                color: 'var(--warm-walnut)'
              }}>Plan Your Engagement</a>
            </div>
            <div className="block-image">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" alt="Engagement Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Parties - Dark Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(74, 52, 38, 1) 0%, rgba(45, 58, 47, 1) 100%)',
        color: 'white',
        padding: '100px 0'
      }}>
        <div className="content-wrapper">
          <div className="block-item">
            <div className="block-content">
              <h3 style={{
                fontSize: '42px',
                marginBottom: '25px',
                fontFamily: 'var(--font-display)',
                color: 'white'
              }}>Birthday Parties</h3>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.8,
                marginBottom: '30px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space. 
                Our picturesque location provides the perfect setting for birthdays of all ages, with both indoor 
                comfort and outdoor charm.
              </p>
              <ul className="feature-list" style={{
                listStyle: 'none',
                marginBottom: '30px',
                paddingLeft: 0
              }}>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Recently renovated rustic space with modern amenities</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Suitable for milestone birthdays of all ages</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Seasonal outdoor mezzanine for additional space</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Capacity for up to 200 guests in picturesque setting</li>
              </ul>
              <a href="/contact" className="btn-outline" style={{
                borderColor: 'var(--champagne-gold)',
                color: 'var(--champagne-gold)'
              }}>Book Birthday Party</a>
            </div>
            <div className="block-image">
              <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800" alt="Birthday Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Parties - Light Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        color: 'var(--warm-walnut)',
        padding: '100px 0'
      }}>
        <div className="content-wrapper">
          <div className="block-item reverse" style={{ direction: 'rtl' }}>
            <div className="block-content" style={{ direction: 'ltr' }}>
              <h3 style={{
                fontSize: '42px',
                marginBottom: '25px',
                fontFamily: 'var(--font-display)',
                color: 'var(--warm-walnut)'
              }}>Graduation Parties</h3>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.8,
                marginBottom: '30px',
                color: 'var(--sage-green)'
              }}>
                Celebrate high school, college, or military graduations with plenty of space for eating, dancing, and games. 
                Warm summer sunlight creates an ideal backdrop for memorable photos, honoring achievements in a setting 
                that matches the significance of the milestone.
              </p>
              <ul className="feature-list" style={{
                listStyle: 'none',
                marginBottom: '30px',
                paddingLeft: 0
              }}>
                <li style={{ color: 'var(--sage-green)' }}>Perfect for high school, college, and military graduations</li>
                <li style={{ color: 'var(--sage-green)' }}>Spacious areas for dining, dancing, and celebration activities</li>
                <li style={{ color: 'var(--sage-green)' }}>Ideal natural lighting for graduation photos and memories</li>
                <li style={{ color: 'var(--sage-green)' }}>Large group capacity with flexible event arrangements</li>
              </ul>
              <a href="/contact" className="btn-outline" style={{
                borderColor: 'var(--warm-walnut)',
                color: 'var(--warm-walnut)'
              }}>Celebrate Graduation</a>
            </div>
            <div className="block-image">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" alt="Graduation Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Parties - Dark Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(74, 52, 38, 1) 0%, rgba(45, 58, 47, 1) 100%)',
        color: 'white',
        padding: '100px 0'
      }}>
        <div className="content-wrapper">
          <div className="block-item">
            <div className="block-content">
              <h3 style={{
                fontSize: '42px',
                marginBottom: '25px',
                fontFamily: 'var(--font-display)',
                color: 'white'
              }}>Holiday Parties</h3>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.8,
                marginBottom: '30px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Host your holiday celebration with plenty of indoor and outdoor space for eating and dancing. 
                Perfect for Christmas parties, Valentine's Day celebrations, Fourth of July gatherings, and more. 
                Create magical holiday memories in our festive barn setting.
              </p>
              <ul className="feature-list" style={{
                listStyle: 'none',
                marginBottom: '30px',
                paddingLeft: 0
              }}>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Indoor and outdoor celebration spaces for any season</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Perfect venue for Christmas and winter holiday parties</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Beautiful setting for Valentine's Day and spring celebrations</li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Preferred catering and alcohol vendors available for events</li>
              </ul>
              <a href="/contact" className="btn-outline" style={{
                borderColor: 'var(--champagne-gold)',
                color: 'var(--champagne-gold)'
              }}>Plan Holiday Event</a>
            </div>
            <div className="block-image">
              <img src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800" alt="Holiday Parties at Rum River Barn" width="800" height="500" />
            </div>
          </div>
        </div>
      </section>


      {/* Contact Info Section */}
      <section className="section" style={{ background: 'var(--warm-walnut)', color: 'white' }}>
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              opacity: 0.9
            }}>
              Ready to Plan Your Event?
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 400,
              marginBottom: '1.5rem'
            }}>
              Let's Start Planning Together
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.8,
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Contact us today to schedule a tour of our beautiful venue and discuss how we can make your special event unforgettable.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  opacity: 0.8
                }}>
                  Call Us
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  (320) 492-8584
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  (612) 801-0546
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  opacity: 0.8
                }}>
                  Visit Us
                </div>
                <div style={{ fontSize: '1rem' }}>
                  42618 78th Street<br />
                  Hillman, MN 56338
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  opacity: 0.8
                }}>
                  Service Area
                </div>
                <div style={{ fontSize: '1rem' }}>
                  Milaca, St. Cloud,<br />
                  St. Paul & Beyond
                </div>
              </div>
            </div>

            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'white',
                color: 'var(--warm-walnut)',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Schedule Your Tour
            </a>
          </div>
        </div>
      </section>

      </PageTemplate>
    </>
  )
}
