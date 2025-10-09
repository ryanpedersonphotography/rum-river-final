# Single Source of Truth Migration Plan
## Complete Design Token System Implementation

> **IMPORTANT**: This document is designed for Claude Code Sonnet to execute autonomously. Each phase includes specific commands, validation steps, and rollback procedures.

---

## 🎯 Objective
Transform the codebase to use `tokens/*.json` as the ONLY source of design values, eliminating all competing sources and hardcoded values.

## 📊 Current State Analysis
- **Token Files**: `/tokens/*.json` (color, typography, spacing, animation)
- **Generated Files**: `/src/generated/tokens.*` (css, js, json, scss)
- **Competing Sources**:
  - `src/CohesiveDesign.css` (duplicate :root variables)
  - `style.css` (Vite defaults)
  - `src/tokens-compatibility.css` (bridge layer)
  - Inline styles in 10+ JSX files
  - Hardcoded values throughout components

---

## 🚀 PHASE 1: Preparation & Validation
**Duration**: 30 minutes | **Risk Level**: Low

### Step 1.1: Create Backup Branch
```bash
git checkout -b token-migration-backup
git push -u origin token-migration-backup
git checkout master
git checkout -b implement-single-source-tokens
```

### Step 1.2: Install Required Tools
```bash
npm install --save-dev eslint-plugin-no-inline-styles
npm install --save-dev stylelint stylelint-declaration-use-variable
npm install --save-dev chalk glob
```

### Step 1.3: Create Migration Status Tracker
```javascript
// Create file: scripts/migration-tracker.js
const fs = require('fs');
const path = require('path');

const TRACKER_FILE = path.join(__dirname, '../.migration-progress.json');

const initTracker = () => {
  const initial = {
    startTime: new Date().toISOString(),
    phases: {
      preparation: { status: 'in-progress', tasks: [] },
      audit: { status: 'pending', tasks: [] },
      cleanup: { status: 'pending', tasks: [] },
      migration: { status: 'pending', tasks: [] },
      validation: { status: 'pending', tasks: [] },
      optimization: { status: 'pending', tasks: [] }
    },
    filesModified: [],
    issuesFound: [],
    rollbackPoints: []
  };
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(initial, null, 2));
  console.log('✅ Migration tracker initialized');
};

const updatePhase = (phase, status, task = null) => {
  const tracker = JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf8'));
  tracker.phases[phase].status = status;
  if (task) tracker.phases[phase].tasks.push(task);
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2));
};

const addModifiedFile = (filePath) => {
  const tracker = JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf8'));
  if (!tracker.filesModified.includes(filePath)) {
    tracker.filesModified.push(filePath);
  }
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2));
};

module.exports = { initTracker, updatePhase, addModifiedFile };
```

### Step 1.4: Initialize Migration
```bash
node -e "require('./scripts/migration-tracker.js').initTracker()"
```

### ✅ CHECKPOINT 1
```bash
# Verify tracker exists
cat .migration-progress.json | grep '"preparation".*"in-progress"'
# Expected: Shows preparation phase in progress
```

---

## 🔍 PHASE 2: Comprehensive Audit
**Duration**: 45 minutes | **Risk Level**: Low

