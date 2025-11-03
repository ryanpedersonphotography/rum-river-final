import {createClient} from '@sanity/client'
const client = createClient({projectId:'vicw6cgb',dataset:'production',apiVersion:'2024-01-01',token:process.env.SANITY_AUTH_TOKEN})
const defaults = {
  homePage:'Homepage', contactPage:'Contact', eventsPage:'Events',
  faqPage:'Frequently Asked Questions', galleryPage:'Photo Gallery',
  historyPage:'Our History', locationPage:'Location', propertyPage:'The Property',
  privacyPage:'Privacy Policy', termsPage:'Terms of Service', testimonialsPage:'Testimonials'
}
async function run(){
  const types = Object.keys(defaults)
  const docs = await client.fetch('*[_type in $types && (!defined(title) || title=="")]{_id,_type}',{types})
  if(!docs.length){ console.log('✅ Titles OK'); return }
  const tx = client.transaction()
  for (const d of docs) tx.patch(d._id, p => p.set({title: defaults[d._type]}))
  await tx.commit()
  console.log('✅ Fixed', docs.length, 'titles')
}
run().catch(e=>{console.error(e);process.exit(1)})