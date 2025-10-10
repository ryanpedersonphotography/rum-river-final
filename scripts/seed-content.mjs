#!/usr/bin/env node

import contentfulManagement from 'contentful-management'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load management token from config
const configPath = join(__dirname, '..', '.contentfulrc.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))

const client = contentfulManagement.createClient({
  accessToken: config.managementToken
})

async function seedContent() {
  try {
    console.log('🌱 Seeding content...\n')
    
    const space = await client.getSpace(config.activeSpaceId)
    const environment = await space.getEnvironment('master')
    
    // Create Testimonials
    console.log('📝 Creating testimonials...')
    const testimonial1 = await environment.createEntry('testimonial', {
      fields: {
        quote: {
          'en-US': 'From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.'
        },
        authorName: {
          'en-US': 'Sarah & Michael Johnson'
        },
        authorDetail: {
          'en-US': 'Married October 2024'
        }
      }
    })
    await testimonial1.publish()
    
    const testimonial2 = await environment.createEntry('testimonial', {
      fields: {
        quote: {
          'en-US': 'We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.'
        },
        authorName: {
          'en-US': 'Emma & James Wilson'
        },
        authorDetail: {
          'en-US': 'Married June 2024'
        }
      }
    })
    await testimonial2.publish()
    
    const testimonial3 = await environment.createEntry('testimonial', {
      fields: {
        quote: {
          'en-US': 'The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn\'t have asked for more.'
        },
        authorName: {
          'en-US': 'Amanda & Chris Thompson'
        },
        authorDetail: {
          'en-US': 'Married February 2024'
        }
      }
    })
    await testimonial3.publish()
    
    console.log('✅ Testimonials created\n')
    
    // Create Feature Blocks
    console.log('📝 Creating feature blocks...')
    const featureBlock1 = await environment.createEntry('featureBlock', {
      fields: {
        number: { 'en-US': '01' },
        title: { 'en-US': 'A Picturesque Location For Your Special Event' },
        lead: { 'en-US': 'Near Milaca, Saint Paul, St Cloud, and Brainerd MN' },
        content: { 
          'en-US': 'When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don\'t wait—call us today at 612-801-0546!'
        },
        imageAlt: { 'en-US': 'Special event venue' },
        reverse: { 'en-US': false }
      }
    })
    await featureBlock1.publish()
    
    const featureBlock2 = await environment.createEntry('featureBlock', {
      fields: {
        number: { 'en-US': '02' },
        title: { 'en-US': 'Rum River Barn & Vineyard' },
        lead: { 'en-US': 'Milaca, St. Cloud, Saint Paul, and Brainerd MN' },
        content: { 
          'en-US': 'Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota\'s premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.'
        },
        imageAlt: { 'en-US': 'Rum River Barn and Vineyard' },
        reverse: { 'en-US': true }
      }
    })
    await featureBlock2.publish()
    
    console.log('✅ Feature blocks created\n')
    
    // Create Experience Features
    console.log('📝 Creating experience features...')
    const expFeature1 = await environment.createEntry('experienceFeature', {
      fields: {
        title: { 'en-US': 'All-Inclusive Planning' },
        description: { 
          'en-US': 'Our experienced coordinators handle every detail, so you can focus on what matters most—each other.'
        }
      }
    })
    await expFeature1.publish()
    
    const expFeature2 = await environment.createEntry('experienceFeature', {
      fields: {
        title: { 'en-US': 'Customizable Packages' },
        description: { 
          'en-US': 'From intimate gatherings to grand celebrations, we tailor every element to your vision and budget.'
        }
      }
    })
    await expFeature2.publish()
    
    const expFeature3 = await environment.createEntry('experienceFeature', {
      fields: {
        title: { 'en-US': 'Historic Charm' },
        description: { 
          'en-US': 'Our lovingly restored 1920s barn combines century-old character with modern convenience.'
        }
      }
    })
    await expFeature3.publish()
    
    console.log('✅ Experience features created\n')
    
    // Create HomePage Entry
    console.log('📝 Creating home page content...')
    const homePage = await environment.createEntry('homePage', {
      fields: {
        heroScriptAccent: { 'en-US': 'Where Dreams Begin' },
        heroTitleLine1: { 'en-US': 'Rum River' },
        heroTitleLine2: { 'en-US': 'Wedding Barn' },
        heroDescription: { 
          'en-US': 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.'
        },
        heroCtaText: { 'en-US': 'Schedule Your Visit' },
        heroCtaLink: { 'en-US': '/contact' },
        
        featureScriptAccent: { 'en-US': 'Your Perfect Venue' },
        featureTitle: { 'en-US': 'Why Choose Rum River Barn' },
        featureLead: { 
          'en-US': 'Discover what makes our venue the perfect setting for your unforgettable celebration'
        },
        featureBlocks: {
          'en-US': [
            { sys: { type: 'Link', linkType: 'Entry', id: featureBlock1.sys.id } },
            { sys: { type: 'Link', linkType: 'Entry', id: featureBlock2.sys.id } }
          ]
        },
        
        experienceScriptAccent: { 'en-US': 'The Rum River Experience' },
        experienceTitle: { 'en-US': 'More Than a Venue' },
        experienceDescription: { 
          'en-US': 'We don\'t just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.'
        },
        experienceFeatures: {
          'en-US': [
            { sys: { type: 'Link', linkType: 'Entry', id: expFeature1.sys.id } },
            { sys: { type: 'Link', linkType: 'Entry', id: expFeature2.sys.id } },
            { sys: { type: 'Link', linkType: 'Entry', id: expFeature3.sys.id } }
          ]
        },
        
        loveStoriesScriptAccent: { 'en-US': 'Real Love Stories' },
        loveStoriesTitle: { 'en-US': 'Weddings at the Barn' },
        loveStoriesLead: { 
          'en-US': 'Every celebration tells a unique story of love, laughter, and happily ever after.'
        },
        
        testimonialsScriptAccent: { 'en-US': 'Love Letters' },
        testimonialsTitle: { 'en-US': 'What Couples Say' },
        testimonialItems: {
          'en-US': [
            { sys: { type: 'Link', linkType: 'Entry', id: testimonial1.sys.id } },
            { sys: { type: 'Link', linkType: 'Entry', id: testimonial2.sys.id } },
            { sys: { type: 'Link', linkType: 'Entry', id: testimonial3.sys.id } }
          ]
        }
      }
    })
    await homePage.publish()
    
    console.log('✅ Home page content created\n')
    console.log('🎉 Content seeding complete!')
    console.log('\n📌 Next steps:')
    console.log('1. Restart your dev server to see the content')
    console.log('2. Log into Contentful to edit content')
    console.log('3. Changes will appear on the site after refresh')
    
  } catch (error) {
    console.error('Error seeding content:', error)
    if (error.message && error.message.includes('already exists')) {
      console.log('\n⚠️  Some content may already exist. You can edit it in Contentful.')
    }
    process.exit(1)
  }
}

seedContent()