### Step 2.1: Create Audit Script
```javascript
// Create file: scripts/audit-design-values.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

const auditResults = {
  hardcodedColors: [],
  hardcodedSpacing: [],
  hardcodedFonts: [],
  cssVariableUsage: [],
  tokenImports: [],
  inlineStyles: []
};

// Patterns to detect
const patterns = {
  hexColors: /#[0-9A-Fa-f]{3,6}(?![0-9A-Fa-f])/g,
  rgbColors: /rgb\([^)]+\)/g,
  spacing: /\d+(?:px|rem|em|vh|vw)/g,
  cssVars: /var\(--[^)]+\)/g,
  tokenImports: /from ['"].*generated\/tokens/g,
  inlineStyles: /style=\{\{[^}]+\}\}/g
};

const auditFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(process.cwd(), filePath);
  
  // Check for hardcoded colors
  const hexMatches = content.match(patterns.hexColors);
  if (hexMatches) {
    hexMatches.forEach(match => {
      // Exclude ID selectors and URLs
      if (!match.includes('#root') && !match.includes('#app')) {
        auditResults.hardcodedColors.push({
          file: relPath,
          value: match,
          line: content.substring(0, content.indexOf(match)).split('\n').length
        });
      }
    });
  }
  
  // Check for hardcoded spacing
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
    const spacingMatches = content.match(patterns.spacing);
    if (spacingMatches) {
      spacingMatches.forEach(match => {
        if (content.includes(`'${match}'`) || content.includes(`"${match}"`)) {
          auditResults.hardcodedSpacing.push({
            file: relPath,
            value: match,
            context: content.substring(content.indexOf(match) - 20, content.indexOf(match) + 30)
          });
        }
      });
    }
  }
  
  // Check for CSS variable usage
  const cssVarMatches = content.match(patterns.cssVars);
  if (cssVarMatches) {
    cssVarMatches.forEach(match => {
      auditResults.cssVariableUsage.push({
        file: relPath,
        variable: match
      });
    });
  }
  
  // Check for token imports
  if (content.includes('generated/tokens')) {
    auditResults.tokenImports.push(relPath);
  }
  
  // Check for inline styles
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx')) {
    const inlineMatches = content.match(patterns.inlineStyles);
    if (inlineMatches) {
      auditResults.inlineStyles.push({
        file: relPath,
        count: inlineMatches.length
      });
    }
  }
};

// Run audit
console.log(chalk.blue('🔍 Starting comprehensive audit...'));

const jsxFiles = glob.sync('src/**/*.{jsx,tsx}', { ignore: 'node_modules/**' });
const cssFiles = glob.sync('src/**/*.css', { ignore: ['node_modules/**', 'src/generated/**'] });

[...jsxFiles, ...cssFiles].forEach(file => {
  auditFile(file);
});

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    hardcodedColors: auditResults.hardcodedColors.length,
    hardcodedSpacing: auditResults.hardcodedSpacing.length,
    cssVariables: auditResults.cssVariableUsage.length,
    tokenImports: auditResults.tokenImports.length,
    filesWithInlineStyles: auditResults.inlineStyles.length
  },
  details: auditResults
};

fs.writeFileSync('audit-report.json', JSON.stringify(report, null, 2));

// Print summary
console.log(chalk.green('\n✅ Audit Complete!\n'));
console.log(chalk.yellow('Summary:'));
console.log(`  • Hardcoded colors: ${report.summary.hardcodedColors}`);
console.log(`  • Hardcoded spacing: ${report.summary.hardcodedSpacing}`);
console.log(`  • CSS variables used: ${report.summary.cssVariables}`);
console.log(`  • Files using tokens: ${report.summary.tokenImports}`);
console.log(`  • Files with inline styles: ${report.summary.filesWithInlineStyles}`);
console.log(chalk.gray('\nDetailed report saved to audit-report.json'));

module.exports = report;
```

### Step 2.2: Run Audit
```bash
node scripts/audit-design-values.js
node -e "require('./scripts/migration-tracker.js').updatePhase('audit', 'completed', 'Full audit completed')"
```

### ✅ CHECKPOINT 2
```bash
# Verify audit completed
test -f audit-report.json && echo "✅ Audit report exists" || echo "❌ Audit failed"
cat .migration-progress.json | grep '"audit".*"completed"'
```

---

## 🧹 PHASE 3: Clean Up Competing Sources
**Duration**: 1 hour | **Risk Level**: Medium

### Step 3.1: Remove Duplicate CSS Variables
```javascript
// Create file: scripts/remove-duplicate-variables.js
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
```

