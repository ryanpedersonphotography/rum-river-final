import clsx from 'clsx'
import PageTemplate from '../components/PageTemplate'
import CTAButton from '../components/CTAButton'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import FeatureList from '../components/FeatureList'

const eventSections = [
  {
    key: 'wedding',
    tone: 'walnutGradient',
    variant: 'glass',
    reverse: false,
    title: 'Wedding Events',
    description:
      'Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces. Our immaculate grounds provide the perfect backdrop for photography in every season, creating memories that will last a lifetime.',
    image: {
      src: '/images/2014/05/Reins-Wedding_3-193.jpg',
      alt: 'Wedding Events at Rum River Barn',
    },
    features: [
      'Indoor and outdoor ceremony spaces with flexible configurations',
      'Year-round venue availability with climate-controlled comfort',
      'Picturesque grounds perfect for wedding photography',
      'Capacity for up to 600 guests with authentic barn charm',
    ],
    ctaLabel: 'Plan Your Wedding',
  },
  {
    key: 'engagement',
    tone: 'cream',
    variant: 'soft',
    reverse: true,
    title: 'Engagement Parties',
    description:
      'Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty and picturesque vineyards. The perfect way to bring both sides of your family together before your special day in an intimate, rustic setting.',
    image: {
      src: '/images/venue/details-swing-rustic-romance.jpg',
      alt: 'Engagement Parties at Rum River Barn',
    },
    features: [
      'Bring both families together in a relaxed, beautiful setting',
      'Rustic venue setting with stunning vineyard views',
      'Flexible capacity arrangements for intimate gatherings',
      'Pre-wedding celebration planning with experienced staff',
    ],
    ctaLabel: 'Plan Your Engagement',
  },
  {
    key: 'birthday',
    tone: 'walnutGradient',
    variant: 'glass',
    reverse: false,
    title: 'Birthday Parties',
    description:
      'Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space. Our picturesque location provides the perfect setting for birthdays of all ages, with both indoor comfort and outdoor charm.',
    image: {
      src: '/images/2015/12/wedding-5.jpg',
      alt: 'Birthday Parties at Rum River Barn',
    },
    features: [
      'Recently renovated rustic space with modern amenities',
      'Suitable for milestone birthdays of all ages',
      'Seasonal outdoor mezzanine for additional space',
      'Capacity for up to 200 guests in picturesque setting',
    ],
    ctaLabel: 'Book Birthday Party',
  },
  {
    key: 'graduation',
    tone: 'cream',
    variant: 'soft',
    reverse: true,
    title: 'Graduation Parties',
    description:
      'Celebrate high school, college, or military graduations with plenty of space for eating, dancing, and games. Warm summer sunlight creates an ideal backdrop for memorable photos, honoring achievements in a setting that matches the significance of the milestone.',
    image: {
      src: '/images/venue/barn-exterior-deck-swing-golden-hour.jpg',
      alt: 'Graduation Parties at Rum River Barn',
    },
    features: [
      'Perfect for high school, college, and military graduations',
      'Spacious areas for dining, dancing, and celebration activities',
      'Ideal natural lighting for graduation photos and memories',
      'Large group capacity with flexible event arrangements',
    ],
    ctaLabel: 'Celebrate Graduation',
  },
  {
    key: 'holiday',
    tone: 'walnutGradient',
    variant: 'glass',
    reverse: false,
    title: 'Holiday Parties',
    description:
      "Host your holiday celebration with plenty of indoor and outdoor space for eating and dancing. Perfect for Christmas parties, Valentine's Day celebrations, Fourth of July gatherings, and more. Create magical holiday memories in our festive barn setting.",
    image: {
      src: '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      alt: 'Holiday Parties at Rum River Barn',
    },
    features: [
      'Indoor and outdoor celebration spaces for any season',
      'Perfect venue for Christmas and winter holiday parties',
      "Beautiful setting for Valentine's Day and spring celebrations",
      'Preferred catering and alcohol vendors available for events',
    ],
    ctaLabel: 'Plan Holiday Event',
  },
];

const contactDetails = [
  {
    label: 'Call Us',
    main: ['(320) 492-8584'],
    secondary: '(612) 801-0546',
  },
  {
    label: 'Visit Us',
    main: ['42618 78th Street', 'Hillman, MN 56338'],
  },
  {
    label: 'Service Area',
    main: ['Milaca, St. Cloud,', 'St. Paul & Beyond'],
  },
];

export default function EventsPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Events & Celebrations
      </h1>
      <p className="page-hero-lead">
        From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion
      </p>
    </>
  )

  return (
    <PageTemplate 
      currentPage="events"
      heroContent={heroContent}
      heroImage="/images/2014/05/Reins-Wedding_3-193.jpg"
    >
      {eventSections.map((section) => (
        <Section key={section.key} tone={section.tone}>
          <div className="content-wrapper">
            <div className={clsx('block-item', section.reverse && 'reverse')}>
              <Card variant={section.variant} className="block-content">
                <SectionHeader
                  title={section.title}
                  description={section.description}
                  align="left"
                />
                <FeatureList
                  items={section.features.map((value) => ({ value }))}
                  unstyled
                />
                <CTAButton href="/contact" variant="primary">
                  {section.ctaLabel}
                </CTAButton>
              </Card>
              <div className="block-image styled-image light no-link">
                <img src={section.image.src} alt={section.image.alt} width="800" height="500" />
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="walnutGradient">
        <div className="content-wrapper">
          <Card variant="glass" className="contact-info-card">
            <SectionHeader
              eyebrow="Ready to Plan Your Event?"
              title="Let's Start Planning Together"
              description="Contact us today to schedule a tour of our beautiful venue and discuss how we can make your special event unforgettable."
              align="center"
            />
            <div className="contact-info-grid">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="contact-info-item">
                  <div className="contact-info-label">{detail.label}</div>
                  <div className="contact-info-main">
                    {detail.main.map((line) => (
                      <span key={line}>{line}<br /></span>
                    ))}
                  </div>
                  {detail.secondary && (
                    <div className="contact-info-secondary">{detail.secondary}</div>
                  )}
                </div>
              ))}
            </div>
            <CTAButton href="/contact" variant="primary">
              Schedule Your Tour
            </CTAButton>
          </Card>
        </div>
      </Section>
    </PageTemplate>
  )
}
