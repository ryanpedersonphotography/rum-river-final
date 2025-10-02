# COLOR SYSTEM FIXES - HomePage.jsx

## Color System Rules Summary

### Primary Palette
- **--warm-walnut** (#6B4E3D): Primary dark, headers, body text on light
- **--dusty-rose** (#D4A5A5): Primary accent, CTAs, script accents
- **--sage-green** (#7A8B7F): Secondary text, descriptions
- **--accent-gold** (#D4A574): Links, interactive elements  
- **--champagne-gold** (#E4C896): Highlights, special accents
- **--text-dark** (#2C2416): Footer, dark backgrounds
- **--romantic-ivory** (#FBF8F4): Main page background
- **--cream-pearl** (#FFFCF8): Light sections
- **--blush-pink** (#F4E4E1): Accent sections

## CRITICAL FIXES REQUIRED IN HomePage.jsx

### 1. Hardcoded Hex Colors to Fix

#### Line 192: VR Tour Background
**WRONG:**
```jsx
background: 'linear-gradient(135deg, #f8f6f0 0%, #ede8dc 100%)'
```
**FIX TO:**
```jsx
background: 'linear-gradient(135deg, var(--cream-pearl) 0%, var(--blush-pink) 100%)'
```

#### Line 232: Button Background Gradient
**WRONG:**
```jsx
background: 'linear-gradient(135deg, var(--warm-walnut) 0%, #8B4513 100%)'
```
**FIX TO:**
```jsx
background: 'linear-gradient(135deg, var(--warm-walnut) 0%, var(--deep-brown) 100%)'
```

#### Line 247: Button Hover Shadow
**WRONG:**
```jsx
e.target.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.3)';
```
**FIX TO:**
```jsx
e.target.style.boxShadow = '0 8px 25px rgba(107, 78, 61, 0.3)'; // Using --warm-walnut RGB
```

#### Lines 450-452: Error Message Styling
**WRONG:**
```jsx
background: '#fee',
border: '1px solid #fcc',
color: '#c33',
```
**FIX TO:**
```jsx
background: 'rgba(212, 165, 165, 0.1)', // Light dusty-rose
border: '1px solid rgba(212, 165, 165, 0.3)', // Dusty-rose border
color: 'var(--warm-walnut)',
```

#### Line 575: Footer Background
**WRONG:**
```jsx
background: '#2C2416',
```
**FIX TO:**
```jsx
background: 'var(--text-dark)',
```

#### Lines 620-622: Footer Link Colors
**WRONG:**
```jsx
color: '#D4A574'
```
**FIX TO:**
```jsx
color: 'var(--accent-gold)'
```

### 2. Inconsistent Opacity Values

#### Line 576: Footer Text Opacity
**WRONG:**
```jsx
color: 'rgba(255,255,255,0.7)',
```
**STANDARDIZE TO:**
```jsx
color: 'rgba(255,255,255,0.8)', // Standard secondary text opacity
```

### 3. Missing CSS Variable Usage

#### Line 589, 601, 614: Footer Heading Colors
**ALREADY CORRECT** ✅
```jsx
color: 'white'
```
These are correct for text on dark backgrounds.

### 4. Color Usage Violations

#### Line 451: Error Border Color
The error styling uses red tones which aren't in our palette. Should use dusty-rose for all error states.

#### Line 666: Placeholder Gray
**CHECK FOR:**
```jsx
color: '#666'
```
**SHOULD BE:**
```jsx
color: 'var(--sage-green)'
```

## IMPLEMENTATION CHECKLIST

- [ ] Replace all hex colors with CSS variables
- [ ] Standardize opacity values (0.8 for secondary, 0.9 for primary)
- [ ] Use dusty-rose for all error/validation states
- [ ] Use accent-gold for all interactive links
- [ ] Use text-dark for footer background
- [ ] Test contrast ratios remain WCAG compliant

## Color Usage Quick Reference

### Text on Light Backgrounds
- Primary: `var(--warm-walnut)`
- Secondary: `var(--sage-green)`
- Links: `var(--accent-gold)`
- Accents: `var(--dusty-rose)`

### Text on Dark Backgrounds  
- Primary: `white`
- Secondary: `rgba(255,255,255,0.8)`
- Links: `var(--accent-gold)`
- Accents: `var(--champagne-gold)`

### Background Colors
- Main: `var(--romantic-ivory)`
- Light sections: `var(--cream-pearl)`
- Accent sections: `var(--blush-pink)`
- Dark sections: `var(--warm-walnut)`
- Footer: `var(--text-dark)`

### Button Colors
- Primary CTA: `var(--dusty-rose)`
- Secondary: `var(--warm-walnut)`
- Outline: `var(--champagne-gold)`
- Hover state: `var(--sage-green)`

### Special Effects
- Card shadows: `rgba(0,0,0,0.1)`
- Borders: `rgba(212,165,116,0.2)` (--accent-gold with opacity)
- Overlays: `rgba(0,0,0,0.4)`

## Verification Steps

1. Search for all `#` hex values and replace with variables
2. Search for all `rgb` values and replace with variables
3. Ensure no color is defined without using CSS variables
4. Test all interactive states have proper color transitions
5. Verify WCAG AA contrast compliance

Total fixes needed: **10 color inconsistencies** in HomePage.jsx