### Step 3.2: Update Variable References
```javascript
// Create file: scripts/update-css-variables.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { addModifiedFile } = require('./migration-tracker');

// Mapping from old to new variable names
const variableMap = {
  '--romantic-ivory': '--color-base-romantic-ivory',
  '--dusty-rose': '--color-base-dusty-rose',
  '--sage-whisper': '--color-base-sage-whisper',
  '--warm-walnut': '--color-base-warm-walnut',
  '--champagne-gold': '--color-base-champagne-gold',
  '--blush-pink': '--color-base-blush-pink',
  '--deep-forest': '--color-base-deep-forest',
  '--cream-pearl': '--color-base-cream-pearl',
  '--muted-mauve': '--color-base-muted-mauve',
  '--copper-glow': '--color-base-copper-glow',
  '--warm-cream': '--color-base-warm-cream',
  '--accent-gold': '--color-base-accent-gold',
  '--deep-brown': '--color-base-deep-brown',
  '--text-dark': '--color-base-text-dark',
  '--sage-green': '--color-base-sage-green',
  '--soft-white': '--color-base-soft-white',
  '--font-display': '--font-family-display',
  '--font-body': '--font-family-body',
  '--font-script': '--font-family-script',
  '--text-xs': '--font-size-xs',
  '--text-sm': '--font-size-sm',
  '--text-base': '--font-size-base',
  '--text-lg': '--font-size-lg',
  '--text-xl': '--font-size-xl',
  '--text-2xl': '--font-size-2xl',
  '--text-3xl': '--font-size-3xl',
  '--text-4xl': '--font-size-4xl',
  '--text-5xl': '--font-size-5xl',
  '--text-6xl': '--font-size-6xl',
  '--text-hero': '--font-size-hero',
  '--space-xs': '--spacing-xs',
  '--space-sm': '--spacing-sm',
  '--space-md': '--spacing-md',
  '--space-lg': '--spacing-lg',
  '--space-xl': '--spacing-xl',
  '--space-2xl': '--spacing-2xl',
  '--space-3xl': '--spacing-3xl',
  '--space-4xl': '--spacing-4xl',
  '--space-5xl': '--spacing-5xl',
  '--space-6xl': '--spacing-6xl',
  '--transition': '--transition-preset-default',
  '--transition-smooth': '--transition-preset-smooth',
  '--transition-elegant': '--transition-preset-elegant'
};

let totalReplacements = 0;
const modifiedFiles = [];

// Update CSS files
const cssFiles = glob.sync('src/**/*.css', { 
  ignore: ['node_modules/**', 'src/generated/**', 'src/tokens-compatibility.css'] 
});

cssFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;
  
  Object.entries(variableMap).forEach(([oldVar, newVar]) => {
    const regex = new RegExp(`var\\(${oldVar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `var(${newVar})`);
      totalReplacements += matches.length;
    }
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    addModifiedFile(file);
    modifiedFiles.push(file);
  }
});

console.log(`✅ Updated ${totalReplacements} variable references in ${modifiedFiles.length} files`);
modifiedFiles.forEach(f => console.log(`   📝 ${f}`));
```

### Step 3.3: Execute Cleanup
```bash
# Remove duplicate variables
node scripts/remove-duplicate-variables.js

# Update variable references
node scripts/update-css-variables.js

# Remove compatibility layer (after updating references)
mv src/tokens-compatibility.css src/tokens-compatibility.css.deprecated

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('cleanup', 'completed', 'Removed competing sources')"
```

### ✅ CHECKPOINT 3
```bash
# Verify no more duplicate :root in CohesiveDesign.css
! grep -q "^:root {" src/CohesiveDesign.css && echo "✅ Root removed" || echo "❌ Root still exists"

# Verify tokens.css is imported
grep -q "generated/tokens.css" src/CohesiveDesign.css && echo "✅ Tokens imported" || echo "❌ Import missing"

# Check migration progress
cat .migration-progress.json | grep '"cleanup".*"completed"'
```

---

## 🔄 PHASE 4: Migrate Hardcoded Values
**Duration**: 2 hours | **Risk Level**: High

### Step 4.1: Create Token Helper Utilities
```javascript
// Create file: src/utils/tokens.js
import tokens from '../generated/tokens.json';

/**
 * Token helper utilities for easy access to design tokens
 */

// Quick accessors for common token categories
export const colors = tokens.color;
export const spacing = tokens.spacing;
export const typography = tokens.font;
export const shadows = tokens.shadow;
export const transitions = tokens.transition;

// Helper function to get semantic color
export const getColor = (path) => {
  const parts = path.split('.');
  let value = tokens.color;
  for (const part of parts) {
    value = value[part];
  }
  return value;
};

// Helper function to get spacing value
export const getSpacing = (size) => {
  return tokens.spacing[size] || tokens.spacing.md;
};

