# Rum River Design System - Component Library

A comprehensive collection of production-ready React components with elegant styling and animations.

## Quick Start

Visit the component library at: **http://localhost:7777/#components**

Switch between pages using the navigation buttons in the bottom-right corner.

## Available Components

### 🎨 Buttons
- **Primary Button** - Filled style with dusty rose background
- **Outline Button** - Transparent with border, fills on hover
- **Default Button** - Outline style with dusty rose border
- Features: Ripple effect animation, hover lift, smooth transitions

### 📝 Typography
- **Script Accent** - Dancing Script font for decorative text
- **Hero Headline** - Large display font with accent color support
- **Section Title** - Playfair Display for section headings
- **Lead Text** - Larger paragraph text for emphasis
- **Body Text** - Standard Montserrat for comfortable reading

### 🎴 Cards

#### Venue Cards
- Image with hover scale effect
- Badge overlays (Featured, Popular, New, etc.)
- Structured content area with title, description, features list
- Gradient overlay on hover
- Auto-responsive grid layout

#### Package Cards
- Pricing display with amount and detail
- Feature list with checkmarks
- Optional "Most Popular" badge with rotation effect
- Scale up featured cards
- Full-width button at bottom

#### Testimonial Cards
- Five-star rating display
- Italicized quote with decorative quotation marks
- Author name and details
- Centered layout with elegant shadow

### 📐 Layouts

#### Content Grid (Golden Ratio)
- Two-column layout: 1fr : 1.618fr
- Responsive (stacks on mobile)
- Perfect for text + image sections
- Supports feature lists with icons

#### Gallery Grid
- Masonry-style 4-column layout
- First item: 2x2 span (large)
- Sixth item: 2x1 span (wide)
- Hover overlays with details
- Responsive breakpoints

### 📋 Forms
- Text inputs with focus states
- Select dropdowns
- Textarea fields
- Two-column form grid
- Validation-ready styling
- Full-width submit buttons

### 📊 Stats & Trust Indicators
- Trust badges (horizontal list)
- Stat cards with large numbers
- Icon + content feature items
- Center-aligned layouts

### 🎯 Navigation
- Fixed header with scroll effect
- Logo with circle + text
- Nav menu with hover underline animation
- CTA button
- Transparent → solid background on scroll

### 🎪 Floating Elements
- Floating CTA button (bottom-right)
- Page switcher navigation
- Fixed positioning with hover effects

## Color Palette

```css
--romantic-ivory: #FBF8F4
--dusty-rose: #D4A5A5
--warm-walnut: #6B4E3D
--champagne-gold: #E4C896
--blush-pink: #F4E4E1
--cream-pearl: #FFFCF8
--warm-cream: #FAF6F2
--accent-gold: #D4A574
--deep-brown: #4A3426
```

## Typography System

```css
--font-display: 'Playfair Display', serif
--font-body: 'Montserrat', sans-serif
--font-script: 'Dancing Script', cursive
```

## Spacing Scale

```css
--rhythm-xs: 0.5rem   (8px)
--rhythm-sm: 1.5rem   (24px)
--rhythm-md: 3rem     (48px)
--rhythm-lg: 5rem     (80px)
--rhythm-xl: 8rem     (128px)
```

## Usage Examples

### Button
```jsx
<button className="romantic-button primary">Click Me</button>
<button className="romantic-button outline">Learn More</button>
```

### Venue Card
```jsx
<div className="venue-card image-reveal">
  <div className="venue-card-image">
    <img src="..." alt="..." />
    <div className="venue-card-badge">Featured</div>
  </div>
  <div className="venue-card-content">
    <h3>Card Title</h3>
    <p>Card description text</p>
    <div className="venue-features">
      <span>• Feature one</span>
      <span>• Feature two</span>
    </div>
  </div>
</div>
```

### Content Grid
```jsx
<div className="content-grid">
  <div className="experience-content">
    <div className="script-accent">Accent Text</div>
    <h2 className="section-title">Title</h2>
    <p className="lead">Lead paragraph</p>

    <div className="experience-features">
      <div className="feature-item">
        <div className="feature-icon">🎨</div>
        <div className="feature-content">
          <h4>Feature Title</h4>
          <p>Feature description</p>
        </div>
      </div>
    </div>
  </div>

  <div className="experience-image image-reveal">
    <img src="..." alt="..." />
  </div>
</div>
```

### Form
```jsx
<div className="contact-form-wrapper">
  <form className="contact-form">
    <div className="form-header">
      <h3>Form Title</h3>
      <p>Form description</p>
    </div>

    <div className="form-grid">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" placeholder="Your name" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Last name" />
      </div>
    </div>

    <button type="submit" className="romantic-button primary full-width">
      Submit
    </button>
  </form>
</div>
```

## Responsive Breakpoints

- **Desktop**: Full layouts, all features enabled
- **Tablet (< 768px)**: Grids collapse to single column, nav menu hidden
- **Mobile (< 480px)**: Reduced spacing, optimized typography

## Animation System

### Hover Effects
- **Buttons**: Ripple + lift effect
- **Cards**: Scale + shadow increase
- **Images**: Scale 1.08x + gradient overlay
- **Nav Links**: Underline slide in from left

### Scroll Effects
- **Header**: Background + shadow transition
- **Hero**: Fade in + slide up animation
- **Scroll Indicator**: Bounce animation

## Best Practices

1. **Always wrap content in `.content-wrapper`** for consistent max-width and padding
2. **Use `.section` class** for vertical spacing between major sections
3. **Apply `.center` class** to section headers for centered layouts
4. **Use `.lead` class** for introductory/emphasized paragraphs
5. **Combine `.image-reveal`** with card/grid items for hover effects
6. **Use `.full-width`** on buttons inside cards for consistent sizing

## File Structure

```
src/
├── App.jsx                  # Page router
├── CohesiveDesign.jsx       # Main wedding site
├── ComponentLibrary.jsx     # This component showcase
├── CohesiveDesign.css       # All styles (shared)
└── main.jsx                 # Entry point
```

## Development

```bash
# Start dev server
npx vite --port 7777

# View main site
http://localhost:7777/

# View component library
http://localhost:7777/#components
```

---

**Built with React + Vite**
Designed for wedding venues, easily adaptable for any elegant website.
