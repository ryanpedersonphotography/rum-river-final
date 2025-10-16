import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})

async function testVendorData() {
  try {
    console.log('Testing vendor data retrieval from Sanity...\n')
    
    const query = `*[_type == "vendorsPage"][0]{
      title,
      hero,
      vendorCategories[] {
        title,
        iconName,
        vendors[] {
          name,
          phone,
          description,
          website
        }
      },
      contactCta,
      seo
    }`
    
    const data = await client.fetch(query)
    
    if (data) {
      console.log('✅ Successfully retrieved vendor data!')
      console.log('\nPage Title:', data.title)
      console.log('\nVendor Categories:')
      
      data.vendorCategories?.forEach(category => {
        console.log(`\n  ${category.title} (${category.iconName} icon):`)
        category.vendors?.forEach(vendor => {
          console.log(`    - ${vendor.name}: ${vendor.phone}`)
        })
      })
      
      console.log('\nTotal categories:', data.vendorCategories?.length || 0)
      const totalVendors = data.vendorCategories?.reduce((sum, cat) => sum + (cat.vendors?.length || 0), 0) || 0
      console.log('Total vendors:', totalVendors)
    } else {
      console.log('❌ No vendor data found')
    }
    
  } catch (error) {
    console.error('Error testing vendor data:', error)
  }
}

testVendorData()