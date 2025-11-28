#!/usr/bin/env node
/**
 * Fix VenueDiscovery Unknown Fields
 * Maps old field names to new schema field names
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

async function fixVenueDiscovery() {
  console.log(chalk.blue.bold('\n🔧 Fixing VenueDiscovery Unknown Fields\n'))
  
  try {
    // Fetch homepage
    const homepage = await client.fetch(`*[_id == "homepage"][0]`)
    
    if (!homepage) {
      console.log(chalk.red('Homepage document not found'))
      return
    }
    
    if (!homepage.venueDiscovery) {
      console.log(chalk.yellow('No venueDiscovery block found in homepage'))
      return
    }
    
    const venueBlock = homepage.venueDiscovery
    console.log(chalk.cyan('Current venueDiscovery fields:'))
    console.log(JSON.stringify(venueBlock, null, 2))
    
    // Check if fields need mapping
    const needsMapping = venueBlock.subtitle || venueBlock.sectionClassName
    
    if (!needsMapping) {
      console.log(chalk.green('\n✅ No unknown fields found!'))
      return
    }
    
    // Prepare the fixed block
    const fixedBlock = {
      _type: 'venueDiscoveryBlock',
      title: venueBlock.title || 'Discover Our Spaces',
      description: venueBlock.description || 'Every corner tells a story, every space creates memories',
      // Map subtitle -> scriptAccent
      scriptAccent: venueBlock.subtitle || venueBlock.scriptAccent || 'Your Perfect Setting',
      // Map sectionClassName -> sectionStyle (extract the style part)
      sectionStyle: venueBlock.sectionClassName?.replace('section ', '') || venueBlock.sectionStyle || 'section-cream',
      venues: venueBlock.venues || []
    }
    
    console.log(chalk.cyan('\n\nFixed venueDiscovery fields:'))
    console.log(JSON.stringify(fixedBlock, null, 2))
    
    // Update the document
    console.log(chalk.yellow('\nUpdating homepage document...'))
    
    await client
      .patch('homepage')
      .set({ venueDiscovery: fixedBlock })
      .commit()
    
    console.log(chalk.green('\n✅ Successfully fixed venueDiscovery fields!'))
    
    // Verify the fix
    const updatedHomepage = await client.fetch(`*[_id == "homepage"][0].venueDiscovery`)
    console.log(chalk.cyan('\nVerified updated fields:'))
    console.log(JSON.stringify(updatedHomepage, null, 2))
    
  } catch (error) {
    console.error(chalk.red('Error:'), error.message)
    process.exit(1)
  }
}

fixVenueDiscovery().catch(err => {
  console.error(chalk.red('Fatal error:'), err)
  process.exit(1)
})