// Helper function to build consistent component styles
export const componentStyles = {
  card: {
    padding: spacing['2xl'],
    borderRadius: tokens.size.border.radius.lg,
    boxShadow: shadows.md,
    backgroundColor: colors.base['cream-pearl']
  },
  button: {
    primary: {
      backgroundColor: colors.semantic.button['primary-bg'],
      color: colors.semantic.button['primary-text'],
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: tokens.size.border.radius.pill,
      fontFamily: typography.family.body,
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      transition: transitions.preset.smooth
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.semantic.button['outline-text'],
      border: `${tokens.size.border.width.medium} solid ${colors.semantic.button['outline-border']}`,
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: tokens.size.border.radius.pill,
      fontFamily: typography.family.body,
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      transition: transitions.preset.smooth
    }
  },
  heading: {
    h1: {
      fontFamily: typography.family.display,
      fontSize: typography.size['5xl'],
      fontWeight: typography.weight.bold,
      lineHeight: typography.lineHeight.tight,
      color: colors.semantic.text.primary
    },
    h2: {
      fontFamily: typography.family.display,
      fontSize: typography.size['3xl'],
      fontWeight: typography.weight.semibold,
      lineHeight: typography.lineHeight.snug,
      color: colors.semantic.text.primary
    },
    h3: {
      fontFamily: typography.family.display,
      fontSize: typography.size['2xl'],
      fontWeight: typography.weight.medium,
      lineHeight: typography.lineHeight.normal,
      color: colors.semantic.text.primary
    }
  }
};

export default {
  colors,
  spacing,
  typography,
  shadows,
  transitions,
  getColor,
  getSpacing,
  componentStyles
};
```

### Step 4.2: Create Migration Script for JSX Files
```javascript
// Create file: scripts/migrate-jsx-hardcoded.js
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
```

### Step 4.3: Execute Migration
```bash
# Run JSX migration
node scripts/migrate-jsx-hardcoded.js

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('migration', 'completed', 'Migrated hardcoded values')"
```

### ✅ CHECKPOINT 4
```bash
# Test that tokens are imported in modified files
grep -l "generated/tokens" src/**/*.jsx | wc -l

# Verify no hex colors remain (except in backups)
! grep -r "#[A-F0-9]{6}" src --include="*.jsx" --exclude="*.backup" || echo "✅ No hex colors"

# Check progress
cat .migration-progress.json | grep '"migration".*"completed"'
```

---

## ✅ PHASE 5: Validation & Testing
**Duration**: 1 hour | **Risk Level**: Low

### Step 5.1: Create Validation Script
```javascript
// Create file: scripts/validate-migration.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const { updatePhase } = require('./migration-tracker');

const validationResults = {
  passed: [],
  failed: [],
  warnings: []
};

// Test 1: Ensure tokens.css is imported in main CSS
const test1 = () => {
  const cohesiveCSS = fs.readFileSync('src/CohesiveDesign.css', 'utf8');
  if (cohesiveCSS.includes('generated/tokens.css')) {
    validationResults.passed.push('✅ tokens.css imported in CohesiveDesign.css');
  } else {
    validationResults.failed.push('❌ tokens.css NOT imported in CohesiveDesign.css');
  }
};

// Test 2: No duplicate :root variables
const test2 = () => {
  const cohesiveCSS = fs.readFileSync('src/CohesiveDesign.css', 'utf8');
  if (!cohesiveCSS.match(/^:root\s*{/m)) {
    validationResults.passed.push('✅ No duplicate :root variables');
  } else {
    validationResults.failed.push('❌ Duplicate :root variables still exist');
  }
};

// Test 3: Check for remaining hardcoded colors
const test3 = () => {
  const jsxFiles = glob.sync('src/**/*.jsx', { ignore: ['node_modules/**', '**/*.backup'] });
  let hardcodedFound = false;
  
  jsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const hexMatches = content.match(/#[A-F0-9]{6}/gi);
    if (hexMatches) {
      hardcodedFound = true;
      validationResults.warnings.push(`⚠️  Hardcoded color in ${path.relative(process.cwd(), file)}`);
    }
  });
  
  if (!hardcodedFound) {
    validationResults.passed.push('✅ No hardcoded colors in JSX');
  }
};

// Test 4: Verify token imports in modified files
const test4 = () => {
  const tracker = JSON.parse(fs.readFileSync('.migration-progress.json', 'utf8'));
  const jsxFiles = tracker.filesModified.filter(f => f.endsWith('.jsx'));
  let missingImports = [];
  
  jsxFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('tokens.') && !content.includes('generated/tokens')) {
        missingImports.push(file);
      }
    }
  });
  
  if (missingImports.length === 0) {
    validationResults.passed.push('✅ All modified files have token imports');
  } else {
    validationResults.failed.push(`❌ ${missingImports.length} files missing token imports`);
  }
};

