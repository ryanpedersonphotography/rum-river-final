# PHASE 4: Migrate Hardcoded Values

**Duration**: 2 hours | **Risk Level**: High | **Status**: ⏳ Not Started

## Overview
This phase replaces all hardcoded design values in JSX/TSX files with token references, establishing tokens as the single source of truth.

## Prerequisites
- Phase 3 cleanup completed successfully
- `audit-report.json` exists with identified hardcoded values
- Token utilities available at `src/utils/tokens.js`
- All CSS variables updated to new naming

---

## Step 4.1: Review Token Utilities

### Available Helpers
The `src/utils/tokens.js` file provides:

```javascript
// Direct token access
import { colors, spacing, typography } from '../utils/tokens';

// Helper functions
import { getColor, getSpacing, componentStyles } from '../utils/tokens';

// Pre-built styles
const cardStyle = componentStyles.card;
const buttonStyle = componentStyles.button.primary;
```

### Quick Reference
| Token Type | Access Path | Example |
|------------|-------------|----------|
| Colors | `tokens.color.base["dusty-rose"]` | `#9D6B7B` |
| Spacing | `tokens.spacing.xl` | `2rem` |
| Typography | `tokens.font.size["2xl"]` | `1.5rem` |
| Shadows | `tokens.shadow.md` | `0 4px 6px rgba(0,0,0,0.1)` |
| Transitions | `tokens.transition.preset.smooth` | `all 0.4s cubic-bezier(...)` |

---

## Step 4.2: Run JSX Migration Script

### What This Script Does
1. Reads `audit-report.json` to find files with hardcoded values
2. Adds token imports to each file
3. Replaces hardcoded colors with token references
4. Replaces hardcoded spacing with token references
5. Replaces hardcoded font sizes with token references
6. Creates `.backup` files before modifying

### Execute
```bash
# Run the migration script
node scripts/migrate-jsx-hardcoded.js
```

### Expected Output
```
🔄 Starting JSX hardcoded value migration...
📄 Reading audit report...
✅ Found 45 files with hardcoded values

📄 Processing: src/components/Hero.jsx
   ✅ Added token import
   ✅ Replaced '#9D6B7B' with tokens.color.base["dusty-rose"]
   ✅ Replaced '2rem' with tokens.spacing.xl
   ✅ Created backup file

📄 Processing: src/components/Card.jsx
   ✅ Added token import
   ✅ Replaced '1.5rem' with tokens.spacing.lg
   ✅ Replaced '#FBF8F4' with tokens.color.base["romantic-ivory"]

... (more files)

✅ Migration complete!
   📝 Files modified: 45
   🔄 Total replacements: 234
```

---

## Step 4.3: Update Migration Tracker

```bash
# Mark migration phase as completed
node -e "require('./scripts/migration-tracker.js').updatePhase('migration', 'completed', 'Migrated hardcoded values')"
```

---

## Step 4.4: Manual Migration Examples

For any files the script couldn't handle automatically:

### Before:
```jsx
// Hardcoded values
const styles = {
  container: {
    backgroundColor: '#9D6B7B',
    padding: '2rem',
    fontSize: '1.5rem'
  }
};
```

### After:
```jsx
// Token references
import tokens from '../generated/tokens.json';

const styles = {
  container: {
    backgroundColor: tokens.color.base['dusty-rose'],
    padding: tokens.spacing.xl,
    fontSize: tokens.font.size['2xl']
  }
};
```

---

## Step 4.5: Verify Modified Files

### Check Token Imports
```bash
# Count files with token imports
echo -n "Files with token imports: "
grep -r "from.*generated/tokens" src --include="*.jsx" | wc -l
```

### Check for Remaining Hardcoded Values
```bash
# Search for remaining hex colors (excluding backups)
echo "Checking for remaining hex colors..."
grep -r "#[A-F0-9]\{6\}" src --include="*.jsx" --exclude="*.backup" | head -5 || echo "✅ No hex colors found"

# Search for remaining rem values
echo "\nChecking for remaining rem values..."
grep -r "[0-9]\+\.\?[0-9]*rem" src --include="*.jsx" --exclude="*.backup" | head -5 || echo "✅ No rem values found"
```

