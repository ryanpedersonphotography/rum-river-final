# PHASE 1: Preparation & Validation

**Duration**: 30 minutes | **Risk Level**: Low | **Status**: ⏳ Not Started

## Overview
This phase prepares the environment for the token migration by creating backup branches, installing dependencies, and verifying all migration scripts are in place.

## Prerequisites
- Git repository with uncommitted changes saved or stashed
- Node.js and npm installed
- Write access to the repository

---

## Step 1.1: Create Backup Branch
```bash
# Create a backup of current state
git checkout -b token-migration-backup
git push -u origin token-migration-backup

# Return to master and create working branch
git checkout master
git checkout -b implement-single-source-tokens
```

### Verification
```bash
git branch --show-current
# Expected: implement-single-source-tokens
```

---

## Step 1.2: Install Required Tools
```bash
# Check existing dependencies
npm list chalk glob

# Install if missing (common dependencies for scripts)
npm install --save-dev chalk glob

# Optional: Check if ESLint plugins exist (may not be available)
npm view eslint-plugin-no-inline-styles --json 2>/dev/null || echo "Package not found - will skip"
npm view stylelint-declaration-use-variable --json 2>/dev/null || echo "Package not found - will skip"
```

### Verification
```bash
npm list chalk glob --depth=0
# Expected: Both packages listed
```

---

## Step 1.3: Verify Migration Scripts

All scripts should already exist in `/scripts/` directory:

| Script | Purpose |
|--------|----------|
| `migration-tracker.js` | Progress tracking and state management |
| `audit-design-values.js` | Comprehensive codebase audit |
| `remove-duplicate-variables.js` | Remove :root from CohesiveDesign.css |
| `update-css-variables.js` | Update old variable names to tokens |
| `migrate-jsx-hardcoded.js` | Replace hardcoded values with tokens |
| `validate-migration.js` | Validation test suite |

```bash
# Verify all scripts exist
ls -la scripts/*.js | wc -l
# Expected: 6 or more JavaScript files

# Check helper utilities
test -f src/utils/tokens.js && echo "✅ Token utilities exist" || echo "❌ Token utilities missing"
```

---

## Step 1.4: Initialize Migration Tracker
```bash
# Initialize the migration tracking system
node -e "require('./scripts/migration-tracker.js').initTracker()"

# Verify tracker was created
test -f .migration-progress.json && echo "✅ Tracker initialized" || echo "❌ Tracker failed"
```

---

## ✅ CHECKPOINT 1: Preparation Complete

### Final Verification
```bash
echo "=== PHASE 1 VERIFICATION ==="
echo -n "1. Current branch: "
git branch --show-current

echo -n "2. Dependencies installed: "
npm list chalk glob --depth=0 2>/dev/null | grep -c "chalk\|glob" | 
  awk '{if($1==2) print "✅ Yes"; else print "❌ No"}'

echo -n "3. Scripts ready: "
ls scripts/*.js 2>/dev/null | wc -l | 
  awk '{if($1>=6) print "✅ Yes (", $1, "scripts)"; else print "❌ No"}'

echo -n "4. Tracker initialized: "
test -f .migration-progress.json && echo "✅ Yes" || echo "❌ No"

echo -n "5. Token utilities ready: "
test -f src/utils/tokens.js && echo "✅ Yes" || echo "❌ No"
```

### Expected Output
```
=== PHASE 1 VERIFICATION ===
1. Current branch: implement-single-source-tokens
2. Dependencies installed: ✅ Yes
3. Scripts ready: ✅ Yes (6 scripts)
4. Tracker initialized: ✅ Yes
5. Token utilities ready: ✅ Yes
```

---

## 🛑 PAUSE FOR REVIEW

**Before proceeding to Phase 2:**
1. Confirm all verification checks passed
2. Review any warnings or errors
3. Ensure you have a clean working directory
4. Verify the backup branch was created

**To continue:** Proceed to [PHASE-2-AUDIT.md](./PHASE-2-AUDIT.md)

---

## Troubleshooting

### Issue: Dependencies fail to install
```bash
# Clear npm cache and retry
npm cache clean --force
npm install --save-dev chalk glob
```

### Issue: Scripts not found
```bash
# Verify you're in the project root
pwd
# Expected: /Users/ryanpederson/Dev/websites/rum-river-final

# Check if scripts directory exists
ls -la scripts/
```

### Issue: Tracker initialization fails
```bash
# Check Node.js version
node --version
# Should be v14 or higher

# Try running directly
node scripts/migration-tracker.js
```