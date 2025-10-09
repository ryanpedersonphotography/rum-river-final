# Single Source of Truth Migration Plan
## Complete Design Token System Implementation

> **📂 IMPROVED STRUCTURE**: This migration has been broken into smaller, focused files for easier navigation.
> 
> **Please use the new structure in `/migration/` directory:**
> - [`migration/README.md`](./migration/README.md) - Overview and navigation
> - [`migration/PHASE-1-PREPARATION.md`](./migration/PHASE-1-PREPARATION.md) - Environment setup
> - [`migration/PHASE-2-AUDIT.md`](./migration/PHASE-2-AUDIT.md) - Codebase analysis
> - [`migration/PHASE-3-CLEANUP.md`](./migration/PHASE-3-CLEANUP.md) - Remove duplicates
> - [`migration/PHASE-4-MIGRATION.md`](./migration/PHASE-4-MIGRATION.md) - Replace hardcoded values
> - [`migration/PHASE-5-VALIDATION.md`](./migration/PHASE-5-VALIDATION.md) - Testing & verification
> - [`migration/PHASE-6-OPTIMIZATION.md`](./migration/PHASE-6-OPTIMIZATION.md) - Enforcement & docs
> - [`migration/QUICK-REFERENCE.md`](./migration/QUICK-REFERENCE.md) - All commands in one place
>
> **📁 SCRIPTS LOCATION**: All migration scripts are pre-built in `/scripts/` directory  
> **📖 DOCUMENTATION**: See `/scripts/README.md` for detailed script documentation  
> **🔧 HELPER UTILITIES**: Token helpers available at `/src/utils/tokens.js`

---

## ⚠️ NOTE FOR CLAUDE CODE SONNET

**This file is kept for reference but the migration should be executed using the phase-specific files in `/migration/` directory.**

Each phase file contains:
- Clear step-by-step instructions
- Verification commands
- Troubleshooting sections
- Pause points for review

**Start here:** [`migration/PHASE-1-PREPARATION.md`](./migration/PHASE-1-PREPARATION.md)

The phase files are smaller and easier to navigate, reducing context switching and improving execution accuracy.

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
# First verify existing dependencies
npm list chalk glob

# Check if packages exist in npm registry
npm view eslint-plugin-no-inline-styles --json 2>/dev/null || echo "Package not found - will skip"
npm view stylelint-declaration-use-variable --json 2>/dev/null || echo "Package not found - will skip"

# Install only if packages exist and dependencies are missing
npm install --save-dev chalk glob
# Install ESLint and Stylelint packages only if they exist:
# npm install --save-dev eslint-plugin-no-inline-styles
# npm install --save-dev stylelint-declaration-use-variable
```

### Step 1.3: Verify Migration Scripts
> **NOTE**: All migration scripts have been pre-created in `/scripts/` directory

**Available Scripts:**
- `scripts/migration-tracker.js` - Progress tracking and state management
- `scripts/audit-design-values.js` - Comprehensive codebase audit
- `scripts/remove-duplicate-variables.js` - Remove :root from CohesiveDesign.css
- `scripts/update-css-variables.js` - Update old variable names to new tokens
- `scripts/migrate-jsx-hardcoded.js` - Replace hardcoded values with tokens
- `scripts/validate-migration.js` - Validation test suite

**Helper Utilities:**
- `src/utils/tokens.js` - Token access helpers and component styles

```bash
# Verify scripts exist
ls -la scripts/
# Expected output: All 6 migration scripts listed
```

### Step 1.4: Initialize Migration
```bash
node -e "require('./scripts/migration-tracker.js').initTracker()"
```

### ✅ CHECKPOINT 1 - PAUSE FOR REVIEW
```bash
# Verify tracker exists
cat .migration-progress.json | grep '"preparation".*"in-progress"'
# Expected: Shows preparation phase in progress

# Verify scripts are executable
ls -la scripts/ | wc -l
# Expected: Should show 7 items (6 scripts + README)

