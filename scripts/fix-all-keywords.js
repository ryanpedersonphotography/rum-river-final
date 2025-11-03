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

async function fixAllKeywords() {
  console.log('🔍 Checking all pages for keyword field issues...\n')
  
  try {
    // Fetch all page documents
    const pages = await client.fetch('*[_type == "page"]')
    
    console.log(`Found ${pages.length} pages to check\n`)
    
    let fixedCount = 0
    let alreadyCorrectCount = 0
    
    for (const page of pages) {
      console.log(`Checking page: ${page.title || page._id}`)
      
      if (page.seo && typeof page.seo.keywords === 'string') {
        // Convert string to array
        const keywordsArray = page.seo.keywords
          .split(',')
          .map(keyword => keyword.trim())
          .filter(keyword => keyword.length > 0)
        
        console.log(`  ⚠️  Keywords need fixing:`)
        console.log(`     From: "${page.seo.keywords}"`)
        console.log(`     To: [${keywordsArray.map(k => `"${k}"`).join(', ')}]`)
        
        // Update the page
        await client
          .patch(page._id)
          .set({
            'seo.keywords': keywordsArray
          })
          .commit()
        
        console.log(`  ✅ Fixed!\n`)
        fixedCount++
        
      } else if (page.seo && Array.isArray(page.seo.keywords)) {
        console.log(`  ✅ Keywords already correct (array)\n`)
        alreadyCorrectCount++
        
      } else if (!page.seo || !page.seo.keywords) {
        console.log(`  ℹ️  No SEO keywords defined\n`)
      }
    }
    
    // Also check wedding documents
    console.log('\nChecking wedding documents...')
    const weddings = await client.fetch('*[_type == "wedding"]')
    
    for (const wedding of weddings) {
      if (wedding.seo && typeof wedding.seo.keywords === 'string') {
        const keywordsArray = wedding.seo.keywords
          .split(',')
          .map(keyword => keyword.trim())
          .filter(keyword => keyword.length > 0)
        
        console.log(`Wedding: ${wedding.title}`)
        console.log(`  ⚠️  Keywords need fixing`)
        
        await client
          .patch(wedding._id)
          .set({
            'seo.keywords': keywordsArray
          })
          .commit()
        
        console.log(`  ✅ Fixed!\n`)
        fixedCount++
      }
    }
    
    console.log('\n' + '='.repeat(50))
    console.log('🎉 Summary:')
    console.log(`  - Fixed: ${fixedCount} documents`)
    console.log(`  - Already correct: ${alreadyCorrectCount} documents`)
    console.log('='.repeat(50))
    
  } catch (error) {
    console.error('❌ Error fixing keywords:', error)
    throw error
  }
}

// Run the fix
fixAllKeywords()
  .then(() => {
    console.log('\n✅ All keyword fields have been checked and fixed!')
    console.log('🔗 Visit http://localhost:3333/ to verify all fixes')
  })
  .catch((error) => {
    console.error('💥 Fix failed:', error)
    process.exit(1)
  })