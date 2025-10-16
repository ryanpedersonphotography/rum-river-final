import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'vicw6cgb',
  dataset: process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
  token: process.env.SANITY_AUTH_TOKEN, // provided by --with-user-token
  apiVersion: '2024-07-01',
  useCdn: false,
})

async function run() {
  console.log('→ Fetching legacy home page...')
  
  // First try the existing homepage with _id
  let oldHome = await client.fetch(`*[_id == "homepage"][0]`)
  
  if (!oldHome) {
    // If not found, try by slug
    oldHome = await client.fetch(`*[_type == "page" && slug.current == "home"][0]`)
  }
  
  if (!oldHome) {
    console.log('No legacy homepage found. Nothing to do.')
    return
  }

  console.log('Found legacy homepage:', oldHome._id, 'type:', oldHome._type)

  // naive mapping: pick blocks by type
  const pick = (type) => (oldHome.contentBlocks || []).find(b => b._type === type)

  const doc = {
    _id: 'homepage',        // singleton id matching what's configured
    _type: 'homePage',
    title: 'Homepage',
    seo: oldHome.seo || {},
    hero: pick('heroBlock') || null,
    venueDiscovery: pick('venueDiscoveryBlock') || null,
    featureBlocks: pick('featureBlocksBlock') || null,
    loveStories: pick('galleryBlock') || null,
    experience: pick('experienceBlock') || null,
    testimonials: pick('testimonialsBlock') || null,
    scheduleTour: pick('formBlock') || null,
  }

  // Clean up _key fields from standalone objects
  const cleanKeys = (obj) => {
    if (!obj) return obj
    const cleaned = {...obj}
    delete cleaned._key
    return cleaned
  }

  doc.hero = cleanKeys(doc.hero)
  doc.venueDiscovery = cleanKeys(doc.venueDiscovery)
  doc.featureBlocks = cleanKeys(doc.featureBlocks)
  doc.loveStories = cleanKeys(doc.loveStories)
  doc.experience = cleanKeys(doc.experience)
  doc.testimonials = cleanKeys(doc.testimonials)
  doc.scheduleTour = cleanKeys(doc.scheduleTour)

  console.log('→ Writing new homePage document...')
  await client
    .transaction()
    .createOrReplace(doc)
    .commit()

  console.log('✓ Migrated to homePage singleton')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})