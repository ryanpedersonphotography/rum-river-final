import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function addExperienceSection() {
  console.log('✨ Adding Experience section to Homepage...')

  // Get existing homepage
  const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
  if (!homepage) {
    throw new Error('Homepage not found')
  }

  // Experience section - matches your existing content
  const experienceSection = {
    _type: 'experienceBlock',
    _key: 'experience',
    scriptAccent: 'The Rum River Experience',
    title: 'More Than a Venue',
    description: 'We don\'t just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.',
    features: [
      {
        _type: 'experienceFeatureItem',
        _key: 'planning',
        title: 'All-Inclusive Planning',
        description: 'Our experienced coordinators handle every detail, so you can focus on what matters most—each other.',
        icon: 'check'
      },
      {
        _type: 'experienceFeatureItem',
        _key: 'packages',
        title: 'Customizable Packages',
        description: 'From intimate gatherings to grand celebrations, we tailor every element to your vision and budget.',
        icon: 'sparkles'
      },
      {
        _type: 'experienceFeatureItem',
        _key: 'charm',
        title: 'Historic Charm',
        description: 'Our lovingly restored 1920s barn combines century-old character with modern convenience.',
        icon: 'home'
      }
    ],
    sectionClassName: 'experience-section section section-blush'
  }

  // Update homepage
  const updatedHomepage = {
    ...homepage,
    contentBlocks: [
      ...homepage.contentBlocks,
      experienceSection
    ]
  }

  try {
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Added Experience section with 3 features')
    return result
  } catch (error) {
    console.error('❌ Error adding experience section:', error)
    throw error
  }
}

// Run the script
addExperienceSection()
  .then(() => {
    console.log('🎉 Experience section added!')
    console.log('✨ Added: "The Rum River Experience" with feature highlights')
  })
  .catch(console.error)