import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

// PropertyPage migration
async function migratePropertyPage() {
  const propertyPageData = {
    _id: 'propertyPage',
    _type: 'propertyPage',
    title: 'The Property',
    
    hero: {
      _type: 'hero',
      title: 'The Property',
      description: 'Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.'
    },
    
    venueDiscovery: {
      _type: 'venueDiscoveryBlock',
      sectionClassName: 'section-warm',
      scriptAccent: 'Your Perfect Setting',
      title: 'Discover Our Spaces',
      description: 'Every corner tells a story, every space creates memories'
    },
    
    scheduleTour: {
      _type: 'formBlock',
      title: 'Schedule Your Property Tour',
      scriptAccent: 'Ready to Visit?',
      description: 'Experience the beauty of Rum River Barn in person. Fill out the form below to schedule a private tour of our property.',
      formName: 'schedule-tour',
      formType: 'schedule-tour',
      submitText: 'Schedule Tour',
      loadingText: 'SUBMITTING YOUR REQUEST...',
      lightTheme: false
    },
    
    seo: {
      _type: 'seoSettings',
      metaTitle: 'The Property | Rum River Wedding Barn',
      metaDescription: 'Explore the beautiful property at Rum River Barn. Historic barns, scenic landscapes, and perfect ceremony spaces for your Minnesota wedding.',
      keywords: [
        'wedding venue property',
        'barn venue',
        'Minnesota wedding spaces',
        'outdoor ceremony space',
        'rustic wedding property'
      ]
    }
  }
  
  try {
    await client.createOrReplace(propertyPageData)
    console.log('  ✅ PropertyPage migrated successfully!')
  } catch (error) {
    console.error('  ❌ Error migrating PropertyPage:', error)
  }
}

