#!/usr/bin/env node
/**
 * Fix all page preview configurations
 * Updates preview to use title field instead of hardcoded values
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagesDir = path.join(__dirname, '..', 'schemas', 'pages')

const pageConfigs = {
  'homePage.js': {
    icon: '🏠',
    subtitle: 'Main landing page'
  },
  'eventsPage.js': {
    icon: '🎉',
    subtitle: 'Weddings and special events'
  },
  'propertyPage.js': {
    icon: '🏛️',
    subtitle: 'Venue spaces and amenities'
  },
  'galleryPage.js': {
    icon: '📸',
    subtitle: 'Wedding photos and inspiration'
  },
  'contactPage.js': {
    icon: '📧',
    subtitle: 'Get in touch with us'
  },
  'vendorsPage.js': {
    icon: '🤝',
    subtitle: 'Preferred vendor partners'
  },
  'locationPage.js': {
    icon: '📍',
    subtitle: 'Directions and nearby hotels'
  },
  'testimonialsPage.js': {
    icon: '💬',
    subtitle: 'Reviews from happy couples'
  },
  'historyPage.js': {
    icon: '📜',
    subtitle: 'Our story and heritage'
  },
  'thankYouPage.js': {
    icon: '🙏',
    subtitle: 'Thank you confirmation'
  }
}

async function updatePageSchema(filename, config) {
  const filepath = path.join(pagesDir, filename)
  
  try {
    let content = await fs.readFile(filepath, 'utf8')
    
    // 1. Update title field to be visible but readonly
    content = content.replace(
      /hidden:\s*true/,
      'hidden: false,\n      readOnly: true'
    )
    
    // 2. Ensure validation is required
    if (!content.includes('validation: Rule => Rule.required()')) {
      content = content.replace(
        /(name:\s*'title'[\s\S]*?type:\s*'string',)/,
        '$1\n      validation: Rule => Rule.required(),'
      )
    }
    
    // 3. Update preview to use select and prepare properly
    const newPreview = `  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || '${filename.replace('.js', '').replace('Page', ' Page')}',
        subtitle: '${config.subtitle}',
        media: () => '${config.icon}'
      }
    }
  }`
    
    // Replace the entire preview section
    content = content.replace(
      /preview:\s*{[\s\S]*?^\s{2}}/m,
      newPreview + '\n'
    )
    
    await fs.writeFile(filepath, content)
    console.log(chalk.green(`✅ Updated ${filename}`))
    
  } catch (error) {
    console.log(chalk.yellow(`⚠️  Skipping ${filename}: ${error.message}`))
  }
}

async function main() {
  console.log(chalk.blue.bold('\n🔧 Fixing Page Preview Configurations\n'))
  
  for (const [filename, config] of Object.entries(pageConfigs)) {
    await updatePageSchema(filename, config)
  }
  
  console.log(chalk.green.bold('\n✨ All page previews updated!'))
  console.log(chalk.cyan('\nNext steps:'))
  console.log('1. Run: npm run build')
  console.log('2. Run: npm run deploy')
  console.log('3. Check Sanity Studio - pages should no longer show "Untitled"')
}

main().catch(err => {
  console.error(chalk.red('Error:'), err)
  process.exit(1)
})