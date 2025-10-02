import { useEffect, useRef } from 'react'
import { Timeline } from '@knight-lab/timelinejs'
import '@knight-lab/timelinejs/dist/css/timeline.css'
import PageTemplate from '../components/PageTemplate'
import { historyTimeline } from '../data/historyTimeline'

export default function HistoryPage() {
  const timelineRef = useRef(null)

  useEffect(() => {
    if (timelineRef.current) {
      // Initialize TimelineJS
      new Timeline(timelineRef.current, historyTimeline, {
        height: 650,
        start_at_slide: 0,
        default_bg_color: { r: 255, g: 255, b: 255 },
        timenav_height: 200,
        timenav_height_percentage: 30,
        scale_factor: 2,
        font: 'montserrat-playfair'
      })
    }
  }, [])

  return (
    <PageTemplate 
      currentPage="history"
      heroTitle="Our History"
      heroDescription="From Norwegian settlers to Minnesota's premier barn venue - a journey spanning 170 years"
      heroImage="/images/venue/barn-exterior-deck-stairs-trees.jpg"
    >

      {/* Intro Section */}
      <section className="section">
        <div className="content-wrapper">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div className="script-accent" style={{ marginBottom: '1rem' }}>A Legacy of Excellence</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              The Story of Our Land
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              The Rum River Barn & Vineyard is a great representation of the history and settlement of Central Minnesota.
              From the golden age of logging through pioneering Norwegian settlers to today's premier event venue,
              our land has witnessed and shaped Minnesota history.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div className="section-header center" style={{ marginBottom: '3rem' }}>
            <div className="script-accent">Journey Through Time</div>
            <h2 className="section-title">Our Timeline</h2>
            <p className="lead">Explore the rich history of our property from 1855 to today</p>
          </div>

          {/* TimelineJS Container */}
          <div
            ref={timelineRef}
            style={{
              width: '100%',
              height: '650px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          ></div>
        </div>
      </section>

      {/* Historical Photo Gallery */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Through the Years</div>
            <h2 className="section-title">Historical Photo Gallery</h2>
            <p className="lead">Authentic photographs from the Selmer family archives spanning 100+ years</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* 1914-1959: Early Settlement Era */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/historical/selmer-family-winter-woodpile-1940s.jpg"
                alt="Selmer family on woodpile during Minnesota winter, 1940s"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '0.5rem'
                }}>
                  Norwegian Settlers (1914-1959)
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--sage-green)',
                  margin: 0
                }}>
                  Sigvart and Helga Selmer on their woodpile during a harsh Minnesota winter, showcasing the self-sufficient lifestyle of early Norwegian settlers.
                </p>
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/historical/lumber-preparation-white-pine-1930s.jpg"
                alt="Processing giant white pine logs, 1930s"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '0.5rem'
                }}>
                  Processing the Giant Pine (1932)
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--sage-green)',
                  margin: 0
                }}>
                  Processing the massive white pine that would later become the lumber for the iconic White Barn. It took seven horses to haul this log to the farm.
                </p>
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/historical/early-barn-construction-1940s.jpg"
                alt="White Barn construction, 1942-1952"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '0.5rem'
                }}>
                  White Barn Construction (1942-1952)
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--sage-green)',
                  margin: 0
                }}>
                  Construction of the historic White Barn using lumber from the giant white pine, dried and aged for over 20 years before use.
                </p>
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/historical/harold-selmer-dairy-cow-farming.jpg"
                alt="Harold Selmer with dairy cow"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '0.5rem'
                }}>
                  Harold's Farming Era (1959-2003)
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--sage-green)',
                  margin: 0
                }}>
                  Harold Selmer with one of his dairy cows, continuing the family farming tradition for over 40 years until selling to the Buzzell family.
                </p>
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/historical/stone-clearing-farming-work-1940s.jpg"
                alt="Stone clearing and farming work, 1940s"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '0.5rem'
                }}>
                  Land Clearing & Preparation
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--sage-green)',
                  margin: 0
                }}>
                  Family members clearing stones from fields - the backbreaking work required to transform wooded land into productive farmland.
                </p>
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/historical/dairy-cattle-operations-1970s.jpg"
                alt="Dairy cattle operations, 1970s"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--warm-walnut)',
                  marginBottom: '0.5rem'
                }}>
                  Dairy Operations (1970s)
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--sage-green)',
                  margin: 0
                }}>
                  Harold's successful dairy operation at its peak, with Holstein cattle grazing the same fields where events are held today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Highlights */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Living History</div>
            <h2 className="section-title">Historic Remnants</h2>
            <p className="lead">See pieces of history preserved throughout our property</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                The White Barn
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                Constructed from a virgin white pine found in 1932, the lumber was dried for 10 years,
                hand-sawed, and aged another 10 years before construction. The west roof was sheeted entirely by one tree.
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Norwegian Plow
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                At our entry sits the horse-driven plow the Selmers brought from Norway in 1914.
                It was used to clear the vast wooded area to create open land for crops.
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Bridal Room
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                The original one-room house built by Sigvart and Helga Selmer in 1914 still remains on the property,
                now serving as the bridal dressing room - a perfect blend of history and modern celebration.
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Tibbett's Brook
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                Created by the Tibbett's Logging Company to transport pine logs to the Rum River and down to the Twin Cities.
                Remnants of logging camps from over a century ago remain on the banks.
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Original Tools
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                Historic hand saws, hay sickles, the horse-drawn scoop shovel used for six weeks to dig the basement,
                oil lamps, and wood-burning stoves tell the story of pioneer life.
              </p>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                The Vineyard
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)'
              }}>
                Planted in 2003, our three acres feature 14 grape varietals developed by the University of Minnesota,
                bringing a new agricultural tradition to this historic farming land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cream">
        <div className="content-wrapper">
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div className="script-accent" style={{ marginBottom: '1rem' }}>Become Part of Our Story</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Create Your Own History Here
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Join the legacy of celebrations at Minnesota's original barn and country venue
            </p>
            <a href="/contact" className="romantic-button">
              Schedule Your Tour
            </a>
          </div>
        </div>
      </section>

    </PageTemplate>
  )
}
