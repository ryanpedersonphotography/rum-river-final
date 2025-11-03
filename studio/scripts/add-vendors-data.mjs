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

const vendorsPageData = {
  _id: 'vendorsPage',
  _type: 'vendorsPage',
  title: 'Preferred Vendor Directory',
  hero: {
    title: 'Preferred Vendor Directory',
    lead: 'Our carefully curated list of trusted wedding professionals who understand our venue and share our commitment to making your day perfect.'
  },
  vendorCategories: [
    {
      _key: 'dj-entertainment',
      title: 'DJ & Entertainment',
      iconName: 'music',
      vendors: [
        {
          _key: 'sprunk',
          name: 'Sprunk Entertainment',
          phone: '612-440-0777',
          description: 'Professional DJ and entertainment services for weddings and special events.'
        },
        {
          _key: 'impressions',
          name: 'Impressions Mobile Music',
          phone: '320-237-7777',
          description: 'Mobile DJ services with extensive music library and professional sound equipment.'
        },
        {
          _key: 'djcj',
          name: 'DJCJ Global',
          phone: '612-770-2034',
          description: 'Professional DJ services specializing in wedding celebrations and events.'
        }
      ]
    },
    {
      _key: 'catering-bar',
      title: 'Catering and Bar Service',
      iconName: 'cake',
      vendors: [
        {
          _key: 'northern-lights',
          name: 'Northern Lights Ballroom',
          phone: '320-369-4622',
          description: 'Full-service catering with experience in venue events and wedding celebrations.'
        },
        {
          _key: 'fable',
          name: 'Fable Catering',
          phone: '612-500-6838',
          description: 'Creative catering services with custom menu options for special events.'
        },
        {
          _key: 'pit-happens',
          name: 'Pit Happens',
          phone: '218-851-0003',
          description: 'BBQ and outdoor catering specializing in rustic, farm-to-table dining experiences.'
        },
        {
          _key: 'bartending-school',
          name: 'Minnesota School of Bartending',
          phone: '651-645-1252',
          description: 'Professional bartending services with trained, certified bartenders for events.'
        }
      ]
    },
    {
      _key: 'florist',
      title: 'Florist',
      iconName: 'sparkles',
      vendors: [
        {
          _key: 'princeton-floral',
          name: 'Princeton Floral',
          phone: '763-389-3433',
          description: 'Local florist specializing in wedding arrangements, bridal bouquets, and venue decorations.'
        }
      ]
    },
    {
      _key: 'shuttle',
      title: 'Shuttle Service',
      iconName: 'truck',
      vendors: [
        {
          _key: 'trobecs',
          name: "Trobec's Bus Service",
          phone: '320-251-1202',
          description: 'Transportation services for wedding parties and guest shuttle needs.'
        }
      ]
    },
    {
      _key: 'accommodations',
      title: 'Accommodations',
      iconName: 'building',
      vendors: [
        {
          _key: 'grand-casino',
          name: 'Grand Casino, Mille Lacs',
          phone: '800-626-5825',
          description: 'Hotel accommodations with group rates available for wedding guests.'
        },
        {
          _key: 'phoenix',
          name: 'Phoenix Hotel, Milaca',
          phone: '320-982-2600',
          description: 'Local hotel accommodations in nearby Milaca for wedding guests.'
        },
        {
          _key: 'hillbilly',
          name: 'Hillbilly Haven Motel, Pierz',
          phone: '320-468-9993',
          description: 'Affordable motel accommodations in Pierz area for wedding guests.'
        }
      ]
    }
  ],
  contactCta: {
    _type: 'formBlock',
    formName: 'vendor-application',
    title: 'Are You a Wedding Professional?',
    subtitle: 'Join Our Network',
    description: "We're always looking for talented professionals to join our preferred vendor network. If you're interested in working with couples at Rum River Barn, we'd love to hear from you.",
    submitText: 'Apply to Join',
    loadingText: 'SUBMITTING APPLICATION...',
    lightTheme: true,
    formType: 'vendor',
    sectionStyle: 'gradient'
  },
  seo: {
    _type: 'seoSettings',
    metaTitle: 'Preferred Wedding Vendors | Rum River Barn',
    metaDescription: 'Trusted wedding vendors for Rum River Barn including DJs, caterers, florists, photographers, and more. Our curated list of professionals.',
    keywords: ['wedding vendors', 'Minnesota wedding professionals', 'barn wedding vendors', 'wedding DJ', 'wedding catering', 'wedding florist']
  }
}

async function addVendorsData() {
  try {
    console.log('Adding vendors page data to Sanity...')
    
    const result = await client.createOrReplace(vendorsPageData)
    
    console.log('✅ Successfully added vendors page with all vendor data!')
    console.log(`Document ID: ${result._id}`)
    console.log(`Total vendor categories: ${result.vendorCategories.length}`)
    
    const totalVendors = result.vendorCategories.reduce((sum, cat) => sum + cat.vendors.length, 0)
    console.log(`Total vendors: ${totalVendors}`)
    
  } catch (error) {
    console.error('Error adding vendors data:', error)
  }
}

addVendorsData()