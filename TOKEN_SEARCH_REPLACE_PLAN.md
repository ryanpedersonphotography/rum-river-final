# Token Search & Replace Migration Plan

## Overview

This document provides exact sed commands to migrate from old CSS variable names to the new hyphenated design token system.

## Migration Mapping Table

| Old Variable | New Token Variable | Usage |
|--------------|-------------------|-------|
| `--dusty-rose` | `--tone-accent-primary` | Primary accent color |
| `--warm-walnut` | `--tone-text-primary` | Primary text color |
| `--romantic-ivory` | `--tone-bg-primary` | Primary background |
| `--cream-pearl` | `--tone-bg-light` | Light background |
| `--deep-forest` | `--tone-bg-dark` | Dark background |
| `--champagne-gold` | `--tone-accent-highlight` | Highlight accent |
| `--blush-pink` | `--tone-bg-secondary` | Secondary background |
| `--soft-white` | `--tone-text-light` | Light text |
| `--charcoal-gray` | `--tone-text-dark` | Dark text |
| `--font-display` | `--font-family-display` | Display font |
| `--font-body` | `--font-family-body` | Body font |
| `--font-script` | `--font-family-script` | Script font |
| `--space-xs` | `--spacing-xs` | Extra small spacing |
| `--space-sm` | `--spacing-sm` | Small spacing |
| `--space-md` | `--spacing-md` | Medium spacing |
| `--space-lg` | `--spacing-lg` | Large spacing |
| `--space-xl` | `--spacing-xl` | Extra large spacing |
| `--transition` | `--transition-preset-default` | Default transition |

## Automated Migration Commands

### GNU sed Commands (macOS with Homebrew)

```bash
# Install GNU sed if not available
# brew install gnu-sed

# Color token migrations
gsed -i 's/--dusty-rose/--tone-accent-primary/g' $(rg -l --hidden -- "--dusty-rose" src)
gsed -i 's/--warm-walnut/--tone-text-primary/g' $(rg -l --hidden -- "--warm-walnut" src)
gsed -i 's/--romantic-ivory/--tone-bg-primary/g' $(rg -l --hidden -- "--romantic-ivory" src)
gsed -i 's/--cream-pearl/--tone-bg-light/g' $(rg -l --hidden -- "--cream-pearl" src)
gsed -i 's/--deep-forest/--tone-bg-dark/g' $(rg -l --hidden -- "--deep-forest" src)
gsed -i 's/--champagne-gold/--tone-accent-highlight/g' $(rg -l --hidden -- "--champagne-gold" src)
gsed -i 's/--blush-pink/--tone-bg-secondary/g' $(rg -l --hidden -- "--blush-pink" src)
gsed -i 's/--soft-white/--tone-text-light/g' $(rg -l --hidden -- "--soft-white" src)
gsed -i 's/--charcoal-gray/--tone-text-dark/g' $(rg -l --hidden -- "--charcoal-gray" src)

# Typography token migrations
gsed -i 's/--font-display/--font-family-display/g' $(rg -l --hidden -- "--font-display" src)
gsed -i 's/--font-body/--font-family-body/g' $(rg -l --hidden -- "--font-body" src)
gsed -i 's/--font-script/--font-family-script/g' $(rg -l --hidden -- "--font-script" src)

# Spacing token migrations  
gsed -i 's/--space-xs/--spacing-xs/g' $(rg -l --hidden -- "--space-xs" src)
gsed -i 's/--space-sm/--spacing-sm/g' $(rg -l --hidden -- "--space-sm" src)
gsed -i 's/--space-md/--spacing-md/g' $(rg -l --hidden -- "--space-md" src)
gsed -i 's/--space-lg/--spacing-lg/g' $(rg -l --hidden -- "--space-lg" src)
gsed -i 's/--space-xl/--spacing-xl/g' $(rg -l --hidden -- "--space-xl" src)

# Transition token migrations
gsed -i 's/--transition[^-]/--transition-preset-default/g' $(rg -l --hidden -- "--transition" src)
```

### Standard sed Commands (Linux/Unix)

