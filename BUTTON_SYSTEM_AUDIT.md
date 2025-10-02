# 🔍 BUTTON SYSTEM AUDIT CHECKLIST FOR CLAUDE CODE SONNET

## ⚡ CRITICAL: Run this audit on EVERY page component

### 📋 PRE-AUDIT SETUP
```bash
# 1. Find all component files to audit
find src -name "*.jsx" -type f | sort

# 2. Find all button elements across codebase
grep -r "<button" src/ --include="*.jsx"
grep -r "className.*button" src/ --include="*.jsx"
grep -r "style={{" src/ --include="*.jsx" | grep -i button
```

---

## 🚨 PHASE 1: CRITICAL VIOLATIONS TO FIX IMMEDIATELY

### ❌ VIOLATION 1: Inline Styles on Buttons
**SEARCH COMMAND:** `grep -n "button.*style=" src/**/*.jsx`

**CHECK EACH FILE FOR:**
```jsx
// ❌ WRONG - Any button with inline styles
<button style={{ background: 'red', color: 'white' }}>

// ✅ CORRECT - Use className only
<button className="romantic-button primary">
```

**QA CHECKPOINT 1.1:**
- [ ] HomePage.jsx - NO inline button styles
- [ ] EventsPage.jsx - NO inline button styles  
- [ ] GalleryPage.jsx - NO inline button styles
- [ ] TestimonialsPage.jsx - NO inline button styles
- [ ] ContactPage.jsx - NO inline button styles
- [ ] AboutPage.jsx - NO inline button styles
- [ ] All other pages - NO inline button styles

### ❌ VIOLATION 2: onMouseOver/onMouseOut Handlers
**SEARCH COMMAND:** `grep -n "onMouse" src/**/*.jsx`

**CHECK EACH FILE FOR:**
```jsx
// ❌ WRONG - JavaScript hover handlers
<button onMouseOver={(e) => {...}} onMouseOut={(e) => {...}}>

// ✅ CORRECT - CSS handles all hover effects
<button className="romantic-button primary">
```

**QA CHECKPOINT 1.2:**
- [ ] NO onMouseOver handlers on buttons
- [ ] NO onMouseOut handlers on buttons
- [ ] NO onMouseEnter handlers on buttons
- [ ] NO onMouseLeave handlers on buttons
- [ ] ALL hover effects handled by CSS :hover

### ❌ VIOLATION 3: Hex Colors Instead of CSS Variables
**SEARCH COMMAND:** `grep -n "#[0-9a-fA-F]\{6\}" src/**/*.jsx | grep -i button`

**CHECK FOR:**
```jsx
// ❌ WRONG - Hardcoded hex colors
<button style={{ color: '#D4A5A5' }}>
<button style={{ background: '#6B4E3D' }}>

// ✅ CORRECT - CSS variables only
.button { color: var(--dusty-rose); }
.button { background: var(--warm-walnut); }
```

**QA CHECKPOINT 1.3:**
- [ ] NO hex colors in button styles
- [ ] NO rgb() colors in button styles
- [ ] ONLY CSS variables used: --dusty-rose, --accent-gold, --warm-walnut, etc.

---

## 📏 PHASE 2: BUTTON CLASS COMPLIANCE

### ✅ CHECK 1: Primary CTAs
**SEARCH:** All "Schedule", "Book", "Get Started" buttons

**MUST HAVE:**
```jsx
className="romantic-button primary"
```

**QA CHECKPOINT 2.1:**
- [ ] Hero CTA button uses "romantic-button primary"
- [ ] Floating schedule tour uses "floating-cta"
- [ ] Main booking CTAs use "romantic-button primary"
- [ ] Get Started buttons use "romantic-button primary"

### ✅ CHECK 2: Secondary/Outline Buttons
**SEARCH:** All "View Gallery", "Learn More", "See Details" buttons

**MUST HAVE:**
```jsx
className="romantic-button outline"
```

