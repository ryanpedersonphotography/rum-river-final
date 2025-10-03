import PageTemplate from '../components/PageTemplate'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import FeatureList from '../components/FeatureList'
import CTAButton from '../components/CTAButton'

export default function ThankYouPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Thank You!
      </h1>
      <p className="page-hero-lead">
        We've received your message and can't wait to help make your special day unforgettable
      </p>
    </>
  )

  return (
    <PageTemplate 
      currentPage="thank-you"
      heroContent={heroContent}
    >
      <Section tone="cream">
        <div className="content-wrapper">
          <Card
            variant="soft"
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>✨</div>

            <SectionHeader
              title="Your Message Has Been Sent"
              description="Thank you for reaching out to Rum River Barn! We've received your inquiry and one of our team members will get back to you within 24-48 hours."
              align="center"
            />

            <Card
              variant="soft"
              tone="ivory"
              style={{ marginBottom: '3rem', textAlign: 'left' }}
            >
              <SectionHeader
                title="What Happens Next?"
                align="left"
              />
              <FeatureList
                items={[
                  { icon: '1️⃣', value: "We'll review your event details and preferences" },
                  { icon: '2️⃣', value: "A team member will contact you to discuss your vision" },
                  { icon: '3️⃣', value: "We'll schedule a personalized venue tour" },
                  { icon: '4️⃣', value: "We'll help you plan every detail of your special day" }
                ]}
                className="thank-you-steps"
                itemClassName="thank-you-step"
                unstyled
              />
            </Card>

            <div className="thank-you-actions">
              <CTAButton href="/" variant="primary">
                Back to Home
              </CTAButton>
              <CTAButton href="/gallery" variant="secondary">
                View Gallery
              </CTAButton>
            </div>

            <div className="thank-you-contact">
              <p className="thank-you-contact__eyebrow">
                <strong>Need immediate assistance?</strong>
              </p>
              <p className="thank-you-contact__body">
                Call us at <a href="tel:3204928584">(320) 492-8584</a> or <a href="tel:6128010546">(612) 801-0546</a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </PageTemplate>
  )
}
