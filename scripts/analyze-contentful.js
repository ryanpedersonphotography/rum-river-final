import { createClient as createContentfulClient } from 'contentful'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Contentful client (read-only)
const contentfulClient = createContentfulClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

async function analyzeContentful() {
  try {
    console.log('🔍 Analyzing Contentful space...')
    
    // Get all entries first to see what content types exist
    console.log('\n📊 Content Analysis:')
    const allEntries = await contentfulClient.getEntries({ limit: 1000 })
    
    console.log(`\n📋 Found ${allEntries.total} total entries`)
    
    const entriesByType = {}
    for (const entry of allEntries.items) {
      const contentType = entry.sys.contentType.sys.id
      if (!entriesByType[contentType]) {
        entriesByType[contentType] = []
      }
      entriesByType[contentType].push(entry)
    }
    
    console.log('\n📄 Content Types Found:')
    for (const [contentType, entries] of Object.entries(entriesByType)) {
      console.log(`\n📦 ${contentType}: ${entries.length} entries`)
      
      // Show first entry as example
      if (entries.length > 0) {
        const firstEntry = entries[0]
        console.log(`   Sample entry:`)
        console.log(`     ID: ${firstEntry.sys.id}`)
        console.log(`     Created: ${firstEntry.sys.createdAt}`)
        console.log(`     Fields: ${Object.keys(firstEntry.fields).join(', ')}`)
        
        // Show field details for first few fields
        const fieldKeys = Object.keys(firstEntry.fields).slice(0, 5)
        for (const fieldKey of fieldKeys) {
          const value = firstEntry.fields[fieldKey]
          let displayValue = value
          
          if (typeof value === 'object' && value !== null) {
            if (value.sys && value.sys.type === 'Link') {
              displayValue = `[Link to ${value.sys.linkType}: ${value.sys.id}]`
            } else if (Array.isArray(value)) {
              displayValue = `[Array of ${value.length} items]`
            } else {
              displayValue = `[Object: ${Object.keys(value).join(', ')}]`
            }
          } else if (typeof value === 'string' && value.length > 100) {
            displayValue = value.substring(0, 100) + '...'
          }
          
          console.log(`       ${fieldKey}: ${displayValue}`)
        }
      }
    }
    
    // Specifically look for homepage content
    console.log('\n\n🏠 Homepage Content Analysis:')
    try {
      // Try different possible homepage content types
      const homepageTypes = ['homepage', 'homePage', 'home', 'pageContent', 'page']
      
      for (const type of homepageTypes) {
        if (entriesByType[type]) {
          console.log(`\n✅ Found homepage content in '${type}':`)
          
          for (const entry of entriesByType[type]) {
            console.log(`   Entry: ${entry.fields.title || entry.fields.name || entry.sys.id}`)
            console.log(`   Fields: ${Object.keys(entry.fields).join(', ')}`)
            
            // Show more details for homepage entries
            for (const [fieldKey, value] of Object.entries(entry.fields)) {
              let displayValue = value
              
              if (typeof value === 'object' && value !== null) {
                if (value.sys && value.sys.type === 'Link') {
                  displayValue = `[Link to ${value.sys.linkType}: ${value.sys.id}]`
                } else if (Array.isArray(value)) {
                  displayValue = `[Array of ${value.length} items]`
                } else {
                  displayValue = `[Object: ${Object.keys(value).join(', ')}]`
                }
              } else if (typeof value === 'string' && value.length > 200) {
                displayValue = value.substring(0, 200) + '...'
              }
              
              console.log(`     ${fieldKey}: ${displayValue}`)
            }
          }
        }
      }
      
    } catch (error) {
      console.error('❌ Error analyzing homepage content:', error.message)
    }
    
  } catch (error) {
    console.error('❌ Analysis error:', error)
  }
}

// Run the analysis
analyzeContentful()