# TYPOGRAPHY SYSTEM - EXACT FIXES REQUIRED

## TYPOGRAPHY SCALE TO USE
```css
/* ADD THESE TO :root in CohesiveDesign.css */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.75rem;   /* 28px */
--text-4xl: 2rem;      /* 32px */
--text-5xl: 2.5rem;    /* 40px */
--text-6xl: 3rem;      /* 48px */
--text-hero: clamp(3rem, 8vw, 5.5rem);
```

## FONT FAMILY RULES
**ONLY USE THESE THREE:**
1. `var(--font-display)` = Playfair Display - Headers/Titles
2. `var(--font-body)` = Montserrat - Body/UI/Buttons
3. `var(--font-script)` = Dancing Script - Accents only

## CRITICAL FIXES IN CohesiveDesign.css

### 1. Remove ALL Georgia References
**Line 253:** ❌ WRONG
```css
font-family: 'Georgia', sans-serif;
```
**FIX TO:**
```css
font-family: var(--font-body);
```

### 2. Fix Body Font Size
**Line 68:** ❌ WRONG
```css
font-size: 1.0625rem;
```
**FIX TO:**
```css
font-size: 1rem; /* Use --text-base */
```

### 3. Fix ALL px Font Sizes
**Line 1175:** ❌ WRONG
```css
font-size: 48px;
```
**FIX TO:**
```css
font-size: 3rem; /* Use --text-6xl */
```

**Line 1182:** ❌ WRONG
```css
font-size: 20px;
```
**FIX TO:**
```css
font-size: 1.25rem; /* Use --text-xl */
```

**Line 1203:** ❌ WRONG
```css
font-size: 13px;
```
**FIX TO:**
```css
font-size: 0.875rem; /* Use --text-sm */
```

**Line 1219:** ❌ WRONG
```css
font-size: 16px;
```
**FIX TO:**
```css
font-size: 1rem; /* Use --text-base */
```

**Line 1229:** ❌ WRONG
```css
font-size: 36px;
```
**FIX TO:**
```css
font-size: 2.5rem; /* Use --text-5xl */
```

**Line 1257:** ❌ WRONG
```css
font-size: 32px;
```
**FIX TO:**
```css
font-size: 2rem; /* Use --text-4xl */
```

**Line 1264:** ❌ WRONG
```css
font-size: 48px;
```
**FIX TO:**
```css
font-size: 3rem; /* Use --text-6xl */
```

**Line 1295:** ❌ WRONG
```css
font-size: 20px;
```
**FIX TO:**
```css
font-size: 1.25rem; /* Use --text-xl */
```

**Line 1310:** ❌ WRONG
```css
font-size: 20px;
```
**FIX TO:**
```css
font-size: 1.25rem; /* Use --text-xl */
```

**Line 1331:** ❌ WRONG
```css
font-size: 16px;
```
**FIX TO:**
```css
font-size: 1rem; /* Use --text-base */
```

**Line 1342:** ❌ WRONG
```css
font-size: 18px;
```
**FIX TO:**
```css
font-size: 1.125rem; /* Use --text-lg */
```

**Line 1359:** ❌ WRONG
```css
font-size: 48px;
```
**FIX TO:**
```css
font-size: 3rem; /* Use --text-6xl */
```

**Line 1365:** ❌ WRONG
```css
font-size: 18px;
```
**FIX TO:**
```css
font-size: 1.125rem; /* Use --text-lg */
```

**Line 1416:** ❌ WRONG
```css
font-size: 12px;
```
**FIX TO:**
```css
font-size: 0.75rem; /* Use --text-xs */
```

**Line 1423:** ❌ WRONG
```css
font-size: 24px;
```
**FIX TO:**
```css
font-size: 1.5rem; /* Use --text-2xl */
```

**Line 1431:** ❌ WRONG
```css
font-size: 16px;
```
**FIX TO:**
```css
font-size: 1rem; /* Use --text-base */
```

**Line 1441 & 1464:** ❌ WRONG
```css
font-size: 14px;
```
**FIX TO:**
```css
font-size: 0.875rem; /* Use --text-sm */
```