// LocationPage migration  
async function migrateLocationPage() {
  const locationPageData = {
    _id: 'locationPage',
    _type: 'locationPage',
    title: 'Location',
    
    hero: {
      _type: 'hero',
      title: 'Find Your Way to Forever',
      description: 'Nestled in the heart of Minnesota, our venue is conveniently accessible from major cities while offering the peaceful charm of the countryside.'
    },
    
    mapDirections: {
      _type: 'mapDirectionsBlock',
      scriptAccent: 'Find Us',
      title: 'Getting Here',
      lead: 'Conveniently located in the heart of Minnesota with easy access from major cities',
      address: {
        street: '42618 78th Street',
        city: 'Hillman',
        state: 'MN',
        zip: '56338'
      },
      features: [
        {
          _key: 'address',
          _type: 'locationFeature',
          icon: 'location',
          title: 'Address',
          description: '42618 78th Street\nHillman, MN 56338'
        },
        {
          _key: 'easy-access',
          _type: 'locationFeature',
          icon: 'truck',
          title: 'Easy Access From',
          description: '45 min from Minneapolis\n30 min from St. Cloud\n1 hour from Brainerd'
        },
        {
          _key: 'airport',
          _type: 'locationFeature',
          icon: 'rocket',
          title: 'Nearest Airport',
          description: 'Minneapolis-St. Paul International\n55 miles (1 hour drive)'
        },
        {
          _key: 'accommodations',
          _type: 'locationFeature',
          icon: 'building',
          title: 'Accommodations',
          description: 'Partner hotels in Princeton & Milaca\nGroup rates available'
        }
      ]
    },
    
    surroundingCities: {
      _type: 'surroundingCitiesBlock',
      scriptAccent: 'Easy to Reach',
      title: 'Surrounding Cities',
      lead: 'Just an hour northwest of 494/694 Minneapolis/St. Paul',
      cities: [
        {
          _key: 'metro',
          _type: 'cityGroup',
          icon: 'building',
          title: 'Metro Area',
          description: 'Minneapolis/St. Paul\n1 hour from 494/694\n\nElk River/Rogers\n45 minutes'
        },
        {
          _key: 'central',
          _type: 'cityGroup',
          icon: 'beaker',
          title: 'Central Minnesota',
          description: 'Saint Cloud\n35 minutes\n\nLittle Falls\n45 minutes'
        },
        {
          _key: 'lakes',
          _type: 'cityGroup',
          icon: 'globe',
          title: 'Lakes Region',
          description: 'Brainerd Lakes Area\n1 hour\n\nMille Lacs Lake\n30 minutes to Casino & Izaty\'s'
        },
        {
          _key: 'north-shore',
          _type: 'cityGroup',
          icon: 'map',
          title: 'North Shore',
          description: 'Duluth\n2 hours to Lake Superior\n\nHinckley\n1 hour'
        },
        {
          _key: 'local',
          _type: 'cityGroup',
          icon: 'home',
          title: 'Local Towns',
          description: 'Milaca\n10 minutes - nearest town\n\nPrinceton\n25 minutes'
        },
        {
          _key: 'entertainment',
          _type: 'cityGroup',
          icon: 'sparkles',
          title: 'Entertainment',
          description: 'Grand Casino Mille Lacs\n30 minutes - gaming & dining\n\nIzaty\'s Resort\n30 minutes - golf & lakeside'
        }
      ]
    },
    
    onSiteAmenities: {
      _type: 'amenitiesBlock',
      scriptAccent: 'On the Property',
      title: 'On-Site Amenities',
      lead: 'Extend your stay and explore everything our property has to offer',
      amenities: [
        {
          _key: 'campground',
          _type: 'amenity',
          icon: 'fire',
          title: 'Campground on the Brook',
          description: 'Offering fishing and swimming holes, tent camping areas, and campfire sites for a rustic outdoor experience.'
        },
        {
          _key: 'guest-house',
          _type: 'amenity',
          icon: 'home',
          title: 'Guest House',
          description: 'On-site lodging available for wedding parties and overnight guests who want to stay close to the celebration.'
        },
        {
          _key: 'frisbee-golf',
          _type: 'amenity',
          icon: 'play-circle',
          title: 'Frisbee Golf Course',
          description: 'Enjoy our scenic disc golf course winding through the property\'s natural landscape.'
        },
        {
          _key: 'fishing',
          _type: 'amenity',
          icon: 'cube',
          title: 'Fishing & Swimming',
          description: 'Natural brook with swimming holes and fishing spots for a refreshing outdoor experience.'
        }
      ]
    },
    
    nearbyHotels: {
      _type: 'hotelsBlock',
      scriptAccent: 'Where to Stay',
      title: 'Nearby Hotels',
      lead: 'Comfortable accommodations for your out-of-town guests',
      hotels: [
        {
          _key: 'americas-best-milaca',
          _type: 'hotel',
          name: 'Americas Best Value Inn',
          location: 'Milaca',
          distance: '10 minutes',
          amenities: 'Free breakfast, Pet-friendly'
        },
        {
          _key: 'super8-milaca',
          _type: 'hotel',
          name: 'Super 8',
          location: 'Milaca',
          distance: '10 minutes',
          amenities: 'Free breakfast, Pool'
        },
        {
          _key: 'grandview-princeton',
          _type: 'hotel',
          name: 'GrandView Lodge',
          location: 'Princeton',
          distance: '25 minutes',
          amenities: 'Full service resort, Golf course'
        },
        {
          _key: 'americinn-princeton',
          _type: 'hotel',
          name: 'AmericInn',
          location: 'Princeton',
          distance: '25 minutes',
          amenities: 'Pool, Hot tub, Free breakfast'
        },
        {
          _key: 'grand-casino',
          _type: 'hotel',
          name: 'Grand Casino Mille Lacs',
          location: 'Onamia',
          distance: '30 minutes',
          amenities: 'Casino, Restaurants, Entertainment'
        },
        {
          _key: 'izatys',
          _type: 'hotel',
          name: 'Izaty\'s Resort',
          location: 'Onamia',
          distance: '30 minutes',
          amenities: 'Lakeside resort, Golf, Marina'
        }
      ]
    },
    
    scheduleTour: {
      _type: 'formBlock',
      title: 'Get Directions',
      scriptAccent: 'Plan Your Visit',
      description: 'Ready to visit Rum River Barn? Schedule your tour today and we\'ll send you detailed directions.',
      formName: 'schedule-visit',
      formType: 'schedule-tour',
      submitText: 'Get Directions',
      loadingText: 'SENDING...',
      lightTheme: true
    },
    
    seo: {
      _type: 'seoSettings',
      metaTitle: 'Location & Directions | Rum River Barn Wedding Venue',
      metaDescription: 'Find directions to Rum River Barn in Hillman, MN. Easy access from Minneapolis, St. Cloud, and Brainerd. Hotels and local amenities information.',
      keywords: [
        'wedding venue location',
        'Hillman MN wedding',
        'directions to Rum River Barn',
        'Minnesota wedding location',
        'wedding venue near Minneapolis'
      ]
    }
  }
  
  try {
    await client.createOrReplace(locationPageData)
    console.log('  ✅ LocationPage migrated successfully!')
  } catch (error) {
    console.error('  ❌ Error migrating LocationPage:', error)
  }
}

