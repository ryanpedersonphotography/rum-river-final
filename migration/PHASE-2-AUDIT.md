# PHASE 2: Comprehensive Audit

**Duration**: 45 minutes | **Risk Level**: Low | **Status**: ⏳ Not Started

## Overview
This phase performs a comprehensive scan of the codebase to identify all hardcoded design values that need to be migrated to the token system.

## Prerequisites
- Phase 1 completed successfully
- Migration tracker initialized (`.migration-progress.json` exists)
- Scripts verified in `/scripts/` directory

---

## Step 2.1: Run Comprehensive Audit

### What the Audit Finds
- **Hardcoded hex colors**: `#FFFFFF`, `#9D6B7B`, etc.
- **Hardcoded spacing**: `px`, `rem`, `em` values
- **CSS variable usage**: `var(--variable-name)`
- **Token imports**: Existing token usage in files
- **Inline styles**: Style attributes in JSX/TSX

### Scope
- **Included**: `src/**/*.{jsx,tsx,css}` files
- **Excluded**: `node_modules/`, `*.backup` files, generated files

### Execute Audit
```bash
# Run the comprehensive audit script
node scripts/audit-design-values.js
```

### Expected Output
```
🔍 Starting comprehensive design value audit...

Scanning for hardcoded values...
✅ Found 45 hardcoded colors
✅ Found 123 hardcoded spacing values
✅ Found 89 CSS variables
✅ Found 3 files with token imports
⚠️  Found 22 files with inline styles

📊 Audit Summary:
   - Hardcoded colors: 45
   - Hardcoded spacing: 123
   - CSS variables: 89
   - Token imports: 3
   - Files with inline styles: 22

Audit report saved to: audit-report.json
```

---

## Step 2.2: Update Migration Tracker
```bash
# Mark audit phase as completed
node -e "require('./scripts/migration-tracker.js').updatePhase('audit', 'completed', 'Full audit completed')"
```

---

## Step 2.3: Review Audit Results

### View Summary
```bash
# Display audit summary
cat audit-report.json | grep -A 10 '"summary"' | head -15
```

### Check Top Offenders
```bash
# Files with most hardcoded colors
echo "Files with most hardcoded colors:"
cat audit-report.json | grep -B1 '"hardcodedColors"' | grep '"file"' | head -5

# Files with most hardcoded spacing
echo "\nFiles with most hardcoded spacing:"
cat audit-report.json | grep -B1 '"hardcodedSpacing"' | grep '"file"' | head -5
```

### Analyze Scope
```bash
# Count total files that need migration
echo -n "Total files needing migration: "
cat audit-report.json | grep -o '"file":' | wc -l
```

---

## ✅ CHECKPOINT 2: Audit Complete

### Verification
```bash
echo "=== PHASE 2 VERIFICATION ==="

echo -n "1. Audit report exists: "
test -f audit-report.json && echo "✅ Yes" || echo "❌ No"

echo -n "2. Audit phase completed: "
cat .migration-progress.json | grep -q '"audit".*"completed"' && echo "✅ Yes" || echo "❌ No"

echo -n "3. Hardcoded colors found: "
cat audit-report.json | grep '"hardcodedColors":' | grep -o '[0-9]*'

echo -n "4. Hardcoded spacing found: "
cat audit-report.json | grep '"hardcodedSpacing":' | grep -o '[0-9]*'

echo -n "5. Files with inline styles: "
cat audit-report.json | grep '"filesWithInlineStyles":' | grep -o '[0-9]*'
```

---

## 🔎 Audit Report Structure

The `audit-report.json` file contains:

```json
{
  "timestamp": "2024-01-01T00:00:00Z",
  "summary": {
    "hardcodedColors": 45,
    "hardcodedSpacing": 123,
    "cssVariables": 89,
    "tokenImports": 3,
    "filesWithInlineStyles": 22
  },
  "details": {
    "hardcodedColors": [
      {
        "file": "src/components/Hero.jsx",
        "line": 45,
        "value": "#9D6B7B",
        "context": "backgroundColor: '#9D6B7B'"
      }
    ],
    "hardcodedSpacing": [
      {
        "file": "src/components/Card.jsx",
        "line": 23,
        "value": "2rem",
        "context": "padding: '2rem'"
      }
    ]
  }
}
```

---

## 🛑 PAUSE FOR REVIEW

**Before proceeding to Phase 3:**

### Review Questions
1. **Scale Assessment**: How many files need modification?
2. **Risk Areas**: Which components have the most hardcoded values?
3. **Priority Files**: Which files should be migrated first?
4. **Backup Check**: Is the backup branch up to date?

### Decision Points
- If hardcoded values > 500: Consider breaking migration into smaller batches
- If inline styles > 50 files: Plan for extended testing
- If critical components affected: Schedule migration during low-traffic period

**To continue:** Proceed to [PHASE-3-CLEANUP.md](./PHASE-3-CLEANUP.md)

---

## Troubleshooting

### Issue: Audit script fails
```bash
# Check for syntax errors
node -c scripts/audit-design-values.js

# Run with debug output
DEBUG=* node scripts/audit-design-values.js
```

### Issue: No files found
```bash
# Verify glob patterns
find src -name "*.jsx" -o -name "*.css" | head -5

# Check current directory
pwd
```

### Issue: Report not generated
```bash
# Check permissions
touch audit-report.json

# Check disk space
df -h .
```