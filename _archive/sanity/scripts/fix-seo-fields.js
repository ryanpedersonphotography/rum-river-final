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

async function fixSeoFields() {
  console.log('🔧 Fixing SEO field names...\n')
  
  try {
    // Fetch all pages with SEO data
    const pages = await client.fetch('*[_type == "page" && defined(seo)]')
    
    console.log(`Found ${pages.length} pages with SEO data to check\n`)
    
    let fixedCount = 0
    
    for (const page of pages) {
      console.log(`Checking page: ${page._id}`)
      
      if (page.seo) {
        let needsUpdate = false
        let updates = { ...page.seo }
        
        // Check for incorrect field names
        if ('title' in page.seo) {
          console.log(`  ⚠️  Found 'title' field, renaming to 'metaTitle'`)
          updates.metaTitle = page.seo.title
          delete updates.title
          needsUpdate = true
        }
        
        if ('description' in page.seo) {
          console.log(`  ⚠️  Found 'description' field, renaming to 'metaDescription'`)
          updates.metaDescription = page.seo.description
          delete updates.description
          needsUpdate = true
        }
        
        if (needsUpdate) {
          console.log(`  📝 Updating SEO fields...`)
          
          // Update the document
          await client
            .patch(page._id)
            .set({
              seo: updates
            })
            .commit()
          
          console.log(`  ✅ Fixed!\n`)
          fixedCount++
        } else {
          console.log(`  ✅ SEO fields already correct\n`)
        }
      }
    }
    
    // Also check wedding documents
    console.log('Checking wedding documents...')
    const weddings = await client.fetch('*[_type == "wedding" && defined(seo)]')
    
    for (const wedding of weddings) {
      if (wedding.seo) {
        let needsUpdate = false
        let updates = { ...wedding.seo }
        
        if ('title' in wedding.seo) {
          console.log(`Wedding: ${wedding.title}`)
          console.log(`  ⚠️  Found 'title' field, renaming to 'metaTitle'`)
          updates.metaTitle = wedding.seo.title
          delete updates.title
          needsUpdate = true
        }
        
        if ('description' in wedding.seo) {
          console.log(`  ⚠️  Found 'description' field, renaming to 'metaDescription'`)
          updates.metaDescription = wedding.seo.description
          delete updates.description
          needsUpdate = true
        }
        
        if (needsUpdate) {
          await client
            .patch(wedding._id)
            .set({
              seo: updates
            })
            .commit()
          
          console.log(`  ✅ Fixed!\n`)
          fixedCount++
        }
      }
    }
    
    // Also check weddingBlog documents  
    console.log('Checking weddingBlog documents...')
    const weddingBlogs = await client.fetch('*[_type == "weddingBlog" && defined(seo)]')
    
    for (const blog of weddingBlogs) {
      if (blog.seo) {
        let needsUpdate = false
        let updates = { ...blog.seo }
        
        if ('title' in blog.seo) {
          console.log(`Wedding Blog: ${blog.title}`)
          console.log(`  ⚠️  Found 'title' field, renaming to 'metaTitle'`)
          updates.metaTitle = blog.seo.title
          delete updates.title
          needsUpdate = true
        }
        
        if ('description' in blog.seo) {
          console.log(`  ⚠️  Found 'description' field, renaming to 'metaDescription'`)
          updates.metaDescription = blog.seo.description
          delete updates.description
          needsUpdate = true
        }
        
        if (needsUpdate) {
          await client
            .patch(blog._id)
            .set({
              seo: updates
            })
            .commit()
          
          console.log(`  ✅ Fixed!\n`)
          fixedCount++
        }
      }
    }
    
    console.log('\n' + '='.repeat(50))
    console.log('🎉 Summary:')
    console.log(`  - Fixed: ${fixedCount} documents`)
    console.log(`  - Renamed: title → metaTitle`)
    console.log(`  - Renamed: description → metaDescription`)
    console.log('='.repeat(50))
    
  } catch (error) {
    console.error('❌ Error fixing SEO fields:', error)
    throw error
  }
}

// Run the fix
fixSeoFields()
  .then(() => {
    console.log('\n✅ All SEO fields have been fixed!')
    console.log('🔗 Visit http://localhost:3333/structure/pages;homepage to verify')
    console.log('\nThe SEO section should now show:')
    console.log('  - Meta Title (not title)')
    console.log('  - Meta Description (not description)')
    console.log('  - Keywords (as array)')
    console.log('  - Open Graph Image')
    console.log('  - Hide from search engines')
  })
  .catch((error) => {
    console.error('💥 Fix failed:', error)
    process.exit(1)
  })