# Button System Migration Documentation

## Meta Information
- **Component**: CTAButton
- **Target**: shadcn/ui Button
- **Migration Status**: Ready for implementation
- **Last Updated**: October 18, 2025
- **Complexity**: Medium
- **Estimated Migration Time**: 2-4 hours for full codebase
- **Dependencies**: lucide-react, @radix-ui/react-slot, class-variance-authority

## Table of Contents
1. [Current Implementation](#current-implementation)
2. [Migration Target](#migration-target)
3. [Complete Code Examples](#complete-code-examples)
4. [Advanced Patterns](#advanced-patterns)
5. [Framework Integration](#framework-integration)
6. [Migration Process](#migration-process)
7. [Troubleshooting](#troubleshooting)

---

## Current Implementation

### Component Location
```bash
src/components/CTAButton.jsx
```

### Current Component Code
```jsx
// src/components/CTAButton.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({ 
  variant = 'primary',
  size = 'normal',
  href,
  to,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  target,
  rel,
  ...props
}) => {
  // Base classes
  const baseClasses = 'romantic-button'
  
  // Variant classes
  const variantClasses = {
    primary: '',
    outline: 'outline',
    'vr-special': 'vr-special',
    'vr-barn': 'vr-barn',
    'vr-bridal': 'vr-bridal',
    submit: '',
    floating: 'floating'
  }
  
  // Size classes
  const sizeClasses = {
    small: 'small',
    normal: '',
    large: 'large'
  }
  
  // Build final className
  const finalClassName = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'disabled' : '',
    className
  ].filter(Boolean).join(' ')
  
  // Common props
  const commonProps = {
    className: finalClassName,
    disabled,
    'aria-label': ariaLabel,
    ...props
  }
  
  // External link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
      >
        {children}
      </a>
    )
  }
  
  // React Router link
  if (to) {
    return (
      <Link
        to={to}
        {...commonProps}
      >
        {children}
      </Link>
    )
  }
  
  // Button
  return (
    <button
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </button>
  )
}

export default CTAButton
```

### All Current Variants with Usage

#### 1. Primary Variant
```jsx
<CTAButton variant="primary">Schedule Your Visit</CTAButton>
<CTAButton variant="primary" size="large">Book Now</CTAButton>
<CTAButton variant="primary" size="small">Learn More</CTAButton>
```
**Visual Description**: Solid dusty-rose background (#9D6B7B), white text, rounded corners

#### 2. Outline Variant
```jsx
<CTAButton variant="outline">View Gallery</CTAButton>
<CTAButton variant="outline" size="large">Explore Venues</CTAButton>
```
**Visual Description**: Transparent background, dusty-rose border and text, hover fills background

#### 3. Special Variants
```jsx
<CTAButton variant="vr-special">Virtual Tour</CTAButton>
<CTAButton variant="vr-barn">Barn Experience</CTAButton>
<CTAButton variant="vr-bridal">Bridal Suite</CTAButton>
```
**Visual Description**: 
- vr-special: Gradient from warm-walnut to deep-brown
- vr-barn: Custom barn-themed styling
- vr-bridal: Elegant bridal-themed styling

#### 4. Form & Action Variants
```jsx
<CTAButton variant="submit" type="submit">Send Message</CTAButton>
<CTAButton variant="floating">Quick Contact</CTAButton>
```

#### 5. With Icons (Current Icon Component)
```jsx
import Icon from '../components/Icon'

<CTAButton variant="primary">
  <Icon name="calendar" size="sm" color="white" />
  Schedule Visit
</CTAButton>

<CTAButton variant="outline">
  <Icon name="camera" size="sm" color="dusty-rose" />
  View Gallery
</CTAButton>

<CTAButton variant="primary" href="/contact">
  Contact Us
  <Icon name="arrow-right" size="sm" color="white" />
</CTAButton>
```

#### 6. Link Variants
```jsx
// External links
<CTAButton variant="primary" href="https://booking.com" target="_blank" rel="noopener">
  Book Online
</CTAButton>

// React Router links
<CTAButton variant="outline" to="/gallery">
  View Our Gallery
</CTAButton>

// With disabled state
<CTAButton variant="primary" disabled>
  Coming Soon
</CTAButton>
```

### Current CSS Styling
```css
/* Base button styles */
.romantic-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border: 2px solid var(--dusty-rose);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: var(--dusty-rose);
  color: white;
}

.romantic-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  filter: brightness(0.9);
}

.romantic-button.outline {
  background: transparent;
  color: var(--dusty-rose);
  border-color: var(--dusty-rose);
}

.romantic-button.outline:hover {
  background: var(--dusty-rose);
  color: white;
}

.romantic-button.vr-special {
  background: linear-gradient(135deg, var(--warm-walnut) 0%, var(--deep-brown) 100%);
  color: white;
  border: none;
  border-radius: 8px;
}

/* Dark mode adaptations */
.dark-section .romantic-button,
:root.dark .romantic-button,
html[data-theme="dark"] .romantic-button {
  background: white;
  color: var(--warm-walnut);
  border-color: white;
  background: color-mix(in srgb, white 95%, var(--champagne-gold) 5%);
}
```

---

## Migration Target

### Installation & Setup
```bash
# Install shadcn/ui button component
npx shadcn-ui@latest add button

# Install required dependencies (if not already installed)
npm install lucide-react
npm install class-variance-authority
npm install clsx tailwind-merge
```

### Shadcn Button Component Structure
```tsx
// components/ui/button.tsx (generated by shadcn)
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Variant Mappings
| Current CTAButton | Shadcn Button | Notes |
|-------------------|---------------|-------|
| `variant="primary"` | `variant="default"` | Direct mapping |
| `variant="outline"` | `variant="outline"` | Direct mapping |
| `variant="vr-special"` | `variant="default"` + custom classes | Requires custom styling |
| `variant="vr-barn"` | `variant="secondary"` + custom classes | Requires custom styling |
| `variant="vr-bridal"` | `variant="outline"` + custom classes | Requires custom styling |
| `variant="submit"` | `variant="default"` + `type="submit"` | Add type prop |
| `variant="floating"` | `variant="default"` + positioning | Custom positioning |

### Size Mappings
| Current CTAButton | Shadcn Button |
|-------------------|---------------|
| `size="small"` | `size="sm"` |
| `size="normal"` | `size="default"` (or omit) |
| `size="large"` | `size="lg"` |

---

## Complete Code Examples

### Basic Button Migrations

#### Example 1: Simple Primary Button
```jsx
// BEFORE (Current CTAButton)
import CTAButton from '../components/CTAButton'

<CTAButton variant="primary">
  Schedule Your Visit
</CTAButton>

// AFTER (Shadcn Button)
import { Button } from "@/components/ui/button"

<Button variant="default">
  Schedule Your Visit
</Button>
```

#### Example 2: Outline Button with Size
```jsx
// BEFORE
<CTAButton variant="outline" size="large">
  View Our Gallery
</CTAButton>

// AFTER
<Button variant="outline" size="lg">
  View Our Gallery
</Button>
```

#### Example 3: Disabled Button
```jsx
// BEFORE
<CTAButton variant="primary" disabled>
  Coming Soon
</CTAButton>

// AFTER
<Button variant="default" disabled>
  Coming Soon
</Button>
```

### Link Button Migrations

#### Example 4: External Link Button
```jsx
// BEFORE
<CTAButton variant="primary" href="/gallery" target="_blank" rel="noopener">
  View Gallery
</CTAButton>

// AFTER
import { Button } from "@/components/ui/button"

<Button variant="default" asChild>
  <a href="/gallery" target="_blank" rel="noopener">
    View Gallery
  </a>
</Button>
```

#### Example 5: React Router Link Button
```jsx
// BEFORE
import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'

<CTAButton variant="outline" to="/contact">
  Contact Us
</CTAButton>

// AFTER
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

<Button variant="outline" asChild>
  <Link to="/contact">
    Contact Us
  </Link>
</Button>
```

### Icon Button Migrations

#### Example 6: Button with Leading Icon
```jsx
// BEFORE
import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

<CTAButton variant="primary">
  <Icon name="calendar" size="sm" color="white" />
  Schedule Visit
</CTAButton>

// AFTER
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

<Button variant="default">
  <Calendar className="mr-2 h-4 w-4" />
  Schedule Visit
</Button>
```

#### Example 7: Button with Trailing Icon
```jsx
// BEFORE
<CTAButton variant="outline">
  Contact Us
  <Icon name="arrow-right" size="sm" color="dusty-rose" />
</CTAButton>

// AFTER
import { ArrowRight } from "lucide-react"

<Button variant="outline">
  Contact Us
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

#### Example 8: Multiple Icon Scenarios
```jsx
// BEFORE - Various icon usages
<CTAButton variant="primary">
  <Icon name="phone" size="sm" color="white" />
  Call Now
</CTAButton>

<CTAButton variant="outline">
  <Icon name="mail" size="sm" color="dusty-rose" />
  Email Us
</CTAButton>

<CTAButton variant="primary">
  <Icon name="camera" size="sm" color="white" />
  View Photos
</CTAButton>

// AFTER - Lucide React icons
import { Phone, Mail, Camera } from "lucide-react"

<Button variant="default">
  <Phone className="mr-2 h-4 w-4" />
  Call Now
</Button>

<Button variant="outline">
  <Mail className="mr-2 h-4 w-4" />
  Email Us
</Button>

<Button variant="default">
  <Camera className="mr-2 h-4 w-4" />
  View Photos
</Button>
```

### Form Button Migrations

#### Example 9: Form Submit Button
```jsx
// BEFORE
<form onSubmit={handleSubmit}>
  <CTAButton variant="submit" type="submit">
    Send Message
  </CTAButton>
</form>

// AFTER
<form onSubmit={handleSubmit}>
  <Button type="submit">
    Send Message
  </Button>
</form>
```

#### Example 10: Form with Multiple Buttons
```jsx
// BEFORE
<form>
  <div className="button-group">
    <CTAButton variant="outline" type="button" onClick={handleReset}>
      Reset Form
    </CTAButton>
    <CTAButton variant="submit" type="submit">
      Submit Application
    </CTAButton>
  </div>
</form>

// AFTER
<form>
  <div className="flex gap-4">
    <Button variant="outline" type="button" onClick={handleReset}>
      Reset Form
    </Button>
    <Button type="submit">
      Submit Application
    </Button>
  </div>
</form>
```

---

## Advanced Patterns

### Custom Styled Button Migrations

#### Example 11: Special Variant Button (vr-special)
```jsx
// BEFORE
<CTAButton variant="vr-special" className="my-custom-class">
  Virtual Tour Experience
</CTAButton>

// AFTER
import { cn } from "@/lib/utils"

<Button 
  variant="default"
  className={cn(
    // Custom gradient matching original vr-special
    "bg-gradient-to-r from-amber-900 to-stone-800",
    "hover:from-amber-800 hover:to-stone-700",
    "border-none rounded-lg",
    "my-custom-class"
  )}
>
  Virtual Tour Experience
</Button>
```

#### Example 12: Creating Custom Button Variants
```tsx
// Create extended button variants
import { cva } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"

const extendedButtonVariants = cva(
  buttonVariants.base,
  {
    variants: {
      ...buttonVariants.variants,
      variant: {
        ...buttonVariants.variants.variant,
        'vr-special': 'bg-gradient-to-r from-amber-900 to-stone-800 hover:from-amber-800 hover:to-stone-700 text-white border-none rounded-lg',
        'vr-barn': 'bg-amber-700 hover:bg-amber-600 text-white border-amber-800',
        'vr-bridal': 'bg-rose-100 hover:bg-rose-200 text-rose-800 border-rose-300',
        'romantic': 'bg-rose-400 hover:bg-amber-900 text-white border-rose-400'
      }
    }
  }
)

// Usage
<Button className={extendedButtonVariants({ variant: 'vr-special' })}>
  Special Experience
</Button>
```

### Complex Integration Patterns

#### Example 13: Button with Complex State Management
```jsx
// BEFORE
const BookingButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  
  const handleBooking = async () => {
    setIsLoading(true)
    try {
      await bookingService.createBooking()
      setIsBooked(true)
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <CTAButton 
      variant={isBooked ? "outline" : "primary"}
      onClick={handleBooking}
      disabled={isLoading || isBooked}
    >
      {isLoading ? "Booking..." : isBooked ? "Booked!" : "Book Now"}
    </CTAButton>
  )
}

// AFTER
import { Button } from "@/components/ui/button"
import { Calendar, Check, Loader2 } from "lucide-react"

const BookingButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  
  const handleBooking = async () => {
    setIsLoading(true)
    try {
      await bookingService.createBooking()
      setIsBooked(true)
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <Button 
      variant={isBooked ? "outline" : "default"}
      onClick={handleBooking}
      disabled={isLoading || isBooked}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Booking...
        </>
      ) : isBooked ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Booked!
        </>
      ) : (
        <>
          <Calendar className="mr-2 h-4 w-4" />
          Book Now
        </>
      )}
    </Button>
  )
}
```

#### Example 14: Responsive Button Layouts
```jsx
// BEFORE
<div className="cta-section">
  <CTAButton variant="primary" size="large">
    Schedule Tour
  </CTAButton>
  <CTAButton variant="outline" size="large">
    View Gallery
  </CTAButton>
  <CTAButton variant="outline" size="large">
    Get Pricing
  </CTAButton>
</div>

// AFTER
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button variant="default" size="lg" className="flex-1 sm:flex-none">
    Schedule Tour
  </Button>
  <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
    View Gallery
  </Button>
  <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
    Get Pricing
  </Button>
</div>
```

---

## Framework Integration

### Design Token Integration

#### Current Design Tokens Usage
```css
/* Current CSS variables being used */
:root {
  --dusty-rose: #9D6B7B;
  --warm-walnut: #6B4E3D;
  --champagne-gold: #E4C896;
  --font-body: 'Montserrat', sans-serif;
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button styling with tokens */
.romantic-button {
  background: var(--dusty-rose);
  font-family: var(--font-body);
  transition: var(--transition);
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
        'dusty-rose': 'var(--dusty-rose)',
        'warm-walnut': 'var(--warm-walnut)',
        'champagne-gold': 'var(--champagne-gold)',
        // Shadcn semantic colors
        primary: 'var(--dusty-rose)',
        'primary-foreground': 'white',
      },
      fontFamily: {
        body: 'var(--font-body)',
      },
      transitionTimingFunction: {
        romantic: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    }
  }
}

// Updated button with design tokens
<Button 
  variant="default"
  className="bg-dusty-rose hover:bg-warm-walnut font-body transition-romantic"
>
  Romantic Button
</Button>
```

### Dark Mode Integration

#### Current Dark Mode Support
```css
/* Current dark mode handling */
.dark-section .romantic-button,
:root.dark .romantic-button,
html[data-theme="dark"] .romantic-button {
  background: white;
  color: var(--warm-walnut);
  border-color: white;
  background: color-mix(in srgb, white 95%, var(--champagne-gold) 5%);
}
```

#### Shadcn Dark Mode Integration
```tsx
// components/ui/button.tsx - Enhanced with dark mode
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-dusty-rose text-white hover:bg-warm-walnut dark:bg-white dark:text-warm-walnut dark:hover:bg-champagne-gold",
        outline: "border border-dusty-rose bg-background text-dusty-rose hover:bg-dusty-rose hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-warm-walnut",
        // ... other variants
      },
      // ... sizes
    }
  }
)
```

### Accessibility Implementation

#### Enhanced Accessibility Features
```tsx
// Accessibility-enhanced button component
interface AccessibleButtonProps extends ButtonProps {
  ariaLabel?: string
  ariaDescribedBy?: string
  loadingText?: string
  isLoading?: boolean
}

const AccessibleButton = React.forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ 
    children, 
    ariaLabel, 
    ariaDescribedBy, 
    loadingText = "Loading...", 
    isLoading = false,
    disabled,
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-busy={isLoading}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span className="sr-only">{loadingText}</span>
            {children}
          </>
        ) : (
          children
        )}
      </Button>
    )
  }
)

// Usage
<AccessibleButton
  variant="default"
  ariaLabel="Schedule a venue tour"
  loadingText="Scheduling your tour..."
  isLoading={isSubmitting}
>
  Schedule Tour
</AccessibleButton>
```

---

## Migration Process

### Step-by-Step Migration Guide

#### Phase 1: Setup and Preparation
```bash
# 1. Install required dependencies
npx shadcn-ui@latest add button
npm install lucide-react

# 2. Create backup branch
git checkout -b backup-before-button-migration

# 3. Audit current button usage
rg "CTAButton" --type tsx --type jsx src/
```

#### Phase 2: Create Migration Helper
```tsx
// utils/buttonMigration.ts - Helper for gradual migration
import { ButtonProps } from "@/components/ui/button"

interface CTAButtonProps {
  variant?: 'primary' | 'outline' | 'vr-special' | 'vr-barn' | 'vr-bridal' | 'submit' | 'floating'
  size?: 'small' | 'normal' | 'large'
  href?: string
  to?: string
  // ... other props
}

export const mapCTAButtonProps = (props: CTAButtonProps): ButtonProps & { isLink: boolean; linkProps?: any } => {
  const { variant, size, href, to, ...rest } = props
  
  // Map variants
  const variantMap: Record<string, ButtonProps['variant']> = {
    primary: 'default',
    outline: 'outline',
    'vr-special': 'default',
    'vr-barn': 'secondary',
    'vr-bridal': 'outline',
    submit: 'default',
    floating: 'default'
  }
  
  // Map sizes
  const sizeMap: Record<string, ButtonProps['size']> = {
    small: 'sm',
    normal: 'default',
    large: 'lg'
  }
  
  return {
    variant: variantMap[variant] || 'default',
    size: sizeMap[size] || 'default',
    isLink: !!(href || to),
    linkProps: href ? { href } : to ? { to } : undefined,
    ...rest
  }
}
```

#### Phase 3: Gradual Component Migration
```tsx
// components/MigratedButton.tsx - Transition component
import { Button, ButtonProps } from "@/components/ui/button"
import { mapCTAButtonProps } from "@/utils/buttonMigration"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface MigratedButtonProps extends CTAButtonProps {
  asChild?: boolean
}

export const MigratedButton: React.FC<MigratedButtonProps> = ({ 
  children, 
  className,
  asChild,
  ...props 
}) => {
  const { variant, size, isLink, linkProps, ...buttonProps } = mapCTAButtonProps(props)
  
  // Handle special variants with custom classes
  const specialClasses = {
    'vr-special': 'bg-gradient-to-r from-amber-900 to-stone-800 hover:from-amber-800 hover:to-stone-700',
    'vr-barn': 'bg-amber-700 hover:bg-amber-600 border-amber-800',
    'vr-bridal': 'bg-rose-100 hover:bg-rose-200 text-rose-800 border-rose-300'
  }
  
  const finalClassName = cn(
    props.variant && specialClasses[props.variant],
    className
  )
  
  if (isLink) {
    return (
      <Button variant={variant} size={size} className={finalClassName} asChild>
        {linkProps.href ? (
          <a href={linkProps.href} {...buttonProps}>
            {children}
          </a>
        ) : (
          <Link to={linkProps.to} {...buttonProps}>
            {children}
          </Link>
        )}
      </Button>
    )
  }
  
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={finalClassName}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}
```

#### Phase 4: Icon Migration
```tsx
// utils/iconMigration.ts
import * as LucideIcons from "lucide-react"

const iconMap: Record<string, keyof typeof LucideIcons> = {
  'calendar': 'Calendar',
  'camera': 'Camera',
  'arrow-right': 'ArrowRight',
  'phone': 'Phone',
  'mail': 'Mail',
  'menu': 'Menu',
  'close': 'X',
  'check': 'Check',
  'chevron-down': 'ChevronDown',
  // Add more mappings as needed
}

interface IconMigrationProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const MigratedIcon: React.FC<IconMigrationProps> = ({ 
  name, 
  size = 'md',
  className 
}) => {
  const IconComponent = LucideIcons[iconMap[name]]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in migration map`)
    return null
  }
  
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }
  
  return <IconComponent className={cn(sizeClasses[size], className)} />
}

// Usage during migration
<Button variant="default">
  <MigratedIcon name="calendar" size="sm" className="mr-2" />
  Schedule Visit
</Button>
```

#### Phase 5: Automated Find & Replace
```bash
# Create migration script
# scripts/migrate-buttons.js

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const files = glob.sync('src/**/*.{tsx,jsx}')

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8')
  
  // Replace imports
  content = content.replace(
    /import CTAButton from ['"'][^'"]+CTAButton['"']/g,
    "import { Button } from '@/components/ui/button'"
  )
  
  // Replace basic usage
  content = content.replace(
    /<CTAButton variant="primary"/g,
    '<Button variant="default"'
  )
  
  content = content.replace(
    /<CTAButton variant="outline"/g,
    '<Button variant="outline"'
  )
  
  // Replace sizes
  content = content.replace(
    /size="small"/g,
    'size="sm"'
  )
  
  content = content.replace(
    /size="large"/g,
    'size="lg"'
  )
  
  fs.writeFileSync(file, content)
})
```

### Testing Strategy

#### Visual Regression Testing
```bash
# Install testing dependencies
npm install --save-dev @percy/cli @percy/playwright

# Create visual test
# tests/button-migration.spec.ts
import { test } from '@playwright/test'

test.describe('Button Migration Visual Tests', () => {
  test('Primary buttons render correctly', async ({ page }) => {
    await page.goto('/button-demo')
    
    // Test each button variant
    await page.locator('[data-testid="primary-button"]').screenshot()
    await page.locator('[data-testid="outline-button"]').screenshot()
    await page.locator('[data-testid="special-button"]').screenshot()
  })
  
  test('Button interactions work correctly', async ({ page }) => {
    await page.goto('/button-demo')
    
    // Test hover states
    await page.hover('[data-testid="primary-button"]')
    await page.screenshot()
    
    // Test focus states
    await page.focus('[data-testid="outline-button"]')
    await page.screenshot()
  })
})
```

#### Accessibility Testing
```tsx
// tests/button-accessibility.test.tsx
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from '@/components/ui/button'

expect.extend(toHaveNoViolations)

describe('Button Accessibility', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(
      <div>
        <Button variant="default">Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="default" disabled>Disabled Button</Button>
      </div>
    )
    
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
  
  test('should handle keyboard navigation', async () => {
    render(
      <div>
        <Button variant="default">First Button</Button>
        <Button variant="outline">Second Button</Button>
      </div>
    )
    
    // Test tab navigation
    const firstButton = screen.getByText('First Button')
    const secondButton = screen.getByText('Second Button')
    
    firstButton.focus()
    expect(firstButton).toHaveFocus()
    
    // Simulate tab key
    fireEvent.keyDown(firstButton, { key: 'Tab' })
    expect(secondButton).toHaveFocus()
  })
})
```

---

## Troubleshooting

### Common Migration Issues

#### Issue 1: Styling Differences
**Problem**: Buttons look different after migration
```tsx
// Problem: Lost custom styling
<Button variant="default">My Button</Button>

// Solution: Use cn() utility with custom classes
import { cn } from "@/lib/utils"

<Button 
  variant="default"
  className={cn(
    "bg-dusty-rose hover:bg-warm-walnut",
    "transition-all duration-300 ease-in-out",
    "font-body uppercase tracking-wider"
  )}
>
  My Button
</Button>
```

#### Issue 2: Link Buttons Not Working
**Problem**: Buttons with href/to props not navigating
```tsx
// Problem: Missing asChild prop
<Button variant="default" href="/gallery">View Gallery</Button>

// Solution: Use asChild pattern
<Button variant="default" asChild>
  <a href="/gallery">View Gallery</a>
</Button>

<Button variant="outline" asChild>
  <Link to="/contact">Contact Us</Link>
</Button>
```

#### Issue 3: Icon Positioning Issues
**Problem**: Icons not aligned properly
```tsx
// Problem: Inconsistent icon spacing
<Button>
  <Calendar />
  Schedule Visit
</Button>

// Solution: Use consistent spacing classes
<Button>
  <Calendar className="mr-2 h-4 w-4" />
  Schedule Visit
</Button>

<Button>
  Learn More
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

#### Issue 4: TypeScript Errors
**Problem**: Type conflicts between old and new props
```tsx
// Problem: Mixing old and new prop types
interface MyComponentProps {
  buttonVariant: 'primary' | 'outline'  // Old CTAButton variants
}

// Solution: Create proper type mapping
interface MyComponentProps {
  buttonVariant: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
}

// Or use mapped types
type CTAVariant = 'primary' | 'outline' | 'vr-special'
type ShadcnVariant = 'default' | 'outline' | 'secondary'

const variantMap: Record<CTAVariant, ShadcnVariant> = {
  primary: 'default',
  outline: 'outline',
  'vr-special': 'default'
}
```

#### Issue 5: Custom Variants Not Working
**Problem**: Special variants (vr-special, vr-barn) lost their styling
```tsx
// Problem: No equivalent shadcn variant
<Button variant="vr-special">Special Button</Button>  // Won't work

// Solution: Create custom variant classes
const customButtonVariants = cva(
  buttonVariants(),
  {
    variants: {
      customVariant: {
        'vr-special': 'bg-gradient-to-r from-amber-900 to-stone-800 hover:from-amber-800 hover:to-stone-700 text-white border-none rounded-lg',
        'vr-barn': 'bg-amber-700 hover:bg-amber-600 text-white border-amber-800 rounded-lg',
        'vr-bridal': 'bg-rose-100 hover:bg-rose-200 text-rose-800 border-rose-300 rounded-lg',
      }
    }
  }
)

// Usage
<Button className={customButtonVariants({ customVariant: 'vr-special' })}>
  Special Button
</Button>
```

### Performance Optimization

#### Bundle Size Optimization
```tsx
// Problem: Importing entire Lucide icon library
import * as Icons from "lucide-react"

// Solution: Import only needed icons
import { Calendar, Camera, ArrowRight, Phone, Mail } from "lucide-react"

// Or create icon barrel file
// components/icons/index.ts
export { Calendar, Camera, ArrowRight, Phone, Mail } from "lucide-react"

// Usage
import { Calendar } from "@/components/icons"
```

#### Code Splitting
```tsx
// Lazy load button variants for better performance
import { lazy, Suspense } from 'react'

const SpecialButton = lazy(() => import('@/components/SpecialButton'))

// Usage
<Suspense fallback={<Button variant="default">Loading...</Button>}>
  <SpecialButton variant="vr-special">
    Special Experience
  </SpecialButton>
</Suspense>
```

### Migration Validation

#### Checklist for Completed Migration
- [ ] All CTAButton imports replaced with shadcn Button
- [ ] All variant props updated to shadcn equivalents
- [ ] All size props updated (small→sm, large→lg)
- [ ] All href/to link buttons use asChild pattern
- [ ] All Icon components replaced with Lucide React
- [ ] Custom variants recreated with proper styling
- [ ] Dark mode support maintained
- [ ] Accessibility features preserved
- [ ] Visual regression tests pass
- [ ] TypeScript errors resolved
- [ ] Performance benchmarks met

#### Post-Migration Cleanup
```bash
# Remove old components
rm src/components/CTAButton.jsx
rm src/components/Icon.jsx

# Update package.json if needed
npm uninstall old-icon-library

# Clean up CSS
# Remove .romantic-button styles from globals.css

# Update documentation
# Update component library docs
# Update design system documentation
```

---

This comprehensive migration guide provides everything needed to successfully transition from CTAButton to shadcn/ui Button components while maintaining all functionality, styling, and accessibility features.