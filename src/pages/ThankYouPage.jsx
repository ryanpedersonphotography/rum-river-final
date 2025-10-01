import PageTemplate from '../components/PageTemplate'

export default function ThankYouPage() {
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
        Thank You!
      </h1>
      <p className="lead" style={{
        fontSize: '1.125rem',
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: '0',
        maxWidth: '800px'
      }}>
        We've received your message and can't wait to help make your special day unforgettable
      </p>
    </>
  )

  return (
    <PageTemplate heroContent={heroContent}>
      <section className="section" style={{ background: 'white' }}>
        <div className="content-wrapper">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '2rem'
            }}>
              ✨
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: 'var(--warm-walnut)',
              marginBottom: '1.5rem'
            }}>
              Your Message Has Been Sent
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'var(--sage-green)',
              marginBottom: '2rem'
            }}>
              Thank you for reaching out to Rum River Barn! We've received your inquiry and one of our team members will get back to you within 24-48 hours.
            </p>

            <div style={{
              background: 'var(--cream-pearl)',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '3rem'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                What Happens Next?
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block'
              }}>
                <li style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: 'var(--sage-green)',
                  paddingLeft: '1.5rem',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0 }}>1️⃣</span>
                  We'll review your event details and preferences
                </li>
                <li style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: 'var(--sage-green)',
                  paddingLeft: '1.5rem',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0 }}>2️⃣</span>
                  A team member will contact you to discuss your vision
                </li>
                <li style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: 'var(--sage-green)',
                  paddingLeft: '1.5rem',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0 }}>3️⃣</span>
                  We'll schedule a personalized venue tour
                </li>
                <li style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: 'var(--sage-green)',
                  paddingLeft: '1.5rem',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0 }}>4️⃣</span>
                  We'll help you plan every detail of your special day
                </li>
              </ul>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'var(--warm-walnut)',
                  color: 'white',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease'
                }}
              >
                Back to Home
              </a>
              <a
                href="/gallery"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: 'transparent',
                  color: 'var(--warm-walnut)',
                  border: '2px solid var(--warm-walnut)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease'
                }}
              >
                View Gallery
              </a>
            </div>

            <div style={{
              borderTop: '1px solid #e5e5e5',
              paddingTop: '2rem',
              marginTop: '2rem'
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--sage-green)',
                marginBottom: '0.5rem'
              }}>
                <strong>Need immediate assistance?</strong>
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--warm-walnut)'
              }}>
                Call us at <a href="tel:3204928584" style={{ color: 'var(--warm-walnut)', fontWeight: 600 }}>(320) 492-8584</a> or <a href="tel:6128010546" style={{ color: 'var(--warm-walnut)', fontWeight: 600 }}>(612) 801-0546</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}
