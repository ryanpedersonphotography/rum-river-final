import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

export default function HeroStandalone() {
  return (
    <>
      {/* Floating CTA Button */}
      <a href="#lets-connect-form" className="floating-cta">
        <Icon name="calendar" size="sm" color="white" />
        Schedule Your Tour
      </a>

      {/* Hero Section - Enhanced */}
      <section id="home" className="hero-enhanced">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="script-accent">Where Dreams Begin</div>
            <h1 className="hero-headline">
              Rum River<br />
              <span className="hero-accent">Wedding Barn</span>
            </h1>
            <p className="lead hero-lead">
              Nestled along Minnesota's scenic Rum River, our historic barn offers
              the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.
            </p>
            <div className="hero-buttons">
              <CTAButton href="/contact" variant="primary">Schedule Your Visit</CTAButton>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover Your Perfect Day</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Hero Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML and CSS implementation of the hero section above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- Floating CTA Button -->
<a href="#lets-connect-form" className="floating-cta">
  <Icon name="calendar" size="sm" color="white" />
  Schedule Your Tour
</a>

<!-- Hero Section - Enhanced -->
<section id="home" className="hero-enhanced">
  <div className="romantic-overlay"></div>
  <div className="content-wrapper">
    <div className="hero-content">
      <div className="script-accent">Where Dreams Begin</div>
      <h1 className="hero-headline">
        Rum River<br />
        <span className="hero-accent">Wedding Barn</span>
      </h1>
      <p className="lead hero-lead">
        Nestled along Minnesota's scenic Rum River, our historic barn offers
        the perfect blend of rustic charm and modern elegance for your 
        once-in-a-lifetime celebration.
      </p>
      <div className="hero-buttons">
        <CTAButton href="/contact" variant="primary">
          Schedule Your Visit
        </CTAButton>
      </div>
    </div>
  </div>
  <div className="hero-scroll-indicator">
    <span>Discover Your Perfect Day</span>
    <div className="scroll-arrow">↓</div>
  </div>
</section>`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* Hero Section Enhanced */
.hero-enhanced {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), 
              url('/images/venue/barn-exterior-full-deck-view-evening.jpg') center/cover;
  display: flex;
  align-items: center;
  position: relative;
  color: white;
}

.romantic-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q25 15 30 25 Q35 15 30 5' fill='%23D4A5A5' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}

.hero-content {
  animation: fadeInUp 1.2s ease-out;
  max-width: 700px;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
}

.script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--champagne-gold);
  margin-bottom: 1rem;
  font-weight: 400;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

.hero-accent {
  color: var(--champagne-gold);
}

.hero-lead {
  color: var(--cream-pearl);
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.8;
  font-size: 1.25rem;
}

.hero-buttons {
  display: flex;
  gap: var(--rhythm-sm);
  margin-top: 2rem;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--cream-pearl);
  animation: fadeInUp 1.8s ease-out;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

.floating-cta {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--dusty-rose);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  box-shadow: 0 10px 30px rgba(212, 165, 165, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.floating-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(212, 165, 165, 0.4);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}`}
            </pre>
          </div>

          {/* Design Token Mappings */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Design Token Mappings</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current values → Design tokens → Shadcn/Tailwind equivalents</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* COLOR MAPPINGS */
// Current hardcoded    → Design Token           → Shadcn/Tailwind
rgba(107, 78, 61, 0.9)  → var(--warm-walnut)     → bg-amber-900/90
rgba(58, 74, 60, 0.8)   → var(--deep-forest)     → bg-slate-700/80  
#E4C896                 → var(--champagne-gold)  → text-amber-200
#FBF8F4                 → var(--cream-pearl)     → text-amber-50
#9D6B7B                 → var(--dusty-rose)      → bg-rose-400

/* SPACING MAPPINGS */
// Current               → Design Token          → Shadcn/Tailwind
1rem                    → var(--space-md)       → gap-4
2rem                    → var(--space-lg)       → p-8
3rem                    → var(--space-xl)       → mb-12
100vh                   → --                    → min-h-screen

/* TYPOGRAPHY MAPPINGS */
// Current               → Design Token          → Shadcn/Tailwind
'Playfair Display'      → var(--font-display)   → font-serif
'Dancing Script'        → var(--font-script)    → font-script (custom)
'Montserrat'           → var(--font-body)       → font-sans
clamp(3rem, 8vw, 5.5rem) → var(--text-hero)    → text-4xl md:text-6xl lg:text-7xl
1.75rem                 → var(--text-2xl)       → text-2xl
1.25rem                 → var(--text-xl)        → text-xl

/* BORDER RADIUS MAPPINGS */
// Current               → Design Token          → Shadcn/Tailwind
50px                    → var(--radius-full)    → rounded-full
8px                     → var(--radius-md)      → rounded-lg
20px                    → var(--radius-lg)      → rounded-2xl

/* SHADOW MAPPINGS */
// Current                                    → Shadcn/Tailwind
0 10px 30px rgba(212, 165, 165, 0.3)         → shadow-lg shadow-rose-200/30
0 15px 40px rgba(212, 165, 165, 0.4)         → shadow-xl shadow-rose-200/40`}
            </pre>
          </div>

          {/* Component Anatomy Breakdown */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Component Anatomy Breakdown</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current CSS classes mapped to shadcn/Tailwind component patterns</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* COMPONENT STRUCTURE MAPPING */

// Current Implementation → Shadcn Equivalent
.hero-enhanced {
  // Complex background/positioning
} 
→ <section className="relative min-h-screen flex items-center bg-cover bg-center">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-slate-700/80" />
  </section>

.content-wrapper {
  // Container with max-width
}
→ <div className="container mx-auto px-4">

.hero-content {
  // Content positioning and spacing
}
→ <div className="relative z-10 max-w-2xl space-y-6 px-8">

.script-accent {
  // Script font styling
}
→ <p className="font-script text-2xl text-amber-200 mb-4">

.hero-headline {
  // Large responsive heading
}
→ <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-white">

.hero-accent {
  // Colored accent text
}
→ <span className="text-amber-200">

.hero-lead {
  // Lead paragraph styling  
}
→ <p className="text-xl leading-relaxed text-amber-50/95 mb-8">

.hero-buttons {
  // Button container
}
→ <div className="flex gap-4 mt-8">

.floating-cta {
  // Fixed positioning button
}
→ <Button 
    className="fixed bottom-8 right-8 rounded-full bg-rose-400 hover:bg-rose-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50"
    size="lg"
  >

.hero-scroll-indicator {
  // Scroll indicator positioning
}
→ <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-amber-50 animate-fade-in-up">

/* SHADCN COMPONENT EQUIVALENTS */
- CTAButton → <Button variant="default" size="lg">
- Icon → <Calendar className="w-4 h-4" /> (from lucide-react)
- Background overlay → <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-slate-700/80" />
- Container → <div className="container mx-auto px-4">
- Typography → Built-in Tailwind text classes + custom font classes`}
            </pre>
          </div>

          {/* TypeScript Interface Documentation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>TypeScript Interface Documentation</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Props, state, and data structure definitions for migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// TypeScript interfaces for Hero component migration

interface HeroContent {
  scriptAccent: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

interface HeroProps {
  content?: HeroContent;
  showFloatingCTA?: boolean;
  showScrollIndicator?: boolean;
  variant?: 'default' | 'minimal' | 'full-height';
  className?: string;
}

interface HeroState {
  isVisible: boolean;
  scrollY: number;
  backgroundLoaded: boolean;
}

// Default content structure
const defaultHeroContent: HeroContent = {
  scriptAccent: "Where Dreams Begin",
  titleLine1: "Rum River",
  titleLine2: "Wedding Barn", 
  description: "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
  ctaText: "Schedule Your Visit",
  ctaLink: "/contact",
  backgroundImage: "/images/venue/barn-exterior-full-deck-view-evening.jpg"
}

// Animation configuration
interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}

const heroAnimations: Record<string, AnimationConfig> = {
  fadeInUp: { duration: 1200, delay: 0, easing: 'ease-out' },
  scrollIndicator: { duration: 1800, delay: 600, easing: 'ease-out' },
  bounce: { duration: 2000, delay: 0, easing: 'infinite' }
}

// Usage example for migration:
// const Hero: React.FC<HeroProps> = ({ content = defaultHeroContent, showFloatingCTA = true }) => {
//   const [state, setState] = useState<HeroState>({ isVisible: false, scrollY: 0, backgroundLoaded: false });
//   // Component implementation...
// }`}
            </pre>
          </div>

          {/* Responsive Breakpoint Mapping */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Responsive Breakpoint Mapping</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>CSS media queries converted to Tailwind responsive classes</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* RESPONSIVE BREAKPOINT CONVERSIONS */

// Current CSS Media Queries → Tailwind Responsive Classes

/* Mobile First (Current) */
@media (max-width: 768px) {
  .hero-headline {
    font-size: 3rem;
  }
  .hero-content {
    padding: 0 1rem;
  }
  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Tailwind Equivalent */
<h1 className="text-5xl md:text-6xl lg:text-7xl">
<div className="px-4 md:px-8">
<div className="flex flex-col md:flex-row gap-4 md:gap-6">

/* Specific Breakpoint Mappings */
// CSS                           → Tailwind Class
@media (max-width: 640px)       → sm: (targets 640px+)
@media (max-width: 768px)       → md: (targets 768px+)  
@media (max-width: 1024px)      → lg: (targets 1024px+)
@media (max-width: 1280px)      → xl: (targets 1280px+)
@media (max-width: 1536px)      → 2xl: (targets 1536px+)

/* Font Size Responsive Mapping */
// Current clamp()               → Tailwind Responsive
clamp(3rem, 8vw, 5.5rem)       → text-4xl md:text-6xl lg:text-7xl
clamp(1.5rem, 4vw, 2rem)       → text-2xl md:text-3xl lg:text-4xl
clamp(1rem, 2vw, 1.25rem)      → text-base md:text-lg lg:text-xl

/* Spacing Responsive Mapping */
// Current                      → Tailwind Responsive
padding: 1rem 2rem;            → px-4 py-4 md:px-8
margin: 2rem auto;             → mx-auto my-8
gap: 0.5rem;                   → gap-2 md:gap-4

/* Layout Responsive Mapping */
// Current                      → Tailwind Responsive
flex-direction: column;        → flex-col md:flex-row
display: none;                 → hidden md:block
position: relative;            → relative
position: fixed;               → fixed (no responsive needed)

/* Background Responsive Mapping */
// Current                      → Tailwind Responsive
background-size: cover;        → bg-cover
background-position: center;   → bg-center
background-attachment: fixed;  → bg-fixed (use sparingly)`}
            </pre>
          </div>

          {/* Animation & Interaction Notes */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Animation & Interaction Notes</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current animations and interactive behaviors for migration reference</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* ANIMATION INVENTORY */

/* 1. Fade In Up Animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

// Shadcn/Tailwind Migration:
// Option A: Custom CSS class
@layer components {
  .animate-fade-in-up {
    animation: fadeInUp 1.2s ease-out;
  }
}

// Option B: Framer Motion (recommended)
import { motion } from 'framer-motion'
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>

/* 2. Bounce Animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

// Tailwind has built-in: animate-bounce
<div className="animate-bounce">

/* 3. Hover Animations */
.floating-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(212, 165, 165, 0.4);
}

// Shadcn/Tailwind Migration:
<Button className="hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/40 transition-all duration-300">

/* INTERACTION BEHAVIORS */

/* 1. Scroll-triggered animations */
// Current: CSS animations triggered on page load
// Migration: Use Intersection Observer or Framer Motion

// Intersection Observer example:
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    },
    { threshold: 0.1 }
  )
  
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])

// Framer Motion example:
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>

/* 2. Background image loading */
// Current: Direct CSS background-image
// Migration: Consider using Next.js Image or lazy loading

/* 3. Responsive animations */
// Current: Same animations on all devices
// Migration: Consider reduced motion and mobile performance

/* PERFORMANCE CONSIDERATIONS */
- Use transform and opacity for animations (GPU accelerated)
- Consider prefers-reduced-motion media query
- Lazy load background images
- Use will-change property sparingly
- Consider using CSS contain property for complex animations`}
            </pre>
          </div>

          {/* Dependency Analysis */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Dependency Analysis</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>External dependencies and migration strategies</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* CURRENT DEPENDENCIES */

/* 1. Custom Components */
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

// Migration Strategy:
// - CTAButton → shadcn Button component
// - Icon → Lucide React icons

/* 2. CSS Dependencies */
// Design tokens from tokens.css
// Custom fonts (Playfair Display, Dancing Script, Montserrat)
// Custom animations

/* 3. React Dependencies */
// Standard React hooks (useState, useEffect for scroll behavior)
// React Router for navigation

/* MIGRATION DEPENDENCIES TO ADD */

/* 1. Shadcn/ui Components */
npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx
npm install tailwind-merge

/* 2. Icons */
npm install lucide-react

/* 3. Animation Libraries (Optional) */
npm install framer-motion          // For complex animations
npm install @tailwindcss/container-queries // For container queries

/* 4. Utility Libraries */
npm install @tailwindcss/typography // For prose styling
npm install tailwindcss-animate     // For built-in animations

/* SHADCN COMPONENT EQUIVALENTS */

// Current → Shadcn
CTAButton → import { Button } from "@/components/ui/button"
Icon → import { Calendar, ChevronDown } from "lucide-react"

/* CUSTOM UTILITIES TO CREATE */

// 1. Font family utilities
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      'display': ['Playfair Display', 'serif'],
      'script': ['Dancing Script', 'cursive'],
      'body': ['Montserrat', 'sans-serif'],
    }
  }
}