**QA CHECKPOINT 2.2:**
- [ ] Gallery links use "romantic-button outline"
- [ ] Learn More buttons use "romantic-button outline"
- [ ] Secondary CTAs use "romantic-button outline"

### ✅ CHECK 3: Venue/Navigation Tabs
**SEARCH:** All tab navigation, category filters

**MUST HAVE:**
```jsx
className={`venue-tab ${active ? 'active' : ''}`}
```

**QA CHECKPOINT 2.3:**
- [ ] Venue tabs use "venue-tab" class
- [ ] Active tabs add "active" class
- [ ] Category filters use "venue-tab" pattern
- [ ] Font is var(--font-display) NOT var(--font-body)

### ✅ CHECK 4: Form Submit Buttons
**SEARCH:** All type="submit" buttons

**MUST HAVE:**
```jsx
<button type="submit" className="cta-submit-button">
```

**QA CHECKPOINT 2.4:**
- [ ] Contact form submit uses "cta-submit-button"
- [ ] Booking form submit uses "cta-submit-button"
- [ ] Newsletter signup uses "cta-submit-button"
- [ ] All forms use accent-gold color

### ✅ CHECK 5: Special Buttons
**SEARCH:** VR Tour, Carousel navigation, unique buttons

**QA CHECKPOINT 2.5:**
- [ ] VR Tour button uses "romantic-button vr-special"
- [ ] Carousel prev/next use "carousel-nav"
- [ ] Carousel dots use "carousel-dot"
- [ ] Any unique buttons have proper CSS classes

---

## 🎨 PHASE 3: CSS PROPERTY VERIFICATION

### 📐 Typography Rules
**CHECK ALL BUTTONS FOR:**

```css
/* REQUIRED on ALL buttons (except venue-tab) */
font-family: var(--font-body);  /* Montserrat */
font-weight: 500;
letter-spacing: 0.05em;
text-transform: uppercase;

/* EXCEPTION: venue-tab ONLY */
.venue-tab {
  font-family: var(--font-display);  /* Playfair Display */
}
```

**QA CHECKPOINT 3.1:**
- [ ] All buttons use Montserrat EXCEPT venue-tab
- [ ] Venue-tab uses Playfair Display
- [ ] All buttons have uppercase text
- [ ] All buttons have letter-spacing: 0.05em
- [ ] Font-weight is 500 (600 for submit only)

### ⏱️ Animation Timing
**VERIFY ALL BUTTONS HAVE:**

```css
transition: all 0.3s ease;  /* Standard */
transition: all 0.4s ease;  /* Submit button only */
transition: width 0.6s, height 0.6s;  /* Ripple effect only */
```

**QA CHECKPOINT 3.2:**
- [ ] Standard buttons: 0.3s ease
- [ ] Submit button: 0.4s ease
- [ ] NO custom transition timings
- [ ] NO transition: none
- [ ] NO missing transitions

### 🎯 Border Radius Rules
**CHECK:**

```css
border-radius: 50px;  /* Default for all buttons */
border-radius: 2px;   /* venue-tab ONLY */
border-radius: 8px;   /* vr-special ONLY */
border-radius: 50%;   /* carousel-nav dots ONLY */
```

**QA CHECKPOINT 3.3:**
- [ ] Most buttons: 50px radius
- [ ] Venue tabs: 2px radius
- [ ] VR button: 8px radius
- [ ] Carousel dots: 50% radius
- [ ] NO other radius values

### 📏 Size & Padding
**STANDARD SIZES:**

```css
/* Normal */
padding: 0.75rem 1.5rem;
font-size: 1rem;

/* Submit */
padding: 18px 50px;
font-size: 1rem;

/* Floating CTA */
padding: 1rem 2rem;
font-size: 0.875rem;

/* Mobile Floating */
@media (max-width: 768px) {
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
}
```

**QA CHECKPOINT 3.4:**
- [ ] Standard padding: 0.75rem 1.5rem
- [ ] Submit padding: 18px 50px
- [ ] Floating padding: 1rem 2rem
- [ ] Mobile responsive sizing works

---

## 🎨 PHASE 4: COLOR HIERARCHY AUDIT