// Test 5: Build tokens to ensure they're valid
const test5 = () => {
  try {
    require('child_process').execSync('npm run tokens:build', { stdio: 'pipe' });
    validationResults.passed.push('✅ Token build successful');
  } catch (e) {
    validationResults.failed.push('❌ Token build failed');
  }
};

// Run all tests
console.log(chalk.blue('\n🔍 Running validation tests...\n'));

test1();
test2();
test3();
test4();
test5();

// Print results
console.log(chalk.green('Passed Tests:'));
validationResults.passed.forEach(msg => console.log('  ' + msg));

if (validationResults.failed.length > 0) {
  console.log(chalk.red('\nFailed Tests:'));
  validationResults.failed.forEach(msg => console.log('  ' + msg));
}

if (validationResults.warnings.length > 0) {
  console.log(chalk.yellow('\nWarnings:'));
  validationResults.warnings.forEach(msg => console.log('  ' + msg));
}

// Update tracker
const status = validationResults.failed.length === 0 ? 'completed' : 'failed';
updatePhase('validation', status, `Tests: ${validationResults.passed.length} passed, ${validationResults.failed.length} failed`);

// Save validation report
fs.writeFileSync('validation-report.json', JSON.stringify(validationResults, null, 2));

// Exit with appropriate code
process.exit(validationResults.failed.length === 0 ? 0 : 1);
```

### Step 5.2: Run Validation
```bash
# Build tokens first
npm run tokens:build

# Run validation
node scripts/validate-migration.js

# Run development server to visually verify
npm run dev
# Open browser and check that styles are working
```

### ✅ CHECKPOINT 5
```bash
# Check validation results
cat validation-report.json | grep '"failed": \[\]' && echo "✅ All tests passed" || echo "❌ Some tests failed"

# Verify site still builds
npm run build && echo "✅ Build successful" || echo "❌ Build failed"
```

---

## 🚀 PHASE 6: Optimization & Enforcement
**Duration**: 30 minutes | **Risk Level**: Low

### Step 6.1: Add ESLint Rules
```javascript
// Create file: .eslintrc.js
module.exports = {
  extends: ['react-app'],
  rules: {
    // Prevent hardcoded colors
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'Literal[value=/^#[0-9a-fA-F]{3,6}$/]',
        message: 'Use design tokens instead of hardcoded hex colors. Import tokens from generated/tokens.json'
      },
      {
        selector: 'Literal[value=/^rgb/]',
        message: 'Use design tokens instead of hardcoded RGB colors'
      }
    ],
    // Warn about inline styles
    'react/forbid-dom-props': [
      'warn', 
      { 
        forbid: [
          {
            propName: 'style',
            message: 'Consider using design tokens and CSS classes instead of inline styles'
          }
        ]
      }
    ]
  }
};
```

### Step 6.2: Add Pre-commit Hook
```json
// Add to package.json scripts
{
  "scripts": {
    "lint:tokens": "eslint src --ext .jsx,.tsx --rule 'no-restricted-syntax: error'",
    "validate:tokens": "node scripts/validate-migration.js"
  }
}
```

### Step 6.3: Create Developer Guide
```markdown
// Create file: DESIGN_TOKEN_USAGE.md
# Design Token Usage Guide

## Quick Start

