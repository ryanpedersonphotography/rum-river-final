import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'skzRZDaeFfvV0tmc1hL8C0o3m35tvUBc77NzzZ7pKY3WY2Wm7SQiq4uBFhz1k7xY7aNmhHQLTTQT0H367TrwDwAfAbdFBfDUGF8kheREt9J2uOqDJ1BgtuiGyCkUwKhfUEcVCUx9FNYgwBFRWw8euz0Rg36cN5j8CQsqZzbv1UtpEvgYqbBf',
  apiVersion: '2024-01-01'
})

async function addContactFormSection() {
  console.log('📧 Adding Contact Form section to Homepage...')

  // Get existing homepage
  const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
  if (!homepage) {
    throw new Error('Homepage not found')
  }

  // Contact Form section - Schedule Tour Form
  const formSection = {
    _type: 'formBlock',
    _key: 'contact-form',
    formName: 'home-schedule-tour',
    redirectPath: '/thank-you',
    title: 'Start Planning Your Perfect Day',
    subtitle: 'Schedule Your Tour',
    description: 'We\'d love to show you around our beautiful venue and discuss your wedding vision.',
    submitText: 'Schedule Tour',
    loadingText: 'SCHEDULING...',
    formType: 'tour', // tour form vs vendor form
    showHeader: true,
    lightTheme: false
  }

  // Update homepage
  const updatedHomepage = {
    ...homepage,
    contentBlocks: [
      ...homepage.contentBlocks,
      formSection
    ]
  }

  try {
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Added Contact Form section')
    return result
  } catch (error) {
    console.error('❌ Error adding contact form:', error)
    throw error
  }
}

// Run the script
addContactFormSection()
  .then(() => {
    console.log('🎉 Contact Form section added!')
    console.log('📧 Added: Schedule Tour form section')
    console.log('🏠 Homepage is now complete with all sections!')
    console.log('🔗 Visit http://localhost:3333/ to edit in Sanity Studio')
  })
  .catch(console.error)