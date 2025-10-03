import PageTemplate from '../components/PageTemplate'
import Icon from '../components/Icon'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import VendorCard from '../components/VendorCard'

export default function VendorsPage() {
  const heroContent = (
    <>
      <h1 className="page-hero-title">
        Preferred Vendor Directory
      </h1>
      <p className="page-hero-lead">
        Our carefully curated list of trusted wedding professionals who understand our venue and share our commitment to making your day perfect.
      </p>
    </>
  )

  const vendorCategories = [
    {
      title: "DJ & Entertainment",
      iconName: "music",
      vendors: [
        {
          name: "Sprunk Entertainment",
          phone: "612-440-0777",
          description: "Professional DJ and entertainment services for weddings and special events."
        },
        {
          name: "Impressions Mobile Music",
          phone: "320-237-7777",
          description: "Mobile DJ services with extensive music library and professional sound equipment."
        },
        {
          name: "DJCJ Global",
          phone: "612-770-2034",
          description: "Professional DJ services specializing in wedding celebrations and events."
        }
      ]
    },
    {
      title: "Catering and Bar Service",
      iconName: "cake",
      vendors: [
        {
          name: "Northern Lights Ballroom",
          phone: "320-369-4622",
          description: "Full-service catering with experience in venue events and wedding celebrations."
        },
        {
          name: "Fable Catering",
          phone: "612-500-6838",
          description: "Creative catering services with custom menu options for special events."
        },
        {
          name: "Pit Happens",
          phone: "218-851-0003",
          description: "BBQ and outdoor catering specializing in rustic, farm-to-table dining experiences."
        },
        {
          name: "Minnesota School of Bartending",
          phone: "651-645-1252",
          description: "Professional bartending services with trained, certified bartenders for events."
        }
      ]
    },
    {
      title: "Florist",
      iconName: "sparkles",
      vendors: [
        {
          name: "Princeton Floral",
          phone: "763-389-3433",
          description: "Local florist specializing in wedding arrangements, bridal bouquets, and venue decorations."
        }
      ]
    },
    {
      title: "Shuttle Service",
      iconName: "truck",
      vendors: [
        {
          name: "Trobec's Bus Service",
          phone: "320-251-1202",
          description: "Transportation services for wedding parties and guest shuttle needs."
        }
      ]
    },
    {
      title: "Accommodations",
      iconName: "building",
      vendors: [
        {
          name: "Grand Casino, Mille Lacs",
          phone: "800-626-5825",
          description: "Hotel accommodations with group rates available for wedding guests."
        },
        {
          name: "Phoenix Hotel, Milaca",
          phone: "320-982-2600",
          description: "Local hotel accommodations in nearby Milaca for wedding guests."
        },
        {
          name: "Hillbilly Haven Motel, Pierz",
          phone: "320-468-9993",
          description: "Affordable motel accommodations in Pierz area for wedding guests."
        }
      ]
    }
  ]

  return (
    <PageTemplate 
      currentPage="vendors"
      heroContent={heroContent}
      heroImage="/images/venue/details-building-porch-architectural.jpg"
    >
      
      {/* Vendor Categories Section */}
      <Section id="vendors">
        <div className="content-wrapper">
          {vendorCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="vendors-category">
              <SectionHeader
                eyebrow={<Icon name={category.iconName} size="lg" color="primary" />}
                title={category.title}
                align="center"
                className="vendors-category__header"
              />
              <div className="vendor-grid">
                {category.vendors.map((vendor) => (
                  <VendorCard
                    key={vendor.name}
                    name={vendor.name}
                    description={vendor.description}
                    phone={vendor.phone}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Vendor Application CTA */}
      <Section
        paddingY="3xl"
        background="linear-gradient(135deg, var(--warm-cream) 0%, var(--blush-pink) 100%)"
      >
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <SectionHeader
              eyebrow="Join Our Network"
              title="Are You a Wedding Professional?"
              description="We're always looking for talented professionals to join our preferred vendor network. If you're interested in working with couples at Rum River Barn, we'd love to hear from you."
              align="center"
            />
            <a href="/contact" className="romantic-button primary">
              Apply to Join
            </a>
          </div>
        </div>
      </Section>

    </PageTemplate>
  )
}
