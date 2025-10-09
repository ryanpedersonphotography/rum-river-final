# PHASE 3: Clean Up Competing Sources

**Duration**: 1 hour | **Risk Level**: Medium | **Status**: ⏳ Not Started

## Overview
This phase removes duplicate design value sources and updates all CSS variable references to use the new token naming convention.

## Prerequisites
- Phase 2 audit completed successfully
- `audit-report.json` exists with findings
- Backup branch created in Phase 1

---

## Step 3.1: Remove Duplicate CSS Variables

### What This Does
- Removes the `:root` block from `CohesiveDesign.css`
- Adds import for `generated/tokens.css`
- Creates backup of original file
- Updates migration tracker

### Execute
```bash
# Create backup and remove duplicate variables
node scripts/remove-duplicate-variables.js
```

### Expected Output
```
🎯 Removing duplicate :root variables from CohesiveDesign.css...
✅ Created backup: src/CohesiveDesign.css.backup
✅ Removed :root block (35 lines)
✅ Added tokens.css import
✅ Updated migration tracker
```

### Verify
```bash
# Check that :root was removed
! grep -q "^:root {" src/CohesiveDesign.css && echo "✅ :root removed" || echo "❌ :root still exists"

# Check that tokens import was added
grep -q "generated/tokens.css" src/CohesiveDesign.css && echo "✅ Tokens imported" || echo "❌ Import missing"

# Verify backup exists
test -f src/CohesiveDesign.css.backup && echo "✅ Backup created" || echo "❌ No backup"
```

---

## Step 3.2: Update Variable References

### Variable Mapping Examples
| Old Variable | New Token Variable |
|--------------|-------------------|
| `--dusty-rose` | `--color-base-dusty-rose` |
| `--font-display` | `--font-family-display` |
| `--space-lg` | `--spacing-lg` |
| `--transition` | `--transition-preset-default` |

### Execute
```bash
# Update all CSS variable references
node scripts/update-css-variables.js
```

### Expected Output
```
🔄 Updating CSS variable references...

📄 Processing: src/CohesiveDesign.css
   ✅ Replaced 12 instances of --dusty-rose
   ✅ Replaced 8 instances of --font-display
   ✅ Replaced 15 instances of --space-lg

📄 Processing: src/components/Hero.css
   ✅ Replaced 3 instances of --romantic-ivory
   ✅ Replaced 2 instances of --transition

✅ Updated 8 files with 67 total replacements
```

### Verify
```bash
# Check for old variable names (should return nothing)
grep -r "var(--dusty-rose)" src --include="*.css" || echo "✅ No old color variables"
grep -r "var(--font-display)" src --include="*.css" || echo "✅ No old font variables"
grep -r "var(--space-)" src --include="*.css" || echo "✅ No old spacing variables"
```

---

## Step 3.3: Remove Compatibility Layer

### Execute
```bash
# Deprecate the compatibility layer
mv src/tokens-compatibility.css src/tokens-compatibility.css.deprecated
echo "✅ Compatibility layer deprecated"

# Update migration tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('cleanup', 'completed', 'Removed competing sources')"
```

---

## Step 3.4: Test Token Build

### Execute
```bash
# Rebuild tokens to ensure everything works
npm run tokens:build
```

### Expected Output
```
> tokens:build
> style-dictionary build --config tokens/config.json

✅ Tokens built successfully
✅ Generated: src/generated/tokens.css
✅ Generated: src/generated/tokens.json
✅ Generated: src/generated/tokens.js
✅ Generated: src/generated/tokens.scss
```

---

## ✅ CHECKPOINT 3: Cleanup Complete

### Comprehensive Verification
```bash
echo "=== PHASE 3 VERIFICATION ==="

echo -n "1. :root removed from CohesiveDesign.css: "
! grep -q "^:root {" src/CohesiveDesign.css && echo "✅ Yes" || echo "❌ No"

echo -n "2. Tokens imported in CohesiveDesign.css: "
grep -q "generated/tokens.css" src/CohesiveDesign.css && echo "✅ Yes" || echo "❌ No"

echo -n "3. Backups created: "
ls src/*.backup 2>/dev/null | wc -l | awk '{print "✅ "$1" backup files"}'

echo -n "4. Old variables remaining: "
grep -r "var(--dusty-rose\|--romantic-ivory\|--font-display)" src --include="*.css" 2>/dev/null | wc -l | 
  awk '{if($1==0) print "✅ None"; else print "❌ "$1" found"}'

echo -n "5. Compatibility layer deprecated: "
test -f src/tokens-compatibility.css.deprecated && echo "✅ Yes" || echo "❌ No"

echo -n "6. Token build successful: "
npm run tokens:build > /dev/null 2>&1 && echo "✅ Yes" || echo "❌ No"

echo -n "7. Cleanup phase marked complete: "
cat .migration-progress.json | grep -q '"cleanup".*"completed"' && echo "✅ Yes" || echo "❌ No"
```

---

## 🎨 Visual Testing

### Quick Visual Check
```bash
# Start dev server
npm run dev
```

### What to Check
1. **Colors**: All brand colors still display correctly
2. **Typography**: Fonts load and display properly
3. **Spacing**: Layout and padding appear normal
4. **Transitions**: Hover effects and animations work

### Browser Console Check
```javascript
// Run in browser console
// Check if CSS variables are loaded
getComputedStyle(document.documentElement).getPropertyValue('--color-base-dusty-rose')
// Should return: #9D6B7B or similar

getComputedStyle(document.documentElement).getPropertyValue('--spacing-lg')
// Should return: 1.5rem or similar
```

---

## 🛑 PAUSE FOR REVIEW

**Critical Review Points:**
1. ✅ Site still builds without errors
2. ✅ Visual appearance unchanged
3. ✅ No console errors in browser
4. ✅ All backups created successfully
5. ✅ Token system generating correctly

### Rollback Option
If issues are found, you can rollback:
```bash
# Restore original files
mv src/CohesiveDesign.css.backup src/CohesiveDesign.css
mv src/tokens-compatibility.css.deprecated src/tokens-compatibility.css

# Reset git changes
git checkout -- src/
```

**To continue:** Proceed to [PHASE-4-MIGRATION.md](./PHASE-4-MIGRATION.md)

---

## Troubleshooting

### Issue: Site breaks after removing :root
```bash
# Check if tokens.css is being loaded
curl -I http://localhost:5173/src/generated/tokens.css
# Should return 200 OK

# Verify import order in CohesiveDesign.css
head -20 src/CohesiveDesign.css
# tokens.css import should be near the top
```

### Issue: Old variables still found
```bash
# Find files with old variables
grep -r "var(--dusty-rose)" src --include="*.css" -l

# Update them manually or re-run script
node scripts/update-css-variables.js
```

### Issue: Token build fails
```bash
# Check token JSON syntax
npx jsonlint tokens/*.json

# Verify Style Dictionary config
cat tokens/config.json
```