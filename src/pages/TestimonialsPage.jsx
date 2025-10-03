import PageTemplate from '../components/PageTemplate'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import CTAButton from '../components/CTAButton'
import TestimonialCard from '../components/TestimonialCard'
import Card from '../components/Card'

export default function TestimonialsPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Love Stories & Testimonials
      </h1>
      <p className="page-hero-lead">
        Hear from the couples who celebrated their special day at Rum River Barn
      </p>
    </>
  )

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
      heroContent={heroContent}
      heroImage="/images/venue/barn-exterior-deck-swing-under-tree.jpg"
    >

      {/* Featured Testimonial */}
      <Section tone="cream">
        <div className="content-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '700px', width: '100%' }}>
            <TestimonialCard
              quote="From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was."
              author="Sarah & Michael Johnson"
              detail="Married October 2024"
              highlight
            />
          </div>
        </div>
      </Section>

      {/* All Testimonials Grid */}
      <Section>
        <div className="content-wrapper">
          <SectionHeader
            eyebrow="Love Letters"
            title="What Couples Say"
            description="Real stories from real couples who celebrated at Rum River Barn"
            align="center"
          />

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                detail={testimonial.detail}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section tone="cream">
        <div className="content-wrapper">
          <SectionHeader
            eyebrow="By the Numbers"
            title="Our Happy Couples"
            align="center"
          />

          <div className="testimonial-stats">
            {[
              { value: '200+', label: 'Weddings Hosted' },
              { value: '5.0', label: 'Average Rating' },
              { value: '100%', label: 'Would Recommend' },
              { value: '10+', label: 'Years Experience' }
            ].map((stat) => (
              <div key={stat.label} className="testimonial-stats__item">
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                    fontWeight: 400,
                    color: 'var(--warm-walnut)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.125rem',
                    color: 'var(--sage-green)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="content-wrapper">
          <Card
            variant="soft"
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <SectionHeader
              eyebrow="Ready to Create Your Own Story?"
              title="Let's Start Planning Your Perfect Day"
              description="Schedule a tour to see why so many couples choose Rum River Barn for their celebration."
              align="center"
            />
            <CTAButton to="/contact" variant="primary">
              Schedule Your Tour
            </CTAButton>
          </Card>
        </div>
      </Section>

    </PageTemplate>
  )
}
