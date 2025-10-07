# Code Cleanup Report

**Date**: October 6, 2025
**Analyzed**: 50 JSX files, 4 CSS files
**Total CSS Lines**: 3,645 lines in CohesiveDesign.css

---

## 🗑️ Unused Components (Safe to Delete)

### 1. BlogCard.jsx
**Location**: `src/components/BlogCard.jsx`
**Status**: ❌ Not imported anywhere
**Used by**: Only ComponentLibrary (demo)
**Reason**: Blog functionality not implemented. Routes exist but render placeholder divs.

**CSS Impact**: `.blog-card`, `.blog-image`, `.blog-content`, `.blog-category`, `.blog-meta` (defined in CohesiveDesign.css and ComponentLibrary.jsx)

**Action**:
```bash
# Delete component
rm src/components/BlogCard.jsx

# Remove CSS from CohesiveDesign.css (search for .blog-)
```

---

### 2. Breadcrumbs.jsx
**Location**: `src/components/Breadcrumbs.jsx`
**Status**: ❌ Not imported anywhere
**Used by**: None
**Reason**: No pages use breadcrumb navigation

**CSS Impact**: `.breadcrumbs`, `.breadcrumb-separator` (defined in CohesiveDesign.css)

**Action**:
```bash
# Delete component
rm src/components/Breadcrumbs.jsx

# Remove CSS from CohesiveDesign.css (search for .breadcrumb)
```

---

### 3. RealWeddingPostPremier.jsx
**Location**: `src/pages/RealWeddingPostPremier.jsx`
**Status**: ❌ Not routed, not imported
**Used by**: None
**Reason**: Alternative/experimental wedding post layout. App.jsx imports it but never routes to it.

**Details**:
- Contains magazine-style story blocks
- Uses Masonry layout
- Hardcoded sample data
- RealWeddingPost.jsx is the active version

**Action**:
```bash
# Remove import from App.jsx
# Delete file
rm src/pages/RealWeddingPostPremier.jsx
```

---

### 4. SmartImageSimple.jsx
**Location**: `src/components/SmartImageSimple.jsx`
**Status**: ❌ Not imported anywhere
**Used by**: None
**Reason**: Simplified version of SmartImage, never adopted

**Action**:
```bash
rm src/components/SmartImageSimple.jsx
```

---

## 📦 Potentially Unused (Needs Review)

### 5. CohesiveDesign.jsx
**Location**: `src/CohesiveDesign.jsx`
**Status**: ⚠️ Only accessed via hash route `#cohesive`
**Used by**: App.jsx (hash-based conditional render)
**Purpose**: Design system showcase/demo page

**Question**: Is this still needed for design reference?

**Options**:
- Keep if used for design decisions/reference
- Delete if outdated
- Move to standalone demo routes

---

### 6. ComponentLibrary.jsx
**Location**: `src/ComponentLibrary.jsx`
**Status**: ⚠️ Only accessed via hash route `#components`
**Used by**: App.jsx (hash-based conditional render)
**Purpose**: Component showcase/testing page

**Contains demos for**:
- BlogCard (unused component)
- Various other components

**Question**: Still useful for development?

**Options**:
- Keep for component development/testing
- Delete if no longer needed
- Clean up unused component demos (BlogCard)

---

### 7. ComponentPage.jsx
**Location**: `src/pages/ComponentPage.jsx`
**Status**: ⚠️ Routed at `/component`
**Purpose**: Unknown - need to check contents

**Action**: Review to see if this duplicates ComponentLibrary or serves different purpose

---

## 🎭 Standalone Demo Pages

**Status**: ✅ All actively routed and functional
**Count**: 13 standalone demo pages
**Routes**: `/hero-demo`, `/venue-demo`, etc.

**Keep or Delete?**
- ✅ **Keep** if used for component development/demos
- ❌ **Delete** if production site doesn't need them

**Impact**: Would remove 13 files, reduce bundle size

---

## 📊 CSS Cleanup Opportunities

### Unused CSS Classes (from deleted components)

If components are deleted, remove these CSS blocks from `CohesiveDesign.css`:

```css
/* BlogCard styles - DELETE if BlogCard.jsx deleted */
.blog-card { }
.blog-image { }
.blog-content { }
.blog-category { }
.blog-meta { }

/* Breadcrumbs styles - DELETE if Breadcrumbs.jsx deleted */
.breadcrumbs { }
.breadcrumb-separator { }
.current { }
```

### Deprecated Variables
Already marked in code:
```css
/* Spacing Rhythm - DEPRECATED */
--rhythm-xs: 0.5rem;
--rhythm-sm: 1.5rem;
--rhythm-md: 3rem;
--rhythm-lg: 5rem;
--rhythm-xl: 8rem;
```

**Action**: Can be removed once design token migration complete (use `--spacing-*` instead)

---

## 📋 Cleanup Actions Summary

### Immediate - Safe to Delete (Low Risk)

```bash
# 1. Delete unused components
rm src/components/BlogCard.jsx
rm src/components/Breadcrumbs.jsx
rm src/components/SmartImageSimple.jsx
rm src/pages/RealWeddingPostPremier.jsx

# 2. Remove imports from App.jsx
# (Delete import RealWeddingPostPremier line)

# 3. Clean up CSS in CohesiveDesign.css
# - Search and delete .blog-* styles
# - Search and delete .breadcrumb* styles
```

**Est. Cleanup**: 4 files, ~200 lines of code

---

### Needs Decision - Review Required

**Questions to answer**:
1. Keep `CohesiveDesign.jsx` design demo page?
2. Keep `ComponentLibrary.jsx` for development?
3. Keep 13 standalone demo pages?
4. What is `ComponentPage.jsx` used for?

---

### Future - After Token Migration

```bash
# Remove deprecated rhythm variables from CohesiveDesign.css
--rhythm-xs through --rhythm-xl
```

---

## 💾 Impact Analysis

### File Count Reduction
- **Immediate**: -4 files (safe deletions)
- **Potential**: -16 files (if demos/libraries removed)

### CSS Reduction
- **Immediate**: ~100-150 lines (blog/breadcrumb styles)
- **Future**: ~100 lines (deprecated variables)

### Bundle Size Impact
- Minimal impact (most components are small)
- Standalone pages not loaded unless visited
- Main benefit: cleaner codebase, easier maintenance

---

## ✅ Recommended Action Plan

### Phase 1: Safe Cleanup (Do Now)
1. Delete 4 unused components
2. Remove their CSS
3. Remove RealWeddingPostPremier import from App.jsx
4. Test build: `npm run build`
5. Verify site works

### Phase 2: Review & Decide (This Week)
1. Review ComponentPage.jsx purpose
2. Decide on keeping demo pages
3. Decide on keeping ComponentLibrary/CohesiveDesign
4. Document decisions

### Phase 3: Future Cleanup (After Token Migration)
1. Remove deprecated rhythm variables
2. Clean up any duplicate token definitions
3. Optimize CSS once migration complete

---

## 🔍 How to Verify

Before deleting, search for usage:
```bash
# Check if component is imported anywhere
grep -r "import.*BlogCard" src/

# Check if CSS class is used
grep -r "\.blog-card" src/

# Check routes
grep -r "ComponentPage" src/App.jsx
```

---

**Recommendation**: Start with Phase 1 (safe deletions). They have zero impact and clean up obvious dead code.
