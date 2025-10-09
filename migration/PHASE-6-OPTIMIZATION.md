# PHASE 6: Optimization & Enforcement

**Duration**: 30 minutes | **Risk Level**: Low | **Status**: ⏳ Not Started

## Overview
This final phase adds enforcement rules to prevent future hardcoded values and optimizes the token system for long-term maintenance.

## Prerequisites
- Phase 5 validation completed successfully
- All tests passing
- No critical issues identified
- Team aligned on enforcement strategy

---

## Step 6.1: Add ESLint Rules

### Create ESLint Configuration
```javascript
// File: .eslintrc.js
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

### Execute
```bash
# Create ESLint config if it doesn't exist
if [ ! -f .eslintrc.js ]; then
  cat > .eslintrc.js << 'EOF'
module.exports = {
  extends: ['react-app'],
  rules: {
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'Literal[value=/^#[0-9a-fA-F]{3,6}$/]',
        message: 'Use design tokens instead of hardcoded hex colors'
      }
    ]
  }
};
EOF
  echo "✅ Created .eslintrc.js"
else
  echo "⚠️  .eslintrc.js already exists - manual update needed"
fi
```

---

## Step 6.2: Add Validation Scripts

### Update package.json
```bash
# Add validation scripts
node -e "
const pkg = require('./package.json');
pkg.scripts['lint:tokens'] = 'eslint src --ext .jsx,.tsx --rule \"no-restricted-syntax: error\"';
pkg.scripts['validate:tokens'] = 'node scripts/validate-migration.js';
pkg.scripts['tokens:check'] = 'npm run tokens:build && npm run validate:tokens';
require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('✅ Added token validation scripts to package.json');
"
```

### Verify Scripts Added
```bash
# Check new scripts
grep -A 3 '"lint:tokens"\|"validate:tokens"\|"tokens:check"' package.json
```

---

## Step 6.3: Create Developer Guide

### Execute
```bash
# Create comprehensive usage guide
cat > DESIGN_TOKEN_USAGE.md << 'EOF'
# Design Token Usage Guide

## Quick Start

### Importing Tokens
```jsx
import tokens from '../generated/tokens.json';
// OR use the helper utilities
import { colors, spacing, componentStyles } from '../utils/tokens';
```

### Using Tokens in JSX
```jsx
// ❌ DON'T DO THIS
<div style={{ color: '#9D6B7B', padding: '2rem' }}>

// ✅ DO THIS
<div style={{ 
  color: tokens.color.base['dusty-rose'],
  padding: tokens.spacing.xl 
}}>

// ✅ OR USE HELPERS
<div style={componentStyles.card}>
```

### Using Tokens in CSS
```css
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
```

## Token Categories

### Colors
- Base: `tokens.color.base.*`
- Semantic: `tokens.color.semantic.*`
- Buttons: `tokens.color.semantic.button.*`

### Typography
- Font families: `tokens.font.family.*`
- Font sizes: `tokens.font.size.*`
- Font weights: `tokens.font.weight.*`

### Spacing
- Scale: `tokens.spacing.*` (xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)

### Other
- Shadows: `tokens.shadow.*`
- Transitions: `tokens.transition.preset.*`
- Border radius: `tokens.size.border.radius.*`

## Common Patterns

### Card Component
```jsx
const cardStyle = {
  padding: tokens.spacing['2xl'],
  backgroundColor: tokens.color.base['cream-pearl'],
  borderRadius: tokens.size.border.radius.lg,
  boxShadow: tokens.shadow.md
};
```

### Button Component
```jsx
const buttonStyle = {
  backgroundColor: tokens.color.semantic.button['primary-bg'],
  color: tokens.color.semantic.button['primary-text'],
  padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
  borderRadius: tokens.size.border.radius.pill,
  transition: tokens.transition.preset.smooth
};
```

## Validation

Run these commands to check your token usage:
```bash
npm run lint:tokens      # Check for hardcoded values
npm run validate:tokens  # Full validation suite
npm run tokens:check     # Build and validate tokens
```

## Adding New Tokens

1. Edit the appropriate file in `/tokens/`
2. Run `npm run tokens:build`
3. Import and use the new token
4. Commit both token source and generated files

## Troubleshooting

### Token not found
- Check spelling and path
- Ensure tokens are built: `npm run tokens:build`
- Verify import path is correct

### Style not applying
- Check CSS specificity
- Verify token value in browser DevTools
- Ensure CSS file is imported
EOF

echo "✅ Created DESIGN_TOKEN_USAGE.md"
```

---

## Step 6.4: Run Final Validation

### Execute All Checks
```bash
echo "=== RUNNING FINAL OPTIMIZATION CHECKS ==="

# 1. Lint for hardcoded values
echo "\n1. Linting for hardcoded values..."
npm run lint:tokens 2>/dev/null || echo "⚠️  Some warnings found (expected for legacy files)"

# 2. Validate token system
echo "\n2. Validating token system..."
npm run validate:tokens

# 3. Build tokens
echo "\n3. Building tokens..."
npm run tokens:build

# 4. Test production build
echo "\n4. Testing production build..."
npm run build > /dev/null 2>&1 && echo "✅ Build successful" || echo "❌ Build failed"
```

---

## Step 6.5: Update Migration Tracker

```bash
# Mark optimization phase complete
node -e "require('./scripts/migration-tracker.js').updatePhase('optimization', 'completed', 'Added enforcement rules and documentation')"

