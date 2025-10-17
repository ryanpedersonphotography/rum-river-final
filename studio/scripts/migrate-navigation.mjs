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

const navigationData = {
  _id: 'mainNavigation',
  _type: 'siteNavigation',
  title: 'Main Navigation',
  
  logo: {
    line1: 'Rum River',
    line2: 'Wedding Barn',
    link: '/'
  },
  
  menuItems: [
    {
      _key: 'home',
      label: 'Home',
      link: '/',
      isDropdown: false
    },
    {
      _key: 'events',
      label: 'Events',
      link: '/events',
      isDropdown: false
    },
    {
      _key: 'vendor-list',
      label: 'Vendor List',
      link: '/vendor-list',
      isDropdown: false
    },
    {
      _key: 'property',
      label: 'The Property',
      link: '/property',
      isDropdown: true,
      dropdownItems: [
        {
          _key: 'location',
          label: 'Location',
          link: '/location'
        },
        {
          _key: 'history',
          label: 'History',
          link: '/history'
        }
      ]
    },
    {
      _key: 'gallery',
      label: 'Gallery',
      link: '/gallery',
      isDropdown: false
    },
    {
      _key: 'testimonials',
      label: 'Testimonials & Features',
      link: '/testimonials',
      isDropdown: true,
      dropdownItems: [
        {
          _key: 'testimonials-page',
          label: 'Testimonials',
          link: '/testimonials'
        },
        {
          _key: 'real-weddings',
          label: 'Real Weddings Blog',
          link: '/real-weddings'
        }
      ]
    },
    {
      _key: 'contact',
      label: 'Contact',
      link: '/contact',
      isDropdown: false
    }
  ]
}

async function migrateNavigation() {
  try {
    console.log('🧭 Starting Navigation migration...')
    
    const result = await client.createOrReplace(navigationData)
    
    console.log('✅ Navigation successfully migrated!')
    console.log(`Document ID: ${result._id}`)
    console.log('\nContent summary:')
    console.log('  - Logo settings')
    console.log('  - 7 main menu items')
    console.log('  - 2 dropdown menus')
    console.log('    • The Property (Location, History)')
    console.log('    • Testimonials & Features (Testimonials, Real Weddings Blog)')
    
  } catch (error) {
    console.error('❌ Error migrating Navigation:', error)
  }
}

migrateNavigation()