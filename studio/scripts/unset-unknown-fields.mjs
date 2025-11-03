import {createClient} from '@sanity/client'
const client=createClient({projectId:'vicw6cgb',dataset:'production',apiVersion:'2024-01-01',token:process.env.SANITY_AUTH_TOKEN})
const FIELDS=['sectionClassName','subtitle'] // add others if Studio flags them
async function run(){
  const q = `*[_type match "*Page" && (${FIELDS.map(f=>`defined(${f})`).join(' || ')})]{_id}`
  const docs = await client.fetch(q)
  if(!docs.length){ console.log('✅ No unknown fields'); return }
  const tx = client.transaction()
  for(const d of docs) for (const f of FIELDS) tx.patch(d._id, p => p.unset([f]))
  await tx.commit()
  console.log('✅ Removed unknown fields from', docs.length, 'docs')
}
run().catch(e=>{console.error(e);process.exit(1)})