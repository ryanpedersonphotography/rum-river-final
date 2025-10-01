import PageTemplate from '../components/PageTemplate'

const events = [
  {
    id: 'weddings',
    icon: '💍',
    title: 'Wedding Events',
    tagline: 'Your Dream Day',
    description: 'Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces. Our immaculate grounds provide the perfect backdrop for photography in every season.',
    capacity: 'Up to 600 guests',
    features: [
      'Indoor and outdoor ceremony spaces',
      'Year-round venue availability',
      'Picturesque grounds for photography',
      'White Barn Loft with natural beauty',
      'One of the longest-running barn venues in Minnesota'
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800'
  },
  {
    id: 'engagement',
    icon: '💕',
    title: 'Engagement Parties',
    tagline: 'Celebrate Your Love',
    description: 'Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty and picturesque vineyards. The perfect way to bring both sides of your family together.',
    capacity: 'Flexible capacity',
    features: [
      'Bring both families together before the wedding',
      'Relax with a beautiful celebration',
      'Rustic venue setting with vineyard views',
      'Celebrate with the people you love most',
      'Pre-wedding planning celebration'
    ],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800'
  },
  {
    id: 'birthday',
    icon: '🎂',
    title: 'Birthday Parties',
    tagline: 'Milestone Celebrations',
    description: 'Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space. Our picturesque location provides the perfect setting for birthdays of all ages.',
    capacity: 'Up to 200 guests',
    features: [
      'Recently renovated rustic space',
      'Suitable for all ages',
      'Seasonal outdoor mezzanine',
      'Picturesque celebration setting',
      'Flexible event space'
    ],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800'
  },
  {
    id: 'graduation',
    icon: '🎓',
    title: 'Graduation Parties',
    tagline: 'Honor Their Achievement',
    description: 'Celebrate high school, college, or military graduations with plenty of space for eating, dancing, and games. Warm summer sunlight creates an ideal backdrop for memorable photos.',
    capacity: 'Large groups welcome',
    features: [
      'High school & college graduations',
      'Military graduation celebrations',
      'Spacious areas for dining and dancing',
      'Perfect for graduation photos',
      'Room for games and activities'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
  },
  {
    id: 'holiday',
    icon: '🎄',
    title: 'Holiday Parties',
    tagline: 'Seasonal Celebrations',
    description: 'Host your holiday celebration with plenty of indoor and outdoor space for eating and dancing. Perfect for Christmas, Valentine\'s Day, Fourth of July, and more.',
    capacity: 'Large gatherings',
    features: [
      'Indoor and outdoor celebration spaces',
      'Perfect for Christmas parties',
      'Valentine\'s Day celebrations',
      'Fourth of July gatherings',
      'Preferred catering and alcohol vendors available'
    ],
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800'
  }
]

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
    <PageTemplate heroContent={heroContent}>

      {/* Intro Section */}
      <section className="section">
        <div className="content-wrapper">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div className="script-accent" style={{ marginBottom: '1rem' }}>Your Special Day</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Celebrate Life's Milestones
            </h2>
            <p className="lead" style={{ marginBottom: '0' }}>
              At Rum River Barn & Vineyard, we provide the perfect rustic setting for all of life's most important celebrations.
              Located in Hillman, MN, near St. Cloud and St. Paul, our venue offers flexible indoor and outdoor spaces
              surrounded by natural beauty and picturesque vineyards.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid - Alternating Layout */}
      {events.map((event, index) => (
        <section
          key={event.id}
          className="section"
          style={{
            background: index % 2 === 0 ? 'white' : 'var(--cream-pearl)'
          }}
        >
          <div className="content-wrapper">
            <div className="content-grid" style={{
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
            }}>
              <div className="experience-content">
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {event.icon}
                </div>
                <div className="script-accent">{event.tagline}</div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '1.5rem'
                }}>
                  {event.title}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: 'var(--sage-green)',
                  marginBottom: '1.5rem'
                }}>
                  {event.description}
                </p>

                <div style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: index % 2 === 0 ? 'var(--cream-pearl)' : 'white',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--warm-walnut)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>
                    Capacity
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--sage-green)'
                  }}>
                    {event.capacity}
                  </div>
                </div>

                <div className="experience-features">
                  {event.features.map((feature, i) => (
                    <div key={i} className="feature-item">
                      <div className="feature-icon">✓</div>
                      <div className="feature-content">
                        <p>{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="romantic-button" style={{ marginTop: '1.5rem' }}>
                  Inquire About {event.title}
                </a>
              </div>

              <div className="experience-image image-reveal">
                <img src={event.image} alt={event.title} width="800" height="600" />
              </div>
            </div>
          </div>
        </section>
      ))}

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
  )
}
