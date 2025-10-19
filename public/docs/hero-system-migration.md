---
type: design-system-migration
component: Hero
framework: React + Next.js + Design Tokens (Style Dictionary)
target: shadcn/ui Hero with semantic token integration
migration-goal: Align hero system with shadcn patterns while preserving romantic theme tokens
output-format: src/components/ui/hero.tsx + token mappings in globals.css
ai-action: refactor legacy hero CSS, preserve all content patterns and accessibility, replace hardcoded colors with semantic tokens
stack: Next.js + Lucide React + next/image + Framer Motion (optional) + color-mix() CSS
---

# Hero System Migration Documentation

<!--
Design Intent:
- Maintain exact romantic theme aesthetic (dusty-rose, warm-walnut, champagne-gold palette)
- Preserve accessibility (focus management, ARIA landmarks, screen reader support)
- Keep dark mode parity with dual strategy (:root.dark + html[data-theme="dark"])
- Do NOT simplify background image loading logic - maintain optimization
- Preserve all layout behaviors (full-screen, medium, small variants)
- Keep custom gradient overlays and animation patterns
-->

## System Context
- **Legacy Component**: HeroStandalone (src/pages/HeroStandalone.jsx)
- **Target**: shadcn/ui Hero component with romantic theme integration
- **Migration Status**: Ready for implementation
- **Last Updated**: October 19, 2025
- **Complexity**: High (multiple variants, backgrounds, animations)
- **Estimated Migration Time**: 4-6 hours for full codebase
- **Dependencies**: next/image, framer-motion (optional), @radix-ui/react-slot