// 2. Color utilities (if not using CSS variables)
colors: {
  'champagne-gold': '#E4C896',
  'dusty-rose': '#9D6B7B',
  'warm-walnut': '#6B4E3D',
  'cream-pearl': '#FBF8F4',
}

// 3. Animation utilities
// components.css
@layer components {
  .animate-fade-in-up {
    animation: fadeInUp 1.2s ease-out;
  }
}

/* MIGRATION CHECKLIST */
□ Install shadcn/ui CLI
□ Set up component library structure
□ Convert CTAButton to Button variants
□ Replace Icon system with Lucide React
□ Convert CSS classes to Tailwind utilities
□ Set up custom font families
□ Implement animation system (CSS or Framer Motion)
□ Set up TypeScript interfaces
□ Test responsive behavior
□ Performance audit (Core Web Vitals)

/* BREAKING CHANGES TO CONSIDER */
- CSS variable system → Tailwind CSS variables or classes
- Custom button variants → Button component variants
- Icon system → Lucide React icon imports
- Animation triggers → New animation system
- CSS file structure → Component-scoped styles`}
            </pre>
          </div>

          {/* Hero Props & Values Documentation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Hero Props & Values Documentation</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Complete list of hero component props and their possible values for easy migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* HERO COMPONENT PROPS & VALUES */

// Height Variants
height: "sm" | "md" | "lg" | "xl" | "screen"
- "sm": 50vh (small hero for sub-pages)
- "md": 75vh (medium hero for feature pages) 
- "lg": 85vh (large hero for landing pages)
- "xl": 100vh (extra large for home page)
- "screen": 100vh with safe area (mobile-optimized)

// Overlay Variants
overlay: "none" | "soft" | "medium" | "strong" | "gradient"
- "none": No overlay (0% opacity)
- "soft": Light overlay (20% opacity) 
- "medium": Medium overlay (40% opacity)
- "strong": Dark overlay (60% opacity)
- "gradient": Custom gradient overlay (30-70%)

// Text Alignment
align: "left" | "center" | "right"
- "left": Left-aligned text (default)
- "center": Center-aligned text
- "right": Right-aligned text

// Content Props
title: string (required)
kicker?: string (optional pre-title text)
description?: string (optional hero description)
image: string (required background image URL)
imageAlt: string (required for accessibility)

// Call-to-Action Props
primaryAction?: {
  text: string
  href: string
  variant?: "primary" | "secondary" | "outline"
}
secondaryAction?: {
  text: string  
  href: string
  variant?: "secondary" | "outline" | "ghost"
}

// Behavioral Props
scrollIndicator?: boolean (show/hide scroll arrow)
floatingCTA?: boolean (show/hide floating CTA button)
animation?: "fade" | "slide" | "zoom" | "none"
parallax?: boolean (enable parallax scrolling)

/* USAGE EXAMPLES */

// Home Page Hero (Full Screen)
<Hero 
  height="screen"
  overlay="gradient" 
  align="center"
  title="Rum River Wedding Barn"
  kicker="Where Dreams Begin"
  description="Nestled along Minnesota's scenic Rum River..."
  image="/images/venue/barn-exterior-full-view.jpg"
  imageAlt="Historic wedding barn exterior with evening lighting"
  primaryAction={{ text: "Schedule Your Visit", href: "/contact" }}
  secondaryAction={{ text: "View Gallery", href: "/gallery", variant: "outline" }}
  scrollIndicator={true}
  floatingCTA={true}
  animation="fade"
  parallax={true}
/>

// Sub-page Hero (Smaller)
<Hero
  height="md"
  overlay="medium"
  align="left"
  title="Our Gallery"
  description="Browse our collection of beautiful weddings"
  image="/images/gallery/hero-gallery.jpg"
  imageAlt="Wedding ceremony in the barn with string lights"
  scrollIndicator={false}
  floatingCTA={false}
  animation="slide"
/>

// Event Page Hero (Minimal)
<Hero
  height="sm"
  overlay="soft"
  align="center"
  title="Sarah & Michael"
  kicker="Real Wedding"
  image="/images/weddings/sarah-michael-hero.jpg"
  imageAlt="Sarah and Michael's wedding ceremony"
  animation="zoom"
/>`}
            </pre>
          </div>

          {/* Visual Examples Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Visual Examples Gallery</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Visual reference for all hero variants to help choose the right style for each page</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VISUAL EXAMPLES REFERENCE */

/* 1. HEIGHT VARIATIONS */
┌─────────────────────────────────────────────────────────┐
│ HEIGHT="screen" (100vh) - Home Page                    │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Large Hero Image with Gradient Overlay]            │ │  
│ │                                                     │ │
│ │          Where Dreams Begin                         │ │
│ │       RUM RIVER WEDDING BARN                        │ │
│ │                                                     │ │
│ │   Nestled along Minnesota's scenic Rum River...    │ │
│ │                                                     │ │
│ │     [Schedule Visit] [View Gallery]                 │ │
│ │                                                     │ │
│ │                      ↓                             │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HEIGHT="md" (75vh) - Feature Pages                     │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Medium Hero Image]                                 │ │
│ │                                                     │ │
│ │ Our Beautiful Gallery                               │ │
│ │ Browse stunning wedding photography                 │ │
│ │                                                     │ │
│ └─────────────────────────────────────────────────────┘ │
│ [Page Content Starts Here]                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HEIGHT="sm" (50vh) - Blog/Detail Pages                 │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Compact Hero]                                      │ │
│ │          Sarah & Michael                            │ │
│ │           Real Wedding                              │ │
│ └─────────────────────────────────────────────────────┘ │
│ [Article/Content Starts Immediately]                   │
└─────────────────────────────────────────────────────────┘

