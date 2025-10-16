#!/usr/bin/env node
/**
 * Fix Testimonials Unknown Fields
 * Removes stray fields and maps to correct schema
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { resolve } from 'path'
import chalk from 'chalk'

dotenv.config({ path: resolve(process.cwd(), '.env') })

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'vicw6cgb',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function fixTestimonialsBlock() {
  console.log(chalk.blue.bold('\n🔧 Fixing Testimonials Block Unknown Fields\n'))
  
  try {
    // Fetch homepage
    const homepage = await client.fetch(`*[_id == "homepage"][0]`)
    
    if (!homepage || !homepage.testimonials) {
      console.log(chalk.yellow('No testimonials block found'))
      return
    }
    
    const testimonials = homepage.testimonials
    console.log(chalk.cyan('Current testimonials fields:'))
    console.log(Object.keys(testimonials).join(', '))
    
    // First, let's create actual testimonial documents from inline data
    const inlineTestimonials = testimonials.inlineTestimonials || []
    const testimonialRefs = []
    
    if (inlineTestimonials.length > 0) {
      console.log(chalk.yellow('\nCreating testimonial documents from inline data...'))
      
      for (const inline of inlineTestimonials) {
        const testimonialDoc = {
          _type: 'testimonial',
          _id: `testimonial-${inline._key}`,
          author: inline.authorName || 'Anonymous',
          role: inline.authorDetail || 'Happy Couple',
          content: inline.quote || '',
          rating: 5,
          featured: true,
          weddingDate: inline.authorDetail?.match(/\d{4}/) ? 
            `${inline.authorDetail.match(/\d{4}/)}-01-01` : null
        }
        
        try {
          await client.createOrReplace(testimonialDoc)
          console.log(chalk.green(`  ✓ Created testimonial: ${testimonialDoc.author}`))
          
          // Add reference to array
          testimonialRefs.push({
            _type: 'reference',
            _ref: testimonialDoc._id,
            _key: inline._key
          })
        } catch (err) {
          console.log(chalk.yellow(`  ⚠ Testimonial may already exist: ${testimonialDoc._id}`))
          testimonialRefs.push({
            _type: 'reference',
            _ref: testimonialDoc._id,
            _key: inline._key
          })
        }
      }
    }
    
    // Build the corrected testimonials block
    const fixedTestimonials = {
      _type: 'testimonialsBlock',
      scriptAccent: testimonials.scriptAccent || 'Love Letters',
      title: testimonials.title || 'What Couples Say',
      // Map sectionClassName to sectionStyle
      sectionStyle: testimonials.sectionClassName?.includes('cream') ? 'section-cream' :
                    testimonials.sectionClassName?.includes('white') ? 'section-white' :
                    testimonials.sectionClassName?.includes('blush') ? 'section-blush' :
                    testimonials.sectionClassName?.includes('warm') ? 'section-warm' :
                    'section-cream',
      // Use the created references or existing ones
      testimonials: testimonialRefs.length > 0 ? testimonialRefs : testimonials.testimonials || [],
      maxTestimonials: 3,
      showStarRating: true,
      starCount: 5,
      layout: 'grid'
    }
    
    console.log(chalk.cyan('\nFixed testimonials structure:'))
    console.log(Object.keys(fixedTestimonials).join(', '))
    
    // Update the homepage
    console.log(chalk.yellow('\nUpdating homepage document...'))
    
    await client
      .patch('homepage')
      .set({ testimonials: fixedTestimonials })
      .commit()
    
    console.log(chalk.green('\n✅ Successfully fixed testimonials fields!'))
    
    // Verify the fix
    const updated = await client.fetch(`*[_id == "homepage"][0].testimonials`)
    console.log(chalk.cyan('\nVerified updated fields:'))
    console.log(Object.keys(updated).join(', '))
    
    // Check for any remaining unknown fields
    const unknownFields = ['inlineTestimonials', 'sectionClassName', 'testimonialsType']
    const remainingUnknown = unknownFields.filter(field => updated[field] !== undefined)
    
    if (remainingUnknown.length > 0) {
      console.log(chalk.red(`\n⚠ Still has unknown fields: ${remainingUnknown.join(', ')}`))
    } else {
      console.log(chalk.green('\n✨ All unknown fields removed!'))
    }
    
  } catch (error) {
    console.error(chalk.red('Error:'), error.message)
    process.exit(1)
  }
}

fixTestimonialsBlock().catch(err => {
  console.error(chalk.red('Fatal error:'), err)
  process.exit(1)
})