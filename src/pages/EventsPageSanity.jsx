import PageRenderer from '../components/PageRenderer'

/**
 * EventsPage with Sanity CMS Integration
 * Uses PageRenderer to fetch and display content from Sanity
 * Falls back to structured content if Sanity is unavailable
 */
export default function EventsPage() {
  // Create fallback content structure for PageRenderer
  const fallbackContent = {
    title: 'Events & Celebrations',
    slug: { current: 'events' },
    seo: {
      metaTitle: 'Events & Celebrations - Rum River Wedding Barn',
      metaDescription: 'From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion',
      keywords: ['wedding events', 'engagement parties', 'birthday parties', 'graduation parties', 'holiday parties', 'Minnesota venue']
    },
    contentBlocks: [
      // Hero Block
      {
        _type: 'heroBlock',
        scriptAccent: 'Celebrate Every Moment',
        titleLine1: 'Events &',
        titleLine2: 'Celebrations',
        description: 'From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion',
        ctaText: 'Check Availability',
        ctaLink: '/contact',
        scrollText: 'Explore Our Services',
        showFloatingCta: true,
        floatingCtaText: 'Book Your Event',
        floatingCtaIcon: 'calendar'
      },
      
      // Wedding Events Feature Block
      {
        _type: 'featureBlocksBlock',
        scriptAccent: 'Love Stories',
        title: 'Wedding Events',
        lead: 'Celebrate your love story in our tranquil, charming barn setting',
        sectionStyle: 'alternating-blocks',
        centerContent: false,
        blocks: [{
          number: '01',
          title: 'Wedding Events',
          lead: 'Your Perfect Wedding Venue',
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [{ _type: 'span', text: 'Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces. Our immaculate grounds provide the perfect backdrop for photography in every season, creating memories that will last a lifetime.' }]
            }
          ],
          imageAlt: 'Wedding Events at Rum River Barn',
          reverse: false,
          ctaButton: {
            text: 'Plan Your Wedding',
            link: '/contact',
            style: 'primary'
          }
        }]
      },
      
      // Engagement Parties Feature Block
      {
        _type: 'featureBlocksBlock',
        scriptAccent: 'Celebrations',
        title: 'Engagement Parties',
        lead: 'Bring both families together before your special day',
        sectionStyle: 'section-warm',
        centerContent: false,
        blocks: [{
          number: '02',
          title: 'Engagement Parties',
          lead: 'A Perfect Beginning',
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [{ _type: 'span', text: 'Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty and picturesque vineyards. The perfect way to bring both sides of your family together before your special day in an intimate, rustic setting.' }]
            }
          ],
          imageAlt: 'Engagement Parties at Rum River Barn',
          reverse: true,
          ctaButton: {
            text: 'Plan Your Engagement',
            link: '/contact',
            style: 'primary'
          }
        }]
      },
      
      // Birthday Parties Feature Block
      {
        _type: 'featureBlocksBlock',
        scriptAccent: 'Milestones',
        title: 'Birthday Parties',
        lead: 'Celebrate birthdays of all ages in our beautiful venue',
        sectionStyle: 'alternating-blocks',
        centerContent: false,
        blocks: [{
          number: '03',
          title: 'Birthday Parties',
          lead: 'Milestone Celebrations',
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [{ _type: 'span', text: 'Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space. Our picturesque location provides the perfect setting for birthdays of all ages, with both indoor comfort and outdoor charm.' }]
            }
          ],
          imageAlt: 'Birthday Parties at Rum River Barn',
          reverse: false,
          ctaButton: {
            text: 'Book Birthday Party',
            link: '/contact',
            style: 'primary'
          }
        }]
      },
      
      // Graduation Parties Feature Block
      {
        _type: 'featureBlocksBlock',
        scriptAccent: 'Achievements',
        title: 'Graduation Parties',
        lead: 'Honor achievements in a setting that matches the significance',
        sectionStyle: 'section-warm',
        centerContent: false,
        blocks: [{
          number: '04',
          title: 'Graduation Parties',
          lead: 'Academic Excellence',
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [{ _type: 'span', text: 'Celebrate high school, college, or military graduations with plenty of space for eating, dancing, and games. Warm summer sunlight creates an ideal backdrop for memorable photos, honoring achievements in a setting that matches the significance of the milestone.' }]
            }
          ],
          imageAlt: 'Graduation Parties at Rum River Barn',
          reverse: true,
          ctaButton: {
            text: 'Celebrate Graduation',
            link: '/contact',
            style: 'primary'
          }
        }]
      },
      
      // Holiday Parties Feature Block
      {
        _type: 'featureBlocksBlock',
        scriptAccent: 'Seasons',
        title: 'Holiday Parties',
        lead: 'Create magical holiday memories in our festive barn setting',
        sectionStyle: 'alternating-blocks',
        centerContent: false,
        blocks: [{
          number: '05',
          title: 'Holiday Parties',
          lead: 'Festive Celebrations',
          content: [
            {
              _type: 'block',
              style: 'normal',
              children: [{ _type: 'span', text: 'Host your holiday celebration with plenty of indoor and outdoor space for eating and dancing. Perfect for Christmas parties, Valentine\'s Day celebrations, Fourth of July gatherings, and more. Create magical holiday memories in our festive barn setting.' }]
            }
          ],
          imageAlt: 'Holiday Parties at Rum River Barn',
          reverse: false,
          ctaButton: {
            text: 'Plan Holiday Event',
            link: '/contact',
            style: 'primary'
          }
        }]
      },
      
      // Contact Form
      {
        _type: 'formBlock',
        title: 'Let\'s Start Planning Together',
        subtitle: 'Ready to Plan Your Event?',
        description: 'Contact us today to schedule a tour of our beautiful venue and discuss how we can make your special event unforgettable.',
        formType: 'tour',
        formName: 'events-schedule-tour',
        submitText: 'Schedule Your Tour',
        loadingText: 'SCHEDULING...',
        redirectPath: '/thank-you',
        sectionStyle: 'cta-contact-section',
        lightTheme: false,
        showHeader: true
      }
    ]
  }

  return (
    <PageRenderer 
      slug="events-page"
      fallbackContent={fallbackContent}
      showHeader={true}
      showFooter={true}
    />
  )
}