```bash
# Color token migrations
sed -i 's/--dusty-rose/--tone-accent-primary/g' $(rg -l --hidden -- "--dusty-rose" src)
sed -i 's/--warm-walnut/--tone-text-primary/g' $(rg -l --hidden -- "--warm-walnut" src)
sed -i 's/--romantic-ivory/--tone-bg-primary/g' $(rg -l --hidden -- "--romantic-ivory" src)
sed -i 's/--cream-pearl/--tone-bg-light/g' $(rg -l --hidden -- "--cream-pearl" src)
sed -i 's/--deep-forest/--tone-bg-dark/g' $(rg -l --hidden -- "--deep-forest" src)
sed -i 's/--champagne-gold/--tone-accent-highlight/g' $(rg -l --hidden -- "--champagne-gold" src)
sed -i 's/--blush-pink/--tone-bg-secondary/g' $(rg -l --hidden -- "--blush-pink" src)
sed -i 's/--soft-white/--tone-text-light/g' $(rg -l --hidden -- "--soft-white" src)
sed -i 's/--charcoal-gray/--tone-text-dark/g' $(rg -l --hidden -- "--charcoal-gray" src)

# Typography token migrations
sed -i 's/--font-display/--font-family-display/g' $(rg -l --hidden -- "--font-display" src)
sed -i 's/--font-body/--font-family-body/g' $(rg -l --hidden -- "--font-body" src)
sed -i 's/--font-script/--font-family-script/g' $(rg -l --hidden -- "--font-script" src)

# Spacing token migrations
sed -i 's/--space-xs/--spacing-xs/g' $(rg -l --hidden -- "--space-xs" src)
sed -i 's/--space-sm/--spacing-sm/g' $(rg -l --hidden -- "--space-sm" src)
sed -i 's/--space-md/--spacing-md/g' $(rg -l --hidden -- "--space-md" src)
sed -i 's/--space-lg/--spacing-lg/g' $(rg -l --hidden -- "--space-lg" src)
sed -i 's/--space-xl/--spacing-xl/g' $(rg -l --hidden -- "--space-xl" src)

# Transition token migrations
sed -i 's/--transition[^-]/--transition-preset-default/g' $(rg -l --hidden -- "--transition" src)
```

## Manual Review Required

After running the automated commands, manually review these patterns:

### 1. Context-Sensitive Replacements
Some variables may need different semantic mappings based on context:

```css
/* Review these cases manually */
.button-primary {
  background: var(--dusty-rose); /* → --tone-accent-primary ✓ */
}

.text-accent {
  color: var(--dusty-rose); /* → --tone-accent-primary ✓ */
}

.border-accent {
  border-color: var(--dusty-rose); /* → --tone-accent-primary ✓ */
}
```

### 2. Complex Expressions
```css
/* Review calc() and color functions */
.component {
  margin: calc(var(--space-lg) * 2); /* → calc(var(--spacing-lg) * 2) */
  background: rgba(var(--dusty-rose-rgb), 0.5); /* May need custom handling */
}
```

### 3. JavaScript/TypeScript Usage
```javascript
// Review programmatic access
const color = getComputedStyle(element).getPropertyValue('--dusty-rose');
// → getComputedStyle(element).getPropertyValue('--tone-accent-primary');
```

## Pre-Migration Checklist

- [ ] Backup current codebase: `git checkout -b backup-before-token-migration`
- [ ] Ensure design tokens are built: `npm run tokens:build`
- [ ] Verify ripgrep is installed: `rg --version`
- [ ] Verify GNU sed is available (macOS): `gsed --version`
- [ ] Test token system works: Check `/button-demo` or `/hero-demo` pages

## Post-Migration Checklist

- [ ] Run build to check for CSS parse errors: `npm run build`
- [ ] Test visual regression on key pages
- [ ] Verify DevTools shows new token names in computed styles
- [ ] Update any documentation that references old token names
- [ ] Run linting: `npm run lint` (if configured)
- [ ] Commit changes: `git add -A && git commit -m "migrate: replace old CSS variables with design tokens"`

## Rollback Plan

If issues are discovered after migration:

```bash
# Quick rollback
git checkout backup-before-token-migration

# Or selective rollback of specific files
git checkout backup-before-token-migration -- src/path/to/file.css
```

## Verification Commands

```bash
# Check that old variables are gone
rg --hidden "(--(dusty-rose|warm-walnut|romantic-ivory|font-display|space-lg))" src

# Check that new variables are present
rg --hidden "(--tone-|--font-family-|--spacing-)" src

# Verify build still works
npm run build
```

## Notes

- This migration maintains semantic meaning while standardizing naming
- New token names are more descriptive and follow design system conventions
- All tokens will be available in multiple formats (CSS, JSON, JS, SCSS)
- Legacy aliases remain in place during transition period
- Remove legacy aliases after migration is complete and tested

---

**Created**: October 2025  
**Status**: Ready for execution