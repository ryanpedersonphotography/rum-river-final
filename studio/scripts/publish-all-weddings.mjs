import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function publishAllWeddings() {
  console.log('📝 Fetching all weddings...')

  // Get all weddings
  const weddings = await client.fetch('*[_type == "wedding"]{ _id, coupleNames, published }')

  console.log(`Found ${weddings.length} weddings`)

  // Update each wedding to set published: true
  for (const wedding of weddings) {
    if (wedding.published !== true) {
      console.log(`  ✅ Publishing: ${wedding.coupleNames || wedding._id}`)
      await client
        .patch(wedding._id)
        .set({ published: true })
        .commit()
    } else {
      console.log(`  ⏭️  Already published: ${wedding.coupleNames || wedding._id}`)
    }
  }

  console.log('\n✨ All weddings are now published!')
}

publishAllWeddings().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
