# Simple Token Migration Plan

## The Easy Way: 3 Steps

### Step 1: Add One Line (5 minutes)

Add this to the TOP of `src/CohesiveDesign.css`:

```css
@import './tokens-compatibility.css';
```

**That's it.** Your site now has design tokens working alongside old variables. Nothing breaks.

---

### Step 2: Use New Tokens Going Forward (ongoing)

**When writing NEW code**, use the new token names:

```css
/* ✅ New code - use these */
color: var(--color-base-dusty-rose);
font-family: var(--font-family-display);
padding: var(--spacing-lg);
```

```css
/* ⚠️ Old code - still works, but don't use in new components */
color: var(--dusty-rose);
font-family: var(--font-display);
padding: var(--space-lg);
```

**Quick Reference**:
| Old | New |
|-----|-----|
| `--dusty-rose` | `--color-base-dusty-rose` |
| `--font-display` | `--font-family-display` |
| `--space-lg` | `--spacing-lg` |

See [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) for complete list.

---

### Step 3: Update Old Code When You Touch It (optional)

**Don't do a big migration.** Just update files naturally as you work on them:

- Editing a component? Replace old tokens while you're there
- Adding a feature? Use new tokens
- Fixing a bug? Quick token update while you're in the file

**That's it!** Over time, everything migrates naturally.

---

## Optional: Remove Old Variables Later

When you feel ready (months from now), you can:

1. Delete the compatibility layer
2. Remove old variable definitions from `CohesiveDesign.css`

But there's no rush. The compatibility layer is tiny and has zero performance impact.

---

## Quick Commands

**Build tokens** (before production):
```bash
npm run tokens:build
```

**Find where a token is used**:
```bash
grep -r "var(--dusty-rose)" src/
```

**Check what tokens are available**:
```bash
cat src/generated/tokens.css
```

---

## That's It!

**No big migration project. No multi-week plan. Just:**
1. ✅ Add one import line
2. ✅ Use new tokens in new code
3. ✅ Update old code when convenient

Everything else is optional. The system works perfectly with both old and new tokens coexisting indefinitely.