### Color Rules Table
| Button Type | Background | Text | Border | Hover BG |
|------------|------------|------|--------|----------|
| Primary | var(--dusty-rose) | white | dusty-rose | dusty-rose |
| Outline | transparent | dusty-rose | dusty-rose | dusty-rose |
| Submit | var(--accent-gold) | white | none | accent-gold |
| Tab | transparent | warm-walnut | dusty-rose | dusty-rose |
| Tab Active | dusty-rose | white | dusty-rose | dusty-rose |
| Carousel | rgba(255,255,255,0.9) | warm-walnut | none | dusty-rose |
| VR Special | walnut gradient | white | none | walnut gradient |

**QA CHECKPOINT 4.1:**
- [ ] Primary buttons: dusty-rose background
- [ ] Outline buttons: transparent → dusty-rose on hover
- [ ] Submit buttons: accent-gold background
- [ ] Tabs: transparent → dusty-rose when active
- [ ] NO other color combinations

---

## ✨ PHASE 5: HOVER EFFECTS AUDIT

### Standard Hover Transforms
**VERIFY EACH BUTTON TYPE:**

```css
/* Standard lift */
transform: translateY(-2px);
box-shadow: 0 10px 30px rgba(212, 165, 165, 0.3);

/* Emphasis lift (submit/floating) */
transform: translateY(-3px);
box-shadow: 0 15px 40px rgba(212, 165, 165, 0.4);

/* Carousel special */
transform: translateY(-50%) scale(1.1);

/* Tab lift */
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(212, 165, 165, 0.3);
```

**QA CHECKPOINT 5.1:**
- [ ] Primary buttons lift -2px on hover
- [ ] Submit buttons lift -3px on hover
- [ ] Floating CTA lifts -3px on hover
- [ ] Tabs lift -2px when active/hover
- [ ] Carousel scales 1.1 on hover
- [ ] ALL hover effects work smoothly

### Ripple Effect (Primary Only)
**CHECK PRIMARY BUTTONS HAVE:**

```css
.romantic-button.primary::before {
  /* Ripple animation setup */
}
```

**QA CHECKPOINT 5.2:**
- [ ] Primary buttons have ripple effect
- [ ] Ripple uses ::before pseudo-element
- [ ] Ripple animation is 0.6s
- [ ] Ripple color is rgba(255,255,255,0.2)

---

## 🔧 PHASE 6: ACCESSIBILITY AUDIT

### Minimum Tap Targets
**VERIFY:**
- Minimum 44px height/width for all interactive buttons
- Proper spacing between buttons (8px minimum)

**QA CHECKPOINT 6.1:**
- [ ] All buttons ≥ 44px tap target
- [ ] Mobile buttons properly sized
- [ ] Adequate spacing between buttons
- [ ] Carousel dots have adequate spacing

### Focus States
**CHECK ALL BUTTONS HAVE:**

```css
.button:focus {
  outline: 2px solid var(--dusty-rose);
  outline-offset: 2px;
}
```

**QA CHECKPOINT 6.2:**
- [ ] All buttons have visible focus states
- [ ] Focus outline uses CSS variables
- [ ] Keyboard navigation works
- [ ] Tab order is logical

### Disabled States
**IF DISABLED BUTTONS EXIST:**

```css
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

**QA CHECKPOINT 6.3:**
- [ ] Disabled buttons have reduced opacity
- [ ] Disabled buttons show not-allowed cursor
- [ ] Disabled buttons don't respond to clicks

---

## 📱 PHASE 7: RESPONSIVE AUDIT

### Mobile Breakpoints
**TEST AT:**
- 320px (small phone)
- 375px (iPhone)
- 768px (tablet)
- 1024px (desktop)

**QA CHECKPOINT 7.1:**
- [ ] Floating CTA adjusts size on mobile
- [ ] Buttons remain tappable on small screens
- [ ] Text doesn't overflow button boundaries
- [ ] Padding adjusts appropriately
- [ ] Font size scales correctly

### Touch Interactions
**VERIFY ON MOBILE:**
- [ ] Hover states work on touch
- [ ] No sticky hover on mobile
- [ ] Touch feedback is immediate
- [ ] No double-tap issues

---

## 🚀 PHASE 8: FINAL VERIFICATION

### Run Complete Test Suite
```bash
# 1. Find all violations
echo "=== INLINE STYLES ==="
grep -n "button.*style=" src/**/*.jsx