**Line 1553:** ❌ WRONG
```css
font-size: 80px;
```
**FIX TO:**
```css
font-size: 5rem; /* Larger than scale - reduce to 3rem */
```

**Line 1563:** ❌ WRONG
```css
font-size: 42px;
```
**FIX TO:**
```css
font-size: 2.5rem; /* Use --text-5xl */
```

**Line 1570:** ❌ WRONG
```css
font-size: 17px;
```
**FIX TO:**
```css
font-size: 1.125rem; /* Use --text-lg */
```

**Line 1594:** ❌ WRONG
```css
font-size: 18px;
```
**FIX TO:**
```css
font-size: 1.125rem; /* Use --text-lg */
```

**Line 1619 & 1633:** ❌ WRONG
```css
font-size: 14px;
```
**FIX TO:**
```css
font-size: 0.875rem; /* Use --text-sm */
```

**Line 1663:** ❌ WRONG
```css
font-size: 60px;
```
**FIX TO:**
```css
font-size: 3rem; /* Use --text-6xl */
```

**Line 1667:** ❌ WRONG
```css
font-size: 32px;
```
**FIX TO:**
```css
font-size: 2rem; /* Use --text-4xl */
```

**Line 1710:** ❌ WRONG
```css
font-size: 14px;
```
**FIX TO:**
```css
font-size: 0.875rem; /* Use --text-sm */
```

**Line 1716:** ❌ WRONG
```css
font-size: 32px;
```
**FIX TO:**
```css
font-size: 2rem; /* Use --text-4xl */
```

**Line 2160:** ❌ WRONG
```css
font-size: 48px;
```
**FIX TO:**
```css
font-size: 3rem; /* Use --text-6xl */
```

**Line 2169:** ❌ WRONG
```css
font-size: 28px;
```
**FIX TO:**
```css
font-size: 1.75rem; /* Use --text-3xl */
```

**Line 2176 & 2360:** ❌ WRONG
```css
font-size: 18px;
```
**FIX TO:**
```css
font-size: 1.125rem; /* Use --text-lg */
```

**Line 2208:** ❌ WRONG
```css
font-size: 14px;
```
**FIX TO:**
```css
font-size: 0.875rem; /* Use --text-sm */
```

**Line 2220 & 2245:** ❌ WRONG
```css
font-size: 16px;
```
**FIX TO:**
```css
font-size: 1rem; /* Use --text-base */
```

**Line 2291:** ❌ WRONG
```css
font-size: 36px;
```
**FIX TO:**
```css
font-size: 2.5rem; /* Use --text-5xl */
```

**Line 2326:** ❌ WRONG
```css
font-size: 42px;
```
**FIX TO:**
```css
font-size: 2.5rem; /* Use --text-5xl */
```

### 4. Fix Arbitrary em/rem Sizes
**Line 1834:** ❌ WRONG
```css
font-size: 2.8em;
```
**FIX TO:**
```css
font-size: 2.5rem; /* Use --text-5xl */
```

**Line 1851:** ❌ WRONG
```css
font-size: 1.1em;
```
**FIX TO:**
```css
font-size: 1.125rem; /* Use --text-lg */
```

**Line 1864:** ❌ WRONG
```css
font-size: 1em;
```
**FIX TO:**
```css
font-size: 1rem; /* Use --text-base */
```

**Line 2065:** ❌ WRONG
```css
font-size: 2.625rem;
```
**FIX TO:**
```css
font-size: 2.5rem; /* Use --text-5xl */
```

### 5. Fix Font Weight Issues
**Line 221:** ❌ WRONG (too heavy)
```css
font-weight: 700;
```
**FIX TO:**
```css
font-weight: 500;
```

**Line 536:** ❌ WRONG (too heavy)
```css
font-weight: 700;
```
**FIX TO:**
```css
font-weight: 500;
```

**Line 836:** ❌ WRONG (too heavy)
```css
font-weight: 700;
```
**FIX TO:**
```css
font-weight: 500;
```

**Line 1835:** ❌ WRONG (too heavy)
```css
font-weight: 800;
```
**FIX TO:**
```css
font-weight: 600;
```

**Line 1556:** Remove `font-weight: bold;` and use specific weight:
```css
font-weight: 500;
```