---

## ✅ CHECKPOINT 4: Migration Complete

### Comprehensive Verification
```bash
echo "=== PHASE 4 VERIFICATION ==="

echo -n "1. Migration script completed: "
cat .migration-progress.json | grep -q '"migration".*"completed"' && echo "✅ Yes" || echo "❌ No"

echo -n "2. Files modified: "
cat .migration-progress.json | grep -o '"filesModified"' -A 50 | grep -o '"src/.*"' | wc -l

echo -n "3. Backup files created: "
find src -name "*.jsx.backup" 2>/dev/null | wc -l

echo -n "4. Token imports added: "
grep -r "generated/tokens" src --include="*.jsx" | wc -l

echo -n "5. Remaining hex colors: "
grep -r "#[A-F0-9]\{6\}" src --include="*.jsx" --exclude="*.backup" 2>/dev/null | wc -l | 
  awk '{if($1==0) print "✅ None"; else print "⚠️  "$1" found (review needed)"}'

echo -n "6. Build still works: "
npm run build > /dev/null 2>&1 && echo "✅ Yes" || echo "❌ No"
```

---

## 📊 Migration Statistics

### View Migration Summary
```bash
# Show migration stats
node -e "
const tracker = require('./.migration-progress.json');
const files = tracker.filesModified.filter(f => f.endsWith('.jsx')).length;
console.log('\n=== MIGRATION STATISTICS ===');
console.log('JSX files modified:', files);
console.log('Backup files created:', files);
console.log('Phase status:', tracker.phases.migration.status);
"
```

---

## 🎨 Visual Testing

### Start Development Server
```bash
npm run dev
```

### Critical Areas to Test
1. **Hero Section**: Colors and spacing correct?
2. **Navigation**: All styles applied properly?
3. **Cards/Components**: Padding and margins consistent?
4. **Buttons**: Hover states working?
5. **Typography**: All fonts displaying correctly?

### Browser Testing Checklist
- [ ] Homepage loads without errors
- [ ] Console shows no missing token errors
- [ ] All interactive elements work
- [ ] Responsive breakpoints still function
- [ ] No visual regression from original design

---

## 🛑 PAUSE FOR REVIEW

**Critical Review Before Phase 5:**

### Code Quality Check
1. Are all token imports at the top of files?
2. Are token paths consistent across files?
3. Do all modified files have backups?
4. Is the code still readable and maintainable?

### Rollback Decision Point
If major issues are found:
```bash
# Restore all JSX files from backups
for file in src/**/*.jsx.backup; do
  mv "$file" "${file%.backup}"
done

# Reset migration status
node -e "require('./scripts/migration-tracker.js').updatePhase('migration', 'failed', 'Rolled back due to issues')"
```

**To continue:** Proceed to [PHASE-5-VALIDATION.md](./PHASE-5-VALIDATION.md)

---

## Common Migration Patterns

### Color Migration
```javascript
// Before
style={{ color: '#9D6B7B' }}

// After
style={{ color: tokens.color.base['dusty-rose'] }}
```

### Spacing Migration
```javascript
// Before
style={{ padding: '2rem', margin: '1.5rem' }}

// After
style={{ 
  padding: tokens.spacing.xl,
  margin: tokens.spacing.lg 
}}
```

### Typography Migration
```javascript
// Before
style={{ 
  fontSize: '1.5rem',
  fontFamily: 'Playfair Display, serif'
}}

// After
style={{ 
  fontSize: tokens.font.size['2xl'],
  fontFamily: tokens.font.family.display
}}
```

---

## Troubleshooting

### Issue: Token import path incorrect
```bash
# Fix relative paths
find src -name "*.jsx" -exec sed -i '' 's|from ".*tokens.json"|from "../generated/tokens.json"|g' {} \;
```

### Issue: Script missed some files
```bash
# Find files without token imports but with style props
grep -r "style=" src --include="*.jsx" | grep -v "tokens\."
```

### Issue: Build fails after migration
```bash
# Check for syntax errors
npx eslint src --ext .jsx

# Look for undefined token references
grep -r "tokens\." src --include="*.jsx" | grep -v "import.*tokens"
```