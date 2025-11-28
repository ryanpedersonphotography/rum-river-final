import PageTemplate from '../components/PageTemplate'

export default function VendorThankYouPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Application Received
      </h1>
      <p className="page-hero-lead">
        Thank you for your interest in joining our preferred vendor network
      </p>
    </>
  )

  return (
    <PageTemplate heroContent={heroContent} heroImage="/images/venue/barn-exterior-welcome-sign-entrance.jpg">
      <section className="section section-white">
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
              🤝
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: 'var(--warm-walnut)',
              marginBottom: '1.5rem'
            }}>
              Thank You for Applying
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'var(--sage-green)',
              marginBottom: '2rem'
            }}>
              We're excited to learn more about your business! Our team reviews vendor applications on a rolling basis to ensure we recommend the best partners to our couples.
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
                Next Steps
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--sage-green)'
              }}>
                We will review your application and portfolio. If your services align with our venue's needs and style, we will reach out to schedule a meeting or discuss potential collaboration opportunities.
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}
