/**
 * SANITY CONTENT MIGRATION DATA
 * 
 * This file contains all content extracted from pages that need to be migrated to Sanity CMS.
 * Each object represents a complete page with all its content ready for migration.
 */

export const migrationData = {
  // ============================================
  // EVENTS PAGE
  // ============================================
  eventsPage: {
    _id: 'eventsPage',
    _type: 'eventsPage',
    hero: {
      title: 'Events & Celebrations',
      description: 'From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion',
      image: '/images/venue/barn-interior-exposed-beams-chandeliers.jpg'
    },
    eventBlocks: [
      {
        _key: 'wedding-events',
        title: 'Wedding Events',
        description: 'Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces. Our immaculate grounds provide the perfect backdrop for photography in every season, creating memories that will last a lifetime.',
        features: [
          'Indoor and outdoor ceremony spaces with flexible configurations',
          'Year-round venue availability with climate-controlled comfort',
          'Picturesque grounds perfect for wedding photography',
          'Capacity for up to 600 guests with authentic barn charm'
        ],
        ctaText: 'Plan Your Wedding',
        ctaLink: '/contact',
        image: '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
        sectionStyle: 'dark-gradient-section',
        layout: 'normal'
      },
      {
        _key: 'engagement-parties',
        title: 'Engagement Parties',
        description: 'Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty and picturesque vineyards. The perfect way to bring both sides of your family together before your special day in an intimate, rustic setting.',
        features: [
          'Bring both families together in a relaxed, beautiful setting',
          'Rustic venue setting with stunning vineyard views',
          'Flexible capacity arrangements for intimate gatherings',
          'Pre-wedding celebration planning with experienced staff'
        ],
        ctaText: 'Plan Your Engagement',
        ctaLink: '/contact',
        image: '/images/venue/details-swing-rustic-romance.jpg',
        sectionStyle: 'section-warm',
        layout: 'reverse'
      },
      {
        _key: 'birthday-parties',
        title: 'Birthday Parties',
        description: 'Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space. Our picturesque location provides the perfect setting for birthdays of all ages, with both indoor comfort and outdoor charm.',
        features: [
          'Recently renovated rustic space with modern amenities',
          'Suitable for milestone birthdays of all ages',
          'Seasonal outdoor mezzanine for additional space',
          'Capacity for up to 200 guests in picturesque setting'
        ],
        ctaText: 'Book Birthday Party',
        ctaLink: '/contact',
        image: '/images/2015/12/wedding-5.jpg',
        sectionStyle: 'dark-gradient-section',
        layout: 'normal'
      },
      {
        _key: 'graduation-parties',
        title: 'Graduation Parties',
        description: 'Celebrate high school, college, or military graduations with plenty of space for eating, dancing, and games. Warm summer sunlight creates an ideal backdrop for memorable photos, honoring achievements in a setting that matches the significance of the milestone.',
        features: [
          'Perfect for high school, college, and military graduations',
          'Spacious areas for dining, dancing, and celebration activities',
          'Ideal natural lighting for graduation photos and memories',
          'Large group capacity with flexible event arrangements'
        ],
        ctaText: 'Celebrate Graduation',
        ctaLink: '/contact',
        image: '/images/venue/barn-exterior-deck-swing-golden-hour.jpg',
        sectionStyle: 'section-warm',
        layout: 'reverse'
      },
      {
        _key: 'holiday-parties',
        title: 'Holiday Parties',
        description: 'Host your holiday celebration with plenty of indoor and outdoor space for eating and dancing. Perfect for Christmas parties, Valentine\'s Day celebrations, Fourth of July gatherings, and more. Create magical holiday memories in our festive barn setting.',
        features: [
          'Indoor and outdoor celebration spaces for any season',
          'Perfect venue for Christmas and winter holiday parties',
          'Beautiful setting for Valentine\'s Day and spring celebrations',
          'Preferred catering and alcohol vendors available for events'
        ],
        ctaText: 'Plan Holiday Event',
        ctaLink: '/contact',
        image: '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
        sectionStyle: 'dark-gradient-section',
        layout: 'normal'
      }
    ],
    eventsCta: {
      _type: 'formBlock',
      formName: 'events-schedule-tour',
      title: 'Let\'s Start Planning Together',
      subtitle: 'Ready to Plan Your Event?',
      description: 'Contact us today to schedule a tour of our beautiful venue and discuss how we can make your special event unforgettable.',
      submitText: 'Schedule Your Tour',
      loadingText: 'SCHEDULING...',
      formType: 'schedule-tour'
    },
    seo: {
      _type: 'seoSettings',
      metaTitle: 'Events & Celebrations | Rum River Barn',
      metaDescription: 'Host your special event at Rum River Barn. Perfect for weddings, engagements, birthdays, graduations, and holiday parties in Minnesota.',
      keywords: ['wedding events', 'engagement parties', 'birthday venue', 'graduation parties', 'holiday celebrations', 'Minnesota event venue']
    }
  },

  // ============================================
  // CONTACT PAGE (Continued from reading...)
  // ============================================
  contactPage: {
    _id: 'contactPage',
    _type: 'contactPage',
    hero: {
      title: 'Get in Touch',
      description: 'We\'d love to hear from you! Reach out to schedule a tour, ask questions, or start planning your special day.',
      image: '/images/venue/barn-exterior-entrance-lighting-view.jpg'
    },
    virtualTours: {
      title: 'Virtual 3D Tours',
      scriptAccent: 'Take a Peek Inside',
      description: 'Explore our beautiful spaces before your visit with immersive virtual tours',
      tours: [
        {
          _key: 'wedding-barn',
          title: 'Wedding Barn',
          description: 'Step inside our historic barn and experience the soaring ceilings, original timber beams, and elegant lighting that creates the perfect atmosphere for your celebration.',
          tourUrl: 'https://my.matterport.com/show/?m=P25ecLeSZdF',
          icon: 'building',
          ctaText: 'Explore Wedding Barn'
        },
        {
          _key: 'bridal-suite',
          title: 'Bridal Suite',
          description: 'Tour the charming bridal suite where you and your wedding party can relax and prepare. This private sanctuary offers the perfect setting for getting ready photos.',
          tourUrl: 'https://my.matterport.com/show/?m=sFjR96cKfqv',
          icon: 'heart',
          ctaText: 'Explore Bridal Suite'
        }
      ]
    },
    contactInfo: {
      title: 'Contact Information',
      scriptAccent: 'Other Ways to Reach Us',
      methods: [
        {
          _key: 'phone',
          title: 'Call Us',
          icon: 'phone',
          details: [
            'Main: (320) 492-8584',
            'Emergency: (612) 555-0123',
            'Available 7 days a week'
          ]
        },
        {
          _key: 'email',
          title: 'Email Us',
          icon: 'mail',
          details: [
            'info@rumriverbarn.com',
            'events@rumriverbarn.com',
            'Response within 24 hours'
          ]
        },
        {
          _key: 'address',
          title: 'Visit Us',
          icon: 'location',
          details: [
            '42618 78th Street',
            'Hillman, MN 56338',
            'Tours by appointment'
          ]
        },
        {
          _key: 'social',
          title: 'Follow Us',
          icon: 'share',
          details: [
            '@rumriverbarn',
            'Facebook & Instagram',
            'Pinterest: Rum River Barn'
          ]
        }
      ]
    }
  },

  // ============================================
  // PROPERTY PAGE (To be extracted...)
  // ============================================
  propertyPage: {
    _id: 'propertyPage',
    _type: 'propertyPage',
    hero: {
      title: 'The Property',
      description: 'Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.',
      image: '/images/venue/barn-interior-ceiling-beams-lighting.jpg'
    },
    venueDiscovery: {
      sectionClassName: 'section-warm',
      scriptAccent: 'Your Perfect Setting',
      title: 'Discover Our Spaces',
      description: 'Every corner tells a story, every space creates memories'
    },
    scheduleTour: {
      title: 'Schedule Your Property Tour',
      scriptAccent: 'Ready to Visit?',
      description: 'Experience the beauty of Rum River Barn in person. Fill out the form below to schedule a private tour of our property.'
    }
  },

  // ============================================
  // TESTIMONIALS PAGE (To be extracted...)
  // ============================================
  testimonialsPage: {
    _id: 'testimonialsPage',
    _type: 'testimonialsPage',
    hero: {
      title: 'Love Stories & Testimonials',
      description: 'Hear from the couples who celebrated their special day at Rum River Barn'
    },
    featuredTestimonial: {
      quote: 'From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.',
      author: 'Sarah & Michael Johnson',
      detail: 'Married October 2024',
      rating: 5
    },
    testimonials: [
      {
        _key: 'emma-james',
        quote: 'We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.',
        author: 'Emma & James Wilson',
        detail: 'Married June 2024',
        rating: 5
      },
      {
        _key: 'amanda-chris',
        quote: 'The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn\'t have asked for more.',
        author: 'Amanda & Chris Thompson',
        detail: 'Married February 2024',
        rating: 5
      },
      {
        _key: 'jennifer-david',
        quote: 'The vineyard backdrop for our ceremony was breathtaking! Our photographer couldn\'t stop raving about the golden hour light. This venue is a photographer\'s dream.',
        author: 'Jennifer & David Martinez',
        detail: 'Married September 2024',
        rating: 5
      },
      {
        _key: 'rachel-tyler',
        quote: 'Our guests traveled from all over the country, and everyone said this was the most beautiful wedding they\'d ever attended. The rustic elegance was perfect for our style.',
        author: 'Rachel & Tyler Anderson',
        detail: 'Married May 2024',
        rating: 5
      },
      {
        _key: 'melissa-brandon',
        quote: 'The staff made everything so easy. From setup to cleanup, they handled every detail with care. We got to enjoy our day without worrying about a thing.',
        author: 'Melissa & Brandon Cooper',
        detail: 'Married August 2024',
        rating: 5
      },
      {
        _key: 'lauren-matthew',
        quote: 'We fell in love with the property the moment we saw it. The barn, the vineyard, the open fields - it was everything we dreamed of for our outdoor ceremony.',
        author: 'Lauren & Matthew Stevens',
        detail: 'Married July 2024',
        rating: 5
      },
      {
        _key: 'olivia-joshua',
        quote: 'The bridal suite was beautiful and so comfortable for getting ready. Having that private space for our bridal party made the morning feel special and relaxed.',
        author: 'Olivia & Joshua Roberts',
        detail: 'Married April 2024',
        rating: 5
      },
      {
        _key: 'hannah-ethan',
        quote: 'Our fall wedding had the most gorgeous natural colors. The changing leaves combined with the rustic barn created the coziest atmosphere. Absolutely perfect!',
        author: 'Hannah & Ethan Phillips',
        detail: 'Married November 2023',
        rating: 5
      },
      {
        _key: 'sophia-noah',
        quote: 'The dance floor in the barn loft was incredible! Our DJ said the acoustics were amazing, and we danced until midnight. Such a fun celebration!',
        author: 'Sophia & Noah Bennett',
        detail: 'Married December 2023',
        rating: 5
      },
      {
        _key: 'ava-mason',
        quote: 'We loved that we could have our ceremony and reception in one location. The frame barn for the ceremony and the white barn for the reception was the perfect flow.',
        author: 'Ava & Mason Parker',
        detail: 'Married March 2024',
        rating: 5
      },
      {
        _key: 'isabella-logan',
        quote: 'The sunset photos by the vineyard are some of our favorite memories. The property offers so many beautiful photo opportunities at every turn.',
        author: 'Isabella & Logan Turner',
        detail: 'Married August 2023',
        rating: 5
      }
    ],
    stats: {
      title: 'Our Happy Couples',
      scriptAccent: 'By the Numbers',
      items: [
        { number: '200+', label: 'Weddings Hosted' },
        { number: '5.0', label: 'Average Rating' },
        { number: '98%', label: 'Would Recommend' },
        { number: '10+', label: 'Years of Excellence' }
      ]
    }
  },

  // ============================================
  // THANK YOU PAGE
  // ============================================
  thankYouPage: {
    _id: 'thankYouPage',
    _type: 'thankYouPage',
    title: 'Thank You!',
    message: 'Thank you for reaching out to us! We\'ve received your message and will get back to you within 24 hours. We\'re excited to learn more about your special day and how we can help make it unforgettable.',
    nextSteps: {
      title: 'What Happens Next?',
      steps: [
        'Our event coordinator will review your submission',
        'We\'ll reach out within 24 hours to discuss your needs',
        'We\'ll schedule a tour at your convenience',
        'Together, we\'ll plan your perfect celebration'
      ]
    },
    ctaButtons: [
      { text: 'Return Home', link: '/', variant: 'primary' },
      { text: 'View Gallery', link: '/gallery', variant: 'secondary' }
    ]
  }
}

// Migration helper function
export async function migratePageToSanity(client, pageName) {
  const pageData = migrationData[pageName]
  if (!pageData) {
    throw new Error(`No migration data found for page: ${pageName}`)
  }
  
  try {
    const result = await client.createOrReplace(pageData)
    console.log(`✅ Successfully migrated ${pageName}:`, result._id)
    return result
  } catch (error) {
    console.error(`❌ Failed to migrate ${pageName}:`, error)
    throw error
  }
}

// Batch migration function
export async function migrateAllPages(client) {
  const results = []
  for (const [pageName, pageData] of Object.entries(migrationData)) {
    try {
      const result = await migratePageToSanity(client, pageName)
      results.push({ page: pageName, success: true, id: result._id })
    } catch (error) {
      results.push({ page: pageName, success: false, error: error.message })
    }
  }
  return results
}