/* 2. OVERLAY VARIATIONS */
overlay="none" (0%)    [Clear Image] - For high contrast text
overlay="soft" (20%)   [Light Film] - For subtle text overlay
overlay="medium" (40%) [Medium Film] - Balanced readability  
overlay="strong" (60%) [Dark Film] - Maximum text contrast
overlay="gradient"     [Custom Gradient] - Artistic effect

/* 3. ALIGNMENT EXAMPLES */

// align="left" (Default)
┌─────────────────────────────────────┐
│ [Hero Image Background]             │
│                                     │
│ Where Dreams Begin                  │
│ RUM RIVER WEDDING BARN              │
│                                     │
│ Beautiful description text here...  │
│                                     │
│ [Button] [Button]                   │
└─────────────────────────────────────┘

// align="center"
┌─────────────────────────────────────┐
│ [Hero Image Background]             │
│                                     │
│          Where Dreams Begin         │
│       RUM RIVER WEDDING BARN        │
│                                     │
│    Beautiful description text...    │
│                                     │
│       [Button] [Button]             │
└─────────────────────────────────────┘

// align="right"
┌─────────────────────────────────────┐
│ [Hero Image Background]             │
│                                     │
│                 Where Dreams Begin  │
│              RUM RIVER WEDDING BARN │
│                                     │
│  ...Beautiful description text here │
│                                     │
│                 [Button] [Button]   │
└─────────────────────────────────────┘

