# Quick Reference - All Migration Commands

This file contains all commands for quick copy-paste execution. Follow phases sequentially.

---

## PHASE 1: Preparation
```bash
# Create backup and working branches
git checkout -b token-migration-backup
git push -u origin token-migration-backup
git checkout master
git checkout -b implement-single-source-tokens

# Install dependencies
npm install --save-dev chalk glob

# Initialize tracker
node -e "require('./scripts/migration-tracker.js').initTracker()"

# Verify
test -f .migration-progress.json && echo "✅ Ready for Phase 2"
```

**🛑 PAUSE** - Review [PHASE-1-PREPARATION.md](./PHASE-1-PREPARATION.md) if any issues

---

## PHASE 2: Audit
```bash
# Run audit
node scripts/audit-design-values.js

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('audit', 'completed', 'Full audit completed')"

# Review results
cat audit-report.json | grep -A 10 '"summary"'
```

**🛑 PAUSE** - Review audit results before continuing

---

## PHASE 3: Cleanup
```bash
# Remove duplicate variables
node scripts/remove-duplicate-variables.js

# Update variable references
node scripts/update-css-variables.js

# Deprecate compatibility layer
mv src/tokens-compatibility.css src/tokens-compatibility.css.deprecated

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('cleanup', 'completed', 'Removed competing sources')"

# Test build
npm run tokens:build
```

**🛑 PAUSE** - Verify site still builds and looks correct

---

## PHASE 4: Migration
```bash
# Migrate JSX files
node scripts/migrate-jsx-hardcoded.js

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('migration', 'completed', 'Migrated hardcoded values')"

# Check for remaining hardcoded values
grep -r "#[A-F0-9]\{6\}" src --include="*.jsx" --exclude="*.backup" || echo "✅ No hex colors found"
```

**🛑 PAUSE** - Test application thoroughly

---

## PHASE 5: Validation
```bash
# Build tokens
npm run tokens:build

# Run validation suite
node scripts/validate-migration.js

# Test production build
npm run build

# Start dev server for manual testing
npm run dev
```

**🛑 PAUSE** - Complete visual testing before final phase

---

## PHASE 6: Optimization
```bash
# Create ESLint config
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

# Add validation scripts to package.json
node -e "
const pkg = require('./package.json');
pkg.scripts['lint:tokens'] = 'eslint src --ext .jsx,.tsx --rule \"no-restricted-syntax: error\"';
pkg.scripts['validate:tokens'] = 'node scripts/validate-migration.js';
pkg.scripts['tokens:check'] = 'npm run tokens:build && npm run validate:tokens';
require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Create usage guide
cat > DESIGN_TOKEN_USAGE.md << 'EOF'
# Design Token Usage Guide

## Quick Start

### Import tokens
\`\`\`jsx
import tokens from '../generated/tokens.json';
\`\`\`

### Use in JSX
\`\`\`jsx
<div style={{ 
  color: tokens.color.base['dusty-rose'],
  padding: tokens.spacing.xl 
}}>
\`\`\`

### Use in CSS
\`\`\`css
.my-class {
  color: var(--color-base-dusty-rose);
  padding: var(--spacing-xl);
}
\`\`\`

## Validation
\`\`\`bash
npm run tokens:check
\`\`\`
EOF

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('optimization', 'completed', 'Added enforcement rules')"

# Commit all changes
git add -A
git commit -m "Implement single source of truth for design tokens

- Migrated all hardcoded values to tokens/*.json
- Removed duplicate CSS variables
- Added ESLint enforcement rules
- Created comprehensive documentation"
```

---

## Verification Commands

### Check Progress
```bash
cat .migration-progress.json | grep '"status"'
```

### Run All Validations
```bash
npm run tokens:build && npm run validate:tokens && npm run build
```

### Visual Testing
```bash
npm run dev
# Open http://localhost:5173
```

---

## Rollback Commands

### Full Rollback
```bash
git checkout master
git reset --hard origin/master
git checkout token-migration-backup -- .
rm -rf .migration-progress.json audit-report.json validation-report.json
find src -name "*.backup" -delete
```

### Restore Single File
```bash
mv src/components/Hero.jsx.backup src/components/Hero.jsx
```

---

## Helper Commands

### Find Hardcoded Colors
```bash
grep -r "#[A-F0-9]\{6\}" src --include="*.jsx" --exclude="*.backup"
```

### Find Hardcoded Spacing
```bash
grep -r "[0-9]\+rem" src --include="*.jsx" --exclude="*.backup"
```

### List Modified Files
```bash
cat .migration-progress.json | grep -o '"src/[^"]*'
```

### Count Token Usage
```bash
grep -r "tokens\." src --include="*.jsx" | wc -l
```

---

## Success Verification

### Final Check
```bash
echo "=== MIGRATION STATUS ==="
for phase in preparation audit cleanup migration validation optimization; do
  cat .migration-progress.json | grep -q "\"$phase\".*\"completed\"" && 
    echo "✅ $phase" || echo "❌ $phase"
done
```

All phases should show ✅ for successful migration.