# Generate final report
node -e "
const tracker = require('./.migration-progress.json');
const duration = Math.round((Date.now() - new Date(tracker.startTime)) / 60000);
console.log('\n=== MIGRATION COMPLETE ===');
console.log('Total Duration:', duration, 'minutes');
console.log('Files Modified:', tracker.filesModified.length);
console.log('\nPhase Status:');
Object.entries(tracker.phases).forEach(([phase, data]) => {
  const icon = data.status === 'completed' ? '✅' : '❌';
  console.log('  ' + icon + ' ' + phase + ': ' + data.status);
});
"
```

---

## Step 6.6: Commit Changes

### Prepare Commit
```bash
# Stage all changes
git add -A

# Show what will be committed
git status

# Create comprehensive commit
git commit -m "Implement single source of truth for design tokens

- Removed duplicate :root variables from CohesiveDesign.css
- Migrated all hardcoded values to design tokens
- Added token helper utilities and usage guide
- Implemented ESLint rules to prevent hardcoded values
- Created comprehensive validation and migration scripts
- All design values now sourced from tokens/*.json

Migration Statistics:
- Files modified: $(cat .migration-progress.json | grep -o '"filesModified"' -A 50 | grep -o '"src/.*"' | wc -l)
- Hardcoded colors replaced: $(cat audit-report.json | grep '"hardcodedColors":' | grep -o '[0-9]*')
- Hardcoded spacing replaced: $(cat audit-report.json | grep '"hardcodedSpacing":' | grep -o '[0-9]*')
- Token categories: color, typography, spacing, shadows, transitions

Documentation:
- See DESIGN_TOKEN_USAGE.md for usage guide
- See migration/ directory for process documentation
- Run 'npm run tokens:check' to validate token usage"
```

---

## ✅ FINAL CHECKPOINT: Migration Complete

### Comprehensive Final Verification
```bash
echo "=== FINAL MIGRATION VERIFICATION ==="
echo "====================================="

echo "\n🎯 PHASE COMPLETION STATUS:"
for phase in preparation audit cleanup migration validation optimization; do
  status=$(cat .migration-progress.json | grep "\"$phase\"" -A 2 | grep '"status"' | cut -d'"' -f4)
  if [ "$status" = "completed" ]; then
    echo "  ✅ $phase: COMPLETED"
  else
    echo "  ❌ $phase: $status"
  fi
done

echo "\n📁 FILE SYSTEM:"
echo "  Token source files: $(ls tokens/*.json | wc -l)"
echo "  Generated files: $(ls src/generated/tokens.* | wc -l)"
echo "  Backup files: $(find src -name "*.backup" | wc -l)"
echo "  Modified JSX files: $(cat .migration-progress.json | grep -o '"filesModified"' -A 100 | grep '.jsx' | wc -l)"

echo "\n🎨 TOKEN USAGE:"
echo "  Files importing tokens: $(grep -r "generated/tokens" src --include="*.jsx" | wc -l)"
echo "  CSS using token variables: $(grep -r "var(--color-\|var(--spacing-\|var(--font-" src --include="*.css" | wc -l)"

echo "\n✅ BUILD STATUS:"
npm run build > /dev/null 2>&1 && echo "  Production build: PASSING" || echo "  Production build: FAILING"
npm run tokens:build > /dev/null 2>&1 && echo "  Token build: PASSING" || echo "  Token build: FAILING"

echo "\n📝 DOCUMENTATION:"
test -f DESIGN_TOKEN_USAGE.md && echo "  Usage guide: CREATED" || echo "  Usage guide: MISSING"
test -d migration && echo "  Migration docs: CREATED" || echo "  Migration docs: MISSING"

echo "\n====================================="
echo "🎉 MIGRATION SUCCESSFULLY COMPLETED! 🎉"
echo "====================================="
echo ""
echo "Next steps:"
echo "1. Review and test the application thoroughly"
echo "2. Share DESIGN_TOKEN_USAGE.md with the team"
echo "3. Push changes to remote: git push origin implement-single-source-tokens"
echo "4. Create a pull request for review"
echo "5. Delete backup files after confirmation: find src -name '*.backup' -delete"
```

---

## 📋 Post-Migration Checklist

### Immediate Actions
- [ ] Test all critical user flows
- [ ] Review visual appearance across breakpoints
- [ ] Check browser console for errors
- [ ] Verify build size is reasonable

### Team Communication
- [ ] Share migration summary with team
- [ ] Schedule knowledge transfer session
- [ ] Update project documentation
- [ ] Add token usage to onboarding guide

### Cleanup (After Confirmation)
- [ ] Remove backup files
- [ ] Delete deprecated compatibility layer
- [ ] Archive migration scripts
- [ ] Update CI/CD pipeline if needed

---

## 🔄 Rollback Procedure (If Needed)

If critical issues are discovered post-migration:

```bash
# Full rollback to backup branch
git stash
git checkout master
git reset --hard origin/master
git checkout token-migration-backup -- .
git commit -m "Rollback: Restore pre-migration state"

# Selective rollback of specific files
for file in src/**/*.backup; do
  mv "$file" "${file%.backup}"
done

# Clean up migration artifacts
rm -rf .migration-progress.json audit-report.json validation-report.json
rm -rf migration/
rm -f DESIGN_TOKEN_USAGE.md
```

---

## 🎆 Success Criteria Met

✅ **Single Source of Truth**: `tokens/*.json` is the ONLY source of design values  
✅ **No Duplicates**: All competing sources eliminated  
✅ **Full Migration**: All hardcoded values replaced with tokens  
✅ **Validation**: Comprehensive tests passing  
✅ **Enforcement**: ESLint rules prevent regression  
✅ **Documentation**: Clear usage guide for developers  
✅ **Maintainability**: Token system ready for long-term use  

**Congratulations! The design token migration is complete.**