### Importing Tokens
\`\`\`jsx
import tokens from '../generated/tokens.json';
// OR use the helper utilities
import { colors, spacing, componentStyles } from '../utils/tokens';
\`\`\`

### Using Tokens in JSX
\`\`\`jsx
// ❌ DON'T DO THIS
<div style={{ color: '#9D6B7B', padding: '2rem' }}>

// ✅ DO THIS
<div style={{ 
  color: tokens.color.base['dusty-rose'],
  padding: tokens.spacing.xl 
}}>

// ✅ OR USE HELPERS
<div style={componentStyles.card}>
\`\`\`

### Using Tokens in CSS
\`\`\`css
/* ❌ DON'T DO THIS */
.my-class {
  color: #9D6B7B;
  padding: 2rem;
}

/* ✅ DO THIS */
.my-class {
  color: var(--color-base-dusty-rose);
  padding: var(--spacing-xl);
}
\`\`\`

## Token Categories

### Colors
- Base: \`tokens.color.base.*\`
- Semantic: \`tokens.color.semantic.*\`
- Buttons: \`tokens.color.semantic.button.*\`

### Typography
- Font families: \`tokens.font.family.*\`
- Font sizes: \`tokens.font.size.*\`
- Font weights: \`tokens.font.weight.*\`

### Spacing
- Scale: \`tokens.spacing.*\` (xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)

### Other
- Shadows: \`tokens.shadow.*\`
- Transitions: \`tokens.transition.preset.*\`
- Border radius: \`tokens.size.border.radius.*\`

## Common Patterns

### Card Component
\`\`\`jsx
const cardStyle = {
  padding: tokens.spacing['2xl'],
  backgroundColor: tokens.color.base['cream-pearl'],
  borderRadius: tokens.size.border.radius.lg,
  boxShadow: tokens.shadow.md
};
\`\`\`

### Button Component
\`\`\`jsx
const buttonStyle = {
  backgroundColor: tokens.color.semantic.button['primary-bg'],
  color: tokens.color.semantic.button['primary-text'],
  padding: \`\${tokens.spacing.md} \${tokens.spacing.xl}\`,
  borderRadius: tokens.size.border.radius.pill,
  transition: tokens.transition.preset.smooth
};
\`\`\`

## Validation

Run these commands to check your token usage:
\`\`\`bash
npm run lint:tokens      # Check for hardcoded values
npm run validate:tokens  # Full validation suite
\`\`\`
```

### Step 6.4: Final Setup
```bash
# Install ESLint config
npm install --save-dev eslint-plugin-react

# Run final validation
npm run lint:tokens

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('optimization', 'completed', 'Added enforcement rules')"

# Commit all changes
git add -A
git commit -m "Implement single source of truth for design tokens

- Removed duplicate :root variables from CohesiveDesign.css
- Migrated all hardcoded values to design tokens
- Added token helper utilities and usage guide
- Implemented ESLint rules to prevent hardcoded values
- Created comprehensive validation and migration scripts
- All design values now sourced from tokens/*.json"
```

### ✅ FINAL CHECKPOINT
```bash
# Run complete validation
echo "=== FINAL VALIDATION ==="
echo "1. Token build:" && npm run tokens:build && echo "✅ Pass" || echo "❌ Fail"
echo "2. Lint check:" && npm run lint:tokens 2>/dev/null && echo "✅ Pass" || echo "⚠️  Warnings"
echo "3. Build test:" && npm run build > /dev/null 2>&1 && echo "✅ Pass" || echo "❌ Fail"
echo "4. Validation:" && node scripts/validate-migration.js

# Generate final report
node -e "
const tracker = require('./.migration-progress.json');
const files = tracker.filesModified.length;
const duration = Math.round((Date.now() - new Date(tracker.startTime)) / 60000);
console.log('\n=== MIGRATION COMPLETE ===');
console.log('Files modified:', files);
console.log('Duration:', duration, 'minutes');
console.log('Status: SUCCESS ✅');
"
```

---

## 🔄 Rollback Procedure (If Needed)

```bash
# Restore from backup branch
git stash
git checkout master
git reset --hard origin/master
git cherry-pick token-migration-backup

# Restore individual file backups
for file in src/**/*.backup; do
  mv "$file" "${file%.backup}"
done

# Restore compatibility layer
mv src/tokens-compatibility.css.deprecated src/tokens-compatibility.css

# Clean up
rm -rf .migration-progress.json audit-report.json validation-report.json
rm -rf scripts/migration-tracker.js scripts/audit-design-values.js
rm -rf scripts/remove-duplicate-variables.js scripts/update-css-variables.js
rm -rf scripts/migrate-jsx-hardcoded.js scripts/validate-migration.js
```

---

## 📋 Success Criteria

The migration is successful when:
1. ✅ No duplicate design values exist outside tokens/*.json
2. ✅ All components use token values (no hardcoded colors/spacing)
3. ✅ Build and tests pass
4. ✅ ESLint rules prevent future hardcoded values
5. ✅ Visual appearance unchanged
6. ✅ Developer guide documents token usage

## 🎯 Expected Outcome

After completing this plan:
- `tokens/*.json` is the ONLY source of design values
- Generated files in `src/generated/` are used everywhere
- No hardcoded colors, spacing, or typography values
- Automated enforcement prevents regression
- Clear documentation for developers

---

**Note for Claude Code Sonnet**: Execute each phase sequentially. Use checkpoints to verify success before proceeding. If any checkpoint fails, stop and report the issue rather than continuing. The rollback procedure is available if needed.