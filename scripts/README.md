# Migration Scripts Documentation

## Overview
This directory contains all scripts necessary for migrating the design system to use tokens as the single source of truth. These scripts work together to audit, migrate, and validate the transformation of design values from multiple sources to a unified token-based system.

## 📁 Script Files

### 1. **migration-tracker.js**
**Purpose**: Tracks progress through all migration phases and maintains state

**Functions:**
- `initTracker()` - Initializes a new migration session
- `updatePhase(phase, status, task)` - Updates phase status and logs tasks
- `addModifiedFile(filePath)` - Logs files modified during migration

**Usage:**
```bash
# Initialize tracking
node -e "require('./scripts/migration-tracker.js').initTracker()"

# Update phase status
node -e "require('./scripts/migration-tracker.js').updatePhase('audit', 'completed', 'Audit complete')"
```

**Output**: Creates `.migration-progress.json` in project root

---

### 2. **audit-design-values.js**
**Purpose**: Comprehensive scan of codebase to identify all hardcoded design values

**What it finds:**
- Hardcoded hex colors (#FFFFFF, #9D6B7B, etc.)
- Hardcoded spacing (px, rem, em values)
- CSS variable usage (var(--variable-name))
- Token imports in files
- Inline style usage in JSX/TSX

**Usage:**
```bash
node scripts/audit-design-values.js
```

**Output**: 
- Console summary with color-coded results
- `audit-report.json` with detailed findings

**Report Structure:**
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
  "details": { ... }
}
```

---

### 3. **remove-duplicate-variables.js**
**Purpose**: Removes duplicate :root CSS variables and adds token imports

**Actions:**
1. Removes :root block from CohesiveDesign.css
2. Adds import for generated/tokens.css
3. Creates backup of original file
4. Updates migration tracker

**Usage:**
```bash
node scripts/remove-duplicate-variables.js
```

**Output:**
- Modified `src/CohesiveDesign.css`
- Backup at `src/CohesiveDesign.css.backup`

---

### 4. **update-css-variables.js**
**Purpose**: Updates old CSS variable names to new token-based names

**Variable Mappings:**
- Colors: `--dusty-rose` → `--color-base-dusty-rose`
- Typography: `--font-display` → `--font-family-display`
- Spacing: `--space-lg` → `--spacing-lg`
- Transitions: `--transition` → `--transition-preset-default`

**Usage:**
```bash
node scripts/update-css-variables.js
```

**Output:**
- Updates all CSS files with new variable names
- Console log of files modified and replacements made

---

### 5. **migrate-jsx-hardcoded.js**
**Purpose**: Replaces hardcoded values in JSX files with token references

**Replacements:**
- Colors: `"#9D6B7B"` → `tokens.color.base["dusty-rose"]`
- Spacing: `"2rem"` → `tokens.spacing.xl`
- Font sizes: `"1.5rem"` → `tokens.font.size["2xl"]`

**Requirements:**
- Must run audit-design-values.js first (reads audit-report.json)

**Usage:**
```bash
node scripts/migrate-jsx-hardcoded.js
```

**Output:**
- Modified JSX files with token imports added
- Backup files created (*.backup)
- Summary of migrations performed

---

### 6. **validate-migration.js**
**Purpose**: Comprehensive validation of migration success

**Tests Performed:**
1. Verifies tokens.css is imported in CohesiveDesign.css
2. Confirms no duplicate :root variables exist
3. Checks for remaining hardcoded colors
4. Verifies token imports in modified files
5. Tests token build process

**Usage:**
```bash
node scripts/validate-migration.js
```

**Output:**
- Console report with passed/failed tests
- `validation-report.json` with detailed results
- Exit code 0 (success) or 1 (failure)

---

## 🔄 Migration Workflow

### Phase 1: Preparation
```bash
# 1. Create backup branch
git checkout -b token-migration-backup

# 2. Install dependencies
npm install --save-dev chalk glob

# 3. Initialize tracker
node -e "require('./scripts/migration-tracker.js').initTracker()"
```

### Phase 2: Audit
```bash
# Run comprehensive audit
node scripts/audit-design-values.js

# Review results
cat audit-report.json | jq '.summary'
```

### Phase 3: Cleanup
```bash
# Remove duplicate variables
node scripts/remove-duplicate-variables.js

# Update variable references
node scripts/update-css-variables.js

# Remove compatibility layer
mv src/tokens-compatibility.css src/tokens-compatibility.css.deprecated
```

### Phase 4: Migration
```bash
# Migrate hardcoded values
node scripts/migrate-jsx-hardcoded.js

# Update tracker
node -e "require('./scripts/migration-tracker.js').updatePhase('migration', 'completed')"
```

### Phase 5: Validation
```bash
# Run validation suite
node scripts/validate-migration.js

# Check results
cat validation-report.json
```

---

## 📊 Progress Tracking

The migration tracker creates `.migration-progress.json`:

```json
{
  "startTime": "2024-01-01T00:00:00Z",
  "phases": {
    "preparation": { "status": "completed", "tasks": [...] },
    "audit": { "status": "in-progress", "tasks": [...] },
    "cleanup": { "status": "pending", "tasks": [] },
    "migration": { "status": "pending", "tasks": [] },
    "validation": { "status": "pending", "tasks": [] }
  },
  "filesModified": ["src/CohesiveDesign.css", ...],
  "issuesFound": [],
  "rollbackPoints": []
}
```

---

## 🔙 Rollback Procedure

If migration needs to be reverted:

```bash
# Restore from backup branch
git checkout master
git reset --hard origin/master

# Restore individual file backups
for file in src/**/*.backup; do
  mv "$file" "${file%.backup}"
done

# Restore compatibility layer
mv src/tokens-compatibility.css.deprecated src/tokens-compatibility.css

# Clean up tracking files
rm -f .migration-progress.json audit-report.json validation-report.json
```

---

## 🛠️ Troubleshooting

### Common Issues

**Issue**: "Cannot find module 'chalk'"
```bash
npm install --save-dev chalk glob
```

**Issue**: Scripts fail with "audit-report.json not found"
```bash
# Run audit first
node scripts/audit-design-values.js
```

**Issue**: Token build fails
```bash
# Rebuild tokens
npm run tokens:build

# Check for JSON syntax errors
npx jsonlint tokens/*.json
```

---

## 📝 Notes

- All scripts include console logging with color-coded output
- Backup files are created before modifications
- Scripts integrate with migration tracker for state management
- Each script can be run independently for debugging
- Scripts are idempotent (safe to run multiple times)

---

## 🚀 Quick Start

For a complete migration in one go:

```bash
# Run all phases sequentially
node scripts/migration-tracker.js && \
node scripts/audit-design-values.js && \
node scripts/remove-duplicate-variables.js && \
node scripts/update-css-variables.js && \
node scripts/migrate-jsx-hardcoded.js && \
node scripts/validate-migration.js
```

---

**Last Updated**: Migration scripts v1.0.0