// GalleryPage migration
async function migrateGalleryPage() {
  const galleryPageData = {
    _id: 'galleryPage',
    _type: 'galleryPage',
    title: 'Photo Gallery',
    
    hero: {
      _type: 'hero',
      title: 'Capture Every Moment',
      description: 'Browse through our stunning collection of wedding photos and venue spaces to envision your perfect day at Rum River Barn.'
    },
    
    galleryIntro: {
      _type: 'sectionHeader',
      scriptAccent: 'Visual Journey',
      title: 'Explore Our Gallery',
      lead: 'From intimate ceremonies to grand celebrations, see how every season brings its own magic to Rum River Barn'
    },
    
    categories: [
      {
        _key: 'all',
        name: 'All Photos',
        value: 'all'
      },
      {
        _key: 'barn',
        name: 'The Barn',
        value: 'barn'
      },
      {
        _key: 'property',
        name: 'Property',
        value: 'property'
      },
      {
        _key: 'bridal-suite',
        name: 'Bridal Suite',
        value: 'bridal-suite'
      },
      {
        _key: 'reception-area',
        name: 'Reception Area',
        value: 'reception-area'
      },
      {
        _key: 'details',
        name: 'Details & Decor',
        value: 'details'
      },
      {
        _key: 'real-weddings',
        name: 'Real Weddings',
        value: 'real-weddings'
      }
    ],
    
    scheduleTour: {
      _type: 'formBlock',
      title: 'See It In Person',
      scriptAccent: 'Ready to Visit?',
      description: 'Photos only tell part of the story. Schedule your personal tour to experience the magic of Rum River Barn firsthand.',
      formName: 'gallery-tour',
      formType: 'schedule-tour',
      submitText: 'Schedule Your Tour',
      loadingText: 'SUBMITTING...',
      lightTheme: false
    },
    
    seo: {
      _type: 'seoSettings',
      metaTitle: 'Photo Gallery | Rum River Barn Wedding Venue',
      metaDescription: 'Browse beautiful wedding photos and venue images from Rum River Barn. See real weddings, ceremony spaces, reception areas, and property views.',
      keywords: [
        'wedding venue photos',
        'barn wedding gallery',
        'Minnesota wedding pictures',
        'venue photo gallery',
        'real wedding photos'
      ]
    }
  }
  
  try {
    await client.createOrReplace(galleryPageData)
    console.log('  ✅ GalleryPage migrated successfully!')
  } catch (error) {
    console.error('  ❌ Error migrating GalleryPage:', error)
  }
}

