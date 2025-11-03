import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'vicw6cgb',
  dataset: process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
  token: process.env.SANITY_AUTH_TOKEN, // use --with-user-token or env
  apiVersion: '2024-07-01',
  useCdn: false,
})

// Define the allowed top-level keys per type you care about
const ALLOWED = {
  homePage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','venueDiscovery','featureBlocks','loveStories','experience','testimonials','scheduleTour']),
  eventsPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','eventTypes','scheduleTourForm']),
  propertyPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','venueDiscovery','venueTabs','scheduleTour']),
  galleryPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','categories','scheduleTourCta']),
  contactPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','virtualTours','contactInfo','contactForm']),
  vendorsPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','vendorCategories','contactCta']),
  locationPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','locationInfo','directions']),
  testimonialsPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','testimonialDisplay','ctaSection']),
  historyPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','timeline','storyContent']),
  thankYouPage: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','seo','hero','content','contactInfo']),
  // Keep old page type for now
  page: new Set(['_type','_id','_rev','_createdAt','_updatedAt','title','slug','seo','contentBlocks']),
}

async function auditOne(type, apply = false) {
  const docs = await client.fetch(`*[_type == "${type}"]{_id, ...}`)
  let totalUnsets = 0

  for (const doc of docs) {
    const keys = Object.keys(doc)
    const allowed = ALLOWED[type] || new Set()
    const unknown = keys.filter(k => !allowed.has(k))

    if (unknown.length) {
      console.log(`• ${doc._id}: unknown fields → ${unknown.join(', ')}`)
      if (apply) {
        try {
          await client.patch(doc._id).unset(unknown).commit()
          totalUnsets += unknown.length
        } catch (err) {
          console.log(`  ⚠ Could not unset fields from ${doc._id}: ${err.message}`)
        }
      }
    }
  }
  if (apply && totalUnsets > 0) {
    console.log(`✓ Removed ${totalUnsets} unknown fields from type "${type}"`)
  }
}

const apply = process.argv.includes('--apply')
const types = Object.keys(ALLOWED)

console.log(apply ? '→ Applying field cleanup...' : '→ Running audit (dry run)...')
console.log('')

;(async () => {
  for (const t of types) {
    const docs = await client.fetch(`*[_type == "${t}"]{_id}`)
    if (docs.length > 0) {
      console.log(`Checking ${t} (${docs.length} documents)...`)
      await auditOne(t, apply)
    }
  }
  console.log('')
  console.log(apply ? '✓ Cleanup complete!' : '✓ Audit complete! Run with --apply to remove unknown fields.')
})().catch(e => { console.error(e); process.exit(1) })