## Table of Contents
1. [Component Anatomy](#component-anatomy)
2. [Token Crosswalk](#token-crosswalk)
3. [Current Implementation](#current-implementation)
4. [Migration Target](#migration-target)
5. [Complete Code Examples](#complete-code-examples)
6. [Advanced Patterns](#advanced-patterns)
7. [Framework Integration](#framework-integration)
8. [Migration Process](#migration-process)
9. [Troubleshooting](#troubleshooting)
10. [Output Requirements](#output-requirements)
11. [Verification Checklist](#verification-checklist)

---

## Component Anatomy
| Part | Purpose | Current Class | Target Token | Notes |
|------|---------|---------------|--------------|-------|
| Container | Full viewport section | `hero-enhanced` | `min-h-screen` | Main hero container |
| Background Image | Visual backdrop | CSS background-image | Next.js Image component | Optimized loading |
| Gradient Overlay | Text readability | `.romantic-overlay` | `bg-gradient-to-r from-amber-900/90 to-slate-700/80` | Custom gradient |
| Content Wrapper | Layout container | `.content-wrapper` | `container mx-auto px-4` | Responsive container |
| Script Accent | Pre-title text | `.script-accent` | `font-script text-2xl text-amber-200` | Dancing Script font |
| Main Headline | Primary title | `.hero-headline` | `font-serif text-4xl lg:text-7xl` | Playfair Display font |
| Hero Accent | Title highlight | `.hero-accent` | `text-amber-200` | Champagne gold color |
| Lead Text | Description | `.hero-lead` | `text-xl text-amber-50/95` | Supporting copy |
| Button Container | CTA layout | `.hero-buttons` | `flex gap-4` | Action buttons |
| Scroll Indicator | Navigation hint | `.hero-scroll-indicator` | `absolute bottom-8` | Animated scroll arrow |
| Mobile Layout | Small screen adaptation | Media queries | `min-h-[70vh] md:min-h-screen` | Reduced height on mobile |
| Floating CTA | Fixed button | `.floating-cta` | `fixed bottom-8 right-8` | Persistent call-to-action |

## Token Crosswalk
| Legacy Variable | New Semantic Token | Context | Usage |
|-----------------|-------------------|---------|-------|
| `rgba(107, 78, 61, 0.9)` | `--color-semantic-background-overlay-primary` | Gradient overlay start | Primary overlay color |
| `rgba(58, 74, 60, 0.8)` | `--color-semantic-background-overlay-secondary` | Gradient overlay end | Secondary overlay color |
| `--champagne-gold` | `--color-semantic-accent-highlight` | Script accent and title accent | Hero text highlighting |
| `--cream-pearl` | `--color-semantic-text-light` | Body text on dark backgrounds | Hero description text |
| `--dusty-rose` | `--color-semantic-accent-primary` | Floating CTA background | Primary brand color |
| `--font-display` | `--font-family-display` | Main headline typography | Playfair Display serif |
| `--font-script` | `--font-family-script` | Script accent typography | Dancing Script cursive |
| `--font-body` | `--font-family-body` | Button and UI text | Montserrat sans-serif |
| `clamp(3rem, 8vw, 5.5rem)` | `--font-size-hero` | Responsive headline size | Fluid typography |
| `--space-lg` | `--spacing-lg` | Hero content padding | 24px spacing |
| `--space-xl` | `--spacing-xl` | Section margins | 32px spacing |
| `100vh` | `--size-viewport-height` | Full-screen hero height | Viewport-based sizing |
| **Dark Mode Overrides** | | | |
| `rgba(107, 78, 61, 0.9)` → `rgba(255, 255, 255, 0.1)` | `--color-semantic-background-overlay-primary-dark` | Dark mode overlay start | Light overlay in dark theme |
| `rgba(58, 74, 60, 0.8)` → `rgba(228, 200, 150, 0.2)` | `--color-semantic-background-overlay-secondary-dark` | Dark mode overlay end | Champagne tint in dark theme |

---

## Current Implementation

### Component Location
```bash
src/pages/HeroStandalone.jsx
```

### Current Component Code
```jsx
// src/pages/HeroStandalone.jsx
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
    </>
  )
}
```

### Current CSS Styling
```css
/* Hero Section Enhanced */
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
}

/* Dark mode adaptations */
.dark-section .hero-enhanced,
:root.dark .hero-enhanced,
html[data-theme="dark"] .hero-enhanced {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(228, 200, 150, 0.2) 100%), 
              url('/images/venue/barn-exterior-full-deck-view-evening.jpg') center/cover;
}
```

---

## Migration Target

### Installation & Setup
```bash
# Install shadcn/ui components if not already done
npx shadcn-ui@latest init

# Install required dependencies
npm install framer-motion    # Optional for animations
npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx tailwind-merge

# Note: next/image is built into Next.js 13+
# Ensure Next.js Image optimization is configured in next.config.js
```

### Shadcn Hero Component Structure
```tsx
// components/ui/hero.tsx
import * as React from "react"
import Image from "next/image"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const heroVariants = cva(
  "relative flex items-center justify-center overflow-hidden text-white",
  {
    variants: {
      height: {
        sm: "min-h-[50vh]",
        md: "min-h-[75vh]",
        lg: "min-h-[85vh]",
        xl: "min-h-[100vh]",
        screen: "min-h-screen",
      },
      overlay: {
        none: "before:opacity-0",
        soft: "before:opacity-20 before:bg-black",
        medium: "before:opacity-40 before:bg-black",
        strong: "before:opacity-60 before:bg-black",
        gradient: "before:bg-gradient-to-r before:from-amber-900/90 before:to-slate-700/80",
      },
      align: {
        left: "text-left justify-start",
        center: "text-center justify-center",
        right: "text-right justify-end",
      },
    },
    defaultVariants: {
      height: "lg",
      overlay: "medium",
      align: "left",
    },
  }
)

const heroContentVariants = cva(
  "relative z-10 max-w-4xl px-4 mx-auto",
  {
    variants: {
      animation: {
        none: "",
        fade: "animate-fade-in-up",
        slide: "animate-slide-up",
        zoom: "animate-zoom-in",
      },
    },
    defaultVariants: {
      animation: "fade",
    },
  }
)

export interface HeroProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heroVariants>,
    VariantProps<typeof heroContentVariants> {
  // Content props
  title: string
  kicker?: string
  description?: string
  
  // Visual props
  image: string
  imageAlt: string
  imagePriority?: boolean
  
  // Action props
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
  
  // Feature props
  scrollIndicator?: boolean
  scrollText?: string
  floatingCTA?: boolean
  parallax?: boolean
  
  // Styling props
  contentClassName?: string
  asChild?: boolean
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ 
    className,
    contentClassName,
    height,
    overlay,
    align,
    animation,
    title,
    kicker,
    description,
    image,
    imageAlt,
    imagePriority = false,
    primaryAction,
    secondaryAction,
    scrollIndicator = false,
    scrollText = "Discover Your Perfect Day",
    floatingCTA = false,
    parallax = false,
    asChild = false,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "section"
    
    return (
      <Comp
        className={cn(
          heroVariants({ height, overlay, align, className }),
          "before:absolute before:inset-0 before:z-[1]"
        )}
        ref={ref}
        {...props}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={imagePriority || height === "screen" || height === "xl"}
          sizes="100vw"
        />
        
        {/* Content */}
        <div className={cn(
          heroContentVariants({ animation }),
          contentClassName
        )}>
          {kicker && (
            <span className="font-script text-2xl text-amber-200 mb-4 block">
              {kicker}
            </span>
          )}
          
          <h1 className="font-serif font-normal text-white mb-6 text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-amber-50/95 mb-8 leading-relaxed max-w-2xl">
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-50 animate-bounce z-10">
            <div className="text-center">
              <p className="text-sm mb-2">{scrollText}</p>
              <ChevronDown className="w-6 h-6 mx-auto" />
            </div>
          </div>
        )}
        
        {/* Floating CTA */}
        {floatingCTA && primaryAction && (
          <Button 
            className="fixed bottom-8 right-8 rounded-full bg-rose-400 hover:bg-rose-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50"
            size="lg"
            asChild
          >
            <a href={primaryAction.href}>
              <Calendar className="w-4 h-4 mr-2" />
              {primaryAction.text}
            </a>
          </Button>
        )}
      </Comp>
    )
  }
)
Hero.displayName = "Hero"

export { Hero, heroVariants }
```

### Variant Mappings
| Current Hero | Shadcn Hero | Notes |
|--------------|-------------|-------|
| `.hero-enhanced` | `height="screen"` | Full viewport height |
| Custom gradient | `overlay="gradient"` | Warm-walnut to deep-forest |
| `.script-accent` | `kicker` prop | Dancing Script styling |
| `.hero-headline` | `title` prop | Playfair Display styling |
| `.hero-lead` | `description` prop | Lead paragraph |
| `.hero-buttons` | `primaryAction`/`secondaryAction` | CTA buttons |
| `.floating-cta` | `floatingCTA={true}` | Fixed position button |
| `.hero-scroll-indicator` | `scrollIndicator={true}` | Animated scroll hint |

---

## Complete Code Examples

### Basic Hero Migrations

#### Example 1: Simple Home Page Hero
```jsx
// BEFORE (Current HeroStandalone)
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
        the perfect blend of rustic charm and modern elegance.
      </p>
      <div className="hero-buttons">
        <CTAButton href="/contact" variant="primary">Schedule Your Visit</CTAButton>
      </div>
    </div>
  </div>
</section>

// AFTER (Shadcn Hero)
import { Hero } from "@/components/ui/hero"

<Hero
  height="screen"
  overlay="gradient"
  align="center"
  title="Rum River Wedding Barn"
  kicker="Where Dreams Begin"
  description="Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration."
  image="/images/venue/barn-exterior-full-deck-view-evening.jpg"
  imageAlt="Historic wedding barn exterior with evening lighting and deck view"
  imagePriority={true}
  primaryAction={{
    text: "Schedule Your Visit",
    href: "/contact",
    variant: "primary"
  }}
  scrollIndicator={true}
  floatingCTA={true}
  animation="fade"
/>
```

#### Example 2: Feature Page Hero
```jsx
// BEFORE
<section className="hero-enhanced" style={{ minHeight: '75vh' }}>
  <div className="content-wrapper">
    <div className="hero-content">
      <h1 className="hero-headline">Our Gallery</h1>
      <p className="hero-lead">Browse stunning photography from real weddings</p>
    </div>
  </div>
</section>

// AFTER
<Hero
  height="md"
  overlay="soft"
  align="center"
  title="Our Gallery"
  kicker="Real Weddings"
  description="Browse stunning photography from real weddings at our venue"
  image="/images/gallery/interior-ceremony-string-lights.jpg"
  imageAlt="Wedding ceremony in barn with string lights and exposed beams"
  animation="slide"
/>
```

#### Example 3: Blog Post Hero
```jsx
// BEFORE
<section className="hero-enhanced" style={{ minHeight: '50vh' }}>
  <div className="content-wrapper">
    <div className="hero-content">
      <div className="script-accent">Real Wedding</div>
      <h1 className="hero-headline">Sarah & Michael</h1>
      <p className="hero-lead">A beautiful October celebration</p>
    </div>
  </div>
</section>

// AFTER
<Hero
  height="sm"
  overlay="strong"
  align="left"
  title="Sarah & Michael"
  kicker="Real Wedding"
  description="A beautiful October celebration filled with autumn colors and rustic charm"
  image="/images/weddings/sarah-michael-ceremony.jpg"
  imageAlt="Sarah and Michael's wedding ceremony with fall decorations"
  animation="zoom"
/>
```

### Advanced Pattern Migrations

#### Example 4: Hero with Custom Animation
```jsx
// BEFORE (Custom CSS animation)
.hero-content {
  animation: fadeInUp 1.2s ease-out;
}

// AFTER (Framer Motion integration)
import { motion } from "framer-motion"

<Hero
  title="Rum River Wedding Barn"
  image="/images/hero.jpg"
  imageAlt="Wedding barn"
  contentClassName="motion-safe:animate-none" // Disable default animation
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    {/* Hero content */}
  </motion.div>
</Hero>
```

#### Example 5: Hero with Parallax Effect
```jsx
// BEFORE (CSS background-attachment)
.hero-enhanced {
  background-attachment: fixed;
}

// AFTER (React parallax)
import { useScroll, useTransform, motion } from "framer-motion"

const ParallaxHero = ({ ...props }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  
  return (
    <Hero
      {...props}
      parallax={true}
      className="overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src={props.image}
          alt={props.imageAlt}
          fill
          className="object-cover scale-110"
        />
      </motion.div>
    </Hero>
  )
}
```

#### Example 6: Responsive Hero Heights
```jsx
// BEFORE (CSS media queries)
@media (max-width: 768px) {
  .hero-enhanced {
    min-height: 70vh;
  }
}

// AFTER (Tailwind responsive classes)
<Hero
  title="Mobile-Optimized Hero"
  image="/images/hero.jpg"
  imageAlt="Hero image"
  className="min-h-[70vh] md:min-h-screen"
  height="screen" // Base height, overridden by className
/>
```

### Content Management Integration

#### Example 7: CMS-Driven Hero
```jsx
// Sanity CMS integration
import { groq } from "next-sanity"
import { client } from "@/lib/sanity"

const heroQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    "hero": hero {
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
  }
`

export default async function PageWithHero({ slug }) {
  const page = await client.fetch(heroQuery, { slug })
  const { hero } = page
  
  return (
    <Hero
      title={hero.title}
      kicker={hero.kicker}
      description={hero.description}
      image={hero.heroImage.asset.url}
      imageAlt={hero.heroImage.alt}
      height={hero.height}
      overlay={hero.overlay}
      align={hero.textAlign}
      primaryAction={hero.primaryAction}
      secondaryAction={hero.secondaryAction}
      scrollIndicator={hero.features?.scrollIndicator}
      floatingCTA={hero.features?.floatingCTA}
      animation={hero.features?.animation || "fade"}
    />
  )
}
```

#### Example 8: Multi-Language Hero
```jsx
// Next.js internationalization
import { useTranslations } from 'next-intl'

const InternationalHero = ({ locale, ...props }) => {
  const t = useTranslations('hero')
  
  return (
    <Hero
      title={t('title')}
      kicker={t('kicker')}
      description={t('description')}
      primaryAction={{
        text: t('cta.primary'),
        href: "/contact",
        variant: "primary"
      }}
      scrollText={t('scrollText')}
      {...props}
    />
  )
}
```

---

## Advanced Patterns

### Custom Background Effects

#### Example 9: Video Background Hero
```jsx
// Video background with fallback image
import { useState, useRef } from 'react'

const VideoHero = ({ videoSrc, posterImage, ...props }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)
  
  return (
    <Hero
      {...props}
      className="relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover",
          videoLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Fallback Image */}
      <Image
        src={posterImage}
        alt={props.imageAlt}
        fill
        className={cn(
          "object-cover transition-opacity duration-1000",
          videoLoaded ? "opacity-0" : "opacity-100"
        )}
        priority
      />
    </Hero>
  )
}
```

#### Example 10: Interactive Background Hero
```jsx
// Mouse-responsive gradient overlay
import { useState, useCallback } from 'react'

const InteractiveHero = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }, [])
  
  return (
    <Hero
      {...props}
      onMouseMove={handleMouseMove}
      className="cursor-none"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(228, 200, 150, 0.3) 0%, transparent 50%)`
        }}
      />
    </Hero>
  )
}
```

### Performance Optimizations

#### Example 11: Lazy Loading Hero
```jsx
// Intersection Observer for below-fold heroes
import { useState, useEffect, useRef } from 'react'

const LazyHero = ({ threshold = 0.1, ...props }) => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    
    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    
    return () => observer.disconnect()
  }, [threshold])
  
  return (
    <div ref={heroRef} className="min-h-[50vh]">
      {isVisible && (
        <Hero
          {...props}
          animation="fade"
        />
      )}
    </div>
  )
}
```

#### Example 12: Progressive Image Loading
```jsx
// Blur-up image loading technique
import { useState } from 'react'

const ProgressiveHero = ({ image, blurDataURL, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  return (
    <Hero
      {...props}
      className="relative"
    >
      {/* Blur placeholder */}
      <Image
        src={blurDataURL}
        alt=""
        fill
        className={cn(
          "object-cover transition-opacity duration-300",
          imageLoaded ? "opacity-0" : "opacity-100"
        )}
        priority
      />
      
      {/* Full resolution image */}
      <Image
        src={image}
        alt={props.imageAlt}
        fill
        className={cn(
          "object-cover transition-opacity duration-300",
          imageLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setImageLoaded(true)}
        priority
      />
    </Hero>
  )
}
```

---

## Framework Integration

### Design Token Integration

#### Current Design Tokens Usage
```css
/* Current CSS variables being used */
:root {
  --champagne-gold: #E4C896;
  --cream-pearl: #FBF8F4;
  --dusty-rose: #9D6B7B;
  --warm-walnut: #6B4E3D;
  --deep-forest: #3A4A3C;
  --font-display: 'Playfair Display', serif;
  --font-script: 'Dancing Script', cursive;
  --font-body: 'Montserrat', sans-serif;
}

/* Hero styling with tokens */
.hero-enhanced {
  background: linear-gradient(135deg, 
    rgba(107, 78, 61, 0.9) 0%, 
    rgba(58, 74, 60, 0.8) 100%);
  font-family: var(--font-display);
}
```

#### Shadcn + Design Tokens Integration
```tsx
// tailwind.config.js - Integrate design tokens
module.exports = {
  theme: {
    extend: {
      colors: {
        // Map design tokens to Tailwind
        'champagne-gold': 'var(--champagne-gold)',
        'cream-pearl': 'var(--cream-pearl)',
        'dusty-rose': 'var(--dusty-rose)',
        'warm-walnut': 'var(--warm-walnut)',
        'deep-forest': 'var(--deep-forest)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        script: 'var(--font-script)',
        body: 'var(--font-body)',
      },
      fontSize: {
        hero: 'clamp(3rem, 8vw, 5.5rem)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    }
  }
}

// Updated hero with design tokens
<Hero 
  title="Rum River Wedding Barn"
  className="bg-gradient-to-r from-warm-walnut/90 to-deep-forest/80"
  contentClassName="font-display"
/>
```

### Dark Mode Integration

#### Current Dark Mode Support
```css
/* Current dark mode handling */
.dark-section .hero-enhanced,
:root.dark .hero-enhanced,
html[data-theme="dark"] .hero-enhanced {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(228, 200, 150, 0.2) 100%);
}
```

#### Shadcn Dark Mode Integration
```tsx
// Enhanced with dark mode variants
const heroVariants = cva(
  "relative flex items-center justify-center overflow-hidden text-white",
  {
    variants: {
      overlay: {
        gradient: "before:bg-gradient-to-r before:from-warm-walnut/90 before:to-deep-forest/80 dark:before:from-white/10 dark:before:to-champagne-gold/20",
        // ... other variants
      },
    }
  }
)

// Usage with theme-aware colors
<Hero
  title="Wedding Barn"
  className="dark:text-champagne-gold"
  contentClassName="dark:text-cream-pearl"
/>
```

### Accessibility Implementation

#### Enhanced Accessibility Features
```tsx
// Accessibility-enhanced hero component
interface AccessibleHeroProps extends HeroProps {
  landmark?: boolean
  skipLink?: boolean
  reducedMotion?: boolean
}

const AccessibleHero = React.forwardRef<HTMLElement, AccessibleHeroProps>(
  ({ 
    landmark = true,
    skipLink = false,
    reducedMotion = false,
    animation,
    ...props 
  }, ref) => {
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
    const effectiveAnimation = reducedMotion || prefersReducedMotion ? "none" : animation
    
    return (
      <>
        {skipLink && (
          <a 
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
          >
            Skip to main content
          </a>
        )}
        
        <Hero
          ref={ref}
          role={landmark ? "banner" : undefined}
          aria-label={landmark ? "Page header" : undefined}
          animation={effectiveAnimation}
          {...props}
        />
        
        {landmark && <div id="main-content" />}
      </>
    )
  }
)
```

---

## 📋 Storyboard Lite Validation (Approved Fallback)

**Note**: This "Storyboard Lite" approach is the approved alternative to external Storybook dependencies. It provides the same validation capabilities using internal application routes.

### Preview & Validation Routes Implementation

Create these routes in your Next.js + shadcn site to validate the hero migration:

| Route | Purpose | Required Elements |
|-------|---------|-------------------|
| `/ds/heroes` | Full hero matrix (height × overlay × align) with interactive examples | Hero grid, all variants, hover states, data-testid attributes |
| `/ds/typography` | Hero typography scale and font family usage | Font specimens, responsive text, dark mode examples |
| `/ds/animations` | Hero animation system showcase | Animation examples, reduced motion support, performance metrics |

#### `/ds/heroes` Implementation Requirements

```jsx
// app/(site)/ds/heroes/page.tsx
'use client'
import { Hero } from "@/components/ui/hero"
import { Button } from "@/components/ui/button"

export default function DSHeroesPage() {
  const heights = ['sm', 'md', 'lg', 'xl', 'screen']
  const overlays = ['none', 'soft', 'medium', 'strong', 'gradient']
  const alignments = ['left', 'center', 'right']
  
  const sampleContent = {
    title: "Hero Component Showcase",
    kicker: "Design System",
    description: "Demonstrating all hero variants and configurations with consistent romantic theme styling.",
    image: "/images/venue/barn-exterior-full-deck-view-evening.jpg",
    imageAlt: "Wedding barn exterior with evening lighting"
  }
  
  return (
    <main data-testid="page-ds-heroes" className="container mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hero System Matrix</h1>
        <p className="text-lg text-gray-600">Complete showcase of hero component variants</p>
      </div>
      
      {/* Height Variants */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Height Variants</h2>
        <div className="space-y-8">
          {heights.map(height => (
            <div key={height} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <code className="text-sm">height="{height}"</code>
              </div>
              <Hero
                {...sampleContent}
                height={height}
                title={`${sampleContent.title} - ${height.toUpperCase()}`}
                primaryAction={{
                  text: "View Example",
                  href: "#",
                  variant: "primary"
                }}
                data-testid={`hero-height-${height}`}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Overlay Variants */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Overlay Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overlays.map(overlay => (
            <div key={overlay} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <code className="text-sm">overlay="{overlay}"</code>
              </div>
              <Hero
                {...sampleContent}
                height="md"
                overlay={overlay}
                title={`${overlay} Overlay`}
                description="Testing overlay opacity and visual effect on text readability."
                data-testid={`hero-overlay-${overlay}`}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Alignment Variants */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Text Alignment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alignments.map(align => (
            <div key={align} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <code className="text-sm">align="{align}"</code>
              </div>
              <Hero
                {...sampleContent}
                height="md"
                align={align}
                title={`${align} Aligned`}
                description="Text alignment demonstration."
                data-testid={`hero-align-${align}`}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Feature Examples */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Feature Examples</h2>
        <div className="space-y-8">
          
          {/* Home Page Hero */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2">
              <h3 className="font-semibold">Home Page Hero (Full Featured)</h3>
            </div>
            <Hero
              title="Rum River Wedding Barn"
              kicker="Where Dreams Begin"
              description="Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration."
              image="/images/venue/barn-exterior-full-deck-view-evening.jpg"
              imageAlt="Historic wedding barn exterior with evening lighting"
              height="screen"
              overlay="gradient"
              align="center"
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
              scrollIndicator={true}
              floatingCTA={true}
              animation="fade"
              data-testid="hero-home-full"
            />
          </div>
          
          {/* Feature Page Hero */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2">
              <h3 className="font-semibold">Feature Page Hero</h3>
            </div>
            <Hero
              title="Our Gallery"
              kicker="Real Weddings"
              description="Browse stunning photography from real weddings at our venue"
              image="/images/gallery/interior-ceremony-string-lights.jpg"
              imageAlt="Wedding ceremony with string lights"
              height="md"
              overlay="soft"
              align="center"
              animation="slide"
              data-testid="hero-feature-page"
            />
          </div>
          
          {/* Blog Post Hero */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2">
              <h3 className="font-semibold">Blog Post Hero</h3>
            </div>
            <Hero
              title="Sarah & Michael"
              kicker="Real Wedding"
              description="A beautiful October celebration filled with autumn colors and rustic charm"
              image="/images/weddings/sarah-michael-ceremony.jpg"
              imageAlt="Sarah and Michael's wedding ceremony"
              height="sm"
              overlay="strong"
              align="left"
              animation="zoom"
              data-testid="hero-blog-post"
            />
          </div>
        </div>
      </section>
      
      {/* Dark Mode Test */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Dark Mode Support</h2>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold">Dark Mode Hero</h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              Toggle Dark Mode
            </Button>
          </div>
          <div className="dark:bg-gray-900">
            <Hero
              title="Dark Mode Test"
              kicker="Theme Toggle"
              description="Hero component with dark mode color adaptations"
              image="/images/venue/barn-interior-chandelier.jpg"
              imageAlt="Barn interior with chandelier"
              height="md"
              overlay="gradient"
              align="center"
              primaryAction={{
                text: "Test Button",
                href: "#",
                variant: "primary"
              }}
              data-testid="hero-dark-mode"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
```

#### `/ds/typography` Implementation Requirements

```jsx
// app/(site)/ds/typography/page.tsx
'use client'

export default function DSTypographyPage() {
  const fontSizes = [
    { name: 'Hero', class: 'text-4xl md:text-6xl lg:text-7xl', description: 'Main hero headlines' },
    { name: 'Kicker', class: 'text-2xl', description: 'Script accent text' },
    { name: 'Description', class: 'text-xl', description: 'Hero description text' },
  ]
  
  const fontFamilies = [
    { name: 'Display', class: 'font-serif', family: 'Playfair Display', usage: 'Headlines, titles' },
    { name: 'Script', class: 'font-script', family: 'Dancing Script', usage: 'Kicker text, accents' },
    { name: 'Body', class: 'font-sans', family: 'Montserrat', usage: 'Descriptions, UI text' },
  ]
  
  return (
    <main data-testid="page-ds-typography" className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Hero Typography System</h1>
      
      {/* Font Families */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Font Families</h2>
        <div className="space-y-6">
          {fontFamilies.map(font => (
            <div key={font.name} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{font.name}</h3>
                  <p className="text-gray-600">{font.family}</p>
                  <p className="text-sm text-gray-500">{font.usage}</p>
                </div>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">{font.class}</code>
              </div>
              <div className={`${font.class} text-3xl`}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Font Sizes */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Font Sizes</h2>
        <div className="space-y-6">
          {fontSizes.map(size => (
            <div key={size.name} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{size.name}</h3>
                  <p className="text-gray-600">{size.description}</p>
                </div>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">{size.class}</code>
              </div>
              <div className={`${size.class} font-serif leading-tight`}>
                Sample Hero Text
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Responsive Typography */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Responsive Behavior</h2>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Hero Headline Scaling</h3>
          <div className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
            Rum River Wedding Barn
          </div>
          <p className="text-gray-600">
            Resize your browser window to see the responsive typography scaling from 4xl → 6xl → 7xl
          </p>
        </div>
      </section>
    </main>
  )
}
```

#### `/ds/animations` Implementation Requirements

```jsx
// app/(site)/ds/animations/page.tsx
'use client'
import { useState } from 'react'
import { Hero } from "@/components/ui/hero"
import { Button } from "@/components/ui/button"

export default function DSAnimationsPage() {
  const [isReduced, setIsReduced] = useState(false)
  
  const animations = ['none', 'fade', 'slide', 'zoom']
  
  const sampleContent = {
    title: "Animation Demo",
    kicker: "Motion Design",
    description: "Testing hero animation patterns and accessibility considerations",
    image: "/images/venue/barn-ceremony-setup.jpg",
    imageAlt: "Wedding ceremony setup in barn"
  }
  
  return (
    <main data-testid="page-ds-animations" className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Hero Animation System</h1>
        <Button
          variant={isReduced ? "default" : "outline"}
          onClick={() => {
            setIsReduced(!isReduced)
            document.documentElement.classList.toggle('reduce-motion')
          }}
        >
          {isReduced ? 'Enable' : 'Disable'} Animations
        </Button>
      </div>
      
      {/* Animation Variants */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Animation Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {animations.map(animation => (
            <div key={animation} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <code className="text-sm">animation="{animation}"</code>
              </div>
              <Hero
                {...sampleContent}
                height="sm"
                animation={isReduced ? "none" : animation}
                title={`${animation} Animation`}
                data-testid={`hero-animation-${animation}`}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Accessibility Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Accessibility Considerations</h2>
        <div className="space-y-4 text-gray-700">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Reduced Motion Support</h3>
            <p>Animations respect <code>prefers-reduced-motion: reduce</code> media query and can be disabled globally.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Focus Management</h3>
            <p>Hero content maintains proper focus order and includes skip links for keyboard navigation.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Screen Reader Support</h3>
            <p>Proper ARIA landmarks, alt text, and semantic HTML structure for assistive technologies.</p>
          </div>
        </div>
      </section>
      
      {/* Performance Metrics */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Performance Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">< 2.5s</div>
            <div className="text-sm text-gray-600">Target LCP for hero images</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">< 0.1</div>
            <div className="text-sm text-gray-600">Target CLS for animations</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">60fps</div>
            <div className="text-sm text-gray-600">Smooth animation target</div>
          </div>
        </div>
      </section>
    </main>
  )
}
```

### Original CSS/React Code Reference

#### Current HeroStandalone.jsx (Legacy)
```jsx
// src/pages/HeroStandalone.jsx
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
    </>
  )
}
```

#### Current CSS Styling (Legacy)
```css
/* Hero Section Enhanced */
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
}

/* Dark mode adaptations */
.dark-section .hero-enhanced,
:root.dark .hero-enhanced,
html[data-theme="dark"] .hero-enhanced {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(228, 200, 150, 0.2) 100%), 
              url('/images/venue/barn-exterior-full-deck-view-evening.jpg') center/cover;
}
```

#### Current Design Tokens (Reference)
```css
/* src/generated/tokens.css */
:root {
  --color-base-champagne-gold: #E4C896;
  --color-base-cream-pearl: #FBF8F4;
  --color-base-dusty-rose: #9D6B7B;
  --color-base-warm-walnut: #6B4E3D;
  --color-base-deep-forest: #3A4A3C;
  --color-semantic-accent-highlight: var(--color-base-champagne-gold);
  --color-semantic-text-light: var(--color-base-cream-pearl);
  --color-semantic-accent-primary: var(--color-base-dusty-rose);
  --font-family-display: 'Playfair Display', serif;
  --font-family-script: 'Dancing Script', cursive;
  --font-family-body: 'Montserrat', sans-serif;
  --font-size-hero: clamp(3rem, 8vw, 5.5rem);
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --transition-preset-default: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Validate the Migration (No External Tools Needed)

1. **Run the app and open these routes:**
   ```bash
   # Run and validate locally
   npm run dev
   
   # Open these routes:
   open http://localhost:3000/ds/heroes
   open http://localhost:3000/ds/typography  
   open http://localhost:3000/ds/animations
   ```

   - `/ds/heroes` — Full matrix (height × overlay × align), all hero variants
   - `/ds/typography` — Hero typography scale, font families, responsive behavior
   - `/ds/animations` — Animation examples, reduced motion support, performance metrics

2. **Light/Dark Mode Testing:**
   - Toggle theme and confirm hero overlays adapt properly
   - Verify `--color-semantic-*` variables change in dark mode
   - Test dual dark mode strategy (`:root.dark` + `html[data-theme="dark"]`)

3. **Token Integrity Check:**
   - Open DevTools → Computed styles on Hero component
   - Verify backgrounds use `--color-semantic-*` tokens (not raw hex values)
   - Check that typography uses `--font-family-*` tokens
   - Verify animations use `--transition-preset-*` tokens

4. **Cross-Browser Validation:**
   ```bash
   # Cross-browser testing (if Playwright configured)
   npm run test:e2e
   ```
   - Tests assert `/ds/heroes`, `/ds/typography`, and `/ds/animations` render correctly
   - Validates image loading performance and accessibility

### What NOT to Do (Guardrails)

- **Hardcode image URLs** in Hero components; use props and CMS integration
- **Skip image optimization**; always use Next.js Image component with proper sizing  
- **Use inline CSS styles** in hero components; maintain styling via tokens/variants only
- **Ignore responsive behavior**; test all height variants on mobile devices
- **Override shadcn/ui internals**; extend through composition and props
- **Create too many CTAs**; limit to 1 primary + 1 optional secondary action maximum
- **Forget accessibility**; include proper alt text, ARIA landmarks, and focus management
- **Skip performance testing**; validate Core Web Vitals on mobile networks

### Note on Preset Components

We recommend creating preset Hero components for consistency:

`HomeHero` → `PageHero` → `BlogHero`

Hero system flows through token integration:

`tokens.css` → `tailwind.config.js` → shadcn primitives → Hero presets

Preview the complete component showcase at `/ds/heroes`.

---

## Migration Process

### Step-by-Step Migration Guide

#### Phase 1: Image Optimization Setup
```bash
# 1. Configure Next.js Image optimization
# next.config.js
module.exports = {
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

# 2. Optimize hero images for web
# Target dimensions: 1920x1080 (16:9) minimum
# Format: WebP with JPEG fallback
# Quality: 85% compression
# File size: < 500KB for hero images
```

#### Phase 2: Performance-First Implementation
```tsx
// Critical performance considerations for hero sections
const Hero = ({ image, imageAlt, height, ...props }) => {
  return (
    <section className={cn(heroVariants({ height }))}>
      {/* Priority loading for above-fold heroes */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority={height === "screen" || height === "xl"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        sizes="100vw"
      />
      
      {/* Hero variants with video must have fallback static image */}
      {props.videoSrc && (
        <video className="absolute inset-0" poster={image}>
          <source src={props.videoSrc} type="video/mp4" />
        </video>
      )}
    </section>
  )
}
```

#### Phase 3: Mobile-First Responsive Implementation
```tsx
// Mobile optimization patterns
const MobileOptimizedHero = (props) => {
  return (
    <Hero
      {...props}
      // Reduced height on mobile, full screen on desktop
      className="min-h-[70vh] md:min-h-screen"
      // Mobile-specific content adjustments
      contentClassName="px-4 md:px-8 text-center md:text-left"
      // Simplified mobile variant
      scrollIndicator={false} // Hide on mobile to save space
      floatingCTA={false}     // Avoid mobile performance issues
    >
      {/* Mobile-only variant example */}
      <div className="block md:hidden mb-4">
        <p className="text-sm text-amber-200">Mobile-optimized content</p>
      </div>
    </Hero>
  )
}
```

#### Phase 4: Content Migration Strategy
- Audit all existing hero content and imagery
- Optimize images with proper dimensions and compression
- Test loading performance on slow connections (3G simulation)
- Verify text legibility across all overlay variants
- Ensure mobile responsive behavior on actual devices

---

## Troubleshooting

### Common Migration Issues

#### Issue 1: Poor Image Loading Performance
**Problem**: Hero images loading slowly, affecting LCP scores
```tsx
// Problem: Unoptimized images
<Hero image="/large-unoptimized-image.jpg" />

// Solution: Proper Next.js Image optimization
<Hero 
  image="/optimized-hero.webp"
  imageAlt="Descriptive alt text"
  className="min-h-screen"
  // Force priority loading for above-fold heroes
  imagePriority={true}
/>

// Additional: Use blur placeholder
// Generate with: npx @plaiceholder/cli your-image.jpg
blurDataURL="data:image/jpeg;base64,..." 
```

#### Issue 2: Mobile Layout Breaking
**Problem**: Hero content not legible or properly sized on mobile
```tsx
// Problem: Fixed desktop sizing
<Hero height="screen" className="text-left" />

// Solution: Mobile-responsive approach
<Hero 
  height="lg"
  align="center" // Better for mobile
  className="min-h-[70vh] md:min-h-screen"
  contentClassName="px-4 text-center md:text-left md:px-8"
/>
```

#### Issue 3: Too Many CTAs Overwhelming Users
**Problem**: Multiple competing calls-to-action in hero
```tsx
// Problem: Visual competition
<Hero
  primaryAction={{ text: "Book Now", href: "/book" }}
  secondaryAction={{ text: "Learn More", href: "/about" }}
  tertiaryAction={{ text: "Contact", href: "/contact" }} // Too many!
/>

// Solution: Prioritized CTA hierarchy
<Hero
  primaryAction={{ 
    text: "Schedule Your Visit", 
    href: "/contact",
    variant: "primary" // Visually dominant
  }}
  secondaryAction={{ 
    text: "View Gallery", 
    href: "/gallery",
    variant: "outline" // Clearly secondary
  }}
  // Move other actions below the fold
/>
```

---

## Output Requirements

When implementing this migration, AI systems should:

1. **Generate a complete component file** (`src/components/ui/hero.tsx`)
   - Full TypeScript implementation with proper interfaces
   - Include all variant mappings and height options
   - Maintain prop compatibility with legacy hero patterns

2. **Prioritize single primary call-to-action** in hero design
   - Primary action should be visually dominant (solid button, prominent placement)
   - Secondary action should be clearly less dominant (outline/ghost variant, smaller)
   - Limit to maximum 2 CTAs to avoid overwhelming users
   - Follow hierarchy: Primary CTA → Secondary CTA → Other page elements

3. **Implement performance-first image handling**
   - Use Next.js Image component with proper optimization
   - Include priority loading for above-fold heroes
   - Provide blur placeholders for smooth loading experience
   - Ensure video backgrounds have static image fallbacks

4. **Use design tokens exclusively for styling**
   - Reference tokens from `src/generated/tokens.css`
   - Do not use inline CSS styles; maintain styling via tokens/variants
   - Leverage semantic color tokens for overlay and text colors
   - Use spacing tokens for consistent layout spacing

5. **Ensure mobile-responsive behavior**
   - Include mobile-specific height variants (70vh on mobile → 100vh desktop)
   - Test text legibility and touch target sizes on small screens
   - Consider mobile-only content variants or simplified layouts
   - Validate performance on mobile networks and devices

6. **Output production-ready, accessible code**
   - Include proper ARIA landmarks (role="banner" for main hero)
   - Provide descriptive alt text for all hero images
   - Support reduced motion preferences for animations
   - Include keyboard navigation support and focus management

## Verification Checklist

### Pre-Migration
- [ ] Design tokens are built and available (`npm run tokens:build`)
- [ ] Current hero usage documented and tested across all pages
- [ ] Backup branch created (`git checkout -b backup-before-hero-migration`)
- [ ] Next.js Image optimization configured
- [ ] Animation preferences and accessibility settings reviewed

### Implementation
- [ ] Uses only semantic design tokens (no hardcoded colors or fonts)
- [ ] Compiles without TypeScript errors
- [ ] Maintains all original content patterns and props
- [ ] Preserves accessibility features (ARIA landmarks, alt text, focus management)
- [ ] Supports both dark mode strategies (`:root.dark` + `html[data-theme="dark"]`)
- [ ] Image optimization with Next.js Image component

### Testing
- [ ] Storyboard Lite routes load without errors (`/ds/heroes`, `/ds/typography`, `/ds/animations`)
- [ ] Passes Playwright tests for hero functionality  
- [ ] Visual regression threshold < 1% difference from original design (measurable via Percy/Chromatic)
- [ ] All hero height variants render correctly across viewport sizes
- [ ] Overlay and alignment options work as expected on mobile + desktop
- [ ] Animation system respects `prefers-reduced-motion` media query
- [ ] Image loading performance meets Core Web Vitals targets (LCP < 2.5s, CLS < 0.1)
- [ ] Theme toggle works across all hero variants without layout shift

### Performance
- [ ] Bundle size impact < 10KB additional (including Next.js Image)
- [ ] Images are properly optimized and lazy-loaded
- [ ] LCP (Largest Contentful Paint) < 2.5s for hero images
- [ ] CLS (Cumulative Layout Shift) < 0.1 for hero animations
- [ ] No console warnings or errors

### Integration
- [ ] Works with existing dark mode system
- [ ] Integrates with current design token workflow
- [ ] Compatible with CMS content management
- [ ] Maintains existing SEO and social media meta tags

### Cleanup
- [ ] Legacy hero CSS classes removed
- [ ] Unused animation and background CSS cleaned up
- [ ] Documentation updated to reference new Hero component
- [ ] No remaining references to old hero patterns

### Final Validation
- [ ] Production build succeeds (`npm run build`)
- [ ] All Storyboard Lite routes functional (`/ds/heroes`, `/ds/typography`, `/ds/animations`)
- [ ] Visual spot-check on key pages (home, gallery, contact)
- [ ] Cross-browser testing completed (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness verified across all hero variants
- [ ] Accessibility audit completed (WAVE, axe, screen reader testing)

---

This comprehensive migration guide provides everything needed to successfully transition from the current hero system to shadcn/ui Hero components while maintaining all functionality, styling, performance, and accessibility features. The structured format ensures consistent, production-ready results with proper validation through Storyboard Lite routes.