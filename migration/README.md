# Design Token Migration Guide

## 🎯 Single Source of Truth Implementation

This guide walks through migrating from multiple design value sources to a unified token-based system where `tokens/*.json` becomes the ONLY source of truth for all design values.

---

## 📊 Migration Overview

### Current State
- Multiple competing design value sources
- Hardcoded colors and spacing throughout JSX
- Duplicate CSS variables in different files
- Inconsistent naming conventions

### Target State
- `tokens/*.json` as single source of truth
- All values reference generated tokens
- Automated enforcement via ESLint
- Clear documentation and patterns

---

## 🚀 Migration Phases

Each phase is documented in a separate file for easier navigation:

### [Phase 1: Preparation & Validation](./PHASE-1-PREPARATION.md)
**Duration**: 30 minutes | **Risk**: Low
- Create backup branches
- Install dependencies
- Verify migration scripts
- Initialize tracking system

### [Phase 2: Comprehensive Audit](./PHASE-2-AUDIT.md)
**Duration**: 45 minutes | **Risk**: Low
- Scan codebase for hardcoded values
- Identify all design value sources
- Generate detailed audit report
- Assess migration scope

### [Phase 3: Clean Up Competing Sources](./PHASE-3-CLEANUP.md)
**Duration**: 1 hour | **Risk**: Medium
- Remove duplicate :root variables
- Update CSS variable references
- Deprecate compatibility layer
- Verify token imports working

### [Phase 4: Migrate Hardcoded Values](./PHASE-4-MIGRATION.md)
**Duration**: 2 hours | **Risk**: High
- Replace hardcoded colors with tokens
- Replace hardcoded spacing with tokens
- Add token imports to JSX files
- Create backup files

### [Phase 5: Validation & Testing](./PHASE-5-VALIDATION.md)
**Duration**: 1 hour | **Risk**: Low
- Run comprehensive validation suite
- Test production build
- Visual regression testing
- Performance verification

### [Phase 6: Optimization & Enforcement](./PHASE-6-OPTIMIZATION.md)
**Duration**: 30 minutes | **Risk**: Low
- Add ESLint rules
- Create developer documentation
- Setup validation scripts
- Commit and document changes

---

## 🔧 Quick Start

### For Autonomous Execution
Start with Phase 1 and follow each phase sequentially:
```bash
# Begin migration
cd /Users/ryanpederson/Dev/websites/rum-river-final
cat migration/PHASE-1-PREPARATION.md
# Follow instructions in each phase file
```

### For Quick Reference
See [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) for all commands in one place.

---

## 📁 File Structure

```
migration/
├── README.md                 # This file - overview and navigation
├── PHASE-1-PREPARATION.md    # Environment setup and validation
├── PHASE-2-AUDIT.md          # Codebase analysis
├── PHASE-3-CLEANUP.md        # Remove duplicate sources
├── PHASE-4-MIGRATION.md      # Replace hardcoded values
├── PHASE-5-VALIDATION.md     # Testing and verification
├── PHASE-6-OPTIMIZATION.md   # Enforcement and documentation
└── QUICK-REFERENCE.md        # All commands for quick execution

scripts/
├── migration-tracker.js      # Progress tracking
├── audit-design-values.js    # Codebase scanner
├── remove-duplicate-variables.js
├── update-css-variables.js
├── migrate-jsx-hardcoded.js
├── validate-migration.js
└── README.md                 # Script documentation
```

---

## ⚠️ Important Notes

### Pause Points
Each phase has a **🛑 PAUSE FOR REVIEW** checkpoint. Always stop and verify before proceeding.

### Backup Strategy
- Phase 1 creates a backup branch
- Each script creates `.backup` files
- Rollback procedures included in each phase

### Validation
- Run validation after each phase
- Don't skip checkpoints
- If any test fails, investigate before continuing

---

## 📊 Progress Tracking

The migration tracker maintains state in `.migration-progress.json`:
```bash
# Check current progress
cat .migration-progress.json | grep '"status"'

# View modified files
cat .migration-progress.json | grep '"filesModified"' -A 50
```

---

## 🆘 Getting Help

### If You Get Stuck
1. Check the troubleshooting section in the current phase
2. Review the script documentation in `/scripts/README.md`
3. Use rollback procedures if needed
4. Each phase is idempotent - safe to re-run

### Common Issues
- **Dependencies not found**: Run `npm install --save-dev chalk glob`
- **Scripts not found**: Ensure you're in project root
- **Build fails**: Check `npm run tokens:build` works first
- **Validation fails**: Review `validation-report.json` for details

---

## ✅ Success Criteria

The migration is complete when:
1. All phases show "completed" status
2. No hardcoded design values remain
3. All tests pass in validation suite
4. Production build succeeds
5. Visual appearance unchanged
6. ESLint rules active
7. Documentation complete

---

## 🔄 Rollback

If you need to abort the migration:
```bash
# Full rollback
git checkout master
git reset --hard origin/master
git checkout token-migration-backup -- .

# Remove artifacts
rm -rf .migration-progress.json audit-report.json validation-report.json
rm -rf migration/
find src -name "*.backup" -delete
```

---

## 📅 Timeline

**Total Duration**: ~5-6 hours

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Preparation | 30 min | 30 min |
| Audit | 45 min | 1h 15m |
| Cleanup | 1 hour | 2h 15m |
| Migration | 2 hours | 4h 15m |
| Validation | 1 hour | 5h 15m |
| Optimization | 30 min | 5h 45m |

---

**Ready to begin?** Start with [PHASE-1-PREPARATION.md](./PHASE-1-PREPARATION.md)