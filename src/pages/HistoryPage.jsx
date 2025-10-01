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
        Our History
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        From Norwegian settlers to Minnesota's premier barn venue - a journey spanning 170 years
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
      <section className="section" style={{ background: 'var(--cream-pearl)' }}>
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
      <section className="section" style={{ background: 'var(--cream-pearl)' }}>
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