echo "=== MOUSE HANDLERS ==="
grep -n "onMouse" src/**/*.jsx | grep -i button

echo "=== HEX COLORS ==="
grep -n "#[0-9a-fA-F]\{6\}" src/**/*.jsx | grep -i button

echo "=== MISSING CLASSES ==="
grep -n "<button" src/**/*.jsx | grep -v "className"

# 2. Verify all buttons have proper classes
echo "=== BUTTON CLASSES ==="
grep -n "className.*button" src/**/*.jsx | sort | uniq
```

### Visual Spot Check
**MANUALLY VERIFY:**
- [ ] Open each page in browser
- [ ] Test every button hover effect
- [ ] Check mobile view for each page
- [ ] Verify colors match design system
- [ ] Test keyboard navigation
- [ ] Check loading/disabled states

### Performance Check
- [ ] No CSS animation jank
- [ ] Smooth hover transitions
- [ ] No layout shift on hover
- [ ] Fast button response time

---

## 📊 FINAL AUDIT SUMMARY

### PASS CRITERIA:
- ✅ ZERO inline styles on buttons
- ✅ ZERO onMouse handlers on buttons
- ✅ ZERO hex colors in button styles
- ✅ ALL buttons use proper class names
- ✅ ALL hover effects work via CSS
- ✅ ALL colors use CSS variables
- ✅ ALL transitions are 0.3s ease (except submit/ripple)
- ✅ ALL buttons follow typography rules
- ✅ ALL buttons meet accessibility standards
- ✅ ALL buttons work on mobile

### AUDIT SIGN-OFF:
- [ ] HomePage.jsx - FULLY COMPLIANT
- [ ] EventsPage.jsx - FULLY COMPLIANT
- [ ] GalleryPage.jsx - FULLY COMPLIANT
- [ ] TestimonialsPage.jsx - FULLY COMPLIANT
- [ ] ContactPage.jsx - FULLY COMPLIANT
- [ ] AboutPage.jsx - FULLY COMPLIANT
- [ ] All other components - FULLY COMPLIANT

---

## 🔴 IF VIOLATIONS FOUND:

### Fix Priority Order:
1. **CRITICAL:** Remove ALL inline styles → use classes
2. **CRITICAL:** Remove ALL onMouse handlers → use CSS :hover
3. **HIGH:** Fix wrong class names
4. **HIGH:** Add missing hover effects
5. **MEDIUM:** Fix transition timing
6. **MEDIUM:** Fix color variables
7. **LOW:** Adjust padding/sizing
8. **LOW:** Fine-tune animations

### For Each Violation:
1. Note the file and line number
2. Reference BUTTON_FIXES.md for correct implementation
3. Apply the exact fix from the guide
4. Test the fix works
5. Move to next violation

---

## 📝 AUDIT LOG TEMPLATE

```markdown
## Button System Audit - [DATE]

### Files Audited:
- [ ] HomePage.jsx
- [ ] EventsPage.jsx
- [ ] GalleryPage.jsx
- [ ] TestimonialsPage.jsx
- [ ] ContactPage.jsx
- [ ] AboutPage.jsx

### Violations Found:
1. **File:** [filename] **Line:** [line#]
   **Issue:** [inline style / wrong class / etc]
   **Fixed:** ✅/❌

### Final Status:
- Total Violations Found: [number]
- Total Violations Fixed: [number]
- Remaining Issues: [number]
- Audit Result: PASS ✅ / FAIL ❌
```

---

**IMPORTANT:** Run this complete audit on EVERY page. Do not skip any checkpoints. Fix ALL violations before marking the audit as complete.