**Line 1593:** Remove `font-weight: bold;` and use:
```css
font-weight: 500;
```

### 6. Fix Hardcoded Font Families
**Line 2165:** ❌ WRONG
```css
font-family: 'Playfair Display', serif;
```
**FIX TO:**
```css
font-family: var(--font-display);
```

**Line 2172:** ❌ WRONG
```css
font-family: 'Dancing Script', cursive;
```
**FIX TO:**
```css
font-family: var(--font-script);
```

**Line 2221:** ❌ WRONG
```css
font-family: 'Georgia', serif;
```
**FIX TO:**
```css
font-family: var(--font-body);
```

**Line 2330 & 2361:** ❌ WRONG
```css
font-family: 'Playfair Display', serif;
```
**FIX TO:**
```css
font-family: var(--font-display);
```

## CRITICAL FIXES IN HomePage.jsx

### 1. Footer Font Fixes (Lines 590-622)
**Lines 592, 604, 617:** ❌ WRONG
```jsx
fontFamily: 'Playfair Display, serif'
```
**FIX TO:**
```jsx
fontFamily: 'var(--font-display)'
```

**Lines 594, 606, 620-622:** ❌ WRONG
```jsx
fontFamily: 'Montserrat, sans-serif'
```
**FIX TO:**
```jsx
fontFamily: 'var(--font-body)'
```

### 2. Fix Arbitrary Font Sizes
**Line 203:** Keep as is (1.5rem = --text-2xl) ✅
**Line 207:** Change 1.25rem to 1.5rem (--text-2xl)
**Line 217:** Change 0.95rem to 1rem (--text-base)
**Line 238:** Change 0.95rem to 0.875rem (--text-sm)
**Lines 591, 603, 616:** Change 1.125rem to 1.25rem (--text-xl)
**Line 629:** 0.875rem is correct (--text-sm) ✅

### 3. VR Tour Text Fixes
**HomePage.jsx Line 206:** ✅ CORRECT - Using var(--font-display)
**HomePage.jsx Line 207:** Fix fontSize from 1.25rem to 1.5rem
**HomePage.jsx Line 216:** ✅ CORRECT - Using var(--font-body)
**HomePage.jsx Line 217:** Fix fontSize from 0.95rem to 1rem

## GLOBAL TYPOGRAPHY RULES TO ENFORCE

### Hierarchy (ALWAYS USE THESE):
1. **Hero:** Playfair, clamp(3rem, 8vw, 5.5rem), weight 400
2. **H1:** Playfair, 2.5rem, weight 500
3. **H2:** Playfair, 2rem, weight 400
4. **H3:** Playfair, 1.75rem, weight 400
5. **H4:** Playfair, 1.5rem, weight 400
6. **Script:** Dancing Script, 1.75rem, weight 400
7. **Lead:** Montserrat, 1.25rem, weight 300
8. **Body:** Montserrat, 1rem, weight 400
9. **Small:** Montserrat, 0.875rem, weight 400
10. **Tiny:** Montserrat, 0.75rem, weight 600

### Line Heights:
- Headers: 1.1 - 1.3
- Lead text: 1.7
- Body text: 1.8
- Small text: 1.6

### Letter Spacing:
- Uppercase labels: 0.05em
- Normal text: 0 (default)
- Headers: -0.02em (tighter)

## IMPLEMENTATION INSTRUCTIONS

1. First, add the typography scale variables to :root
2. Fix ALL px values to rem (use find/replace)
3. Fix ALL arbitrary rem/em values to scale values
4. Fix ALL Georgia references to var(--font-body)
5. Fix ALL hardcoded font-family to use CSS variables
6. Fix ALL font-weight 700/800 to 500/600 max
7. Test that all text is readable and hierarchy is clear

## VERIFICATION CHECKLIST
- [ ] No px values in font-size
- [ ] No Georgia font-family
- [ ] No hardcoded Playfair/Montserrat/Dancing Script
- [ ] No font-weight above 600
- [ ] All sizes match the scale
- [ ] Line-height is consistent (1.7-1.8 for body)

Total fixes needed: ~75 typography inconsistencies across 2 main files