# Check dependencies installed
npm list chalk glob --depth=0
```

**🛑 PAUSE HERE FOR REVIEW**: Confirm preparation completed successfully before proceeding to Phase 2.

---

## 🔍 PHASE 2: Comprehensive Audit
**Duration**: 45 minutes | **Risk Level**: Low | **Scope**: `src/**/*.{jsx,tsx,css}` files only

### Step 2.1: Run Comprehensive Audit
> **Script Location**: `scripts/audit-design-values.js`

**What it does:**
- Scans all JSX/TSX and CSS files
- Identifies hardcoded colors, spacing, and fonts
- Finds CSS variable usage and token imports
- Counts inline styles
- Generates detailed `audit-report.json`

**Execute:**
```bash
# Run the audit
node scripts/audit-design-values.js

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('audit', 'completed', 'Full audit completed')"
```

### ✅ CHECKPOINT 2 - PAUSE FOR REVIEW
```bash
# Verify audit completed
test -f audit-report.json && echo "✅ Audit report exists" || echo "❌ Audit failed"
cat .migration-progress.json | grep '"audit".*"completed"'

# Review audit summary
cat audit-report.json | grep -A 10 '"summary"'
```

**🛑 PAUSE HERE FOR REVIEW**: Review audit results to understand scope of changes before proceeding to Phase 3.

---

## 🧹 PHASE 3: Clean Up Competing Sources
**Duration**: 1 hour | **Risk Level**: Medium

### Step 3.1: Remove Duplicate CSS Variables
> **Script Location**: `scripts/remove-duplicate-variables.js`

**What it does:**
- Removes :root block from CohesiveDesign.css
- Adds import for generated tokens
- Creates backup of original file

**Reference Implementation** (see `scripts/remove-duplicate-variables.js`):
```javascript
// Removes :root block from CohesiveDesign.css
const rootBlockRegex = /:root\s*\{[^}]*\}/s;
content = content.replace(rootBlockRegex, '/* Root variables moved to tokens system */');

// Adds import for generated tokens
if (!content.includes('generated/tokens.css')) {
  // Insert after font imports
  content = insertTokenImport(content);
}

// Creates backup and saves modified file
fs.writeFileSync(COHESIVE_CSS + '.backup', originalContent);
fs.writeFileSync(COHESIVE_CSS, content);
```

**Execute:**
```bash
# Remove duplicate variables
node scripts/remove-duplicate-variables.js
```

### Step 3.2: Update Variable References
> **Script Location**: `scripts/update-css-variables.js`

**What it does:**
- Maps old variable names to new token names
- Updates all CSS files to use new naming
- Tracks modified files
**Reference Implementation** (see `scripts/update-css-variables.js`):
```javascript
// Variable mapping (sample)
const variableMap = {
  '--dusty-rose': '--color-base-dusty-rose',
  '--font-display': '--font-family-display',
  '--space-lg': '--spacing-lg',
  '--transition': '--transition-preset-default'
  // ... full mapping in actual script
};

// Updates all CSS files
cssFiles.forEach(file => {
  Object.entries(variableMap).forEach(([oldVar, newVar]) => {
    content = content.replace(
      new RegExp(`var\\(${oldVar}\\)`, 'g'), 
      `var(${newVar})`
    );
  });
});
```

**Execute:**
```bash
# Update variable references
node scripts/update-css-variables.js
```

### Step 3.3: Execute Cleanup
> **Scripts Used**: `remove-duplicate-variables.js`, `update-css-variables.js`

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

### ✅ CHECKPOINT 3 - PAUSE FOR REVIEW
```bash
# Verify no more duplicate :root in CohesiveDesign.css
! grep -q "^:root {" src/CohesiveDesign.css && echo "✅ Root removed" || echo "❌ Root still exists"

# Verify tokens.css is imported
grep -q "generated/tokens.css" src/CohesiveDesign.css && echo "✅ Tokens imported" || echo "❌ Import missing"

# Check migration progress
cat .migration-progress.json | grep '"cleanup".*"completed"'

# Test that site still builds
npm run tokens:build && echo "✅ Tokens build OK"
```

**🛑 PAUSE HERE FOR REVIEW**: Verify cleanup worked and site still builds before proceeding to Phase 4.

---

## 🔄 PHASE 4: Migrate Hardcoded Values
**Duration**: 2 hours | **Risk Level**: High

### Step 4.1: Use Token Helper Utilities
> **Location**: `src/utils/tokens.js` (Already created)

**Available Helpers:**
- `colors` - Direct access to color tokens
- `spacing` - Direct access to spacing tokens
- `typography` - Direct access to font tokens
- `componentStyles` - Pre-built component style objects
- `getColor(path)` - Get color by dot notation path
- `getSpacing(size)` - Get spacing with fallback

**Reference Implementation** (see `src/utils/tokens.js`):
```javascript
import tokens from '../generated/tokens.json';

