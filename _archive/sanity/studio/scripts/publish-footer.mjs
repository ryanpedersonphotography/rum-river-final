import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production', 
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function publishFooter() {
  try {
    // Get the draft document
    const draft = await client.fetch('*[_id == "drafts.footerSettings"][0]')
    
    if (!draft) {
      console.log('❌ No draft footerSettings found')
      return
    }
    
    console.log('📄 Found draft footerSettings, publishing...')
    
    // Create the published version
    const publishedDoc = {
      ...draft,
      _id: 'footerSettings', // Remove drafts. prefix
    }
    
    // Remove draft-specific fields
    delete publishedDoc._rev
    
    // Create or replace the published document
    await client.createOrReplace(publishedDoc)
    
    console.log('✅ Published footerSettings successfully!')
    console.log('🌐 Your footer changes are now live on the website')
    
  } catch (error) {
    console.error('❌ Error publishing footer:', error)
  }
}

publishFooter()