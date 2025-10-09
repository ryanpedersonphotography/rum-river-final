const fs = require('fs');
const path = require('path');
const { addModifiedFile, updatePhase } = require('./migration-tracker');

const COHESIVE_CSS = 'src/CohesiveDesign.css';

// Read the file
let content = fs.readFileSync(COHESIVE_CSS, 'utf8');
const originalContent = content;

// Remove :root block with CSS variables (keep imports and classes)
const rootBlockRegex = /:root\s*\{[^}]*\}/s;
content = content.replace(rootBlockRegex, '/* Root variables moved to tokens system */');

// Add import for generated tokens at the top (after font imports)
if (!content.includes('generated/tokens.css')) {
  const fontImports = content.match(/@import url\([^)]+\);/g) || [];
  const lastFontImport = fontImports[fontImports.length - 1];
  if (lastFontImport) {
    const insertPosition = content.indexOf(lastFontImport) + lastFontImport.length;
    content = content.slice(0, insertPosition) + 
              '\n\n/* Import generated design tokens */\n@import \'./generated/tokens.css\';\n' + 
              content.slice(insertPosition);
  }
}

// Save modified file
fs.writeFileSync(COHESIVE_CSS, content);
addModifiedFile(COHESIVE_CSS);

// Create backup
fs.writeFileSync(COHESIVE_CSS + '.backup', originalContent);

console.log('✅ Removed duplicate :root variables from CohesiveDesign.css');
console.log('📁 Backup saved to CohesiveDesign.css.backup');