/* 4. USE CASE MAPPING */
Home Page:        height="screen", overlay="gradient", align="center"
Feature Pages:    height="lg", overlay="medium", align="left"
Gallery:          height="md", overlay="soft", align="center"
Contact:          height="md", overlay="medium", align="left"
Blog Posts:       height="sm", overlay="strong", align="left"
Testimonials:     height="lg", overlay="soft", align="center"
Venue Details:    height="lg", overlay="medium", align="left"`}
            </pre>
          </div>

          {/* Fallback Image & Alt Text Guidance */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Fallback Image & Alt Text Guidance</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Image placeholder patterns and accessibility guidelines for content migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* FALLBACK IMAGE SYSTEM */

/* 1. Default Placeholder Images by Page Type */

// Home Page Fallback
defaultImages = {
  home: "/images/placeholders/hero-barn-default.jpg",
  alt: "Rustic wedding barn exterior with string lights at sunset"
}

// Feature Page Fallbacks  
featurePages = {
  gallery: "/images/placeholders/hero-gallery-default.jpg",
  contact: "/images/placeholders/hero-contact-default.jpg", 
  venue: "/images/placeholders/hero-venue-default.jpg",
  testimonials: "/images/placeholders/hero-testimonials-default.jpg"
}

// Blog/Event Fallbacks
blogDefaults = {
  wedding: "/images/placeholders/hero-wedding-default.jpg",
  event: "/images/placeholders/hero-event-default.jpg",
  seasonal: "/images/placeholders/hero-seasonal-default.jpg"
}

/* 2. Image Loading Strategy */

// Progressive Loading with Fallbacks
const HeroImage = ({ src, alt, fallback }) => {
  const [imageSrc, setImageSrc] = useState(fallback)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageSrc(src)
      setImageLoaded(true)
    }
    img.onerror = () => {
      setImageSrc(fallback) // Keep fallback on error
    }
    img.src = src
  }, [src, fallback])
  
  return (
    <div 
      className={\`hero-background \${imageLoaded ? 'loaded' : 'loading'}\`}
      style={{ backgroundImage: \`url(\${imageSrc})\` }}
      role="img" 
      aria-label={alt}
    />
  )
}

/* 3. Alt Text Best Practices */

// Good Alt Text Examples
✅ "Historic red barn wedding venue with exposed beams and chandelier lighting"
✅ "Bride and groom exchanging vows in rustic ceremony space with string lights"
✅ "Outdoor wedding reception setup with farm tables and greenery centerpieces"
✅ "Wedding party posing in front of weathered barn doors with floral arrangements"

// Bad Alt Text Examples  
❌ "Wedding photo"
❌ "Barn"
❌ "Image of venue"
❌ "DSC_0001.jpg"

/* 4. Alt Text Template System */

const altTextTemplates = {
  venue: "[Venue area] at Rum River Wedding Barn featuring [key visual elements]",
  ceremony: "Wedding ceremony in [location] with [notable details]", 
  reception: "Reception setup with [table style] and [decor elements]",
  couple: "[Couple names] [action/pose] [location/context]",
  detail: "[Item type] featuring [style/color] with [setting/background]"
}

// Usage Examples
altTextTemplates.venue
→ "Ceremony space at Rum River Wedding Barn featuring exposed beams and vintage chandeliers"

altTextTemplates.couple  
→ "Sarah and Michael sharing first dance on outdoor pavilion with sunset backdrop"

/* 5. Migration Content Checklist */

// Before Migration
□ Identify primary hero images for each page
□ Prepare fallback images (same aspect ratio)
□ Write descriptive alt text for all images
□ Optimize images for web (WebP, multiple sizes)
□ Test image loading on slow connections

// During Migration
□ Implement progressive loading
□ Set up error handling for missing images
□ Test accessibility with screen readers
□ Verify responsive image behavior
□ Check Core Web Vitals (LCP, CLS)

// After Migration
□ Audit all hero images for quality
□ Update alt text for accuracy
□ Monitor image loading performance
□ Create image optimization workflow
□ Document image requirements for content editors

/* 6. Image Specifications */

// Required Dimensions
Desktop: 1920x1080 (16:9) minimum
Tablet: 1024x768 (4:3) optimized 
Mobile: 768x1024 (3:4) optimized

// File Requirements
Format: WebP (with JPEG fallback)
Quality: 85% compression
Max File Size: 500KB for hero images
Naming: kebab-case with descriptive names

// Example File Structure
/images/heroes/
  ├── home-hero-barn-sunset.webp
  ├── gallery-hero-ceremony.webp  
  ├── contact-hero-venue-exterior.webp
  └── fallbacks/
      ├── default-barn-exterior.webp
      ├── default-ceremony-space.webp
      └── default-reception-setup.webp`}
            </pre>
          </div>

          {/* Token Value Mapping Table */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Token Value Mapping Table</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Complete CSS custom property mapping for quick verification and consistency</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* COMPLETE TOKEN MAPPING TABLE */

┌─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
│ CSS Property        │ Current Value       │ Design Token        │ Shadcn/Tailwind     │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ COLORS                                                                                │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ background          │ rgba(107,78,61,0.9) │ --warm-walnut       │ bg-amber-900/90     │
│ background          │ rgba(58,74,60,0.8)  │ --deep-forest       │ bg-slate-700/80     │
│ color               │ #E4C896             │ --champagne-gold    │ text-amber-200      │
│ color               │ #FBF8F4             │ --cream-pearl       │ text-amber-50       │
│ color               │ #9D6B7B             │ --dusty-rose        │ text-rose-400       │
│ background          │ #9D6B7B             │ --dusty-rose        │ bg-rose-400         │
│ border-color        │ #9D6B7B             │ --dusty-rose        │ border-rose-400     │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ SPACING                                                                               │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ padding             │ 1rem                │ --space-md          │ p-4                 │
│ padding             │ 2rem                │ --space-lg          │ p-8                 │
│ margin              │ 1rem                │ --space-md          │ m-4                 │
│ margin              │ 2rem                │ --space-lg          │ m-8                 │
│ margin              │ 3rem                │ --space-xl          │ m-12                │
│ gap                 │ 1rem                │ --space-md          │ gap-4               │
│ gap                 │ 2rem                │ --space-lg          │ gap-8               │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ TYPOGRAPHY                                                                            │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ font-family         │ 'Playfair Display'  │ --font-display      │ font-serif          │
│ font-family         │ 'Dancing Script'    │ --font-script       │ font-script         │
│ font-family         │ 'Montserrat'        │ --font-body         │ font-sans           │
│ font-size           │ clamp(3rem,8vw,5.5) │ --text-hero         │ text-4xl lg:text-7xl│
│ font-size           │ 1.75rem             │ --text-2xl          │ text-2xl            │
│ font-size           │ 1.25rem             │ --text-xl           │ text-xl             │
│ font-weight         │ 400                 │ --font-normal       │ font-normal         │
│ font-weight         │ 500                 │ --font-medium       │ font-medium         │
│ line-height         │ 1.1                 │ --leading-tight     │ leading-tight       │
│ line-height         │ 1.8                 │ --leading-relaxed   │ leading-relaxed     │
│ letter-spacing      │ -0.02em             │ --tracking-tight    │ tracking-tight      │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ LAYOUT                                                                                │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ min-height          │ 100vh               │ --height-screen     │ min-h-screen        │
│ min-height          │ 75vh                │ --height-3/4        │ min-h-[75vh]        │
│ min-height          │ 50vh                │ --height-1/2        │ min-h-[50vh]        │
│ max-width           │ 1200px              │ --container-max     │ max-w-6xl           │
│ max-width           │ 700px               │ --content-max       │ max-w-2xl           │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BORDERS & RADIUS                                                                      │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ border-radius       │ 8px                 │ --radius-md         │ rounded-lg          │
│ border-radius       │ 50px                │ --radius-full       │ rounded-full        │
│ border-radius       │ 20px                │ --radius-lg         │ rounded-2xl         │
│ border-width        │ 1px                 │ --border-thin       │ border              │
│ border-width        │ 2px                 │ --border-medium     │ border-2            │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ SHADOWS                                                                               │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ box-shadow          │ 0 10px 30px rgba... │ --shadow-lg         │ shadow-lg           │
│ box-shadow          │ 0 15px 40px rgba... │ --shadow-xl         │ shadow-xl           │
│ box-shadow          │ 0 4px 6px rgba...   │ --shadow-md         │ shadow-md           │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ ANIMATIONS                                                                            │
├─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ transition          │ all 0.3s ease       │ --transition-normal │ transition-all      │
│ animation           │ fadeInUp 1.2s       │ --animate-fade-up   │ animate-fadeInUp    │
│ animation           │ bounce 2s infinite  │ --animate-bounce    │ animate-bounce      │
│ transform           │ translateY(-3px)    │ --                  │ -translate-y-1      │
└─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘

/* VERIFICATION CHECKLIST */

// Token Consistency Check
□ All CSS custom properties defined in tokens.css
□ No hardcoded values in component CSS
□ Consistent naming convention (kebab-case)
□ Proper fallback values for older browsers
□ Mobile-first responsive values defined

// Shadcn Migration Check  
□ All colors mapped to Tailwind color palette
□ Spacing values align with Tailwind scale
□ Typography tokens match Tailwind typography
□ Custom utilities created for brand-specific values
□ Component variants properly configured

// Usage Examples

// Before (CSS Custom Properties)
.hero-content {
  padding: var(--space-lg);
  color: var(--cream-pearl);
  font-family: var(--font-display);
  font-size: var(--text-hero);
}

// After (Tailwind Classes)
<div className="p-8 text-amber-50 font-serif text-4xl lg:text-7xl">
  
// Or with shadcn components
<div className={cn(
  "p-8 text-amber-50 font-serif",
  "text-4xl lg:text-7xl"
)}>`}
            </pre>
          </div>

          {/* CMS Field Suggestions */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CMS Field Suggestions</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Sanity CMS schema and field mapping for hero content management</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SANITY CMS HERO SCHEMA */

// schemas/hero.js
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline text (required)',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'kicker',
      title: 'Pre-title Text',
      type: 'string', 
      description: 'Script text above title (optional)',
      validation: Rule => Rule.max(30)
    },
    {
      name: 'description',
      title: 'Hero Description',
      type: 'text',
      description: 'Supporting text below title',
      validation: Rule => Rule.max(200)
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette']
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility',
          validation: Rule => Rule.required()
        },
        {
          name: 'caption',
          title: 'Image Caption',
          type: 'string',
          description: 'Optional image credit or caption'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'height',
      title: 'Hero Height',
      type: 'string',
      options: {
        list: [
          {title: 'Small (50vh)', value: 'sm'},
          {title: 'Medium (75vh)', value: 'md'},
          {title: 'Large (85vh)', value: 'lg'},
          {title: 'Extra Large (100vh)', value: 'xl'},
          {title: 'Full Screen', value: 'screen'}
        ],
        layout: 'radio'
      },
      initialValue: 'lg'
    },
    {
      name: 'overlay',
      title: 'Background Overlay',
      type: 'string',
      options: {
        list: [
          {title: 'None (0%)', value: 'none'},
          {title: 'Soft (20%)', value: 'soft'},
          {title: 'Medium (40%)', value: 'medium'},
          {title: 'Strong (60%)', value: 'strong'},
          {title: 'Custom Gradient', value: 'gradient'}
        ],
        layout: 'dropdown'
      },
      initialValue: 'medium'
    },
    {
      name: 'textAlign',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'left'
    },
    {
      name: 'primaryAction',
      title: 'Primary Call-to-Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'href',
          title: 'Link URL',
          type: 'url',
          validation: Rule => Rule.required()
        },
        {
          name: 'variant',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              {title: 'Primary (Filled)', value: 'primary'},
              {title: 'Secondary (Outlined)', value: 'secondary'},
              {title: 'Ghost (Text Only)', value: 'ghost'}
            ]
          },
          initialValue: 'primary'
        }
      ]
    },
    {
      name: 'secondaryAction',
      title: 'Secondary Call-to-Action',
      type: 'object',
      description: 'Optional second button',
      fields: [
        {
          name: 'text', 
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'href',
          title: 'Link URL', 
          type: 'url'
        },
        {
          name: 'variant',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              {title: 'Secondary (Outlined)', value: 'secondary'},
              {title: 'Ghost (Text Only)', value: 'ghost'},
              {title: 'Link (Underlined)', value: 'link'}
            ]
          },
          initialValue: 'secondary'
        }
      ]
    },
    {
      name: 'features',
      title: 'Additional Features',
      type: 'object',
      fields: [
        {
          name: 'scrollIndicator',
          title: 'Show Scroll Indicator',
          type: 'boolean',
          description: 'Display animated scroll arrow',
          initialValue: false
        },
        {
          name: 'floatingCTA',
          title: 'Show Floating CTA',
          type: 'boolean',
          description: 'Fixed position call-to-action button',
          initialValue: false
        },
        {
          name: 'parallax',
          title: 'Enable Parallax',
          type: 'boolean',
          description: 'Parallax scrolling effect',
          initialValue: false
        },
        {
          name: 'animation',
          title: 'Entrance Animation',
          type: 'string',
          options: {
            list: [
              {title: 'Fade In', value: 'fade'},
              {title: 'Slide Up', value: 'slide'},
              {title: 'Zoom In', value: 'zoom'},
              {title: 'None', value: 'none'}
            ]
          },
          initialValue: 'fade'
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines (50-60 chars)',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription', 
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines (150-160 chars)',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'ogImage',
          title: 'Social Media Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px)'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'kicker',
      media: 'heroImage'
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Hero',
        subtitle: subtitle || 'No kicker text',
        media
      }
    }
  }
}

/* CONTENT FIELD MAPPING */

// Field Name → Component Prop → Usage
title → title → Main headline text
kicker → kicker → Script text above title  
description → description → Supporting paragraph
heroImage → image → Background image URL
heroImage.alt → imageAlt → Accessibility text
height → height → Component height variant
overlay → overlay → Background overlay strength
textAlign → align → Text alignment direction
primaryAction → primaryAction → Main CTA button
secondaryAction → secondaryAction → Optional second button
features.scrollIndicator → scrollIndicator → Show scroll arrow
features.floatingCTA → floatingCTA → Show floating button
features.parallax → parallax → Enable parallax effect
features.animation → animation → Entrance animation type

/* USAGE EXAMPLE IN REACT */

import { Hero } from '@/components/ui/hero'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'

const heroQuery = groq\`
  *[_type == "hero" && slug.current == $slug][0] {
    title,
    kicker,
    description,
    heroImage {
      asset->,
      alt,
      hotspot
    },
    height,
    overlay,
    textAlign,
    primaryAction,
    secondaryAction,
    features
  }
\`

export default async function PageWithHero({ slug }) {
  const heroData = await client.fetch(heroQuery, { slug })
  
  return (
    <Hero
      title={heroData.title}
      kicker={heroData.kicker}
      description={heroData.description}
      image={heroData.heroImage.asset.url}
      imageAlt={heroData.heroImage.alt}
      height={heroData.height}
      overlay={heroData.overlay}
      align={heroData.textAlign}
      primaryAction={heroData.primaryAction}
      secondaryAction={heroData.secondaryAction}
      scrollIndicator={heroData.features.scrollIndicator}
      floatingCTA={heroData.features.floatingCTA}
      parallax={heroData.features.parallax}
      animation={heroData.features.animation}
    />
  )
}`}
            </pre>
          </div>

          {/* Content Migration Commentary */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Content Migration Commentary</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Page-specific guidance and migration context for content editors</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* CONTENT MIGRATION BY PAGE TYPE */

┌─────────────────────────────────────────────────────────────────────────────────┐
│ HOME PAGE HERO - Current Implementation                                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Current Settings:                                                               │
│ • Title: "Rum River Wedding Barn"                                              │
│ • Kicker: "Where Dreams Begin"                                                 │
│ • Description: "Nestled along Minnesota's scenic Rum River..."                │
│ • Image: barn-exterior-full-deck-view-evening.jpg                              │
│ • Height: Full screen (100vh)                                                  │
│ • Overlay: Custom gradient (warm-walnut to deep-forest)                       │
│ • Alignment: Center                                                             │
│ • Features: Scroll indicator, floating CTA, fade animation                     │
│                                                                                 │
│ Migration Notes:                                                                │
│ ➤ This is the primary brand hero - maintain current messaging                  │
│ ➤ Evening barn image creates warmth - keep similar lighting                    │
│ ➤ Full screen height is intentional for impact                                 │
│ ➤ Gradient overlay helps text readability                                      │
│ ➤ Center alignment works best for home page branding                           │
│                                                                                 │
│ Content Strategy:                                                               │
│ ✓ Hero should communicate: rustic elegance, Minnesota location, celebration    │
│ ✓ CTA focuses on "Schedule Visit" - primary conversion goal                    │
│ ✓ Script font "Where Dreams Begin" adds romantic feeling                       │
│ ✓ Support text mentions key differentiators (Rum River, historic, modern)     │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ GALLERY PAGE HERO - Recommended Implementation                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Recommended Settings:                                                           │
│ • Title: "Our Gallery"                                                         │
│ • Kicker: "Real Weddings"                                                      │
│ • Description: "Browse stunning photography from real weddings at our venue"  │
│ • Image: interior-ceremony-string-lights.jpg                                   │
│ • Height: Medium (75vh)                                                         │
│ • Overlay: Soft (20%) - let image quality show                                 │
│ • Alignment: Center                                                             │
│ • Features: No scroll indicator, no floating CTA                               │
│                                                                                 │
│ Migration Notes:                                                                │
│ ➤ Gallery heroes should showcase venue beauty                                  │
│ ➤ Lighter overlay lets photography shine through                               │
│ ➤ Medium height leaves room for gallery grid below                             │
│ ➤ Center alignment works well for gallery browsing context                     │
│                                                                                 │
│ Content Strategy:                                                               │
│ ✓ Focus on visual storytelling over text                                       │
│ ✓ Hero sets expectation for high-quality photography                           │
│ ✓ "Real Weddings" kicker builds authenticity and trust                        │
│ ✓ Description should mention venue connection                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CONTACT PAGE HERO - Recommended Implementation                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Recommended Settings:                                                           │
│ • Title: "Let's Plan Your Perfect Day"                                         │
│ • Kicker: "Get In Touch"                                                       │
│ • Description: "Ready to schedule your venue tour or ask questions?"          │
│ • Image: venue-exterior-front-entrance.jpg                                     │
│ • Height: Medium (75vh)                                                         │
│ • Overlay: Medium (40%) - ensure form readability below                        │
│ • Alignment: Left                                                               │
│ • Features: No scroll indicator, no floating CTA (form is main CTA)           │
│                                                                                 │
│ Migration Notes:                                                                │
│ ➤ Contact heroes should feel welcoming and accessible                          │
│ ➤ Left alignment works better with forms below                                 │
│ ➤ Medium height leaves room for contact form                                   │
│ ➤ Image should show approachable entrance/exterior                             │
│                                                                                 │
│ Content Strategy:                                                               │
│ ✓ Hero should remove barriers to contacting                                    │
│ ✓ "Perfect Day" language maintains emotional connection                        │
│ ✓ Questions approach invites engagement                                         │
│ ✓ Venue tour mention provides clear next step                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ BLOG/REAL WEDDING HERO - Recommended Implementation                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Recommended Settings:                                                           │
│ • Title: "[Couple Names]" (e.g., "Sarah & Michael")                           │
│ • Kicker: "Real Wedding" or "[Season] [Year]"                                  │
│ • Description: "[Brief ceremony description or quote]"                        │
│ • Image: [Best ceremony/couple photo from wedding]                             │
│ • Height: Small (50vh) - more focus on content below                           │
│ • Overlay: Strong (60%) - ensure text over couple photos                       │
│ • Alignment: Left or Center (depending on image composition)                   │
│ • Features: No additional features - content focused                           │
│                                                                                 │
│ Migration Notes:                                                                │
│ ➤ Blog heroes should highlight the couple and story                            │
│ ➤ Smaller height leaves room for article content                               │
│ ➤ Strong overlay ensures readability over wedding photos                       │
│ ➤ Each wedding should feel unique and personal                                 │
│                                                                                 │
│ Content Strategy:                                                               │
│ ✓ Hero should make couples feel represented                                     │
│ ✓ Season/date in kicker helps with recency and relevance                      │
│ ✓ Description could include couple quote or ceremony highlight                 │
│ ✓ Image should be best photo that represents the day                           │
└─────────────────────────────────────────────────────────────────────────────────┘

/* CONTENT MIGRATION WORKFLOW */

// Phase 1: Audit Current Content
□ List all pages that need heroes
□ Identify existing hero images and quality
□ Document current messaging and tone
□ Note conversion goals for each page
□ Check SEO performance of current heroes

// Phase 2: Plan Content Strategy  
□ Define hero purpose for each page type
□ Create messaging hierarchy (title > kicker > description)
□ Plan image requirements and sourcing
□ Set success metrics for each hero
□ Create content templates for consistency

// Phase 3: Content Creation
□ Write new hero copy following brand voice
□ Source or create hero images
□ Optimize images for web performance
□ Write accessibility-focused alt text
□ Test messaging with target audience

// Phase 4: Implementation
□ Set up CMS fields and validation
□ Migrate content to new system
□ Test all hero variants and responsive behavior
□ Verify SEO and social media previews
□ Train content editors on new system

// Phase 5: Optimization
□ Monitor conversion rates by page
□ A/B test hero messaging and imagery
□ Collect user feedback on clarity and appeal
□ Iterate based on performance data
□ Document best practices for future content`}
            </pre>
          </div>

          {/* Hero Block System Architecture */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Hero Block System Architecture</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Recommended component structure and best practices for scalable hero system</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* HERO BLOCK SYSTEM ARCHITECTURE */

┌─────────────────────────────────────────────────────────────────────────────────┐
│ COMPONENT HIERARCHY                                                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ src/components/blocks/                                                          │
│ ├── Hero.tsx                    ← Base hero component (primitive)              │
│ ├── HomeHero.tsx               ← Home page preset                              │
│ ├── PageHero.tsx               ← Standard page preset                          │
│ └── BlogHero.tsx               ← Blog/article preset                           │
│                                                                                 │
│ src/components/ui/                                                              │
│ ├── button.tsx                 ← Shadcn button component                       │
│ └── image.tsx                  ← Optimized image component                     │
│                                                                                 │
│ src/lib/                                                                        │
│ ├── utils.ts                   ← Class merging utilities                       │
│ └── constants.ts               ← Hero configuration constants                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

/* 1. BASE HERO COMPONENT (Hero.tsx) */

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/image"
import { ChevronDown } from "lucide-react"

// Base props interface with full flexibility
export interface HeroProps {
  // Content
  title: string
  kicker?: string
  description?: string
  
  // Visual
  image: string
  imageAlt: string
  height?: "sm" | "md" | "lg" | "xl" | "screen"
  overlay?: "none" | "soft" | "medium" | "strong" | "gradient"
  align?: "left" | "center" | "right"
  
  // Actions
  primaryAction?: {
    text: string
    href: string
    variant?: "primary" | "secondary" | "outline"
  }
  secondaryAction?: {
    text: string
    href: string
    variant?: "secondary" | "outline" | "ghost"
  }
  
  // Features
  scrollIndicator?: boolean
  floatingCTA?: boolean
  animation?: "fade" | "slide" | "zoom" | "none"
  parallax?: boolean
  
  // Styling
  className?: string
  contentClassName?: string
}

export const Hero = ({
  title,
  kicker,
  description,
  image,
  imageAlt,
  height = "lg",
  overlay = "medium",
  align = "left",
  primaryAction,
  secondaryAction,
  scrollIndicator = false,
  floatingCTA = false,
  animation = "fade",
  parallax = false,
  className,
  contentClassName
}: HeroProps) => {
  const heightClasses = {
    sm: "min-h-[50vh]",
    md: "min-h-[75vh]",
    lg: "min-h-[85vh]", 
    xl: "min-h-[100vh]",
    screen: "min-h-screen"
  }
  
  const overlayClasses = {
    none: "before:opacity-0",
    soft: "before:opacity-20",
    medium: "before:opacity-40",
    strong: "before:opacity-60",
    gradient: "before:bg-gradient-to-r before:from-amber-900/90 before:to-slate-700/80"
  }
  
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  }
  
  const animationClasses = {
    fade: "animate-fade-in",
    slide: "animate-slide-up",
    zoom: "animate-zoom-in",
    none: ""
  }
  
  return (
    <section 
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heightClasses[height],
        className
      )}
    >
      {/* Background Image */}
      <OptimizedImage
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority={height === "screen" || height === "xl"}
        sizes="100vw"
      />
      
      {/* Overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-black",
          overlayClasses[overlay]
        )}
      />
      
      {/* Content */}
      <div className={cn(
        "relative z-10 container mx-auto px-4 flex flex-col",
        "max-w-4xl",
        alignClasses[align],
        animationClasses[animation],
        contentClassName
      )}>
        {kicker && (
          <span className="font-script text-2xl text-amber-200 mb-4">
            {kicker}
          </span>
        )}
        
        <h1 className={cn(
          "font-serif font-normal text-white mb-6",
          "text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
        )}>
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-amber-50 mb-8 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
        
        {(primaryAction || secondaryAction) && (
          <div className="flex gap-4 flex-wrap">
            {primaryAction && (
              <Button 
                variant={primaryAction.variant || "default"}
                size="lg"
                asChild
              >
                <a href={primaryAction.href}>{primaryAction.text}</a>
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant={secondaryAction.variant || "outline"}
                size="lg"
                asChild
              >
                <a href={secondaryAction.href}>{secondaryAction.text}</a>
              </Button>
            )}
          </div>
        )}
      </div>
      
      {/* Scroll Indicator */}
      {scrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-50 animate-bounce">
          <div className="text-center">
            <p className="text-sm mb-2">Discover Your Perfect Day</p>
            <ChevronDown className="w-6 h-6 mx-auto" />
          </div>
        </div>
      )}
    </section>
  )
}

/* 2. PRESET COMPONENTS */

// HomeHero.tsx - Fixed settings for home page
export const HomeHero = ({
  title = "Rum River Wedding Barn",
  kicker = "Where Dreams Begin",
  description = "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance.",
  image,
  imageAlt,
  ...props
}: Partial<HeroProps>) => (
  <Hero
    title={title}
    kicker={kicker}
    description={description}
    image={image}
    imageAlt={imageAlt}
    height="screen"
    overlay="gradient"
    align="center"
    scrollIndicator
    floatingCTA
    animation="fade"
    primaryAction={{
      text: "Schedule Your Visit",
      href: "/contact",
      variant: "primary"
    }}
    secondaryAction={{
      text: "View Gallery", 
      href: "/gallery",
      variant: "outline"
    }}
    {...props}
  />
)

// PageHero.tsx - Standard page preset
export const PageHero = ({
  height = "md",
  overlay = "medium",
  align = "left",
  ...props
}: Partial<HeroProps>) => (
  <Hero
    height={height}
    overlay={overlay}
    align={align}
    animation="slide"
    {...props}
  />
)

// BlogHero.tsx - Blog/article preset
export const BlogHero = ({
  height = "sm",
  overlay = "strong", 
  align = "left",
  ...props
}: Partial<HeroProps>) => (
  <Hero
    height={height}
    overlay={overlay}
    align={align}
    animation="zoom"
    {...props}
  />
)

/* 3. USAGE EXAMPLES */

// Home page
<HomeHero 
  image="/images/barn-sunset.jpg"
  imageAlt="Historic barn at sunset"
/>

// Custom feature page
<PageHero
  title="Our Gallery"
  description="Browse beautiful wedding photography"
  image="/images/gallery-hero.jpg"
  imageAlt="Wedding ceremony with string lights"
  align="center"
/>

// Blog post
<BlogHero
  title="Sarah & Michael"
  kicker="Fall Wedding 2024"
  description="A beautiful October celebration"
  image="/images/sarah-michael.jpg"
  imageAlt="Sarah and Michael's wedding ceremony"
/>

/* 4. BEST PRACTICES */

// ✅ DO:
// - Use preset components for consistency
// - Keep base Hero flexible for edge cases
// - Pass only necessary props to presets
// - Use semantic prop names
// - Provide fallback values
// - Optimize images with next/image
// - Test responsive behavior
// - Write descriptive alt text

// ❌ DON'T:
// - Hardcode values in preset components
// - Skip image optimization
// - Forget responsive considerations
// - Ignore accessibility requirements
// - Create too many preset variants
// - Use generic alt text
// - Override preset behavior frequently`}
            </pre>
          </div>

          {/* Versioning & Best Practices */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Versioning & Best Practices</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Version control, testing guidelines, and future-proofing strategies</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* HERO SYSTEM VERSIONING & BEST PRACTICES */

/* VERSION HISTORY */
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Hero v1.0 - Baseline for Migration (Current)                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│ • Single hero implementation with CSS classes                                  │
│ • Fixed design with hardcoded values                                           │
│ • Limited customization options                                                │
│ • Manual image optimization                                                     │
│ • Basic responsive behavior                                                     │
│                                                                                 │
│ Hero v2.0 - Shadcn Migration (Target)                                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│ • Component-based architecture with TypeScript                                 │
│ • Props-driven customization system                                             │
│ • Design token integration                                                      │
│ • Automatic image optimization                                                  │
│ • Advanced responsive features                                                  │
│ • CMS integration ready                                                         │
│ • Accessibility improvements                                                    │
│ • Performance optimizations                                                     │
│                                                                                 │
│ Hero v3.0 - Future Enhancements (Planned)                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│ • Video background support                                                      │
│ • Advanced animation library integration                                        │
│ • A/B testing capabilities                                                      │
│ • Dynamic content personalization                                               │
│ • Advanced parallax effects                                                     │
│ • Multi-language support                                                        │
│ • AI-powered content suggestions                                                │
└─────────────────────────────────────────────────────────────────────────────────┘

/* MIGRATION BEST PRACTICES */

// 1. Gradual Migration Strategy
□ Phase 1: Set up component infrastructure
□ Phase 2: Migrate home page hero first (highest impact)
□ Phase 3: Migrate feature pages (gallery, contact, venue)
□ Phase 4: Migrate blog/article heroes
□ Phase 5: Optimize and test all implementations
□ Phase 6: Remove legacy CSS and components

// 2. Component Design Principles
✅ Single Responsibility: Each component has one clear purpose
✅ Composition Over Inheritance: Use props and slots vs extending
✅ Progressive Enhancement: Works without JavaScript
✅ Accessibility First: WCAG 2.1 AA compliance
✅ Performance Conscious: Lazy loading, optimized images
✅ Type Safety: Full TypeScript coverage
✅ Test Coverage: Unit, integration, and visual regression tests

// 3. Breaking Change Management
interface HeroProps {
  // Required props (breaking changes require major version)
  title: string
  image: string
  imageAlt: string
  
  // Optional props (new features are non-breaking)
  kicker?: string
  description?: string
  height?: HeroHeight
  
  // Deprecated props (provide migration path)
  /** @deprecated Use height="lg" instead */
  size?: "large"
}

// 4. Testing Strategy

// Visual Regression Testing
// test/hero.visual.spec.ts
import { test, expect } from '@playwright/test'

test('hero variants match designs', async ({ page }) => {
  // Test all height variants
  for (const height of ['sm', 'md', 'lg', 'xl', 'screen']) {
    await page.goto(\`/test/hero?height=\${height}\`)
    await expect(page).toHaveScreenshot(\`hero-\${height}.png\`)
  }
  
  // Test all overlay variants
  for (const overlay of ['none', 'soft', 'medium', 'strong', 'gradient']) {
    await page.goto(\`/test/hero?overlay=\${overlay}\`)
    await expect(page).toHaveScreenshot(\`hero-overlay-\${overlay}.png\`)
  }
})

// Accessibility Testing
test('hero meets accessibility standards', async ({ page }) => {
  await page.goto('/test/hero')
  
  // Check for proper heading hierarchy
  const h1 = page.locator('h1')
  await expect(h1).toBeVisible()
  
  // Check for alt text on background images
  const heroSection = page.locator('[role="img"]')
  await expect(heroSection).toHaveAttribute('aria-label')
  
  // Check keyboard navigation
  await page.keyboard.press('Tab')
  const firstButton = page.locator('button:focus')
  await expect(firstButton).toBeVisible()
})

// Performance Testing
test('hero loads performantly', async ({ page }) => {
  await page.goto('/test/hero')
  
  // Check Largest Contentful Paint
  const lcp = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        resolve(lastEntry.startTime)
      }).observe({ entryTypes: ['largest-contentful-paint'] })
    })
  })
  
  expect(lcp).toBeLessThan(2500) // Target: < 2.5s
})

// 5. Documentation Standards

/**
 * Hero component for page headers with background images
 * 
 * @example
 * // Basic usage
 * <Hero 
 *   title="Page Title"
 *   image="/path/to/image.jpg"
 *   imageAlt="Description of image"
 * />
 * 
 * @example  
 * // Advanced usage with all options
 * <Hero
 *   title="Rum River Wedding Barn"
 *   kicker="Where Dreams Begin"
 *   description="Beautiful venue description"
 *   image="/images/hero.jpg"
 *   imageAlt="Historic barn at sunset"
 *   height="screen"
 *   overlay="gradient"
 *   align="center"
 *   primaryAction={{ text: "Book Now", href: "/contact" }}
 *   scrollIndicator
 * />
 */

// 6. Performance Monitoring

// Core Web Vitals Tracking
function trackHeroPerformance() {
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]
    
    // Track if hero image is LCP element
    if (lastEntry.element?.closest('.hero')) {
      analytics.track('hero_lcp', {
        duration: lastEntry.startTime,
        element: 'hero_image'
      })
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] })
  
  // Cumulative Layout Shift (CLS)
  new PerformanceObserver((list) => {
    let clsValue = 0
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value
      }
    }
    
    analytics.track('hero_cls', { value: clsValue })
  }).observe({ entryTypes: ['layout-shift'] })
}

// 7. Future-Proofing Considerations

// Extensible Architecture
interface HeroExtensions {
  // Video background support (v3.0)
  videoSrc?: string
  videoPoster?: string
  
  // Advanced animations (v3.0) 
  motionPreset?: 'subtle' | 'moderate' | 'expressive'
  
  // Personalization (v3.0)
  variant?: 'default' | 'returning-visitor' | 'mobile-optimized'
  
  // A/B testing (v3.0)
  testVariant?: string
}

// Backwards Compatibility
type LegacyHeroProps = HeroProps & {
  /** @deprecated Use height prop instead */
  size?: 'small' | 'medium' | 'large'
}

// Migration helper function
function migrateLegacyProps(props: LegacyHeroProps): HeroProps {
  const { size, ...newProps } = props
  
  if (size) {
    console.warn('Hero: size prop is deprecated, use height instead')
    const heightMap = {
      small: 'sm',
      medium: 'md', 
      large: 'lg'
    } as const
    
    newProps.height = heightMap[size]
  }
  
  return newProps
}

/* QUALITY CHECKLIST */

// Before Production Release
□ All hero variants tested across browsers
□ Responsive behavior verified on devices
□ Accessibility audit completed (WAVE, axe)
□ Performance benchmarks meet targets
□ Visual regression tests passing
□ TypeScript types are accurate
□ Documentation is up to date
□ Migration path from v1.0 documented
□ Rollback plan prepared
□ Team training completed

// Post-Release Monitoring
□ Core Web Vitals tracking active
□ Error monitoring configured
□ User feedback collection setup
□ A/B testing framework ready
□ Performance regression alerts
□ Accessibility monitoring ongoing
□ Documentation feedback loop
□ Version deprecation timeline

/* MAINTENANCE SCHEDULE */

// Monthly
□ Review performance metrics
□ Update dependencies
□ Check for accessibility regressions
□ Analyze user feedback

// Quarterly  
□ Design system alignment review
□ Browser compatibility testing
□ Documentation accuracy audit
□ Performance optimization review

// Annually
□ Major version planning
□ Architecture review
□ Technology stack evaluation
□ Competitor analysis
□ User research synthesis`}
            </pre>
          </div>

        </div>
      </section>
    </>
  )
}