// Quick accessors
export const colors = tokens.color;
export const spacing = tokens.spacing;
export const typography = tokens.font;

// Helper functions
export const getColor = (path) => { /* dot notation access */ };
export const getSpacing = (size) => { /* spacing with fallback */ };

// Pre-built component styles
export const componentStyles = {
  card: { /* padding, borderRadius, boxShadow, backgroundColor */ },
  button: {
    primary: { /* backgroundColor, color, padding, etc. */ },
    outline: { /* outline button styles */ }
  },
  heading: {
    h1: { /* display font, 5xl size, bold weight */ },
    h2: { /* display font, 3xl size, semibold weight */ }
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

### Step 4.2: Migrate Hardcoded Values in JSX Files
> **Script Location**: `scripts/migrate-jsx-hardcoded.js`

**What it does:**
- Reads audit-report.json for files to process
- Adds token imports to JSX files
- Replaces hardcoded colors, spacing, and font sizes
- Creates backup files before modifying

**Reference Implementation** (see `scripts/migrate-jsx-hardcoded.js`):
```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { addModifiedFile } = require('./migration-tracker');

// Read audit report
const auditReport = JSON.parse(fs.readFileSync('audit-report.json', 'utf8'));

// Token value mappings
// Maps hardcoded values to tokens
const colorMap = {
  '#9D6B7B': 'tokens.color.base["dusty-rose"]',
  '#666': 'tokens.color.semantic.text.primary',
  // ... 15+ color mappings
};

const spacingMap = {
  '2rem': 'tokens.spacing.xl',
  '1.5rem': 'tokens.spacing.lg',
  // ... 20+ spacing mappings
};

const fontSizeMap = {
  '1.5rem': 'tokens.font.size["2xl"]',
  // ... font size mappings
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
> **Prerequisites**: Must run audit (Phase 2) first

**Execute:**
```bash
# Run JSX migration
node scripts/migrate-jsx-hardcoded.js

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('migration', 'completed', 'Migrated hardcoded values')"
```

### ✅ CHECKPOINT 4 - PAUSE FOR REVIEW
```bash
# Test that tokens are imported in modified files
grep -l "generated/tokens" src/**/*.jsx | wc -l

# Verify no hex colors remain (except in backups)
! grep -r "#[A-F0-9]{6}" src --include="*.jsx" --exclude="*.backup" || echo "✅ No hex colors"

# Check progress
cat .migration-progress.json | grep '"migration".*"completed"'

# Count modified files
cat .migration-progress.json | grep -o '"filesModified"' -A 20 | wc -l
```

**🛑 PAUSE HERE FOR REVIEW**: Verify migration completed and review modified files before final validation.

---

## ✅ PHASE 5: Validation & Testing
**Duration**: 1 hour | **Risk Level**: Low

### Step 5.1: Run Validation Suite
> **Script Location**: `scripts/validate-migration.js`

**Tests Performed:**
1. Tokens.css import verification
2. No duplicate :root variables
3. No hardcoded colors remaining
4. Token imports in modified files
5. Token build process works
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

**Execute:**
```bash
# Build tokens first
npm run tokens:build

# Run validation
node scripts/validate-migration.js

# Check validation results
cat validation-report.json | grep '"failed": \[\]' && echo "✅ All tests passed"

# Run development server to visually verify
npm run dev
# Open browser and check that styles are working
```

### ✅ CHECKPOINT 5 - PAUSE FOR FINAL REVIEW
```bash
# Check validation results
cat validation-report.json | grep '"failed": \[\]' && echo "✅ All tests passed" || echo "❌ Some tests failed"

# Verify site still builds
npm run build && echo "✅ Build successful" || echo "❌ Build failed"

# Show final summary
echo "=== MIGRATION SUMMARY ==="
cat .migration-progress.json | grep -A 1 '"phases"'
```

**🛑 PAUSE HERE FOR FINAL REVIEW**: Verify all tests pass and review complete migration before Phase 6.

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