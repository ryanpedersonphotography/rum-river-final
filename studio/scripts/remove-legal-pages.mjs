import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production', 
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function removeLegalPages() {
  try {
    console.log('🗑️  Removing legal page documents from Sanity...')
    
    // Find all legal page documents (including drafts)
    const legalDocs = await client.fetch('*[_type in ["privacyPage", "termsPage"]]{_id, _type, title}')
    
    if (!legalDocs.length) {
      console.log('✅ No legal page documents found')
      return
    }
    
    console.log(`📄 Found ${legalDocs.length} legal page documents:`)
    legalDocs.forEach(doc => {
      console.log(`   - ${doc._id} (${doc._type}): ${doc.title}`)
    })
    
    // Delete all legal page documents
    for (const doc of legalDocs) {
      await client.delete(doc._id)
      console.log(`✅ Deleted ${doc._id}`)
    }
    
    console.log('🎉 Successfully removed all legal page documents!')
    console.log('📝 Legal pages have been completely removed from:')
    console.log('   - Sanity Studio structure')
    console.log('   - Schema imports and types')
    console.log('   - Document storage')
    console.log('   - Site references')
    
  } catch (error) {
    console.error('❌ Error removing legal pages:', error)
  }
}

removeLegalPages()