// HistoryPage migration
async function migrateHistoryPage() {
  const historyPageData = {
    _id: 'historyPage',
    _type: 'historyPage',
    title: 'Our History',
    
    hero: {
      _type: 'hero',
      title: 'A Story Written in Timber',
      description: 'From a 1940s working barn to Minnesota\'s premier wedding venue, discover the rich history that makes Rum River Barn so special.'
    },
    
    historyContent: {
      _type: 'historyContent',
      timeline: {
        _type: 'timelineSection',
        scriptAccent: 'Our Journey',
        title: 'From Past to Present',
        lead: 'Every beam tells a story, every milestone a memory',
        events: [
          {
            _key: '1940s',
            _type: 'timelineEvent',
            year: '1940s',
            title: 'Original Construction',
            description: 'Built as a working dairy barn, the structure featured hand-hewn beams and traditional post-and-beam construction that stands strong today.'
          },
          {
            _key: '1970s',
            _type: 'timelineEvent',
            year: '1970s',
            title: 'Agricultural Heritage',
            description: 'The barn served local farmers for decades, housing livestock and storing harvests, becoming a cornerstone of the rural community.'
          },
          {
            _key: '2010',
            _type: 'timelineEvent',
            year: '2010',
            title: 'Vision for Transformation',
            description: 'New owners recognized the barn\'s potential as an event venue, beginning careful restoration while preserving its authentic character.'
          },
          {
            _key: '2012',
            _type: 'timelineEvent',
            year: '2012',
            title: 'Restoration Complete',
            description: 'After two years of meticulous work, the barn reopened with modern amenities, climate control, and stunning architectural details.'
          },
          {
            _key: '2014',
            _type: 'timelineEvent',
            year: '2014',
            title: 'First Wedding Season',
            description: 'Rum River Barn hosted its first wedding couples, quickly becoming known for exceptional service and breathtaking surroundings.'
          },
          {
            _key: '2018',
            _type: 'timelineEvent',
            year: '2018',
            title: 'Venue Expansion',
            description: 'Added the bridal suite, groomsman quarters, and enhanced outdoor ceremony spaces to better serve our couples.'
          },
          {
            _key: 'today',
            _type: 'timelineEvent',
            year: 'Today',
            title: 'Premier Wedding Destination',
            description: 'Now celebrating over 200 weddings, we continue to honor our agricultural heritage while creating new love stories.'
          }
        ]
      },
      
      heritage: {
        _type: 'heritageSection',
        scriptAccent: 'Preserving Heritage',
        title: 'Original Features',
        lead: 'We\'ve carefully preserved the authentic elements that give our barn its character',
        features: [
          {
            _key: 'beams',
            _type: 'heritageFeature',
            icon: 'cube',
            title: 'Hand-Hewn Beams',
            description: 'Original 1940s timber beams showcase the craftsmanship of a bygone era.'
          },
          {
            _key: 'construction',
            _type: 'heritageFeature',
            icon: 'shield-check',
            title: 'Post & Beam Construction',
            description: 'Traditional building methods ensure structural integrity and timeless beauty.'
          },
          {
            _key: 'flooring',
            _type: 'heritageFeature',
            icon: 'template',
            title: 'Original Flooring',
            description: 'Restored wooden floors bear the patina of decades of agricultural use.'
          },
          {
            _key: 'stonework',
            _type: 'heritageFeature',
            icon: 'sparkles',
            title: 'Stone Foundation',
            description: 'The original fieldstone foundation remains a testament to enduring craftsmanship.'
          }
        ]
      },
      
      mission: {
        _type: 'missionSection',
        scriptAccent: 'Our Promise',
        title: 'Continuing the Legacy',
        lead: 'Where rustic heritage meets modern celebration',
        content: 'At Rum River Barn, we believe every wedding should be as unique as the love story it celebrates. Our mission is to provide not just a venue, but an experience—combining the warmth of Minnesota hospitality with the timeless charm of our historic barn. We\'re committed to preserving this beautiful piece of history while creating new memories for generations to come.',
        values: [
          {
            _key: 'authenticity',
            _type: 'value',
            title: 'Authenticity',
            description: 'Preserving the genuine character of our historic barn'
          },
          {
            _key: 'excellence',
            _type: 'value',
            title: 'Excellence',
            description: 'Delivering exceptional service for every celebration'
          },
          {
            _key: 'community',
            _type: 'value',
            title: 'Community',
            description: 'Supporting local vendors and Minnesota traditions'
          },
          {
            _key: 'memories',
            _type: 'value',
            title: 'Memory Making',
            description: 'Creating unforgettable moments that last a lifetime'
          }
        ]
      }
    },
    
    scheduleTour: {
      _type: 'formBlock',
      title: 'Experience Our History',
      scriptAccent: 'Visit Us',
      description: 'Come see how we\'ve preserved the past while creating a perfect setting for your future. Schedule your personal tour today.',
      formName: 'history-tour',
      formType: 'schedule-tour',
      submitText: 'Schedule Tour',
      loadingText: 'SUBMITTING...',
      lightTheme: true
    },
    
    seo: {
      _type: 'seoSettings',
      metaTitle: 'Our History | Rum River Barn Wedding Venue',
      metaDescription: 'Learn about the rich history of Rum River Barn. From 1940s dairy barn to premier Minnesota wedding venue. Preserving heritage, creating memories.',
      keywords: [
        'historic barn venue',
        'Minnesota barn history',
        'rustic wedding venue story',
        'preserved barn wedding',
        'heritage wedding venue'
      ]
    }
  }
  
  try {
    await client.createOrReplace(historyPageData)
    console.log('  ✅ HistoryPage migrated successfully!')
  } catch (error) {
    console.error('  ❌ Error migrating HistoryPage:', error)
  }
}

// Run all migrations
async function migrateAllRemainingPages() {
  console.log('🚀 Starting migration of remaining pages...\n')
  
  console.log('📄 Migrating PropertyPage...')
  await migratePropertyPage()
  
  console.log('📄 Migrating LocationPage...')
  await migrateLocationPage()
  
  console.log('📄 Migrating GalleryPage...')
  await migrateGalleryPage()
  
  console.log('📄 Migrating HistoryPage...')
  await migrateHistoryPage()
  
  console.log('\n==================================================')
  console.log('📊 MIGRATION COMPLETE!')
  console.log('==================================================')
  console.log('✅ All remaining pages have been migrated to Sanity')
  console.log('\nPages now in Sanity:')
  console.log('  ✅ HomePage')
  console.log('  ✅ EventsPage')
  console.log('  ✅ ContactPage')
  console.log('  ✅ TestimonialsPage')
  console.log('  ✅ ThankYouPage')
  console.log('  ✅ VendorsPage')
  console.log('  ✅ FAQPage')
  console.log('  ✅ PrivacyPage')
  console.log('  ✅ TermsPage')
  console.log('  ✅ PropertyPage')
  console.log('  ✅ LocationPage')
  console.log('  ✅ GalleryPage')
  console.log('  ✅ HistoryPage')
  console.log('\n🎉 All pages successfully migrated!')
}

// Execute migration
migrateAllRemainingPages()