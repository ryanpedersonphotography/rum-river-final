import {createClient} from '@sanity/client'
const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function initializeFooterSettings() {
  try {
    // Check if site settings already exists
    const existing = await client.fetch('*[_type == "siteSettings" && _id == "siteSettings"][0]')
    
    const footerData = {
      _type: 'footerSettings',
      brandSection: {
        title: 'Rum River Barn',
        tagline: "Minnesota's premier wedding venue\nwhere dreams come to life"
      },
      contactSection: {
        title: 'Visit Us',
        streetAddress: '42618 78th Street',
        cityStateZip: 'Hillman, MN 56338',
        phone: '(320) 492-8584',
        phoneLink: 'tel:+13204928584'
      },
      socialSection: {
        title: 'Follow Along',
        links: [
          {
            _key: 'facebook',
            platform: 'facebook',
            displayName: 'Facebook',
            url: 'https://www.facebook.com/rumriverbarn'
          },
          {
            _key: 'instagram',
            platform: 'instagram',
            displayName: 'Instagram',
            url: 'https://www.instagram.com/rumriverbarn'
          },
          {
            _key: 'pinterest',
            platform: 'pinterest',
            displayName: 'Pinterest',
            url: 'https://www.pinterest.com/rumriverbarn'
          }
        ]
      },
      quickLinksSection: {
        enabled: false,
        title: 'Quick Links',
        links: []
      },
      copyrightSection: {
        copyrightText: '© 2025 Rum River Barn. All rights reserved.',
        additionalText: 'Designed with love in Minnesota',
        showPrivacyPolicy: true,
        showTermsOfService: true
      },
      styleSettings: {
        backgroundColor: 'var(--text-dark)',
        textColor: 'var(--accent-gold)',
        accentColor: 'var(--accent-gold)'
      }
    }
    
    if (existing) {
      // Update existing site settings with footer
      await client
        .patch('siteSettings')
        .set({ footerSettings: footerData })
        .commit()
      
      console.log('✅ Updated site settings with footer configuration')
    } else {
      // Create new site settings document
      await client.create({
        _id: 'siteSettings',
        _type: 'siteSettings',
        title: 'Rum River Wedding Barn',
        description: 'Minnesota\'s premier wedding venue where dreams come to life',
        url: 'https://rumriverweddingbarn.com',
        contactInfo: {
          phone: '(320) 492-8584',
          email: 'info@rumriverweddingbarn.com',
          address: '42618 78th Street\nHillman, MN 56338'
        },
        socialMedia: {
          facebook: 'https://www.facebook.com/rumriverbarn',
          instagram: 'https://www.instagram.com/rumriverbarn'
        },
        footerSettings: footerData,
        defaultSeo: {
          metaTitle: 'Rum River Wedding Barn - Minnesota\'s Premier Wedding Venue',
          metaDescription: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
          keywords: ['wedding venue', 'Minnesota wedding', 'barn wedding', 'rustic wedding', 'Rum River', 'Hillman MN']
        }
      })
      
      console.log('✅ Created site settings with footer configuration')
    }
    
    console.log('\n📋 Footer settings initialized with:')
    console.log('  - Brand section with title and tagline')
    console.log('  - Contact information')
    console.log('  - Social media links (Facebook, Instagram, Pinterest)')
    console.log('  - Copyright text')
    console.log('  - Style settings')
    
  } catch (error) {
    console.error('❌ Error initializing footer settings:', error)
    process.exit(1)
  }
}

initializeFooterSettings()