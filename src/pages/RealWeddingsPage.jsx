import { Link } from 'react-router-dom'
import PageTemplate from '../components/PageTemplate'
import { realWeddings } from '../data/realWeddings'

export default function RealWeddingsPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Real Weddings
      </h1>
      <p className="page-hero-lead">
        Every celebration tells a unique story of love, laughter, and happily ever after
      </p>
    </>
  )

  return (
    <PageTemplate 
      currentPage="real-weddings"
      heroContent={heroContent}
      heroImage="/images/2014/04/Loria-Jason-wedding-2-0026.jpg"
    >

      {/* Weddings Gallery Grid */}
      <Section>
        <div className="content-wrapper">
          <SectionHeader
            eyebrow="Real Love Stories"
            title="Weddings at the Barn"
            description="Browse through our favorite celebrations and get inspired for your own special day"
            align="center"
          />

          <div className="wedding-gallery">
            {realWeddings.map((wedding) => (
              <Link
                key={wedding.slug}
                to={`/real-weddings/${wedding.slug}`}
                className="gallery-item image-reveal"
              >
                <img
                  src={wedding.coverImage}
                  alt={`${wedding.coupleName} Wedding`}
                  width="800"
                  height="800"
                />
                <div className="gallery-overlay">
                  <div className="gallery-couple-names">{wedding.coupleName}</div>
                  <div className="gallery-season">{wedding.date}</div>
                  <div className="gallery-details">
                    {wedding.photoCount} Photos • {wedding.location.split('•')[0].trim()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section tone="cream">
        <div className="content-wrapper">
          <Card
            variant="soft"
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <SectionHeader
              eyebrow="Ready to Create Your Story?"
              title="Let Your Love Story Unfold Here"
              description="Schedule a tour to see how we can help bring your wedding vision to life"
              align="center"
            />
            <CTAButton href="/contact" variant="primary">
              Schedule Your Tour
            </CTAButton>
          </Card>
        </div>
      </Section>

    </PageTemplate>
  )
}
