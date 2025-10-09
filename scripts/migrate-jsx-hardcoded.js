const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { addModifiedFile } = require('./migration-tracker');

// Read audit report
const auditReport = JSON.parse(fs.readFileSync('audit-report.json', 'utf8'));

// Token value mappings
const colorMap = {
  '#FBF8F4': 'tokens.color.base["romantic-ivory"]',
  '#9D6B7B': 'tokens.color.base["dusty-rose"]',
  '#9CAA9E': 'tokens.color.base["sage-whisper"]',
  '#6B4E3D': 'tokens.color.base["warm-walnut"]',
  '#E4C896': 'tokens.color.base["champagne-gold"]',
  '#F4E4E1': 'tokens.color.base["blush-pink"]',
  '#3A4A3C': 'tokens.color.base["deep-forest"]',
  '#FFFCF8': 'tokens.color.base["cream-pearl"]',
  '#A08A85': 'tokens.color.base["muted-mauve"]',
  '#C97D60': 'tokens.color.base["copper-glow"]',
  '#666': 'tokens.color.semantic.text.primary',
  '#999': 'tokens.color.base["muted-mauve"]',
  '#f0f0f0': 'tokens.color.base["warm-cream"]',
  '#FFFFFF': 'tokens.color.base["soft-white"]',
  'white': 'tokens.color.base["soft-white"]'
};

const spacingMap = {
  '0.5rem': 'tokens.spacing.xs',
  '0.75rem': 'tokens.spacing.sm',
  '1rem': 'tokens.spacing.md',
  '1.5rem': 'tokens.spacing.lg',
  '2rem': 'tokens.spacing.xl',
  '2.5rem': 'tokens.spacing["2xl"]',
  '3rem': 'tokens.spacing["3xl"]',
  '4rem': 'tokens.spacing["4xl"]',
  '5rem': 'tokens.spacing["5xl"]',
  '8px': 'tokens.spacing.xs',
  '12px': 'tokens.spacing.sm',
  '16px': 'tokens.spacing.md',
  '24px': 'tokens.spacing.lg',
  '32px': 'tokens.spacing.xl',
  '40px': 'tokens.spacing["2xl"]',
  '48px': 'tokens.spacing["3xl"]',
  '64px': 'tokens.spacing["4xl"]',
  '80px': 'tokens.spacing["5xl"]',
  '100px': 'tokens.spacing["6xl"]',
  '120px': 'tokens.spacing["6xl"]'
};

const fontSizeMap = {
  '0.75rem': 'tokens.font.size.xs',
  '0.875rem': 'tokens.font.size.sm',
  '0.9rem': 'tokens.font.size.sm',
  '1rem': 'tokens.font.size.base',
  '1.125rem': 'tokens.font.size.lg',
  '1.25rem': 'tokens.font.size.xl',
  '1.5rem': 'tokens.font.size["2xl"]',
  '1.75rem': 'tokens.font.size["3xl"]',
  '2rem': 'tokens.font.size["4xl"]',
  '2.5rem': 'tokens.font.size["5xl"]',
  '3rem': 'tokens.font.size["6xl"]',
  '3.2em': 'tokens.font.size["6xl"]'
};

let totalMigrations = 0;

// Process each JSX file with hardcoded values
const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let modified = false;
  
  // Add token import if not present
  if (!content.includes('generated/tokens')) {
    const importRegex = /^import\s+.*$/m;
    const lastImport = content.match(importRegex);
    if (lastImport) {
      const insertPos = content.lastIndexOf(lastImport[0]) + lastImport[0].length;
      content = content.slice(0, insertPos) + 
                '\nimport tokens from \'../generated/tokens.json\';' + 
                content.slice(insertPos);
      modified = true;
    }
  }
  
  // Replace hardcoded colors in style objects
  Object.entries(colorMap).forEach(([hardcoded, tokenPath]) => {
    const regex = new RegExp(`(['"])${hardcoded.replace('#', '\\#')}\\1`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, tokenPath);
      totalMigrations++;
      modified = true;
    }
  });
  
  // Replace hardcoded spacing in style objects
  Object.entries(spacingMap).forEach(([hardcoded, tokenPath]) => {
    const regex = new RegExp(`(['"])${hardcoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, tokenPath);
      totalMigrations++;
      modified = true;
    }
  });
  
  // Replace hardcoded font sizes
  Object.entries(fontSizeMap).forEach(([hardcoded, tokenPath]) => {
    const regex = new RegExp(`fontSize:\\s*['"]${hardcoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `fontSize: ${tokenPath}`);
      totalMigrations++;
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    fs.writeFileSync(filePath + '.backup', originalContent);
    addModifiedFile(filePath);
    console.log(`✅ Migrated ${path.relative(process.cwd(), filePath)}`);
  }
  
  return modified;
};

// Process files identified in audit
const filesToProcess = new Set();

auditReport.details.hardcodedColors.forEach(item => {
  if (item.file.endsWith('.jsx') || item.file.endsWith('.tsx')) {
    filesToProcess.add(item.file);
  }
});

auditReport.details.hardcodedSpacing.forEach(item => {
  filesToProcess.add(item.file);
});

auditReport.details.inlineStyles.forEach(item => {
  filesToProcess.add(item.file);
});

let filesModified = 0;
filesToProcess.forEach(file => {
  if (processFile(file)) {
    filesModified++;
  }
});

console.log(`\n✅ Migration complete!`);
console.log(`   📝 Files modified: ${filesModified}`);
console.log(`   🔄 Total replacements: ${totalMigrations}`);